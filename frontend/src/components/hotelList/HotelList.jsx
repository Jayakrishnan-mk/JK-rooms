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
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
    // eslint-disable-next-line
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined); 
  const [max, setMax] = useState(undefined);
// eslint-disable-next-line
  const {data, loading, error , reFetch} = useFetch(
    `/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

    console.log('ddaaddaa', dates);

  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label className='label'>Destination</label>
              <input type="text" onChange={e=>setDestination(e.target.value)} placeholder={destination} />
            </div><br />
            <div className="lsItem">
              <label className='label'>Check-in Date</label>
              <span  placeholder={dates} onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate &&
                <DateRange
                  onChange={item => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />}
            </div>
            <br />
            <div className="lsItem">
              <label className='label'>Options</label>

              <div className="lsOptions">

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small></span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small></span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>

            <button onClick={handleClick}>Search</button>

          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
              ) :  (
              <>
            { data.map(item => (
            <SearchItem dates={dates} item={item} key={item._id} />
            ))}
            </>
            )}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList