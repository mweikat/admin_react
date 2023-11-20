import { useForm } from 'react-hook-form';
import { Link, Navigate } from "react-router-dom";
import { AuthLayout } from "../layout/authLayout";
import { InputEmail,InputPaswordLogin } from '../../commons/formsComponents';
import { useAuth } from '../authProvider';
import AuthService from '../../services/auth.service';
import { AxiosError } from 'axios';
import LoginModel from '../../models/login';
import { useState } from 'react';
import { ErrorMsg } from '../../commons/msg/errorMsg';



export const Login = () => {

    const{ register, handleSubmit, formState:{errors}} = useForm();
    const auth = useAuth();
    const [loginError,setLoginError] = useState('');

    if(auth.isAuthenticated)
        return <Navigate to={"/admin"}/>

    const onSubmit = handleSubmit((data)=>{
        
        const loginModel = {} as LoginModel;
        loginModel.email = data.email;
        loginModel.password = data.password;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        AuthService.login(loginModel).then((response: JSON|any) => {
           //console.log(response.data);
            localStorage.setItem('access_token',response.data.token);
            auth.changeLoggedIn();

          }).catch((err: Error) => {
            if (err instanceof AxiosError) {
                //console.log(err);
                //errorLogin.changeMsg("err.response?.data");
                setLoginError(err.response?.data.message);   
              } 
        });
        
    });

    return (
        <AuthLayout>
            <form onSubmit={onSubmit}>
                <div className="text-center"></div>
                <div className="card card-body">
                    <h3 className="text-center">Inicia Sesi&oacute;n</h3>
                    <div className='mb-3'>
                        <InputEmail name="email" register={register} required={true} error={errors.email?.message?.toString()} placeholder='Ingrese su correo electrónico'></InputEmail>
                    </div>
                    <div className="mb-3">
                        <InputPaswordLogin name='password' register={register} required={true} error={errors.password?.message?.toString()} placeholder='ingrese su contraseña'/>
                    </div>
                    <ErrorMsg error={loginError}/>
                    <div className="mb-3">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="submit"  >Iniciar Sesi&oacute;n</button>
                        </div>
                        <div className="mt-3">
                            <div className="text-center">
                            <Link to="/auth/reset-password" >Olvid&oacute; su contrase&ntilde;a?</Link>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-3">
                        <div className='text-center'>
                            &oacute;
                        </div>
                        <div className="text-center">
                        <Link to="/auth/register" className="text-primary" >Registrese</Link>
                        </div>
                    </div>

                </div>
            </form>
        </AuthLayout>
        )
};