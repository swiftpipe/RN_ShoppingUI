import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/Home/SearchBar';
import Card from '../components/Home/Card';
import Icon from 'react-native-vector-icons/Entypo';
import CardDeal from '../components/Home/CardDeal';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const data = [
  'Clothing',
  'Toys',
  'Diapers',
  'Feeding',
  'Stroller',
  'Shoes',
  'Accessories',
];
const listdeal = [
  {
    type: 'Navi coat',
    price: '$9',
  },
  {
    type: 'Whale toy',
    price: '$9',
  },
  {
    type: 'Bear toy',
    price: '$9',
  },
];
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View style={styles.listcardTop}>
        <Text style={styles.titleCatalogue}>Catalogue</Text>
        <View style={styles.listcard}>
          {data.map(e => {
            return (
              <Card onPress={() => navigation.navigate('History')} title={e} />
            );
          })}
        </View>
      </View>
      <View style={styles.listdeal}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Deal of the Day</Text>
          <View style={styles.chevron}>
            <Text style={styles.seemore}>See more</Text>
            <Icon name="chevron-thin-right" size={18} />
          </View>
        </View>
        <View>
          {listdeal.map(e => {
            return <CardDeal {...e} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  listcardTop: {
    backgroundColor: '#fff',
  },
  listcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  titleCatalogue: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 16,
  },

  seemore: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray',
  },
  chevron: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
