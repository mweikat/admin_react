import { useForm } from "react-hook-form";
import { InputEmail } from "../../commons/formsComponents";
import AuthService from '../../services/auth.service';
import { AuthLayout } from "../layout/authLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { ErrorMsg } from "../../commons/msg/errorMsg";
import { SuccessMsg } from "../../commons/msg/successMsg";

export const  ResetPassword = ()=> {

    const{ register, handleSubmit, formState:{errors}} = useForm();

    const [loginError,setLoginError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
 
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        AuthService.resetPassEmail(data.email).then((response: JSON|any) => {
            
            setSuccessMsg(response);

           }).catch((err: Error) => {
             if (err instanceof AxiosError) {
                 //console.log(err);
                 //errorLogin.changeMsg("err.response?.data");
                 setLoginError(err.response?.data.message);   
               } 
         });
    });

    return <AuthLayout>
        <form onSubmit={onSubmit}>
        <div className="card card-body">
            <h3>¿Has olvidado tu contraseña?</h3>
           <p className="mt-4">¡No te preocupes! Es señal de que tienes cosas más importantes en la cabeza.</p>

           <p>Te recomendamos que elijas una contraseña segura e incluso que uses un gestor de contraseñas como hacemos nosotros.</p>

           <p className="mb-4">Indícanos el correo electrónico que usaste para abrir tu cuenta y te ayudaremos con los siguientes pasos.</p>

            <div className='mb-3'>
                <InputEmail name="email" register={register} required={true} error={errors.email?.message?.toString()} placeholder='Ingrese su correo electrónico'></InputEmail>
            </div>
            <SuccessMsg msg={successMsg}/>
            <ErrorMsg error={loginError}/>
            <div className="mb-3">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Enviar email</button>
                </div>
                <div className="mt-3">
                    <div className="text-center">
                    <Link to="/auth/login" >Volver al login</Link>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </AuthLayout>
};
