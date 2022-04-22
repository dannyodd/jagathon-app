// App is the main component of the application. Navigation, push notification authentication, and other setups start here. Components are imported and navigated to as pages via react-navigation or in-app browser

//necessary imports
import React, { useEffect } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
  AppRegistry,
  Image,
  Button,
  LogBox,
} from "react-native";

// keeps the splash screen visible while the AppLoading component is mounted
import AppLoading from "expo-app-loading";

// for importing fonts
// import { useFonts } from "expo-font";
import * as Font from "expo-font";

//import material ui icons for use in the menu
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//react-navigation imports for menus
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

//******************************* import for? ********************************************************
import "react-native-gesture-handler";

//expo and firebase notification imports
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import "firebase/firestore";
// import { Permissions, Notifications } from "expo";

//import our components for the pages/elements
import Home from "./Components/Pages/Home";
import About from "./Components/About/About";
import NotificationsScreen from "./Components/Notifications/Notifications";
import Donate from "./Components/Donate/Donate";
import Sponsors from "./Components/Sponsors/Sponsors";
import Calendar from "./Components/Calendar/Calendar";
import Faq from "./Components/Faq/Faq";
import Events from "./Components/Calendar/Event";
import Browser from "./Components/Browser/Browser";

// colorsheet import
import { Styles } from "./Styles/Styles";

/*
 *
 *
 *   Temporary testing code
 *   Remove before publishing
 *
 *
 */

//ignores specified warnings
LogBox.ignoreLogs(["Setting a timer"]);

/*
 *   end of temp testing code
 */

let customFonts = {
  BentonSansBold: require("./assets/fonts/BentonSans_Bold.otf"),
  BentonSans: require("./assets/fonts/BentonSans_Regular.otf"),
  HelveticaNeue: require("./assets/fonts/HelveticaNeue.ttf"),
};
/*
 *
 *
 *   Firebase Setup
 *
 *
 */

//initialize firebase config
var firebaseConfig = {
  apiKey: "AIzaSyD9W2H6who2srgRmauLmcQjJzk_WbyJdu8",
  authDomain: "jagathon-app.firebaseapp.com",
  databaseURL: "https://jagathon-app.firebaseio.com",
  projectId: "jagathon-app",
  storageBucket: "jagathon-app.appspot.com",
  messagingSenderId: "413294726213",
  appId: "1:413294726213:web:6ba4912a1455576f24a72c",
  measurementId: "G-RC9WK3HYRR",
};
//initalize firebase and firestore if not initalized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  _db = firebase.firestore();
  // firebase.analytics();
}

//anonymous user authentication
function initSignIn() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      //If user data isnt't in firestore, add as new document
      _db
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            _db.collection("users").doc(uid).set({
              uid: uid,
              os: Platform.OS,
            });
          } else {
            // user exists in firestore, not added
            console.log("user exists");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    } else {
      // User is not signed in
      // Create anonymous sign in, will trigger firebase.auth().onAuthStateChanged
      firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {})
        .catch(function (error) {
          // Handle Errors here.
        });
    }
  });
}
initSignIn();

// save device token to user's document in firebase firestore
async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = firebase.auth().currentUser.uid;

  // Add the token to the users datastore
  await firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .update({
      tokens: firebase.firestore.FieldValue.arrayUnion(token),
    });
}

/*
 *
 *
 *   Push notifications settings
 *
 *
 */

//triggers native permission dialog - mainly for IOS

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
}

//for send push notification test button
/*
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { data: "goes here" },
  };

  if (expoPushToken != false) {
    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  } else {
    alert("Must use physical device for Push Notifications");
  }
}
*/

// Register device for push notifications, returns device token
async function registerForPushNotificationsAsync() {
  let token;
  // run if it is a device (not emulator) and not on web
  if (Constants.Device.isDevice && Platform.OS !== "web") {
    // get and set existing notifications permissions status
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    // Display alert and end function if permissions are not granted
    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
    //set token
    token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log("Token: " + token);
  } else {
    //set token as false and alert if called from web or device emulator
    token = false;
    console.log("Must use physical device for Push Notifications");
  }

  // set notificaiton settings for android devices
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  console.log(token);
  return token;
}

// Notificaiton handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

/*
 *
 *
 *   Navigation setup
 *
 *
 */

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//this is the navigation for the pages that are not in the menu
const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sponsors" component={Sponsors} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Link" component={Browser} />
    </Stack.Navigator>
  );
};

/*
 *
 *
 *   Push notifications settings
 *
 *
 */

export default function App() {
  {
    /*
     *
     *   Push notifications listeners
     *
     */
  }
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then(function (token) {
      setExpoPushToken(token);
      saveTokenToDatabase(token);
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    {
      /*
       *
       *   Load custom fonts; BentonSansBold, BentonSans, HelveticaNeue
       *
       */
    }
    async function loadFont() {
      return await Font.loadAsync({
        BentonSansBold: require("./assets/fonts/BentonSans_Bold.otf"),
        BentonSans: require("./assets/fonts/BentonSans_Regular.otf"),
        HelveticaNeue: require("./assets/fonts/HelveticaNeue.ttf"),
      });
    }
    // after the loading set the font status to true
    loadFont().then(() => setFontsLoaded(true));

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  // only load app if fonts are loaded
  if (!fontsLoaded) {
    //keep displaying splashscreen until fonts are loaded
    return <AppLoading />;
  } else
    return (
      /*
       *
       *
       *   App Navigation
       *
       *
       */
      <NavigationContainer
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        {/* This is the start of the navigation menu */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              // here we assign the icons and their behavior in the menu
              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "About") {
                iconName = focused ? "info" : "info";
              } else if (route.name === "Calendar") {
                iconName = focused ? "event" : "event";
              } else if (route.name === "Donate") {
                iconName = focused ? "favorite" : "favorite";
              } else if (route.name === "Notification") {
                iconName = focused ? "notifications" : "notifications";
              }

              // You can return any component that you like here! We are using MaterialIcons to use the material ui icons for the menu
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "#E15168",
            inactiveTintColor: "#454545",
          }}
        >
          {/* This is all the pages that will be accessed from the menu */}
          <Tab.Screen
            name="Home"
            component={Navigator}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{ title: "About" }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{ title: "Calendar" }}
          />
          <Tab.Screen
            name="Donate"
            component={Donate}
            options={{ title: "Donate" }}
          />

          <Tab.Screen
            name="Notification"
            component={NotificationsScreen}
            options={{ title: "Announcements" }}
          />
        </Tab.Navigator>

        <StatusBar style="auto" barStyle="dark-content" />
      </NavigationContainer>
    );
}
