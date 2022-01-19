import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {checkOrUncheckTask, deleteTask} from '../redux/tasksSlice';

const TaskInList = ({task}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <BouncyCheckbox
          text={task.taskName}
          fillColor="violet"
          onPress={() => {
            dispatch(
              checkOrUncheckTask({
                id: task.id,
              }),
            );
          }}
          textStyle={{color: 'white'}}
        />
      </View>
      <View style={styles.taskContainer}>
        {/* <TouchableOpacity onPress={() => onDeletingTask()}> */}
        <TouchableOpacity
          onPress={() =>
            dispatch(
              deleteTask({
                id: task.id,
              }),
            )
          }>
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
