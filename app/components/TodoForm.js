import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {addTodo} from '../actions/AddTodo';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onPressButton() {
        let text = this.state.text;
        this.setState({text: ''});
        this.props.dispatch(addTodo(this.state.text));
    };

    render() {
        return (
            <View>
                <Text style={styles.header}>Todo</Text>
                <View style={styles.container}>
                    <View style={styles.flex70}>
                        <TextInput style={styles.input}
                                   value={this.state.text}
                                   onChangeText={(text) => this.setState({text})}/>
                    </View>
                    <View style={styles.flex30}>
                        <Button title="Add"
                                onPress={this.onPressButton.bind(this)}
                                style={styles.button}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        borderBottomWidth: 1
    },

    container: {
        marginTop: 50,
        flexDirection: 'row'
    },

    input: {
        fontSize: 25,
        height: 50
    },

    button: {
        fontSize: 25,
        height: 50
    },

    flex70: {
        flex: 70
    },

    flex30: {
        flex: 30
    }
});


export default connect()(TodoForm);
