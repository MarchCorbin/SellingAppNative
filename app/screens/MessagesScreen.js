import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Platform, StatusBar } from 'react-native';

import ListItem from '../components/ListItem'
import Screen from  '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id:1,
    title:'This is a long title to see how the display is working with the new functionality',
    description:'I get my brochure but it smells like cat pee.',
    image:require('../assets/grumpcat.jpeg')
  },
  {
    id:2,
    title:'Hey When is my Couch Coming!!?!?!?!?!?!?!',
    description:'It has been 2 weeks and I am still left sitting on the floor!',
    image:require('../assets/grumpdog.jpeg')
  },
]

function MessagesScreen(props) {

const [messages, setMessages] = useState(initialMessages)
const [refreshing, setRefreshing] = useState(false)


  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList 
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => <ListItem title={item.title} subTitle={item.description} image={item.image}
      onPress={() => console.log('message selected', item)}
      renderRightActions={() => 
      <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
      />}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages(messages)
      }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;