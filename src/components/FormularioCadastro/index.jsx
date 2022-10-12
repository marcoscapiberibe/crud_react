import React from "react";
import { Button } from "bootstrap";


const FormularioCadastro = () => {
    return (<>
        <h1>Formulario Cadastro</h1>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add__modal" data-bs-whatever="@getbootstrap">Adicionar novo usuário</button>

        <div className="modal fade" id="add__modal" tabindex="-1" aria-labelledby="add__modal__label" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add__modal__label">Cadastrar usuário</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label for="input-name" className="col-form-label">Nome:</label>
                                <input type="text" className="form-control" id="input-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="input-email" className="col-form-label">Email:</label>
                                <input type="email" className="form-control" id="input-email"/>
                            </div>
                            <div className="mb-3">
                                <label for="input-date" className="col-form-label">Data de Nascimento:</label>
                                <input type="date" className="form-control" id="input-date"/>
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




