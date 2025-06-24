import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

// Import styles from base and project.
import "../../../../contrib/itkdev_base_theme/css/styles.css";
import "../css/tailwind.compilation.css";

Alpine.plugin(persist);
window.Alpine = Alpine;
Alpine.start();

// Require project theme assets
require("./components/fontawesome");
require("./components/project-scripts");
require("./components/project-icons");
