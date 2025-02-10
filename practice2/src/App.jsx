import Navigation from './component/Navigation/Navigation';
import './App.css';
import ContactHeader from './component/ContactHeader/ContactHeader';
import Button from './component/Button/Button';
import Contact from './component/ContactForm/Contact';

function App() {
  
  return (
    <div className='App'>
      <Navigation/>
      <ContactHeader />
      <Contact />
    </div>
  )
}

export default App
