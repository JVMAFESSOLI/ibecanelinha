import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Registrar presença"
        onPress={() => navigation.navigate("Attendance")}
      />
      <Button
        title="Visualizar presença"
        onPress={() => navigation.navigate("AttendanceList")}
      />
    </View>
  );
};

export default HomeScreen;
