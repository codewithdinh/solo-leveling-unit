// import { useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import CreateUnit from './pages/CreateUnit'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import EditUnit from './pages/EditUnit'
import ViewUnit from './pages/ViewUnit'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/new",
      element: <CreateUnit />
    }
    ,
    {
      path: "/gallery",
      element: <Gallery />
    },
    {
      path: "/edit/:id",
      element: <EditUnit />
    }
    ,
    {
      path: "/view/:id",
      element: <ViewUnit />
    }
  ])
  return (
    <>
      <div className="nav-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>Create New Unit</button></Link>
        <Link to="/gallery"><button>Gallery</button></Link>
      </div>
      {routes} {/* Render the routes here */}

    </>
  )
}

export default App
