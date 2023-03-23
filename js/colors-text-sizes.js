const themes = {
  //Colors
  headerBackgroundColor: "#161b22",
  bodyBackgroundColor: "#010409",
  contentBackgroundColor: "#0D1117",

  textColor: "#ffffff",
  textColorOnHover: "#254A8A",
  
  linkColor: "#ffffff",
  linkColorOnHover: "#254A8A",

  button: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
  buttonHover: "linear-gradient(90deg, #2a5298 100%, #1e3c72 0%)",

  hamburgerMenuBackgroundColor: "#010409",

  profileMenuBackgroundColor: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
  profileLabelColor: "#161b22",

  //Textsizes
  h1DesktopSize: "35px",
  h2DesktopSize: "35px",
  h3DesktopSize: "20px",

  h1MobileSize: "35px",
  h2MobileSize: "35px",
  h3MobileSize: "20px",

  pDesktopSize: "18px",
  pMobileSize: "18px",

  pNavlinksDesktopSize: "18px",
  pNavlinksMobileSize: "14px",

  buttonDesktopSize:"16px",
buttonMobileSize:"12",

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

root.style.setProperty("--profile-menu-background-color", themes.profileMenuBackgroundColor);
root.style.setProperty("--profile-label-color", themes.profileLabelColor);

// Set CSS variables to the corresponding textsizes values from the themes object

root.style.setProperty("--h1-Desktop-Size", themes.h1DesktopSize);
root.style.setProperty("--h2-Desktop-Size", themes.h2DesktopSize);
root.style.setProperty("--h3-Desktop-Size", themes.h3DesktopSize);

root.style.setProperty("--h1-Mobile-Size", themes.h1MobileSize);
root.style.setProperty("--h2-Mobile-Size", themes.h2MobileSize);
root.style.setProperty("--h3-Mobile-Size", themes.h3MobileSize);

root.style.setProperty("--p-Desktop-Size", themes.pDesktopSize);
root.style.setProperty("--p-Mobile-Size", themes.pMobileSize);

root.style.setProperty("--navlinks-Desktop-Size", themes.pNavlinksDesktopSize);
root.style.setProperty("--navlinks-Mobile-Size", themes.pNavlinksMobileSize);

root.style.setProperty("--button-Desktop-Size", themes.buttonDesktopSize);
root.style.setProperty("--button-Mobile-Size", themes.buttonMobileSize);
