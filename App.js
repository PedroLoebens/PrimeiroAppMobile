import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { Lista } from './src/component/Lista';
import { Footer } from './src/component/footer';


export default function App() {
  const [texto, setaTexto] = useState("");
  const [ itens, setaItens] = useState([{titulo: "Tarefa falta fazer", estado: false}, {titulo: "Tarefa concluída", estado: false}]);
  const adicionaItem = (e) => {
    (texto != "") &&
      setaItens([
        ...itens, 
        {titulo: texto, estado: false}
      ])
      setaTexto(texto)
    
  }
  return (
    <SafeAreaView style={style.containerRaiz}>
      <StatusBar
        animated={true}
        showHideTransition={true}
        hidden={true} />

      <View> 
        <Text style={style.titulo}>Lista de Tarefas de </Text>
        <Text style={style.nome}>Pedro Loebens </Text>
      </View>
      <View>
        <TextInput style={style.input} value={texto} onChangeText={setaTexto}/>
      </View>
      <View style={style.btnArea}>
        <Button title="Adicionar Tarefa" onPress={() => adicionaItem()}/>
      </View>
        <Lista itens={itens} setaItens={setaItens} />
       
      <Footer style={style.footer}/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  containerRaiz: {
    flex: 1,
    backgroundColor:'#91bfff',
  },

  titulo: {
    fontSize: 30,
    textAlign: "center",
    color: "#555",
  },
  nome: {
    fontSize: 40,
    textAlign: "center",
    color: "#555",
  },

  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    marginBottom: 10,
    padding: 6,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  btnArea: {
   marginBottom: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    
  },
  footer: {

  }

})
