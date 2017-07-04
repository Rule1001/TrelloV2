import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton'


import '../style/List.css';

import ListItem from './ListItem';
import NewItemForm from './NewItemForm';

const List = (props) => (
  <div className="box component-List">
    <h4 className="title is-4">{props.title}</h4>
    {props.items.map((item) => {
      return <ListItem
        key={item.id}
        itemId={item.id}
        body={item.body}
        listId={item.listId}
        title={item.title}
      />;
    })}
    <NewItemForm listId={props.listId} addItem={props.addItem} />
    <DeleteButton
      deleteList={props.deleteList}
      listId={props.listId}
    />
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  addItem: PropTypes.func.isRequired
};

export default List;

