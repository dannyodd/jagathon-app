// Event is the event page for each event Jagthon posts through LiveWhale. It should have the image, title, date, description, link to the site, and link to LiveWhale RSVP to open in the in-app browser

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
  Dimensions
} from "react-native";

// import color sheet
import { Styles } from "../../Styles/Styles";

//you must pass navigation into the Event function to use the navigation features, as well as the route for similar reasons
export default function Event({ route, navigation }) {
  // use the route to import the params sent via the link (event data passed from the homepage)
  const { title, content, date, reg, link } = route.params;
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top of the event which displays the title/two color bars */}
      <View style={styles.header}></View>
      <View>
        <Text style={styles.headingText}>{title}</Text>
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView style={styles.eventContainer}>
        {/* Styles to put the image on the right on wider screens */}
        <View style={styles.tabletFlex}>

          {/* event details*/}
          <View style={styles.eventHolder}>
            {/* title and date side by side from props*/}
            <View style={styles.head}>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              {/* event description from props */}
              <Text style={styles.contentText}>{content}</Text>

              {/* button to take you to the event link formatted in Home and pulled in from LiveWhale json */}
              <TouchableOpacity>
                <Text
                  style={styles.link}
                  accessibilityLabel={"Learn more about " + title}
                  onPress={() =>
                    navigation.navigate("Link", {
                      link: link
                    })
                  }
                >
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* button to take you to LiveWhale RSVP for the event - a link that should be imported as props from Home where it is formatted from the LiveWhale json */}
        {reg !== undefined && (
          <TouchableOpacity
            style={styles.button}
            accessibilityLabel="RSVP to this event"
            onPress={() =>
              navigation.navigate("Link", {
                link: reg
              })
            }
          >
            <Text style={styles.homeText}> RSVP </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1
  },
  header: {
    alignSelf: "stretch",
    height: 50,
    zIndex: 100
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 33,
    alignSelf: "stretch",
    zIndex: 100,
    paddingTop: 5,
    paddingLeft: 13,
    fontFamily: "BentonSansBold"
  },
  eventHolder: {
    padding: 10,
    margin: 10,
    marginBottom: 25,
    alignItems: "flex-start",
    maxWidth: 450,
    flex: 2
  },
  eventContainer: {
    alignSelf: "stretch",
    zIndex: 100
  },
  aboutImg: {
    flex: 2,
    height: Dimensions.get("window").width > 500 ? "100%" : 200,
    alignSelf: "stretch",
    zIndex: 100
  },
  tabletFlex: {
    flexDirection:
      Dimensions.get("window").width > 500 ? "row-reverse" : "column"
  },
  head: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    color: Styles.colors.black,
    fontSize: 20,
    fontWeight: "bold",
    flex: 2
  },
  dateText: {
    fontSize: 16,
    color: Styles.colors.black,
    flex: 0,
    alignSelf: "flex-end"
  },
  contentText: {
    fontSize: 16,
    color: Styles.colors.black,
    padding: 10,
    paddingLeft: 0,
    maxWidth: 550
  },
  link: {
    color: Styles.colors.white,
    textDecorationLine: "underline",
    fontSize: 16
  },
  button: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginBottom: 0,
    marginTop: 0
  },
  button2: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginBottom: 0,
  },
  homeText: {
    color: Styles.colors.white,
    fontSize: 30,
    paddingTop: 10,
    fontFamily: "BentonSans"
  },
  linkText: {
    color: Styles.colors.white,
    fontSize: 18,
    fontFamily: "BentonSansBold",
  },
  socialNav: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    backgroundColor: Styles.colors.grey,
    alignItems: "center",
    height: 50,
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center"
  },
  socialLink: {
    height: 30,
    width: 30,
    margin: 10
  },
  socialImage: {
    height: 30,
    width: 30
  },
  headingImage: {
    height: 250,
    width: 445,
    left: 160,
    top: 280,
    marginTop: -250,
    transform: [{ rotate: "290deg" }],
    alignSelf: "flex-end",
    zIndex: 0
  }
});
