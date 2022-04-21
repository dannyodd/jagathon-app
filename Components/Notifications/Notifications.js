// Notifications page showing notifications users receive from Jagathon members pushed in Firebase

// required react native imports
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

// color sheet import
import { Styles } from "../../Styles/Styles";

// import Notification component - the box holding the notification info
import Notification from "./Notification";

// import firebase capabilities
import * as firebase from "firebase";
import firestore from "firebase/firestore";

// dummy json for testing basic component structure
// const notif = [
//   {
//     title: "T shirts ready",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra egestas mollis. Curabitur eu est ut arcu sagittis convallis eu eget quam.",
//     date: "05/05/21",
//   },
//   {
//     title: "A new sponsor!",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra egestas mollis. Curabitur eu est ut arcu sagittis convallis eu eget quam.",
//     date: "04/13/21",
//   },
//   {
//     title: "T shirts ready",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra egestas mollis. Curabitur eu est ut arcu sagittis convallis eu eget quam.",
//     date: "05/05/21",
//   },
//   {
//     title: "A new sponsor!",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra egestas mollis. Curabitur eu est ut arcu sagittis convallis eu eget quam.",
//     date: "04/13/21",
//   },
// ];

// array to hold notification data from Firebase
let dataArray = [];

//you must pass navigation into the Notifications function to use the navigation features
export default function Notifications({ navigation }) {

    // set state for loading and Firebase Firestore data
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


  // hook to cause Firebase data to be fetched
  useEffect(() => {
    firebase.firestore().collection("notifications").orderBy("date", "desc")
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());

              setData(oldArray => [...oldArray, doc.data()]);

          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      })
    .finally(()=>{setLoading(false)})
  },[]);

  if(isLoading){

    return (
      <View style={styles.container}>
              {/* top bar */}
        <View style={styles.header}>
          {/* logo image */}
          <Image
            source={require("../../images/jagathonLogoWhite.png")}
            style={styles.headerImage}
          />
        </View>
        <View>
          <Text style={styles.headingText}>Notifications</Text>
        </View>
  
        {/* scrollable content of the page - allows top bar to have fixed position */}
        <ScrollView>
          {/* If loaded, loop through json data of notifications to display needed info in the Notification component */}

          <Text style={styles.linkText}> Loading... </Text>
  
        </ScrollView>
      </View>
    );

  } else {

    console.log("here is data: ", data);

    return (
      <View style={styles.container}>
              {/* top bar */}
        <View style={styles.header}>
          {/* logo image */}
          <Image
            source={require("../../images/jagathonLogoWhite.png")}
            style={styles.headerImage}
          />
        </View>
        <View>
          <Text style={styles.headingText}>Announcements</Text>
        </View>
  
        {/* scrollable content of the page - allows top bar to have fixed position */}
        <ScrollView>
          {/* If loaded, loop through json data of notifications to display needed info in the Notification component */}
          {data.map((item, key) => {
            return (
              <Notification
                key={key}
                title={item.title}
                content={item.text}
              ></Notification>
            );
          })}
  
        </ScrollView>
      </View>
    );
    
  }


}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Styles.colors.yellow,
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
  headingText: {
    color: Styles.colors.white,
    fontFamily: "BentonSansBold",
    fontSize: 24,
    textTransform: "uppercase",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  linkText: {
    color: Styles.colors.white,
    fontSize: 14,
    fontFamily: "BentonSansBold",
    textAlign: "center",
  },
});
