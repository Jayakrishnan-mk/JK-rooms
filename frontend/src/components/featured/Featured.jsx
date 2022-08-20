import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

function Featured() {

    const { data, loading, error } = useFetch(
        "/api/hotels/countByCity?cities=Mumbai,Kolkata,Odisha"
        );
    // console.log('datassssss00', data);
    return (
        <div className='featured'>
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMrq60SJlFdJk5r4tnmEM3troyQEtIhV-0g&usqp=CAU"
                            alt=""
                            className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Mumbai</h1>
                            <h2>{data[0]} properties </h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7-2AbPnnn6m7q5GiQg-CYlSxNXwQhLwPhA&usqp=CAU"
                            alt=""
                            className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Kolkata</h1>
                            <h2>{data[1]} properties </h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgC5Bx6OqNRG7I-67ziiMP68Edw2mUcas5g&usqp=CAU"
                            alt=""
                            className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Odisha</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured