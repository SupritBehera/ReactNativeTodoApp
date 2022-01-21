import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import TaskInList from './src/components/TaskInList';
import TaskInputField from './src/components/TaskInputField';
import {createSelector} from '@reduxjs/toolkit';
import {database} from '.';

const App = () => {
  const tasks = await database.get('tasks').query().fetch();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => {
          return (
            <View key={item.id} style={styles.taskContainer}>
              <TaskInList task={item} />
            </View>
          );
        }}
      />
      <TaskInputField />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default App;
