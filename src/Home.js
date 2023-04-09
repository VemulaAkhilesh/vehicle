import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Home= ()=>{
    const[empdata,empdatachange]=useState(null);
    // const navigate=useNavigate();
    const Removefunction=(vid)=>{
        if(window.confirm('Do you want to remove🤔 ?')){
            fetch("http://localhost:3008/All_vehicle/"+vid,{
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
        fetch("http://localhost:3008/Add_vehicle").then((res)=>{
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
               <p>Home</p>
           </div>
           <div className="card-body">
               <div className="divbtn">
                   
                   {/* <Link to='/allSenario/create' className="btn btn-success">Add(+)</Link> */}
               {/* <a className=".divbtn"  href="http://localhost:3002/">Add(+)</a> */}
              </div>
               <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                          <tr className="space">
                           <td className="sp">Vehicle Id</td>
                           <td className="sp">Vehicle Name</td>
                           <td className="sp">Position X</td>
                           <td >Position Y</td>
                           <td className="sp" >Speed</td>
                           <td className="sp">Direction</td>
                           <td>Edit</td>
                           <td className="sp">DELETE</td>
                          </tr>
                          </thead>
                          <tbody className="daaa">
                             { empdata&&
                               empdata.map(item=>(
                                   <tr className="daa" key={item.vid}>
                                      <td className="lo">{item.vid}</td>
                                      <td className="lo">{item.vehicle}</td>
                                      <td className="lo">{item.positionx}</td>
                                      <td className="lo">{item.positiony}</td>
                                    
                                      <td >{item.speed}</td>
                                      <td >{item.direction}</td>
                                      <td> <a   href="" className="btn btn-success">Edit</a>  </td>
                                      <td><a href="" onClick={()=>{Removefunction(item.vid)}}  className="btn btn-danger">delete</a></td>
                                   </tr>
                               ))
                             }

                          </tbody>
               </table>
           </div>
        </div>
      </div>
    )

};
export default Home;
// http://localhost:5000/Vehicle