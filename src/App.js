import './App.css';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonial'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'



function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      
     
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
