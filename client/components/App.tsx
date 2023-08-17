// import Books from './Books.tsx'
// import Home from './Home.tsx'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <div>
      {/* <h1>App</h1>
      <p>React development has begun!</p> */}
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
