export function AllButtons({operation, resetResultButton, resetInputButton}){
    return(
        <div className = "allButtons">
          <button className= "btn" onClick={()=> operation('+')}>add</button>
          <button className= "btn" onClick={()=> operation('-')}>substract</button>
          <button className= "btn" onClick={()=> operation('*')}>multiply</button>
          <button className= "btn" onClick={()=> operation('/')}>divide</button>
          <button className= "reset" onClick={resetInputButton}>reset input</button>
          <button className= "reset" onClick={resetResultButton}>reset result</button>
        </div>
    )
}
export  default AllButtons;