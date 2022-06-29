import { IDoc } from '@any-ui/core'
import {IHorse} from "./horseJSON";

export class HorseDoc implements IDoc {
  constructor(
    readonly id?: string,
    readonly name?: string,
    readonly favouriteFood?: string,
    readonly height?: number,
    readonly weight?: number
  ) {}

  static fromJSON(horse: IHorse): HorseDoc {
    return new HorseDoc(horse.id, horse.name);
  }
}
