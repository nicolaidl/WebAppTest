

const getScreenSize = () => {
  let windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    return "phone";
  } else if (windowWidth >= 600 && windowWidth < 768) {
    return "tablet";
  } else {
    return "laptop";
  }
};
export default getScreenSize;

export const phoneViewPort = 600;

// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}
