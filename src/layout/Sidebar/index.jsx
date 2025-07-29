import React from 'react'
import { SidebarWrapper,Word } from './Sidebar.style'
import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <SidebarWrapper>
        <Word>Admin Dashboard</Word>
        <NavLink to='/'><p>Create product</p></NavLink>
        <NavLink to='/managep'><p>Manage product</p></NavLink>
        <NavLink to='ccategory'><p>Create category</p></NavLink>
        <NavLink to='categorym'><p>Manage category</p></NavLink>
    </SidebarWrapper>
  )
}

export default Sidebar