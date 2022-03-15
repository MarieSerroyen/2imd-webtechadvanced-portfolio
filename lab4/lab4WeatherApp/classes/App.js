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

    gettingLocation() {
        console.log(this.lat);
    }

    notGettingLocation(err) {
        console.log(err);
    }

}