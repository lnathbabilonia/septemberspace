import { useState, useRef } from 'react'
import './App.css'
import musicFile from './Ngiti.mp3'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <main className="love-page">

      {/* Music */}
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>

      {/* Header */}
      <header className="music-header">
        <button
          className={`music-button ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >

          {/* Replace this with your Lordicon */}
          <div className="jukebox-placeholder">
            🎵
          </div>

        </button>

        <span className="music-status">
          {isPlaying ? 'Playing...' : 'Play the note to play music'}
        </span>
      </header>

      {/* Opening */}
   
      <section className="hero">
        <p className="small-text">A little something for my Byutiful Chellie ko...</p>

        <button
          className="open-letter-button"
          onClick={() => {
            document.getElementById('letter').scrollIntoView({
              behavior: 'smooth'
            })
          }}
        >
          Open My Letter 💌
        </button>

        <p className="subtitle">I made this just for you.</p>

        <div className="icon-section">
          <div className="heart-placeholder">
            ❤️
          </div>
        </div>

        <div className="scroll-hint">↓</div>
      </section>


      {/* Letter */}
      <section id="letter" className="letter-section">

        <div className="letter">

          <p>
              To my Dearest and Byutiful and Sweet and Clingy and my Chellie Chellie ko
          </p>

          <p>
              Good Day!
          </p>

          <p>
              Good Day?? ano yan email? 😆
              Kidding aside, Do you have an idea why I want to give this message to you?
          </p>

          <p>
            Pause for a few seconds to think about it 🤭🤭🤭
          </p>
          
          <p>
            .................. 
          </p>

          <p>
            .................. 
          </p>

          <p>
            .................. 
          </p>
          <p>
            .................. 
          </p>

          <p>
            .................. 
          </p>

          <p>
            .................. 
          </p>

          <p>
            The message is for... its a secret po, jokeee pero it is someting special.
            It is something special kasi naman everday po is something special kaya po
            it is everyday Chellie day. A day I can be with my Chellie, virtually or physically
          </p>

          <p>
            This would be probably a a bit long message kaya ginawa ko nlang into a website 😆 <br></br>
          
          </p>

          <p>
            I am not able to say everything completely in this letter, all the things I want to say to my dearest
            and byutiful chellie ko. But will make this a special place to say I want to say for now.
          </p>

          <p>
            It's been a year for the first time I get to get close to you. I remember the first message I send to you.
            A GIF that says hello. <br></br>That one message na kinakabahan ako to send as I dont know how will you respond.
            Baka i seen mo lang or di mo i-seen at all.
          </p>

          <p>
            Thank you for giving me a chance to be part of your life and will be always thankful for being part of my life.
            Thank you for all of the things that you do, whether it may be little or big. <br></br><br></br> Everything that you do is special.
            The daily conversation that we have, the laughs that we share and even the quietest moments in some topic that we
            don't have anything to say about it.
          </p>

          <p>
            Being wth you has given me so many many and many more moments I want to remember. If i could have the power to remember
            every moments that we share together, I would take it. I experienced a lot of memories with you and you helped me in a 
            lot of ways. You teach me lot of things, especially cooking. <br></br><br></br>Cooking with my Chellie ko is one of the best time I always
            want to do. Cooking Chellie while I hug from the back. I really miss this moment my Chellie ko 🥹
          </p>

          <p>
            Being with you, eating with you, gala gala with you, church with you and sleeping with you. Thank you for being there for me. 
          </p>

          <p>
            I know I'm not perfect. There is a lot of days na pinaiyak kita, mali ung words ko, and a lot of days na things
            are not easy. <br></br> <br></br> But one thing I want you to know is that I will always appreciate you having you
            in my life.
          </p>

          <p>
            Thank you for being a blessing to my life. 
          </p>

          <p>
            I want to keep making memories with you. More laughs,
            more adventures, more iyakan moments and the days that we are just simply being together.
          </p>

          <p>
            If I could give you one thing, it would be the ability to see yourself through my eyes 
            — so you could see just how wonderful, byutiful, hardworking, strong, sweet, clingy and special you are to me.
          </p>

          <p>
            You are someone I don't want to take for granted.
          </p>

          <p>
            <br></br><br></br>And if this letter could say only one thing,
            it would be this:
          </p>

          <p className="love-message">
            I love you. ❤️
          </p>

          <p>
            Thank you for being you, and thank you for letting me be
            part of your story.
          </p>

          <p>
            Here's to us, to everything we've been through, and to all
            the byutiful Chellie moments that are still waiting for us.
          </p>

          <div className="signature">
            <p>With all my love,</p>
            <p>❤️ Babi</p>
          </div>

        </div>

      </section>

    </main>
  )
}
export default App