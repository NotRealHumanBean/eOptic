import React, { Component } from "react";
import { useState, useEffect } from "react";
import Search from "./search";
import Header from "./header";


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }


  
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <Search search={Search} />
      

    );
  }
}
{/* <div>

<Header header={Header} />
<Search search={Search} />
        Name<h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1>
      </div>*/}