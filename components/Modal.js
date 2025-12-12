
import { useState } from 'react';
import { Modal, Text, View ,Button } from 'react-native';


const MyModal = () => {
    
    const [showModal , setShowModal] =useState(false)
    return (
        <>
        <Modal visible={showModal} 
        animationType='slide'
        transparent = {true}
         
         >



            <View>
                <Text>Hello, iam modal</Text>
            </View>
        </Modal>

        <View>
            <Button title = "Control Modal" onPress={()=> {setShowModal(true) } }   />
        </View>
        
        
        </>
    )
};

export default MyModal;