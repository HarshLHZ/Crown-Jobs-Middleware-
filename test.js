const cron = require('node-cron')



const shell = require('shelljs')



cron.schedule("1 * * * * * ",function(){
console.log("node.js script running")
})