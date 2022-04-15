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
    title: "Riley Kids",
    body:
      "These kids are the reason we do what we do and we want to make sure that they are getting the recognition they deserve for fighting the fight they continue everyday. We hope you remember these stories when you're dancing for 15 hours on March 26th, 2022.",
    link: {
      uri:
        "https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=4704",
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
      <View style={styles.header}>
        {/* logo image */}
        <Image
          source={require("../../images/jagathonLogoWhite.png")}
          style={styles.headerImage}
        />
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        <Text style={styles.aboutTitle}>About Us</Text>

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
            <Text style={styles.linkText}> Read our FAQs </Text>
          </View>
        </TouchableOpacity>

        {/* Sponsor button */}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the sponsors info page"
          onPress={() => navigation.navigate("Sponsors")}
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> See our sponsors </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Styles.colors.red,
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
  aboutTitle: {
    color: Styles.colors.white,
    fontFamily: "BentonSansBold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
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
    backgroundColor: Styles.colors.white,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  linkTextContainer: {
    paddingTop: 4,
  },
  linkText: {
    fontSize: 18,
    fontFamily: "BentonSansBold",
    color: Styles.colors.black,
  },
});
