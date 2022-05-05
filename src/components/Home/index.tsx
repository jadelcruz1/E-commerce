import React from "react";
import Navbar from '../Navbar/index'
import NavbarSearch from '../NavbarSearch'
import Footer from '../Footer'



export default function Home(){
    return (
        <>
            <NavbarSearch/>
            <Navbar />
          
          <h1> Ver se deu certo!</h1>  
          <Footer />      
        </>
       
    )    
}