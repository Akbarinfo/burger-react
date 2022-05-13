import React from "react";
import './burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default function Burger(props) {

  let tranformedIngredinets = Object.keys(props.ingredints).map(inKey => {return [...Array(props.ingredints[inKey])].map((_, i) => {
    return <BurgerIngredient key={inKey + i} type={inKey} />
  })}).reduce((arr, ell) => {
    return arr.concat(ell)
  }, []);

  if(tranformedIngredinets.length === 0) {
    tranformedIngredinets = <p>Please start adding ingredients!</p>
  }

  return(
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {tranformedIngredinets}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}