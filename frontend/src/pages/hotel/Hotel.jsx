import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Reserve from '../../components/reserve/Reserve'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import './hotel.css'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////
const Hotel = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const id = location.pathname.split("/")[2];
  // console.log('ithanu', id);

  const [slideNumber, setSlideNumber] = useState(0);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line
  const { data, loading, error } = useFetch(`api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // console.log('daysss', dayDifference(dates[0]?.startDate, dates[0]?.endDate));

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);


  // const photos = [
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   },
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   },
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   },
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   },
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   },
  //   {
  //     src: "https://static.leonardo-hotels.com/image/RCTWN_LHBU_01_Jul19_4000X2600_2048x1365_desktop_2.jpeg"
  //   }
  // ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {

    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }

  const handleClick = () => {

    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    else {
      setOpenModal(true);
    }
  }

  return (
    <div>
      <Navbar />
      {loading ? ("loading") :
        (
          <div className="hotelContainer">
            {open &&
              <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close"
                  onClick={() => setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                <div className="sliderWrapper">
                  <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
              </div>}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance}m from center
              </span>
              <span className="hotelPriceHighLight">
                Book a stay over ₹{data.cheapestPrice} at this property and get a free airport taxi
              </span>
              <div className="hotelImages">
                {data.photos?.map((photo, i) => (
                  <div className='hotelImgWrapper'>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo} alt=""
                      className="hotelImg" />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">
                    {data.desc}
                  </p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>Located in the real heart of Mumbai, this property has an excellent location score of 9.3!</span>
                  <h2>
                    <b>₹{days * data.cheapestPrice * options.room}</b> ({days}{" "} nights)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>

              </div>
            </div>
            <MailList />
            <Footer />
          </div>
        )}
        {openModal && <Reserve setOpen = {setOpenModal} hotelId = {id} />}

    </div>
  )
}

export default Hotel