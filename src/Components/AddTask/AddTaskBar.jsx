import AddButton from "./AddButton";
import style from "./AddTaskBar.module.css";

const AddTaskBar = () => {
  return (
    <div className={style.container}>
        <div><h3>Add Tasks</h3></div>
            <AddButton></AddButton>
        
    </div>
  )
}

export default AddTaskBar