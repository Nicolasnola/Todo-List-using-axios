import React, {useState, useEffect} from 'react';
import { SafeAreaView,  StyleSheet } from 'react-native';
import api from './services';
import Loading from './src/components/Loading/Loading';
import TitleBar from './src/components/titleBar/TitleBar';
import TodoList from './src/components/TodoList/TodoList';



function App() {

  const [items, setItems] = useState(null);
  
  useEffect(() => {
    api.get("/todos").then((results) => {
       
         setItems(results.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
      <SafeAreaView style={teste.container}>

        <TitleBar/>
        {  items ? <TodoList  items={items}/> : <Loading/> }    
      </SafeAreaView>

  );   
}

const teste = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#AEB6BF',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  }, 
  
});

export default App;

