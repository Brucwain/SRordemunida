import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import SubtractionScreen from '../screens/HomeScreen';

interface Pontuacao {
  clubeNome: string;
  pontuacao: number;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Subtraction'>('Home');
  const [clubeNome, setClubeNome] = useState('');
  const [pontuacoes, setPontuacoes] = useState<Pontuacao[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');

  const handleConfirm = () => {
    setClubeNome(nome);
    setCurrentScreen('Subtraction');
    setModalVisible(false);
  };

  const handleFinalizar = (pontuacao: number) => {
    setPontuacoes([...pontuacoes, { clubeNome, pontuacao }]);
    setCurrentScreen('Home');
  };

  return (
    <ImageBackground source={require('../assets/backgroundapp.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {currentScreen === 'Home' ? (
            <>
              <Text style={styles.title}>Pontuações Salvas</Text>
              <FlatList
                data={pontuacoes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.pontuacaoContainer}>
                    <Text style={styles.text}>{item.clubeNome}: {item.pontuacao}</Text>
                  </View>
                )}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
              <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Digite o nome do clube</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome do clube"
                    value={nome}
                    onChangeText={setNome}
                  />
                  <View style={styles.modalButtonContainer}>
                    <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
                      <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                      <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </>
          ) : (
            <SubtractionScreen clubeNome={clubeNome} onFinalizar={handleFinalizar} />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // White text color
    textTransform: 'uppercase',
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2,},
    textShadowRadius: 2,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  pontuacaoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 36,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
