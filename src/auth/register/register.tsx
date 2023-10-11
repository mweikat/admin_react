import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import '../auth.css';
import UserModel from "../../Models/User";
import { AxiosError } from "axios";
import { useState } from "react";
import { InputGeneric } from "../../commons/formsComponents/InputGeneric";
import { InputPaswordConfirm } from "../../commons/formsComponents/inputPasswordConfirm";
import AuthService from "../../services/auth.service";

import { useAuth } from "../authProvider";
import { AuthLayout } from "../layout/authLayout";
import { InputEmail } from "../../commons/formsComponents/inputEmail";
import { InputPasword } from "../../commons/formsComponents/inputPasswordLogin";
import { ErrorMsg } from "../../commons/msg/errorMsg";
import { SuccessMsg } from "../../commons/msg/successMsg";

export const  Register = ()=> {

    const{ register, handleSubmit, formState:{errors},watch} = useForm();
    const auth = useAuth();
    const [errorMessage,setErrorMessage] = useState("");
    const [okMessage,setOkMessage] = useState("");

    if(auth.isAuthenticated)
        return <Navigate to={"/home"}/>

    const onSubmit = handleSubmit((data)=>{

        const user = {} as UserModel;

        user.name = data.name;
        user.lastName = data.lastName;
        user.email = data.email;
        user.password = data.password;

        AuthService.create(user).
        then((response: unknown) => {
            //console.log(response);
            if(response!=undefined)
                setOkMessage(response.data);
          })
          .catch((err: Error) => {
            
            if (err instanceof AxiosError) {
                setErrorMessage(err.response?.data.message);
              } 
            
          });
    });

    return (
<AuthLayout>
    <form onSubmit={onSubmit}>
        <div className="text-center"></div>
        <div className="card card-body">
            <h3 className="text-center">Registrese</h3>
            <div className="mb-3">
                <InputGeneric name="name" register={register} error={errors.name?.message?.toString()} minlength={3} maxlength={20} placeholder="Nombre" required={true}/>
            </div>
            <div className="mb-3">
                <InputGeneric name="lastName" register={register} error={errors.lastName?.message?.toString()} maxlength={20} placeholder="Apellido"/>
            </div>
            <div className="mb-3">
                <InputEmail name="email" register={register} required={true} error={errors.email?.message?.toString()} placeholder='Ingrese su correo electrónico'/>
            </div>
            <div className="mb-3">
                <InputPasword name="password" register={register} required={true} error={errors.password?.message?.toString()} placeholder='Ingrese su contraseña' minlength={6} maxlength={12}/>
            </div>
                <InputPaswordConfirm name="confirm" register={register} required={true} error={errors.confirm?.message?.toString()} placeholder="Repita su contraseña" stringData={watch("password")} minlength={6} maxlength={12} />
          
            <SuccessMsg msg={okMessage}></SuccessMsg>
            <ErrorMsg error={errorMessage}></ErrorMsg>
            <div className="mb-3">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Registrarse</button>
                </div>
            </div>
            <hr/>
            <div className="mb-3">
                <div className="text-center">
                    &oacute;
                </div>
                <div className="text-center">
                    <Link to="/login" className="text-primary" >Inicie Sesi&oacute;n</Link>
                </div>
            </div>

        </div>
    </form>
</AuthLayout>
    );
}