import React, {FC} from "react";
import {useObserver} from "mobx-react-lite";
import { RouteComponentProps } from "react-router";
import {store} from "./store/horsesStore";
import "./HorsesView.css";


export const HorsesViewPage: FC<RouteComponentProps<{ horseId: string }>> = ({
  match,
}) => {
  const { horseId } = match.params;

  return useObserver(() => {
    const horse = store.byId(horseId)
    return (
      <>
        <h2>Horse View</h2>
        <div className="View-container">
          <span className="label">Name</span><span  className="data">{horse?.name}</span>
          <span className="label">Favourite Food</span><span  className="data">{horse?.favouriteFood}</span>
          <span className="label">Height</span><span  className="data">{horse?.height}</span>
          <span className="label">Weight</span><span  className="data">{horse?.weight}</span>
          <span>{}</span>
        </div>
      </>
    );

  })


};
