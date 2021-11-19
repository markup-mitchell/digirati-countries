import React, {useEffect, useState} from "react";
import "./App.css";
import RadioButton from './components/RadioButton';
import SelectOption from './components/SelectOption';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState( [] );
  useEffect( () => {
    fetch( "https://restcountries.com/v2/all" )
      .then( res => res.json() )
      .then( data => setCountries( data ) );
  }, [] );
  const [region, setRegion] = useState( [] );
  const regionHandler = ( event ) => {
    setRegion( event.target.value );
  };
  const [currentCountry, setCurrentCountry] = useState( [] );
  const countryHandler = ( event ) => {
    setCurrentCountry( countries.find( country => country.name === event.target.value ) );
  };

  return (
    <div className="App">
      <div className="layout">
        <nav>
          <fieldset className="region-select">
            <legend className="sr-only">Region Select</legend>
            {
              ["Africa", "Americas", "Asia", "Europe", "Oceania"].map( ( regionName ) => <RadioButton value={regionName} key={regionName} radioSet="Region" handler={regionHandler} /> )
            }
          </fieldset>


          <select className="country-select" name="countries" onChange={countryHandler}>
            <option value="">Choose a country in {region}</option>
            {
              countries.map( country => country.region === region && <SelectOption key={country.alpha2Code} value={country.name} handler={countryHandler} /> )
            }
          </select>

        </nav>
        <main>
          {/* Stops app crashing on refresh - potentially prevents countries rendering */}
          {currentCountry.altSpellings ? <Country country={currentCountry} /> : null}
        </main>
      </div>
    </div >
  );
}

export default App;

