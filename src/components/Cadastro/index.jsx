import React from "react";
import "../Cadastro/Cadastro.css";
import FormularioCadastro from "../FormularioCadastro";
import Imagem__Cadastro from "../../assets/images/cadastro2.svg";


const Cadastro = () => {
    return (<>
        <div className="cadastro__conteudo">
            <div className="cadastro__titulo" >
                <h1>Cadastro de usuário</h1>
                <img src={Imagem__Cadastro} className="imagem__cadastro" alt="" />
            </div>
            <div className="cadastro__btn__modal">
                <FormularioCadastro />
            </div>
        </div>
    </>
    );
};

export default Cadastro;