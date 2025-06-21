import { useState } from "react";
import "./FormsPage.css";
import SubmitTable from "./SubmitTable";
 
const FormsPage = () => {

    const [show , setShow] = useState(false);
    const [data , setData] = useState(
        {
            name: '',
            age: '',
            dob: '',
            mob: '',
            location: '',
        }
    );

    const [entries, setEntries] = useState([]);

    const handleChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
       event.preventDefault();
       console.log('Submitted : ', data);
       setEntries([...entries, data]);
       setShow(false);
       setData({name:'', age:'', dob: '', mob:'', location:''});
       
    }

  return (
    <div >
        <button className="registerBtn" onClick={() => setShow(true)}>Register</button>
        
         {show && (
            
            <div className="modal">
        <form onSubmit={handleSubmit} className="FormCon">
            <div>
                <label>Enter Name</label> <br/>
                <input type="text" placeholder="Enter Name"
                    name="name"
                    value={data.name} onChange={handleChange}></input>
            </div>
            
           
            <div>
                <label>Age</label> <br/>
                <input type="text" placeholder="Enter Age"
                    name="age"
                    value={data.age} onChange={handleChange}></input>
            </div>
            <div>
                <label>Date Of Birth</label> <br/>
                 <input type="date" placeholder=""
                    name="dob"
                    value={data.dob} onChange={handleChange}></input>
            </div>
             <div>
                <label>Mob No</label> <br/>
                <input type="number" placeholder="Enter Mob No"
                    name="mob"
                    value={data.mob} onChange={handleChange}></input>
            </div>
            <div>
                <label>Location</label> <br/>
                 <input type="text" placeholder="Location" 
                 name="location"
                    value={data.location} onChange={handleChange} ></input>
            </div>

            <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShow(false)}>Close</button>
            </div>
                

        </form>
        </div>
         )}

         <SubmitTable entries={entries}></SubmitTable>
    </div>
  )
}

export default FormsPage