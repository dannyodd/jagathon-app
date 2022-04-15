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
  require("../../images/logo_avenue.png"),
  require("../../images/logo_geico.png"),
  require("../../images/logo_imcu.png"),
  require("../../images/logo_loves.png"),
  require("../../images/logo_pvg.png"),
  require("../../images/logo_vivio.png"),
  require("../../images/logo_iupui_admission.png"),
  require("../../images/logo_iupui_athletic.png"),
  require("../../images/logo_iupui_dsa.png"),
  require("../../images/logo_iupui_gpsg.jpg"),
  require("../../images/logo_iupui_honor.png"),
  require("../../images/logo_iupui_pts.png"),
  require("../../images/logo_iupui_rha.png"),
  require("../../images/logo_iupui_shhs.png"),
  require("../../images/logo_iupui_soic.png"),
  require("../../images/logo_iupui_ulib.png"),
  require("../../images/logo_iupui_usg.png"),
  require("../../images/logo_iupui_rmfair.jpeg"),
];

//you must pass navigation into the Sponsors function in order to use the features
export default function Sponsors({ navigation }) {
  return (
    // entire page wrapped in this view
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.header}>
        {/* logo image */}
        <Image
          source={require("../../images/jagathonLogoWhite.png")}
          style={styles.headerImage}
        />
      </View>

      {/* scrollable content of the page - allows top bar to have fixed position */}
      <ScrollView>
        {/* intro stuff about sponsors */}
        <View style={styles.intro}>
          <Text style={styles.introTitle}>
            Jagathon is immensely grateful for all who join the fight for
            pediatric research innovations.
          </Text>
          <Text style={styles.introText}>
            Thank you to our sponsors!
          </Text>
        </View>

        {/* loop through the sponsors image array and pass data to the Sponsor component to display them*/}
        <View style={styles.sponsorsBox}>
          {sponsors.map((item, key) => {
            return <Sponsor key={key} img={item}></Sponsor>;
          })}
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
  intro: {
    minHeight: 80,
    margin: 20,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: "center",
    padding: 20,
  },
  introTitle: {
    color: Styles.colors.white,
    fontSize: 16,
    fontFamily: "BentonSansBold",
    textAlign: "center",
  },
  introText: {
    color: Styles.colors.white,
    fontSize: 14,
    marginTop: 10,
    fontFamily: "BentonSans",
    textAlign: "center",
  },
  sponsorsBox: {
    flex: 1,
    alignContent: "stretch",
    justifyContent: "center",
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: "column",
    backgroundColor: Styles.colors.white,
  },
});
