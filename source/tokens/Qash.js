import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
const Svg = styled("svg")(
  {
    flex: "none"
  },
  space,
  color
);

const SvgQash = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    fill={"currentcolor"}
    height={props.size}
    width={props.size}
  >
    <path
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1347E8"
    />
    <path
      d="M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm7.83 7.912l-.667.007-.003-.28.668-.005.003.278h-.001zm-.171-1.442l-.662.092-.038-.277.661-.091.039.277zm-.57-1.756l.116.255-.609.276-.115-.254.607-.277h.001zm-.834-1.272l.184.21-.502.441-.184-.21.502-.44zm-.979-1.044l.212.183-.436.505-.212-.182.436-.506zm-1.166-.944l.234.152-.364.56-.234-.152.364-.56zm-1.327-.655l.27.071-.17.646-.27-.072.17-.644v-.001zm-1.46-.359l.279.023-.056.666-.278-.023.056-.666zm-1.51-.176h.28v.668h-.28v-.668zm-1.24.176l.055.665-.279.024-.055-.665.279-.024zm-1.46.359l.17.645-.27.072-.17-.645.27-.072zm-1.326.654l.363.561-.235.152-.363-.56.235-.152zM6.62 6.15l.436.505-.212.182-.435-.505.211-.183zM5.642 7.19l.503.441-.185.21-.502-.44.184-.21V7.19zM4.81 8.463l.607.277-.114.255-.608-.278.115-.254zm-.532 1.48l.662.091-.038.278-.662-.092.038-.278zm-.207 1.44l.668.006-.003.28-.667-.007.002-.28zm.062 1.569l.664-.068.028.278-.664.067-.028-.277zm.302 1.42l.651-.151.064.272-.651.152-.064-.273zm.728 1.698l-.138-.244.58-.331.139.243-.58.332zm.947 1.19l-.204-.192.46-.486.203.192-.46.486zm1.069.95l-.228-.162.388-.544.227.162-.388.544zm1.247.833l-.247-.13.31-.59.248.13-.31.59zm1.381.531l-.276-.046.11-.659.276.047-.11.658zm1.207.227l-.005-.668.28-.003.005.668-.28.003zM5.055 12A6.953 6.953 0 0112 5.055 6.953 6.953 0 0118.945 12 6.953 6.953 0 0112 18.945 6.953 6.953 0 015.055 12zm7.49 7.86l-.01.002-.06-.665.278-.025.009-.002.06.665-.277.026zm1.488-.313l-.116-.657.275-.05.117.66-.276.047zm1.42-.49l-.228-.628.263-.095.228.628-.262.095zm1.262-.773l-.413-.525.219-.174.413.525-.22.174zm1.075-1.047l-.48-.464.194-.202.48.465-.194.2zm.879-1.13l-.54-.393.165-.226.54.393-.165.227zm.714-1.342l-.631-.22.092-.264.63.22-.091.264zm.394-1.522l-.668-.03.013-.28.668.03-.013.28zm-5.125 2.306c.111.12.114.303.004.412-.11.11-.293.104-.412-.01l-.208-.21-.474-.48a2.076 2.076 0 01-.987.2H11.27c-1.18.044-2.271-.546-2.183-2.463.004-.08-.005-1.112-.005-1.194l.002-.774c-.002-1.912.465-2.78 1.754-3.086.146-.035.944-.053 1.096-.053h.068c.153 0 .857.018 1.003.053 1.288.307 1.755 1.174 1.753 3.086l.002.775c0 .082-.008 1.113-.004 1.194.048 1.035-.249 1.485-.718 1.93l.405.41.208.21zm-1.994-.696c.149 0 .297-.021.44-.063l-.268-.27-.208-.211c-.113-.12-.115-.303-.005-.411.11-.11.293-.105.412.008l.208.21.374.38a.956.956 0 00.055-.055c.35-.366.516-.672.483-1.414-.002-.053-.003-.053.002-.985l.002-.238-.001-.523c-.001-.32-.002-.207-.002-.252.001-.847-.095-1.584-.301-1.916-.123-.198-.334-.42-.974-.574-.29-.024-.58-.037-.871-.038h-.07c-.192 0-.837.019-.963.038-.64.154-.852.376-.974.574-.207.332-.303 1.069-.301 1.917l-.002.25v.762c.006.931.006.933.003.985-.034.742.133 1.048.483 1.414.325.34.727.413 1.008.413l.06-.002h1.349l.06.001z"
      fill="white"
    />
  </Svg>
);

SvgQash.displayName = "SvgQash";
SvgQash.defaultProps = {
  size: 24,
  color: "#1347E8"
};
export default SvgQash;
