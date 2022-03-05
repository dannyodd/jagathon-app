// required react native imports
import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
// keeps the splash screen visible while the AppLoading component is mounted
import AppLoading from "expo-app-loading";

// import expo fonts features
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    HoneyCandy: require("../assets/fonts/HoneyCandy-Regular.ttf"),
  });
};

// you must import props to have access to the text you want to use
export default function FancyFont(props) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(setFontLoaded(true));
    return () => {
      <ActivityIndicator />;
    };
  });

  // default styles for our new FancyFont, add the font type
  return (
    <Text style={[{ fontFamily: "HoneyCandy" }, props.style]}>
      {props.children}
    </Text>
  );
}
