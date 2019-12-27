var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgVerticalAlignBottom = function SvgVerticalAlignBottom(props) {
  return React.createElement(
    Svg,
    _extends({}, props, {
      viewBox: "0 0 24 24",
      height: props.size,
      width: props.size,
      fill: "currentcolor"
    }),
    React.createElement("path", { d: "M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" }),
    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
  );
};

SvgVerticalAlignBottom.displayName = "SvgVerticalAlignBottom";
SvgVerticalAlignBottom.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgVerticalAlignBottom;