import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    },
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    },
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    },
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    },
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    },
    {
      src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
    }
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    
    let newSlideNumber;

    if(direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } 
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber (newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close"
            onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"  onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Karlton venue 125 Mumbai</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over ₹25000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src} alt=""
                  className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Mumbai</h1>
              <p className="hotelDesc">
                This property is 6 minutes walk from the beach. Old Harbour Hotel is a 300 year old Portuguese restored mansion located in Fort Kochi, Cochin. Free WiFi access is available in the public areas of the property. The hotel offers an outdoor swimming pool and a restaurant.Each room here will provide you with air conditioning, a minibar and a seating area. There is also an electric kettle. Featuring a shower, private bathroom also comes with free toiletries and slippers.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay!</h1>
              <span>Located in the real heart of Mumbai, this property has an excellent location score of 9.3!</span>
              <h2>
                <b>₹25000</b> (7 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>

          </div>
        </div>
        <MailList />
        <Footer />
      </div>

    </div>
  )
}

export default Hotel