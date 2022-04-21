//Events is a component that displays the event info from LiveWhale on the calendar page

// required imports for react native
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

// import color sheet
import { Styles } from "../../Styles/Styles";

// React hook to use the navigation instead of passing into the funciton as a prop (since we need props passed as well)
import { useNavigation } from "@react-navigation/native";

//you must pass props into the Event function in order to access them
export default function Event(props) {
  // part of the hook to use nativagation in this component - need it to navigate to the in-app browser link for RSVP in LiveWhale
  const navigation = useNavigation();
  return (
    // entire page wrapped in this view
    <TouchableOpacity
      style={styles.container}
      accessibilityLabel="Learn more about this event!"
      onPress={() =>
        navigation.navigate("Events", {
          title: props.title,
          content: props.content,
          date: props.date,
          reg: props.reg,
          link: props.link,
        })
      }
    >
      {/* side by side, title and date of event */}
      <View style={styles.header}>
        <Text style={styles.headingText}>{props.title}</Text>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>

      {/* event description */}
      <Text style={styles.contentText}>{props.content}</Text>

      <View style={styles.button}>
        <Text style={styles.homeText}> Learn More </Text>
      </View>
    </TouchableOpacity>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    zIndex: 100,
    margin: 10,
    marginBottom: 5,
    borderWidth: 3,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  headingText: {
    color: Styles.colors.black,
    fontSize: 20,
    fontWeight: "bold",
    flex: 2,
    padding: 20,
    paddingBottom: 0,
  },
  dateText: {
    fontSize: 16,
    color: Styles.colors.black,
    flex: 0,
    alignSelf: "flex-end",
    padding: 20,
    paddingBottom: 0,
  },
  contentText: {
    fontSize: 16,
    color: Styles.colors.black,
    padding: 20,
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    color: Styles.colors.white,
    fontSize: 30,
    paddingTop: 8,
    fontFamily: "BentonSans",
  },
});
