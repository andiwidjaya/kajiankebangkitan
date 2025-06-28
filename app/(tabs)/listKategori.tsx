import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const kategori = [
  { id: '1', nama: 'Aqidah', link: '/aqidah' },
  { id: '2', nama: 'Fiqih', link: '/fiqih' },
  { id: '3', nama: 'Sirah', link: '/sirah' },
  { id: '4', nama: 'Akhlak', link: '/akhlak' },
];

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.89;

export default function ListKategori() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/background.jpg')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.heading}>List Kategori Kajian</Text>
        <FlatList
          data={kategori}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.9}
              onPress={() => router.push(item.link)}
            >
              <Text style={styles.cardText}>{item.nama}</Text>
              <View style={styles.cardAccent} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(187, 247, 208, 0.55)', // hijau muda transparan agar teks tetap jelas
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#15803D',
    marginBottom: 32,
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: '#bbf7d0',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 8,
    zIndex: 2,
  },
  list: {
    paddingBottom: 30,
    alignItems: 'center',
    width: '100%',
    zIndex: 2,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 22,
    paddingVertical: 32,
    marginBottom: 20,
    elevation: 8,
    backgroundColor: '#fff',
    shadowColor: '#15803D',
    shadowOpacity: 0.13,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#6ee7b7',
    overflow: 'hidden',
    zIndex: 2,
  },
  cardText: {
    fontSize: 24,
    color: '#15803D',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textShadowColor: '#bbf7d0',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardAccent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 8,
    width: '100%',
    backgroundColor: '#22c55e',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    opacity: 0.18,
  },
});
