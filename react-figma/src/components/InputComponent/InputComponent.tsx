
import { buttonType } from '../../utilities/type';
import {IconImg} from "../../assets/index";

function InputComponent({variant,children}:buttonType) {

  console.log(variant,);
  
  return (
    <div>
            <div className='input'>
            <input className='bg-white text-black outline-none'  type="text" value={children}  placeholder='Profession, position or company' />
            <IconImg/>


   </div>

    </div>
  )
}

export default InputComponent
