// import { useState, useEffect } from 'react';

// // Simulated fetch function for search results
// const fetchSearchResults = (query) => {
//   // Simulated delay for fetching results
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const allResults = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Strawberry'];
//       const filteredResults = allResults.filter(item => item.toLowerCase().includes(query.toLowerCase()));
//       resolve(filteredResults);
//     }, 300); // Simulated delay of 300ms
//   });
// };

// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [debouncedQuery, setDebouncedQuery] = useState(query);

//   // Effect for debouncing the query
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedQuery(query);
//     }, 500); // Wait 500ms before updating the debouncedQuery

//     return () => {
//       clearTimeout(handler); // Cleanup the timeout on unmount or when query changes
//     };
//   }, [query]);

//   // Effect to fetch search results when debouncedQuery changes
//   useEffect(() => {
//     const fetchResults = async () => {
//       if (debouncedQuery) {
//         setLoading(true);
//         const results = await fetchSearchResults(debouncedQuery);
//         setResults(results);
//         setLoading(false);
//       } else {
//         setResults([]); // Clear results if the query is empty
//       }
//     };

//     fetchResults();
//   }, [debouncedQuery]);

//   return (
//     <div>
//       <h2>Search Component with Debouncing</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)} // Update the query on input change
//       />

//       {loading && <p>Loading...</p>} {/* Show loading state while fetching */}

//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;


import { useState, useEffect } from 'react';

// Sample data to search through
const allElements = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Strawberry'];

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  // Effect for debouncing the query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Wait 500ms before updating the debouncedQuery

    return () => {
      clearTimeout(handler); // Cleanup the timeout on unmount or when query changes
    };
  }, [query]);

  // Effect to filter results based on debouncedQuery
  useEffect(() => {
    const filterResults = () => {
      if (debouncedQuery) {
        setLoading(true);
        const filteredResults = allElements.filter(element =>
          element.toLowerCase().startsWith(debouncedQuery.toLowerCase())
        );
        setResults(filteredResults);
        setLoading(false);
      } else {
        setResults([]); // Clear results if the query is empty
      }
    };

    filterResults();
  }, [debouncedQuery]);

  return (
    <div>
      <h2>Search Elements Starting With Input</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query on input change
      />

      {loading && <p>Loading...</p>} {/* Show loading state while filtering */}

      <ul>
        {results.length > 0 ? (
          results.map((result, index) => <li key={index}>{result}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;

