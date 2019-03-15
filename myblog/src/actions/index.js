import { getArticles, getFullArticle, getComments, postComment, deleteComment } from './articles';
import { getQuoteOfTheDay } from './quoteOfTheDay';
import { signIn, signInRequest, signOut, restoreSignIn } from './account';

export default {
   getArticles,
   getFullArticle,
   getComments,
   postComment,
   deleteComment,
   getQuoteOfTheDay,
   signIn,
   signInRequest,
   signOut,
   restoreSignIn,
}
