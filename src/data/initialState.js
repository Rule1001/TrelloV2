import {v4} from 'uuid';

const LIST_IDS = {
  a: v4(),
  b: v4(),
  c: v4()
};

const ITEMS_IDS = {
  a: v4(),
  b: v4(),
  c: v4()
};

const initialState = {
  lists: {
    [LIST_IDS.a]: {
      title: 'To do',
      id: LIST_IDS.a
    },
    [LIST_IDS.b]: {
      title: 'Doing',
      id: LIST_IDS.b
    },
    [LIST_IDS.c]: {
      title: 'Done',
      id: LIST_IDS.c
    }
  },
  items: {
    [ITEMS_IDS.a]: {
      id: ITEMS_IDS.a,
      title: 'task 1',
      body: 'shopping',
      listId: LIST_IDS.a
    },
    [ITEMS_IDS.b]: {
      id: ITEMS_IDS.b,
      title: 'task 2',
      body: 'eating',
      listId: LIST_IDS.a
    },
    [ITEMS_IDS.c]: {
      id: ITEMS_IDS.c,
      title: 'task 3',
      body: 'cleaning',
      listId: LIST_IDS.b
    }
  }
};

export default initialState;