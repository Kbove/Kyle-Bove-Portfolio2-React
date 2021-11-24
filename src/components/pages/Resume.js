import React from 'react';
import resume from './pdf/Kyle Bove Resume 2021 (2).pdf'

const styles = {
  h1: {
    marginTop: '15px',
    borderTop: 'black',
    color: 'red',
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'black'
  },
  a: {
    color: 'red'
  }
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.h1} >
        <a style={styles.a} href={resume} download>Resume</a>
        </h1>
    </div>
  );
}
