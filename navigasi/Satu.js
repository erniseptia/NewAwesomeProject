import * as React from 'react';
import { View, Text, Stylesheet, Button, TextInput } from 'react-native';

const Satu = ({navigation}) => {
    return (
        <View>
            <Text style={{textAlign:'center', fontSize:20}}>INI HALAMAN SATU</Text>
            <Text>Selamat Datang Silahkan Inputkan Data Anda Terlebih Dahulu</Text>
            <Text>Nama : </Text>
            <TextInput></TextInput>
            <Text>Email : </Text>
            <TextInput></TextInput>
            <Button title='Next Page'
            onPress={()=>navigation.navigate('Dua')}/>
            <Text>Ke Halaman Tiga</Text>
            <Button title='Go to Tiga'
            onPress={()=>navigation.navigate('Tiga')}/>
            <Text>Ke Halaman Home</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
            <Text>Ke Halaman About</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
            
        </View>
    );
};
export default Satu;