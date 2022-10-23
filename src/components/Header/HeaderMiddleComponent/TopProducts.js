import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TopProducts() {
  return (
    <Card elevation={0} sx={{borderRadius: "0.5rem", padding: "0.8rem"}}>
        <CardContent>
            <Typography variant='h6' sx={{fontWeight: "600"}}>Top Products</Typography>
        </CardContent>

        <CardContent>
            <Typography>No products found</Typography>
        </CardContent>
    </Card>
  )
}

export default TopProducts