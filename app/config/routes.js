import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Lists from '../screens/Lists';
import Todos from '../screens/Todos';
import CreateList from '../screens/CreateList';
import CreateTodo from '../screens/CreateTodo';

// const HomeStack = StackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       header: () => null,
//     },
//   },
//   Lists: {
//     screen: Lists,
//     navigationOptions: {
//       header: () => null,
//     },
//   },
//   Todos: {
//     screen: Todos,
//     navigationOptions: {
//       header: () => null,
//     },
//   },
// });
//
// const CreateStack = StackNavigator({
//   CreateList: {
//     screen: CreateList,
//   },
//   CreateTodo: {
//     screen: CreateTodo,
//   },
// });

export default StackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  Lists: {
    screen: Lists,
    navigationOptions: {
      header: () => null,
    },
  },
  Todos: {
    screen: Todos,
    navigationOptions: {
      header: () => null,
    },
  },
  CreateList: {
    screen: CreateList,
  },
  CreateTodo: {
    screen: CreateTodo,
  },
}, {
  headerMode: 'none',
});

// export default StackNavigator({
//   Home: {
//     screen: HomeStack,
//   },
//   Modals: {
//     screen: CreateStack,
//   },
// }, {
//   headerMode: 'none',
// });
