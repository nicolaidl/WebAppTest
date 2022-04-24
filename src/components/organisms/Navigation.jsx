/** @jsxImportSource @emotion/react */ // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
import React from "react";
import { css } from "@emotion/react";
import NavigationMolecule from "../molecules/Navigation";
import Spacer from "../atoms/Spacer";

// const style = css`
//   .navigation-organism {
//     @media (min-width: 1201px) {
//       padding-top: 6rem;
//       margin-top: 6rem;
//     }

//     @media (max-width: 1200px) {
//       padding-top: 3rem;
//       margin-top: 3rem;
//     }

//     @media (max-width: 600px) {
//       padding-top: 1em;
//       margin-top: 1rem;
//     }
//   }
// `;

const style = css`
  .navigation-organism-container {
    @media (min-width: 1201px) {
      padding-top: 1em;
    }

    @media (max-width: 1200px) {
      padding-top: 1em;
    }

    @media (max-width: 600px) {
      padding-top: 1em;
    }
  }
`;

export default function Navigation(props) {
  return (
    <Spacer css={style} style={{ position: "" }}>
      <div className="navigation-organism">
        <div className="navigation-organism-container">
          <NavigationMolecule />
        </div>
      </div>
    </Spacer>
  );
}

Navigation.defaultProps = {
  backgroundColor: "#fff",
  text: "Default text",
  textColor: "#8A8A8A",
};
