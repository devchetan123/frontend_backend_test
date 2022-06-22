import React, { useEffect, useState } from "react";

const Data = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/pincode")
        .then(res => res.json())
        .then(r => setData(r[0].PostOffice))
    }, [])

    return (
        <div>{console.log(data)}
            {
                data.map(ele => {
                    return <p>{ele.Name}</p>
                })
            }
        </div>
    )
}

export default Data;