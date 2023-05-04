import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./cartwidget.module.scss"
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CartWidget() {

  const { cartLenght } = useContext(CartContext)
  
  return (
    <IconButton aria-label="cart" sx={{mr:3}}>
      <StyledBadge badgeContent={cartLenght} color="secondary" max={99}>
        <ShoppingCartIcon fontSize="large"/>
      </StyledBadge>
    </IconButton>
  );
}
