import axios from 'axios';
import { GET_REPO, GET_ERRORS,
        SINGLE_REPO, SEARCHED,
        DELETE, UPDATED } from './types';

const user = 'https://api.github.com/users/';
const single ='https://api.github.com/repos'


// get all repositories
export const searchRepo = (search) => dispatch => {
    axios
    .get(user+`${search}/repos`)
    .then(res =>
     dispatch({
      type: GET_REPO,
      payload: res.data
     })
    )
    .catch(err =>
     dispatch({
      type: GET_ERRORS,
      payload: null
     })
    );
};          

export const getSingleRepo=(repo)=>dispatch=>{
    axios
    .get(single+`${repo}`)
    .then(res =>
     dispatch({
      type: SINGLE_REPO,
      payload: res.data
     })
    )
    .catch(err =>
     dispatch({
      type: GET_ERRORS,
      payload: null
     })
    );
}

export const searchedList=()=>dispatch=>{
   let lists = JSON.parse(localStorage.getItem('searched'))
   dispatch({
    type: SEARCHED,
    payload: lists
   })
}

export const deleteItem=(row)=>dispatch=>{
  let list = JSON.parse(localStorage.getItem('searched'));
  const filter = list.filter(a=> a!==row)
  localStorage.setItem("searched", JSON.stringify(filter));
  dispatch({
   type: DELETE,
   payload: row   
  })
}

export const editItem=(newV, oldV)=>dispatch=>{
  let list = JSON.parse(localStorage.getItem('searched'))
  const updated = list.map(a=> a===oldV ? newV: a)
  localStorage.setItem("searched", JSON.stringify(updated))
  dispatch({
    type: UPDATED,
    payload: updated
  })
}