import {View, Text, Touchable, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { deleteuser } from '../Redux/userSlice';


const Users = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  console.log('in the users', user);

  const dispatch = useDispatch();
  const renderuserData = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 8,
          backgroundColor: 'orange',
          marginVertical: 8,
          justifyContent: 'center',
          padding: 8,
          marginHorizontal: 24,
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
          <View>
          <Text style={{marginVertical: 8, fontSize: 12}}>{item.name}</Text>
        <Text style={{marginVertical: 8, fontSize: 12}}>{item.email}</Text>
        <Text style={{marginVertical: 8, fontSize: 12}}>{item.phone}</Text>
        <Text style={{marginVertical: 8, fontSize: 12}}>{item.address}</Text>
          </View>

          <View style={{marginRight:10}}>
          <Text style={{padding:5, borderWidth:1, borderColor:'blue', color: 'blue'}}
          onPress={() => {
            navigation.navigate('addUser', {type: 'edit', data: item , index: index})
          }}
          
          >Edit</Text>
          <Text style={{padding:5, borderWidth:1, borderColor:'blue', color: 'red', marginTop:10}}
          onPress={() => dispatch(deleteuser(index)) }
          >Delete</Text>
          </View>
       
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList data={user.data} renderItem={renderuserData} />

      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          // marginHorizontal:24
        }}
        onPress={() => navigation.navigate('addUser', {type: 'add'})}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Add User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Users;
