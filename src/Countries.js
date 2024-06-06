import React, { useEffect, useState } from "react";
import "./Countries.css"
import * as data from "./data.json"

function Card({ imgSrc, altText, countryName }) {
    console.log('card called')
  return (
    <div className='card'>
      <img src={imgSrc} alt={altText} />
      <h3>{countryName}</h3>
    </div>
  );
}

export default function Countries() {
    // console.log('data:::: ',data)
  const [countryList, setCountryList] = useState([]);
  console.log("countries");
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching Data...");
      try {
        let url = "https://restcountries.com/v3.1/all";
        let response = await fetch(url);
        let data = await response.json();
        console.log("data:: ", data);
        setCountryList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">{countryList.map((country) => (
        <Card imgSrc={country.flags.png} altText={country.flags.alt} countryName={country.name.common} />
    ))}</div>
  );
}
