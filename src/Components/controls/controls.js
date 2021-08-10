import React from "react";
import Builder from "./Builder";

import "../../style/Controls.css";

let product = [];

const Controls = (props) => {
  if (props.products) {
    product = props.products;
  }

  return (
    <div className="controls">
      <div className="price">Total price : {props.total}</div>

      {product.map((item) => {
        return (
          <Builder
            title={item.title}
            key={item.title}
            add={() => props.Addproduct(item.type)}
            remove={() => props.Removeproduct(item.type)}
          />
        );
      })}

      <button onClick={props.order} className="order-btn">
        order
      </button>
    </div>
  );
};
export default Controls;
