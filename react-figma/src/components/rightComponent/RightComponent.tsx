import img from "../../assets/desktop.png"
import mobImage from "../../assets/mobile.png"

function Right() {
  return (
    <div className='overflow-hidden'>
      <img className='hidden overflow-hidden lg:block' src={img} alt="" />
      <img className='block lg:hidden' src={mobImage} alt="" />
    </div>
  )
}

export default Right
