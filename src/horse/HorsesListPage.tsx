import React, {FC} from "react";
import {useObserver} from "mobx-react-lite";


export const HorsesListPage: FC = () => {
  return useObserver(() => (
    <h2>Horses List</h2>))
};
