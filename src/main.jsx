import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import MInfo from './MInfo.jsx'
import Main from './Google.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card name="Anagh" description="Student(s) in Mr.Hare's HCI class" />
    <Card name="Computer" description="Helps Anagh do his classwork" />
    <Card name="School" description="Where Anagh learns" />
    <About />
    <Contact />
    <MInfo />
    <App />
  </StrictMode>,
)
