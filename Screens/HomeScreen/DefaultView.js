import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../Components/AppHeader.js';
import DropDownPicker from 'react-native-dropdown-picker';
import ProgressCircle from 'react-native-progress-circle';
import { useNavigation } from '@react-navigation/native';

/**
 * Default View
 * @returns Initial view of the home screen of the app
 */
export default function DefaultView() {

  const navigation = useNavigation()

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '  Level 1', value: '1'},
    {label: '  Level 2', value: '2'},
    {label: '  Level 3', value: '3'},
    {label: '  Level 4', value: '4'},
  ]);

  const L1Run = 100;
  const L1Stand = 95;
  const L1Stunt = 90;

  const L2Run = 90;
  const L2Stand = 75;
  const L2Stunt = 80;

  const L3Run = 72;
  const L3Stand = 65;
  const L3Stunt = 75;

  const L4Run = 43;
  const L4Stand = 32;
  const L4Stunt = 19;

  var Run = 0;
  var Stand = 0;
  var Stunt = 0;
  var levelValue = 0;

  var runningTumbleHeader = 'Select level to view skills';
  var standingTumbleHeader = 'Select level to view skills';
  var stuntingHeader = 'Select level to view skills';

  if (value == '1') {
    levelValue = 1
    Run = L1Run
    Stand = L1Stand
    Stunt = L1Stunt
    runningTumbleHeader = 'Level 1 Running Tumbles'
    standingTumbleHeader = 'Level 1 Standing Tumbles'
    stuntingHeader = 'Level 1 Stunts'
  } else if (value == '2') {
    levelValue = 2
    Run = L2Run
    Stand = L2Stand
    Stunt = L2Stunt
    runningTumbleHeader = 'Level 2 Running Tumbles'
    standingTumbleHeader = 'Level 2 Standing Tumbles'
    stuntingHeader = 'Level 2 Stunts'
  } else if (value == '3') {
    levelValue = 3
    Run = L3Run
    Stand = L3Stand
    Stunt = L3Stunt
    runningTumbleHeader = 'Level 3 Running Tumbles'
    standingTumbleHeader = 'Level 3 Standing Tumbles'
    stuntingHeader = 'Level 3 Stunts'
  } else if (value == '4') {
    levelValue = 4
    Run = L4Run
    Stand = L4Stand
    Stunt = L4Stunt
    runningTumbleHeader = 'Level 4 Running Tumbles'
    standingTumbleHeader = 'Level 4 Standing Tumbles'
    stuntingHeader = 'Level 4 Stunts'
  };



  return (
    <View style={styles.container}>
      
      <AppHeader/>
      
      
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder='Select level'
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={(value) => { console.log(value)}}
      disableBorderRadius={false}
      style={{width:160, marginTop:10, alignSelf:'center', marginBottom:10, borderRadius:25}}
      textStyle={{fontWeight:'bold', fontSize:16, color:'grey'}}
      labelStyle={{fontSize:18, color:'grey'}}
      containerStyle={{width:200, alignSelf:'center', borderRadius:40, color:'grey'}}
      placeholderStyle={{color:'grey', fontWeight:'bold', fontSize:18}}
      />



      <View style={{flex:0.27, flexDirection:'row', justifyContent:'space-evenly'}}>
        
        <View style={{flex:0.45, height:180,  borderRadius:40, alignItems:'center',backgroundColor:'#5d90ba', opacity:1, shadowColor:'#000', shadowOffset: {width:1, height:7}, shadowOpacity:0.4, shadowRadius:9}}>
          <ProgressCircle
            percent={Stand}
            radius={60}
            borderWidth={10}
            color='white'
            bgColor='#5d90ba'
            shadowColor='#4476ab'
            outerCircleStyle={{marginTop:30, justifyContent:'center'}}
          >
            <Text style={{textAlign:'center', color:'white'}} onPress={() => navigation.navigate('Standing', {header: standingTumbleHeader, athleteLevel:levelValue} )}>Standing Tumbles</Text>
          </ProgressCircle>
        </View>


        <View style={{flex:0.45, height:180,  borderRadius:40, alignItems:'center', backgroundColor:'#5d90ba', opacity:1, shadowColor:'#000', shadowOffset: {width:1, height:7}, shadowOpacity:0.4, shadowRadius:9}}>
          <ProgressCircle
            percent={Run}
            radius={60}
            borderWidth={10}
            color='white'
            bgColor='#5d90ba'
            shadowColor='#4476ab'
            outerCircleStyle={{marginTop:30, justifyContent:'center'}}
          >
            <Text style={{textAlign:'center', color:'white'}} onPress={() => navigation.navigate('Running', {header: runningTumbleHeader, athleteLevel:levelValue})}>Running Tumbles</Text>
          </ProgressCircle>
        </View>

      </View>


      <View style={{flex:0.25, flexDirection:'row', justifyContent:'space-evenly'}}>
        
        <View style={{flex:0.45, height:180,  borderRadius:40, alignItems:'center', backgroundColor:'#5d90ba', opacity:1, shadowColor:'#000', shadowOffset: {width:1, height:7}, shadowOpacity:0.4, shadowRadius:9}}>
          <ProgressCircle
            percent={Stunt}
            radius={60}
            borderWidth={10}
            color='white'
            bgColor='#5d90ba'
            shadowColor='#4476ab'
            outerCircleStyle={{marginTop:30, justifyContent:'center'}}
          >
            <Text style={{textAlign:'center', color:'white'}} onPress={() => navigation.navigate('Stunting', {header: stuntingHeader, athleteLevel:levelValue})}>Stunts</Text>
          </ProgressCircle>
        </View>

        <View style={{flex:0.45, height:180,  borderRadius:40, alignItems:'center',backgroundColor:'#5d90ba', opacity:1, shadowColor:'#000', shadowOffset: {width:1, height:7}, shadowOpacity:0.4, shadowRadius:9}}>
        </View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});