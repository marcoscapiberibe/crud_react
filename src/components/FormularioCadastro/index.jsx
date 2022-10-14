import React, { useState, useEffect } from "react";
import "../FormularioCadastro/FormularioCadastro.css";


const FormularioCadastro = (props) => {

    const camposIniciaisDeValores = {
        fullName: '',
        email: '',
        birthday: ''
    }

    let [values, setValues] = useState(camposIniciaisDeValores)

    useEffect(() => {
        if (props.idAtual === '') {
            setValues({
                ...camposIniciaisDeValores
            })
        } else {
            setValues({
                ...props.dadosUsuario[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosUsuario])


    const manipuladorInputChange = e => {
        let { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const manipuladorFormEnvio = e => {
        // e.preventDefault()
        props.addCadastro(values)
    }




    return (<>

        <button type="button" className="btn button__add" data-bs-toggle="modal" data-bs-target="#add__modal" data-bs-whatever="@getbootstrap">Adicionar novo usuário</button>

        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
        <div className="modal fade" id="add__modal" tabIndex="-1" aria-labelledby="add__modal__label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add__modal__label">Cadastrar usuário</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                        <div>
                            <div className="mb-3">
                                <label className="col-form-label">Nome:</label>
                                <input className="form-control" id="input-name" placeholder="Nome Completo" name="fullName" value={values.fullName}
                                    onChange={manipuladorInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email:</label>
                                <input type="email" className="form-control" id="input-email" placeholder="E-mail" name="email" value={values.email} onChange={manipuladorInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Data de Nascimento:</label>
                                <input type="date" className="form-control" id="input-date" placeholder="Data de nascimento" name="birthday" value={values.birthday} onChange={manipuladorInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        {/* <button type="button" className="btn btn-primary">Salvar</button> */}

                        <div className="form-group mt-2">
                            {/* <input type="submit" value={props.idAtual == '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" /> */}
                            {/* <input type="submit" value="Salvar" className="btn btn-primary btn-block" /> */}
                            <input type="submit" value={props.idAtual === '' ? "Salvar" : "Atualizar"} className="btn btn-primary btn-block" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </form>

    </>
    );
};

export default FormularioCadastro;




