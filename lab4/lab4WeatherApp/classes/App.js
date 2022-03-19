export default class App {
    constructor(API_KEY) {
        this.getLocation();
        this.lat = 0;
        this.lng = 0;
        this.API_KEY = API_KEY;
        this.movieId = "";
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
        //let temp = 36;

        document.querySelector("h1").innerHTML = "We have a " + summary + " today!";
        document.querySelector("h3").innerHTML = "It's " + temp + "°C outside";

        if(temp < 0) {
            this.movieId = "tt0458339"; //Captain America the first avenger
        }
        else if (temp >= 0 && temp < 5) {
            this.movieId = "tt2250912"; // Spider-man Homecoming
        }
        else if (temp >= 5 && temp < 10) {
            this.movieId = "tt0800369"; // Thor
        }
        else if (temp >= 10 && temp < 15) {
            this.movieId = "tt0371746"; // Iron Man
        }
        else if (temp >= 15 && temp < 20) {
            this.movieId = "tt0848228"; // The Avengers
        }
        else if (temp >= 20 && temp < 25) {
            this.movieId = "tt1825683"; // Black Panther
        }
        else if (temp >= 25 && temp < 30) {
            this.movieId = "tt1211837"; // Doctor Strange
        }
        else if (temp >= 30 && temp < 35) {
            this.movieId = "tt2015381"; // Guardians of the Galaxy
        }
        else if (temp >= 35) {
            this.movieId = "tt0478970"; // Ant-Man
        }
    }

    getMovie() {
        fetch("https://data-imdb1.p.rapidapi.com/movie/id/"+ this.movieId + "/", {
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