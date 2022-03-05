// Sponsors component acts as the page to display all the sponsor's logos and thank them for their support

// necessary react native imports
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

// import Sponsor component which will display each logo
import Sponsor from "./Sponsor";

// require all the sponsor images from the images folder as an array
const sponsors = [
  require("../../images/Applebees-Logo.png"),
  require("../../images/Bob_Evans_logo.png"),
  require("../../images/bubbas-33-logo.png"),
  require("../../images/ChartwellsHigherEdLogo.png"),
  require("../../images/giordanosLogo.png"),
  require("../../images/tdt_home_logo.png"),
  require("../../images/TheCapitalGrille.png"),
  require("../../images/kilroyslogo.png"),
  require("../../images/BJs-Restaurant-Logo.png"),
  require("../../images/Bob_Evans_logo.png"),
  require("../../images/bucadipeppo.png"),
  require("../../images/chickfilA.png"),
  require("../../images/culvers.png"),
  require("../../images/einsteinbros.png"),
  require("../../images/greekspizzeria.png"),
  require("../../images/ihop.png"),
  require("../../images/jacksdonutslogo.png"),
  require("../../images/Jockamos.png"),
  require("../../images/DicksLastResortLogo.png"),
  require("../../images/MoesLogo.png"),
  require("../../images/steak_n_shake.png"),
  require("../../images/subzerologo.png"),
];

//you must pass navigation into the Sponsors function in order to use the features
export default function Sponsors({ navigation }) {
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.header}></View>
      <View>
        <Text style={styles.headingText}>Sponsors</Text>
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* intro stuff about sponsors */}
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Sponsors</Text>
          <Text style={styles.introText}>
            Jagathon is immensely grateful for all who join the fight for
            pediatric research innovations.{" "}
          </Text>
        </View>

        {/* loop through the sponsors image array and pass data to the Sponsor component to display them*/}
        <View style={styles.sponsorsBox}>
          {sponsors.map((item, key) => {
            return <Sponsor key={key} img={item}></Sponsor>;
          })}
        </View>

        <TouchableOpacity
          accessibilityLabel="Learn more about Jagathon sponsors"
          onPress={() =>
            navigation.navigate("Link", {
              link: { uri: "https://sf.iupui.edu/jagathon/partnerships.html" },
            })
          }
          style={styles.moreButton}
        >
          <Text style={styles.moreLink}>More about our sponsors </Text>
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
  intro: {
    minHeight: 80,
    margin: 20,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: Styles.colorsOp.pink,
    alignSelf: "center",
    padding: 20,
  },
  introTitle: {
    color: Styles.colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  introText: {
    color: Styles.colors.black,
    fontSize: 16,
    marginTop: 10,
  },
  sponsorsBox: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    height: 50,
    backgroundColor: Styles.colorsOp.pink,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
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
  moreButton: {
    backgroundColor: Styles.rgba.pink,
    paddingTop: 18,
    paddingBottom: 20,
  },
  moreLink: {
    color: Styles.colors.white,
    textDecorationLine: "underline",
    fontSize: 20,
    textAlign: "center",
  },
});
