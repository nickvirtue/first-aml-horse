import React, {FC} from "react";
import {store} from "./store/horsesStore";
import {useObserver} from "mobx-react-lite";


export const HorsesListPage: FC = () => {
  return useObserver(() => (
    <>
      <h2>Horses List</h2>
      {store.horses.hasDocs
        ?
        <ul>
          {store.horses.docs.map(horse => <li><span>{horse.name}</span></li>)}
        </ul>
        :
        <div>No Horses</div>}
    </>))
};
