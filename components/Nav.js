import {View, Text, StyleSheet, Image, ScrollView,Button} from 'react-native'


const Nav = () => {

    const myImg = require("../assets/images/img.png")
  return (
    <>
    <ScrollView>
        <View style = {styling.viewStyling}>
            <Text style= {styling.textStyling}>
                I am Abdul Rehman
            </Text>
        </View>
        <Image source={myImg} style={{height: 180, width: 300, marginTop: 10}}/>
        <Image source={{uri: "https://thumbs.dreamstime.com/b/wildflowers-blooming-sunset-nature-scenery-wildflowers-blooming-sunset-nature-scenery-388164189.jpg"}} style = {{height: 200, width: 300, marginTop: 10}}/>
        <View style = {{marginTop: 10}}>
            <Button title='Click me!' color={"red"}/>
        </View>
    </ScrollView>
    </>
  )
}

export default Nav;

const styling = StyleSheet.create({
    textStyling: {
        color: "white",
        fontSize: 25,
        fontFamily: "Arial",
        textAlign: "center"
    },
    viewStyling: {
        backgroundColor: "black",
        padding: 15,
        marginTop: 10,
        borderRadius: 35,
    }
})
