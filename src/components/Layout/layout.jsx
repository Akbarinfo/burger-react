import React from "react";
import Aux from '../hoc/aux'
import './layout.css'

export default function Layout(props) {
  return(
    <Aux>
      <div>Totalbar, SideDrawer, Backdrop</div>
      <main className="content">
        {props.children}
      </ main>
    </ Aux>
  )
}