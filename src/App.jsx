import React from 'react'
import MainLayout from './layout/Main'
import { Routes,Route } from 'react-router'
import Product from './pages/Products'
import ManageP from './pages/ManageP'
import CCategory from './pages/CCategory'
import CategoryM from './pages/CategoryM'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Product/>}/>
        <Route element={<ManageP/>} path='managep'/>
        <Route element={<CCategory/>} path='ccategory'/>
        <Route element={<CategoryM/>} path='categorym'/>
      </Routes>
    </MainLayout>
  )
}

export default App