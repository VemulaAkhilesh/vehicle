import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Add_vehicle=()=>{
    const[vid,vidchange]=useState("");
    const[vehicle,vehiclechange]=useState("");
    const[positionx,positionxchange]=useState("");
    const[positiony,positionychange]=useState("");
    const[speed,speedchange]=useState("");
    const[direction,directionchange]=useState("");
    const[active,activechange]=useState(true);
    const navigate=useNavigate();
    const handlesubmit=(a)=>{
     a.preventDefault();
     const empdata={vid,vehicle,positionx,positiony,speed,direction,active};

    fetch("http://localhost:3008/Add_vehicle",{
        method:"post",
        headers:{"content-type":"nm/json"},
        body:JSON.stringify(empdata)
    }).then((res)=>{
     alert("Saved Successfully" )
     navigate('/home/');
    }).catch((err)=>{
console.log(err.message);
    })
}
    return(
        <div className="move">
        <div className="row">
         <div className="offset-lg-3 col-lg-6">
           <form className="contai"onSubmit={handlesubmit}>
               <div className="card" style={{"textAlign":"left"}} >
               <div className="card-title">
                 <h3> Add Vehicle</h3> 
                 </div>
                 <div className="card-body">
            
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label> Vehicle ID</label>
                             <input value={vid} onChange={a=>vidchange(a.target.value)}  disabled="disabled" className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Vehicle Name</label>
                             <input value={vehicle} onChange={a=>vehiclechange(a.target.value)} required className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Position X</label>
                             <input value={positionx} pattern onChange={a=>positionxchange(a.target.value)} required  className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Position Y</label>
                             <input value={positiony} onChange={a=>positionychange(a.target.value)} required  className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Speed</label>
                             <input value={speed} onChange={a=>speedchange(a.target.value)} required  className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Direction</label>
                             {/* <input value={speed} onChange={e=>speedchange(e.target.value)} required  className="form-control">
                             </input> */}
                             <select value={direction} onChange={a=>directionchange(a.target.value)} required  className="form-control">
                                <option>Upwords</option>
                                <option>Downwords</option>
                                <option>Backtwords</option>
                                <option>Totwords</option>
                             </select>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-check">
                           <input checked={active} onChange={a=>activechange(a.target.checked)} required  type="checkbox" className="form-check-input">
                             </input>
                             <label>Is Active</label>
                           
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                          <button className="btn btn-success" type="submit">Save</button>
                          <Link to="/home" className="btn btn-danger">Back</Link>
                      
                           </div>
                        </div>
                        
                     </div>
                 </div>
               </div>
           </form>
         </div>
         </div> 
     </div>
    )
}
export default Add_vehicle