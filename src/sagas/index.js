import UsersSagas from './users';
import { all } from 'redux-saga/effects';

export default function* rootSage() {
  yield all([
    ...UsersSagas
  ])
}