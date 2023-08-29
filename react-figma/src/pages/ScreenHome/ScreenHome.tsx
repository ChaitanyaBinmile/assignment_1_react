import '../../App.css'
import {LeftComponent,ComponentHeader,RightComponent} from "../../components/index"


function ScreenHome() {
  return (
    <div className='appCSS'>
      <ComponentHeader/>
      <div className='app_componentCSS'>
        <LeftComponent/>
        <RightComponent/>

      </div>

    </div>
  )
}

export default ScreenHome
