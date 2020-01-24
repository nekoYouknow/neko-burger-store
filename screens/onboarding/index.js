import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

const TopCarousel = ({ list }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list.map(item => (
          <View key={item.id}>
            <TouchableOpacity>
              <Image
                source={item.source}
                resizeMode="cover"
                style={styles.thumb}
              ></Image>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* description */}
      <View
        style={{
          alignItems: "center",
          paddingBottom: 10
        }}
      >
        <Text style={{ fontSize: 22, padding: 10 }}>Soft & Crispy</Text>
        <Text style={{ fontSize: 11, color: "gray" }}>
          sdfdsfsasdfadfadfdafadfsfdafaffds
        </Text>
        <Text style={{ fontSize: 11, color: "gray" }}>
          sdfdsffadfadfdafadfsfdafaffds
        </Text>
        <Text style={{ fontSize: 11, color: "gray" }}>
          sdfdsfsdfadfadfdafadfsfdafaffds
        </Text>
        <Text>. . .</Text>
      </View>
    </View>
  );
};

const LoginSignup = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          margin: 5,
          padding: 10,
          width: 240,
          borderRadius: 10,
          backgroundColor: "#40739e"
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Signup with Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          margin: 5,
          padding: 10,
          width: 240,
          borderRadius: 10,
          backgroundColor: "#c23616"
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>
          Signup with Google
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "gray" }}>or</Text>

      <TouchableOpacity
        style={{
          margin: 5,
          padding: 10,
          width: 240,
          borderRadius: 10,
          backgroundColor: "#f5f6fa"
        }}
      >
        <Text style={{ textAlign: "center", color: "gray" }}>
          Signup with Email
        </Text>
      </TouchableOpacity>

      <View
        style={{
          marginTop: 25,
          flexDirection: "row",
          justifyContent: "space-between",
          width: 170
        }}
      >
        <Text style={{ color: "gray" }}>Existing User? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#c23616" }}>Login now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Onboarding() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "aaa",
      source: require("../../assets/01-Onboarding/01.png")
    },
    {
      id: 2,
      title: "bbb",
      source: require("../../assets/01-Onboarding/02.png")
    },
    {
      id: 3,
      title: "ccc",
      source: require("../../assets/01-Onboarding/03.png")
    }
  ]);
  return (
    <View style={styles.container}>
      <TopCarousel list={list} />
      <LoginSignup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  thumb: {
    width: 240,
    height: 240,
    margin: 10,
    // borderColor: "blue",
    borderWidth: 1,
    borderRadius: 20
  }
});
