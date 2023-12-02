import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i =0; i< data.length; i++){
    if (temp[data[i].name] == undefined)  {
      temp[data[i].name] = 1;
    }else{
      temp[data[i].name]++;
    }
}
let categories = Object.keys(temp);
categories.unshift('All');
return categories;
};

const HomeScreen = () => {
  const CoffeeList = useStore((state:any) => state.CoffeeList);
  const BeanList = useStore((state:any) => state.BeanList);
  const [categories, setCategories] = useState([undefined]);
  const [searchText, setSearchText] = useState(undefined);
  const [category, setCategory] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(undefined);
  
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}



const styles = StyleSheet.create({});

export default HomeScreen;