import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUI from './ui.reducer';
import { IUIState } from './ui.reducer';

const selectUIState = createFeatureSelector<fromUI.IUIState>(fromUI.uiFeatureKey);

export const selectNavbarIsOpen = createSelector(
  selectUIState,
  (state: IUIState) => state.isBaseLoadingActive,
);

export const selectCatalogSidebarIsOpen = createSelector(
  selectUIState,
  (state: IUIState) => state.isCatalogSidebarOpen,
);

export const selectThemeMode = createSelector(selectUIState, (state: IUIState) => state.themeMode);

export const selectIsGlobalLoadingActive = createSelector(
  selectUIState,
  (state: IUIState) => state.isBaseLoadingActive,
);
