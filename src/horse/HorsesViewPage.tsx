import React, {FC} from "react";
import {useObserver} from "mobx-react-lite";


export const HorsesViewPage: FC = () => {
  return useObserver(() => (
    <h2>Horses View</h2>))
};
