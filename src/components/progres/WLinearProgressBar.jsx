import { LinearProgress, linearProgressClasses, styled } from '@mui/material';



const WLinearProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#23272f",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#2f343e",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 8,
      backgroundColor: "#3B43DD",
    },
  }));

  export default WLinearProgressBar