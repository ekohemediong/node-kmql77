// run `node index.js` in the terminal

const EventEmitter = require ('events')   
const Logs =require ('./logger.js')
const loga = new Logs ()
loga.on ("logger",(arg)=>{
  console.log ("done")
  console.log(arg)
})
loga.log ()