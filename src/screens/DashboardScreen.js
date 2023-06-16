import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const items = [
  {
    id: 1,
    image: require('../assets/images/item1.webp'),
    name: 'Espada Mágica',
    description: 'Aumenta o poder de ataque em 50%',
    attack: '+50',
  },
  {
    id: 2,
    image: require('../assets/images/item2.jpeg'),
    name: 'Escudo de Ferro',
    description: 'Aumenta a defesa em 30%',
    defense: '+30',
  },
  {
    id: 3,
    image: require('../assets/images/item3.webp'),
    name: 'Cajado do Mago',
    description: 'Aumenta o poder mágico em 70%',
    magicPower: '+70',
  },
];

const DashboardScreen = () => {
  const handleTroca = (item) => {
    console.log('Propor troca:', item.name);
  };

  const renderItems = () => {
    return items.map((item) => (
      <View key={item.id} style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.attack && <Text style={styles.attribute}>Ataque: {item.attack}</Text>}
        {item.defense && <Text style={styles.attribute}>Defesa: {item.defense}</Text>}
        {item.magicPower && <Text style={styles.attribute}>Poder Mágico: {item.magicPower}</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTroca(item)}
        >
          <Text style={styles.buttonText}>Propor Troca</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    alignSelf: 'center', // Add this line to center the images
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    marginBottom: 8,
    textAlign: 'center',
  },
  attribute: {
    marginBottom: 4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DashboardScreen;
