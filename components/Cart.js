import $ from 'jquery';
import React from 'react';

class Cart extends React.Component {

  render() {
    let cupcakes = this.props.cupcakes;
    // console.log(cupcakes);
    if (cupcakes.length > 0) {
      return (
        <div className="Cart"><h2>Cart Form</h2><ul>
              { cupcakes.map( (cupcake, index) => {
                console.log(cupcake);
                let id = cupcake._id;
                console.log(id);
                let toppings = cupcake.toppings || [];
                let cake = cupcake.cake;
                cake = cake.replace(/[-]/g, ' ');
                let icing = cupcake.icing;
                icing = icing.replace(/[-]/g, ' ');
                return <li key={ index } >
                  <img width="40%" height="auto;" alt="star" src={cupcake.image }/>
                  <div className="details">
                  <div className="cakedetails">{ cake }</div>
                  <div className="icingdetails">{ icing }</div>
                  <div className="toppingsdetails">{toppings.join(" ")}</div>
                  <div><button onClick={()=>this.props.deleteCupcake(id) }><i className="fa fa-times" aria-hidden="true"></i></button></div>
                  </div>
                  </li>
              })}
        </ul></div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default Cart;