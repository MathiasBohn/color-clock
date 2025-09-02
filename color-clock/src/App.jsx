import { useState, useEffect } from "react"
import { format } from "date-fns"
import "./App.css"

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p className="clock">
      {format(time, "eeee, MMMM d, yyyy - hh:mm:ss a")}
    </p>
  )
}

export default App