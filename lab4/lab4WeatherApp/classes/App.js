export default class App {
    constructor(API_KEY) {
        this.getLocation();
        this.lat = 0;
        this.lng = 0;
        this.API_KEY = API_KEY;
    }

    
    getLocation() {
        //console.log("Getting the location");
        navigator.geolocation.getCurrentPosition(this.gettingLocation.bind(this), this.notGettingLocation.bind(this));
    }

    gettingLocation(location) {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        //console.log(location);
        /*console.log(this.lat);
        console.log(this.lng);*/
        this.getWeather();
    }

    notGettingLocation(err) {
        console.log(err);
    }

    getWeather() {
        //console.log("Getting the weather");
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${this.lat}&lon=${this.lng}&appid=${this.API_KEY}`;
        //console.log(url);

        fetch(url).then( (res) => {
            return res.json(); 
        }).then( (json) => {
            console.log(json);
            this.printWeather(json);
            //this.getHero();
        }).catch((err) => {
             console.log(err);
        }).finally(() => {
            console.log("finally done");
        });
    }

    printWeather(json) {
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);

        document.querySelector("h1").innerHTML = summary;
        document.querySelector("h2").innerHTML = "It's " + temp + "°C outside";
    }

    /*getHero() {
        //console.log("book");
        let publicKey = "a26a14abc5a3548ffa3816be17ed0cec";
        let privateKey = "3bd0b348bd9329dbed0c530d363cbfcfcbf7ad2d";
        //let ts = timestamp;
        let hash = md5(privateKey+publicKey);
        console.log(hash);
        let heroURL = `https://gateway.marvel.com:443/v1/public/characters?apikey=a26a14abc5a3548ffa3816be17ed0cec`;
        console.log(heroURL);

        fetch(heroURL).then( (res) => {
            return res.json(); 
        }).then( (json) => {
            console.log(json);
            this.printWeather(json);
        }).catch((err) => {
             console.log(err);
        }).finally(() => {
            console.log("finally done");
        });
    }*/

}