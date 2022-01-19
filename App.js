import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import TaskInList from './src/components/TaskInList';
import TaskInputField from './src/components/TaskInputField';

const App = () => {
  const {tasks} = useSelector(state => state.tasks);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      {tasks && (
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
      )}
      {/* <TaskInputField addTask={addTask} /> */}
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
