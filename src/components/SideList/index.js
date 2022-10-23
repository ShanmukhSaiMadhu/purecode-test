import React from 'react'
import Typography from '@mui/material/Typography';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SideList() {

    const sx = {
      color: "#78778F",
      minWidth: "25px",
      fontSize: "1.2rem",
      fontWeight: "600",
      padding: "0.4rem",
      ":hover": {
        color: "#111"
      }
    }

    const buttonHover = {
      paddingBottom: "1rem",
      "&$selected": {
        backgroundColor: "#fff",
        color: "#111",
        "& .MuiListItemIcon-root": {
          color: "#111"
        }
      },
      ":hover": {
        color: "black",
        backgroundColor: "#fff",
        borderRadius: "5px",
        "& .MuiListItemIcon-root": {
          color: "black"
        }
      }
    }
  

  return (
      <nav>
        <List sx={{ fontSize: "1.3rem"}}>
          <ListItem sx={{paddingTop: "0rem"}}>
            <Typography variant="h4" sx={{fontWeight: "600", paddingLeft: "0.5rem"}} >s</Typography>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover} >
              <ListItemIcon sx={sx} >
                <WidgetsOutlinedIcon sx={{fontSize: "25px"}} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={sx} disableTypography/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <BusinessCenterOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Catalog" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <ShoppingCartOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Orders" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <PersonOutlineOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Customers" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <LocalOfferOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Discounts" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <DescriptionOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Pages" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <AppsOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Apps" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <LanguageOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Translations" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={buttonHover}>
              <ListItemIcon sx={sx}>
                <SettingsOutlinedIcon sx={{fontSize: "25px"}}  />
              </ListItemIcon>
              <ListItemText primary="Configuration" sx={sx} disableTypography />
            </ListItemButton>
          </ListItem>
        </List>

        <KeyboardArrowLeftOutlinedIcon sx={{color: "#4071B6", backgroundColor: "#fff", padding: "0.7rem", borderRadius: "5px", marginLeft:"0.6rem"}} />
      </nav>
      
  )
}

export default SideList