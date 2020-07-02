# Project Overview

## Project Links

- [link](thisIsALink)


## Project Description

While project planning I had a quite difficult time choosing what kind of app to make. I wanted to make a weather app because I would be able to easily showcase some cool animations, colors, and modern geometric shapes. But a weather app is something a bit simple. Because I want to challenge myself and furthermore solidify my react skillset, I have decided to create an app that would give a person their morning dose of information. That would include the weather, the top news of that day, and finance information if I am able to. I plan to have a favorites section for the weather so the user could add their favorite cities.

## APIs

https://api.openweathermap.org/data/2.5/weather?zip=75062&units=imperial&appid=1985501bf0f791f03cc70a2310831353
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9VMOP8IrKT4l8pLUv1lmdIXrmNM9lRAs
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=XL2AEYFAQA8NA5O5

```
{
{
"coord": {
"lon": -96.97,
"lat": 32.85
},
"weather": [
{
"id": 803,
"main": "Clouds",
"description": "broken clouds",
"icon": "04d"
}
],
"base": "stations",
"main": {
"temp": 80.55,
"feels_like": 83.35,
"temp_min": 78.01,
"temp_max": 82.99,
"pressure": 1017,
"humidity": 78
}
},
```

```
"section": "world",
"subsection": "",
"title": "Coronavirus Live Updates: Texas Bars Must Close, Governor Says in Reversal, Amid Surge in Cases",
"abstract": "With more than 40,000 new cases across the country, Florida paused its reopening. India is seeking to test all 29 million people in the capital, New Delhi.",
"url": "https://www.nytimes.com/2020/06/26/world/coronavirus-live-updates.html",
"uri": "nyt://article/3e83aac5-cd01-52a0-a735-5ac98a628384",
"byline": "",
"item_type": "Article",
"updated_date": "2020-06-26T10:51:32-04:00",
```
```
Meta Data": {
"1. Information": "Daily Prices (open, high, low, close) and Volumes",
"2. Symbol": "AAPL",
"3. Last Refreshed": "2020-06-25",
"4. Output Size": "Compact",
"5. Time Zone": "US/Eastern"
},
"Time Series (Daily)": {
"2020-06-25": {
"1. open": "360.7000",
"2. high": "365.0000",
"3. low": "357.5700",
"4. close": "364.8400",
"5. volume": "34055508"
},
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://imgur.com/a/ikijy1A)

## Components


| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav, Page Icon | 
| Main | Contains Switch/Routes for content |
| Weather | Renders the weather section |
| WeatherList | Renders the list of top cities weather section |
| Weather
| News | Renders the front page news |
| NewsListItem | Renders the news title/author/data |
| Stocks | Displays the down industrial average |
| Crypto | Displays the days top cryptos |
| Forex| displays the worlds top currencies |
| OptionsPage | Displays the favorite weather cities and display options|




### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP 
- Fully functional site displaying the weather and the front page news
- Weather List
- Allow users to search and favorite their cities of choice
- Display the current weather, 5 day forecast, wind speed, day hi/low etc.
- Widget Layout of Page



#### PostMVP 
- Display the article picture, author, title
- Finance area that displays the top stocks of the Dow
- Top gaining stock, top losing stocks
- Animations
- Material design weather pictures (day/night thunderstorm picture, day/night cloudy picture, day/night clear skies) 
- Animated loading page
- custom cursor




#### Time Frames!

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | 2 |  |
| Navbar | H | 1 | 2 |  |
| Set up React routing | H | 1 | 3 |  |
| Set up API calls | H | 3 | 5 |  |
| Create weather component | H | 3 | 5 |  |
| create weather favorites list | H | 3 | 5 |  |
| Create 5 day forcast list | H | 2 | 4 |  |
| Top news Component | H | 2 |  |  |
| Top news list item | H | 3 |  |  |
| Stocks component | H | 2 |  |  |
| Stocks list item | H | 2 |  |  |
| Crypto List | H | 2 |  |  |
| Forex list | H | 2 |  |  |
| Material Weather Pictures | H | 2 | 2 |  |
| Widget Layout | L | 4 | 4 |  |
| Total | H | 36 | 32 |  |

## Additional Libraries

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.


```
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let d = new Date();
let n = days[d.getDay()]

```
