import { combineReducers } from 'redux'

import DashboardRecuder from '../dashboard/dashboardReducer'

const rootReducers = combineReducers({
    dashboard: DashboardRecuder
})

export default rootReducers