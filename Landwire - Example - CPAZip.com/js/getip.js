function ipLookUp() {
    $.ajax('http://ip-api.com/json')
        .then(
            function success(response) {
                $('.getloc').val(response.country);
                getAdress(response.lat, response.lon)
            },

            function fail(data, status) {
            }
        );
}

function getAddress(latitude, longitude) {
    $.ajax('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + GOOGLE_MAP_KEY)
        .then(
            function success(response) {},
            function fail(status) {}
        )
}
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        function success(position) {
            getAddress(position.coords.latitude, position.coords.longitude);
        },
        function error(error_message) {
            ipLookUp();
        });
} else {
    ipLookUp()
}