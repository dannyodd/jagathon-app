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
      <View style={styles.header}>
        {/* logo image */}
        <Image
          source={require("../../images/jagathonLogoWhite.png")}
          style={styles.headerImage}
        />
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* Styles to put the image on the right on wider screens */}
        
        <Text style={styles.title}>Fundraising</Text>

          <View style={styles.donateContainer}>
            <Text style={styles.donateText}>
                Whether it's five dollars, or five hundred dollars, all the money
                raised goes towards our kids and we are forever grateful for every
                donation.
            </Text>

            {/* donor drive login btton */}
            <TouchableOpacity
              style={styles.link}
              accessibilityLabel="Go to the donate page"
              onPress={() =>
                navigation.navigate("Link", {
                  link: {
                    uri:
                      "https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.donate&eventID=4704",
                  },
                })
              }
            >
              <View style={styles.linkTextContainer}>
                <Text style={styles.linkText}>Make a Donation</Text>
              </View>
            </TouchableOpacity>
          </View>
        
        <View style={styles.donateLinksContainer}>
        <Text style={styles.donateLinksText}>
                To learn more about fundraising for Jagathon, click the links below.
            </Text>
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
            <Text style={styles.linkText}> Find Fundraising Tips </Text>
          </View>
          
        </TouchableOpacity>

        {/* donor drive check your progress button*/}
        <TouchableOpacity
          style={styles.link}
          accessibilityLabel="Go to the Donor Drive page to check your progress"
          onPress={() =>
            navigation.navigate("Link", {
              link: {
                uri:
                  "https://events.dancemarathon.com/index.cfm?fuseaction=donordrive.participantList&eventID=4704",
              },
            })
          }
        >
          <View style={styles.linkTextContainer}>
            <Text style={styles.linkText}> Check Your Progress </Text>
          </View>
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
    backgroundColor: Styles.colors.blue,
  },
  header: {
    alignSelf: "stretch",
    height: Platform.OS === "ios" ? 134 + Constants.statusBarHeight : 134,
    zIndex: 100,
    justifyContent: "center",
  },
  title: {
    color: Styles.colors.white,
    fontFamily: "BentonSansBold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headerImage: {
    height: 87,
    width: 337,
    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight - 5 : 0,
  },
  button: {
    height: 50,
    backgroundColor: Styles.colors.white,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
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
  donateText: {
    paddingRight: "7.5%",
    paddingLeft: "7.5%",
    fontFamily: "HelveticaNeue",
    color: Styles.colors.white,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 37,
  },
  donateLinksContainer: {
    marginTop: 145,
  },
  donateLinksText: {
    paddingRight: "19.75%",
    paddingLeft: "19.75%",
    fontFamily: "HelveticaNeue",
    color: Styles.colors.white,
    fontSize: 14,
    paddingBottom: 20,
    textAlign: "center",
  },
});
