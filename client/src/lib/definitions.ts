export interface Players {
  id: number;
  name: string;
  age: number;
  position: string;
  team_id: number | null
}

export interface Teams {
  id?: number;
  name: string;
  slogan: string;
  players: number[] | null | undefined
}
