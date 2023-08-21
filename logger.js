const EventEmitter = require ("events")
class Logger extends EventEmitter{
  log() {
    console.log ("emitter")
    this.emit ("logger",{id:1})
  }
}
module.exports=Logger