
import "./SubmitTable.css";

const SubmitTable = ({entries}) => {

    if (entries.length == 0) {
        return console.log("Empty");
        ;
    }
  return (
    <div className='tableContainer'>
        <table className="entryTable">
            <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Mobile</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
            {entries.map((entry,index) => (

            <tr key={index} >
             <td>{entry.name}</td>
              <td>{entry.age}</td>
              <td>{entry.dob}</td>
              <td>{entry.mob}</td>
              <td>{entry.location}</td>
            </tr>
            ))}
        </tbody>
        </table>

    </div>
  )
}

export default SubmitTable