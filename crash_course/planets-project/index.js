const { parse } = require('csv-parse') ; // parse will be a function
// parse() - returns an event emitter that deals with streams of data
//           coming in from the file
// parse() - it knows only streams
const fs = require('fs') ;

const results = [] ;
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true, //each rows as a JS object with key-value pairs
    }))
    .on('data', (data) => {
        results.push(data) ;
    })
    .on('error', (err) => {
        console.log(err) ;
    })
    .on('end', () => {
        console.log(results) ;
        console.log('done') ;
    });


