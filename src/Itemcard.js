import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {

  const {addItem} =useCart();



  return (
    <div className="coll-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <div class="card-body">
          <img src={props.img} alt="" style={{height:'25rem'}} />
          <h5 class="card-title">{props.title}</h5>
          <p>${props.price}</p>
          <p class="card-text">{props.desc}</p>
          <button className="btn btn-success" onClick={()=>addItem(props.item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
