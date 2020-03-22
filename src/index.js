import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Library from './Library'

let bookList = [
  {"title": "The Sun Also Rises", "author":"Ernest Hemingway", "pages": 260},
  {"title": "The Chronicles of Narnia", "author":"CS Lewis", "pages": 300},
  {"title": "The Count of Monte Cristo", "author":"Mark Twain", "pages": 234},
  {"title": "Cien Años de Soledad", "author":"Gabriel García Márquez", "pages": 400},
  {"title": "The Bible", "author":"God", "pages": 1000}
]

const SummerHours = () => <p>The library hours are 8am-5pm</p>

const WinterHours = () => <p>The library hours are 10am-4pm</p>



render(
<Library books={bookList} />, 
  document.getElementById('cupcake') 
)
