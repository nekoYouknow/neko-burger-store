import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      {/* left */}
      <View style={{ flex: 1, flexDirection: "column", marginTop: 10 }}>
        {/* line-1 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Entypo
            name="location-pin"
            style={{ color: "red", fontSize: 11, marginRight: 5 }}
          />
          <Text style={{ color: "red", fontSize: 13 }}>DELIVER</Text>
        </View>

        {/* line-2 */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 15 }}>Bangalore, India</Text>
          <Ionicons name="ios-arrow-down" style={{ marginLeft: 5 }} />
        </View>
      </View>

      {/* right */}
      <TouchableOpacity style={{ justifyContent: "center" }}>
        <Image source={require("../../assets/02-Home/avatar.png")} />
      </TouchableOpacity>
    </View>
  );
};

const Recommended = () => {
  return (
    <View style={styles.panel}>
      {/* title */}
      <View style={styles.panelTitle}>
        {/* left */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recommended</Text>
          <Text>Based on your purchase history</Text>
        </View>

        {/* right */}
        <TouchableOpacity>
          <Text style={{ color: "red" }}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* card */}
      <View style={styles.card}>
        <View style={{ marginHorizontal: 20 }}>
          <Image
            source={require("../../assets/02-Home/01.png")}
            style={styles.cardImage}
          />
          <Text style={{ paddingVertical: 5, fontSize: 15 }}>
            Veggie Cheese Extravaganze
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 3,
            marginBottom: 10
          }}
        >
          <Ionicons name="ios-star" color="red" />
          <Ionicons name="ios-star" color="red" />
          <Ionicons name="ios-star" color="red" />
          <Ionicons name="ios-star" color="red" />
          <Ionicons name="ios-star" color="gray" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cardPrice}>
            <Text style={{ color: "red" }}>Medium</Text>
            <Text>$450</Text>
          </View>
          <View style={styles.cardPriceNormal}>
            <Text>Large</Text>
            <Text>$990</Text>
          </View>
          <View style={styles.cardPriceNormal}>
            <Text>Small</Text>
            <Text>$590</Text>
          </View>
        </ScrollView>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "#f5f6fa",
                marginHorizontal: 20,
                marginVertical: 5,
                borderRadius: 10,
                textAlign: "center",
                padding: 10
              }}
            >
              Customize &amp; Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "#eb4d4b",
                color: "white",
                marginHorizontal: 20,
                marginVertical: 5,
                borderRadius: 10,
                textAlign: "center",
                padding: 10
              }}
            >
              Customize &amp; Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Menu = () => {
  return (
    <View style={styles.panel}>
      {/* title */}
      <View style={styles.panelTitle}>
        {/* left */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Menu</Text>
          <Text>What's on your menu</Text>
        </View>

        {/* right */}
        <TouchableOpacity>
          <Text style={{ color: "red" }}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* list */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50
        }}
      >
        <TouchableOpacity style={{ borderRadius: 15 }}>
          <Image
            source={require("../../assets/02-Home/02.png")}
            style={{ width: 150, height: 140 }}
            resizeMode="cover"
          />
          <Text style={{ padding: 2, fontSize: 12 }}>Veg Pizza</Text>
          <Text style={{ padding: 2, fontSize: 9, color: "gray" }}>
            Starts from $189
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 15 }}>
          <Image
            source={require("../../assets/02-Home/03.png")}
            style={{ width: 150, height: 140 }}
            resizeMode="cover"
          />
          <Text style={{ padding: 2, fontSize: 12 }}>Meat Delight</Text>
          <Text style={{ padding: 2, fontSize: 9, color: "gray" }}>
            Starts from $299
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Home({ props }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Recommended />
        <Menu />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#f5f6fa"
  },
  panel: {
    marginTop: 20
  },
  panelTitle: {
    flexDirection: "row",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    paddingVertical: 20
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 15,
    resizeMode: "cover"
  },
  cardPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 3,
    width: 110,
    padding: 8,
    marginRight: 5,
    marginLeft: 17
  },
  cardPriceNormal: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    width: 110,
    padding: 8,
    marginRight: 5
  }
});
