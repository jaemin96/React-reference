import React, { ReactElement } from 'react';
import { get, child } from 'firebase/database';
import { useFirebase } from '../hooks';

const FirebasePage = (): ReactElement => {
  const [todo, setTodo] = React.useState();
  const { dbRef } = useFirebase('/');

  const getTodo = React.useCallback(() => {
    get(child(dbRef, `/todoList`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setTodo(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    getTodo();
  }, []);

  return <div>Firebase DB Connector on TodoList : {`${JSON.stringify(todo)}`}</div>;
};

export default FirebasePage;
