import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchTodos} from "../actions/FetchTodos";
import {changeTodo} from "../actions/ChangeTodo";

class ListTodos extends Component {

    componentWillMount() {
        this.props.dispatch(fetchTodos());
    }

    _keyExtractor = (item, index) => index;

    onItemClick(id) {
      this.props.dispatch(changeTodo(id));
    };

    renderItem = ({item}) => (
        <TouchableOpacity onPress={()=> this.onItemClick(item.id) }>
            <Text style={[styles.text, item.completed ? styles.completed : {} ]}>{item.text}</Text>
        </TouchableOpacity>
    );


    render() {
        const { todos } = this.props;

        if(Array.isArray(todos)){
            return (
                <View>
                    <FlatList data={todos}
                              keyExtractor={this._keyExtractor}
                              renderItem={this.renderItem}/>
                </View>
            );
        }
        else{
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }


    }
}

const styles = StyleSheet.create({
    text: {
        padding: 10
    },

    completed: {
        color: 'red'
    }
});

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(ListTodos);
