import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TutorialList from './components/TutorialList'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={'/tutorials'} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={'/tutorials'} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/add'} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path={'/'} element={<TutorialList />}>
              {' '}
            </Route>
          </Routes>{' '}
        </div>
      </div>
    )
  }
}

export default App
