
import { buttonType } from '../../utilities/type'
import {Filter} from "../../utilities/export_file"

function Button({children,variant,setText}:buttonType) {

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>):void => {
    if (setText) {
      setText(e.target.value)
    }
  }
  const clickHandler = () => {
    if (setText) {
      setText('')
    }
  }
  const keyHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && setText) {
      setText('')
    }
  }


  return (
    <div>
       { variant=='primary' ?

      <div className='b_first_div'>
      <p className='b_first_text'>{children}</p>
      </div>
      :  variant=='secondary' ?
      <button className='b_second_div' onClick={clickHandler}>
      <p className='b_second_text'>{children}</p>
      </button>:
      <div className='b_third_div'>
      <input className='b_third_text' onChange={handleChange} onKeyDown={keyHandler} type="text" value={children}  placeholder='Profession, position or company' />
      <Filter/>


</div>

}
    </div>
  )
}

export default Button
