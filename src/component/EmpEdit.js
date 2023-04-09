import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

const EmpEdit=()=>{
    const{empid}=useParams();
    // const navigate=useNavigate();
    // const[empdata,empdatachange]=useState({});
    useEffect(()=>{
        fetch("http://localhost:3000/All_senario/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
             idchange(resp.id);
             namechange(resp.name);
           
             timechange(resp.time);
             numberchange(resp.number);
             activechange(resp.isactive);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]);
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[time,timechange]=useState("");
    const[number,numberchange]=useState("");
    const[active,activechange]=useState(true);
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
     e.preventDefault();
     const empdata={id,name,time,number,active};

    fetch("http://localhost:3000/All_senario/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
    }).then((res)=>{
     alert("Saved Successfully" )
     navigate('/');
    }).catch((err)=>{
console.log(err.message);
    })
    };
    return(
        <div className="akk">
        <div className="row">
         <div className="offset-lg-3 col-lg-6">
           <form className="contai"onSubmit={handlesubmit}>
               <div className="card" style={{"textAlign":"left"}} >
                 
                 <div className="card-body">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label> Senario ID</label>
                             <input value={id} onChange={e=>idchange(e.target.value)}  disabled="disabled" className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Senatio Name</label>
                             <input value={name} onChange={e=>namechange(e.target.value)} required className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Senario Time</label>
                             <input value={time} onChange={e=>timechange(e.target.value)} required  className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                             <label>Number of Vehicle</label>
                             <input value={number} onChange={e=>numberchange(e.target.value)} required  className="form-control">
                             </input>
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-check">
                           <input checked={active} onChange={e=>activechange(e.target.checked)} required  type="checkbox" className="form-check-input">
                             </input>
                             <label>Is Active</label>
                           
                           </div>
                        </div>
                        <div className="col-lg-12">
                           <div className="form-group">
                          <button className="btn btn-success" type="submit">Save</button>
                          <Link to="/allSenario" className="btn btn-danger">Back</Link>
                      
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
export default EmpEdit