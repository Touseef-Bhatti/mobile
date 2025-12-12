import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
import { Button } from 'react-native-web';


const Home = () => {
    return(
        <>
        <View>
            <Text>Hello i am Home Screen</Text>
        </View>

            <Button title='Go to About' />        
        </>
    )
}

const About = () => {
    return(
        <>
        <View>
            <Text>Hello i am About Screen</Text>
        </View>

        </>
    )
}

const Story = () => {
    return(
        <>
        <View>
            <Text>Hello i am Story Screen</Text>
        </View>

        </>
    )
}

const Main = ()=>{

    const Stack = createNativeStackNavigator();

    return(
        <>
            <Stack.Navigator>
            <Stack.Screen   name='Home' component={Home} />
            <Stack.Screen   name='About' component={About} />
             <Stack.Screen   name='Story' component={Story} />

            </Stack.Navigator>

        </>
    )
}
export default Main;