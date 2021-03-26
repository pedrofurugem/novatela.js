import React, { useState } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

export default function App() {

  const addContact = () => {
    console.log.toString(nome);
  }

  return (
    <View style={styles.container}>
      <View style={styles.contatosInputView}>
        {/*User vai inserir nome e telefone aqui */}
        <TextInput
          placeholder="Digite nome"
          style={styles.estiloTextInput}
          onChangeText={getNome}
        />
        <View style={styles.contatosInputButton}>
          <Button
            title="Add Contato"
            onPress={addContact}
          />
        </View>

      </View>
      <View >
        {/* Aqui será exibida lista de contatos */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  contatosInputView: {
    alignItems: 'center'
  },
  estiloTextInput: {
    width: '80%',
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'

  },
  contatosInputButton: {
    width: '80%'
  }
});