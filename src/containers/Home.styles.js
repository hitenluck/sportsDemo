import { StyleSheet} from 'react-native';
import {appFonts,colors} from '../theme'
export default StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
  },
  containerPlatform:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  platformText:{
    fontFamily: appFonts.robotoRegular,
    fontSize: 28
  },
  teamContainer:{
    flex:1,
  },
  linkContainer:{
    borderWidth: 1,
    borderRadius: 4,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:colors.appColor,
    margin: 8,
    padding: 10,
  },
  linkText:{
    fontFamily: appFonts.robotoRegular,
    margin: 16,
  },

})
