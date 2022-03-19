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
            this.getMovie(json);
        }).catch((err) => {
             console.log(err);
        }).finally(() => {
            console.log("finally done");
        });
    }

    printWeather(json) {
        let summary = json.weather[0].description;
        let temp = Math.round(json.main.temp);

        document.querySelector("h1").innerHTML = "We have a " + summary + " today!";
        document.querySelector("h3").innerHTML = "It's " + temp + "°C outside";
    }

    getMovie() {
        fetch("https://data-imdb1.p.rapidapi.com/movie/id/tt1228705/", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
                "x-rapidapi-key": "c2a23ae285mshf40e4858027373ep1f33d4jsn8652430c22ed"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.printMovie(data);
        }).catch(err => {
            console.error(err);
        });
    }

    printMovie(data){
        let title = data.results.title;
        let cover = data.results.banner;
        //console.log(cover);

        document.querySelector("p").innerHTML = title;
        document.querySelector("#cover").src = cover;
    }

}