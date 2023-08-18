import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Books from './components/Books.tsx'
import Recommendations from './components/Recommendations.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="books/:genre" element={<Books />} />
      <Route path="recommendations" element={<Recommendations />} />
    </Route>
  )
)

export default router
