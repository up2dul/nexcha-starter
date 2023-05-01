import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
} from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    'html, body': {
      bgColor: props.colorMode === 'dark' ? '#232946' : '#fffffe',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: props.colorMode === 'dark' ? '#fffffe' : '#121629',
    },
    'p, li': {
      color: props.colorMode === 'dark' ? '#b8c1ec' : '#57568c',
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
}) as ThemeOverride;

export default theme;
