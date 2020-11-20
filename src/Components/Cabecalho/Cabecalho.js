import React from 'react';
import { Text, Image, View } from 'react-native';

import estilo from './estilo'

const Cabecalho = ({nomeUsuario}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image
                source={require("../../../assets/images/ma.jpg")}
                style={estilo.imagem}
            />
            <Text style={estilo.user}>{nomeUsuario}</Text>
        </View>
    )
}

export default Cabecalho;