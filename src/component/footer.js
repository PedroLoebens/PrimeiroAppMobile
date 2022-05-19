import { View, Text, StyleSheet, Image } from "react-native";
import {IMG} from '../IMG.jpeg'

export function Footer() {
   return (
      <View style={style.footerView}>
         <Text style={style.footerText}>
            Feito por <a href="https://github.com/PedroLoebens">Pedro Loebens</a>
         </Text>
   
      </View>
   )
}

const style = StyleSheet.create({
   footerView: {
      display: 'flex',
      marginTop: '65vh'
   },
   footerText: {
      display: "flex",
   
      alignItems: 'center',
      justifyContent: 'center',
   },
  
   
})
