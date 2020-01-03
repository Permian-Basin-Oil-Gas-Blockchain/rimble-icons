function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalCellular2Bar = function SvgSignalCellular2Bar(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("path", {
    fillOpacity: 0.3,
    d: "M2 22h20V2z"
  }), React.createElement("path", {
    d: "M14 10L2 22h12z"
  }));
};

SvgSignalCellular2Bar.displayName = "SvgSignalCellular2Bar";
SvgSignalCellular2Bar.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgSignalCellular2Bar;