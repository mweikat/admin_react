import { ChangeEvent, useState } from "react";
import { inputProps } from "./interfaceInput";
import { ReplaceAll,InsertString } from "../../commons/utils";

export const InputRut = (props:inputProps) => {

  const [valueRut,setValueRut] = useState<string|number|readonly string[]|undefined>(props.value);

  const formatRut = (event) => {

      
      if(event.target.value!=undefined&& event.target.value!=null && event.target.value!=""){

          const aux = (event.target.value).replaceAll(".","").replace("-","").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, '$1.$2.$3-$4');
          setValueRut(aux);

      }
  }

  const Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto:string) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
      const tmp 	= rutCompleto.split('-');
      const rut 	= tmp[0];
      let digv	= tmp[1]; 
      if ( digv == 'K' ) digv = 'k' ;
      return (Fn.dv(+rut) == digv );
    },
    dv : function(T:number){
      let M=0,S=1;
      for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
      return S?S-1:'k';
    }
  }

  const isEven = async (valueRut: string) => {

    let rutSinPuntos = await ReplaceAll(valueRut,'.','');
    if(!rutSinPuntos.includes("-")){
      rutSinPuntos = InsertString(rutSinPuntos,rutSinPuntos.length-1,'-');
    }
    return Fn.validaRut(rutSinPuntos) || "Ingresa un rut válido";
        
  };

  const inputChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueRut(event.target.value);
  }

   return (<>
    <input
          id={props.id}
          type="text"
          className={props.newClass?props.newClass:"form-control"}
          placeholder={props.placeholder}
          maxLength={15}
          readOnly={props.readonly}
          value={valueRut}
          
          {...props.register(props.name,
            {
              required:{
                value: true, 
                message:"Este campo es requerido."
              },
              validate: (event)=>isEven(event),
              onChange:(event)=>inputChangedHandler(event),
              onBlur:(event)=>formatRut(event)
             
            })
          }
        
        />
        {
           props.error && <div className='mt-1 text-error'>{props.error}</div>
        }
  </>)
}