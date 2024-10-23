import React, {useState} from "react";
import { View, TextInput, Button, Alert } from "react-native";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyD1rbiKJFZsDabWmI85CFYdxhmSoQUocxs",
  authDomain: "meuprimeirofirebase-dc6a4.firebaseapp.com",
  projectId: "meuprimeirofirebase-dc6a4",
  storageBucket: "meuprimeirofirebase-dc6a4.appspot.com",
  messagingSenderId: "987695556093",
  appId: "1:987695556093:web:1e123c53bef1a8ffe56594"
};

//Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
    });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso');
      setNome(''); //Limpando
      setSobrenome(''); //Limpando
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder = "Nome"
        value = {nome}
        onChargeText = {setNome}
      />
      <TextInput
        placeholder = "Sobrenome"
        value = {sobrenome}
        onChargeText = {setSobrenome}
      />
      <Button title = "Cadastrar" onPress = {sendData} />
    </View>
  );
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
