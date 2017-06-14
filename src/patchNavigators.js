// @flow
import type { Navigators, Router } from 'redux-first-router'

export default (navigators: Navigators) => {
  require('./patchNavigationHelpers')

  Object.keys(navigators).forEach(navKey => {
    const router = navigators[navKey].router
    patchRouter(router, navKey)
  })
}

const patchRouter = (router: Router, navKey: string) => {
  router.getStateForActionOriginal = router.getStateForAction

  router.getStateForAction = (action, state) => {
    action = (action.meta && action.meta.navigation) || action

    // insure initial state is setup
    if (!state) {
      return router.getStateForActionOriginal(action)
    }
    // if the navKeys match, the action is targeting this reducer
    else if (action.navKey === navKey) {
      return router.getStateForActionOriginal(action, state) || state
    }
    // if no navKey is specified give a shot at handling the action (default behavior)
    else if (!action.navKey) {
      return router.getStateForActionOriginal(action, state) || state
    }

    // else if (action.navKey && action.navKey !== navKey) {...
    // do not handle actions targeted at other reducers
    return state
  }
}

