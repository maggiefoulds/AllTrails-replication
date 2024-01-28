import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, Image, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import stretches from './stretches';
import getStretchData from './stretches2';
import React, {useState, useRef} from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const Stack = createNativeStackNavigator();

/**
 * Stretching 
 * @returns Stack navigator for the various views of the stretching screen
 */
function Stretching() {

  let items = getStretchData();
  const [stretchData, setStretchData] = useState(items);

  return (
    <Stack.Navigator>
      <Stack.Screen name='Explore' component={Explore} options={{ headerBackTitleVisible: false , headerBackVisible: false, headerShown: false, presentation: 'containedModal', animation:'none' }}/>
      <Stack.Screen name='Flyers' component={Flyers} options={{ headerBackTitleVisible: false , headerBackVisible: false, headerShown: false,  presentation: 'containedModal', animation:'none'  }}/>
      <Stack.Screen name='Details' component={DetailsView} options={{cardOverlayEnabled:true, presentation:'transparentModal', headerShown:false}}/>
    </Stack.Navigator>
  );
};


/**
 * Explore
 * @param {*} param0 
 * @returns Explore stretches view, with a flatlist of pressable stretch images
 */
function Explore ({ navigation, route })  {
  let items = getStretchData();
  const [stretchData, setStretchData] = useState(items);
  return(
    <View style={styles.container} stickyHeaderIndices={[0]}>
      <><View style={{flexDirection:'row', backgroundColor:'#5d90ba', justifyContent:'space-around', marginTop:55}}>
        <TouchableHighlight style={{marginTop:60, marginBottom:10}} onPress={() => {navigation.push('Explore')}}><Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Explore</Text></TouchableHighlight>
        <TouchableHighlight style={{marginTop:60, marginBottom:10}} onPress={() => {navigation.push('Flyers')}}><Text style={{color:'white', fontSize:14}}>Flyers</Text></TouchableHighlight>
      </View></>

      <FlatList
      style={{flex:1, margin:5}}
      data={stretchData}
      numColumns={3}
      renderItem={({item}) => (
        <ListItem image={item.image} name={item.title} onPress={() => {navigation.push('Details', {name: item.title, description: item.description, id: item.id, type: item.type})}}/>
      )}
      keyExtractor={(item) => item.id}
      />

    </View>
  )
};

/**
 * List Item
 * @param {*} props 
 * @returns View of image of stretch and name of stretch from the array
 */
const ListItem = (props) => {
  return (
    <View style={styles.row}>

      <View style={{width:105, height:105, borderRadius:100, backgroundColor:'gray', alignItems:'center', justifyContent:'center'}}>
        <View style={{width:100, height:100, borderRadius:100, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={props.onPress}>
            <Image style={{width:90, height:90, borderRadius:1000}} source={{uri: props.image}}/> 
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{color:'gray', fontWeight:'bold', textAlign:'center', marginTop:5}}>{props.name}</Text>
            
    </View>
  )
};

/**
 * Flyers
 * @param {*} param0 
 * @returns flyers screen view
 */
function Flyers ({ navigation, route }) {

  const [ permission, requestPermission ] = Camera.useCameraPermissions();
  const [ media_permission, requestMediaPermission ] = MediaLibrary.usePermissions();

  const [ previewVisible, setPreviewVisible ] = useState(false);
  const [ capturedImage, setCapturedImage ] = useState(null);

  let camera = useRef(null);

  const [ type, setType ] = useState(Camera.Constants.Type.back);

  const takePicture = async () => {
    if (!permission) return;
    const photo = await camera.takePictureAsync();
    console.log('photo taken', photo);
    setPreviewVisible(true);
    setCapturedImage(photo);

    if (media_permission)
    {
      MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  };

  if (!permission) {
    return <View/>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.camcontainer}>
        <View style={styles.camcontainer}>
          <Text style={{textAlign:'center'}}>We need permission to open the camera!</Text>
        </View>
        <Button onPress={requestPermission} title='grant permission'/>
        <Button onPress={requestMediaPermission} title='grant media permission'/>
      </View>
    );
  }
  if (previewVisible && capturedImage) {
    console.log(capturedImage);
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ImageBackground
          source={{
            uri: capturedImage.uri,
          }}
          style={{
            flex: 1,
          }}
        />
        <Button onPress={() => setPreviewVisible(false)} title="Close" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
       <><View style={{flexDirection:'row', backgroundColor:'#5d90ba', justifyContent:'space-around', marginTop:55}}>
        <TouchableHighlight style={{marginTop:60, marginBottom:10}} onPress={() => {navigation.push('Explore')}}><Text style={{color:'white', fontSize:14}}>Explore</Text></TouchableHighlight>
        <TouchableHighlight style={{marginTop:60, marginBottom:10}} onPress={() => {navigation.push('Flyers')}}><Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Flyers</Text></TouchableHighlight>
      </View></>
      <Camera
        style={{ width: "100%", height: "81%" }}
        type={type}
        ref={(ref) => {
          camera = ref;
        }}
      >
        <View style={styles.cameraView}>
          <View style={styles.menuButtons}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
              style={styles.buttonView}
            >
              <Text style={{ fontSize: 20 }}>
                Flip Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePicture}
              style={styles.buttonView}
            >
              <Text style={{ fontSize: 20 }}>
                Take Photo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}


/**
 * Details View
 * @param {*} param0 
 * @returns pop up view of larger image, and description of stretch
 */
function DetailsView({ navigation, route }) {
  const { title, description, image, id } = route.params;
  return (
    <View style={{flex:1, backgroundColor:'transparent'}}>

        <View style={{width:325, height:325, shadowColor:'black', shadowOpacity:0.5, shadowRadius:40,marginTop:300, alignSelf:'center', borderRadius:200, zIndex:1, backgroundColor:'gray', alignItems:'center', justifyContent:'center'}}>
          <View style={{width:310, height:310, borderRadius:200, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
            <Image style={{width:300, height:300, borderRadius:200, marginTop:0}} source={{uri: stretches[id].image}}/>
          </View>
        </View>

      <View style={{flex:1, alignSelf:'center', shadowColor:'black', shadowOpacity:1,shadowRadius:40, borderTopRightRadius:40, borderTopLeftRadius:40, padding:20, width:370, height:600, marginTop:-200, backgroundColor:'#efeff1'}}>
        <TouchableOpacity style={{alignSelf:'flex-end', marginTop:180}} onPress={navigation.goBack}>
          <Ionicons name='close-circle' size={30} color='gray'/>
        </TouchableOpacity>
        <Text style={{marginTop:0, marginLeft:10, marginRight:10, fontSize:20, fontWeight:'bold', letterSpacing:0.6}}>{route.params.name}</Text>
        <Text style={{marginTop:10, marginLeft:10}}>{route.params.description}</Text>
        <Text style={{backgroundColor:'lightgray', textAlign:'center', marginRight:15, borderCurve:'circular',alignSelf:'flex-end',width:75, height:20}}>{route.params.type}</Text>
      </View>

    </View>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camcontainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row: {
    padding:10,
    width:125,
    alignItems:'center',
    marginBottom:15
  },
  cameraView: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  menuButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonView: {
    flex: 1,
    height: 50,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  }
});


export default Stretching;