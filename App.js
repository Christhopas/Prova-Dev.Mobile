import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RPG from './src/rpg';

export default function App() {

  const cards = [
    {
      name: "Espada do Trovão",
      url: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13411a5318c77e70/5fa1eff9f9cf41781dad68e2/3153_Fighter_T3_BladeoftheRuinedKing.png",
      desc: "Uma espada lendária com a habilidade de conjurar raios. Tem um poder de ataque alto e pode causar danos adicionais a inimigos com fraqueza ao elemento elétrico.",
    },
    {
      name: "Armadura do Guardião",
      url: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfd0da8599589dcaa/5fa1f005fe49b57a83a17188/3193_Tank_T3_GargoyleStonePlate.png",
      desc: "Uma armadura que oferece grande proteção contra ataques físicos. Possui um atributo de defesa contra inimigos do tipo dragão.",
    },
    {
      name: "Anel da Cura",
      url: "https://senpai.gg/blog/wp-content/uploads/2020/11/1082_Mage_T1_DarkSeal-1-1.webp",
      desc: "Um anel mágico que pode ser usado para curar feridas e doenças. Também pode ser usado em batalha para restaurar pontos de vida do usuário e de seus aliados",
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <RPG key={index} card={card} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#A5A5A5', //'#684A52',
    alignItems: 'center',
    justifyContent: 'center',
  },
});