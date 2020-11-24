import { Difficulty } from '../enums/Difficulty';

export type Room = {
  title: string;
  difficulty: Difficulty;
  id: string;
  players: number;
};

export type EmitRoom = Room[];

export type EmitQuestion = {
  question: string;
  currentRound: number;
  maxRound: number;
  theme: string;
  maxNumberOfGuesses: number;
};

export type Answer = {
  answer: string;
};

export type EmitAnswer = Answer[];

export type EmitAnswerIsValid = {
  valid: boolean;
};

export type EmitScoreDetails = {
  streak: number;
  position: number;
};

export type EmitRanks = number[];

export type Player = {
  id: string;
  name: string;
  score: number;
  rank: number;
};

export type EmitPlayer = Player[];

export type EmitQuestions = {
  id: number;
  question: string;
  answers: string[];
}[];
