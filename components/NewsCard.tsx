import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Define the shape of the news item object
interface NewsItem {
  urlToImage: string; // URL for the news image
  title: string; // Title of the news article
  publishedAt: string; // Publication date of the news article
  description: string; // Brief description of the news article
  source: {
    name: string; // Source name of the news article
  };
}

// Define the props for the NewsCard component
interface NewsCardProps {
  item: NewsItem; // The news item to display
}

// Function to format the date from YYYY-MM-DDTHH:MM:SSZ to DD-MMM-YYYY
const formatDate = (date: string): string => {
  const d = new Date(date); // Create a Date object from the string

  // Array of month abbreviations
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Extract day, month, and year from the Date object
  const day = String(d.getDate()).padStart(2, '0'); // Ensure day is two digits
  const month = monthNames[d.getMonth()]; // Get month abbreviation
  const year = d.getFullYear(); // Get the full year

  // Format and return the date as DD-MMM-YYYY
  return `${day}-${month}-${year}`;
}

// NewsCard component to display individual news articles
const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  console.log(item); // Debugging output to inspect the news item

  return (
    <TouchableOpacity>
      <View style={styles.newsCard}>
        {/* Display the news image */}
        { item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
        {/* Display the news title */}
        <Text style={styles.newsTitle}>{item.title}</Text>
        {/* Display the formatted publication date */}
        <Text style={styles.newsDate}>{formatDate(item.publishedAt)}</Text>
        {/* Display the news description */}
        <Text>{item.description}</Text>
        {/* Display the source name */}
        <Text>
          Source: <Text style={styles.sourceName}>{item.source.name}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  newsCard: {
    margin: 10, // Margin around the card
  },
  image: {
    width: '100%', // Full width of the container
    height: 200, // Fixed height for the image
  },
  newsTitle: {
    fontWeight: 'bold', // Bold text for the title
  },
  newsDate: {
    fontSize: 12, // Smaller font size for the date
    color: '#2a2a2a', // Dark color for the date text
  },
  sourceName: {
    color: 'red', // Red color for the source name
  },
});

export default NewsCard;
