//Calendar component is the page for the calendar events. There's a calendar picker to choose a day and show that day's events. Event data to be pulled from Jagathon LiveWhale calendar and populated using the Events component

//necessary imports for react native
import React, { useState, useEffect } from "react";
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

//import our Events component that will hold the imported info from LiveWhale on the Calendar component page
import Events from "./Events";

//import the calendar picker that lets us pick a date from the calendar
import CalendarPicker from "react-native-calendar-picker";

//you must pass navigation into the Calendar function to use the navigation features
export default function Calendar({ navigation }) {
  // set state for loading and json LiveWhale data
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // hook to cause LiveWhale json to be fetched
  useEffect(() => {
    fetch("https://events.iu.edu/live/json/events/group_id/388")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // get the calendar dates to store in state
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  // let itemsToRender;
  // if(data){
  //   itemsToRender = eventData.map((item, key) => {
  //       return <Events
  //           key={key}
  //           title={item.title}
  //           content={item.content}
  //           date={item.date}
  //           img={item.image}
  //           link={item.link}
  //         ></Events>

  //     }
  // } else {
  //   itemsToRender = <Text>Loading Events...</Text>
  // }

  // format the date from LiveWhale
  const getDate = (fullDate) => {
    var formattedDate = new Date(fullDate.substring(0, 10));
    var date = formattedDate.getDate() + 1;
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

  // funciton to change the date to the correct format
  const onDateChange = (date) => {
    //function to handle the date change
    setSelectedStartDate(date);
  };

  // variable used to sort through events for the date picker
  let num = 0;

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
        {/* calendar section */}
        <View style={styles.calendarBox}>
          <CalendarPicker
            todayBackgroundColor={Styles.colors.yellow}
            selectedDayColor={Styles.colors.blue}
            selectedDayTextColor={Styles.colors.black}
            allowRangeSelection={false}
            onDateChange={onDateChange}
            height={650}
          />
        </View>

        {/* Display sorted events if a user picked a date or show the default only*/}
        {selectedStartDate ? (
          <View>
            <View style={styles.label}>
              <Text style={styles.labelText}>
                {" "}
                Events on {selectedStartDate
                  .format("MM-DD-YYYY")
                  .toString()}{" "}
              </Text>
            </View>

            {/* sort through the events */}
            {data.map((item, key) => {
              // if the event matches the day, increase the variable so that we know there is an event on that day (if variable is zero we know to say "No events on this date")
              if (
                getDate(item.date_utc).toString() ===
                selectedStartDate.format("MM/DD/YYYY").toString()
              ) {
                num++;
              }

              // find out if the date matches the picked date and display the event if and only if there's event, otherwise show the "No events" message
              return getDate(item.date_utc).toString() !==
                selectedStartDate.format("MM/DD/YYYY").toString() ? (
                data.length === key + 1 && num === 0 ? (
                  <Text style={styles.warningText}>
                    {" "}
                    No events on this date.{" "}
                  </Text>
                ) : null
              ) : (
                <Events
                  key={key}
                  title={
                    item.date2_utc !== undefined
                      ? item.date2_utc.slice(0, 10) ===
                        item.date_utc.slice(0, 10)
                        ? item.title + " (Day 2)"
                        : item.title + " (Day 1)"
                      : item.title
                  }
                  content={item.description}
                  date={getDate(item.date_utc)}
                  reg={
                    item.custom_registration_link === undefined
                      ? undefined
                      : { uri: item.custom_registration_link }
                  }
                  link={{ uri: item.url }}
                ></Events>
              );
            })}
          </View>
        ) : (
          <View style={styles.labeller}>
            <Text style={styles.labellerText}>
              {" "}
              Select a date to filter events
            </Text>
          </View>
        )}

        {/* Display all the events */}
        <View style={styles.label}>
          <Text style={styles.labelText}>All Events</Text>
        </View>

        {/* loop through the incoming data and display it */}
        {isLoading ? (
          <Text> Loading... </Text>
        ) : (
          data.map((item, key) => {
            return (
              <Events
                key={key}
                title={
                  item.date2_utc !== undefined
                    ? item.date2_utc.slice(0, 10) === item.date_utc.slice(0, 10)
                      ? item.title + " (Day 2)"
                      : item.title + " (Day 1)"
                    : item.title
                }
                content={item.description}
                date={getDate(item.date_utc)}
                reg={
                  item.custom_registration_link === undefined
                    ? undefined
                    : { uri: item.custom_registration_link }
                }
                link={{ uri: item.url }}
              ></Events>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

//styles for this component
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
  calendarBox: {
    // height: 100,
    alignSelf: "stretch",
    margin: 10,
    backgroundColor: Styles.colors.grey,
    opacity: 0.8,
  },
  button: {
    height: 50,
    backgroundColor: Styles.colors.cyan,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    marginTop: 20,
  },
  linkText: {
    color: Styles.colors.white,
    fontSize: 33,
    //fontWeight: "bold",
    fontFamily: "HoneyCandy",
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
  label: {
    alignSelf: "stretch",
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  labelText: {
    color: Styles.colors.white,
    fontSize: 14,
    fontFamily: "BentonSansBold",
    textAlign: "center",
    textTransform: "uppercase",
  },

  labeller: {
    alignSelf: "stretch",
    height: 45,
    marginTop: 15,
    marginBottom: 10,
    padding: 5,
  },
  labellerText: {
    fontSize: 14,
    color: Styles.colors.white,
    fontFamily: "BentonSansBold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  warningText: {
    fontSize: 20,
    color: Styles.colors.white,
    alignSelf: "center",
  },
});
