import React, { useState } from "react";
import "../FormularioCadastro/FormularioCadastro.css";


const FormularioCadastro = () => {


    //Variáveis para capturar os dados
    const camposIniciaisDeValores = {
        nomeCompleto: "",
        email: "",
        dataNascimento: "",
    };

    let { values, setValues } = useState(camposIniciaisDeValores);

    const inputChange = e => {
        let { nomeCompleto, value} = e.target;

        setValues({
            ...values,
            [nomeCompleto]: value
        });
    };




    return (<>

        <button type="button" className="btn button__add" data-bs-toggle="modal" data-bs-target="#add__modal" data-bs-whatever="@getbootstrap">Adicionar novo usuário</button>

        <div className="modal fade" id="add__modal" tabIndex="-1" aria-labelledby="add__modal__label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add__modal__label">Cadastrar usuário</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">                               

                                {/* Verificar depois */}

                                {/* <div className="place__input">
                                    <div className="form-group input-group col-md-6">
                                        <div className="input-grou-prepend">
                                            <div className="input-group-text">
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                        </div>
                                    </div> */}
                                    <label className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="input-name" placeholder="Nome completo" name="nomeCompleto" value={values.nomeCompleto} onChange={inputChange}></input>
                                {/* </div> */}

                            </div>
                            <div className="mb-3">
                                {/* <i className="fa-solid fa-envelope"></i> */}
                                <label className="col-form-label">Email:</label>
                                <input type="email" className="form-control" id="input-email" placeholder="Email" name="email" value={values.email} onChange={inputChange}/>
                            </div>
                            <div className="mb-3">
                                {/* <i class="fa-solid fa-cake-candles"></i> */}
                                <label className="col-form-label"> Data de Nascimento:</label>
                                <input type="date" className="form-control" id="input-date" placeholder="Data de Nascimento" name="dataNascimento" value={values.dataNascimento} onChange={inputChange}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
};

export default FormularioCadastro;




