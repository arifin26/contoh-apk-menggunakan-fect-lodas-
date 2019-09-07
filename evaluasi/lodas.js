import React from "react"
import { View, Text, TextInput, FlatList } from 'react-native'
import _ from 'lodash'

class Lodas extends React.Component {
   state = {
       text: [],
       data: [
        {   
            username:"pondok programmer",
            image:"https://awsimages.detik.net.id/visual/2015/04/20/f9428bfb-c284-4859-9d89-a1a29a6d0bc7_169.jpg?w=650",
            location:"jogja ,kretek ,bantul, Indonesia ",
            diskripsi:"pondok ini memiliki devisi "
        },
        {
            username:"pondok multimedia ",
            image:"https://www.imaginewebsolution.com/uploads/articles/multimedia-presentation.png",
            location:"jogja , glagah, bantul ,Indonesia",
            diskripsi:"devinisi : video maker , content creator , editor grafis , dll"
        },
        {
            username:"pondok imers ",
            image:"https://isngs.com/wp-content/uploads/2017/06/82257074-cacaroot-marketing-boards-1024x575@2x.jpg",
            location:"jogja , glagah , Indonesia",
            diskripsi:"marketing online : flash sale , emplementasi grafik , dll"
        },
        {
            username:"pondok muslimah",
            image:"https://akhbarislam.com/berkas/2017/11/Istilah2BDasar2BAkhwat2BBaper.jpg",
            location:"jogja, Indonesia",
            diskripsi:"devinisi : chef , menjahit , dll"
        },
        {
            username:"pondok interprainer",
            image:"https://www.akuntansilengkap.com/wp-content/uploads/2017/01/Info-Lengkap-Tugas-dan-Wewenang-Manajer-Keuangan.jpg",
            location:"jogja , glagah , Indonesia",
            diskripsi:"manajer"
        }]
   }
   test = () => {
       if (_.isEmpty(this.state.data)) {
           alert('data ini kosong')
       }
       else {
           alert('data ini ada')
       }
   }
   renderItems = ({ item, index }) => {
       const {username}=item
       
       return(
           <Text>{username}</Text>
         
       )
   }
   render() {
       return (
           <View style={{flex:1}}>
           <View style={{alignItems:'center'}}>
               <Text>
                   DAFTAR PONDOK IT
               </Text>
           </View>
           <View style={{alignItems:'center',paddingTop:50}}>
               <FlatList
                   data={_.take(this.state.data,5)}
                   keyExtractor={item => item.toString()}
                   renderItem={this.renderItems} style={{paddingTop:20}}/>
            </View>       
                <View style={{alignItems:'center',paddingTop:30}} >
                <TextInput placeholder='tulis nama disini' underlineColorAndroid='red'/>
               <Text onPress={() => this.test()}>TEST</Text>
                </View>
           
       </View>
       )
   }
}
export default Lodas