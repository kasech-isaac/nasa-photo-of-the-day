import React, { useState, useEffect }  from "react";
import axios from "axios";
import styled from "styled-components"

const Thing = styled.div`
  
  background:darkcyan;
  &:hover {
     background: black; 
     color:red;
   }
`;

const Title = styled.h1`
  font-size: 3rem;
  padding:5%;
  text-align: center;
  color: white;
`;

const Parag = styled.p`
  font-size: 1.5rem;
  padding:5%;
  text-align: center;
  color: white;
  widht:60%;  
 
`;
const Parag1 = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  widht:60%;  
 
`;

const Parag2 = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: white;
  widht:60%; 
  padding-bottom:5%; 
 
`;

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
// div className="nasa"
return (<Thing>
   
<Title> {nasa.title} </Title>
<img
alt="nasa"
src={nasa.url}
/>
<Parag>{nasa.explanation}</Parag>
<Parag1>{nasa.copyright}</Parag1>
<Parag2>{nasa.date}</Parag2>
</Thing>
)
}

export default NasaPhoto; 
