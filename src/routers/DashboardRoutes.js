import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { unsetActiveNote } from "../actions/notes";
import { Navbar } from "../components/ui/Navbar";
import { CrearArticulo } from "../components/wiki/CrearArticulo";
import { DetalleArticulo } from "../components/wiki/DetalleArticulo";
import {HomeScreen} from '../components/wiki/HomeScreen';
import { ModificarArticulo } from "../components/wiki/ModificarArticulo";

export const DashboardRoutes = ({history}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!/^\/article\/\w+$/.test(history.location.pathname)){
      console.log('no estas en detalle')
      dispatch(unsetActiveNote());
    }
  }, [history.location, dispatch])
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/article/new" component={CrearArticulo} />
          <Route exact path="/article/modify" component={ModificarArticulo} />
          <Route exact path="/article/:id" component={DetalleArticulo} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
