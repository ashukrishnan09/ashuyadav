import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import Experience from './Components/experience/Experience';
import About from './Components/about/About';
import Services from './Components/services/Services'

import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Player from './Components/Player';




function App() {
  const [songs] = useState([
    {
      title: "Faded",
      artist: "Iselin",
      img_src: "./images/song-5.jpg",
      src: "./music/Faded.mp3"
    },
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-5.jpg",
      src: "./music/on-n-on.mp3"
    },

    {
      title: "In Your Eyes",
      artist: "ft Alida",
      img_src: "./images/song-5.jpg",
      src: "./music/In-your-eye.mp3"
    },
    
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);




  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
     
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
