import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";

import organizationReducer from "./organizationReducer";
import { rootSaga } from './organizationSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(organizationReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof organizationReducer>;