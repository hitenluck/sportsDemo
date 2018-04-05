import React,{Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './Header.styles.js'
import {images} from '../theme'
class InformationRow extends Component{
  constructor(props){
    super(props)
    this.state={
      imgpath:null
    }
  }
  render(){
  
    return(
    this.props.row===undefined?null:
    <View style={[styles.infoContainer,{backgroundColor:this.props.row.color}]}>
    <View style={styles.rowViews}>
   
     <Image source={this.props.row.name==='Australia'?
     images.australia:this.props.row.name==='India'?
     images.india:this.props.row.name==='England'?
     images.england:this.props.row.name==='Namibia'?
     images.namibia:this.props.row.name==='Zimbabwe'?
     images.Zimbambey:this.props.row.name==='South Africa'?
     images.southAfrica:
     images.defaultImage
     } style={styles.flag}/>
    </View>
    <View style={styles.rowViews}>
      <Text style={styles.infoText}>{this.props.row.name}</Text>
    </View>
    <View style={styles.rowViews}>
      <Text>{this.props.row.continent}</Text>
    </View>
    <View style={styles.rowViews}>
      <Text>{this.props.row.population}</Text>
    </View>
    </View>
    )
  }
}


export default InformationRow;
