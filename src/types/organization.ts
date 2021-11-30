export interface OrganizationState {
    repositories: any[];
    name: null | string;
    page: number;
    total_pages: number;
    loading: boolean;
    error: null | string;
}

export enum OrganizationActionTypes {
    FETCH_ORGANIZATION = "FETCH_ORGANIZATION",
    FETCH_ORGANIZATION_SUCCESS = "FETCH_ORGANIZATION_SUCCESS",
    FETCH_ORGANIZATION_ERROR = "FETCH_ORGANIZATION_ERROR",
    GET_ORGANIZATION = "GET_ORGANIZATION",
    GET_TOTAL_PAGES = "GET_TOTAL_PAGES",
    GET_PAGES = "GET_PAGES"
}

interface fetchOrganizationAction {
    type: OrganizationActionTypes.FETCH_ORGANIZATION;
}

interface fetchOrganizationSuccessAction {
    type: OrganizationActionTypes.FETCH_ORGANIZATION_SUCCESS;
    payload: any;
}

interface fetchOrganizationErrorAction {
    type: OrganizationActionTypes.FETCH_ORGANIZATION_ERROR;
    payload: string;
}

interface fetchTotalPagesAction {
    type: OrganizationActionTypes.GET_TOTAL_PAGES;
    payload: number;
}

export function getOrganization({ page, organization }: any): any {
    return {
        type: OrganizationActionTypes.GET_ORGANIZATION,
        organization,
        page
    }
}

export function getTotalPages(organization: string): any {
    return {
        type: OrganizationActionTypes.GET_PAGES,
        organization
    }
}

export type OrganizationAction = fetchOrganizationAction | fetchOrganizationSuccessAction | fetchOrganizationErrorAction | fetchTotalPagesAction