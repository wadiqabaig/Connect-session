
export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  SUCCESS = 'SUCCESS'
}

export interface CodeLine {
  id: number;
  text: string;
  isBuggy: boolean;
  indent: number;
}
