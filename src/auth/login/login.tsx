import { useForm } from 'react-hook-form';
import { Link, Navigate } from "react-router-dom";
import { AuthLayout } from "../layout/authLayout";
import { InputEmail } from '../../commons/formsComponents/inputEmail';
import { InputPasword } from '../../commons/formsComponents/inputPasswordLogin';
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
        return <Navigate to={"/home"}/>

    const onSubmit = handleSubmit((data)=>{
        
        const loginModel = {} as LoginModel;
        loginModel.email = data.email;
        loginModel.password = data.password;

        AuthService.login(loginModel).then((response: unknown) => {
            
            localStorage.setItem('access_token',JSON.stringify(response));
            auth.changeLoggedIn();

          }).catch((err: Error) => {
            if (err instanceof AxiosError) {
                //console.log(err);
                //errorLogin.changeMsg("err.response?.data");
                setLoginError(err.response?.data);   
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
                        <InputPasword name='password' register={register} required={true} error={errors.password?.message?.toString()} placeholder='ingrese su contraseña'/>
                    </div>
                    <ErrorMsg error={loginError}/>
                    <div className="mb-3">
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="submit"  >Iniciar Sesi&oacute;n</button>
                        </div>
                        <div className="mt-3">
                            <div className="text-center">
                            <Link to={''} className="forGetText">Olvid&oacute; su contrase&ntilde;a?</Link>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-3">
                        <div className='text-center'>
                            &oacute;
                        </div>
                        <div className="text-center">
                        <Link to="/register" className="text-primary" >Registrese</Link>
                        </div>
                    </div>

                </div>
            </form>
        </AuthLayout>
        )
};