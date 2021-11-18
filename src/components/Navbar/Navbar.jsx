import React from "react";
import {AppBar, Toolbar, IconButton, Badge, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from "@material-ui/icons";

import logo from '../../assets/codeLogo.png';
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return(
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='jpCommerce.js' height='25px' className={classes.image} />
                        JP's Mock Guitar Shop
                    </Typography>
                    <div className={classes.grow}/>
                    <div>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar