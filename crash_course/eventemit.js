const EventEmitter = require('events') ;
const celebrity = new EventEmitter();

// subscribe to celebrity for observer 1
celebrity.on('race win', () => {
    console.log('COngraturlatiions You are the best')
})


// subscribe to celebrity for observer 2
celebrity.on('race win', () => {
    console.log('I could have better than that!!!')
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code) ;
})

celebrity.emit('race win') ;
celebrity.emit('race lost') ;
celebrity.emit('race win') ;



