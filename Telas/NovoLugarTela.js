import React, { UseState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import Cores from '../Constantes/Cores'

const NovoLugarTela = (props) => {
    const [NovoLugar, setNovoLugar] = useState('');
    const novoLugarAlterado = (texto) => {
        setNovolugar (texto);
    }
    return (
        <ScrollView>
        <View style={styles.form}>
        <Text style={styles.titulo}>Cadastrar Novo Lugar</Text>
        <TextInput style={styles.textInput}/>
        <Button
          title="salvar lugar"
          color={cores.primary}
          OpenPress={() => Adicionarlugar()}
         />
        </View>
    </ScrollView>
    )
}


export default NovoLugarTela

const styles = StyleSheet.create({
    
    form: {
        marginHorizontal: 40
    },
    titulo: {
      fontSize: 10,
      textAling: 'conter',
      marginBotton: 16
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBotton: 8,
        padding: 12

    }

})
