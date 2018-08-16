import App from './Components/App';
import { connect } from 'react-redux';
import { loadAllDogs, findClosest, showAllDogs } from './actions';

const mapStateToProps = ({ responses, showMap, filterbyZip, filteredResponses, showAll }) => ({
  responses, showMap, filterbyZip, filteredResponses, showAll
});

const mapDispatchToProps = (dispatch) => ({
  loadAllDogs: (dogs) => dispatch(loadAllDogs(dogs)),
  findClosest: (zip, responses) => dispatch(findClosest(zip, responses)),
  showAllDogs: () => dispatch(showAllDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
