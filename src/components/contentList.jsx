import React, { Component } from 'react';
import { getUserProgram } from '../actions/getUserProgram';
import { connect } from 'react-redux';

class ContentList extends Component {
  async componentDidMount() {
	await getUserProgram();
    console.log(this.props);
  }
  
  render() {
  	return (
    	<h3> OK </h3>
    );
  }
}


function mapStateToProps(store) {
  return { rawResponse: store.programs };
}

export default connect(mapStateToProps)(ContentList);