// @ts-nocheck
import React, { createContext, useState } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "the way of wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 },
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: books.length + 1 }])
  }

  const removeBook = (id) => {
    setBooks([...books.filter((book) => book.id != id)])
  }
  console.log("TCL:: addBook -> books", books)

  return (
    <BookContext.Provider value={{ books, removeBook, addBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
