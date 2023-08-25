
import {Icon,Button,MobileMenu} from "../../utilities/export_file";


function Header() {
  return (
    <div className='header' >
      <Icon/>

      <MobileMenu/>

      <div className='hidden gap-5 lg:flex'>
        <Button children='Create a resume' variant='primary' />
        <Button children='Sign In'  variant='secondary' />
      </div>
      
    </div>

  )
}

export default Header
