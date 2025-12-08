import{View ,Text ,Button } from 'react-native';
import { FlatList } from 'react-native';


const RenderData = () => {

const ItemsArray = [
    {id:1 , Fruit:'Apple'},
    {id:2 , Fruit:'Banana'},
    {id:3 , Fruit:'Mango'},
    {id:4 , Fruit:'Orange'},
    {id:5 , Fruit:'Pineapple'},
    {id:6 , Fruit:'Grapes'},
    {id:7 , Fruit:'Strawberry'},
    {id:8 , Fruit:'Watermelon'},
    {id:9 , Fruit:'Papaya'},
    {id:10 , Fruit:'Kiwi'},
    {id:11 , Fruit:'Peach'},
    {id:12 , Fruit:'Plum'},
    {id:13 , Fruit:'Cherry'},
    {id:14 , Fruit:'Apricot'},
    {id:15 , Fruit:'Cantaloupe'},
    {id:16 , Fruit:'Fig'},
    {id:17 , Fruit:'Guava'},
    {id:18 , Fruit:'Lemon'},
    {id:19 , Fruit:'Lime'},
    {id:20 , Fruit:'Nectarine'},
    ];    
    
    

    return(
        <>
        <FlatList
        data = {ItemsArray}    
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item }) =>{
            return(
                <Text>{item.Fruit} </Text>
    )
    }   
 }    
        
       /> 
        </>
    )

}

export default RenderData ;