// import { useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import CreateUnit from './pages/CreateUnit'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const routes = useRoutes([
    {
      path: "/new",
      element: <CreateUnit />
    }
  ])
  return (
    <>
      <div>

        <h1>Welcome to the Solo Leveling Creator</h1>
        <p>Here is where you can create your very own set of units before sending them to the Dungeons!</p>
        <Link to="/new"><button>Create New Unit</button></Link>
      </div>
      {routes} {/* Render the routes here */}

    </>
  )
}

export default App
