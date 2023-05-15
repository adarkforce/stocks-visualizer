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
}

export interface SymbolInfo {
  symbol: string;
  name: string;
  lastsale: string;
  netchange: string;
  pctchange: string;
  marketCap: string;
  url: string;
}
