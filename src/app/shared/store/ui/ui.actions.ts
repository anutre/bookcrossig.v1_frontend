import { createAction, props } from '@ngrx/store';
import { EUiActionTypes } from '@store/ui/EUiActionTypes';

export const toggleNavbar = createAction(EUiActionTypes.TOGGLE_NAVBAR);

export const closeNavbar = createAction(EUiActionTypes.CLOSE_NAVBAR);

export const toggleCatalogSidebar = createAction(EUiActionTypes.TOGGLE_CATALOG_SIDEBAR);

export const closeCatalogSidebar = createAction(EUiActionTypes.CLOSE_CATALOG_SIDEBAR);

export const addBaseLoader = createAction(EUiActionTypes.ADD_BASE_LOADER);

export const removeBaseLoader = createAction(EUiActionTypes.REMOVE_BASE_LOADER);

export const initTheme = createAction(EUiActionTypes.INIT_THEME);
export const toggleThemeMode = createAction(
  EUiActionTypes.TOGGLE_THEME_MODE,
  props<{
    themeMode: string;
  }>(),
);
