import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import TaskInList from './src/components/TaskInList';
import TaskInputField from './src/components/TaskInputField';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task == null) {
      return;
    }
    setTasks([...tasks, task]);
  };
  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };
  const checkOrUncheckTask = checkOrUncheckIndex => {
    const currTasks = [...tasks];
    currTasks[checkOrUncheckIndex].isComplete =
      !currTasks[checkOrUncheckIndex].isComplete;
    setTasks(currTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      {true && (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString() + item.taskName}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskInList
                  index={index}
                  task={item}
                  deleteTask={() => deleteTask(index)}
                  checkOrUncheckTask={() => checkOrUncheckTask(index)}
                />
              </View>
            );
          }}
        />
      )}
      <TaskInputField addTask={addTask} />
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
