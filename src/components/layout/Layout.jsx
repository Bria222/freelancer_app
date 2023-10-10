import { Outlet } from 'react-router-dom'
import Sidebar from '../Navigation/Sidebar'
import Top from '../Navigation/Top'
import { useState } from 'react'

const BarLayout = () => {
  const [menuVisible, setMenuVisible] = useState(false)
  const handleButtonClick = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible)
  }
  return (
    <div className='mydiv'>
      <Top onButtonClick={handleButtonClick} />
      <Sidebar menuVisible={menuVisible} />
      <Outlet />
    </div>
  )
}

export default BarLayout
