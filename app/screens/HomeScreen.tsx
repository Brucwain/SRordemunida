import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

interface SubtractionScreenProps {
  clubeNome: string;
  onFinalizar: (pontuacao: number) => void;
}

const SubtractionScreen: React.FC<SubtractionScreenProps> = ({ clubeNome, onFinalizar }) => {
  const [valorInicial, setValorInicial] = useState(1000);
  const [isModalVisible, setModalVisible] = useState(false);
  const [valorParaSubtrair, setValorParaSubtrair] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

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

  const finalizarPontuacao = () => {
    setShowConfirmModal(true);
  };

  const confirmarFinalizacao = () => {
    setShowConfirmModal(false);
    onFinalizar(valorInicial); // Chamada da função passada por props para finalizar pontuação
  };

  const cancelarFinalizacao = () => {
    setShowConfirmModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{clubeNome}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => abrirModal(10)}>
          <Text style={styles.buttonText}>BÁSICO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => abrirModal(20)}>
          <Text style={styles.buttonText}>MÉDIO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => abrirModal(30)}>
          <Text style={styles.buttonText}>AVANÇADO</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Você tem certeza que deseja CONFIRMAR a pontuação?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButtonP} onPress={confirmarSubtracao}>
              <Text style={styles.buttonTextM}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonPC} onPress={cancelarSubtracao}>
              <Text style={styles.buttonTextM}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={showConfirmModal} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Você tem certeza que deseja CONFIRMAR a pontuação?</Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={confirmarFinalizacao}>
              <Text style={styles.MbuttonText}>Finalizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonF} onPress={cancelarFinalizacao}>
              <Text style={styles.MbuttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.buttonfinal} onPress={finalizarPontuacao}>
        <Text style={styles.buttonText}>Finalizar Pontuação</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 3,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 15,
    alignItems: 'center',
    width: 250,
    elevation: 10,
  },
  buttonfinal: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: 250,
    padding: 20,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
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
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    width: '40%',
    margin: 5,
    elevation: 10,
  },
  MbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2,},
    textShadowRadius: 2,
  },
  modalButtonF: {
    flex: 1,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    width: '40%',
    margin: 5,
    elevation: 10,
   },
   modalButtonP: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    width: '40%',
    margin: 5,
    elevation: 10,

   },
   modalButtonPC:{ 
   flex: 1,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    width: '40%',
    margin: 5,
    elevation: 10,
   },
   buttonTextM: {

    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '900',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,


   }
});

export default SubtractionScreen;
