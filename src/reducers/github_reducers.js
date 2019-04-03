import { GET_REPO, SINGLE_REPO,
    SEARCHED, DELETE, UPDATED } from '../actions/types';
const initialState = {
    repos: [],
    single:{},
    searched:[]
}
export default function(state = initialState, action){
    switch(action.type){
          case GET_REPO:
          return {
             ...state,
             repos: action.payload,
          };
          case SINGLE_REPO:
          return {
              ...state,
              single: action.payload
          }
          case SEARCHED:
          return {
              ...state,
              searched: action.payload
          }
          case DELETE:
          const filt = state.searched.filter(a=> a!== action.payload)
          return {
              ...state,
              searched: filt
          }
          case UPDATED:
          state.searched.length=0
           return {
              ...state,
              searched: action.payload
          }
          default: return state;
   }
};