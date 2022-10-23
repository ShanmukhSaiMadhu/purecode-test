import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';

function SalesAndOrders() {

    const cardIcons = {
        height: "4.5rem",
        width: "3rem",
        fontSize: "1rem",
        color: "#056DFF"
    }

  return (
    <Grid container spacing={3} sx={{marginBottom: "1rem", padding: "0px"}}>
        <Grid xs={6}>
            <Card elevation={0} sx={{borderRadius: "0.5rem"}}>
                <Grid container spacing={2}>
                    <Grid xs={8} sx={{padding: "0px"}}>
                        <CardContent sx={{paddingBottom: "5px"}}>
                            <Typography variant="h5" component="div">Sales</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{marginTop: "0px"}}>Today</Typography>
                            <Typography variant="h4" align='right'>PLN 0.00</Typography>
                        </CardContent>
                    </Grid>
                    
                    <Grid xs={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CardContent sx={{backgroundColor: "#EFF5F8", borderRadius: "0.5rem", height: "4rem", width: "3rem"}}>
                            <InsertChartOutlinedIcon sx={cardIcons} />
                        </CardContent>
                        
                    </Grid>
                </Grid>
            </Card>
        </Grid>
        <Grid xs={6}>
            <Card elevation={0} sx={{borderRadius: "0.5rem"}}>
                <Grid container spacing={2}>
                    <Grid xs={8} sx={{padding: "0px"}}>
                        <CardContent sx={{paddingBottom: "5px"}}>
                            <Typography variant="h5" component="div">Orders</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{marginTop: "0px"}}>Today</Typography>
                            <Typography variant="h4" align='right'>0</Typography>
                        </CardContent>
                    </Grid>
                    
                    <Grid xs={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CardContent sx={{backgroundColor: "#EFF5F8", borderRadius: "0.5rem", height: "4rem", width: "3rem"}}>
                            <GradingOutlinedIcon sx={cardIcons} />
                        </CardContent>
                        
                    </Grid>
                </Grid>
            </Card>
        </Grid>
      </Grid>
  )
}
export default SalesAndOrders