# Weather Forecast

This project is my submission to the technical test for BuiltIt.

It is a weather forecast app that allows users to search for a city in the US and get the 5 day weather forecast.

### Running and Development

First step is to make sure to install all dependencies by opening a Terminal, navigating into the project's root folder and typing out:

```
$ npm install
```

To do this you will need Node Package Manager installed. If that is not the case, please refer to these [instructions](https://docs.npmjs.com/getting-started/installing-node).

Also, order to run this app, you will need an API key in order to query weather data from [OpenWeatherMap](http://openweathermap.org/)

You can do this by registering for a free account on their Website and requesting an API Key. Once you have done so, simply replace the content of *WEATHER_APP_ID* in config.json.


To develop against this project you will first need to clone it.

```
$ git clone git@github.com:JoaoSouMoreira/weather-forecast.git
```

To start the project simply open up a terminal and type in

```
$ node server
```

A small express server using [react-hot-loader](https://github.com/gaearon/react-hot-loader) will launch bound to port 3000. It will then build your source files and allow them to run on the browser. Every time you make a file change Webpack will reload the source code and inject your React component changes into the browser without the need to refresh.

### Building

If you simply want the bundled .js and .css files so you can run them in an HTML page, you can also run the Webpack command with the optional watch argument.

```
$ webpack -w
```

### Deployment

To deploy this project to Heroku there are a few things you will need to make sure to have first:

* Have an account on [Heroku](https://heroku.com/)
* Have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed
* Have a Heroku app ready to receive the assets

You can also deploy this app to heroku by following these steps:

1. Make sure you are authenticated to deploy this app to your Heroku box by logging in

```
$ heroku login
```

2. Afterwards you need to clone your Heroku box

```
$ heroku git:clone -a heroku-box-name
```

3. Finally simply run the following command from a terminal

```
$ git push heroku master
```


### Improvements

There are a lot of improvements that could be done in the app, namely:

* Could improve on overall UX/UI
* Extend weather forecasts to longer dates or more frequent
* Introduce more cities, or even base cities off of a country pick list first
* Needs some further evaluation on what data would be best used in a component's state or moved into an independent store
* Add some customization such as different themes. Maybe using [Bootswatch](https://bootswatch.com/)
* Fix Less files resolving issues when deploying to Heroku
