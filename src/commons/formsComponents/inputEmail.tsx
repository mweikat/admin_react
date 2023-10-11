import { inputProps } from "./InterfaceInput";

export const InputEmail = (props:inputProps) => {

  let requiredField:boolean = false;

  if(props.required)
    requiredField=true;

  return (
    <>
      <input
        id={props.id}
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        {...props.register(props.name,
          {
            required:{
              value: requiredField, 
              message:"Este campo es requerido."
            },
            minLength:{
              value: 8,
              message:"Favor ingrese un email válido."
            },
            maxLength:{
              value:30,
              message:"El largo del email supera el máximo permitido."
            },
            pattern:{
              value:/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
              message:"Favor ingrese un email válido."
            }
          })
        }
      />
      {
        props.error && <div className='mt-1 error-msg'>{props.error}</div>
      }
    </>
  )
}