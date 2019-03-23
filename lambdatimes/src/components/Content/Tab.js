import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
    const selected = props.tab === props.selectedTab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={selected}
      onClick={() => {
        props.selectHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectHandler: PropTypes.function
}


export default Tab;
