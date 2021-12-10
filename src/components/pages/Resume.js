import React, {useState, useEffect} from 'react';
import resume from './pdf/KyleBoveFinalResume.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from '../../styles/pdf.css';




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
  },
  page: {
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }
}

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }

  function changePageNumber(event) {
    event.preventDefault();
    if (pageNumber === 3) {
      setPageNumber(1)
    } else {
      setPageNumber(pageNumber + 1)
    }
  }


  return (
    <div  style={styles.div}>
           <div>
       <h1 style={styles.h1} >
         <a style={styles.a} href={resume} download>Download</a>
         </h1>
     </div>
      <Document
        file={resume} 
        className='resumePos'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p style={styles.page}><button onClick={changePageNumber}>Page</button> {pageNumber} of {numPages}</p>
    </div>
  );
}
