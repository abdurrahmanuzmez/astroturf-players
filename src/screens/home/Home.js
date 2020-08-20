import * as React from 'react';
import { Image,  StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import logo from '../../../assets/emrish.png';
class Home extends React.Component{
    render() {
        return (
            <View>
                <Image source={logo} style={{ width: 305, height: 159 }} />
                <Text style={{color: '#888', fontSize: 18}}>
                    Start your adventure
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;