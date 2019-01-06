import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Board from './board.jsx';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        boards: state.entities.boards,
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserBoards: id => dispatch(fetchUserBoards(id)),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchBoard: id => dispatch(fetchBoard(id)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
