export interface StocksData {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjClose: number;
  timestamp: string;
}

export interface StocksInfo {
  symbol: string;
  cumulativeReturn: number;
  annualizedReturn: number;
  annualizedVolatility: number;
  data: StocksData[];
  name: string;
  sharpeRatio: number;
  sortinoRatio: number;
  maxDrawdown: number;
  maxDailyReturn: number;
  minDailyReturn: number;
}

export interface SymbolInfo {
  symbol: string;
  name: string;
}
