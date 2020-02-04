import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Pizza(props) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <Body {...props} />
    </View>
  );
}

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        // backgroundColor: "gray",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 24,
        position: "absolute",
        zIndex: 1
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-arrow-round-back"
          style={{ color: "white", fontSize: 24, fontWeight: "bold" }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("clicke heart")}>
        <Ionicons
          name="ios-heart"
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold"
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Body = () => {
  return (
    <View style={{ flex: 1, marginTop: -24 }}>
      {/* 대표컷 */}
      <Image
        source={require("../../assets/04-Pizza/01.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 240,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15
        }}
      />

      {/* 핏자 타이틀 */}
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 15,
          marginBottom: 5,
          fontSize: 18,
          color: "#3b3b3b"
        }}
      >
        Paneer Pan Pizza
      </Text>
      <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
        <Ionicons name="ios-star" color="red" style={{ marginRight: 3 }} />
        <Ionicons name="ios-star" color="red" style={{ marginRight: 3 }} />
        <Ionicons name="ios-star" color="red" style={{ marginRight: 3 }} />
        <Ionicons name="ios-star" color="red" style={{ marginRight: 3 }} />
        <Ionicons name="ios-star" color="gray" style={{ marginRight: 3 }} />
      </View>

      {/* BlaBlaBla */}
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 15,
          color: "#a9a9b0",
          fontSize: 13
        }}
      >
        For a vegetraian looking for a BIG treat that goes easy on the spices,
        this one's got it all... The onions, the capsicum, those detectable
        mushrooms - with paneer and golden com to top it all.
      </Text>

      {/* Sizes */}
      <View>
        <Text style={styles.subTitle}>Sizes</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 15 }}
        >
          <PriceBox name="Medium" price="$450" checked={true} />
          <PriceBox name="Large" price="$990" checked={false} />
          <PriceBox name="Small" price="$199" checked={false} />
        </ScrollView>
      </View>

      {/* Crust */}
      <View>
        <Text style={styles.subTitle}>Crust</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 15 }}
        >
          <PriceBox name="Standard" price="" checked={true} />
          <PriceBox name="Garic-Roasted" price="Free" checked={false} />
          <PriceBox name="Cheese Burst" price="Free" checked={false} />
        </ScrollView>
      </View>

      {/* Toppings */}
      <View>
        <Text style={styles.subTitle}>Toppings</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 15 }}
        >
          <PriceBox name="Standard" price="" checked={true} />
          <PriceBox name="Extra Cheese" price="$99" checked={false} />
          <PriceBox name="Extra Spice" price="" checked={false} />
        </ScrollView>
      </View>

      <TouchableOpacity
        onPress={() => console.log("Clicked Add to Cart")}
        style={styles.addToCart}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const PriceBox = ({ name, price, checked }) => {
  const color = checked ? "red" : "gray";
  const fontSize = 11;
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: color,
        borderRadius: 3,
        width: 110,
        padding: 5,
        marginRight: 5
      }}
    >
      <Text style={{ color: color, fontSize: fontSize }}>{name}</Text>
      <Text style={{ fontSize: fontSize }}>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  subTitle: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
    fontSize: 15
  },
  addToCart: {
    backgroundColor: "red",
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,
    padding: 10
  }
});
