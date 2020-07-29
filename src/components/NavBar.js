// @ts-nocheck
import React, { useContext } from "react"
import { BookContext } from "./../contexts/BookContext"

const NavBar = () => {
  const { books } = useContext(BookContext)
  console.log("TCL:: NavBar -> books", books)
  return (
    <div className="navBar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}

export default NavBar
