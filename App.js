
import { StyleSheet, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import CardList from './components/cardList';
import { robots } from './components/robots';
import { useState } from 'react';


export default function App() {
  const [bots, setBots] = useState(robots)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>ROBO FRIENDS</Text>
     <ScrollView>
     <CardList
        r2d2={bots}
      />
     </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text:{
    fontSize: 24,
    fontWeight:'100',
   padding:10,
   paddingLeft:120,
  },
});
