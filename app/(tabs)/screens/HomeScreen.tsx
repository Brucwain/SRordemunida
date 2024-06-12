import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [clubeNome, setClubeNome] = useState('');

  const handleStart = () => {
    if (clubeNome.trim().length > 0) {
      navigation.navigate('Subtraction', { clubeNome });
    } else {
      alert('Por favor, insira o nome do clube.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o nome do clube</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do clube"
        value={clubeNome}
        onChangeText={setClubeNome}
      />
      <Button title="Iniciar" onPress={handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default HomeScreen;
