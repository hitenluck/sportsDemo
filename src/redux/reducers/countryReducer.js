import createReducer from '../../lib/createReducer'
import * as constants from '../actions/constants'

const intialState={
  countrySource:[],
  name:null,
  color:null,
  population:null,
  flag:null,
  continent:null,
  singleData:[],
};

export const countryReducer=createReducer({},{
  [constants.GET_SINGLE_DATA](state,action){
    //getting single row base on selected country
    let newData;
    state.countrySource.forEach((row) => {
      if(row.name===action.name){
        newData=row
      }
    });
 return  Object.assign({},state,{singleData:newData,name:action.name}) 
},

 [constants.GET_COUNTRIES](state,action){
 return Object.assign({},state,{countrySource:action.respData})
}

});
