import React from 'react';

const styles = {
div: {
  // display: 'flex',
  padding: "15px, 15px",
  marginTop: "15px",
  backgroundColor: 'gray',
  borderBottom: '3px, solid, black'
},

h1: {
  borderTop: 'black',
  color: 'red',
  padding: 20,
  textAlign: 'center',
  fontSize: 20,
  backgroundColor: 'black'
},

// subheader: {
//     color: 'red',
//     minWidth: '15%',
//     padding: '20px',
//     textAlign: 'center',
//     fontSize: '20px',
//     backgroundColor: 'black',
// },

content: {
    display:'flex',
    flexWrap: 'wrap',
    padding: '30px 7.5% 30px 30px',
    width: '85vw',
    backgroundColor: 'grey'
},

top: {
    width: '100%',
    height: '20vw',
},

thumbnail: {
    position: 'relative',
    height: '15vw',
    width: '48%',
    margin: '1%',
    border: '3px solid black',
    boxSizing: 'border-box',
    cursor: 'pointer',
    userSelect: 'none',
},

thumbnailImg: {
    width: '100%',
    height: '100%',
    opacity: '0.6',
        '& a:hover': {
      opacity: 1,
    }
},

imageCaption: {
    position:'absolute',
    bottom: '3vw',
    backgroundColor: 'black',
    padding: '3px',
    borderTop:'3px solid black',
    borderRight:'3px solid black',
    borderBottom:'3px solid black',
    color: 'red',
      'p':{
    fontSize: 'small',
  },
},

link: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 2, 
},
}

export default function About() {
  return (
    <div>
      <div style={styles.div} class="section" id="projects">
            <h2 style={styles.h1} class="subheader">My Projects</h2>
            <div style={styles.content} class="content">
                <div style={styles.thumbnail} class="thumbnail" id="top">
                    <a style={styles.thumbnailImg} href="https://github.com/ChuckDvchek/chess-project-2" class="link"></a>
                    <img src="./images/Lets Play Chess.png" alt="lesson scheduler"></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3>Let's Play Chess</h3>
                        <p>A multiplayer online chess application that I and a couple of my peers developed</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <a href="https://github.com/Kbove/hw7-Kyle-Bove" class="link"></a>
                    <img src="assets/markdown-logo.jpg"></img>
                    <div class="image-caption">
                        <h3>README Generator</h3>
                        <p>Helps the user to generate pre-formatted readme's by taking in user input via command line</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <a href="https://kbove.github.io/Bootcamp-Project-1/" class="link"></a>
                    <img src="Assets/Covid Data Tracker.png"></img>
                    <div class="image-caption">
                        <h3>COVID-19 Data Tracker</h3>
                        <p>Quick and easy to use dashboard to display case and vaccine data across countries</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <a href="https://kbove.github.io/Kyle-Bove-HW-6-Weather-API/" class="link"></a>
                    <img src="Assets/Weather API.jfif"></img>
                    <div class="image-caption">
                        <h3>Weather API Dashboard</h3>
                        <p>Find weather conditions and 5 day forecast for any city instantly</p>
                    </div>
                </div>
                <div class="thumbnail">
                    <a href="https://kbove.github.io/Kyle-Bove-HW-5-event-planner/" class="link"></a>
                    <img src="Assets/Work day planner.jfif"></img>
                    <div class="image-caption">
                        <h3>Event Planner</h3>
                        <p>Simple daily planner to help stay organized</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
