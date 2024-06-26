import { Action, createReducer, on } from '@ngrx/store';
import { UIActions } from '@store/ui/index';

export interface IUIState {
  isBaseLoadingActive: boolean;
  isNavbarOpen: boolean;
  isCatalogSidebarOpen: boolean;
  themeMode: string;
}

export const initialState: IUIState = {
  isBaseLoadingActive: false,
  isNavbarOpen: false,
  isCatalogSidebarOpen: false,
  themeMode: 'light',
};

export const uiFeatureKey = 'UI';

const _uiReducer = createReducer(
  initialState,
  on(
    UIActions.toggleNavbar,
    (state: IUIState): IUIState => ({
      ...state,
      isNavbarOpen: !state.isNavbarOpen,
    }),
  ),
  on(UIActions.closeNavbar, (state: IUIState): IUIState => {
    return {
      ...state,
      isNavbarOpen: false,
    };
  }),
  on(
    UIActions.toggleCatalogSidebar,
    (state: IUIState): IUIState => ({
      ...state,
      isCatalogSidebarOpen: !state.isCatalogSidebarOpen,
    }),
  ),
  on(UIActions.closeCatalogSidebar, (state: IUIState): IUIState => {
    return {
      ...state,
      isCatalogSidebarOpen: false,
    };
  }),
  on(UIActions.addBaseLoader, (state: IUIState): IUIState => {
    return {
      ...state,
      isBaseLoadingActive: true,
    };
  }),
  on(UIActions.removeBaseLoader, (state: IUIState): IUIState => {
    return {
      ...state,
      isBaseLoadingActive: false,
    };
  }),
  on(UIActions.toggleThemeMode, (state: IUIState, action: { themeMode: string }): IUIState => {
    return {
      ...state,
      themeMode: action.themeMode,
    };
  }),
);

export function uiReducer(state: IUIState, action: Action) {
  return _uiReducer(state, action);
}
