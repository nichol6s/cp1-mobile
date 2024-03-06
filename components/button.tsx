import React from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';


function Button({ scrollViewRef }){
    const handlePress = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

  return (
    <TouchableOpacity style={styles.containerButton} activeOpacity={0.7} onPress={handlePress} >
      <Text style={styles.text}>Voltar ao início</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    height: 60, 
    backgroundColor: '#84CC16', 
    borderRadius: 8, 
    alignItems: 'center',  
    justifyContent: 'center', 
    flexDirection: 'row', 
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 250,
  },
});

export {Button} ;
