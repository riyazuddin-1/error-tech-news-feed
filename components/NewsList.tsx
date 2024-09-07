import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import NewsCard from './NewsCard';
import { Button } from 'react-native-paper';
import Slider from './Slider';

// Define the type for the NewsCard item
interface NewsItem {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string; 
  source: {
    name: string;
  };
}

// Define the props for NewsToggle component
interface NewsToggleProps {
  active: boolean;
  text: string;
  action: () => void;
}

// Define the props for Slider component
interface SliderProps {
  toggle: boolean;
  handleToggle: () => void;
}

// Loader component to indicate data fetching in progress
const Loading: React.FC = () => {
  return <Text>Loading...</Text>;
};

// Button component to navigate between news items
const NewsToggle: React.FC<NewsToggleProps> = ({ active, text, action }) => {
  return <Button style={styles.toggleButton} disabled={!active} onPress={action}>{text}</Button>;
};

// Main component for displaying the news list
const NewsList: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]); // State for storing fetched news data
  const [currentNews, setCurrentNews] = useState<number | undefined>(undefined); // State for tracking the index of the currently displayed news item
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading status
  const [toggle, setToggle] = useState<boolean>(false); // State for slider visibility

  // Effect to update the current news index when newsData is fetched
  useEffect(() => {
    if (newsData.length) {
      setCurrentNews(0);
      console.log('currently broadcasting..', currentNews);
    }
  }, [newsData]);

  // Effect to fetch news data from the API
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8520eed125624040b8a66981c1035b6d')
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles); // Update state with fetched news data
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.newsFeed}>
      {/* Render Slider component if toggle is false */}
      {!toggle ? (
        <Slider handleToggle={() => setToggle(true)} />
      ) : (
        isLoading ? (
          <Loading />
        ) : !newsData.length ? (
          <Text>No news at the moment</Text>
        ) : (
          <View style={styles.newsContainer}>
            {currentNews !== undefined && <NewsCard item={newsData[currentNews]} />}
            <View style={styles.toggleButtonsContainer}>
              {/* Button to go to previous news item */}
              <NewsToggle
                active={currentNews !== undefined && currentNews > 0}
                text={'Prev'}
                action={() => setCurrentNews((prev) => (prev !== undefined ? prev - 1 : undefined))}
              />
              {/* Button to go to next news item */}
              <NewsToggle
                active={currentNews !== undefined && currentNews < newsData.length - 1}
                text={'Next'}
                action={() => setCurrentNews((prev) => (prev !== undefined ? prev + 1 : undefined))}
              />
            </View>
          </View>
        )
      )}
    </SafeAreaView>
  );
};

// Define styles for the NewsList component
const styles = StyleSheet.create({
  newsFeed: {
    flex: 1,
    justifyContent: 'center'
  },
  newsContainer: {
    flex: 1,
  },
  toggleButtonsContainer: {
    position: 'absolute', // Position at the bottom of the screen
    bottom: 0,
    flexDirection: 'row',
    marginTop: 'auto',
  },
  toggleButton: {
    margin: 'auto',
  },
});

export default NewsList;
