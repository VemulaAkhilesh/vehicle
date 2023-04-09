import React, { useState } from "react";
import { useEffect } from "react";
import {Link, useNavigate } from 'react-router-dom';

const All_senario= ()=>{
    const[empdata,empdatachange]=useState(null);
   const navigate=useNavigate();

   
    const LoadEdit=(id)=>{
          navigate("/allSenario/edit/"+id);
    }

    const Removefunction=(id)=>{
        if(window.confirm('Do you want to remove🤔 ?')){
            fetch("http://localhost:3000/All_senario/"+id,{
                method:"DELETE",
             
            }).then((res)=>{
             alert("Deleted Successfully" )
             window.location.reload();
            }).catch((err)=>{
        console.log(err.message);
            })

        }

    }
    useEffect(()=>{
fetch("http://localhost:3000/All_senario").then((res)=>{
   return res.json();
}).then((resp)=>{
    empdatachange(resp);
}).catch((err)=>{
    console.log(err.message);
})
    },[])
    return(
        
       <div className="con">
         <div className="card">
            <div className="card-title">
                <p>All senario</p>
            </div>
            <div className="card-body">
                <div className="divbtn">
                    
                   
                {/* <a className=".divbtn"  href="http://localhost:3002/">Add(+)</a> */}
               </div>
                <table className="table table-bordered">
                     <thead className="bg-dark text-white">
                           <tr className="space">
                            <td className="sp">Senario Id</td>
                            <td className="sp">Senario Name</td>
                            <td className="sp">Senario Time</td>
                            <td >Number of Vehicle</td>
                            <td className="sp" >ADD</td>
                            <td className="sp">EDIT</td>
                            <td className="sp">DELETE</td>
                           </tr>
                           </thead>
                           <tbody className="daaa">
                              { empdata&&
                                empdata.map(item=>(
                                    <tr className="daa" key={item.id}>
                                       <td className="lo">{item.id}</td>
                                       <td className="lo">{item.name}</td>
                                       <td className="lo">{item.time}</td>
                                       <td className="lo">{item.number}</td>
                                       <td > <Link to='/allSenario/create' className="btn btn-success">Add</Link>
                                       </td>
                                       <td> <a   href=""  onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</a>  </td>
                                       <td><a href=""  onClick={()=>{Removefunction(item.id)}} className="btn btn-danger">delete</a></td>
                                    </tr>
                                ))
                              }

                           </tbody>
                </table>
            </div>
         </div>
       </div>
        
    )
}
export default All_senario
// npx json-server -p 3000 -w db.json 
// npx json-server -p 3008 -w mm.json 