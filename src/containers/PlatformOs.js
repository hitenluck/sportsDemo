import React, { Component } from 'react';
import {
  Text,
  Platform,
  View,
} from 'react-native';
import styles from './Home.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
class PlatformOs extends Component{
  render(){
    return(
      Platform.OS==='IOS'?
      <View 
        style={[styles.containerPlatform,
        { //is color is undefined then default color is while else other
          backgroundColor:this.props.singleData===undefined?
        'white':this.props.singleData.color}]}>
          <Text style={styles.platformText}>IOS Platform</Text>
          </View>
      :<View 
      style={[styles.containerPlatform,
        {backgroundColor:this.props.singleData===undefined?
        'white':this.props.singleData.color}]}>
        <Text style={styles.platformText}>Android Platform</Text>
        </View>

    )
  }
}
const mapStateToProps=state=>{
  return{
    singleData:state.countryReducer.singleData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PlatformOs);
