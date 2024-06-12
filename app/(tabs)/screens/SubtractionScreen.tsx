import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type SubtractionScreenRouteProp = RouteProp<RootStackParamList, 'Subtraction'>;
type SubtractionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Subtraction'>;

interface Props {
  route: SubtractionScreenRouteProp;
  navigation: SubtractionScreenNavigationProp;
}

const SubtractionScreen: React.FC<Props> = ({ route }) => {
  const { clubeNome } = route.params;
  const [valorInicial, setValorInicial] = useState(1000);
  const [isModalVisible, setModalVisible] = useState(false);
  const [valorParaSubtrair, setValorParaSubtrair] = useState(0);

  const abrirModal = (valor: number) => {
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
      <Text style={styles.title}>{clubeNome}</Text>
      <Text style={styles.text}>Valor inicial: 1000</Text>
      <Text style={styles.text}>Valor atual: {valorInicial}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Subtrair 10" onPress={() => abrirModal(10)} />
        <Button title="Subtrair 20" onPress={() => abrirModal(20)} />
        <Button title="Subtrair 30" onPress={() => abrirModal(30)} />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.confirmButtonText}>Confirmar Subtração</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Você tem certeza que deseja confirmar a subtração?</Text>
          <View style={styles.modalButtonContainer}>
            <Button title="Confirmar" onPress={confirmarSubtracao} />
            <Button title="Cancelar" onPress={cancelarSubtracao} />
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
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
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
});

export default SubtractionScreen;
