var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
var Svg = styled("svg")({
  flex: "none"
}, space, color);

var SvgFair = function SvgFair(props) {
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
      fill: "#C99705"
    }),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 18.19l.032-.13c.117-.448.421-.724.875-.85.462-.127.902-.079 1.302.193.131.088.23.202.294.344.018.038.053.07.08.105.03-.035.073-.065.088-.104.099-.262.209-.52.283-.788.402-1.455.795-2.91 1.19-4.366.015-.057.025-.116.04-.185h-.3c-.331-.006-.664.003-.994-.022-.45-.035-.755-.311-.763-.737-.008-.372.212-.657.633-.73.294-.051.603-.031.905-.037.29-.004.58 0 .87-.003.027 0 .07-.03.078-.053.073-.258.141-.518.21-.778.004-.015 0-.032 0-.057-.328 0-.653.01-.977-.004a1.325 1.325 0 01-.714-.215c-.265-.182-.338-.442-.295-.73.044-.291.23-.486.529-.568.105-.028.219-.04.329-.041.468-.005.936-.004 1.404.003.114.002.164-.035.209-.13.156-.324.309-.652.49-.963a7.123 7.123 0 011.197-1.565c.632-.609 1.377-1.04 2.269-1.199.593-.105 1.19-.13 1.771.07.35.12.61.342.773.662.103.203.203.403.191.64-.032.676-.606 1.105-1.125 1.122-.4.014-.743-.095-1.008-.383-.25-.272-.281-.587-.18-.924.007-.025.017-.05.026-.075l-.02-.026c-.052.033-.11.06-.152.1a3.06 3.06 0 00-.563.741 9.024 9.024 0 00-.73 1.773c-.005.019-.004.04-.007.072.162 0 .322.002.48 0 .231-.004.46-.003.68.08.268.1.473.264.527.545.055.286-.002.51-.268.729-.218.178-.473.215-.74.224-.355.012-.712.015-1.067.021-.047 0-.085 0-.098.06-.058.245-.121.49-.182.734-.003.012 0 .026.002.047.25 0 .498-.008.746.001.266.01.512.08.706.272.237.235.27.573.072.838-.064.086-.142.165-.211.247-.146.171-.349.23-.565.239-.37.014-.74.018-1.11.016-.1 0-.14.03-.163.119-.131.52-.257 1.042-.402 1.56-.293 1.04-.619 2.07-1.152 3.026-.257.466-.581.891-.961 1.263-.558.541-1.218.912-2.007 1.05-.538.093-1.081.125-1.612-.036-.45-.137-.761-.416-.881-.866L6 18.39v-.2z",
      fill: "white"
    })
  );
};

SvgFair.displayName = "SvgFair";
SvgFair.defaultProps = {
  size: 24,
  color: "#C99705"
};
export default SvgFair;