import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#DDDDDD',
      '200': '#CCCCCC',
      '300': '#999999',
      '400': '#777777',
    },
  },

  fontSizes: {
    xl: '1.375rem',
  },

  lineHeights: {
    7: '1.611rem',
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'black',
      },
    },
  },
});
