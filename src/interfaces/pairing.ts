export interface TimeClassification {
  day: number;
  week: number;
  month: number;
}

export interface TimeClassificationExtended extends TimeClassification {
  hour: number;
  month_3: number;
  month_6:number;
  year:number;
}

export interface PairData {
  ask: number;
  bid: number;
  last: number;
  high: number;
  low: number;
  open:TimeClassificationExtended;
  averages: TimeClassification;
  volume: number;
  changes:{
    price: TimeClassificationExtended;
    percent: TimeClassificationExtended;
  };
  volume_percent: number;
  timestamp: number;
  display_timestamp: string | Date;
}

export interface PairingData {
  [x: string]: PairData;
}
