import { CREATE_COMMENT, DELETE_COMMENT, INIT } from '../actions/postAction'

export const initial = {
  posts: [],
  commentMapping: {},
}

export default function postReducer(state, action) {
  switch (action.type) {
    // dispatch({ type: 'init', action: {payload: []} })
    case INIT: {
      const commentMapping = action.payload.reduce((acc, el) => {
        acc[el.id] = el.Comments
        return acc
      }, {})
      return { ...state, posts: action.payload, commentMapping }
    }
    // payload { postId, user, comment }
    case CREATE_COMMENT: {
      const newComments = [...state.commentMapping[action.payload.postId]]
      newComments.push({
        ...action.payload.comment,
        User: action.payload.user,
      })
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      }
    }
    case DELETE_COMMENT: {
      const newComments = [
        ...state.commentMapping[action.payload.postId],
      ].filter((el) => el.id !== action.payload.commentId)
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      }
    }
    default:
      return state
  }
}
