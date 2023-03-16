import React from 'react'
import Navhome from './Navhome'
import Footer from './Footer'
function Layout({children}) {
  return (
    <div>
    <Navhome />
     {children}
     <Footer />
    </div>
  )
}

export default Layout
