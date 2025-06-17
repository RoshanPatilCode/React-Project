import { useState } from "react"


const AddButton = () => {

   const [show, setShow] = useState();
   const [data, setData] = useState({
    title: '',
    priority: '',
    comment: '',
    date: '',
   });
  return (
    <div>
        <button className="AddButton" onClick={() => setShow(true)}>Add Task+</button>

        {show && (
             <div className="modal-container">
                <div className="modal">
                    <div className="AddTitle">
                          <h4>Task Details</h4>
                    </div>
                      <form>
                          <div className="title">
                             <label>Title</label>
                             <input type="text" placeholder="Add a task title"
                                     value={""} />
                          </div>

                          <div className="date-input">
                             <div id='prio'>
                                <label>Priority</label>
                                <select id="priority">
                                    <option value="" disabled>Select priority</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                   
                             </div>
                          </div>
                      </form>

                </div>
                
             </div>
          )
        }
    </div>
  )
}

export default AddButton