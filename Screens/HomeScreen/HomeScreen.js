import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import DefaultView from './DefaultView';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppHeader from '../../Components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import getStandingSkillData from './StandingSkillsList';
import getRunningSkillData from './RunningSkillsList';
import getStuntingSkillData from './StuntingSkillsList';

const Stack = createNativeStackNavigator();


/**
 * Home Screen
 * @returns Stack navigation between screens featured on the home view of the app
 */
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Default' component={DefaultView} options={{ headerBackTitleVisible: false , headerBackVisible: false, headerShown: false, presentation: 'containedModal', animation:'none' }}/>
      <Stack.Screen name='Standing' component={Standing} options={{ header:AppHeader, presentation: 'containedModal', animation:'none' }}/>
      <Stack.Screen name='Running' component={Running} options={{ header:AppHeader, presentation: 'containedModal', animation:'none' }}/>
      <Stack.Screen name='Stunting' component={Stunting} options={{ header:AppHeader, presentation: 'containedModal', animation:'none' }}/>
    </Stack.Navigator>
  );
};


/**
 * Generates list of standing tumble skills for the selected level
 * @param {navigation, route} - navigate from default view, with parameters passed (level selected in dropdown picker)
 * @returns Flatlist of skills from the data list, filtered by level
 */
function Standing ({ navigation, route }) {
  let items = getStandingSkillData();
  const [standingSkillData, setStandingSkillData] = useState(items);
  var skillLevel = route.params.athleteLevel

  return(
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#5d90ba', borderRadius:30,shadowRadius:10,shadowColor:'#000', shadowOffset:{width:2, height:5}, shadowOpacity:0.5}}>
        <Text style={{fontSize:20, marginTop:125, marginBottom:15,color:'white',textAlign:'center', fontWeight:'bold', letterSpacing:0.6}}> {route.params.header}</Text>
      </View>
        <FlatList
          style={styles.container}
          data={standingSkillData.filter((item) => item.level == skillLevel)}
          renderItem={({item}) => (
            <ListItem skillName={item.name}/>
          )}
        />
        <Button onPress={navigation.goBack} title='back'/>
    </View>
  );
};


/**
 * Generates list of running tumble skills for the selected level
 * @param {navigation, route} - navigate from default view, with parameters passed (level selected from dropdown picker)
 * @returns Flatlist of skills from the data list, filtered by level
 */
function Running ({ navigation, route }) {
  let items = getRunningSkillData();
  const [runningSkillData, setRunningSkillData] = useState(items);
  var skillLevel = route.params.athleteLevel

  return(
    <View style={{flex:1}}>
        <View style={{backgroundColor:'#5d90ba', borderRadius:30,shadowRadius:10,shadowColor:'#000', shadowOffset:{width:2, height:5}, shadowOpacity:0.5}}>
          <Text style={{fontSize:20, marginTop:125, marginBottom:15,color:'white',textAlign:'center', fontWeight:'bold', letterSpacing:0.6}}> {route.params.header}</Text>
        </View>
        <FlatList
          style={styles.container}
          data={runningSkillData.filter((item) => item.level == skillLevel)}
          renderItem={({item}) => (
            <ListItem skillName={item.name}/>
          )}
        />
        <Button onPress={navigation.goBack} title='back'/>
    </View>
  );
};

/**
 * Generates list of stunting skills for the selected level
 * @param {navigation, route} - navigate from default view, with parameters passed (level selected from dropdown picker)
 * @returns Flatlist of skills from the data list, filtered by level
 */
function Stunting({ navigation, route }) {
  let items = getStuntingSkillData();
  const [stuntingSkillData, setStuntingSkillData] = useState(items);
  var skillLevel = route.params.athleteLevel

  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:'#5d90ba', borderRadius:30,shadowRadius:10,shadowColor:'#000', shadowOffset:{width:2, height:5}, shadowOpacity:0.5}}>
          <Text style={{fontSize:20, marginTop:125, marginBottom:15,color:'white',textAlign:'center', fontWeight:'bold', letterSpacing:0.6}}> {route.params.header}</Text>
        </View>
        <FlatList
          style={styles.container}
          data={stuntingSkillData.filter((item) => item.level == skillLevel)}
          renderItem={({item}) => (
            <ListItem skillName={item.name}/>
          )}
        />
        <Button onPress={navigation.goBack} title='back'/>
    </View>
  );
  };



/**
 * List Item
 * @param {*} props 
 * @returns Skills from the level and skill type passed in props
 */
const ListItem = (props) => {
  return (
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:20, marginTop:15}}>
      <SkillCheckBox/>
      <Text style={{marginLeft:20, fontSize:18}}>{props.skillName}</Text>
    </View>
  )
}


/**
 * Generates a clickable checkbox
 * @param {*} item 
 * @returns Circular checkbox which changes appearance and colour on press
 */
function SkillCheckBox(item) {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity style={{right:10,left:10}} onPress={() => setChecked((isChecked) => !isChecked)}>
      <Ionicons name={checked ? 'checkmark-circle' : 'ellipse-outline'} size={30} color={'#5d90ba'}/>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default HomeScreen;
