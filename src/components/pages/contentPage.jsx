import React, { Component } from "react";

export default class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { contentPages: ["test1", "test2"] };
  }

  componentDidMount() {
    const self = this;
    
    var contentful = require("contentful");
    var client = contentful.createClient({
      space: "6gnju6i55n7m",
      accessToken: "4gRnjpFD5qoshhkGHBDCIoJukzD4e_AL3i4s-cC-jgk",
    });

    client.getEntry("1bi6meVzrEMHLGFqOIRkvk").then(function (entry) {
      let pages2 = entry.fields.content.filter(
        (x) => x.sys.contentType.sys.id === "page"
      );

      self.setState({ contentPages: pages2 });
    });
  }

  render() {
    let getTitle = (entry) => {
      if (!!entry && !!entry.fields) {
        return entry.fields.title;
      } else {
        return "";
      }
    };

    return (
      <div style={{ paddingTop: "150px" }}>
        <h1>hej</h1>

        {this.state.contentPages.map((object, i) => (
          <h1 key={i}>hello {getTitle(object)}</h1>
        ))}
      </div>
    );
  }
}

// import React, { useState, useEffect } from "react";

// function ContentPage(props) {
//   // const [contentPages, setContentPages] = useState(props.contentPages);
//   const [contentPages, setContentPages] = useState(["test1", "test2"]);

//   useEffect(() => {
//     if (contentPages == null || contentPages.Count < 1) {
//       setContentPages(["hej1", "hej2"]);
//     }
//   }, contentPages);

//   // setContentPages = () => {
//   //   contentPages = ["hej1", "hej2"]
//   // };

//   return (
//     <div style={{ paddingTop: "150px" }}>
//       <h1>hej</h1>

//       {contentPages.forEach((element) => {
//         <h1 key={element}>hej</h1>;
//       })}
//       {/*
//       {contentPages.array.forEach(element => {
//         map
//       });((object, i) => (
//         <h1 key={i}>hello</h1>
//       ))} */}

//       {/* {contentPages.map((object, i) => (
//         <h1 key={i}>hello</h1>
//       ))} */}
//     </div>
//   );
// };
// export default ContentPage;

// //     var contentful = require("contentful");
// //     var client = contentful.createClient({
// //       space: "6gnju6i55n7m",
// //       accessToken: "4gRnjpFD5qoshhkGHBDCIoJukzD4e_AL3i4s-cC-jgk",
// //     });

// //     client.getEntry("1bi6meVzrEMHLGFqOIRkvk").then(function (entry) {
// //       console.log(entry.fields);

// //       pages = entry.fields.content.filter(
// //         (x) => x.sys.contentType.sys.id === "page"
// //       );

// //       console.log(pages)
// //     });

// //     this.setState({
// //       contentPages: pages
// //     });

// //     console.log(pages)
// //     console.log(this.state.contentPages)

// //   }

// //   render() {

// //   }
// // }
