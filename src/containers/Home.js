import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './Home.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import InformationRow from '../components/InformationRow'
class Home extends Component{
 constructor(props){
  super(props);
  this.state={
    dataSource:this.props.singleData===undefined || this.props.singleData===null?[]:this.props.singleData
  }
  
 }
  componentDidUpdate(){
    //comparing data to update the data source and re-render the component
  if(this.state.dataSource!=this.props.singleData){
    this.setState({
      dataSource:this.props.singleData
    })
   
  }
  }
  
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.linkContainer} onPress={()=>{navigate('Team')}}>
          <Text style={styles.linkText}>
            Teams
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer} onPress={()=>{navigate('player')}}>
          <Text style={styles.linkText}>
            Players
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer} onPress={()=>{navigate('platform')}}>
          <Text style={styles.linkText}>
            Platform
          </Text>
        </TouchableOpacity>
        {
          //Checking for undefined data so error not be ocured
          this.state.dataSource===undefined?null:
          this.state.dataSource.name===undefined?null:
          <InformationRow row={this.state.dataSource}/>
        }
       
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
export default  connect(mapStateToProps,mapDispatchToProps)(Home)
