import React from 'react'
import {Box , Stack , Typography} from '@mui/material';

import Logo from '../assets/images/muscle.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4' >
      <Stack gap='50px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='60px' height='40px'/>
        <Typography variant='h5' pb='40px' mt='20px'>
          Release the Sweat 💪💪 Get your dream Physique
        </Typography>
        <Typography variant='h6' pb='40px'>
          Crafted with ❤️ by Arya Agrawal
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
