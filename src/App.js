import './App.css';
import Header from './components/Header';
import NavComponent from './components/NavComponent';
import SideList from './components/SideList';
import Grid from '@mui/material/Unstable_Grid2'; 


function App() {
  return (
    <div className="App">
      <NavComponent />
      <Grid container spacing={2} sx={{marginTop: "1.2rem"}}>
        <Grid md={2} sx={{paddingTop: "0rem"}} >
          <SideList />
        </Grid>
        <Grid md={10}>
          <Header />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
