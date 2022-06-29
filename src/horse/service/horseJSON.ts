export type IHorsePhysical = {
  height?: number
  weight?: number
}

export type IHorseProfile = {
  favouriteFood?: string
  physical?: IHorsePhysical
}

export type IHorse = {
  id?: string
  name?: string
  profile?: IHorseProfile
}
