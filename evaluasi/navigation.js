import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation'

import Layar1 from './flat'
import Layar2 from './coba'
import Lodas from './lodas'
import BelajarAsyncStorage from './asyncstorage'

const Route =createBottomTabNavigator({
    Home:{
        screen:Layar1,
         navigationOptions:()=>({
            title:'HOME'
          })
        
    },
    Lodas:{
        screen:Lodas,
         navigationOptions:()=>({
            title:'LODAS'
          })
    },
    Tugas:{
        screen:BelajarAsyncStorage,
        navigationOptions:()=>({
            title:'TUGAS'
          })
    }
})

const Beranda=createStackNavigator({
    
        Home:{
            screen:Route,
            navigationOptions:()=>({
                title:'PONDOK IT'
              })
            
        },
        Layar2:{
            screen:Layar2,
            navigationOptions:()=>({
                title:'TUGAS'
              })
        }
       
        
})

const Kate=createAppContainer(Beranda)
export default Kate


