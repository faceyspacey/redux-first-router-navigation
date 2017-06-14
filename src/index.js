// @flow
import type { Navigators } from 'redux-first-router'
import patchNavigators from './patchNavigators'
import actionToNavigation from './actionToNavigation'
import navigationToAction from './navigationToAction'


export default (navigators: Navigators) => ({
  navigators,
  patchNavigators,
  actionToNavigation,
  navigationToAction
})
