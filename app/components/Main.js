import React, {Component} from 'react';
import {View} from 'react-native';
import ListTodos from './ListTodos';
import TodoForm from './TodoForm';

export default class Main extends Component {
    render() {
        return(
            <View>
                <TodoForm/>
                <ListTodos/>
            </View>
        );
    }
}
