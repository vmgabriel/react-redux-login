// Libraries
import {
  createMuiTheme,
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3e933e',
      main: '#197522',
      dark: '#005200',
      contrastText: '#e9e9df',
    },
    secondary: {
      ligth: '#836431',
      main: '#5e4311',
      dark: '#4f4538',
      contrastText: '#dfe0df',
    },
  },
  background: {
    paper: '#ddd',
    default: '#fbfbfb',
  },
});

export default theme;
