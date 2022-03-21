import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TutorialList from './components/TutorialList'
import AddTutorial from './components/AddTutorial'
import Tutorial from './components/Tutorial'

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
            <Route path={'/'} element={<TutorialList />} />
            <Route path={'/tutorials'} element={<TutorialList />} />
            <Route path={'/add'} element={<AddTutorial />} />
            <Route path={'/tutorials/:id'} element={<Tutorial />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App
