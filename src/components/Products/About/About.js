import React from 'react';
import './About.css';
import MainLayout from '../MainLayout/MainLayout';
const About = () => {
  return <MainLayout>
    <video muted="muted" playsinline="playsinline" class='video' autoPlay >
    <source src="https://www.talosdigital.com/wp-content/themes/TalosWeb/assets/img/Get-it-done-Desktop.mp4"
      type="video/mp4"></source>
      <source type="video/webm" src="https://www.talosdigital.com/wp-content/themes/TalosWeb/assets/img/Get-it-done-Desktop.webm">
      </source>
  </video>
  </MainLayout>
}

export default About;