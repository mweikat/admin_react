import { useForm } from "react-hook-form";
import { InputEmail, InputGeneric } from "../../../commons/formsComponents"
//import UserService from "../../../services/userService";
import UserModel from "../../../models/user";

interface FormProps{
    user: UserModel;
}

export const UserForm = ({user}:FormProps) => {

    const{ register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
    });

    return (<>
    <div className="col-md-4">
        <h4>Informaci&oacute;n de la cuenta</h4>
    </div>
    <div className="col-md-4">
        <div className="card">
            <form onSubmit={onSubmit}>
                <div className="card-body">    
                        <div className="mb-3">
                            <label htmlFor="formNameInput" className="form-label">Nombre</label>
                            <InputGeneric name="name" register={register} error={errors.name?.message?.toString()} maxlength={20} placeholder="Nombre" value={user?.name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formLastNameInput" className="form-label">Apellido</label>
                            <InputGeneric name="lastName" register={register} error={errors.lastName?.message?.toString()} maxlength={20} placeholder="Apellido" value={user?.lastName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formLastNameInput" className="form-label">Apellido</label>
                            <InputEmail name="email" register={register} required={true} error={errors.email?.message?.toString()} placeholder='Ingrese su correo electrónico' readonly={true} value={user?.email}/>
                        </div>
                </div>
                <div className="card-footer text-center">
                    <button type="button" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
    </>)
}