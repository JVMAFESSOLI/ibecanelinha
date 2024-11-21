import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { firestore } from "../firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AttendanceScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState("");
  const [memberId, setMemberId] = useState("");

  const handleRegisterAttendance = async () => {
    try {
      const attendanceRef = collection(firestore, "attendances");
      await addDoc(attendanceRef, {
        eventName,
        memberId,
        timestamp: serverTimestamp(),
      });
      console.log("Attendance registered successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error registering attendance:", error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do evento"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        placeholder="Nome do membro/visitante"
        value={memberId}
        onChangeText={setMemberId}
      />
      <Button title="Registrar" onPress={handleRegisterAttendance} />
    </View>
  );
};

export default AttendanceScreen;
