import CMS from "decap-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
// import styles from "./cms-preview-templates/client-first-8950b2-1969c379705589633e6.webflow.css";

import PagePreview from "./cms-preview-templates/pages";

// CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("pages", PagePreview);
CMS.init();
