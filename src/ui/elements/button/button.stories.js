import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import reactPng from "../../../../public/img/react.png";

const Button = styled.button`
  background: blue;
  border-radius: 8px;
  color: white;
  background-image: url(${reactPng});
`;

storiesOf("Button", module)
  .add(
    "with text",
    () => <Button onClick={action("clicked")}>Hello Button</Button>,
    { notes: "A very simple component" }
  )
  .add("with some emoji", () => (
    <Button onClick={action("button-click")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
