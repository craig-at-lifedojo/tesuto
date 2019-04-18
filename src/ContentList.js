import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchAPI } from "./actions";

class ContentList extends Component {
  componentDidMount() {
    this.props.fetchAPI();
  }

  renderList = list => {
    const mediaList = list.map(item => {
      return (
        <li key={item.id}>
          <p>{item.display_order}</p>
          <p>{item.header}</p>
          <p>{item.type}</p>
        </li>
      );
    });
    return mediaList;
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <Fragment>
        {this.props.list.list.length > 0 ? (
          this.renderList(this.props.list.list)
        ) : (
          <div>Loading...</div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.list };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAPI }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentList);
