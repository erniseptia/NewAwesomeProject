import * as React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const About = ({navigation}) => {
    return (
        <View>
            <Text>Detail Screen</Text>
            <Button title='GO BACK'
            onPress={()=>navigation.navigate('Home')}/>
             <Button title='GO TO DETAIL'
            onPress={()=>navigation.navigate('Detail')}/>
        </View>
    );
};

export default About;