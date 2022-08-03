import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import LandingNavbar from "../../components/landingNavbar/LandingNavbar"
import MailList from "../../components/mailList/MailList"
import PropertyList from "../../components/propertyList/PropertyList"
import RoomSearch from "../../components/roomSearch/RoomSearch"
import "./landing.css"

function Landing() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  return (
    <div className="home" >
      <LandingNavbar />
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

export default Landing

