import React, {FC} from "react";
import {store} from "./store/horsesStore";
import {useObserver} from "mobx-react-lite";
import {browserHistory} from "@any-ui/core/navigation";
import "./HorsesList.css";


export const HorsesListPage: FC = () => {

  const handleClick = (id?: string) => () => browserHistory.push(`/horse/${id}`)
  return useObserver(() => (
    <>
      <h2>Horses List</h2>
      {store.horses.hasDocs
        ?
        <ul className="Horses-list">
          {store.horses.docs.map(horse =>
            <button className="Horses-list-item" key={horse.id} id={horse.id} onClick={handleClick(horse.id)}>
              {horse.name}
            </button>
          )}
        </ul>
        :
        <div>No Horses</div>}
    </>))
};
