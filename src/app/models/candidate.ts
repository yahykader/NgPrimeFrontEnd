import {Favorite} from './favorite';

export class Candidate {

  public id: number;
  public name: string;
  public naissance: Date;
  public gender: string;
  public favorite: Favorite[];
}
