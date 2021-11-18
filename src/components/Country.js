import React from "react";


const Country = props => {

  const {name, altSpellings, nativeName, translations, flag, population, area} = props.country;

  return (
    <div className="countryinfo">
      <h1>{name}</h1>
      <h2>Official Name: {altSpellings[1]}</h2>
      <h2>Native Name: {nativeName}</h2>
      <h2>Japanese Name: {translations.ja}</h2>
      <h2>Population Density: {Math.round( population / area )} km<sup>2</sup></h2>
      <img className="country__flag" src={flag} alt={`flag of ${name}`} />
    </div>
  );
};

export default Country;
