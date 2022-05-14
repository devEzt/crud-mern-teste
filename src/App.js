// Import React
import React from 'react'

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

// Import Custom CSS
import './App.css'

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Import other React Component
import FuncionarioCreate from './Components/FuncionarioCreate'
import FuncionarioEdit from './Components/FuncionarioEdit'
import FuncionarioList from './Components/FuncionarioList'

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-funcionario'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-funcionario'} className="nav-link">
                    Criar Funcionario
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/funcionario-list'} className="nav-link">
                    Funcionario List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<FuncionarioCreate />} />
                  <Route path="/create-funcionario" element={<FuncionarioCreate />} />
                  <Route path="/edit-funcionario/:id" element={<FuncionarioEdit />} />
                  <Route path="/funcionario-list" element={<FuncionarioList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  )
}

export default App
