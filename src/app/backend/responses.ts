export interface UserRequestParams {
  'op': Operation.PutName;
  'data': {
      'name': string
  };
}

{
  'op': Operation.Vote,
  'data': {
      'vote': "?"
  }
}

{
  "op": Operation.Reveal
}

{
  "op": Operation.StartNewRound
}


enum Operation {
  StartNewRound = "start-new-round",
  Reveal = "reveal",
  Vote = "vote",
  PutName = "put-name"
}
