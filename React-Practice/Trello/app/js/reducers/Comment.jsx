import * as actionTypes from '../constants/actionTypes';

function updateComment(commentParam: Member){
  let commentId;
  let persistedComment = JSON.parse(localStorage.getItem('comment') || '[]');
  let found = false;
  persistedComment.forEach( (comment: any, idx: number) => {
    if (comment.commentId ===commentParam.commentId){
      persistedComment[idx] =commentParam;
      found = true;
    }
  });
  if (!found){
    persistedComment.push(commentParam);
  }

  // save to localstorage
  localStorage.setItem('comment', JSON.stringify(persistedComment));
  return Promise.resolve(persistedComment);
}

export default function comment(state = {
  commentId: '',
  memberId: '',
  text: '',
  keyword:'',
  showCreateComment: false,
  showAddLabel: false
}, action) {
  
  switch (action.type) {
    case 'SHOW_CREATE_COMMENT':
      return { 
        showCreateComment: true,
        memberId: action.memberId,
        showAddLabel: false
      }

    case 'HIDE_CREATE_COMMENT':     
      return {
        showCreateComment: false
      }

    case 'ADD_COMMENT':
      let getListComment = JSON.parse(localStorage.getItem("comment") || '[]');
      let commentId = getListComment.length + 1;
      let newComment = {
        memberId: state.memberId,
        commentId: commentId,
        text: action.text
      }

      updateComment(newComment);

      return {
        showCreateComment: true,
        memberId: state.memberId,
        commentId: action.commentId,
        text: action.text,
        showAddLabel: false
      }

    default:
      return state
  }
}