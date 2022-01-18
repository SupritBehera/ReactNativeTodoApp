import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {TaskInList} from './src/components/TaskInList';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      <ScrollView>
        <TaskInList taskName="Task 1" />
      </ScrollView>
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
});
