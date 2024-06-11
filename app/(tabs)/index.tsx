import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import Modal from 'react-native-modal';
import { blue, green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const App = () => {
  const [valorInicial, setValorInicial] = useState(1000);
  const [isModalVisible, setModalVisible] = useState(false);
  const [valorParaSubtrair, setValorParaSubtrair] = useState(0);

  const abrirModal = (valor) => {
    setValorParaSubtrair(valor);
    setModalVisible(true);
  };

  const confirmarSubtracao = () => {
    setValorInicial(valorInicial - valorParaSubtrair);
    setModalVisible(false);
  };

  const cancelarSubtracao = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logonova.png')} // Caminho para a imagem local
        style={styles.image}
      />
      <Text style={styles.title}>Subtração Contínua</Text>
      <Text style={styles.text}>Valor inicial: 1000</Text>
      <Text style={styles.text}>Valor atual: {valorInicial}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.ButtonSub} onPress={() => abrirModal(10)}>
         <Text>BÁSICO</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.ButtonSub} onPress={() => abrirModal(20)}>
         <Text>INTERMEDIÁRIO</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.ButtonSub} onPress={() => abrirModal(30)}>
         <Text>AVANÇADO</Text>
        </TouchableOpacity> 
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Você tem certeza que deseja confirmar a subtração?</Text>
          <View style={styles.modalButtonContainer}>
            <Button  
            title="Confirmar" onPress={confirmarSubtracao}
            color={"#0069bf"}
            />
            <Button  
            color={"red"}
            
            title="Cancelar" onPress={cancelarSubtracao} />
          </View>
        </View>
      </Modal>
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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: "80%",
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    alignContent: 'center',
    alignItems:'center',

  },
  confirmButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  ButtonSub:{
   backgroundColor: 'lightblue',
   width: "80%",
   borderRadius: 6,
   padding: 10,
   margin: 20,
   elevation: 12,
   justifyContent: 'center',
   alignContent: 'center',
   alignItems: 'center'
  },
  image:{
    height: 300,
    width: 300,
  }
});

export default App;
