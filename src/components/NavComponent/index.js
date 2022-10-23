import * as React from 'react';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


function NavComponent() {
  return (
    <div className='nav' style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
        <BoltSharpIcon sx={{backgroundColor:"#F7F8FA", padding: "0.5rem", color: "transparent"}} stroke={"#767988"} stroke-width={1.5} />
        
        <FormControl sx={{ m: 1, minWidth: 120,'.MuiOutlinedInput-notchedOutline': { border: 0 }, backgroundColor:"white"}} size="small" className='select-tab'>
          <Select sx={{ bacbackgroundColor: "#FFFFFF", padding: "0 1rem" }}
              value="Channel-PLN"
          >
              <MenuItem value="Channel-PLN">Channel-PLN</MenuItem>
          </Select>
        </FormControl>

        <Card elevation={0} sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0.3rem 0.7rem"}}>
          <Typography sx={{backgroundColor: "#056DFF", color: "#fff", borderRadius: "50%", height: "100%", width: "100%", fontSize: "0.9rem", padding: "0.2rem" }}>AD</Typography>
          <Typography sx={{padding: "0.3rem 0.6rem"}}>admin@example.com</Typography>
        </Card>
    </div>
  )
}
export default NavComponent