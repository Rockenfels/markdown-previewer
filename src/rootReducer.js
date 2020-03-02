import { WRITE} from './components/markdownActions.js';
import { defaultMarkdown } from './components/defaultMarkdown.js';
import DOMPurify from 'dompurify';
import marked from 'marked';

const rootReducer = (defaultState = {payload: defaultMarkdown}, action) => {
  switch(action.type){
        case WRITE:
      return {...defaultState, payload: action.payload};
    default:
      return defaultState;
    }
  }

export default rootReducer;
