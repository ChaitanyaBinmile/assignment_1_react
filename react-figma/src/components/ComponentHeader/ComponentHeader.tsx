
import {IconComponent,ComponentButton,MobileMenuComponent} from "../../components/index";


function ComponentHeader() {
  return (
    <div className='header' >
      <IconComponent/>

      <MobileMenuComponent/>

      <div className='hidden gap-5 lg:flex'>
        <ComponentButton children='Create a resume' variant='primary' />
        <ComponentButton children='Sign In'  variant='secondary' />
      </div>
      
    </div>

  )
}

export default ComponentHeader
