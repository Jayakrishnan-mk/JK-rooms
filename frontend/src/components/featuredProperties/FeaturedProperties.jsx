import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

function FeaturedProperties() {
    // eslint-disable-next-line
    const { data, loading, error } = useFetch("/api/hotels/featured?featured=true&limit=4");

    console.log('ddddddaaaay', data);
    return (
        <div className='fp'>
            {loading ?
                "Loading" :
                <>
                    {data.map(item => (
                        <div className="fpItem" key={item._id}>
                            {/* { console.log(data+'item')} */}
                            {/* <img
                                src={item.photos[0]}
                                alt=""
                                className="fpImg"
                            /> */}
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
                            {item.rating && <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default FeaturedProperties