import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskInList = ({taskName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkBoxPlaceholder}>1</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}> {taskName} </Text>
        <Icon name="delete" size={22} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 22,
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
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
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
