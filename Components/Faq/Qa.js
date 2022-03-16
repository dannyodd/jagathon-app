// Qa is a box holding the FAQ question and answers

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

// colorsheet import
import { Styles } from "../../Styles/Styles";

// you must pass props in the Qa function to have access to the props passed down from the parent Faq component
export default function Qa(props) {
  return (
    // entire page wrapped in this view - scrollable
    <ScrollView style={styles.container}>
      {/* question answer box */}
      <View style={styles.qBox}>
        {/* question imported from faqs json on Faq */}
        <Text style={styles.header}>{props.q}</Text>

        {/* answer imported from faqs json on Faq */}
        <Text style={styles.headingText}>{props.a}</Text>
      </View>
    </ScrollView>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: Styles.colors.blue,
    minHeight: 30,
    fontSize: 20,
    color: Styles.colors.white,
    zIndex: 100,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    //fontWeight: "bold",
    fontFamily: "HoneyCandy",
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 16,
    alignSelf: "stretch",
    backgroundColor: Styles.colors.green,
    zIndex: 100,
    padding: 5,
    paddingLeft: 20,
    minHeight: 100,
    padding: 20,
    fontFamily: "TimesSS",
  },
  qBox: {
    margin: 25,
    marginTop: 15,
    marginBottom: 0,
  },
});
