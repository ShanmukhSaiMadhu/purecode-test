import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function HeaderActivity() {
  return (
    <Card elevation={0} sx={{borderRadius: "0.5rem"}} >
      <CardHeader title="Activity" sx={{paddingLeft: "2rem", marginTop: "0.6rem", paddingBottom: "0px"}} />
      <List sx={{marginTop: "0.5rem"}}>
        <ListItem>
          <ListItemText primary="Order #11639 was placed" secondary="a day ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11638 was placed" secondary="2 days ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11637 was placed" secondary="2 days ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11636 was placed" secondary="2 days ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11635 was placed" secondary="2 days ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11634 was placed" secondary="2 days ago"  />
        </ListItem>

        <ListItem>
          <ListItemText primary="Order #11633 was placed" secondary="2 days ago"  />
        </ListItem>
      </List>
    </Card>
  )
}

export default HeaderActivity

