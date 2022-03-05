//Browser is a component that acts as the in-app browser. You access it via the react-native-navigation and pass a formatted link to this compoenent to open that link in-app

//necessary imports for react native
import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";

//import the WebView that allows us to use the in-app browser
import { WebView } from "react-native-webview";

// color sheet import
import { Styles } from "../../Styles/Styles";

//you must import route to this Browser component to access the params given in the navigation (in our case the link we wanna view is being passed)
export default function Browser({ route }) {
  //access those params with our link inside
  const { link } = route.params;
  var iosStatusbar;
  if (Platform.OS === "ios") {
    iosStatusbar = (
      <StatusBar
        hidden={false}
        style={{ marginTop: 50 }}
        barStyle="dark-content"
      />
    );
  }

  //simply pass the link into the source of the WebView
  return (
    <View style={{ flex: 1 }}>
      {iosStatusbar}
      <WebView source={link} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  webview: {
    marginTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0
  }
});
