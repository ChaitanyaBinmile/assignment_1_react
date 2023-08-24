
import { buttonType } from './type'
// import Input from './Input'


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

      <div className='bg-white rounded-full px-[25px] py-[8px] w-fit h-fit border-black border-2 border-solid'>
      <p className='text-black'>{children}</p>
      </div>
      :  variant=='secondary' ?
      <button className=' bg-[#D6001C] rounded-full px-[25px] py-[8px] w-fit h-fit ' onClick={clickHandler}>
      <p className='text-white'>{children}</p>
      </button>:
      <div className='flex items-center bg-white rounded-full px-[25px] py-[8px] w-fit h-fit border-black border-2 border-solid'>
      <input className='bg-white text-black outline-none' onChange={handleChange} onKeyDown={keyHandler} type="text" value={children}  placeholder='Profession, position or company' />
        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon">
        <g id="Group 8">
        <path id="Line 2" d="M8.27274 12.3636H21.3636" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
        <path id="Line 3" d="M1.72726 3.63635L21.3636 3.63635" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
        <circle id="Ellipse 12" cx="12.6364" cy="3.63636" r="2.63636" fill="white" stroke="#767676" stroke-width="2"/>
        <circle id="Ellipse 13" cx="4.63636" cy="12.3637" r="2.63636" fill="white" stroke="#767676" stroke-width="2"/>
        </g>
        </g>
        </svg>


</div>
      // <Input variant={'grey'} children={children} onChange={onChange} method={method} ></Input>
}
    </div>
  )
}

export default Button
