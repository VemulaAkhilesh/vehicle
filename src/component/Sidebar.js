import React from "react";

import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
const Sidebar=()=>{
    return(

        <div className="con">
            <ul className="flex">
<Link activeclassname="active" className="ak" to="/"> <li>Home</li></Link> 
 <Link className="ak" to="/addSenario"> <li>Add Senario</li></Link>
 <Link className="ak"  to="/allSenario"><li>All Senario</li></Link>
 <Link className="ak" to="/addVehicle"><li>Add Vehicle</li></Link>
</ul>
        </div>
    )
}
export default Sidebar

/* <ul>
<Link to="/" className="link"> <li>Home</li></Link> 
 <Link> <li>Add Senario</li></Link>
 <Link><li>All Senario</li></Link>
 <Link><li>Add Vehicle</li></Link>
</ul> */