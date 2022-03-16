//About component is used for the about page component of the app. it uses AboutItem for the info that belongs on the page. It loops through the json aboutData below for this. There are other links as well in this app.

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

//import our AboutItem component
import AboutItem from "./AboutItem";

//data to loop through to get the about info on the page via AboutItem (object with title, body, and customized link to make the page dynamic)
const aboutData = [
  {
    title: "Jagathon: IUPUI's Dance Marathon",
    body:
      "Founded in 2001-2002 school year, Jagathon is celebrating it's 20th annual event this year. Last year we raised an all-time high of $607,870.25, For The Kids! The money raised by Jagathon supports the Herman B Wells Center at Riley Hospital for Children, a Children's Miracle Network Hospital.",
    link: { uri: "https://sf.iupui.edu/jagathon/about-us.html" },
  },
  {
    title: "Riley Kids",
    body:
      "These kids are the reason we do what we do and we want to make sure that they are getting the recognition they deserve for fighting the fight they continue everyday. We hope you remember these stories when you're dancing for 15 hours on March 7th, 2020.",
    link: {
      uri:
        "https://events.dancemarathon.com/index.cfm?fuseaction=register.start&eventID=4001",
    },
  },
  {
    title: "High School Dance Marathon (HSDM)",
    body:
      "Riley Dance Marathon is a year-long fundraiser that culminates in a multi-hour event to raise money for Riley Hospital for Children. High School Dance Marathons fundraise, plan, and execute their dance marathons just like collegiate dance marathons! The passion and enthusiasm exhibited with our high school dance marathons are no less impactful, and they are a critical part of the long-term success of our program.",
    link: { uri: "https://sf.iupui.edu/jagathon/partnerships.html" },
  },
];

//you must pass navigation into the About function to use the navigation features
export default function About({ navigation }) {
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* bars at the top */}
      <View style={styles.header}></View>
      <View>
        <Text style={styles.headingText}>About</Text>
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* about image heading */}
        <ImageBackground
          source={require("../../images/about.jpg")}
          style={styles.heading}
        >
          <Image
            source={require("../../images/Jagathon2018TaglineWhite2.png")}
            style={styles.headerImage}
          />
        </ImageBackground>

        {/* loop through the about data and return an about item using the props fiven from aboutData*/}
        {aboutData.map((item, key) => {
          return (
            <AboutItem
              key={key}
              title={item.title}
              body={item.body}
              link={item.link}
              navigation={navigation}
            />
          );
        })}

        {/* temporarily left out blog until link is resolved */}
        {/* Blog button */}
        {/* <TouchableOpacity
          accessibilityLabel="Go to the Jagathon blog">
            <Text style={styles.moreLink}> More on our Blog </Text>
        </TouchableOpacity>  */}

        {/* FAQ button  */}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the FAQ info page"
          onPress={() => navigation.navigate("Faq")}
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> FAQ's </Text>
          </View>
          <Image
            source={require("../../images/Arrow5.png")}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Sponsor button */}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the sponsors info page"
          onPress={() => navigation.navigate("Sponsors")}
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> Sponsors </Text>
          </View>
          <Image
            source={require("../../images/Arrow5.png")}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Contact Footer bar*/}

        {/* Contact Us button */}
        <TouchableOpacity
          style={styles.button}
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
    backgroundColor: Styles.colors.purple,
    height: 50,
    zIndex: 100,
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 36,
    alignSelf: "stretch",
    backgroundColor: Styles.colors.purple,
    zIndex: 100,
    paddingTop: 5,
    paddingLeft: 13,
    fontFamily: "Coaster",
  },
  headerImage: {
    height: 40,
    width: 160,
    alignSelf: "center",
    marginBottom: 5,
  },
  heading: {
    alignSelf: "stretch",
    height: 200,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  button: {
    height: 50,
    backgroundColor: Styles.colors.purple,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 20,
  },
  link: {
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Styles.colors.purple,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkTextContainer: {
    paddingTop: 4,
  },
  linkText: {
    color: Styles.colors.white,
    //fontWeight: "bold",
    fontSize: 33,
    fontFamily: "HoneyCandy",
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
  arrowImage: {
    width: 50,
    alignSelf: "center",
  },
  moreLink: {
    color: Styles.colors.white,
    textDecorationLine: "underline",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    marginTop: 0,
    marginLeft: 20,
  },
});
