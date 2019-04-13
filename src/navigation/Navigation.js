import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  CATEGORIES_SCREEN,
  BOOKMARKS_SCREEN,
  POST_SCREEN,
} from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function appNavigation() {
  // Navigation.setDefaultOptions({
  //   topBar: {
  //     visible: true,
  //     drawBehind: false
  //   },
  //   bottomTabs: {
  //     titleDisplayMode: 'alwaysShow',
  //     selectedIconColor: '#000',
  //     selectedTextColor: '#000',
  //   },
  //   bottomTab: {
  //     selectedIconColor: '#000',
  //     selectedTextColor: '#000',
  //   },
  //   animations: {
  //     push: {
  //       enable: false
  //     },
  //     pop: {
  //       enable: false
  //     }
  //   }
  // });
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: '#e8e8e8',
      orientation: ['portrait']
    },
    bottomTab: {
      iconColor: '#1B4C77',
      selectedIconColor: '#0f0',
      textColor: '#1B4C77',
      selectedTextColor: '#0f0',
      fontFamily: 'HelveticaNeue-Italic',
      fontSize: 13
    },
    _animations: {
      push: {
        waitForRender: false,
      }
    },
    animations: {
      push: {
        enabled: true,
        content: {
          x: {
            from: 1000,
            to: 0,
            duration: 250
          }
        }
      },
      pop: {
        enabled: true,
        content: {
          x: {
            from: 0,
            to: 1000,
            duration: 250
          }
        }
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
                      text: 'Home'
                    },
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
          component: {
            name: CATEGORIES_SCREEN,
            options: {
              bottomTab: {
                text: 'Categories',
                icon: require('../assets/icons/list.png')
              }
            }
          }
        },
        {
          component: {
            name: BOOKMARKS_SCREEN,
            options: {
              bottomTab: {
                text: 'Bookmarks',
                icon: require('../assets/icons/bookmark.png')
              }
            }
          }
        }]
      }
    }
  });
}
