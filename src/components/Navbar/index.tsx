//import React from 'react' ;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material';


const darkTheme = createTheme({
    palette: {     
      primary: {
        main: '#fafafa',

      },
    },
  });

export default function Navbar()  {
    return (
        <>

        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary">
                <Toolbar variant="dense">
                    <Typography  color="inherit">
                        Informe seu CEP
                    </Typography>
                    <IconButton  color="inherit" >
                    <MenuIcon />
                    <Typography color="inherit" >
                        Todas as categorias
                    </Typography>
                  
                    </IconButton>
                   
                </Toolbar>
            </AppBar>           
        
        </ThemeProvider>       
        
        </>      
    
    )
}