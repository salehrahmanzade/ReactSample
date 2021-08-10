import React from "react";
import axios from "../../axios";

import Input from "../../UI/Input";
import Button from "../../UI/Button";

import "../../style/Account.css";

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password...",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        used: false,
      },
    },
  };

  submitHandler = (e) => {
    e.preventDefault();

    let formdata = {};

    for (let i in this.state.form) {
      formdata[i] = this.state.form[i].value;
    }
    if (
      this.state.form.email.valid &&
      this.state.form.name.valid &&
      this.state.form.password.valid
    ) {
      axios
        .post(`/account.json`, formdata)
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
    }else{
      
    }
  };

  checkValidation = (value, rules) => {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim() !== "";
    }

    return isValid;
  };

  inputChangeHandler = (event, inputElement) => {
    const updatedForm = {
      ...this.state.form,
    };

    const updatedElement = { ...updatedForm[inputElement] };

    updatedElement.value = event.target.value;

    updatedElement.valid = this.checkValidation(
      updatedElement.value,
      updatedElement.validation
    );

    updatedElement.used = true;

    updatedForm[inputElement] = updatedElement;

    this.setState({ form: updatedForm });
  };

  render() {
    const elementsArray = [];

    for (let item in this.state.form) {
      elementsArray.push({
        id: item,
        config: this.state.form[item],
      });
    }

    return (
      <div className="cont">
        <div className="new">
          <h2 style={{ marginBottom: "35px" }}>Account</h2>
          <form onSubmit={this.submitHandler}>
            {elementsArray.map((item) => {
              return (
                <Input
                  key={item.id}
                  elementType={item.config.elementType}
                  elementConfig={item.config.elementConfig}
                  value={item.config.value}
                  invalid={!item.config.valid}
                  used={item.config.used}
                  change={(event) => this.inputChangeHandler(event, item.id)}
                />
              );
            })}
            <Button btnType="form">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Account;
