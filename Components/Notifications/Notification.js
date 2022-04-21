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
    backgroundColor: Styles.colors.white,
    zIndex: 100,
    padding: 10,
    margin: 15,
    marginBottom: 5,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  headingText: {
    color: Styles.colors.black,
    fontSize: 14,
    fontFamily: "BentonSansBold",
    flex: 2,
    textAlign: "center",
  },
  contentText: {
    fontSize: 14,
    color: Styles.colors.black,
    fontFamily: "BentonSans",
    padding: 10,
    textAlign: "center",
  },
});
