import Grid from '@mui/material/Grid';
import Menu from './component/layout/Menu';
import View from './component/layout/View';

function App() {
  return (
    <div className='App'>
      <Grid container>
        <Grid item xs={12} sm={3} md={2} color='white' bgcolor='black' minHeight={{xs: 'initial', sm: '100%'}}>
          <Menu/>
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <View/>
        </Grid>
      </Grid>      
    </div>
  );
}

export default App;
