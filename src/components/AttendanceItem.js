import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AttendanceItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{item.eventName}</Text>
      <Text style={styles.memberId}>{item.memberId}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp.seconds * 1000).toLocaleString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  memberId: {
    fontSize: 16,
    color: "#555",
  },
  timestamp: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});

export default AttendanceItem;
