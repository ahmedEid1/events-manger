import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from "./EventList";

export default function App() {
  return (
    <View>
      <EventList />
    </View>
  );
}
