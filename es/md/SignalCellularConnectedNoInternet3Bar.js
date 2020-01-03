function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgSignalCellularConnectedNoInternet3Bar = function SvgSignalCellularConnectedNoInternet3Bar(props) {
  return React.createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    height: props.size,
    width: props.size,
    fill: "currentcolor"
  }), React.createElement("path", {
    fillOpacity: 0.3,
    d: "M22 8V2L2 22h16V8z"
  }), React.createElement("path", {
    d: "M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
  }));
};

SvgSignalCellularConnectedNoInternet3Bar.displayName = "SvgSignalCellularConnectedNoInternet3Bar";
SvgSignalCellularConnectedNoInternet3Bar.defaultProps = {
  size: 24,
  color: "inherit"
};
export default SvgSignalCellularConnectedNoInternet3Bar;