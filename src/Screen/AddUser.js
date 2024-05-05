import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {adduser, updateuser} from '../Redux/userSlice';

const AddUser = ({navigation ,route}) => {
  const routeedit = route.params
  const [userDetail, setUserDetail] = useState({
    name: routeedit.type == 'edit'? routeedit.data.name: '',
    email: routeedit.type == 'edit'? routeedit.data.email: '',
    phone: routeedit.type == 'edit'? routeedit.data.phone: '',
    address: routeedit.type == 'edit'? routeedit.data.address: '',
  });

  const dispatch = useDispatch();
  const validate = () => {
    let valid = true;
    if (userDetail.name === '') {
      valid = false;
    }

    if (userDetail.email === '') {
      valid = false;
    }

    if (userDetail.phone === '') {
      valid = false;
    }

    if (userDetail.address === '') {
      valid = false;
    }
    return valid;
  };

  const saveUser = () => {
    if (validate()) {
      if(routeedit.type == 'edit') {
        dispatch(updateuser({ ...userDetail, index: routeedit.index }));
      }else {

        dispatch(adduser(userDetail));
  
        Alert.alert('User details saved successfully!');
      }
      navigation.goBack();
    } else {
      Alert.alert('Please fill out all fields correctly');
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
        }}
        placeholder="Enter User Name"
        keyboardType="default"
        value={userDetail.name}
        onChangeText={txt => setUserDetail({...userDetail, name: txt})}
      />
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
        }}
        placeholder="Enter User Email"
        keyboardType="email-address"
        value={userDetail.email}
        onChangeText={txt => setUserDetail({...userDetail, email: txt})}
      />

      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
        }}
        placeholder="Enter User Phone"
        keyboardType="number-pad"
        maxLength={10}
        value={userDetail.phone}
        onChangeText={txt => setUserDetail({...userDetail, phone: txt})}
      />

      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
        }}
        placeholder="Enter User Address"
        value={userDetail.address}
        onChangeText={txt => setUserDetail({...userDetail, address: txt})}
      />

      <TouchableOpacity
        style={{
          borderRadius: 8,
          backgroundColor: 'orange',
          height: 50,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
        onPress={saveUser}>
        <Text style={{fontSize: 18, color: 'white', alignSelf: 'center'}}>
          Save User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
