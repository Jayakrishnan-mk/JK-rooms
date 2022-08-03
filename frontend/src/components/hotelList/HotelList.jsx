import { format } from 'date-fns';
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import Navbar from '../navbar/Navbar'
import SearchItem from '../searchItem/SearchItem';
import './hotelList.css'

function HotelList() {

  const location = useLocation();
  // eslint-disable-next-line
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
    // eslint-disable-next-line
  const [options, setOptions] = useState(location.state.options);

  const {data, loading, error , reFetch} = useFetch(`hotels?city=$destination`)

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label className='label'>Destination</label>
              <input type="text" placeholder='Mumbai' />
            </div><br />
            <div className="lsItem">
              <label className='label'>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate &&
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />}
            </div>
            <br />
            <div className="lsItem">
              <label className='label'>Options</label>

              <div className="lsOptions">

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult <small>per night</small></span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children <small>per night</small></span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room <small>per night</small></span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>

            <button>Search</button>

          </div>
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item => (

            <SearchItem item={item} key={item._id} />
            ))}
            </>}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList