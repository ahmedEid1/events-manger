import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: "#f3f3f3",
  },
});

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    setInterval(() => this.setState(
        {
          events: this.state.events.map(event => ({
            ...event,
            timer: Date.now(),
          })),
        },
      ),
      1000);
    // a place holder for data
    const events = require("./db.json").events;
    this.setState({ events });
  }

  render() {
    return <FlatList
      style={styles.list}
      data={this.state.events}
      renderItem={({ item }) => <EventCard event={item} />}
      keyExtractor={item => item.id}
    />;
  }
}


export default EventList;
