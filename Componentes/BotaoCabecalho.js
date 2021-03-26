import React from 'react'
import { Plataform } from 'react-native'
import { HeaderButon } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import cores from '../constantes/Cores'

const BotaoCabecalho = () => {
    return (
        <HeaderButon
        {...props}
        IconComponent={Ionicons}
        IconSize={23}
        color={Plataform.os === 'android' ? 'black' : cores.primary}
        />
    )
}

export default BotaoCabecalho
