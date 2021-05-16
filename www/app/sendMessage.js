define(function () {
    return {
        sendMessage: function (socket) {
            var msg = document.getElementById("inputText").value;
            if ( socket != null )
            {
                document.getElementById("inputText").value = "";
                socket.send( msg );
                console.log( "string sent :", '"'+msg+'"' );
            }
        }
    };
});
