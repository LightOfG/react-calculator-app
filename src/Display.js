
export function Display( {onChange , calculation , result}){
    
   
    return(
        <div className="display">
           <div className="result" >
            {result}
           </div>
           <form>
            <label>
           <input
            className="input"           
            type="number" 
            name ="input"
            onChange={onChange}  
            value={calculation}          
            />
           </label>
           </form> 
        </div>
    )
}
export default Display;