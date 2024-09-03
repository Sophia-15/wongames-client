import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global";
import theme from "../src/styles/theme";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: { theme },
    Provider: ThemeProvider,
  }),
];
