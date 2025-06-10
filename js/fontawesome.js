// Import icon names from the project theme
import {
  projectFaBrandIcons,
  projectFaSolidIcons,
  projectFaRegularIcons,
  projectFaProRegularIcons,
} from "../../itkdev_project_theme/js/project-icons.js";

// Create arrays with the icon names and add additional icons
const projectFaBrandCustomIconsList = [...projectFaBrandIcons, "faXTwitter"];
const projectFaSolidCustomIconsList = [
  ...projectFaSolidIcons,
  "faBars",
  "faXmark",
  "faSun",
  "faMoon",
  "faMagnifyingGlass",
  "faAngleDown",
  "faUser",
  "faSignOut",
];
const projectFaRegularCustomIconsList = [
  ...projectFaRegularIcons,
  "faWindowClose",
];

const projectFaProRegularCustomIconsList = [
  ...projectFaProRegularIcons,
  "faCircleInfo"
];

// Import the svg core
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// Import all icons
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as proRegularIcons from "@fortawesome/pro-regular-svg-icons";

// Get specific icons based on the lists
const selectedBrandIcons = projectFaBrandCustomIconsList
  .map((iconName) => brandIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedSolidIcons = projectFaSolidCustomIconsList
  .map((iconName) => solidIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedRegularIcons = projectFaRegularCustomIconsList
  .map((iconName) => regularIcons[iconName])
  .filter((icon) => icon !== undefined);

const selectedProRegularIcons = projectFaProRegularCustomIconsList
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
