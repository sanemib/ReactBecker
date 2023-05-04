import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./categories.module.scss"

function Categories() {

  const  activeStyle = {
    backgroundColor: "#c9ad7b",
  }

  return (
    <ul className={styles.container}>
        <NavLink  className={styles.NavLink} style={({isActive})=>(isActive ? activeStyle : undefined)} to="/categories/almacenamiento">
          <li>Almacenamiento</li></NavLink>
        <NavLink  className={styles.NavLink} style={({isActive})=>(isActive ? activeStyle : undefined)} to="/categories/memoria ram">
          <li>Memorias RAM</li></NavLink>
        <NavLink  className={styles.NavLink} style={({isActive})=>(isActive ? activeStyle : undefined)} to="/categories/placa de video">
          <li>Placas de video</li></NavLink>
        <NavLink  className={styles.NavLink} style={({isActive})=>(isActive ? activeStyle : undefined)} to="/categories/monitor">
          <li>Monitores</li></NavLink>
        <NavLink  className={styles.NavLink} style={({isActive})=>(isActive ? activeStyle : undefined)} to="/products">
          <li>Todos los productos</li></NavLink>
    </ul>
  )
}

export default Categories