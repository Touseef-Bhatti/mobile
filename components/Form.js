import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView,Button} from 'react-native'


const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const hanldeSubmit = () => {
        alert(`Name: ${name} \nEmail: ${email}`)
    }

  return (
    <>
    <ScrollView>
        <View style={style.container}>
            <View style={style.heading}><Text style={style.headText}>My Sign Up Form</Text></View>
            <Text style={style.lable}>Name</Text>
            <TextInput value={name} onChangeText={setName} style={style.input} placeholder='Enter your name'/>
            <Text style={style.lable}>Email</Text>
            <TextInput value={email} onChangeText={setEmail} style={style.input} placeholder='Enter your e-mail'/>
            {/* <Text style={style.lable}>Password</Text>
            <TextInput style={style.input} placeholder='Enter password'/>
            <Text style={style.lable}>Confirm Password</Text>
            <TextInput style={style.input} placeholder='Confirm password'/> */}
            <View style={style.btn}><Button onPress={hanldeSubmit} title = 'Sign Up' /></View>
            
        </View>
    </ScrollView>
    </>
  )
}

export default Form;

const style = StyleSheet.create({
    container:{
        padding: 30,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 30,
        width: 400,
    },
    heading:{
        alignItems: "center",
        marginTop: -15,
        marginBottom: 25 
    },
    headText:{
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "ui-serif"
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 10
    },
    lable:{
        fontSize: 16,
        marginBottom: 5
    },
    btn:{
        marginBottom: -15,
        marginTop: 10,
        borderRadius: 10
    }
})