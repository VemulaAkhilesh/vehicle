import React from 'react';

import {BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import All_senario from './pages/All_senario';
import EmpCreate from './component/EmpCreate';
import EmpDetails from './component/EmpDetails';
import EmpEdit from './component/EmpEdit';
import Sidebar from './component/Sidebar';
import Home from './Home';
import Add_vehicle from './pages/Add_vehicle';
import Add_senario from './pages/Add_senario'
function App() {
  return (
<div className='App'>
 <BrowserRouter>
<Sidebar> </Sidebar>
 <Routes>
 <Route path ='/' element ={<Home/>}></Route>
 <Route path ='/home' element ={<Home/>}></Route>
 
 <Route path ='/addvehicle' element ={<Add_vehicle/>}></Route>
 <Route path ='/addSenario' element ={<Add_senario/>}></Route>
  <Route path="/allSenario" element={<All_senario/>}></Route>
  <Route path="/allSenario/create" element={<EmpCreate/>}></Route>
  <Route path="/allSenario/detail:empid" element={<EmpDetails/>}></Route>
  <Route path="/allSenario/edit:empid" element={<EmpEdit/>}></Route>
 </Routes>

 </BrowserRouter>


{/* <EmpCreate/> */}
{/* <All_senario/> */}

</div>

  );
};

export default App;

/* <Route path="/home"element={<Home/>}/>
<Route path="/add_senario"element={<Add_senario/>}/>
<Route path="/all_senario"element={<All_senario/>}/>
<Route path="/add_vehicle"element={<Add_vehicle/>}/> */
// import { startTransition } from 'react';
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<div>hello</div>,
//   },
// ]);
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router}/>
// )
// {/* <BrowserRouter>
// <div>
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       <Route path="/home"element={<Home/>}/>
//       <Route path="/add_senario"element={<Add_senario/>}/>
//       <Route path="/all senario"element={<All_senario/>}/>
//       <Route path="/add_vehicle"element={<Add_vehicle/>}/>  
//     </Routes>
//     </div>
// </BrowserRouter> */}