import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeadersButtons, Item } from 'react-navigation-header-buttons'
import Cores from '../Constantes/Cores'

import BotaoCabecalho from '../Componentes/BotaoCabecalho'

const ListaDeLugaresTela = () => {
    return (
        <View>
            <Text>ListaDeLugaresTela</Text>
        </View>
    )
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de lugares",
        headerRight: () => {
            <HeaderButtons HeaderButtonsComponent = {BotaoCabecalho}>
              <Item
                 title = "Adicionar"
                 iconName={Platform.os === 'android' ? 'md-add' : 'ios-add'}
                 onPres={() => dadosNav.navigation.navigate ("NovoLugar")}
              />
            </HeaderButtons>
        }
    }
}

export default ListaDeLugaresTela

const styles = StyleSheet.create({})
