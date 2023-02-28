import React from 'react'

import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


const WolfTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#1e2124',
      padding: '10px',
      fontSize:'12px'
    },
}));

  export default WolfTooltip