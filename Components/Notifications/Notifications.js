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

      // format the date from LiveWhale
  const getDate = (fullDate) => {
    var formattedDate = new Date(fullDate);
    var date = formattedDate.getDate();
    var month = formattedDate.getMonth() + 1;
    var year = formattedDate.getFullYear();
    if (month < 10) {
      month = "0" + month.toString();
    }
    if (date < 10) {
      date = "0" + date.toString();
    }
    return month + "/" + date + "/" + year;
  };

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
        {/* top bars */}
        <View style={styles.header}></View>
        <View>
          <Text style={styles.headingText}>Notifications</Text>
        </View>
  
        {/* scrollable content of the page - allows top bar to have fixed position */}
        <ScrollView>
          {/* If loaded, loop through json data of notifications to display needed info in the Notification component */}

          <Text style={styles.linkText}> Loading... </Text>

  
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

  } else {

    console.log("here is data: ", data);

    return (
      <View style={styles.container}>
        {/* top bars */}
        <View style={styles.header}></View>
        <View>
          <Text style={styles.headingText}>Notifications</Text>
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
                date={getDate(item.date.toDate())}
              ></Notification>
            );
          })}
  
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


}

// styles for this component
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  header: {
    alignSelf: "stretch",
    backgroundColor: Styles.colors.red,
    height: 50,
    zIndex: 100,
  },
  headingText: {
    color: Styles.colors.white,
    fontSize: 36,
    alignSelf: "stretch",
    backgroundColor: Styles.colorsOp.red,
    zIndex: 100,
    paddingTop: 5,
    paddingLeft: 13,
    fontFamily: "HoneyCandy",
  },
  button: {
    height: 50,
    backgroundColor: Styles.colorsOp.red,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 20,
  },
  linkText: {
    color: Styles.colors.white,
    fontWeight: "bold",
    fontSize: 18,
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
