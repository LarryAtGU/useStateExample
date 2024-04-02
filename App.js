import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([0]);
  const [arr2, setArr2] = useState([0]);
  const incCount = () => setCount((curValue) => curValue + 1);
  const pushArray = () => {
    arr.push(arr.length);
    setArr(arr);
  };
  const copyArray = () => {
    setArr2([...arr2, arr2.length]);
  };
  return (
    <View style={styles.container}>
      <Text>Count: {count}.</Text>
      <Button title="Increase Count" onPress={incCount} />
      <Text>Arr: {arr.join(",")}.</Text>
      <Button title="Push item to arr" onPress={pushArray} />
      <Text>Arr: {arr2.join(",")}.</Text>
      <Button title="Copy array with spread" onPress={copyArray} />
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
