import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import HeaderMiddle from './HeaderMiddleComponent';
import HeaderActivity from './HeaderActivity';

import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div className='header'>
      <div style={{marginLeft: "0.5rem"}}>
        <Typography variant="h4" sx={{fontWeight: "600"}}>Hello there, admin@example.com</Typography>
        <Typography variant="body1">Here is some information we gathered about your store</Typography>
      </div>

      <Grid container spacing={3} sx={{marginTop: "2rem"}}>
        <Grid xs={8}>
          <HeaderMiddle/>
        </Grid>
        <Grid xs={4}>
          <HeaderActivity />
        </Grid>
      </Grid>
    </div>
  )
}

export default Header