import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const Test = () => {
  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      X.value = Math.max(0, Math.min(e.translationX, 250));
    },
    onEnd: () => {
      if(X.value < 200) {
        X.value = 0;
      } else {
        X.value = 350 - 100;
      }
    }
  });

  const AnimatedStyles = {
    slider: useAnimatedStyle(() => {
      return {
        transform: [{
          translateX: X.value
        }],
      };
    }),
    sliderWave: useAnimatedStyle(() => {
      return {
        width: X.value + 100
      };
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.swipeContainer}>
      <Animated.View style={[styles.sliderWave, AnimatedStyles.sliderWave]}></Animated.View>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.slider, AnimatedStyles.slider]}>
          <Text style={styles.sliderArrow}>&rarr;</Text>
        </Animated.View>
        </PanGestureHandler>
        <Text style={styles.sliderText}>Swipe to right</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  swipeContainer: {
    height: 100,
    width: 350,
    backgroundColor: '#373938',
    borderRadius: 100,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slider: {
    position: 'absolute',
    left: 0,
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  sliderArrow: {
    fontSize: 45,
  },
  sliderWave: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    zIndex: 3,
  },
  sliderText: {
    color: '#c3c3c3',
    marginLeft: 60,
    zIndex: 2,
  }
});

export default Test;