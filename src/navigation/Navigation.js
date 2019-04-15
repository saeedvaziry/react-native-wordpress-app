import { Navigation } from 'react-native-navigation';
import { Colors } from '../configs';
import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  BOOKMARKS_SCREEN
} from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function appNavigation() {
  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: Colors.WHITE
      },
      background: {
        color: Colors.BLUE
      },
      leftButtonColor: Colors.WHITE
    },
    layout: {
      componentBackgroundColor: '#e8e8e8',
    },
    bottomTab: {
      titleDisplayMode: 'alwaysShow',
      selectedIconColor: '#000',
      selectedTextColor: '#000',
    },
    animations: {
      push: {
        waitForRender: true,
        enabled: false,
      },
      pop: {
        enabled: false,
      },
      showModal: {
        enabled: false
      },
      dismissModal: {
        enabled: false
      }
    }
  });
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          stack: {
            children: [{
              component: {
                name: HOME_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Latest Posts'
                    }
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Home',
                icon: require('../assets/icons/home.png')
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: CATEGORIES_SCREEN,
                options: {
                  topBar: {
                    title: {
                      text: 'Categories'
                    }
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Categories',
                icon: require('../assets/icons/list.png')
              }
            }
          }
        }]
      }
    }
  });
}
