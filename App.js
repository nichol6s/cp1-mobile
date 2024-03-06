import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, ScrollView } from 'react-native';
import { Button } from './components/button';

export default function App() {
  return (
    <ScrollView style={styles.viewScroll}>
      <SafeAreaView style={styles.viewSafeAndroid}>
        <StatusBar style="dark" />

        <View style={styles.container1}>
          <Text style={styles.txtTitle}>Checkpoint 1</Text>
          <Image source={require('./assets/joia.jpg')} style={styles.img} />
          <Text style={styles.txtSubtitle}>RM551809 - Nicholas Santos</Text>
          <Text style={styles.txtSubtitle}>RM98903 - Vitor Kubica</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.txtTitle}>Filme Kung Fu Panda</Text>
          <Image source={require('./assets/kung-fu-panda.jpg')} style={styles.img} />
          <Text style={styles.txtSubtitle}>"Kung Fu Panda" é uma animação emocionante que conta a história de Po, um panda desajeitado e apaixonado por kung fu, que sonha em se tornar um grande mestre. Sua vida muda drasticamente quando ele é inesperadamente escolhido como o lendário Dragão Guerreiro, destinado a derrotar o vilão Tai Lung. Apesar de suas limitações físicas e falta de treinamento, Po embarca em uma jornada épica para dominar as artes marciais e salvar o Vale da Paz. Com o apoio de seus amigos, os Cinco Furiosos, Po descobre que a verdadeira força vem de dentro e que ele é capaz de superar qualquer desafio com determinação e coragem. Repleto de humor, ação e mensagens inspiradoras sobre autodescoberta e superação, "Kung Fu Panda" é uma aventura animada que cativa o público de todas as idades.</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.txtTitle}>Personagem destaque</Text>
          <Image source={require('./assets/tailung.png')} style={styles.img} />
          <Text style={styles.txtSubtitle}>Tai Lung é o vilão central do filme "Kung Fu Panda", um leopardo da neve poderoso e carismático que representa uma ameaça iminente ao Vale da Paz. Como um antigo pupilo do Mestre Shifu, ele era considerado o candidato perfeito para se tornar o lendário Dragão Guerreiro. No entanto, após anos de treinamento e expectativas, Tai Lung se tornou consumido pela ambição e desejo de poder, o que o levou a ser banido do Vale da Paz após tentar roubar o pergaminho do Dragão Guerreiro.</Text>
          <Text style={styles.txtSubtitle}>Tai Lung é um personagem destacado por sua habilidade incrível em artes marciais, sua força formidável e sua determinação inabalável em conquistar o que deseja. Sua presença imponente e sua personalidade carismática o tornam uma figura memorável no filme. Ele é retratado como um adversário formidável para Po e os Cinco Furiosos, representando não apenas uma ameaça física, mas também um desafio para o próprio conceito de heroísmo e determinação.</Text>
        </View>

        <View style={styles.container3}>
          <Button/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    paddingTop: 20
  },
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 20,
    alignItems: 'center'
  },
  viewScroll: {
    backgroundColor: '#0F172A',
  },
  txtSubtitle: {
    color: '#fff',
    fontSize: 15,
    paddingBottom: 5
  },
  txtTitle: {
    color: '#fff',
    fontSize: 30,
  },
  img: {
    width: 300,
    height: 200,
  },
  btn: {
    width: 300,
    height: 200,
  }
});
