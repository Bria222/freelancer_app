import { Outlet } from 'react-router-dom'

import Top from '../Navigation/Top'

const BarLayout = () => {
  return (
    <div className='mydiv'>
      <Top />
      {/* <Sidebar menuVisible={menuVisible} /> */}

      <Outlet />
    </div>
  )
}

export default BarLayout
