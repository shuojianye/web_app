module.exports = function(io){
    //colariton ssss
    const collaborations = {};
    const socketIdToSessionId = {};
    io.on('connection',(socket)=>{
      const sessionId = socket.handshake.query['sessionId'];

      socketIdToSessionId[socket.id]= sessionId;

      if(!(sessionId in collaborations)){
          collaborations[sessionId] = {
              'participants':[]
          };
      }
       collaborations[sessionId]['participants'].push(socket.id); 

       socket.on('change',delta =>{
           const sessionId = socketIdToSessionId[socket.id];
           if(sessionId in collaborations){
                const participants = collaborations[sessionId]['participants'];
                for(let participant of participants){
                    if (socket.id !== participant){
                        io.to(participant).emit('change',delta);
                    }
                }
           }
        else{
            console.error('caonidaye');
        };
       })
    });
}