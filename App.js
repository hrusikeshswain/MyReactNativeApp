import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity } from 'react-native';
import { colours,fontFamilies,fontSizes,borderRadius } from './configuration';
// Packages
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CodePush from 'react-native-code-push';


let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: "a new update is available!"
  }
};



class About extends React.Component {

  _is_Mounted = false;
  

  state = {
   isClicked: false,
  };

  async componentDidMount() {
    this._is_Mounted = true;
  }

  componentWillUnmount(){
    this._is_Mounted = false;
  }

  componentDidCatch(errors,theInfo){
    // const errorMessage = error.message ? error.message : error;
    // const filepathWithoutExtension = filePath.replace(/.js/g, ''); // gomeza 020921: ".js" extension is hidden
    // Alert.alert('Safeguard Global: an error ocurred', filepathWithoutExtension.toLowerCase() + ':\n\n' + JSON.stringify(errorMessage) + '\n\n' + JSON.stringify(info));
    
  }




  buttonClickHandler(){
    console.log('buttonClickHandler');
    alert('Click me')
  }


  render(){
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={colours.plum}/>
        <View style={styles.screen}>
           <View style={[styles.body, {paddingTop: hp('4%')}]}>
           <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <View> 
                <Text style={[styles.lightSmallText, {color:colours.grey}]}>{'Version'}</Text>
             </View>
              <View styles={{flexDirection:'row', marginLeft: 'auto'}}> 
                  <Text style={[styles.lightSmallText, {color:colours.black}]}>{'2.0.0'}</Text>
              </View>  
           </View>

{/* Env */}

          <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <View> 
                <Text style={[styles.lightSmallText, {color:colours.grey}]}>{'Environment'}</Text>
             </View>
              <View styles={{flexDirection:'row', marginLeft: 'auto'}}> 
                  <Text style={[styles.lightSmallText, {color:colours.black}]}>{'Production'}</Text>
              </View>  
           </View>

  {/* Os */}

           <View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <View> 
                <Text style={[styles.lightSmallText, {color:colours.grey}]}>{'Os'}</Text>
             </View>
              <View styles={{flexDirection:'row', marginLeft: 'auto'}}> 
                  <Text style={[styles.lightSmallText, {color:colours.black}]}>{'Android'}</Text>
              </View>  
           </View>

           {/* Device Id */}

<View style={{flexDirection: 'row' , justifyContent: 'space-between'}}>
              <View> 
                <Text style={[styles.lightSmallText, {color:colours.grey}]}>{'DeviceId'}</Text>
             </View>
              <View styles={{flexDirection:'row', marginLeft: 'auto'}}> 
                  <Text style={[styles.lightSmallText, {color:colours.black}]}>{'djgjdgfjdg365723vdgfuydst'}</Text>
              </View>  
           </View>
  {/* Location */}

  <View style={{flexDirection: 'row' ,justifyContent: 'space-between'}}>
              <View> 
                <Text style={[styles.lightSmallText, {color:colours.grey}]}>{'Location'}</Text>
             </View>
              <View styles={{flexDirection:'row', marginLeft: 'auto'}}> 
                  <Text style={[styles.lightSmallText, {color:colours.black}]}>{'Not available'}</Text>
              </View>  
           </View>

           <View style={styles.spacer}/>

<View>
  <Text style={[styles.lightSmallText, { color: colours.grey }]}>{'If you agree to send your GPS position when you do a clocking, Safeguard Global will only store this location as clocking data.\n\nIt would not be used for any other purposes and it would not be shared with any third parties.\n\nGPS position is only got and sent when you do a clocking, and only if you gave your agreement when your mobile device operating system asked about it and if you enable it at Safeguard Global settings.'}</Text>
</View>
<View style={styles.spacer}/>
           </View>

           <View style={styles.footer}>
            {/* Email us button */}
            
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'center'}}>
               
               <TouchableOpacity style={[styles.button,styles.dropsShadow,{ backgroundColor: colours.plum }]}>
                     <Text style={[styles.lightSmallText, { color: colours.white }]}>
                      {'Email Me'}
                     </Text>
               </TouchableOpacity>

            </View>

           </View>
           
        </View>
      </>
    );
  }

  
}

const styles = StyleSheet.create({
   screen: {
    flex: 1,
    flexDirection: 'column',
   },
   body: {
    flex: 1,
    width: wp('100%'),
    paddingRight: wp('7%'),
    paddingLeft: wp('7%'),
    backgroundColor: colours.lightgrey
  },
  footer: {
    flex: 1,
  },
  lightSmallText: { fontFamily: fontFamilies.light, fontSize: fontSizes.small, lineHeight: hp('2.6%') },
  spacer: {
    flexDirection: 'row',
    height: hp('1%')
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('4.6%'),
    paddingRight: wp('2.3%'),
    paddingLeft: wp('2.3%'),
    borderRadius: borderRadius.medium
  },
  dropsShadow:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.30,
    shadowRadius: 4
    // elevation: (Platform.OS === 'android') ? 2 : null // Beware, this puts the styled "View" over all other at Android (even a "Select" if it has no "elevation")
  }
});

// const About = CodePush(About);

export default CodePush(CodePushOptions)(About); 