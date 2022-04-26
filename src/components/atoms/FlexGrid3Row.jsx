// /** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// import React from "react";
// import { css } from "@emotion/react";
// import windowDimension from "../../utils/MediaQuery.jsx";
// import mobile from "../../utils/MediaQuery.jsx";

// export default function FlexGrid3Row(props) {
//   // const style = css`
//   //   & .flex-container {
//   //     flex-direction: row;
//   //     justify-content: space-evenly;
//   //     display: -webkit-flex;
//   //     display: flex;
//   //     width: 400px;
//   //     max-width: 100%;
//   //     height: 100%;
//   //     background-color: lightpink;
//   //   }
//   //   & .flex-item {
//   //     text-align: center;
//   //     background-color: lightgray;
//   //     width: 100%;
//   //     height: 100%;
//   //     margin: 10px;
//   //     center
//   //   }
//   // `;

//   const style = css`
//     & .flex-container {
//       flex-direction: row;
//       justify-content: space-evenly;
//       display: -webkit-flex;
//       display: flex;
//       width: 400px;
//       max-width: 100%;
//       height: 100%;
//       background-color: lightpink;
//       margin-left: auto;
//       margin-right: auto;
//     }
//     & .flex-item {
//       text-align: center;
//       background-color: lightgray;
//       width: 100px;
//       height: 100%;
//       margin: 10px;
//     }

//     @media (max-width: 600px) {
//       .flex-container {
//         // max-width: 120em;
//         background-color: black;
//         flex-direction: column;
//         text-align: center;
//         max-width: 100%;
//         width: 200px;

//         & .flex-item {
//           background-color: lightgray;
//         }
//       }
//     }
//   `;

//   let asd = windowDimension();
//   console.log("see this: " + asd);

//   return (
//     <div css={style} style={{ textAlign: "center" }}>
//       {windowDimension() === "mobile" ? (
//         <div className="flex-container">
//           <div className="flex-item">{props.objects[0]}</div>
//           <div className="flex-item">{props.objects[1]}</div>
//           <div className="flex-item">{props.objects[2]}</div>
//         </div>
//       ) : (
//         <div className="flex-container">
//           <div className="flex-item">{props.objects[0]}</div>
//           <div className="flex-item">{props.objects[1]}</div>
//           <div className="flex-item">{props.objects[2]}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// FlexGrid3Row.defaultProps = {
//   type: "default",
//   objects: ["flex item 1", "flex item 2", "flex item 3"],
// };
