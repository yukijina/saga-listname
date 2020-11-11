//call allows us to call promise
import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users';

//functions* - generator function
function* getUsers() {
  try {
    const result = yield call(api.getUsers)
    console.log(result)
    yield put(actions.getUsersSuccess({
      items: result.data.data
    }))
  }catch(e) {

  }
}


function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
} 

const userSagas = [
  fork(watchGetUsersRequest)
]

export default userSagas;