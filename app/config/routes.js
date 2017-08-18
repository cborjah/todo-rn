import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Lists from '../screens/Lists';
import Todos from '../screens/Todos';
import TodoInfo from '../screens/TodoInfo';
import CreateList from '../screens/CreateList';
import CreateTodo from '../screens/CreateTodo';

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
  TodoInfo: {
    screen: TodoInfo,
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
//     screen: TodoInfo,
//   }
// });
