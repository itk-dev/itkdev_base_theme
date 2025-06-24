// Import icon names from the base theme
import {
  baseFaBrandIcons,
  baseFaSolidIcons,
  baseFaRegularIcons,
  baseFaProRegularIcons,
} from "../../../../../contrib/itkdev_base_theme/js/baseIcons.js";

// Import icon names from the project theme
import {
  projectFaBrandIcons,
  projectFaSolidIcons,
  projectFaRegularIcons,
  projectFaProRegularIcons,
} from "./project-icons.js";

// Import the svg core
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// Import all icons
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as proRegularIcons from "@fortawesome/pro-regular-svg-icons";

// Create arrays with the icon names and add additional icons
const faBrandCustomIconsList = [...projectFaBrandIcons, ...baseFaBrandIcons];
const faSolidCustomIconsList = [...projectFaSolidIcons, ...baseFaSolidIcons];
const faRegularCustomIconsList = [...projectFaRegularIcons, ...baseFaRegularIcons];
const faProRegularCustomIconsList = [...projectFaProRegularIcons, ...baseFaProRegularIcons];

// Get specific icons based on the lists
const selectedBrandIcons = faBrandCustomIconsList
  .map((iconName) => brandIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedSolidIcons = faSolidCustomIconsList
  .map((iconName) => solidIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedRegularIcons = faRegularCustomIconsList
  .map((iconName) => regularIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedProRegularIcons = faProRegularCustomIconsList
  .map((iconName) => proRegularIcons[iconName])
  .filter((icon) => icon !== undefined);

// Add the icons to the library
library.add(
  ...selectedBrandIcons,
  ...selectedSolidIcons,
  ...selectedRegularIcons,
  ...selectedProRegularIcons,
);

// Run <i> to <svg> replace
dom.i2svg();