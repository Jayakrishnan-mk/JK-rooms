import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import NavbarHome from "../../components/navbarHome/NavbarHome"
import PropertyList from "../../components/propertyList/PropertyList"
import RoomSearch from "../../components/roomSearch/RoomSearch"
import "./home.css"

function Home() {

  const navigate = useNavigate();
  useEffect(() => {
    // console.log('home useeffect');
    if (!localStorage.getItem('token')) {
      navigate('/landing')
    }
  }, [])

  return (
    <div className="home" id='overlay'>
      <NavbarHome />
      <RoomSearch />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList /><br /><br /><br /><br />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>

    </div>
  )
}

export default Home

