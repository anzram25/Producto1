import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { creacteStackNavigation, createStackNavigator } from "@react-navigation/stack";
import { FrontAwesome5, FrontAwesome } from "@expo/vector-icons";

function homeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/logo.png")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
           José Francisco Anzaldo Ramirez 
        </Text>
        <TouchableOpacity style={styles.boton1} onPress={() => {
          navigation.navigate("Universo")
        }}>
          <Text style={{color:"#FFF"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function indiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/indice.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.titulo}>
           Seleccione la opción deseada:
        </Text>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#FFF"}}>
            "Home"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Universo")
        }}>
          <Text style={{color:"#0111A3"}}>
            "Universo"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Planeta")
        }}>
          <Text style={{color:"#FFF"}}>
            "Planeta"
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Estrellas")
        }}>
          <Text style={{color:"#0111A3"}}>
            "Estrellas"
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function secondScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/universo.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
           "El universo no solo tiene una historia, sino cualquier historia posible"
        </Text>
        <Text style={styles.subtitulo}>
            - Stephen Hawking
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Planeta")
        }}>
          <Text style={{color:"#0111A3"}}>
            Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#FFF"}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#0111A3"}}>
            Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function thirdScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/planetas.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
           "Si hay solamente espacio, sin soles o planetas en él, entonces el espacio pierde su ensencia"
        </Text>
        <Text style={styles.subtitulo}>
            - Buda Guatama
        </Text>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Estrellas")
        }}>
          <Text style={{color:"#FFF"}}>
          Siguiente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Universo")
        }}>
          <Text style={{color:"#0111A3"}}>
            Anterior
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function fourthScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width: "100%", flex:1, alignItems: "center", paddingTop: 100, paddingBottom:30}}>
        <Image source={require("./assets/imagenes/estrella.jpg")} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.subtitulo}>
           "Silenciosamente, una por una, en los infinitos prados del cielo, florecieron las hermosas estrellas"
        </Text>
        <Text style={styles.subtitulo}>
            - Henry Wadsworth Longefellow
        </Text>
        <TouchableOpacity style={styles.boton3} onPress={() => {
          navigation.navigate("Home")
        }}>
          <Text style={{color:"#0111A3"}}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => {
          navigation.navigate("Indice")
        }}>
          <Text style={{color:"#FFF"}}>
          Indice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Home" component={homeScreen}></Main.Screen>
        <Main.Screen name="Indice" component={indiceScreen}></Main.Screen>
        <Main.Screen name="Universo" component={secondScreen}></Main.Screen>
        <Main.Screen name="Planeta" component={thirdScreen}></Main.Screen>
        <Main.Screen name="Estrellas" component={fourthScreen}></Main.Screen>
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E1F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: "60%",
    height: undefined,
    flex: 1
  },
  titulo:{
    fontSize: 40,
    color: "#0111A3",
    fontWeight: "bold",
    marginBottom:20
  },
  subtitulo:{
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    marginBottom:20
  },
  boton1:{
    backgroundColor: "#0111A3",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10
  },
  boton2:{
    backgroundColor: "#0111A3",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10
  },
  boton3:{
    backgroundColor: "#FFF",
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 15,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10
  }
});