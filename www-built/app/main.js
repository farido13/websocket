define(['require','engine.io'],function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var enc = new TextDecoder("utf-8");
    const socket = require('engine.io')('http://localhost:10000', {
     
    transports: ['websocket'],
    upgrade: true,
    withCredentials: true,

    });
    socket.on('open', () => {
    console.log('connected');
    
    
    
});

    socket.on('message', (data) => {
    console.log("recieved "+ enc.decode(data));

});

    socket.on('error', (error) => {
    console.log(error);
    });

    socket.on('close', () => {
    console.log("connexion closed");
    });
     var msg = document.getElementById("inputText").value;
     document.getElementById("inputText").value = "";
     if ( socket != null )
     {
        const button = document.getElementById('myButton');
        button.addEventListener('click', function(e) {
         socket.send( "hello" );
         console.log( "string sent :", '"'+msg+'"' );
        });
       
     };

});


