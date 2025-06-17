import style from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  return (
    <div className={style.container}>
            <button >Today</button>
            <button >Pending</button>
            <button className={style.btn}>OverDue</button>
    </div>
  )
}

export default ButtonContainer