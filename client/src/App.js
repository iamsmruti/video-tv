import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Upload from './pages/Upload';

import {createTheme, ThemeProvider} from '@mui/material'
import { grey } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcc509'
    },
    secondary: grey,
  },
  typography: {
    fontFamily: 'Josefin Sans',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/upload' element={<Upload />}/>
            <Route path='/:id' element={<Stream />}/>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
