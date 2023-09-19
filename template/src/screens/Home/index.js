import React ,{useEffect, useState} from 'react';
import { Dimensions, SafeAreaView,TouchableOpacity } from 'react-native';
import {
  Box,
  FlatList,
  Heading,
  Stack,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  AspectRatio,
  Image,
  View,
  Spinner,
} from 'native-base';
import axios from "axios";
import PostComponent from '../../components/Post';
import CategoryComponent from '../../components/Category';

export const API_KEY = `b6caa55056ac4099b420be298a13601b`;
export const endpoint = `https://newsapi.org/v2/top-headlines`;
export const country = 'in'

const HomeScreen = ({ navigation }) => {

  const [categories, setCategories] = useState(['business','entertainment','general','health','science','sports','technology']);
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    //getCategories()
    getArticles('general')
  },[]);

 

  // const getCategories = async () => {
  //   try {
  //     const data = await (await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=b6caa55056ac4099b420be298a13601b')).json()
  //     if(data.status=='ok'){
  //       const cat = data.sources?data.sources.map((c) => {
  //          let catObj = {
  //            id:c.id,
  //            name:c.name
  //          }
  //          return catObj;
  //       }):[];
  //       setCategories(cat);
  //     } 
  //    } catch (error) {
  //     console.log(error)
  //    }
  // }

  const getArticles = async (c) => {
    try {
      // setLoading(true)
       setArticles([]);

      // const data = await (await fetch(`${endpoint}?country=${country}&category=${c}`, {
      //   method: "GET",
      //   cache: "no-cache",
      //   mode: "cors",
      //   headers: {
      //   'X-API-KEY': API_KEY,
      //   'Accept': "application/json",
      //   'Content-Type': "application/json"
      //   }
      // })).json();

      // const response = await axios.get(`${endpoint}?country=${country}&category=${c}`);
     
      // console.log('data',response)
      // setLoading(false)
      // if(data.status=='ok'){
      //   const articlesData = data.articles?data.articles:[];
      //   setArticles(articlesData);
      // } 
     } catch (error) {
      console.log('error',error)
      setLoading(false)
     }
  }


  return (
   <SafeAreaView>
      <CategoryComponent categories={categories} getArticles={getArticles} />
      <PostComponent navigation={navigation} articles={articles} isLoading={isLoading}/>
   </SafeAreaView>  
  );
}

export default HomeScreen;
