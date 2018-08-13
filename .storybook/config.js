import { configure, addDecorator } from "@storybook/react";
import { setDefaults, withInfo } from "@storybook/addon-info";
import { withNotes } from "@storybook/addon-notes";
import { configureViewport } from "@storybook/addon-viewport";

addDecorator(withNotes);
addDecorator(withInfo);
configureViewport();

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true // Displays the source of story Component
});

function loadStories() {
  // automatically import all files ending in *.stories.js
  const req = require.context("../src/ui", true, /\.stories\.js$/);
  function loadStories() {
    req.keys().forEach(filename => req(filename));
  }

  configure(loadStories, module);
}

configure(loadStories, module);
