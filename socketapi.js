const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on("connection", function( socket ) {
    console.log( "A user connected" );
    socket.on(`joinRoom`, (roomName)=>{
        socket.join(roomName)
    });    
    socket.on(`sony`, msg =>{
        console.log(msg);
        socket.broadcast.to(msg.roomName).emit('max', msg)
    });

});
// end of socket.io logic

module.exports = socketapi;