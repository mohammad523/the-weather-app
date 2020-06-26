# Project Overview

## Project Links

- [link](thisIsALink)


## Project Description

I am a creative person and had a quite difficult time choosing what kind of app to make. I wanted to make a weather app because I would be able to easily showcase some nice animations, colors, and modern geometric shapes. But a weather app is something a beginner should be able to create. Because I want to challenge myself and furthermore solidify my react skillset, I have decided to create an app that would give a person their morning dose of information. That would include the weather, the top news of that day, and finance information. I plan to have a favorites section for the weather so the user could add their favorite cities.

## API



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


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes]()

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
| StocksHi | Displays the days top gainers |
| StocksLow| displays the days top losers |
| OptionsPage | Displays the favorite weather cities and display options|




### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP 
- Fully functional site displaying the weather and the front page news
- Weather List
- Allow users to search and favorite their cities of choice
- Display the current weather, 7 day forecast, wind speed, day hi/low etc.
- Display the article picture, author, title
- Navbar with Options Page to control what to display
- Finance area that displays the top stocks of the Dow
- Top gaining stock, top losing stocks


#### PostMVP 
- 
- Animations
- Material design weather pictures (day/night thunderstorm picture, day/night cloudy picture, day/night clear skies) 
- Animated loading page
- custom cursor
- Widget Layout of Page



#### Time Frames!

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | 40min | 40min |
| Navbar | H | 1 | 45min | 45min |
| Set up React routing | H | 1 |  |  |
| Set up API calls | H | 3 |  |  |
| Create weather component | H | 3 |  |  |
| create weather favorites list | H | 3 |  |  |
| Create 7 day forcast list | H | 2 |  |  |
| Top news Component | H | 2 |  |  |
| Top news list item | H | 3 |  |  |
| Stocks component | H | 2 |  |  |
| Stocks list item | H | 2 |  |  |
| Top Gains List | H | 2 |  |  |
| Top Losses list | H | 2 |  |  |
| Material Weather Pictures | H |  |  |  |
| Options page | M | 3 |  |  |
| Loading Page | M | 3 |  |  |
| Widget Layout | L | 4 |  |  |
| Total | H | 45 |  |  |

## Additional Libraries

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.


```

```
