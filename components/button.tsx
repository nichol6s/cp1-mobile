import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


function Button(){
  return (
    <TouchableOpacity style={styles.containerButton}>
      <Text style={styles.text}>Pressione aqui</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    height: 48, // Equivalente a h-12 em Tailwind
    backgroundColor: '#84CC16', // Equivalente a bg-lime-400 em Tailwind
    borderRadius: 8, // Equivalente a rounded-md em Tailwind
    alignItems: 'center', // Equivalente a items-center em Tailwind
    justifyContent: 'center', // Equivalente a justify-center em Tailwind
    flexDirection: 'row', // Equivalente a flex-row em Tailwind
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export {Button} ;