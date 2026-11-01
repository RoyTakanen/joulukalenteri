import adventCalendar from './adventCalendar.jsx'
import './app.css'

// Strict mode is not used to avoida double rendering of the app, which can cause issues with the advent calendar functionality.
function App() {
  return (
    <>
      {adventCalendar()}
    </>
  )
}

export default App
