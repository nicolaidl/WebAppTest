// Importing combination
import React, { Component } from "react";

export default class ContentPage extends Component {
  constructor(props) {
    super(props);

    const { text } = props;

    let entryPages = [];
    var contentful = require("contentful");
    var client = contentful.createClient({
      space: "6gnju6i55n7m",
      accessToken: "4gRnjpFD5qoshhkGHBDCIoJukzD4e_AL3i4s-cC-jgk",
    });

    client.getEntry("1bi6meVzrEMHLGFqOIRkvk").then(function (entry) {
      //console.log(entry.fields);
      entryPages = entry.fields.content.filter(
        (x) => x.sys.contentType.sys.id === "page"
      );
    });

    this.state = { pages: entryPages };
  }

  getClick() {
    if (this.state.color === "#4cb96b") this.setState({ color: "#aaa" });
    else this.setState({ color: "#4cb96b" });
  }

  getClick2() {
    return this.state.pages;
  }

  render() {
    return (
      <div>
        {console.log("pages is " + this.state.pages)}
        {console.log("pages is " + this.getClick2())}
        <h1>Pages</h1>
        count is {this.state.pages[0]}
        <h1> her {this.state.pages} </h1>
        {this.state.pages.forEach((element) => {
          <h1>{element}]</h1>;
        })}
      </div>
    );
  }
}
