var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgCnx = function SvgCnx(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      fill: "currentcolor",
      height: props.size,
      width: props.size
    }),
    React.createElement("path", {
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z",
      fill: "#4C6BAE"
    }),
    React.createElement("path", {
      opacity: 0.5,
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.787 12.758l-1.037.107c.555-1.553 1.652-2.795 3.293-3.726.155 1.287.765 2.351 1.83 3.194l-.975.101a4.127 4.127 0 003.415 3.634 4.562 4.562 0 01-2.24.889c.51.9 1.115 1.637 1.813 2.21a7.256 7.256 0 01-6.099-6.41zm14.426-1.515l1.037-.108c-.555 1.553-1.652 2.795-3.293 3.726-.155-1.287-.765-2.351-1.83-3.194l.975-.101a4.127 4.127 0 00-3.47-3.643 4.564 4.564 0 012.23-.88c-.516-.907-1.125-1.647-1.83-2.222a7.255 7.255 0 016.18 6.421z",
      fill: "white"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.691 19.22l.108 1.03c-1.553-.555-2.795-1.652-3.726-3.293 1.286-.155 2.35-.765 3.193-1.83l.102.982a4.127 4.127 0 003.709-3.477c.486.652.79 1.421.88 2.23.906-.516 1.647-1.125 2.222-1.83a7.255 7.255 0 01-6.487 6.188zM11.242 4.787l-.107-1.037c1.553.555 2.795 1.652 3.726 3.293-1.287.155-2.351.765-3.194 1.83l-.101-.975a4.127 4.127 0 00-3.643 3.47 4.563 4.563 0 01-.88-2.23c-.907.516-1.647 1.125-2.222 1.83a7.255 7.255 0 016.421-6.18z",
      fill: "white"
    })
  );
};

SvgCnx.displayName = "SvgCnx";
SvgCnx.defaultProps = {
  size: 24,
  color: "#4C6BAE"
};
export default SvgCnx;