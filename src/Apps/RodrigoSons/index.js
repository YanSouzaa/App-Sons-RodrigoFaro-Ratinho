import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import ButtonImage from './Botao.png'

const soundList = [
  { sound: 'tomi', title: 'Tomi' },
  { sound: 'demais', title: 'Demais' },
  { sound: 'pare', title: 'Pare' },
  { sound: 'elegosta', title: 'Ele Gosta' },
  { sound: 'cavalo', title:'Cavalo'},
  { sound: 'aimamae', title: 'Ai mamae' },
  { sound: 'dancagatinho', title: 'Dança Gatinho' },
  { sound: 'okayokay', title: 'Okay Okay' },
  { sound: 'opotencia', title: 'Oh Potencia' },
  { sound: 'xii', title: 'Xii' },
  { sound: 'galinha', title: 'Galinha' },
  { sound: 'chega', title: 'Chega' },
  { sound: 'aimeudeus', title: 'Ai meu Deus' },
  { sound: 'ihhraa', title: 'Ihh Raa' },
  { sound: 'aaaaaai', title: 'Aiii' },
  { sound: 'nao', title: 'Nao' },
  { sound: 'ui', title: 'UUUi' },
  { sound: 'entaotabom', title: 'Entao ta bom' },
]

Sound.setCategory('Playback', false)

const WIDTH = Dimensions.get('screen').width

export default function RodrigoSons() {
  let sound = null

  function playSound(audioName) {
    if (sound) {
      sound.stop()
      sound = null
    }

    sound = new Sound(`${audioName}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          setPlaying(null)
          console.log('playback failed due to audio decoding errors');
        }
      });
    })
  }

  const _renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.viewBotoes} onPress={() => playSound(item.sound)}>
      <Image source={ButtonImage} style={{ width: 110, height: 110 }} />
      <Text style={styles.txtBotao1}>{item.title}</Text>
    </TouchableOpacity>

  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={soundList}
        renderItem={_renderItem}
        numColumns={3}
        style={{ flex: 1 }}
        initialNumToRender={1}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3'
  },
  areapessoa: {
    backgroundColor: 'grey',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center',
  },
  textopessoa: {
    color: 'white',
    fontSize: 20,
  },
  txtBotao1: {
    fontSize: 15,
    color: 'blue',
  },
  viewBotoes: {
    width: WIDTH / 3,
    alignItems: 'center'
  },
})

