
## Good Game - A Social Gaming Meetup App

Good Game is a social media platform built around connecting our users with other people in their local area who share similar interests in gaming.
## About   
A mobile app that can be the first place for people to build or get involved in their local gaming scenes such as taking some of the work and intimidation out of doing things like starting a Dungeons & 
Dragons group in your area, joining in on local board game nights, or participating in a nearby fighting game tournament. 

Whether you're looking to meet new people, learn new games, find groups to play with, or get out of your comfort zone, Good Game can assist. 

## Features
* letting users create accounts/profiles where they can specify their local area (using city or zip code)
* identify games or genre of games that they want to find locals to play with (including both video games and tabletop games)
* provide tools to connect with those users: giving options to start local groups, “put out a call” to gather players for a particular group, or to join existing groups of players.
* players may enter a group chat where they can socialize and coordinate meeting up and playing games.
* allowing users and venues to post gaming events
* providing information on what games and events are popular in your area

 
## Development Environment (Local)
### System Requirements
💡 Before you begin, make sure you have all the below installed:
* [Node.js v14 or above](https://nodejs.org/en/download/)
* [nvm](https://github.com/coreybutler/nvm-windows/releases)
* [npm v7 or above](https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/)

## Install the following libraries
```bash
Use the following command to install all the dependencies in package.json:
npm install --legacy-peer-deps

The following are the individual commands used in creation:

install react navigation:
npm install react-navigation --legacy-peer-deps

dependencies:
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

install react navigation stack:
npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

install react navigation tabs:
npm install react-navigation-tabs --legacy-peer-deps

babel.config.js include:
plugins: ['react-native-reanimated/plugin']

install react native elements:
npm install react-native-elements --legacy-peer-deps

isntall axios:
npm install axios --legacy-peer-deps

install Async storage:
npm install @react-native-async-storage/async-storage --legacy-peer-deps

install react-native-maps library:
npm install react-native-maps --legacy-peer-deps

install expo-location:
npm install expo-location --legacy-peer-deps
```

## Usage/Examples
```bash
expo r -c
```

## Authors

## Notes
1. Ngrok and MongoDB will have to be setup for the app to take in User Authentication
please provide your own api tokens. The only api so far is in /src/api/googlemaps.js, just need to change the baseUrl

2. under node_modules/react-navigation-tabs/lib/module/utils/withDimensions.js:
comment out line 57 -- Dimensions.removeEventListener('change', this.handleOrientationChange);

## Licensing
