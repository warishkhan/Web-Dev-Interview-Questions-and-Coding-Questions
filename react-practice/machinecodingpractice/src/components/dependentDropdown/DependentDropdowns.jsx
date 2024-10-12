import { useState } from 'react';

const DependentDropdowns = () => {
  // State to store selected values
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Data structure for the dropdowns
  const data = {
    USA: {
      California: ['Los Angeles', 'San Francisco', 'San Diego'],
      Texas: ['Houston', 'Dallas', 'Austin'],
    },
    India: {
      Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
      Karnataka: ['Bangalore', 'Mysore', 'Mangalore'],
    },
  };

  // Handler for when a country is selected
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState(''); // Reset state when a new country is selected
    setCities([]); // Reset cities when a new country is selected
    setStates(Object.keys(data[country])); // Set the states based on selected country
  };

  // Handler for when a state is selected
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(data[selectedCountry][state]); // Set the cities based on selected state
  };

  return (
    <div>
      <h2>Dependent Dropdown Example</h2>

      {/* Country Dropdown */}
      <label htmlFor="country">Country: </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Object.keys(data).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      <label htmlFor="state">State: </label>
      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
        disabled={!selectedCountry} // Disable if no country is selected
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <label htmlFor="city">City: </label>
      <select id="city" disabled={!selectedState}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DependentDropdowns;
