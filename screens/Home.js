import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function  Home() {

    const navigation =useNavigation()
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home Screen</Text>
        <TouchableOpacity style={{marginTop: 10, backgroundColor: 'pink', padding:10}} onPress={()=> navigation.navigate('Edit Profile')}>
          <Text>Go to Edit Profile</Text>
        </TouchableOpacity>

      </View>
    );
  }

const styles = StyleSheet.create({})