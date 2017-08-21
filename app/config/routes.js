import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Lists from '../screens/Lists';
import ListInfo from '../screens/ListInfo';
import CreateList from '../screens/CreateList';
import Todos from '../screens/Todos';
import TodoInfo from '../screens/TodoInfo';
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
  ListInfo: {
    screen: ListInfo,
  },
  CreateList: {
    screen: CreateList,
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
