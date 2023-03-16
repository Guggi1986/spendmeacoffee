const themes = {
  headerBackgroundColor: "#161b22",
  bodyBackgroundColor: "#010409",
  contentBackgroundColor: "#0D1117",

  textColor: "#ffffff",
  textColorOnHover: "#28a745",
  
  linkColor: "#ffffff",
  linkColorOnHover: "#28a745",

  button: "#238636",
  buttonHover: "#28a745",

  hamburgerMenuBackgroundColor: "#010409",
};

// Define CSS variables for the entire document
const root = document.documentElement;

// Set CSS variables to the corresponding color values from the themes object
root.style.setProperty("--header-background-color", themes.headerBackgroundColor);
root.style.setProperty("--body-Background-Color", themes.bodyBackgroundColor);
root.style.setProperty("--content-Background-Color", themes.contentBackgroundColor);

root.style.setProperty("--text-color", themes.textColor);
root.style.setProperty("--text-color-on-Hover", themes.textColorOnHover);


root.style.setProperty("--link-color", themes.linkColor);
root.style.setProperty("--link-color-on-hover", themes.linkColorOnHover);

root.style.setProperty("--button", themes.button);
root.style.setProperty("--buttonhover", themes.buttonHover);

root.style.setProperty("--hamburger-menu-background-color", themes.hamburgerMenuBackgroundColor);


