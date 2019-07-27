import axios from 'axios'
const URL_BASE = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${URL_BASE}/billingCycles/summary`)
    return {
        type: 'BYLLING_SUMMARY_FETCHED',
        payload: request
    }
}