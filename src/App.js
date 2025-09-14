import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './components/pages/Form'
import ListForm from './components/pages/ListForm'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'


function App() {
  return (

    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Form />} > </Route>
          <Route path="/listform" element={<ListForm />} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>

  )
}

export default App;
