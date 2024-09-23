import Form from './components/Form'
import Navbar from './components/Navbar'
import PasswordGenerator from './components/PasswordGenerator'
import ProgressBar from './components/ProgressBar'
import Timer from './components/Timer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Navbar isReversed={true} />
      <ProgressBar />
      <Form />
      <Timer />
      <PasswordGenerator />
    </div>
  )
}

export default App
