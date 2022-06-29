import {makeObservable, observable, runInAction} from 'mobx';
import {Coll} from '@any-ui/core'
import {HorseDoc} from './horseDoc'
import HorseService from "../service/horseService";
import {IHorse} from "../service/horseJSON";

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

  public byId(horseId: string): HorseDoc | undefined {
    return this.horses.docs.find((horse) => horse.id === horseId)
  }

}

export const store = new HorsesStore(new HorseService())
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ignore = store.getHorsesAsync();
