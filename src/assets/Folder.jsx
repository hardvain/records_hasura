import React from "react";

export default ({width, height}) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={width}
      height={height}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        fill="#FFA000"
        d="M416 74.667H96c-29.455 0-53.333 23.878-53.333 53.333v21.333c0 5.891 4.776 10.667 10.667 10.667h91.307a10.815 10.815 0 0110.133 7.168l11.627 35.179A32.233 32.233 0 00196.694 224h261.973c5.891 0 10.667-4.776 10.667-10.667V128c-.001-29.455-23.879-53.333-53.334-53.333z"
      ></path>
      <path
        fill="#FFC107"
        d="M480 202.667H196.693a10.965 10.965 0 01-10.133-7.168l-11.627-35.179a32.255 32.255 0 00-30.293-21.653H32c-17.673 0-32 14.327-32 32a302.411 302.411 0 0012.608 86.699l42.667 141.909c6.759 22.613 27.577 38.094 51.179 38.059H407.68c22.311.064 42.303-13.767 50.112-34.667l46.08-122.923A129.356 129.356 0 00512 234.667c0-17.673-14.327-32-32-32z"
      ></path>
    </svg>
  );
}
