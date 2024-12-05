import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
function goalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD goal" onPress={addGoalHandler} />
    </View>
  );
}

export default goalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
