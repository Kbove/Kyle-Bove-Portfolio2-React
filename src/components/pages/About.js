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
  p: {
    color: 'white',
    padding: '15px',
    borderBottom: '3px solid black'
  },

}

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1} >About Me</h1>
      <p style={styles.p}>
        Hi! My name's Kyle and this is my portfolio. A little bit about me: I graduated from Whitworth
        Univerity in 2017 with a Bachelor's in Marketing and went on to pursue my Master's in Business
        Administration on an accelerated track in 2018. I found some success in tech sales, but I began
        craving something more stable, technical, and creative. I decided to make the change and try to
        learn how to code.
        <br></br>
        With my degree in marketing, my sales experience, and knowledge I will gain in the UW Full Stack
        coding bootcamp, I hope to pursue a career in product management.
        Being able to accurately assess consumer needs, understand how to build a product based on those
        needs, and communicate it across multiple channels is important in a product-related role.
        Additionally, I will be spending a lot of free time honing my coding skills and getting a better
        idea of how to build out beautiful websites and applications as well.
      </p>
    </div>
  );
}
