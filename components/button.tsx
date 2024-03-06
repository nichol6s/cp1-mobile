import { View, TouchableOpacity, StyleSheet } from "react-native"

function Button(){

    return(
        <button style={styles.containerButton} >Volte ao início</button>
    )
}

const styles = StyleSheet.create({
    containerButton:{
    height: 48, // Equivalente a h-12 em Tailwind
    backgroundColor: '#84CC16', // Equivalente a bg-lime-400 em Tailwind
    borderRadius: 8, // Equivalente a rounded-md em Tailwind
    alignItems: 'center', // Equivalente a items-center em Tailwind
    justifyContent: 'center', // Equivalente a justify-center em Tailwind
    flexDirection: 'row', // Equivalente a flex-row em Tailwind
    }
});

export { Button }