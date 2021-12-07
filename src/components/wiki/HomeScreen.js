import React from "react";
import { useSelector } from "react-redux";
import { Articulo } from "./Articulo";



export const HomeScreen = () => {
  const {notes:articles} = useSelector(state => state.article)

  return (
    <div className="">
      <div className="container mt-5">
        <div className="row">
          {articles.length >= 1 ? (
            articles.map((artic) => <Articulo key={artic.id} {...artic} />)
          ) : (
            <h2 style={{ color: "red" }}>No hay articulos</h2>
          )}
        </div>
      </div>
    </div>

  );
};
