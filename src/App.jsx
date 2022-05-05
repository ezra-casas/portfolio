import './App.scss';
import React from 'react';
import { render } from '@testing-library/react';

function App() {
  return (
    <div>
      <span className='navbar is-fixed-top'>
        <ul className='navbar-brand icon-text'>
          <li className='navbar-item is-active' >
            <ion-icon name="home-outline" size="large"></ion-icon><p>&nbsp;</p>
            <a href='#'>Home</a></li>
          <li className='navbar-item '>
            <ion-icon name="mail-outline" size="large"></ion-icon><p>&nbsp;</p> 
            <a href="#">Contact</a></li>
          <li className='navbar-item '>
            <ion-icon name="logo-github" size="large"></ion-icon><p>&nbsp;</p>
            <a href="https://www.github.com/ezra-casas">Github</a></li>
          <li className='navbar-item '>
            <ion-icon name="logo-linkedin" size="large"></ion-icon><p>&nbsp;</p>
            <a href="https://www.linkedin.com/in/ezra-casas-86b844225/">LinkedIn</a></li>
          <li className='navbar-item '>
            <ion-icon name="code-slash-outline" size='large'></ion-icon><p>&nbsp;</p>
            <a href="#">Projects</a></li>
        </ul>
      </span>
      <section className='hero is-large'>
        <div className='hero-body columns'>
          <div className='column is-8'>
            <h1 className='title is-size-1 has-text-left'>Ezra Casas</h1>
            <p className='subtitle has-text-left is-size-6 '>$: Web Developer.<br/>$: Father. <br/>$: Gamer. <br/>$: Artist.</p>
          </div> 
          <div className='tile is-ancestor'>
            <div className='tile is-parent is-vertical'>
              <div className='tile is-child box has-text-centered	'>TicTacToe</div>
              <div className='tile is-child box has-text-centered	'>Random Number</div>
            </div>
            <div className='tile is-parent is-5'>
              <div className='tile is-child box has-text-centered	'>Music App</div>
            </div>
          </div>
        </div>
      </section>


    </div>
    
  );
}

export default App;