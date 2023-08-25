
import { useState } from 'react'
import Button from '../buttonComponent/Button'

function Left() {
  const [text,setText]=useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setText(e.target.value)}


 
  return (
    <div className='flex flex-col gap-[50px] items-start pl-[10px] '>
        <h1 className='text-black text-[59px] text-left font-semibold '>
            Head Hunter
        </h1>
        <p className='text-[#676767] text-[32px] font-normal'>
            Job for everyone
        </p>
        
        <div className='flex gap-5 w-fit '>
            <Button children={text} variant='grey' onChange={handleChange} setText={setText} />
            <Button children='Find a job' variant='secondary' setText={setText} />
        </div>

    </div>
  )
}

export default Left
