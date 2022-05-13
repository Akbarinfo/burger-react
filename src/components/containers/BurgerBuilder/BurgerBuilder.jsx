import React, {Component} from "react";
import BuildControls from "../../BuildControls/buildcontrols";
import Burger from "../../Burger/burger";
import Aux from "../../hoc/aux";

class BurgerBuilder extends Component{
  state = {
    ingredints: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    }
  }

  render() {
    return(
      <Aux>
        <Burger ingredints={this.state.ingredints} />
        <BuildControls />
      </ Aux>
    )
  }
}

export default BurgerBuilder