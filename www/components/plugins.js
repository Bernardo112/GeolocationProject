// This is a JavaScript file

function geolocationF(){

    var onSuccess = function(position){
            //document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("latlng").value = position.coords.latitude + "," + position.coords.longitude;
            /*alert(
                'Latitude: ' + position.coords.latitude + '\n' + 
                'Longitude: ' + position.coords.longitude + '\n'
            );*/
    };

    function onError(error){
        alert('code: ' + error.code + '\n' + 
              'message' + error.message
        );
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}