import React from 'react'
import Datatable from '../../components/admin/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../vendorHome/sidebar/Sidebar'
import './home.css'

function Home() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>

  )
}

export default Home