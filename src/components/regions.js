import React, {useEffect, useState} from "react";
import Country from "./country";;

const Countries = () => {
  const [countries, setCountries] = useState( [] );
  useEffect( () => {
    fetch( "https://restcountries.com/v2/all" )
      .then( res => res.json() )
      .then( data => setCountries( data ) );
  }, [] );
  return (
    <div>
      <h1>Load Countries : {countries.length}</h1>
      <div className="country">
        {countries.map( country => (
          <Country country={country} key={country.alpha2Code}></Country>
        ) )}
      </div>
    </div>
  );
};

export default Countries;