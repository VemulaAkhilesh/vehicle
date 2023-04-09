import React from "react";

const Home= ()=>{
    return(
          
        <div className="con">
        <div className="card">
           <div className="card-title">
               <p>All senario</p>
           </div>
           <div className="card-body">
               <div className="divbtn">
                   
                   <Link to='/allSenario/create' className="btn btn-success">Add(+)</Link>
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
                                      <td ><a    className="btn btn-success" href="">Add</a>
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
export default Home
// http://localhost:5000/Vehicle