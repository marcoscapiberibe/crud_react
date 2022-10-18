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
            <div className="form-group input-group">
                {/* <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div> */}
                <input className="form-control  input__group__resize" placeholder="Nome Completo" name="fullName" value={values.fullName}
                    onChange={manipuladorInputChange} />
            </div>


            <div className="form-group input-group">
                {/* <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                    </div>
                </div> */}
                <input className="form-control  input__group__resize" placeholder="E-mail" name="email" value={values.email} onChange={manipuladorInputChange} />
            </div>

            <div className="form-group input-group">
                {/* <div className="input-group-prepend">
                    <div className="input-group-text">
 
                    </div>
                </div> */}
                <input type="date" className="form-control  input__group__resize" id="date" placeholder="Data de nascimento" name="birthday" value={values.birthday} onChange={manipuladorInputChange} />
            </div>

            <div className="form-group mt-2">
                <input type="submit" value={props.idAtual === '' ? "Adicionar novo usuário" : "Atualizar cadastro do usuário"} className="btn btn-block button__add" />
            </div>
        </form>


    </>
    );
};

export default FormularioCadastro;




