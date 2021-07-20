import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Poppin from './Poppin';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

export function PopUp({visible, onRequestClose, data}) {
  console.log(data.id);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalBackground}>
        <View
          style={{
            alignSelf: 'center',
            width: widthPercentageToDP(95),
            height: heightPercentageToDP(80),
            backgroundColor:
              data.id % 3 == 0
                ? '#ff8a65'
                : data.id % 2 == 0
                ? '#ba68c8'
                : '#37d67a',
            borderRadius: 20,
            padding: moderateScale(10),
          }}>
          <View style={styles.titleContainer}>
            <Poppin style={styles.title} type="Medium" size={16}>
              {data.title}
            </Poppin>
            <TouchableOpacity style={styles.trash}>
              <FontAwesome5 name="trash" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.underline} />
          <Poppin style={styles.body} size={14}>
            {data.body}
          </Poppin>
        </View>
      </View>
    </Modal>
  );
}

export function ModalInput({
  visibleInput,
  onRequestCloseInput,
  onChangeTextTitle,
  onChangeTextBody,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visibleInput}
      onRequestClose={onRequestCloseInput}>
      <View style={styles.modalBackground}>
        <KeyboardAvoidingView behavior="height">
          <View
            style={{
              alignSelf: 'center',
              width: widthPercentageToDP(95),
              height: heightPercentageToDP(80),
              backgroundColor: '#acb8c5',
              borderRadius: 20,
              padding: moderateScale(10),
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInput
                multiline
                style={styles.inputTitle}
                placeholder="Title"
                onChangeText={onChangeTextTitle}
              />
              <View style={styles.underline} />
              <TextInput
                multiline
                style={styles.inputBody}
                placeholder="Body"
                onChangeText={onChangeTextBody}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Feather name="check" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: heightPercentageToDP(3),
  },
  modalBackgroundInput: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(10),
  },
  underline: {
    borderWidth: 1,
  },
  title: {
    textTransform: 'capitalize',
    width: widthPercentageToDP(75),
    alignSelf: 'center',
  },
  body: {
    paddingTop: moderateScale(2),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trash: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP(15),
    height: heightPercentageToDP(10),
  },
  inputTitle: {
    fontSize: 18,
  },
  inputBody: {
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  button: {
    width: widthPercentageToDP(25),
    height: heightPercentageToDP(5),
    borderRadius: moderateScale(10),
    backgroundColor: '#19222c',
    marginBottom: heightPercentageToDP(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
