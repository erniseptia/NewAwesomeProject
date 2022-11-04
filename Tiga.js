import * as React from 'react';
import { View, Text, Stylesheet, Button, TextInput } from 'react-native';

const Tiga = ({navigation}) => {
    return (
        <View>
            <Text style={{textAlign:'center', fontSize:20}}>INI HALAMAN TIGA</Text>
            <Text>Ke Halaman Sebelumnya</Text>
            <Button title='Previous Page'
            onPress={()=>navigation.navigate('Dua')}/>
            <Text>Ke Halaman Satu</Text>
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
export default Tiga;