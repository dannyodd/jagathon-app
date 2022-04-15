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
    q: "What is Jagathon supporting?",
    a:
      "Jagathon fundraises money for pediatric research for the kids at Riley Hospital for Children. Riley is located right down the street for the Campus Center.",
  },
  {
    q: "How do I get information about Jagathon throughout the year?",
    a:
      "Once you register for Jagathon you will be added to a groupme with your team to receive information about events going on throughout the year, fundraising tips, and event information.",
  },
  {
    q: "Where do I check into the event?",
    a:
      "You must check into the event when you get there. The checkin will be located in Citizens Common.",
  },
  {
    q: "What do I bring to the event?",
    a:
      "Things to bring to the event include your phone, money (cash or card), a charger, charger pack, any medication you might need, a backpack to put your belongings in, themed outfits, and snacks.",
  },
  {
    q: "What do I wear to the event?",
    a:
      "You should wear your participant shirt, comfortable shoes, and your color team accessories include necklaces, socks, tutus, sunglasses, etc.",
  },
  {
    q: "Do we have to stand the whole time?",
    a:
      "We encourage all of our committee members and participants to stand up for the amazing kiddos at Riley Hospital for Children, but your health comes first! We have an area to take a break if needed!",
  },
  {
    q: "What type of entertainment will you have at the event?",
    a:
      "We will have some new entertainment this year along with some of the participant favorites from last year! Make sure you come to the event to see what new entertainment awaits!",
  },
  {
    q: "Will you be selling merch during the event?",
    a: "Absolutely, so make sure to bring some merch money with you!",
  },
  {
    q: "Will you be selling merch during the event?",
    a:
      "To come to the event, make sure you register by clicking this link! https://events.dancemarathon.com/index.cfm?fuseaction=donorDrive.event&eventID=4704",
  },
];

// you must pass navigation into the Faq function to use the navigation features
export default function Faq({ navigation }) {
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
        {/* title of the page */}
        <Text style={styles.title}>FAQs</Text>

        {/* mapping the items in the faqs json as a Qa component, passing props of the question and answer */}
        {faqs.map((item, key) => {
          return <Qa key={key} q={item.q} a={item.a}></Qa>;
        })}
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
  title: {
    color: Styles.colors.white,
    fontFamily: "BentonSansBold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
