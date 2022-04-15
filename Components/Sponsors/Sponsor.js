// Sponsor is a component that renders as a pink box holding a given sponsor's logo image

// necessary react native imports
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';

// import color sheet
import {Styles} from '../../Styles/Styles';

// you must pass props in the Sponsor function to have access to the props passed down from the parent Sponsors component
export default function Sponsor(props) {

    // get access to the formatted image link from Sponsors json
    const link = props.img;

  return(
      // entire page wrapped in this view
      <View style={styles.container}>

          {/* display image passed down */}
        <Image source={link} style={styles.sponsor} resizeMode= "cover">
        </Image>
      </View>
  );
}

// this component's styling
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
        // height: 100,
        margin: 10,
        alignSelf: "center",
    },
    sponsor: {
        alignSelf: "center",
        height: 90,
        width: 200,
        resizeMode: "contain",
    }
});    