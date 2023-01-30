
import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
const App = () => {
  const [isVisible, setVisible] = useState(false);
  const [isData, setData] = useState([]);
  const [isTen, setTen] = React.useState("");
  const [isMota, setMota] = React.useState("");
  const [isLink, setLink] = React.useState("");
  const addList =()=> {
      setData([...isData,{id:10,name: isTen, mota: isMota, url:isLink}])
      setVisible(!isVisible)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Họ Tên:Đặng Trường Sơn</Text>
      <Text style={styles.text}>MSV:Ph22824</Text>
      <Button title='Thêm Mới' onPress={() => setVisible(true)}></Button>
     {isVisible?<>
      <View style={styles.item}>
        <TextInput
          style={styles.input}
          onChangeText={setData}
          placeholder="Họ Tên"
        />
        <TextInput
          style={styles.input}
          onChangeText={setMota}
          placeholder="Mô Tả"
        />
        <TextInput
          style={styles.input}
          onChangeText={setLink}
          placeholder="Link Ảnh"
        />
    <View style={{display:'flex'}}>
    <Button title='Hủy' onPress={() => setVisible(!isVisible)}></Button>
      <Button title='Lưu' onPress={() => addList()}></Button>
    </View>
      </View></>:
     null}
   
      <FlatList
        data={isData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textItem} title="">Name: {item.name}</Text>
            <Text style={styles.textItem}>Mô tả: {item.mota}</Text>
            <View style={styles.center}>
              <Image
                style={styles.image}
                source={{ uri: item.url }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 10,
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
  },
  text: {
    fontWeight: "800",
    fontStyle: "italic",
    color: "white",
    fontSize: 20,
  },
  textItem: {
    fontWeight: "800",
    fontStyle: "italic",
    color: "black",
    fontSize: 15,
  },
  item: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: "green",
  },
  image: {
    width: 200,
    height: 200,
  }, center: {
    alignItems: "center",
  }
});

export default App;
