import * as React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Ke Halaman About</Text>
            <Button title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
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

export default Home;