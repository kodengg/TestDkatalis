import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('My name is Kholqi');
  return (
    <View style={styles.container}>
    <View style={styles.container, {marginBottom:20}}>
      <Text style={{paddingLeft: 10, marginBottom: 5}}>{outputText}</Text>
      <Button title='Translate!' onPress={() => setOutputText('Nama saya Kholqi')} />
    </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
