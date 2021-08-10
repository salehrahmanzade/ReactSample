import React from "react";
//  import { Link } from "react-router-dom";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../Components/controls/controls";
import Modal from "../../UI/Modal";
import Order from "../../Components/Order/Order";
import Loder from "../../Components/Loder/loder";

import axios from "../../axios";

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      productprice: {
        products1: 30,
        products2: 60,
        products3: 70,
        products4: 90,
        products5: 90,
      },
      totalprice: 0,
      purchased: false,
      loding: false,
    };
  }
  

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://react-main-92a3a-default-rtdb.firebaseio.com/products.json")
      .then((r) => {
        this.setState({ products: r.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  AddproductHandler = (type) => {
    let prevproduct = this.state.products[type];
    let updateproduct = (prevproduct += 1);
    let product = { ...this.state.products };
    product[type] = updateproduct;

    let preprice = this.state.productprice[type];
    let privtotal = this.state.totalprice;
    let newprice = preprice + privtotal;
    this.setState({ totalprice: newprice, products: product });
  };

  RemoveproductHandler = (type) => {
    let prevproduct = this.state.products[type];
    let updateproduct = (prevproduct -= 1);
    let product = { ...this.state.products };
    product[type] = updateproduct;

    let preprice = this.state.productprice[type];
    let privtotal = this.state.totalprice;
    let newprice = privtotal - preprice;
    this.setState({ totalprice: newprice, products: product });
  };

  purchasedHandler = () => {
    this.setState({ purchased: true });
  };

  modalCloseHandler = () => {
    this.setState({ purchased: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')

    this.setState({ loding: true });
    const data = {
      products: this.state.products,
      price: this.state.totalprice,
      customer: { name: "saleh", enail: "saleh@gmail.com" },
    };
    axios
      .post("/order.json", data)
      .then((r) => {
        this.setState({ loding: false, purchased: false });
      })
      .catch((er) => {
        this.setState({ loding: true, purchased: true });
      });
      // <Link to={"/checkout"} ></Link>
    // <Route>
    //   <Redirect from={"/"} to={"/checkout"} />
    // </Route>
  };

  render() {
    let order = null;
    if (this.state.loding) {
      order = <Loder />;
    }
    let controls = <Loder />;
    if (this.state.products) {
      order = (
        <Order
          products={this.state.products}
          price={this.state.totalprice}
          continue={this.purchaseContinueHandler}
          cancel={this.modalCloseHandler}
        />
      );

      let product = [];
      Object.keys(this.state.products).map((item, index) => {
        return product.push({
          title: `product ${index + 1}`,
          type: item,
        });
      });

      controls = (
        <Controls
          Addproduct={this.AddproductHandler}
          Removeproduct={this.RemoveproductHandler}
          total={this.state.totalprice}
          order={this.purchasedHandler}
          products={product}
        />
      );
    }
    return (
      <Wrapper>
        <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
          {order}
        </Modal>
        {controls}
      </Wrapper>
    );
  }
}
export default Shopping;
