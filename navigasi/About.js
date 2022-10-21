import * as React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>Ke Halaman Home</Text>
            <Button title='Go to Home'
            onPress={()=>navigation.navigate('Home')}/>
             <Text>Ke Halaman Satu</Text>
             <Button title='Go to Satu'
            onPress={()=>navigation.navigate('Satu')}/>
             <Text>Ke Halaman Dua</Text>
               <Button title='Go to Dua'
            onPress={()=>navigation.navigate('Dua')}/>
             <Text>Ke Halaman Tiga</Text>
               <Button title='Go to Tiga'
            onPress={()=>navigation.navigate('Tiga')}/>
        </View>
    );
};

export default About;