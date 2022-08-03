import React from 'react'
import useFetch from '../../hooks/useFetch';
import './propertyList.css'

function PropertyList() {
    const { data, loading, error } = useFetch("/api/hotels/countByType");

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCm4YW2oFeLlLJ7dGYlortybKHTF6_9ZYMg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCm4YW2oFeLlLJ7dGYlortybKHTF6_9ZYMg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCm4YW2oFeLlLJ7dGYlortybKHTF6_9ZYMg&usqp=CAU"
    ]
    return (
        <div className='pList'>

            {loading ? (
                "loading"
            ) : (
                <>
                    {data && images.map((img, i)=>(
                    <div className="pListItem" key={i}>
                        <img src={img} alt="" className="pListImg" />
                        <div className="pListTitles">
                            <h1>{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                    ))}

                </>
            )}



        </div>
    )
}

export default PropertyList