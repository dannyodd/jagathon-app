import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "react-router-native";

export default function Nav() {
  return (
    <View style={styles.nav}>
        <Link to="/" style={styles.navLink}>
            <Text>Home</Text>
        </Link>
        <Link to="/sponsors" style={styles.navLink}>
            <Text>Sponsors</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create ({
  nav: {
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    flexDirection: "row",
    alignItems: "stretch"
  },
  navLink: {
    margin: 20
  }
});
