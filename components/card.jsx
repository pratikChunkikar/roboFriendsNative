
import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import colors from './colors'

export const Card = ({name ,email, id}) => {
  return (
    <View style={styles.container}>
         <Image source={{ uri: `https://robohash.org/${id}?130x130` }} style={styles.cardImage} />
       <Text style={styles.cardContent}>{name}</Text>
      <Text style={styles.cardContent}>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: colors.skyBlue,
    borderRadius: 15,
    padding: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 9, 
    alignItems:'center',
},
cardContent: {
    fontSize: 16,
  
  },
  cardImage: {
    width: '90%',
    height: 200,  
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 8,
  },
})

