import App from './App';
import { connect } from 'react-redux';
import { loadAllDogs } from './actions';

const mapStateToProps = ({ responses, showMap, filterbyZip, filteredResponses, showAll }) => ({
  responses, showMap, filterbyZip, filteredResponses, showAll
});

const mapDispatchToProps = (dispatch) => ({
  loadAllDogs: (dogs) => dispatch(loadAllDogs(dogs))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
