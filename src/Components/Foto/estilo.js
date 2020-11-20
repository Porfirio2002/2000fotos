import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura
    },
    like: {
        width: 40,
        height: 40
    }
})

export default estilo;