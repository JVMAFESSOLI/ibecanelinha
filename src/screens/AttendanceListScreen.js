import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import AttendanceItem from "../components/AttendanceItem";

const AttendanceListScreen = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "attendances")
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAttendances(data);
      } catch (error) {
        console.error("Error fetching attendances: ", error.message);
      }
    };

    fetchAttendances();
  }, []);

  return (
    <View>
      <FlatList
        data={attendances}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AttendanceItem item={item} />}
      />
    </View>
  );
};

export default AttendanceListScreen;
