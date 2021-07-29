import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxilliary';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 2,
            cheese:1,
            bacon:1,
            meat:2
        }
    }

    render(){
        return(
           <Aux>
               <Burger ingredients = {this.state.ingredients}/>
           </Aux> 
        )
    }

}

export default BurgerBuilder;