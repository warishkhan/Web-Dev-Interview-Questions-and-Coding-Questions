// import { useState } from 'react';

// const MultipleSelection = () => {
//   // Elements to select from
//   const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

//   // State to keep track of selected elements
//   const [selectedElements, setSelectedElements] = useState([]);

//   // Handler for when a checkbox is clicked
//   const handleCheckboxChange = (e) => {
//     const value = e.target.value;

//     if (e.target.checked) {
//       // Add element to the selected list if checked
//       setSelectedElements([...selectedElements, value]);
//     } else {
//       // Remove element from the selected list if unchecked
//       setSelectedElements(selectedElements.filter((item) => item !== value));
//     }
//   };

//   return (
//     <div>
//       <h2>Select Multiple Elements</h2>

//       {/* Map over elements and render checkboxes */}
//       {elements.map((element, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             id={`checkbox-${index}`}
//             value={element}
//             onChange={handleCheckboxChange}
//             checked={selectedElements.includes(element)}
//           />
//           <label style={{
//             background: selectedElements.includes(element)?'red':'blue'
//           }} htmlFor={`checkbox-${index}`}>{element}</label>
//         </div>
//       ))}

//       {/* Display selected elements */}
//       <div>
//         <h3>Selected Elements:</h3>
//         <ul>
//           {selectedElements.length > 0 ? (
//             selectedElements.map((element, index) => <li key={index}>{element}</li>)
//           ) : (
//             <li>No elements selected</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MultipleSelection;


import { useState } from 'react';

const MultipleSelection = () => {
  // Elements to select from
  const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  // State to keep track of selected elements
  const [selectedElements, setSelectedElements] = useState([]);

  // Handler for when an element is clicked
  const handleElementClick = (element) => {
    if (selectedElements.includes(element)) {
      // Remove element from the selected list if already selected
      setSelectedElements(selectedElements.filter((item) => item !== element));
    } else {
      // Add element to the selected list if not selected
      setSelectedElements([...selectedElements, element]);
    }
  };

  return (
    <div>
      <h2>Select Multiple Elements</h2>

      {/* Map over elements and render clickable divs */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {elements.map((element) => (
          <div
            key={element}
            onClick={() => handleElementClick(element)}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: selectedElements.includes(element) ? '#007bff' : '#f8f9fa',
              color: selectedElements.includes(element) ? '#fff' : '#000',
            }}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Display selected elements */}
      <div>
        <h3>Selected Elements:</h3>
        <ul>
          {selectedElements.length > 0 ? (
            selectedElements.map((element, index) => <li key={index}>{element}</li>)
          ) : (
            <li>No elements selected</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MultipleSelection;

