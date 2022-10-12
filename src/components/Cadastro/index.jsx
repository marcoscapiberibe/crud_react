import React from "react";
import "../Cadastro/Cadastro.css";
import FormularioCadastro from "../FormularioCadastro";


const Cadastro = () => {
    return (<>
        <div className="cadastro__conteudo">
            <div className="cadastro__titulo" >
                <h1>Cadastro de usuário</h1>
            </div>
            <div className="cadastro__btn__modal">
                <FormularioCadastro />
            </div>
        </div>
    </>
    );
};

export default Cadastro;