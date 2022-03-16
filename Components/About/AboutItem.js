//AboutItem is a component used to dynamically create the about page info. It is simply a title, body text, and a link to another page within the in-app browser

//necesary react-native imports
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

//color sheet import
import { Styles } from "../../Styles/Styles";

//must pass props to access them in AboutItem since we mapped it from About
export default function AboutItem(props) {
  return (
    // entire page wrapped in this view - scrollable
    <ScrollView style={styles.container}>
      {/* title */}
      <Text style={styles.title}>{props.title} </Text>

      {/* body text */}
      <Text style={styles.body}>{props.body}</Text>

      {/* link navigating to more info in the in-app browser */}
      <TouchableOpacity>
        <Text
          style={styles.link}
          accessibilityLabel={"Learn more about " + props.title}
          onPress={() =>
            props.navigation.navigate("Link", {
              link: props.link,
            })
          }
        >
          Learn More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    //fontWeight: "bold",
    fontFamily: "HoneyCandy",
  },
  body: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: "TimesSS",
  },
  link: {
    color: Styles.colors.purple,
    textDecorationLine: "underline",
    fontFamily: "TimesSS",
  },
});
