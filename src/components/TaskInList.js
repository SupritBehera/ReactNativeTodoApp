import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {database} from '../..';

const TaskInList = ({task}) => {
  const updateCheckedStatus = changeId => {
    await database.write(async () => {
      const task = await database.get('tasks').find(changeId);
      await task.update(() => {
        task.isComplete = !task.isComplete;
      });
    });
  };
  const deleteTask = deleteId => {
    const taskToDelete = await database.get('tasks').find(deleteId);
    await taskToDelete.destroyPermanently();
  };
  return (
    <View style={styles.container}>
      <View>
        <BouncyCheckbox
          text={task.taskName}
          fillColor="violet"
          onPress={() => updateCheckedStatus(task)}
          textStyle={{color: 'white'}}
        />
      </View>
      <View style={styles.taskContainer}>
        {/* <TouchableOpacity onPress={() => onDeletingTask()}> */}
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Icon name="delete" size={21} color="whitesmoke" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 22,
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  checkBoxPlaceholder: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    position: 'absolute',
    right: 15,
  },
  task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
});

export default TaskInList;
