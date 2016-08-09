import { connect } from 'react-redux';
import { startBoard, showCreateBoard } from '../actions/Action';
import ListBoard from '../components/ListBoard';

const getBoad = (boards) => {
  boards = JSON.parse(localStorage.getItem("board") || '[]');
  return boards;
}

const mapStateToProps = (state) => {
  return {
    boards: getBoad(state.boards)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardClick: () => {
      dispatch(startBoard())
    },

    onClickShowPopup: (direction) => {
      dispatch(showCreateBoard(true));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBoard)