 import React from "react";
 import './buildcontrol.css'

 export default function BuildControl(props) {
   return (
     <div className="BuildControl">
       <div className="Label">{props.label}</div>
       <button className="Less">Less</button>
       <button className="More">More</button>
     </div>
   )
 }