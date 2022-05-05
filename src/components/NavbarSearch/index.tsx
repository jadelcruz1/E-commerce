//import React from 'react' ;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';

import ButtonSearch from '../buttonSearch/index'



const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',

      },
    },
  });

  

export default function NavbarSearch()  {
    return (
        <>

        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <Typography variant="h6" color="inherit" component="div">
                    Zatini 
                    </Typography>                  
                 </IconButton>
                  <ButtonSearch />
                 
                
                    
                </Toolbar>
            </AppBar>           
        
        </ThemeProvider>       
        
        </>      
    
    )
}