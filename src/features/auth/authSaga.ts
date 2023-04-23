import authApi from '@/api/authApi'
import { LoginPayload, LoginResponse } from '@/models'
import history from '@/utils/history'
import { PayloadAction } from '@reduxjs/toolkit'
import { call, fork, put, take } from 'redux-saga/effects'
import { authActions } from './authSlice'
function* handleLogin(payload: LoginPayload) {
  debugger
  try {
    const res: LoginResponse = yield call(authApi.login, payload)
    yield put(
      authActions.loginSuccess({
        id: res.id,
        username: res.username,
        roles: res.privileges,
        fullName: res.fullName,
      }),
    )
    localStorage.setItem('app_token', JSON.stringify(res))
    //redirect to page
    history.push('/')
  } catch (e: any) {
    yield put(authActions.loginFailed(e.message))
  }
}
function* handleLogout() {
  localStorage.removeItem('app_token')
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('app_token'))
    if (!isLoggedIn) {
      const actions: PayloadAction<LoginPayload> = yield take(authActions.login.type)
      yield fork(handleLogin, actions.payload)
    }
    yield take([authActions.loginFailed.type, authActions.logout.type])
    yield call(handleLogout)
  }
}
export default function* authSaga() {
  console.log('handleLogin')
  yield fork(watchLoginFlow)
}
