// Notification is the box containing each notification's info imported and passed down from Firebase

// required react native imports
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

// color sheet import
import { Styles } from "../../Styles/Styles";

// you must pass props in the Notification function to have access to the props passed down from the parent Notifications component
export default function Notification(props) {
  return (
    <View style={styles.container}>
      {/* heading with imported props from firebase notifications for title and date */}
      <View style={styles.header}>
        <Text style={styles.headingText}>{props.title}</Text>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>

      {/* body of the notification from firebase */}
      <Text style={styles.contentText}>{props.content}</Text>
    </View>
  );
}

// component styles
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: Styles.colors.greyOp,
    zIndex: 100,
    padding: 10,
    margin: 10,
    marginBottom: 5,
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
  },
  dateText: {
    fontSize: 16,
    color: Styles.colors.black,
    flex: 0,
    alignSelf: "flex-end",
  },
  contentText: {
    fontSize: 16,
    color: Styles.colors.black,
    padding: 10,
    paddingLeft: 0,
  },
});
