import Line from '../../../assets/Line4.png';

function MobileMenu(){
  return (
    <div className='flex gap-[20px]  lg:hidden'>
        <p className='text-black font-[18px] w-[40px]' > Menu</p> 
        <div className="flex flex-col gap-[4px] w-[30px]"> 
            <img  src={Line} alt="" />
            <img src={Line} alt="" />
            <img src={Line} alt="" />
        </div>
    </div>
  )
}

export default MobileMenu
