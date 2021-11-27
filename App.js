import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import predictBodyFat from "./BodyfatPrediction/controller/predictionController";
const predictBodyFat = require("./BodyfatPrediction/controller/predictionController");

export default function App() {
  const [waist, setWaist] = useState(0.0);
  const [Bodyfat, setBodyfat] = useState(0.0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 15 }}>Check your Bodyfat percentage.</Text>
      <Text style={{ fontSize: 15, marginBottom: 15 }}>We are using linear regression in the backend</Text>
      <TextInput
        style={{ backgroundColor: "#EBECF0", borderColor: "black", width: 200, height: 60, padding: 5 }}
        placeholder="enter your waist in centimeters"
        onChangeText={(waist) => {
          setWaist(waist);
        }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          setBodyfat(Math.floor(predictBodyFat(parseFloat(waist))));
        }}
      >
        <Text style={{ backgroundColor: "#BEBEBE", padding: 15, marginTop: 8 }}>calculate</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, marginTop: 15 }}>Your Bodyfat percentage is :{Bodyfat} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
