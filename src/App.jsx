import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="main-container">
        <nav className="navbar">
          <img className="navbar__logo" src="../src/images/logo.svg" alt="logo" />
          <button className="navbar__button">Try It Free</button>
        </nav>

        <header className="header">
          <h1 className="header__title">
            Build The Community Your Fans Will Love
          </h1>
          <p className="header__description">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.Create connections with your users as you engage in genuine discussion.
          </p>
          <button className="header__button">  Get Started For Free</button>
          <img className="header__screen__mockup" src="../images/illustration-mockups.svg" alt="screen__mockup" />
          <img className="header__screen__mockup" src="../src/images/illustration-mockups.svg" alt="screen__mockup" />

        </header>

        <section className="section-grow-together">
          <article className='image-container'>
            <img className="image-container__illustration" src="../src/images/illustration-grow-together.svg" alt="grow__together" />
          </article>
          <article className='description'>
            <h2 className='description__title'>Grow Together</h2>
            <p className='description__content'>
              Generate meaningful discussions with your audience and build a strong, loyal community.Think of the insightful conversations you miss out on with a feedback form.
            </p>
          </article>
        </section>

        <section className="section-flowing-conversations">
          <article className='image-container'>
            <img className="image-container__illustration" src="../src/images/illustration-flowing-conversation.svg" alt="flowing-conversation" />
          </article>
          <article className='description'>
            <h2 className='description__title'>Flowing Conversations</h2>
            <p className='description__content'>
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </p>
          </article>
        </section>

        <section className="section-your-users">
          <article className='image-container'>
            <img className="image-container__illustration" src="../src/images/illustration-your-users.svg" alt="flowing-conversation" />
          </article>
          <article className='description'>
            <h2 className='description__title'>Your Users</h2>
            <p className='description__content'>
              It takes no time at all to integrate Huddle with your app's authentication solution.This means, once signed in to your app, your users can start chatting immediately.
            </p>
          </article>
        </section>

        <section>
          <h2 className="section-your-community__title">
            Ready To Build Your Community?
          </h2>
          <button className="section-your-community__button">
            Get Started For Free
          </button>
        </section>

        <footer>
          <section className="contact">
            <img className="contact__logo-white" src="../src/images/logo-white.svg" alt="logo-white" />
            <div className='contact__location'>
              <img src="../src/images/icon-location.svg" alt="logo-location" />
              <a href='#'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</a>
            </div>

            <div className='contact__phone-container'>
              <img src="../src/images/icon-phone.svg" alt="logo-phone" />
              <a href="#">+1-543-123-4567</a>
            </div>

            <div className='contact__email-container'>
              <img src="../src/images/icon-email.svg" alt="logo-email" />
              <a href="#">example@huddle.com</a>
            </div>
          </section>

          <section className="about-us">
            <div className="about-us__links">
              <a href="#">About Us</a>
              <a href="#">What We Do</a>
              <a href="#">FAQ</a>
            </div>
          </section>

          <section className="about-us__career">
            <div className="about-us__links">
              <a href="#">Career</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
          </section>

          <section className="social-media">
            <div className='social-media__icons'>
              <img src="../src/images/" alt="" />
            </div>
            <div className='social-media__copyright'>
              <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
            </div>
          </section>
        </footer>

        <aside>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/GrodoNV">GrodoNV</a>.
          </p>
        </aside>



      </main>
    </div>
  )
}

export default App
