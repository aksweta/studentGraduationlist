import React from "react";
import Button from "./Button";
import { useSelector, useDispatch} from "react-redux";







const Table = ({name, subjects})  => {

    const a = useSelector(state  => state)

    const dispatch = useDispatch();
    

     const increment = (x) => {
         console.log(x)
        dispatch({
            type: "INCREMENT",
            value : x
         })
        
     }

     
     const decrement = (x) => {
        // x= x - 1;
        console.log(x);
        dispatch({
            type: "DECREMENT",
            value : x
         })
    }
    
  
    return (
        
        <div className="tt">
          <div className="header">{name}</div>
          <hr />
          <table width="400px">
            {subjects && subjects.map((x) => {
              return (
                <tr>
                  <td width="200px">{x}</td>
                  <td className="bb" width="80px">
                    <Button handelclick={() => increment(name)} name="plus">+</Button>
                  </td>
                  <td>
                    <Button handelclick={() => decrement(name)} name="minus">-</Button>
                  </td>
                </tr>
              );
            })}
          </table>
          <hr />
          <div className="footer">
            <h4>Total: </h4>
            <h4 className="total">{a[name]}</h4>
          </div>
          </div>

          
        
        
    );
}




export default Table;