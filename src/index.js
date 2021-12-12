import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import v8 from 'v8'

// const totalHeapSize = v8.getHeatStatistics().total_available_size
// let totalHeapSizeInGB = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2)

// console.log(`total heap size (bytes) ${totalHeapSize}, (GB${totalHeapSizeInGB})`)

ReactDOM.render(<App />, document.getElementById('root'));
