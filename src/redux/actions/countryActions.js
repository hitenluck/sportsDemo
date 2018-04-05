import * as constants from './constants'
import Api from '../../lib/api'
/*export function startRequest(){
  return{
    type: constants.START_REQUEST
  };
}*/
export function actionCoutriesData(respData){
  console.log('called');
  return{
    type: constants.GET_COUNTRIES,
    respData,
  };
}
export function getSingleData(name){
  return{
    type: constants.GET_SINGLE_DATA,
    name,
  };
}
export function fetchCountries(){

  return (dispatch,getState) => {
      //dispatch(startRequest()
      return Api.get(`/bins/t1z01`).then(resp => {
        dispatch(actionCoutriesData(resp.countries))

        console.log('--------got the response---------',resp.countries)

      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}
