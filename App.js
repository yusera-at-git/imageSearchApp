import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Navigator= createStackNavigator({
  Home:{
    screen: SearchScreen
  },
  ResultShow:{
    screen: ResultsShowScreen
  }
},
{ 
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    title:"Search Screen"
  }
});
// const App = () => {
//   return(
//     <View>
//       <Text style={style.textStyle}>
//         Hello world!!
//       </Text>
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   textStyle:{
//     marginTop:350,
//     textAlign:'center'
//   }
// })


// export default ()=>{
//   return <App/>
// };
export default createAppContainer(Navigator);