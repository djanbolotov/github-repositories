import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { OrganizationActionTypes } from '../types/organization';


async function GetOrganization({ organization, page }: any) {
    const { data } = await axios.get('https://api.github.com/orgs/{org}/repos', { params: { org: organization, per_page: 15, page } })
    return data;
}

async function GetTotalRepos(org: any) {
    const { data } = await axios.get('https://api.github.com/orgs/' + org)
    return data.public_repos;
}

function* sagaGetTotalPages(action: any) {
    try {
        const pages: Promise<any> = yield call(GetTotalRepos, action.organization);
        yield put({ type: OrganizationActionTypes.GET_TOTAL_PAGES, payload: Math.ceil(Number(pages) / 15) });
    } catch {
        yield put({ type: OrganizationActionTypes.FETCH_ORGANIZATION_ERROR, payload: "No relevent organization!" });
    }
}

function* sagaGetOrganization(action: any) {
    try {
        yield put({ type: OrganizationActionTypes.FETCH_ORGANIZATION })
        const response: Promise<any> = yield call(GetOrganization, action);
        yield put({
            type: OrganizationActionTypes.FETCH_ORGANIZATION_SUCCESS,
            payload: {
                repositories: response,
            }
        })
    } catch {
        yield put({ type: OrganizationActionTypes.FETCH_ORGANIZATION_ERROR, payload: "No relevent organization!" });
    }
}

export function* rootSaga() {
    yield takeEvery(OrganizationActionTypes.GET_ORGANIZATION, sagaGetOrganization);
    yield takeEvery(OrganizationActionTypes.GET_PAGES, sagaGetTotalPages);
}