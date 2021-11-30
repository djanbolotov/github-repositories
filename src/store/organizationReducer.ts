import { OrganizationAction, OrganizationActionTypes, OrganizationState } from "../types/organization";

const initialState: OrganizationState = {
    repositories: [],
    name: null,
    page: 1,
    total_pages: 0,
    loading: false,
    error: null
}

export default function organizationReducer(state = initialState, action: OrganizationAction): OrganizationState {
    switch (action.type) {
        case OrganizationActionTypes.FETCH_ORGANIZATION:
            return {
                ...state,
                loading: true
            };
        case OrganizationActionTypes.FETCH_ORGANIZATION_SUCCESS:
            return {
                ...state,
                repositories: action.payload.repositories,
                loading: false,
                error: null,
            };
        case OrganizationActionTypes.FETCH_ORGANIZATION_ERROR:
            return {
                ...initialState,
                error: action.payload,
            };
        case OrganizationActionTypes.GET_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.payload
            }
        default:
            return state;
    }
}
