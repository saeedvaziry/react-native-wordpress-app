import React from 'react';
import { Navigation } from 'react-native-navigation';

import {
  HomeScreen,
  CategoriesScreen,
  BookmarksScreen,
  PostScreen
} from '../screens';
import { Provider, configureStore } from '../redux';

const store = configureStore();

import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  BOOKMARKS_SCREEN,
  POST_SCREEN,
} from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(CATEGORIES_SCREEN, () => WrappedComponent(CategoriesScreen));
  Navigation.registerComponent(BOOKMARKS_SCREEN, () => WrappedComponent(BookmarksScreen));
  Navigation.registerComponent(POST_SCREEN, () => WrappedComponent(PostScreen));
  console.info('All screens have been registered...');
}
