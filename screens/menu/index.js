import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Menu(props) {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Veg Pizza",
      descript: "Starts from $199",
      image: require("../../assets/03-Menu/01.png")
    },
    {
      id: 2,
      title: "Meat Delights",
      descript: "Starts from $299",
      image: require("../../assets/03-Menu/02.png")
    },
    {
      id: 3,
      title: "Crispies",
      descript: "Starts from $99",
      image: require("../../assets/03-Menu/03.png")
    },
    {
      id: 4,
      title: "Burgers",
      descript: "Starts from $149",
      image: require("../../assets/03-Menu/04.png")
    },
    {
      id: 5,
      title: "Hotdogs",
      descript: "Starts from $99",
      image: require("../../assets/03-Menu/05.png")
    },
    {
      id: 6,
      title: "Fries",
      descript: "Starts from $149",
      image: require("../../assets/03-Menu/06.png")
    },
    {
      id: 7,
      title: "Crispies",
      descript: "Starts from $99",
      image: require("../../assets/03-Menu/07.png")
    },
    {
      id: 8,
      title: "Burgers",
      descript: "Starts from $149",
      image: require("../../assets/03-Menu/08.png")
    }
  ]);
  return (
    <View style={styles.container}>
      <Header {...props} />
      <List list={list} {...props} />
      {/* <Ionicons name="ios-funnel" />  */}
    </View>
  );
}

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 24
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="ios-arrow-round-back"
          style={{ fontSize: 24, fontWeight: "bold" }}
        />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          color: "#3b3b3b",
          textAlign: "center"
        }}
      >
        Menu
      </Text>
      <Text>&nbsp;</Text>
    </View>
  );
};

const List = ({ list }) => {
  // console.log(list);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        keyExtractor={item => item.id}
        data={list}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 3, marginBottom: 20 }}>
            <Image source={item.image} style={{ borderRadius: 15 }} />
            <Text>{item.title}</Text>
            <Text style={{ color: "#a9a980" }}>{item.descript}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
    // backgroundColor: "yellow"
  }
});
