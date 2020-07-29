// @ts-nocheck
import React, { useContext } from "react"
import { ThemeContext } from "./../contexts/ThemeContext"
import { AuthContext } from "../contexts/AuthContext"

const NavBar = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const { toggleAuth, isAuthenticated } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Context</li>
      </ul>
    </nav>
  )
}

export default NavBar
