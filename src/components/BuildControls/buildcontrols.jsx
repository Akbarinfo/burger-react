import React from "react";
import './buildcontrols.css'
import BuildControl from "./BuildControl/buildcontrol"

const controls = [
  {label: 'Salad', type: "salad"},
  {label: 'Meat', type: "meat"},
  {label: 'Cheese', type: "cheese"},
  {label: 'Bacon', type: "bacon"}
]

export default function BuildControls() {
  return (
    <div className="BuildControls">
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label}/>
      ))}
    </div>
  )
}