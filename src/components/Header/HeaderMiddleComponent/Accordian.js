import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from '@mui/material';

function Accordian() {

  return (
    <Card elevation={0} sx={{borderRadius: "0.5rem", marginBottom: "2rem"}}>
        <Accordion elevation={0} >
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{padding: "0.4rem"}}><strong>6 </strong>orders are ready to fulfill</Typography>
            </AccordionSummary>
        </Accordion>
        <Accordion elevation={0}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{padding: "0.4rem"}}><strong>3 </strong>payments to capture</Typography>
            </AccordionSummary>
        </Accordion>
        <Accordion elevation={0}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography sx={{padding: "0.4rem"}}>No products are out of stock</Typography>
            </AccordionSummary>
        </Accordion>
    </Card>
  )
}

export default Accordian