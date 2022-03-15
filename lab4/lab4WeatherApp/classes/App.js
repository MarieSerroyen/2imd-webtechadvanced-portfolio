export default class App {
    constructor() {
        this.getLocation();
        this.lat = 0;
        this.lng = 0;
    }

    getLocation() {
        console.log("Getting the location");
        navigator.geolocation.getCurrentPosition(this.gettingLocation.bind(this), this.notGettingLocation.bind(this));
    }

    gettingLocation(location) {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;

        console.log(this.lat);
        console.log(this.lng);
    }

    notGettingLocation(err) {
        console.log(err);
    }

}