// Home page of the app containing a link to the notifications, links to current events, links to the Donor Drive register page, and links to the donate page

// required react native imports
import React, { useState, useEffect, StatusBar } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Constants from "expo-constants";

// color sheet import
import { Styles } from "../../Styles/Styles";

// import HomeEvent component to display the event buttons
import HomeEvent from "./HomeEvent";

// import expo fonts features
import * as Font from "expo-font";

// import styled text
import FancyFont from "../../Styles/FancyFont";

//you must pass navigation into the Home function to use the navigation features
export default function Home({ navigation }) {
  // set state for loading and json LiveWhale data
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // hook to cause LiveWhale json to be fetched
  useEffect(() => {
    fetch("https://events.iu.edu/live/json/events/group_id/388")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // format the date from LiveWhale
  const getDate = (fullDate) => {
    var formattedDate = new Date(fullDate.substring(0, 10));
    var date = formattedDate.getDate() + 1;
    var month = formattedDate.getMonth() + 1;
    var year = formattedDate.getFullYear();
    return month + "/" + date + "/" + year;
  };

  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.header}>
        {/* logo image */}
        <Image
          source={require("../../images/jagathonLogo.png")}
          style={styles.headerImage}
        />
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* home heading image */}
        <ImageBackground
          source={require("../../images/home.jpg")}
          style={styles.heading}
        >
          <Text style={styles.headingText}>Welcome!</Text>

          {/* confetti image */}
          <ImageBackground
            source={require("../../images/confetti.png")}
            style={styles.headingImage}
          />
        </ImageBackground>
        {/* blue bar on home page under the image */}
        <View style={styles.headbar}></View>

        {/* button to go to notifications */}
        <TouchableOpacity
          style={styles.announcements}
          accessibilityLabel="Go to the notification page"
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={styles.homeText}> Announcements </Text>
        </TouchableOpacity>

        {/* loop through json events from LiveWhale to get buttons as HomeEvent componeent to go to the Event component page for each event */}
        {isLoading ? (
          <Text> Loading... </Text>
        ) : (
          data.map((item, key) => {
            let originalImage = item.thumbnail;

            return (
              <HomeEvent
                key={key}
                title={
                  item.date2_utc !== undefined
                    ? item.date2_utc.slice(0, 10) === item.date_utc.slice(0, 10)
                      ? item.title + " (Day 2)"
                      : item.title + " (Day 1)"
                    : item.title
                }
                content={item.description}
                date={getDate(item.date_utc)}
                reg={
                  item.custom_registration_link === undefined
                    ? undefined
                    : { uri: item.custom_registration_link }
                }
                link={{ uri: item.url }}
                img={
                  item.thumbnail !== null
                    ? { uri: originalImage.replace("width/80/height/80/", "") }
                    : require("../../images/dancePractice.png")
                }
              ></HomeEvent>
            );
          })
        )}

        {/* register button */}
        <TouchableOpacity
          style={styles.button3}
          accessibilityLabel="Go to the register page for Jagathon"
          onPress={() =>
            navigation.navigate("Link", {
              link: {
                uri:
                  "https://events.dancemarathon.com/index.cfm?fuseaction=register.start&eventID=4001",
              },
            })
          }
        >
          <Text style={styles.homeText}> Register </Text>
        </TouchableOpacity>

        {/* dontate button */}
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Go to the donation page"
          onPress={() => navigation.navigate("Donate")}
        >
          <Text style={styles.homeText}> Donate </Text>
        </TouchableOpacity>

        {/* Contact Footer bar*/}

        {/* Contact Us button */}
        <TouchableOpacity
          style={styles.button2}
          accessibilityLabel="Go to the contact info page"
          onPress={() =>
            navigation.navigate("Link", {
              link: { uri: "https://sf.iupui.edu/jagathon/contact-us.html" },
            })
          }
        >
          <Text style={styles.linkText}> Contact Us</Text>
        </TouchableOpacity>

        {/* bar to hold social media links */}
        <View style={styles.socialNav}>
          {/* twitter */}
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() =>
              navigation.navigate("Link", {
                link: { uri: "https://twitter.com/IUPUIdm" },
              })
            }
          >
            <Image
              source={require("../../images/twittericon.png")}
              style={styles.socialImage}
            />
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() =>
              navigation.navigate("Link", {
                link: { uri: "https://www.facebook.com/JagathonIUPUI/" },
              })
            }
          >
            <Image
              source={require("../../images/facebook.png")}
              style={styles.socialImage}
            />
          </TouchableOpacity>

          {/* Instagram */}
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() =>
              navigation.navigate("Link", {
                link: { uri: "https://www.instagram.com/iupuidm/" },
              })
            }
          >
            <Image
              source={require("../../images/instagramicon.png")}
              style={styles.socialImage}
            />
          </TouchableOpacity>

          {/* Website */}
          <TouchableOpacity
            style={styles.socialLink}
            onPress={() =>
              navigation.navigate("Link", {
                link: { uri: "https://sf.iupui.edu/jagathon/index.html" },
              })
            }
          >
            <Image
              source={require("../../images/iu.png")}
              style={styles.socialImage}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: Styles.colors.yellow,
    height: Platform.OS === "ios" ? 50 + Constants.statusBarHeight : 50,
    zIndex: 100,
    justifyContent: "center",
  },
  headerImage: {
    height: 35,
    width: 150,
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight - 5 : 0,
  },
  heading: {
    alignSelf: "stretch",
    height: 150,
    resizeMode: "cover",
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 36,
    fontFamily: "HoneyCandy",
    alignSelf: "stretch",
    backgroundColor: Styles.colorsOp.yellowOp,
    textAlign: "center",
    zIndex: 100,
    paddingTop: 5,
  },
  headingImage: {
    height: 250,
    opacity: 0.6,
    marginTop: -180,
  },
  headbar: {
    alignSelf: "stretch",
    backgroundColor: Styles.colors.cyan,
    height: 50,
  },
  announcements: {
    height: 70,
    margin: 10,
    backgroundColor: Styles.colorsOp.yellow,
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    color: Styles.colors.white,
    alignItems: "center",
    fontSize: 33,
    paddingTop: 5,
    fontFamily: "HoneyCandy",
  },
  button: {
    height: 50,
    backgroundColor: Styles.colors.cyan,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  button3: {
    height: 50,
    backgroundColor: Styles.colors.yellow,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  homeTextShadow: {
    color: Styles.colors.white,
    fontSize: 26,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: Styles.colorsOp.black,
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
    justifyContent: "center",
  },
  socialLink: {
    height: 30,
    width: 30,
    margin: 10,
  },
  socialImage: {
    height: 30,
    width: 30,
  },
  button2: {
    height: 50,
    backgroundColor: Styles.colorsOp.yellow,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  linkText: {
    color: Styles.colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  dropShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
