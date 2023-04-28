import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import { AtButton } from 'taro-ui'
import "./index.scss";

export default class Index extends Component<IProps, PageState> {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      click: false
    }
  }

  handleChange = (e) => {
    this.setState({
      theme: e.detail.value
    })
  }

  handleClick = () => {
    this.setState({
      click: true
    });
  }

  render() {
    const { theme, click } = this.state;
    return (
      <View className='index' style={{ padding: 16 }}>
        <Text>Hello! Input ↓</Text>
        <Input
          type='text'
          placeholder='我是一个输入框'
          onInput={this.handleChange}
        />
        <AtButton type='primary' onClick={this.handleClick}>提交</AtButton>
        {
          click && <Text>{theme}</Text>
        }
      </View>
    );
  }
}
