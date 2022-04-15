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
// import { url } from "inspector";

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
      <ImageBackground
      source={require("../../images/home.jpg")}
      style={styles.backgroundImage}>
        <View style={styles.overlay}/>
      {/* top bar */}
      <View style={styles.header}>
        {/* logo image */}
        <Image
          source={require("../../images/jagathonLogoWhite.png")}
          style={styles.headerImage}
        />
      </View>
      {/* Main page text content */}
      <View style={styles.homeBody}>
        <Text style={styles.homeBodyHeader}>Welcome</Text>
        <Text style={styles.homeBodyText}>Founded in the 2001-2002 school year, Jagathon has raised over $3 Million for
          Riley Hospital for Children, Indiana's Children's Miracle Network Hospital.
        </Text>
        <Text style={styles.homeBodyLink}
        onPress={() =>
          navigation.navigate("Link", {
            link: { uri: "https://sf.iupui.edu/jagathon/about-us.html" },
          })
        }>Learn more</Text>
        <Text style={styles.linkText}
        onPress={() =>
          navigation.navigate("Link", {
            link: { uri: "https://sf.iupui.edu/jagathon/contact-us.html" },
          })
        }>Contact us</Text>
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
      </View>



              {/* bar to hold social media links */}
              
      </ImageBackground>
      
    </View>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Styles.colors.red,
    opacity: 0.6,
  },
  header: {
    alignSelf: "stretch",
    height: Platform.OS === "ios" ? 134 + Constants.statusBarHeight : 134,
    zIndex: 100,
    justifyContent: "center",
  },
  headerImage: {
    height: 87,
    width: 337,
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight - 5 : 0,
  },
  homeBody: {
    color: "white",
    alignSelf: "center",
    height: "100%",
  },
  homeBodyHeader: {
    color: "white",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    fontFamily: "BentonSansBold",
    marginTop: 175,
  },
  homeBodyText: {
    color: "white",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "BentonSansBold",
    fontSize: 16,
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: 30,
  },
  homeBodyLink: {
    color: "white",
    alignSelf: "center",
    fontFamily: "BentonSansBold",
    fontSize: 16,
    marginTop: 40, 
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
    alignItems: "center",
    height: 50,
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
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
  linkText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "BentonSansBold",
    fontSize: 14,
    textTransform: "uppercase",
    marginTop: 200,
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
