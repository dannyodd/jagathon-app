// Jagthon FAQ page

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
  Dimensions,
} from "react-native";

// import color sheet
import { Styles } from "../../Styles/Styles";

// import the Qa component which is the box holding each question and answer
import Qa from "./Qa";

// FAQ data as json holding one question(q) and answer (a)
const faqs = [
  {
    q: "Q1. What is Jagathon supporting?",
    a:
      "Jagathon fundraises money for pediatric research for the kids at Riley Hospital for Children. Riley is located right down the street for the Campus Center.",
  },
  {
    q: "Q2. How do I get information about Jagathon throughout the year?",
    a:
      "Once you register for Jagathon you will be added to a groupme with your team to receive information about events going on throughout the year, fundraising tips, and event information.",
  },
  {
    q: "Q3. What are the Journey to Jagathon steps?",
    a:
      "As of now, registration is free for anyone who wants to join Jagathon. With free registration, Jagathon is asking everyone to complete 4 steps, personalize your DonorDrive page, send DonorDrive emails, share your fundraising link, and invite your friends to join our movement. ",
  },
  {
    q: "Q4. Where do I check into the event?",
    a:
      "You must check into the event when you get there. The checkin will be located in Citizens Common.",
  },
  {
    q: "Q5. What do I bring to the event?",
    a:
      "Things to bring to the event include your phone, money (cash or card), a charger, charger pack, any medication you might need, a backpack to put your belongings in, themed outfits, and snacks.",
  },
  {
    q: "Q6. What do I wear to the event?",
    a:
      "You should wear your participant shirt, comfortable shoes, and your color team accessories include necklaces, socks, tutus, sunglasses, etc.",
  },
  {
    q: "Q7. Do we have to stand the whole time?",
    a:
      "We encourage all of our committee members and participants to stand up for the amazing kiddos at Riley.",
  },
  {
    q: "Q8. What type of entertainment will you have at the event?",
    a:
      "We will have some new entertainment this year along with some of the participant favorites from last year! Make sure you come to the event to see what new entertainment awaits!",
  },
  {
    q: "Q9.Will you be selling merch during the event?",
    a: "Absolutely, so make sure to bring some merch money with you!",
  },
  {
    q: "Q10. Will you be selling merch during the event?",
    a:
      "To come to the event, make sure you register by clicking this link! events.dancemarathon.com/event/jagathon2021",
  },
];

// you must pass navigation into the Faq function to use the navigation features
export default function Faq({ navigation }) {
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top bars header */}
      <View style={styles.header}></View>
      <View>
        <Text style={styles.headingText}>FAQ</Text>
      </View>

      {/* confetti image */}
      <ImageBackground
        source={require("../../images/confetti.png")}
        style={styles.headingImage}
      />

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* title of the page */}
        <Text style={styles.title}>Frequently Asked Questions</Text>

        {/* mapping the items in the faqs json as a Qa component, passing props of the question and answer */}
        {faqs.map((item, key) => {
          return <Qa key={key} q={item.q} a={item.a}></Qa>;
        })}

        {/*  link to the full FAQ page on the Jagathon website via in app browser */}
        <TouchableOpacity
          accessibilityLabel="Go to the full FAQ page"
          onPress={() =>
            navigation.navigate("Link", {
              link: { uri: "https://sf.iupui.edu/jagathon/get-involved.html" },
            })
          }
        >
          <Text style={styles.link}>More Questions</Text>
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
    backgroundColor: Styles.colors.blue,
    height: 50,
    zIndex: 100,
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 36,
    alignSelf: "stretch",
    backgroundColor: Styles.colorsOp.blue,
    zIndex: 100,
    paddingTop: 5,
    paddingLeft: 13,
    fontFamily: "HoneyCandy",
  },
  button: {
    height: 50,
    backgroundColor: Styles.colorsOp.blue,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 0,
  },
  link: {
    color: Styles.colors.white,
    textDecorationLine: "underline",
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    backgroundColor: Styles.rgba.blue,
    marginTop: 20,
  },
  linkText: {
    color: Styles.colors.white,
    fontSize: 18,
    fontWeight: "bold",
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
  title: {
    color: Styles.colors.black,
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  headingImage: {
    width: Dimensions.get("screen").height / 1.4,
    aspectRatio: 1.875,

    // marginTop: -Dimensions.get("screen").height / 2.5,
    // top: Dimensions.get("screen").height / 5.5,

    // height: 250,
    // width: 470,
    top: 150,
    left: -100,
    position: "absolute",
    transform: [{ rotate: "50deg" }],
    zIndex: 0,
  },
});
