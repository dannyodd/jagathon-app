// HomeEvent is a component that is a box button linking the user to the specific event info in the app (using Event component) it uses an image and title drawn in from json from LiveWhale events on the home page

//necessary imports for react native
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

//import color sheet
import { Styles } from "../../Styles/Styles";

// React hook to use the navigation instead of passing into the funciton as a prop (since we need props passed as well)
import { useNavigation } from "@react-navigation/native";

//you must pass props into the Event function in order to access them
export default function HomeEvent(props) {
  // part of the hook to use nativagation in this component to get to the Event component
  const navigation = useNavigation();
  return (
    // button for going to the Event component
    <TouchableOpacity
      style={styles.upcoming}
      accessibilityLabel={"Learn more about " + props.title}
      onPress={() =>
        navigation.navigate("Events", {
          title: props.title,
          content: props.content,
          date: props.date,
          image: props.img,
          reg: props.reg,
          link: props.link,
        })
      }
    >
      {/* image imported form json data as the background of the button */}
      <ImageBackground source={props.img} style={styles.headingImage}>
        {/* props displaying the imported title */}
        <Text style={styles.homeText}> {props.title} </Text>

        {/* yellow overlay on all buttons */}
        <View style={styles.overlay} />
      </ImageBackground>
    </TouchableOpacity>
  );
}

// styles for this component
const styles = StyleSheet.create({
  upcoming: {
    height: 200,
    margin: 10,
    flex: 1,
  },
  homeText: {
    color: Styles.colors.white,
    fontSize: 33,
    position: "relative",
    backgroundColor: Styles.colorsOp.yellow,
    zIndex: 100,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
    textShadowColor: Styles.colorsOp.white,
    paddingTop: 8,
    paddingBottom: 5,
    fontFamily: "HoneyCandy",
  },
  headingImage: {
    flex: 1,
    resizeMode: "cover",
    zIndex: 0,
  },
  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Styles.colors.yellow,
    height: 200,
    alignSelf: "stretch",
    opacity: 0.4,
    zIndex: 10,
  },
});
