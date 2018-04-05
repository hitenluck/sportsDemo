import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker
} from 'react-native';
import styles from './Home.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../redux/actions';
import {connect} from 'react-redux';
import {images} from '../theme'
import InformationRow from '../components/InformationRow'
class Teams extends Component{
  constructor(props){
    super(props)
    this.state={
    country:this.props.stateName===null?'Select':this.props.stateName,
    dataSource:[]
    }
  }
 componentDidMount(){
   //calling redux method and binding the data source
   this.props.fetchCountries().then(()=>{
     this.setState({
       dataSource:this.props.countries===undefined?[]:this.props.countries
     })
   })
 }
_setProps(itemValue){
  //call redux method and getting data based on selected country
  this.setState({country: itemValue})
  {this.props.getSingleData(itemValue)}
}
  render(){
    return(
      <View style={styles.teamContainer}>
        <Picker
          selectedValue={this.state.country}
          onValueChange={(itemValue, itemIndex) => this._setProps(itemValue)}>
          <Picker.Item label="Select" value="Select" />
          {this.state.dataSource.map((item,key)=>(
              <Picker.Item label={item.name} value={item.name} />
          ))}
        </Picker>
          {this.state.dataSource.map((item,key)=>(
            item.name===this.state.country?
            <InformationRow row={item}/>
            :null
          ))}
      </View>
    )
  }

}
const mapStateToProps=state=>{
return{
countries:state.countryReducer.countrySource,
stateName:state.countryReducer.name
}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Teams);
