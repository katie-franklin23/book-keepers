import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/bookDrop.gif"
          alt="A person dropping some books to read!"
        />
        <h1 className="app-title"> BOOK-KEEPERS OF DEV-AC📚</h1>
      </div>

      <div className="main">
        {/* <h1>App</h1>
      <p>React development has begun!</p> */}
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
