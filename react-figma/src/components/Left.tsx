

import Button from './Button'

function Left() {


  return (
    <div className='flex flex-col gap-[50px] items-start pl-[10px] '>
        <h1 className='text-black text-[59px] font-semibold justify-start content-start'>
            Head Hunter
        </h1>
        <p className='text-[#676767] text-[32px] font-normal'>
            Job for everyone
        </p>
        
        <div className='flex gap-5 w-fit '>
            <Button children='Profession,position or company' variant='grey' />
            <Button children='Find a job'  variant='secondary'  />
        </div>

    </div>
  )
}

export default Left
