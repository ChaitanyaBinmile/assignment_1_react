import '../../App.css'
import {Left,Header,Right} from "../../utilities/export_file"


function HomeScreen() {
  return (
    <div className='appCSS'>
      <Header/>
      <div className='app_componentCSS'>
        <Left/>
        <Right/>

      </div>

    </div>
  )
}

export default HomeScreen
