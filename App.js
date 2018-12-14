import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SampleA = ({ navigation }) => (
  <ScrollView accessibilityLabel="SampleA">
    <Text style={{ height: 1000 }}>↓スクロールしてください↓</Text>
    <Button
      accessibilityLabel="NextButton"
      title="次のページへ"
      onPress={() => navigation.navigate('SampleB')}
    />
  </ScrollView>
);

SampleA.navigationOptions = { title: 'SampleA' };

class SampleB extends React.Component {
  state = { text: '' };
  render() {
    return (
      <View accessibilityLabel="SampleB" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>名前</Text>
        <TextInput
          accessibilityLabel="TextInput"
          onChangeText={text => this.setState({ text })}
          style={{ backgroundColor: 'white', width: 300 }}
        />
        <Button
          accessibilityLabel="NextButton"
          title="次のページへ"
          onPress={() => this.props.navigation.navigate('SampleC', { text: this.state.text })}
        />
      </View>
    );
  }
}

SampleB.navigationOptions = { title: 'SampleB' };

const SampleC = ({ navigation }) => (
  <View accessibilityLabel="SampleC">
    <Text accessibilityLabel="text">{navigation.state.params.text}</Text>
  </View>
);

SampleC.navigationOptions = { title: 'SampleC' };

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleA },
  SampleB: { screen: SampleB },
  SampleC: { screen: SampleC },
});

const App = () => <AppNavigator />;

export default App;
