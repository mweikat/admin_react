import { useForm } from "react-hook-form"
import { InputPasword,InputPaswordConfirm } from "../../../commons/formsComponents"

export const ChangePass = () => {

    const{ register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
    });

    return (<>
    <div className="col-md-4">
        <h4>Cambiar Contraseña</h4>
    </div>
    <div className="col-md-4">
        <div className="card">
            <div className="card-body">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#changePassModal">Cambiar contraseña</button>
            </div>
        </div>
    </div>

<div className="modal fade" id="changePassModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Cambiar Contraseña</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="formNameInput" className="form-label">Contraseña Actual</label>
                <InputPasword name="name" register={register} error={errors.name?.message?.toString()} maxlength={20} placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="formLastNameInput" className="form-label">Nueva Contraseña</label>
                <InputPasword name="lastName" register={register} error={errors.lastName?.message?.toString()} maxlength={20} placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="formLastNameInput" className="form-label">Confimra Nueva Contraseña</label>
                <InputPaswordConfirm name="email" register={register} required={true} error={errors.email?.message?.toString()} placeholder="" />
            </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
    </>)
}