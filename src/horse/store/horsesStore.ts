import {makeObservable, observable, runInAction} from 'mobx';
import {Coll} from '@any-ui/core'
import {HorseDoc} from './horseDoc'
import HorseService from "./horseService";
import {IHorse} from "./horseJSON";

class HorsesStore {
  @observable
  public horses = new Coll<HorseDoc>([
  ]);

  @observable
  public status = "initial";

  constructor(private horseService: HorseService) {
    makeObservable(this)
  }

  getHorsesAsync = async () => {
    try {
      const data = await this.horseService.get() as IHorse[]
      runInAction(() => {
        this.horses = new Coll<HorseDoc>(data.map(HorseDoc.fromJSON));
        this.status = "loaded";
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };

}

export const store = new HorsesStore(new HorseService())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ignore = store.getHorsesAsync();
