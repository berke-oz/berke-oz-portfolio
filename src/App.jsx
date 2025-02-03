
import './App.css'
import Header from './components/header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ThemeProvider } from './context/ThemeContext'


function App() {


  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </ThemeProvider>




  )
}

export default App
