import React from "react";
import styled, { css } from 'styled-components'



// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   // ${props => props.primary && css`
//   //   background: palevioletred;
//   //   color: white;
//   // `}
// `;

const style = {
  body: {
    fontFamily: "Times New Roman",
    fontSize: "15px", //font-size: 15px;
  },
  header1: {
    fontFamily: "Times New Roman",
    fontSize: "38px", //font-size: 15px;
    color: "white",
  },
};

//font-family: "Times New Roman", Times, serif

// const P = styled.p`
// background: black;
// border-radius: 3px;
// border: 2px solid palevioletred;
// margin: 0.5em 1em;
// padding: 0.25em 1em;
// color: black;

// ${props => props.header1 && css`
//     background: palevioletred;
//     color: white;
//   `}
// `
export default function Text(props) {

  return (
    // <P >
    //   {props.text}
    // </P>
  
    <p className="text" style={style[props.type]}>
      {props.text}
    </p>
  );
}

Text.defaultProps = {
  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  type: "body",
};
