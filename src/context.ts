import {createContext} from "react";
import {EThemes} from "./shared/constants";

type ThemeContextType = {
    theme: EThemes;
};
export const Context = createContext<ThemeContextType>({
    theme: EThemes.DARK,
});