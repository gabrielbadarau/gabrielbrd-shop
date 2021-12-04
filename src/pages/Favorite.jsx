import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import {removeFromFavorite} from '../redux/actions/favorite';
import { addToCart } from '../redux/actions/cart';
import { ReactComponent as Trash} from '../assets/icons/trash.svg';
import { Link } from 'react-router-dom';
import './Favorite.css'


function Favorite(props) {
    return (
        <Layout>
            <div className="favorite-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                    {
                    props.favorites.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-start text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                        </div>
                        {
                            props.favorites.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center border-bottom" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <div className="w-25">{ product.price } { product.currency }</div>
                                    <div className="w-25">
                                        <button
                                        className="btn btn-dark font-weight-bold"
                                        onClick={() => {
                                            this.props.addToCart({
                                                product: {
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    currency: product.currency,
                                                    image: product.image
                                                }
                                            })
                                        }}
                                        >
                                        Adaugă în coș
                                        </button>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div onClick={() => props.removeFromFavorite({id: product.id})}>
                                            <Trash className="trash-can" /><p>Șterge</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse la favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        favorites: state.favorite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        removeFromFavorite: (payload) => dispatch(removeFromFavorite(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);