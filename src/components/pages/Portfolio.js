import React from 'react';
import chess from "./images/Let's Play Chess.png"
import readmeGen from "./images/markdown-logo.jpg"
import covid from "./images/Covid Data Tracker.png"
import weather from "./images/Weather API.jfif"
import event from "./images/Work day planner.jfif"

const styles = {
div: {
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

content: {
    display:'flex',
    flexWrap: 'wrap',
    padding: '30px 7.5% 30px 30px',
    width: '85vw',
    backgroundColor: 'grey',
    borderBottom: '3px solid black'
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
},

imageCaption: {
    // display: 'none',
    // '& hover': {
    //     display: 'block',
    // },
    position:'absolute',
    bottom: '3vw',
    backgroundColor: 'black',
    padding: '3px',
    borderTop:'3px solid black',
    borderRight:'3px solid black',
    borderBottom:'3px solid black',
    color: 'red',
    fontSize: 'small',

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
                    <a style={styles.link} href="https://letsplaychessproj2.herokuapp.com/" class="link"></a>
                    <img style={styles.thumbnailImg} src={chess} alt="Chess application"></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3 style={styles.h3} >Let's Play Chess</h3>
                        <p>A multiplayer online chess application that I and a couple of my peers developed</p>
                    </div>
                </div>
                <div style={styles.thumbnail} class="thumbnail">
                    <a style={styles.link} href="https://github.com/Kbove/hw7-Kyle-Bove" class="link"></a>
                    <img style={styles.thumbnailImg} src={readmeGen}></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3>README Generator</h3>
                        <p>Helps the user to generate pre-formatted readme's by taking in user input via command line</p>
                    </div>
                </div>
                <div style={styles.thumbnail} class="thumbnail">
                    <a style={styles.link} href="https://kbove.github.io/Covid-Data-Tracker/" class="link"></a>
                    <img style={styles.thumbnailImg} src={covid}></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3>COVID-19 Data Tracker</h3>
                        <p>Quick and easy to use dashboard to display case and vaccine data across countries</p>
                    </div>
                </div>
                <div style={styles.thumbnail} class="thumbnail">
                    <a style={styles.link} href="https://kbove.github.io/Weather-Dashboard/" class="link"></a>
                    <img style={styles.thumbnailImg} src={weather}></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3>Weather API Dashboard</h3>
                        <p>Find weather conditions and 5 day forecast for any city instantly</p>
                    </div>
                </div>
                <div style={styles.thumbnail} class="thumbnail">
                    <a style={styles.link} href="https://kbove.github.io/Event-Planner/" class="link"></a>
                    <img style={styles.thumbnailImg} src={event}></img>
                    <div style={styles.imageCaption} class="image-caption">
                        <h3>Event Planner</h3>
                        <p>Simple daily planner to help stay organized</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
