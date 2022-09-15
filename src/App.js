import Grid from '@mui/material/Grid';
import Menu from './component/layout/Menu';
import View from './component/layout/View';

function App() {
  return (
    <div className='App'>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Menu/>
        </Grid>
        <Grid item xs={12} md={10}>
          <View/>
        </Grid>
      </Grid>      
    </div>
  );
}

export default App;
