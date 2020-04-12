import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView,Text} from 'react-native';
import headerData from "../json/header.json";

const DetailScreen = ({navigation}) => {
  return(
        
    <View style={{flex:1,backgroundColor:"#fff"}}>
               <View style={styles.headerContentStyle}>
                   <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                       <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}
                               style={styles.headerLeft}/>
                   </TouchableOpacity>
                   <Text style={styles.midtextstyle}>aaaaaaakk_</Text>
                   <Image source={{uri: headerData.MessagePage.HeaderMidUrl}} style={styles.headerMid}/>         
                   <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>      
               </View>
               <ScrollView>
               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends2.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends2.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends2.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends2.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends3.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends3.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends3.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends3.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends4.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends4.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends4.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends4.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends5.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends5.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends5.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends5.camera}} style={styles.camera}/>
               </View>
               </ScrollView>
               
           </View>
           
          
       );
   };
   const styles = StyleSheet.create({
       headerRight:{
           marginTop:10,
           width: 27,
           height: 27,
           marginRight:20,
         },
         headerMid:{
          marginTop:10,
          width: 28,
          height: 28,
          marginLeft:30,
         },
         midtextstyle:{
           marginTop:10,
           marginLeft:60,
           fontSize:21,
           fontWeight:"700"
         },
         headerLeft:{
           marginTop:10,
           marginRight: 0,
           marginLeft:15,
           width: 40,
           height: 40
         },
         headerContentStyle:{
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
           width:null,
           height:70,
           backgroundColor:'#fafafa',
           marginTop:25,
           elevation:4
       },
       headermidStyle:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"flex-start",
        justifyContent:"space-between",
        height:90,
        width:null,
       },
       chatpicture:{
         height:50,
         width:50,
         borderRadius:100,
         marginLeft:13
       },
       midfontstyle:{
        fontSize:18,
        marginLeft:-160
       },
       talkbox:{
        justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-start",
       },
       camera:{
         width:25,
         height:25,
         marginRight:15
       },
       talk:{
        fontSize:17,
        color:"#888888",
        marginLeft:-160
       },
       bottom:{
           width: 360,
           height: 45,
         },
       mesList:{
           marginTop:20,
           width:340,
           height:550,
           marginLeft:10,
           marginRight:10,
           
       },
   });

export default DetailScreen;
