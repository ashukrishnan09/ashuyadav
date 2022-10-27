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
import Video from './Components/vidplayer/Video';




function App() {
  const [songs] = useState([
    {
      title: "Faded",
      artist: "Iselin",
      img_src: "./images/song-5.jpg",
      src: "./music/Faded.mp3"
    },
    {
      title: "Forget Me Too ",
      artist: "Kelly",
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
      title: "Something Just Like",
      artist: "jabase",
      img_src: "./images/song-5.jpg",
      src: "./music/Something-just-like-this.mp3"
    },
    {
      title: "Dusk Till Dawn",
      artist: "Zayn Malik",
      img_src: "./images/song-5.jpg",
      src: "./music/Dusk-Till-Dawn.mp3"
    },
    {
      title: "Closer",
      artist: "Chainsmoker",
      img_src: "./images/song-5.jpg",
      src: "./music/Closer.mp3"
    },
    {
      title: "Not Afraid",
      artist: "Artist",
      img_src: "./images/song-5.jpg",
      src: "./music/Not-Afraid.mp3"
    },
    {
      title: "Pretty Girl",
      artist: "Maggie",
      img_src: "./images/song-4.jpg",
      src: "./music/Pretty-Girl.mp3"
    },
    {
      title: "Let Me Down Slowly",
      artist: "Alex",
      img_src: "./images/song-5.jpg",
      src: "./music/Let-Me-Down-Slowly.mp3"
    },
    {
      title: "On My Way",
      artist: "Alan Walker",
      img_src: "./images/song-5.jpg",
      src: "./music/On-My-Way.mp3"
    },
    {
      title: "Love Me Like You Do",
      artist: "Iselin",
      img_src: "./images/song-5.jpg",
      src: "./music/Love-Me-Like-You-Do.mp3"
    },
    {
      title: "Impress",
      artist: "Artist",
      img_src: "./images/song-5.jpg",
      src: "./music/Impress.mp3"
    },
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
      <Video/>
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
