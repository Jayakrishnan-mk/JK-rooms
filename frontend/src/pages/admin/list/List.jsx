import "./list.scss"
import Sidebar from "../../../components/admin/sidebar/Sidebar"
import Navbar from "../../../components/admin/navbar/Navbar"
import Datatable from "../../../components/admin/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List