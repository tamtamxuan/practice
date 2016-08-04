import React, { PropTypes, Component } from 'react';
import { Router, IndexRoute,  Route, Link, browserHistory, hashHistory } from 'react-router';
import { routeActions, push, router} from 'react-router-redux';

class AddBoard extends Component{
  constructor(props){
    super(props);
    this.addBoardItem = this.addBoardItem.bind(this);
  }

  addBoardItem(event) {
    const {dispatch} = this.props;
    event.preventDefault();
    const keyword = this.refs.keyword.value;
    if (!keyword.trim()) {
      return 
    }
    this.props.addBoardItem(keyword);
    this.refs.keyword.value ='';
    // this.props.router.replace('/board');
    document.location.pathname = `board/${this.props.state.rootReducer.board.boardId}`;
  }

  handleClosePopup(direction) {
    this.props.handleClosePopup(direction);
  }

  render() {
    return (
      <div className = "popup-add-board">
        <div className={this.props.state.rootReducer.board.showCreateBoard ? 'modal-content' : 'modal-content-hide' } >
        <a key="close" className="close" onClick={this.handleClosePopup.bind(this, false)}>X</a>
        <div className="pop-over-header">
          <div className="pop-over-header-title">Create Board</div>
        </div>
        <div className="pop-over-content">
          <form onSubmit={this.addBoardItem}>
            <label>Title</label>
            <input
              type="text"
              className="form-input input-lg"
              placeholder="What are you organzing?"
              ref="keyword"
              />
            <label>Team</label>
            <p className= "content-title">
              Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
            </p>
            <button className="create-board" type="submit">Add Board </button>
          </form>          
        </div>
        </div>
      </div>
    );
  }
}

AddBoard.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
  addBoardItem: PropTypes.func.isRequired,
  router: React.PropTypes.object
}

export default AddBoard