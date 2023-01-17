import { personData } from "./data";
import { useState } from "react";
import TableHeaders from "./components/TableHeaders";

function App() {

  const headers = Object.keys(personData[0])
  const [sortedData, setSortedData] = useState(personData)

  return (
    <div className="App">
      <h1>Table Data Filtering</h1>

      <table>
        <thead>
          <tr>
            {
              headers.map((header, i) => (
                <TableHeaders 
                  key={i} 
                  sortedData={sortedData} 
                  setSortedData={setSortedData} 
                  header={header} />
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            sortedData.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
                <td>{person.country}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
};

export default App
