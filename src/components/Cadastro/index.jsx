import React, { useState, useEffect } from "react";
import "../Cadastro/Cadastro.css";
import FormularioCadastro from "../FormularioCadastro";
import Imagem__Cadastro from "../../assets/images/cadastro2.svg";
import fireDb from '../../database/firebase';



const Cadastro = () => {

    let [dadosUsuario, setDadosUsuario] = useState({})

    let [idAtual, setIdAtual] = useState('')

    //lista
    useEffect(() => {
        fireDb.child('usuarios').on('value', dbPrint => {
            if (dbPrint.val() != null) {
                setDadosUsuario({
                    ...dbPrint.val()
                })
            } else {
                setDadosUsuario({})
            }
        })
    }, [])

    //salvar e atualizar
    const addCadastro = obj => {

        if (idAtual === '') {

            fireDb.child('usuarios').push(  // Adicionar cadastro
                obj,
                err => {
                    if (err) {
                        console.log(err)
                    } else {
                        setIdAtual('')
                    }
                }
            )
        } else {
            fireDb.child(`usuarios/${idAtual}`).set(  // Editar cadastro
                obj,
                err => {
                    if (err)
                        console.log(err)
                }
            )
        }
    }

    const onDelete = key => {
        if (window.confirm('Deseja realmente apagar o cadastro?')) {
            fireDb.child(`usuarios/${key}`).remove(  // Apagar cadastro
                err => {
                    if (err)
                        console.log(err)
                }
            )
        }
    }
    

    return (<>
        <div className="cadastro__principal">
            <div className="cadastro__conteudo">
                <div className="cadastro__titulo" >
                    <h1>Cadastro de usuário</h1>
                    <img src={Imagem__Cadastro} className="imagem__cadastro" alt="" />
                </div>
                <div className="cadastro__btn__modal">
                    <FormularioCadastro {...({ addCadastro, idAtual, dadosUsuario })} />
                </div>
            </div>
            <div className="cadastro__principal__conteudo">
                <div className="col-md-10">
                    <table className="table table-sm table-borderless table-stripped">
                        <thead className="thead-light form__list">
                            <tr>
                                <th scope="col"> Nome Completo </th>
                                <th scope="col"> E-mail </th>
                                <th scope="col"> Data de Nascimento </th>
                                <th scope="col"> Editar / Apagar </th>
                            </tr>
                        </thead>
                        <tbody className="form__list__item">
                            {
                                Object.keys(dadosUsuario).map(id => {
                                    return <tr key={id}>
                                        <td> {dadosUsuario[id].fullName} </td>
                                        <td> {dadosUsuario[id].email} </td>
                                        <td> {dadosUsuario[id].birthday} </td>

                                        <td className="btn__pencil__erase">
                                            <a className="btn btn__pencil__icon" onClick={() => { setIdAtual(id) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn btn-danger btn__erase__icon" onClick={() => onDelete(id)}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    );
};

export default Cadastro;