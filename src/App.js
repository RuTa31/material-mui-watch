import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Home from './page/Home';
import CustomStyles from './theme/theme';


function App() {
  return (
    <Box sx={{backgroundColor: '#3f4245'}}>
      <CustomStyles>
        <Home />
      </CustomStyles>
    </Box>
  );
}

export default App;
