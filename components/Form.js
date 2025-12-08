// ...existing code...
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comnfirmPassword, setConfirmPassword] = useState("");
    const [showData, setShowData] = useState(false);

    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.heading}>
                    <Text style={style.headText}>My Sign Up Form</Text>
                </View>

                <Text style={style.lable}>Name</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={style.input}
                    placeholder="Enter your name"
                />

                <Text style={style.lable}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={style.input}
                    placeholder="Enter your e-mail"
                    keyboardType="email-address"
                />
                <Text>Password</Text>
                <TextInput 
                value={password}
                onChangeText={setPassword}
                style={style.input} 
                placeholder="Enter your password" 
                secureTextEntry={true}
                />
                <Text>Confirm Password</Text>
                <TextInput 
                value={comnfirmPassword}
                onChangeText={setConfirmPassword}
                style={style.input} 
                placeholder="Confirm your password" 
                secureTextEntry={true}
                />


                <View style={style.btn}>
                    <Button onPress={() => setShowData(true)} title="Sign Up" />
                </View>

                {showData && (
                    <View style={{ marginTop: 16 }}>
                        <Text style={style.lable}> Name:</Text>
                        <Text>{name}</Text>

                        <Text style={[style.lable, { marginTop: 8 }]}>Email:</Text>
                        <Text>{email}</Text>
                        <Text style={[style.lable, { marginTop: 8 }]}>Password:</Text>
                        <Text>{password}</Text>
                        <Text style={[style.lable, { marginTop: 8 }]}>Confirm Password:</Text>
                        <Text>{comnfirmPassword}</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Form;
// ...existing code...

const style = StyleSheet.create({
    container: {
        padding: 30,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 30,
        width: 400,
    },
    heading: {
        alignItems: "center",
        marginTop: -15,
        marginBottom: 25,
    },
    headText: {
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "ui-serif",
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    lable: {
        fontSize: 16,
        marginBottom: 5,
    },
    btn: {
        marginBottom: -15,
        marginTop: 10,
        borderRadius: 10,
    },
});