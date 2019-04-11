const theme = "dark";
//const theme = 'light';
export const lightTheme = theme === "light";

export const color = lightTheme ? "white" : "#17a2ff";
export const color2 = lightTheme ? "white" : "#D3D0CB";
export const color3 = lightTheme ? "#09f010" : "#42ff3a";
export const textColor = "#0E1428";

if (lightTheme) {
  document.body.style.background = "#e1eaee";
  document.body.style.color = "#061a44";
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? "#a9b6ff" : "#A0A0A0"
}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";
