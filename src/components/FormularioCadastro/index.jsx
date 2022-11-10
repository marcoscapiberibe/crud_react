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
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            <label className="form__label">Nome Completo:</label>
            <div className="form-group input-group">
                <input className="form-control  input__group__resize" placeholder="Nome Completo" name="fullName" value={values.fullName}
                    onChange={manipuladorInputChange} />
            </div>
            <label className="form__label">E-mail:</label>
            <div className="form-group input-group">
                <input className="form-control  input__group__resize" placeholder="E-mail" name="email" value={values.email} onChange={manipuladorInputChange} />
            </div>
            <label className="form__label">Data de Nascimento:</label>
            <div className="form-group input-group">
                <input type="date" className="form-control  input__group__resize" id="input-date" placeholder="Data de nascimento" name="birthday" value={values.birthday} onChange={manipuladorInputChange} />
            </div>
            <div className="form-group mt-2">
                <input type="submit" value={props.idAtual === '' ? "Adicionar novo usuário" : "Atualizar cadastro do usuário"} className="btn btn-block button__add" />
            </div>
        </form>
    </>
    );
};

export default FormularioCadastro;
