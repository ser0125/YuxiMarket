import React from 'react';
import './About.css';
const About = () => {
  return <React.Fragment>
    <video muted="muted" playsinline="playsinline" className='video' autoPlay >
    <source src="https://www.talosdigital.com/wp-content/themes/TalosWeb/assets/img/Get-it-done-Desktop.mp4"
      type="video/mp4"></source>
      <source type="video/webm" src="https://www.talosdigital.com/wp-content/themes/TalosWeb/assets/img/Get-it-done-Desktop.webm">
      </source>
  </video>
  </React.Fragment>
}

export default About;