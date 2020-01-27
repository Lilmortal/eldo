import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button.tsx";

storiesOf("default", module).add("default button", () => (
  <Button text="wee">test</Button>
));
