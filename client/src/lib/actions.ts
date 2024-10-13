import axios from "axios";
import { Players, Teams } from "./definitions";

const BASEURL = "http://localhost:3001"

export async function fetchExistingTeams() {
  try {
    const response = await axios.get<Teams[]>(`${BASEURL}/api/teams`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
}


export async function addTeam(newTeam: Teams) {
  try {
    const response = await axios.post(`${BASEURL}/api/teams`, newTeam);
    
    return response;
  } catch (error) {
    console.error('Error adding team:', error);
    return null; 
  }
}


export async function fetchPlayers() {
  try {
    const response = await axios.get<Players[]>(`${BASEURL}/api/players/available`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
}

export function validateTeamName(teams: Teams[], newValue: string){
  return teams.some(team => team.name === newValue);
}