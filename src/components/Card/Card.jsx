import { Link } from "react-router-dom";
import { addFavorites, removeFavorites } from "../../redux/actions";
import style from "./Card.module.css";
import button from "../../assets/Button.png";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card (props) {
  console.log(props);

  return (
    <div className={style.container}>
      <div className={style.contentAll}>
        <button onClick={() => props.onClose(props.id)} className={style.btn_delete} ><img src={button} alt="" /></button>
        <div className={style.front} >
          <img src={props.image} alt={props.name} className={style.image}  />

        </div>
        <div className={style.back}>
          <h2 className={style.title}>Name: {props.name}</h2>
          <h2 className={style.title}>Specie: {props.species}</h2>
          <h2 className={style.title}>Gender: {props.gender}</h2>
        </div>
        <div className={style.btnContainer}>
          <Link to={`/detail/${props.detailId}`} >
            <button className={style.btn}>View more</button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites : function (character) {
      dispatch(addFavorites(character))
    },
    removeFavorites: function(id) {
      dispatch(removeFavorites(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);