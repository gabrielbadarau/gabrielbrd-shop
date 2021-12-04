import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import {ReactComponent as HeartSolid} from '../assets/icons/heart-solid.svg';
import './Header.css';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

function Header(props) {
    return(
        <header className="border-bottom mb-3">
            <div className="header-height container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Gabriel's Shop" className="logo"/>
                </Link>
                <div>
                    { props.user
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link style={{textDecoration:"none"}} to="/cart" className="d-flex">
                                <ShoppingCart className="icon-header"/>
                                <p className="icon-number">{ props.numberOfProducts }</p>
                            </Link>
                            <Link style={{textDecoration:"none"}} to="/favorite" className="d-flex">
                                <HeartSolid className="icon-header"/>
                                <p className="icon-number">{ props.numberOfFavorite }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        numberOfFavorite:state.favorite.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);