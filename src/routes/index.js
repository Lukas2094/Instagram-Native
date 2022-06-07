import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React , { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Feed from '../screens/Feed';
import { faCamera, faPaperPlane, faTelevision } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

const MainNavigator = createStackNavigator({
    Feed: Feed
}, {
    defaultNavigationOptions: {
        headerTitle: (
            <>
                <Image source={logo} style={{marginTop: 15 , marginLeft: 60}}/> 
            </>    
        ),

        headerLeft:  (
            <TouchableOpacity  style={{marginLeft: 15 }}>
                <FontAwesomeIcon style={{marginTop: 10 }} icon={faCamera} size={20} />
            </TouchableOpacity>
        ),
        headerRight: (
            <Fragment>
                <TouchableOpacity>
                    <FontAwesomeIcon style={{ marginRight: 15 , marginTop: 10  }}  icon={faPaperPlane} size={20} />
                </TouchableOpacity>
            </Fragment>
        ),
    }
});

export default createAppContainer(MainNavigator);