import React from "react";


const Country = props => {

  const {name, altSpellings, nativeName, translations, flag, population, area} = props.country;

  return (
    <div className="country">

      <h1 className="country__heading">{name}</h1>

      <div className="country__details">
        <div className="country__datum">

          {
            altSpellings[1] && <h2>Official Name</h2>
          }
          {
            altSpellings[1] !== name ? <p>{altSpellings[1]}</p> :
              <p>As above</p>
          }
        </div>
        <div className="country__datum">

          <h2>Native Name</h2>
          <p>{nativeName}</p>
        </div>
        <div className="country__datum">

          <h2>Japanese Name</h2>
          <p> {translations.ja}</p>
        </div>
        <div className="country__datum">

          <h2>Population Density </h2>
          <p>{Math.round( population / area )} per km<sup>2</sup></p>
        </div>
      </div>
      <img className="country__flag" src={flag} alt={`flag of ${name}`} />

    </div>
  );
};

export default Country;
