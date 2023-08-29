
import { buttonType } from '../../utilities/type'
import {keyvalue} from "../../components/index"
import {FilterIcon} from "../../assets"

function ComponentButton({children,variant,setText}:buttonType) {

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>):void => {
    if (setText) {
      setText(e.target.value)
    }
  }
  const handleInputClick = () => {
    if (setText) {
      setText('')
    }
  }
  const handleInputKey = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === keyvalue && setText) {
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
      <button className='b_second_div' onClick={handleInputClick}>
      <p className='b_second_text'>{children}</p>
      </button>:
      <div className='b_third_div'>
      <input className='b_third_text' onChange={handleInputChange} onKeyDown={handleInputKey} type="text" value={children}  placeholder='Profession, position or company' />
      <FilterIcon/>


</div>

}
    </div>
  )
}

export default ComponentButton
