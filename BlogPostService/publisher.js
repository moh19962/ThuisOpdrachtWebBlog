const rabbitConnection = require('../sharedRabbitMqResource.js')
let channel;
startup();
async function startup(){ 
    try {
 
    }catch (error) {
        console.log ('err in publisher : ' +error);
    }
}
const publish = async function publish(msg){ 
    try { 
          
 
    }catch (error) {
        console.log ('err in publisher : ' +error);
    }
}

module.exports=publish;