import Nav from './Nav.tsx'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="title">
        <h1>BOOK-KEEPER'S LIBRARY</h1>
        <p>Navigating Book-Keepers' Library!</p>
      </div>

      <div className="main">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
