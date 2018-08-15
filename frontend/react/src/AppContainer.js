import App from './App';
import { connect } from 'react-redux';
import { loadAllDogs } from './actions';

// const mapStateToProps = ({ responses, errorLog, isFetching }) => ({
//   responses, errorLog, isFetching
// });

const mapDispatchToProps = (dispatch) => ({
  loadAllDogs: (dogs) => dispatch(loadAllDogs(dogs))
});

export default connect(null, mapDispatchToProps)(App);
