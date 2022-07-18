import mongoose, {Types} from 'mongoose';
import cricketDataSchema from './cricket-data.schema';

  export interface Id {
      $oid: string;
  }

  export interface Event {
      name: string;
  }

  export interface Officials {
      match_referees: string[];
      reserve_umpires: string[];
      tv_umpires: string[];
      umpires: string[];
  }

  export interface Outcome {
      result: string;
  }

  export interface Players {
      England: string[];
      Australia: string[];
  }


  export interface Registry {
      people: string;
  }

  export interface Toss {
      decision: string;
      winner: string;
  }

  export interface Info {
      balls_per_over: number;
      city: string;
      dates: string[];
      event: Event;
      gender: string;
      match_type: string;
      match_type_number: number;
      officials: Officials;
      outcome: Outcome;
      player_of_match: string[];
      players: Players;
      registry: Registry;
      season: string;
      team_type: string;
      teams: string[];
      toss: Toss;
      venue: string;
  }

  export interface Runs {
      batter: number;
      extras: number;
      total: number;
  }

  export interface Extras {
      legbyes: number;
      byes?: number;
      noballs?: number;
      wides?: number;
  }

  export interface Fielder {
      name: string;
  }

  export interface Wicket {
      player_out: string;
      fielders: Fielder[];
      kind: string;
  }

  export interface Delivery {
      batter: string;
      bowler: string;
      non_striker: string;
      runs: Runs;
      extras: Extras;
      wickets: Wicket[];
  }

  export interface Over {
      over: number;
      deliveries: Delivery[];
  }


  export interface MiscountedOvers {
      33: 332;
  }

  export interface Innings {
      team: string;
      overs: Over[];
      miscounted_overs: MiscountedOvers;
      declared?: boolean;
  }

  export interface RootObject {
      _id: Id;
      info: Info;
      innings: Innings[];
  }

  export class cricketDataModel extends mongoose.Document{
    public model: mongoose.Model<mongoose.Document>;

    constructor(){
      super(cricketDataSchema)
    }

    async retrieve(cond: Object) {
      return await this.model.find(cond);
    }
  }

