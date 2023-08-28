import _ from "lodash";
import theme from "../components/styles/themes";

/**
 * Generates html tabs
 * @param {number} num 
 * @returns {string} 
 */
export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check arg is valid
 * @param {string[]} arg 
 * @param {string} action 
 * @param {string[]} options 
 * @returns {boolean}
 */
export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
) => arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

/**
 * Transform current cmd & arg into array
 * then return back the array
 * @param {string[]} history 
 * @returns {string[]}
 */
export const getCurrentCmdArry = (history: string[]) =>
  _.split(history[0].trim(), " ");

/**
 * Check current render makes redirect
 * @param {boolean} rerender
 * @param {string[]} currentCommand
 * @param {string} command 
 * @returns {boolean} 
 */
export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean =>
  rerender &&
  currentCommand[0] === command &&
  currentCommand[1] === "go" &&
  currentCommand.length > 1 &&
  currentCommand.length < 4 && 
  _.includes([1, 2, 3, 4], parseInt(currentCommand[2])); 

/**
 * Check current render makes redirect for theme
 * @param {boolean} rerender 
 * @param {string[]} currentCommand 
 * @param {string[]} themes 
 * @returns {boolean} 
 */
export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: string[]
): boolean =>
  rerender && // is submitted
  currentCommand[0] === "themes" &&
  currentCommand[1] === "set" &&
  currentCommand.length > 1 && 
  currentCommand.length < 4 &&
  _.includes(themes, currentCommand[2]);

/**
 * Perform advanced tab actions
 * @param {string} inputVal 
 * @param {(value: React.SetStateAction<string>) => void} setInputVal 
 * @param {(value: React.SetStateAction<string[]>) => void} setHints 
 * @param {hintsCmds} hintsCmds 
 * @returns {string[] | undefined} 
 */
export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  if (inputVal === "themes ") {
    setInputVal(`themes set`);
    return [];
  }

  else if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal(`themes set`);
    return [];
  }

  else if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  else if (_.startsWith(inputVal, "themes set ")) {
    _.keys(theme).forEach(t => {
      if (_.startsWith(t, _.split(inputVal, " ")[2])) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }

  else if (inputVal === "projects " || inputVal === "socials ") {
    setInputVal(`${inputVal}go`);
    return [];
  }

  else if (inputVal === "projects g" || inputVal === "socials g") {
    setInputVal(`${inputVal}o`);
    return [];
  }

  else if (_.startsWith(inputVal, "socials go ")) {
    ["1.Github", "2.Dev.to", "3.Facebook", "4.Instagram"].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }

  else if (_.startsWith(inputVal, "projects go ")) {
    [
      "1.Sat Naing's Blog",
      "2.Haru Fashion",
      "3.Haru API",
      "4.AstroPaper Blog Theme",
    ].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }
};
