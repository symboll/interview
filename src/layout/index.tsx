import { Outlet, NavLink } from 'react-router-dom'

const Layout  = () => {
  return (
    <>
      <NavLink to="/">SASS</NavLink> | 
      {/* <NavLink to="/less">LESS</NavLink> | 
      <NavLink to="/stylus">STYLUS</NavLink> */}
      <Outlet></Outlet>
    </>
  )
}

export default Layout