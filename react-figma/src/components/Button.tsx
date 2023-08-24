
import { buttonType } from './type'
import Input from './Input'


function Button({children,variant}:buttonType) {
  return (
    <div>
       { variant=='primary' ?

      <div className='bg-white rounded-full px-[25px] py-[8px] w-fit h-fit border-black border-2 border-solid'>
      <p className='text-black'>{children}</p>
      </div>
      :  variant=='secondary' ?
      <div className=' bg-[#D6001C] rounded-full px-[25px] py-[8px] w-fit h-fit '>
      <p className='text-white'>{children}</p>
      </div>:
      <Input></Input>
}
    </div>
  )
}

export default Button
