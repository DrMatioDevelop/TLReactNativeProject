/**
 * Course
 * 超详细React Native实现微信好友/朋友圈分享功能-Android/iOS双平台通用
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

import Util from '../utils';
import ToastIOS from 'react-native-sk-toast';
import WeChat from 'react-native-wechat';

class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

export default class extends Component{
  constructor(props) {
      super(props);
      //应用注册
      WeChat.registerApp('wx8d560da3ba038e7e');
  }

  render() {
    return (
      <View style={{margin:70}}>
        <Text style={styles.welcome}>
            微信好友/朋友圈分享实例
        </Text>
        <CustomButton text='微信好友分享-文本'
          onPress={() => {
            WeChat.isWXAppInstalled()
              .then((isInstalled) => {
                if (isInstalled) {
                  WeChat.shareToSession({type: 'text', description: '测试微信好友分享文本'})
                  .catch((error) => {
                    ToastIOS.bottom(error.message);
                  });
                } else {
                  ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                }
              });
          }}
        />
        <CustomButton text='微信好友分享-链接'
          onPress={() => {
            WeChat.isWXAppInstalled()
              .then((isInstalled) => {
                if (isInstalled) {
                  WeChat.shareToSession({
                    title:'微信好友测试链接',
                    description: '分享自:江清清的技术专栏(www.lcode.org)',
                    thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                    type: 'news',
                    webpageUrl: 'http://www.lcode.org'
                  })
                  .catch((error) => {
                    ToastIOS.bottom(error.message);
                  });
                } else {
                  ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                }
              });
          }}
        />
        <CustomButton text='微信朋友圈分享-文本'
          onPress={() => {
            WeChat.isWXAppInstalled()
              .then((isInstalled) => {
                if (isInstalled) {
                  WeChat.shareToTimeline({type: 'text', description: '测试微信朋友圈分享文本'})
                  .catch((error) => {
                    ToastIOS.bottom(error.message);
                  });
                } else {
                  ToastShort('没有安装微信软件，请您安装微信之后再试');
                }
              });
          }}
        />
        <CustomButton text='微信朋友圈分享-链接'
          onPress={() => {
              WeChat.isWXAppInstalled()
                .then((isInstalled) => {
                  if (isInstalled) {
                    WeChat.shareToTimeline({
                      title:'微信朋友圈测试链接',
                      description: '分享自:江清清的技术专栏(www.lcode.org)',
                      thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                      type: 'news',
                      webpageUrl: 'http://www.lcode.org'
                    })
                    .catch((error) => {
                      ToastShort(error.message);
                    });
                  } else {
                    ToastIOS.bottom('没有安装微信软件，请您安装微信之后再试');
                  }
                });
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootViewContainer:{
    marginTop: 70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});
