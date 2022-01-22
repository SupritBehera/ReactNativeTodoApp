import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {database} from '../..';

const TaskInputField = () => {
  const [taskName, setTaskName] = useState('');
  const onSubmitPress = name => {
    const newTask = await database.get('tasks').create(task => {
      task.taskName = name;
      task.timeCreated = getCurrentTime();
      task.dateCreated = getCurrentDate();
    });
    setTaskName('');
  };
  const getCurrentDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const getCurrentTime = () => {
    let timeToday = new Date();
    return `${timeToday.getHours()}:${timeToday.getMinutes()}`;
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={taskName}
        onChangeText={text => setTaskName(text)}
        placeholder={'Enter a Task'}
      />
      <TouchableOpacity onPress={() => onSubmitPress(taskName)}>
        <View style={styles.button}>
          <Icon name="keyboard-arrow-up" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'violet',
    backgroundColor: '#3E3364',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputBox: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskInputField;
