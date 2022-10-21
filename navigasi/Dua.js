import * as React from 'react';
import { View, Text, Stylesheet, Button, TextInput, Image } from 'react-native';

const Dua = ({navigation}) => {
    return (
        <View>
            <Text style={{textAlign:'center', fontSize:20}}>INI HALAMAN DUA</Text>
            <Image source={{uri:'http://placeimg.com/100/100/tech'}} style={{width:200, height:200}}/>
            <Text>Selamat Datang Di Halaman Kedua</Text>
            <Text>Jangan Lupa Semangat Yaaa!!!</Text>
            <Button title='Next Page'
            onPress={()=>navigation.navigate('Tiga')}/>
            <Text>Previous Page</Text>
            <Button title='Go to Satu'
            onPress={()=>navigation.navigate('Satu')}/>
            <Text>Ke Halaman Home</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>Ke Halaman About</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
        </View> 
    );
};
export default Dua;