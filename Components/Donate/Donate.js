// Donate is the donate page of the app - users can log into donor drive through the in-app browser, view your progress on donor drive through in app browser or get some fundraising tips from the Jagathon team!

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
  Dimensions,
} from "react-native";

// import color sheet
import { Styles } from "../../Styles/Styles";

//you must pass navigation into the Calendar function to use the navigation features
export default function Donate({ navigation }) {
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top of the component/two color bars */}
      <View style={styles.header}></View>
      <View>
        <Text style={styles.headingText}>Fundraise</Text>
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* Styles to put the image on the right on wider screens */}
        <View style={styles.tabletFlex}>
          {/* donation image at the top of the page */}
          <ImageBackground
            source={require("../../images/donation.jpg")}
            style={styles.heading}
          ></ImageBackground>

          <View style={styles.donateContainer}>
            <Text style={styles.donateText}>
              Whether it's five dollars, or five hundred dollars, all the money
              raised goes towards our kids and we are forever grateful for every
              donation.
            </Text>

            {/* donor drive login btton */}
            <TouchableOpacity
              style={styles.donate}
              accessibilityLabel="Go to the donate page"
              onPress={() =>
                navigation.navigate("Link", {
                  link: {
                    uri:
                      "https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&amp;eventID=4001",
                  },
                })
              }
            >
              <Text style={styles.donateButton}> Donate </Text>
            </TouchableOpacity>

            {/* confetti picture */}
            <ImageBackground
              source={require("../../images/confetti.png")}
              style={styles.headingImage}
            />
          </View>
        </View>

        {/* fundraising tips button */}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the fundraising tips page"
          onPress={() =>
            navigation.navigate("Link", {
              link: { uri: "https://sf.iupui.edu/jagathon/fundraising.html" },
            })
          }
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> Fundraising Tips </Text>
          </View>
          <Image
            source={require("../../images/Arrow5.png")}
            style={styles.arrowImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* donor drive check your progress button*/}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the Donor Drive page to check your progress"
          onPress={() =>
            navigation.navigate("Link", {
              link: {
                uri:
                  "https://events.dancemarathon.com/index.cfm?fuseaction=donordrive.participantList&eventID=4001",
              },
            })
          }
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> Check Your Progress </Text>
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
    backgroundColor: Styles.colors.pink,
    height: 50,
    zIndex: 100,
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 36,
    alignSelf: "stretch",
    backgroundColor: Styles.colorsOp.pink,
    zIndex: 100,
    paddingTop: 5,
    paddingLeft: 13,
    fontFamily: "HoneyCandy",
  },
  headerImage: {
    height: 40,
    width: 160,
    alignSelf: "center",
    marginBottom: 5,
  },
  button: {
    height: 50,
    backgroundColor: Styles.colorsOp.purple,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginBottom: 0,
    marginTop: 20,
  },
  link: {
    alignSelf: "stretch",
    padding: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Styles.colorsOp.pink,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  linkTextContainer: {
    paddingTop: 4,
  },
  linkText: {
    color: Styles.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowImage: {
    width: 50,
    alignSelf: "center",
  },
  tabletFlex: {
    flexDirection:
      Dimensions.get("window").width > 500 ? "row-reverse" : "column",
    height: Dimensions.get("window").width > 500 ? "50%" : "auto",
  },
  heading: {
    flex: 2,
    alignSelf: "stretch",
    height: Dimensions.get("window").width > 500 ? "100%" : 200,
    resizeMode: "cover",
    justifyContent: "flex-end",
    zIndex: 100,
  },
  donateContainer: {
    flex: 2,
    // height: "50%"
  },
  headingImage: {
    height: 250,
    width: 470,
    marginTop: -200,
    // marginBottom: -230,
    transform: [{ rotate: "300deg" }, { scale: (0.85, 0.85) }],
    alignSelf: "flex-end",
    marginRight: -150,
  },
  donateText: {
    zIndex: 100,
    padding: 40,
    fontSize: 20,
    textAlign: "center",
    maxWidth: 550,
    alignSelf: "center",
  },
  donate: {
    backgroundColor: Styles.colorsOp.pink,
    paddingTop: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    zIndex: 100,
  },
  donateButton: {
    color: Styles.colors.white,
    fontSize: 40,
    fontFamily: "HoneyCandy",
  },
  button2: {
    height: 50,
    backgroundColor: Styles.colorsOp.pink,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 5,
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
});
