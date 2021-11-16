import React from "react";
import { useSelector} from "react-redux";

   


const Graduationlist  = () => {


    // const list =(print) =>{
    //     dispatch({
    //         type: "Name",
    //         value :print
    //      })

    // }

    const a = useSelector(state  => state)


    const filterItems = () => 
        Object.keys(a).filter((el) => 
             a[el] > 4
        )
      

      console.log("AAA ", filterItems())
    return(
        <div>
            {filterItems().length > 0  && 
        ( <table className="last" >
           <div className="header">Graduationlist</div>
           <hr/>
           <tr className="text">
               <td>{filterItems().map(name => <p>{name}</p>)}</td>
           </tr>
           <hr />

       </table> )
            }

       </div>
    )

}

export default Graduationlist;