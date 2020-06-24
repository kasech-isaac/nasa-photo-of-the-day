import React, { useState, useEffect }  from "react";
import axios from "axios";

function NasaPhoto()  {
    const [nasa, setNasa]=useState([]);
    useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=F2iKhSB3YOOLBnFanscKnymTb2VzL7yk59dYB9wc`)
      .then(res => {
           console.log(res)
           setNasa(res.data)
      })
    
    
}, [])

return (<div className="nasa">
   
<h1> {nasa.title} </h1>
<img
alt="nasa"
src={nasa.url}
/>
<p>{nasa.explanation}</p>
<p>{nasa.copyright}</p>
<p>{nasa.date}</p>
</div>
)
}

export default NasaPhoto; 
