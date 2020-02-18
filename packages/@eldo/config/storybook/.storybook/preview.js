import { addParameters } from "@storybook/react";

import breakpoints from "@eldo/styles/_index.scss";
import "./container.scss";

const getHeight = width => `${(parseInt(width) * 4) / 3}px`;

addParameters({
  viewport: {
    viewports: {
      xs: {
        name: "xs",
        styles: {
          width: breakpoints.breakpointXs,
          height: getHeight(breakpoints.breakpointXs),
        },
      },
      sm: {
        name: "sm",
        styles: {
          width: breakpoints.breakpointSm,
          height: getHeight(breakpoints.breakpointSm),
        },
      },
      md: {
        name: "md",
        styles: {
          width: breakpoints.breakpointMd,
          height: getHeight(breakpoints.breakpointMd),
        },
      },
      lg: {
        name: "lg",
        styles: {
          width: breakpoints.breakpointLg,
          height: getHeight(breakpoints.breakpointLg),
        },
      },
      xl: {
        name: "xl",
        styles: {
          width: breakpoints.breakpointXl,
          height: getHeight(breakpoints.breakpointXl),
        },
      },
    },
  },
});
