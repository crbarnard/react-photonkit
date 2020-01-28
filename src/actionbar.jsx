import React from 'react';
import PropTypes from 'prop-types';

export default class ActionBar extends React.Component {
	render() {
		return (
			<div className="toolbar-actions">
				{this.props.children}
			</div>
		);
	}
}

ActionBar.propTypes = {
	children: PropTypes.node
};
