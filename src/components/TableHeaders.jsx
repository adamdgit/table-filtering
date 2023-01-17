import { useState } from "react";

export default function TableHeaders({ header, sortedData, setSortedData }) {

  const [sortAsc, setSortAsc] = useState(true)

  function sortTable(header) {

    setSortAsc(!sortAsc)
    if (sortAsc) {
      setSortedData([...sortedData].sort((a,b) => {
        if (a[header] > b[header]) return 1
        if (a[header] < b[header]) return -1
        else return 0
      }))
    } else {
      setSortedData([...sortedData].sort((a,b) => {
        if (a[header] < b[header]) return 1
        if (a[header] > b[header]) return -1
        else return 0
      }))
    }

  }

  return (
    <td key={header.id}>
      {header}
      <button className="sort" onClick={() => sortTable(header)}>{sortAsc ? "^" : "v"}</button>
    </td>
  )
}