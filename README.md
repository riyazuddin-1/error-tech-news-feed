# News Feed App

## Overview

Welcome to the News Feed App! This is a single-screen React Native application built with TypeScript. The app features a custom "Swipe to Fetch Button" that fetches and displays news articles from a public API. Initially, the app shows no news; news articles are only fetched and displayed after interacting with the swipe button.

## Features

- **Custom Swipe Control**: A custom swipe button controls when news is fetched. Swipe it fully to the right to trigger the news fetch.
- **News Feed**: Fetch and display news articles including title, source, summary, and image using the `useSWR` hook.
- **Expo Integration**: Use Expo to run and test the application on mobile devices.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

**Install Dependencies**

To set up the project, you need to install the required npm packages:

```
npm install react-native react-native-reanimated react-native-gesture-handler react-native-paper use-swr expo
```

### Install Expo
If you haven't already, install Expo CLI globally:
```
npm install -g expo-cli

```

### Start the Development Server
Start the Expo development server with the following command:
```
expo start
```
or
```
npx expo start
```
This command will start the Expo development server. You can scan the QR code using the Expo Go app on your mobile device to run the project.

## Usage
1. Swipe Control: Interact with the "Swipe to Fetch Button" to load news articles.
2. View News: Swipe the button fully to the right to trigger the news fetch and display the articles.

## Code Overview
### Key Components
Slider: A custom swipe button component that controls the fetching of news.
NewsList: The main component that fetches and displays news articles.
NewsCard: Displays individual news articles.

## Inline Documentation
The code includes detailed inline comments explaining the logic behind the custom swipe control and the `useSWR` data fetching implementation.

## Contact
For any queries or feedback, please contact md.riyazuddin.dev@gmail.com