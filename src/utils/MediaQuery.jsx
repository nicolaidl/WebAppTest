import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowDimensions.width < 600) {
    return "phone";
  } else if (windowDimensions.width >= 600 && windowDimensions.width < 768) {
    return "tablet";
  } else {
    return "laptop";
  }
}

export const mobileViewPort = 600;

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }

// // export default class MediaQuery extends React.Component {
// //     constructor(props) {
// //        super(props);
// //        this.state = { windowWidth: window.innerWidth };
// //      }

// //     handleResize = (e) => {
// //      this.setState({ windowWidth: window.innerWidth });
// //     };

// //     componentDidMount() {
// //      window.addEventListener("resize", this.handleResize);
// //     }

// //     componentWillUnmount() {
// //      window.addEventListener("resize", this.handleResize);
// //     }

// //      render() {
// //        const { windowWidth } = this.state;
// //        return <div>Current window width: {windowWidth}</div>
// //      }
// //    }
