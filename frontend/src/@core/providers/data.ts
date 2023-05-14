// Fist 1000 stocks from https://www.nasdaq.com/market-activity/stocks/screener

export const STOCKS_SYMBOLS = [
  {
      "symbol": "AAPL",
      "name": "Apple Inc. Common Stock",
      "lastsale": "$172.57",
      "netchange": "-0.94",
      "pctchange": "-0.542%",
      "marketCap": "2,991,904,763,800",
      "url": "/market-activity/stocks/aapl"
  },
  {
      "symbol": "MSFT",
      "name": "Microsoft Corporation Common Stock",
      "lastsale": "$308.97",
      "netchange": "-1.14",
      "pctchange": "-0.368%",
      "marketCap": "2,297,342,596,048",
      "url": "/market-activity/stocks/msft"
  },
  {
      "symbol": "GOOG",
      "name": "Alphabet Inc. Class C Capital Stock",
      "lastsale": "$117.92",
      "netchange": "1.02",
      "pctchange": "0.873%",
      "marketCap": "1,500,196,995,412",
      "url": "/market-activity/stocks/goog"
  },
  {
      "symbol": "GOOGL",
      "name": "Alphabet Inc. Class A Common Stock",
      "lastsale": "$117.51",
      "netchange": "0.94",
      "pctchange": "0.806%",
      "marketCap": "1,494,980,910,201",
      "url": "/market-activity/stocks/googl"
  },
  {
      "symbol": "AMZN",
      "name": "Amazon.com, Inc. Common Stock",
      "lastsale": "$110.26",
      "netchange": "-1.92",
      "pctchange": "-1.712%",
      "marketCap": "1,122,103,692,932",
      "url": "/market-activity/stocks/amzn"
  },
  {
      "symbol": "BRK/A",
      "name": "Berkshire Hathaway Inc.",
      "lastsale": "$491,182.495",
      "netchange": "-1,817.505",
      "pctchange": "-0.369%",
      "marketCap": "722,467,561,151",
      "url": "/market-activity/stocks/brk/a"
  },
  {
      "symbol": "BRK/B",
      "name": "Berkshire Hathaway Inc.",
      "lastsale": "$322.49",
      "netchange": "-0.15",
      "pctchange": "-0.046%",
      "marketCap": "711,513,354,034",
      "url": "/market-activity/stocks/brk/b"
  },
  {
      "symbol": "NVDA",
      "name": "NVIDIA Corporation Common Stock",
      "lastsale": "$283.40",
      "netchange": "-2.38",
      "pctchange": "-0.833%",
      "marketCap": "699,998,000,000",
      "url": "/market-activity/stocks/nvda"
  },
  {
      "symbol": "META",
      "name": "Meta Platforms, Inc. Class A Common Stock",
      "lastsale": "$233.81",
      "netchange": "-1.98",
      "pctchange": "-0.84%",
      "marketCap": "599,807,399,345",
      "url": "/market-activity/stocks/meta"
  },
  {
      "symbol": "TSLA",
      "name": "Tesla, Inc. Common Stock",
      "lastsale": "$167.98",
      "netchange": "-4.10",
      "pctchange": "-2.383%",
      "marketCap": "532,413,332,482",
      "url": "/market-activity/stocks/tsla"
  },
  {
      "symbol": "JNJ",
      "name": "Johnson & Johnson Common Stock",
      "lastsale": "$160.78",
      "netchange": "-0.21",
      "pctchange": "-0.13%",
      "marketCap": "501,608,284,867",
      "url": "/market-activity/stocks/jnj"
  },
  {
      "symbol": "V",
      "name": "Visa Inc.",
      "lastsale": "$231.38",
      "netchange": "0.37",
      "pctchange": "0.16%",
      "marketCap": "486,311,264,116",
      "url": "/market-activity/stocks/v"
  },
  {
      "symbol": "UNH",
      "name": "UnitedHealth Group Incorporated Common Stock (DE)",
      "lastsale": "$491.23",
      "netchange": "2.47",
      "pctchange": "0.505%",
      "marketCap": "457,631,122,110",
      "url": "/market-activity/stocks/unh"
  },
  {
      "symbol": "TSM",
      "name": "Taiwan Semiconductor Manufacturing Company Ltd.",
      "lastsale": "$83.43",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "432,674,328,272",
      "url": "/market-activity/stocks/tsm"
  },
  {
      "symbol": "XOM",
      "name": "Exxon Mobil Corporation Common Stock",
      "lastsale": "$105.78",
      "netchange": "-0.01",
      "pctchange": "-0.009%",
      "marketCap": "430,628,792,031",
      "url": "/market-activity/stocks/xom"
  },
  {
      "symbol": "LLY",
      "name": "Eli Lilly and Company Common Stock",
      "lastsale": "$434.43",
      "netchange": "-1.12",
      "pctchange": "-0.257%",
      "marketCap": "413,728,161,948",
      "url": "/market-activity/stocks/lly"
  },
  {
      "symbol": "WMT",
      "name": "Walmart Inc. Common Stock",
      "lastsale": "$153.07",
      "netchange": "-0.05",
      "pctchange": "-0.033%",
      "marketCap": "412,882,878,197",
      "url": "/market-activity/stocks/wmt"
  },
  {
      "symbol": "JPM",
      "name": "JP Morgan Chase & Co. Common Stock",
      "lastsale": "$134.10",
      "netchange": "-1.95",
      "pctchange": "-1.433%",
      "marketCap": "391,880,430,000",
      "url": "/market-activity/stocks/jpm"
  },
  {
      "symbol": "NVO",
      "name": "Novo Nordisk A/S Common Stock",
      "lastsale": "$171.27",
      "netchange": "2.28",
      "pctchange": "1.349%",
      "marketCap": "385,015,939,322",
      "url": "/market-activity/stocks/nvo"
  },
  {
      "symbol": "PG",
      "name": "Procter & Gamble Company (The) Common Stock",
      "lastsale": "$155.96",
      "netchange": "1.57",
      "pctchange": "1.017%",
      "marketCap": "367,592,935,459",
      "url": "/market-activity/stocks/pg"
  },
  {
      "symbol": "MA",
      "name": "Mastercard Incorporated Common Stock",
      "lastsale": "$381.92",
      "netchange": "-1.47",
      "pctchange": "-0.383%",
      "marketCap": "364,062,388,585",
      "url": "/market-activity/stocks/ma"
  },
  {
      "symbol": "MRK",
      "name": "Merck & Company, Inc. Common Stock (new)",
      "lastsale": "$117.14",
      "netchange": "-0.41",
      "pctchange": "-0.349%",
      "marketCap": "297,265,448,921",
      "url": "/market-activity/stocks/mrk"
  },
  {
      "symbol": "CVX",
      "name": "Chevron Corporation Common Stock",
      "lastsale": "$156.62",
      "netchange": "0.40",
      "pctchange": "0.256%",
      "marketCap": "296,739,062,934",
      "url": "/market-activity/stocks/cvx"
  },
  {
      "symbol": "HD",
      "name": "Home Depot, Inc. (The) Common Stock",
      "lastsale": "$290.47",
      "netchange": "2.78",
      "pctchange": "0.966%",
      "marketCap": "294,149,962,687",
      "url": "/market-activity/stocks/hd"
  },
  {
      "symbol": "KO",
      "name": "Coca-Cola Company (The) Common Stock",
      "lastsale": "$64.11",
      "netchange": "0.25",
      "pctchange": "0.391%",
      "marketCap": "277,275,750,000",
      "url": "/market-activity/stocks/ko"
  },
  {
      "symbol": "PEP",
      "name": "PepsiCo, Inc. Common Stock",
      "lastsale": "$196.12",
      "netchange": "0.78",
      "pctchange": "0.399%",
      "marketCap": "270,193,173,714",
      "url": "/market-activity/stocks/pep"
  },
  {
      "symbol": "ORCL",
      "name": "Oracle Corporation Common Stock",
      "lastsale": "$97.85",
      "netchange": "0.41",
      "pctchange": "0.421%",
      "marketCap": "264,175,625,700",
      "url": "/market-activity/stocks/orcl"
  },
  {
      "symbol": "AVGO",
      "name": "Broadcom Inc. Common Stock",
      "lastsale": "$631.15",
      "netchange": "3.48",
      "pctchange": "0.554%",
      "marketCap": "263,141,370,534",
      "url": "/market-activity/stocks/avgo"
  },
  {
      "symbol": "ABBV",
      "name": "AbbVie Inc. Common Stock",
      "lastsale": "$147.15",
      "netchange": "0.56",
      "pctchange": "0.382%",
      "marketCap": "259,593,463,957",
      "url": "/market-activity/stocks/abbv"
  },
  {
      "symbol": "ASML",
      "name": "ASML Holding N.V. New York Registry Shares",
      "lastsale": "$647.51",
      "netchange": "-2.68",
      "pctchange": "-0.412%",
      "marketCap": "255,500,709,953",
      "url": "/market-activity/stocks/asml"
  },
  {
      "symbol": "AZN",
      "name": "AstraZeneca PLC American Depositary Shares",
      "lastsale": "$74.73",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "231,640,173,722",
      "url": "/market-activity/stocks/azn"
  },
  {
      "symbol": "COST",
      "name": "Costco Wholesale Corporation Common Stock",
      "lastsale": "$504.07",
      "netchange": "2.18",
      "pctchange": "0.434%",
      "marketCap": "223,546,579,144",
      "url": "/market-activity/stocks/cost"
  },
  {
      "symbol": "BABA",
      "name": "Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share",
      "lastsale": "$85.34",
      "netchange": "-2.55",
      "pctchange": "-2.901%",
      "marketCap": "220,817,250,000",
      "url": "/market-activity/stocks/baba"
  },
  {
      "symbol": "NVS",
      "name": "Novartis AG Common Stock",
      "lastsale": "$103.14",
      "netchange": "-0.28",
      "pctchange": "-0.271%",
      "marketCap": "218,616,478,139",
      "url": "/market-activity/stocks/nvs"
  },
  {
      "symbol": "MCD",
      "name": "McDonald's Corporation Common Stock",
      "lastsale": "$296.14",
      "netchange": "1.35",
      "pctchange": "0.458%",
      "marketCap": "216,191,600,076",
      "url": "/market-activity/stocks/mcd"
  },
  {
      "symbol": "BAC",
      "name": "Bank of America Corporation Common Stock",
      "lastsale": "$27.09",
      "netchange": "-0.30",
      "pctchange": "-1.095%",
      "marketCap": "215,973,349,429",
      "url": "/market-activity/stocks/bac"
  },
  {
      "symbol": "PFE",
      "name": "Pfizer, Inc. Common Stock",
      "lastsale": "$37.35",
      "netchange": "-0.23",
      "pctchange": "-0.612%",
      "marketCap": "210,818,428,407",
      "url": "/market-activity/stocks/pfe"
  },
  {
      "symbol": "SHEL",
      "name": "Royal Dutch Shell PLC American Depositary Shares (each representing two (2) Ordinary Shares) ",
      "lastsale": "$60.36",
      "netchange": "0.02",
      "pctchange": "0.033%",
      "marketCap": "206,508,934,143",
      "url": "/market-activity/stocks/shel"
  },
  {
      "symbol": "TMO",
      "name": "Thermo Fisher Scientific Inc Common Stock",
      "lastsale": "$524.65",
      "netchange": "-5.14",
      "pctchange": "-0.97%",
      "marketCap": "202,356,588,961",
      "url": "/market-activity/stocks/tmo"
  },
  {
      "symbol": "CRM",
      "name": "Salesforce, Inc. Common Stock",
      "lastsale": "$201.81",
      "netchange": "-1.66",
      "pctchange": "-0.816%",
      "marketCap": "201,810,000,000",
      "url": "/market-activity/stocks/crm"
  },
  {
      "symbol": "TM",
      "name": "Toyota Motor Corporation Common Stock",
      "lastsale": "$143.27",
      "netchange": "0.60",
      "pctchange": "0.421%",
      "marketCap": "194,348,329,848",
      "url": "/market-activity/stocks/tm"
  },
  {
      "symbol": "ABT",
      "name": "Abbott Laboratories Common Stock",
      "lastsale": "$110.49",
      "netchange": "0.44",
      "pctchange": "0.40%",
      "marketCap": "192,025,679,284",
      "url": "/market-activity/stocks/abt"
  },
  {
      "symbol": "CSCO",
      "name": "Cisco Systems, Inc. Common Stock (DE)",
      "lastsale": "$46.71",
      "netchange": "0.34",
      "pctchange": "0.733%",
      "marketCap": "191,315,907,137",
      "url": "/market-activity/stocks/csco"
  },
  {
      "symbol": "NKE",
      "name": "Nike, Inc. Common Stock",
      "lastsale": "$120.21",
      "netchange": "-2.01",
      "pctchange": "-1.645%",
      "marketCap": "184,761,425,571",
      "url": "/market-activity/stocks/nke"
  },
  {
      "symbol": "LIN",
      "name": "Linde plc Ordinary Shares",
      "lastsale": "$370.33",
      "netchange": "3.29",
      "pctchange": "0.896%",
      "marketCap": "182,261,911,286",
      "url": "/market-activity/stocks/lin"
  },
  {
      "symbol": "FMX",
      "name": "Fomento Economico Mexicano S.A.B. de C.V. Common Stock",
      "lastsale": "$100.93",
      "netchange": "0.15",
      "pctchange": "0.149%",
      "marketCap": "180,575,188,716",
      "url": "/market-activity/stocks/fmx"
  },
  {
      "symbol": "ACN",
      "name": "Accenture plc Class A Ordinary Shares (Ireland)",
      "lastsale": "$277.19",
      "netchange": "4.92",
      "pctchange": "1.807%",
      "marketCap": "175,054,437,683",
      "url": "/market-activity/stocks/acn"
  },
  {
      "symbol": "TMUS",
      "name": "T-Mobile US, Inc. Common Stock",
      "lastsale": "$144.12",
      "netchange": "1.42",
      "pctchange": "0.995%",
      "marketCap": "173,664,600,000",
      "url": "/market-activity/stocks/tmus"
  },
  {
      "symbol": "CMCSA",
      "name": "Comcast Corporation Class A Common Stock",
      "lastsale": "$40.21",
      "netchange": "-0.16",
      "pctchange": "-0.396%",
      "marketCap": "169,527,624,949",
      "url": "/market-activity/stocks/cmcsa"
  },
  {
      "symbol": "DIS",
      "name": "Walt Disney Company (The) Common Stock",
      "lastsale": "$91.99",
      "netchange": "-0.32",
      "pctchange": "-0.347%",
      "marketCap": "168,047,996,812",
      "url": "/market-activity/stocks/dis"
  },
  {
      "symbol": "DHR",
      "name": "Danaher Corporation Common Stock",
      "lastsale": "$227.34",
      "netchange": "-3.47",
      "pctchange": "-1.503%",
      "marketCap": "167,753,910,691",
      "url": "/market-activity/stocks/dhr"
  },
  {
      "symbol": "VZ",
      "name": "Verizon Communications Inc. Common Stock",
      "lastsale": "$37.59",
      "netchange": "-0.01",
      "pctchange": "-0.027%",
      "marketCap": "157,878,000,000",
      "url": "/market-activity/stocks/vz"
  },
  {
      "symbol": "NEE",
      "name": "NextEra Energy, Inc. Common Stock",
      "lastsale": "$77.96",
      "netchange": "1.86",
      "pctchange": "2.444%",
      "marketCap": "157,743,021,863",
      "url": "/market-activity/stocks/nee"
  },
  {
      "symbol": "AMD",
      "name": "Advanced Micro Devices, Inc. Common Stock",
      "lastsale": "$95.26",
      "netchange": "-1.84",
      "pctchange": "-1.895%",
      "marketCap": "155,022,787,519",
      "url": "/market-activity/stocks/amd"
  },
  {
      "symbol": "ADBE",
      "name": "Adobe Inc. Common Stock",
      "lastsale": "$335.45",
      "netchange": "-6.13",
      "pctchange": "-1.795%",
      "marketCap": "153,870,915,000",
      "url": "/market-activity/stocks/adbe"
  },
  {
      "symbol": "SAP",
      "name": "SAP  SE ADS",
      "lastsale": "$131.58",
      "netchange": "-2.11",
      "pctchange": "-1.578%",
      "marketCap": "153,569,326,834",
      "url": "/market-activity/stocks/sap"
  },
  {
      "symbol": "NFLX",
      "name": "Netflix, Inc. Common Stock",
      "lastsale": "$339.89",
      "netchange": "-4.87",
      "pctchange": "-1.413%",
      "marketCap": "151,095,079,917",
      "url": "/market-activity/stocks/nflx"
  },
  {
      "symbol": "HSBC",
      "name": "HSBC Holdings, plc. Common Stock",
      "lastsale": "$37.50",
      "netchange": "0.05",
      "pctchange": "0.134%",
      "marketCap": "149,840,729,775",
      "url": "/market-activity/stocks/hsbc"
  },
  {
      "symbol": "PM",
      "name": "Philip Morris International Inc Common Stock",
      "lastsale": "$95.12",
      "netchange": "0.08",
      "pctchange": "0.084%",
      "marketCap": "147,640,305,109",
      "url": "/market-activity/stocks/pm"
  },
  {
      "symbol": "BHP",
      "name": "BHP Group Limited American Depositary Shares (Each representing two Ordinary Shares)",
      "lastsale": "$58.31",
      "netchange": "0.64",
      "pctchange": "1.11%",
      "marketCap": "147,561,389,358",
      "url": "/market-activity/stocks/bhp"
  },
  {
      "symbol": "TTE",
      "name": "TotalEnergies SE",
      "lastsale": "$60.27",
      "netchange": "0.28",
      "pctchange": "0.467%",
      "marketCap": "147,502,371,891",
      "url": "/market-activity/stocks/tte"
  },
  {
      "symbol": "TXN",
      "name": "Texas Instruments Incorporated Common Stock",
      "lastsale": "$161.88",
      "netchange": "0.71",
      "pctchange": "0.441%",
      "marketCap": "146,987,040,000",
      "url": "/market-activity/stocks/txn"
  },
  {
      "symbol": "UPS",
      "name": "United Parcel Service, Inc. Common Stock",
      "lastsale": "$168.50",
      "netchange": "-1.73",
      "pctchange": "-1.016%",
      "marketCap": "144,352,077,797",
      "url": "/market-activity/stocks/ups"
  },
  {
      "symbol": "WFC",
      "name": "Wells Fargo & Company Common Stock",
      "lastsale": "$37.49",
      "netchange": "-0.84",
      "pctchange": "-2.191%",
      "marketCap": "143,729,328,905",
      "url": "/market-activity/stocks/wfc"
  },
  {
      "symbol": "BMY",
      "name": "Bristol-Myers Squibb Company Common Stock",
      "lastsale": "$68.06",
      "netchange": "-1.02",
      "pctchange": "-1.477%",
      "marketCap": "143,150,822,122",
      "url": "/market-activity/stocks/bmy"
  },
  {
      "symbol": "RTX",
      "name": "Raytheon Technologies Corporation Common Stock",
      "lastsale": "$95.99",
      "netchange": "0.45",
      "pctchange": "0.471%",
      "marketCap": "140,255,022,116",
      "url": "/market-activity/stocks/rtx"
  },
  {
      "symbol": "MS",
      "name": "Morgan Stanley Common Stock",
      "lastsale": "$82.39",
      "netchange": "-0.24",
      "pctchange": "-0.29%",
      "marketCap": "137,591,300,000",
      "url": "/market-activity/stocks/ms"
  },
  {
      "symbol": "UL",
      "name": "Unilever PLC Common Stock",
      "lastsale": "$54.21",
      "netchange": "-0.07",
      "pctchange": "-0.129%",
      "marketCap": "136,891,078,610",
      "url": "/market-activity/stocks/ul"
  },
  {
      "symbol": "SNY",
      "name": "Sanofi ADS",
      "lastsale": "$54.13",
      "netchange": "-0.25",
      "pctchange": "-0.46%",
      "marketCap": "135,191,645,332",
      "url": "/market-activity/stocks/sny"
  },
  {
      "symbol": "RY",
      "name": "Royal Bank Of Canada Common Stock",
      "lastsale": "$95.89",
      "netchange": "-0.33",
      "pctchange": "-0.343%",
      "marketCap": "133,283,250,880",
      "url": "/market-activity/stocks/ry"
  },
  {
      "symbol": "HON",
      "name": "Honeywell International Inc. Common Stock",
      "lastsale": "$193.62",
      "netchange": "-0.36",
      "pctchange": "-0.186%",
      "marketCap": "128,893,239,440",
      "url": "/market-activity/stocks/hon"
  },
  {
      "symbol": "HDB",
      "name": "HDFC Bank Limited Common Stock",
      "lastsale": "$67.95",
      "netchange": "0.82",
      "pctchange": "1.222%",
      "marketCap": "126,403,205,871",
      "url": "/market-activity/stocks/hdb"
  },
  {
      "symbol": "AMGN",
      "name": "Amgen Inc. Common Stock",
      "lastsale": "$232.95",
      "netchange": "0.66",
      "pctchange": "0.284%",
      "marketCap": "124,445,479,294",
      "url": "/market-activity/stocks/amgn"
  },
  {
      "symbol": "SBUX",
      "name": "Starbucks Corporation Common Stock",
      "lastsale": "$106.12",
      "netchange": "0.49",
      "pctchange": "0.464%",
      "marketCap": "121,963,716,000",
      "url": "/market-activity/stocks/sbux"
  },
  {
      "symbol": "T",
      "name": "AT&T Inc.",
      "lastsale": "$17.03",
      "netchange": "0.07",
      "pctchange": "0.413%",
      "marketCap": "121,747,470,000",
      "url": "/market-activity/stocks/t"
  },
  {
      "symbol": "UNP",
      "name": "Union Pacific Corporation Common Stock",
      "lastsale": "$198.99",
      "netchange": "0.91",
      "pctchange": "0.459%",
      "marketCap": "121,323,298,391",
      "url": "/market-activity/stocks/unp"
  },
  {
      "symbol": "LOW",
      "name": "Lowe's Companies, Inc. Common Stock",
      "lastsale": "$203.26",
      "netchange": "-0.04",
      "pctchange": "-0.02%",
      "marketCap": "121,215,373,611",
      "url": "/market-activity/stocks/low"
  },
  {
      "symbol": "BUD",
      "name": "Anheuser-Busch Inbev SA Sponsored ADR (Belgium)",
      "lastsale": "$61.05",
      "netchange": "-0.38",
      "pctchange": "-0.619%",
      "marketCap": "121,107,770,223",
      "url": "/market-activity/stocks/bud"
  },
  {
      "symbol": "INTC",
      "name": "Intel Corporation Common Stock",
      "lastsale": "$28.95",
      "netchange": "0.09",
      "pctchange": "0.312%",
      "marketCap": "120,751,984,350",
      "url": "/market-activity/stocks/intc"
  },
  {
      "symbol": "COP",
      "name": "ConocoPhillips Common Stock",
      "lastsale": "$99.43",
      "netchange": "-0.46",
      "pctchange": "-0.461%",
      "marketCap": "120,497,080,647",
      "url": "/market-activity/stocks/cop"
  },
  {
      "symbol": "BA",
      "name": "Boeing Company (The) Common Stock",
      "lastsale": "$200.70",
      "netchange": "-1.14",
      "pctchange": "-0.565%",
      "marketCap": "120,254,838,150",
      "url": "/market-activity/stocks/ba"
  },
  {
      "symbol": "INTU",
      "name": "Intuit Inc. Common Stock",
      "lastsale": "$427.62",
      "netchange": "2.73",
      "pctchange": "0.643%",
      "marketCap": "119,967,249,002",
      "url": "/market-activity/stocks/intu"
  },
  {
      "symbol": "MDT",
      "name": "Medtronic plc. Ordinary Shares",
      "lastsale": "$88.88",
      "netchange": "-0.14",
      "pctchange": "-0.157%",
      "marketCap": "118,248,059,167",
      "url": "/market-activity/stocks/mdt"
  },
  {
      "symbol": "SPGI",
      "name": "S&P Global Inc. Common Stock",
      "lastsale": "$359.34",
      "netchange": "-0.95",
      "pctchange": "-0.264%",
      "marketCap": "117,844,638,839",
      "url": "/market-activity/stocks/spgi"
  },
  {
      "symbol": "SONY",
      "name": "Sony Group Corporation American Depositary Shares ",
      "lastsale": "$94.68",
      "netchange": "1.47",
      "pctchange": "1.577%",
      "marketCap": "116,882,228,981",
      "url": "/market-activity/stocks/sony"
  },
  {
      "symbol": "PLD",
      "name": "Prologis, Inc. Common Stock",
      "lastsale": "$125.17",
      "netchange": "-0.57",
      "pctchange": "-0.453%",
      "marketCap": "115,588,192,941",
      "url": "/market-activity/stocks/pld"
  },
  {
      "symbol": "QCOM",
      "name": "QUALCOMM Incorporated Common Stock",
      "lastsale": "$103.62",
      "netchange": "-0.44",
      "pctchange": "-0.423%",
      "marketCap": "115,536,300,000",
      "url": "/market-activity/stocks/qcom"
  },
  {
      "symbol": "LMT",
      "name": "Lockheed Martin Corporation Common Stock",
      "lastsale": "$450.79",
      "netchange": "0.10",
      "pctchange": "0.022%",
      "marketCap": "114,163,718,367",
      "url": "/market-activity/stocks/lmt"
  },
  {
      "symbol": "TD",
      "name": "Toronto Dominion Bank (The) Common Stock",
      "lastsale": "$60.75",
      "netchange": "-0.14",
      "pctchange": "-0.23%",
      "marketCap": "111,173,915,475",
      "url": "/market-activity/stocks/td"
  },
  {
      "symbol": "IBM",
      "name": "International Business Machines Corporation Common Stock",
      "lastsale": "$122.84",
      "netchange": "1.94",
      "pctchange": "1.605%",
      "marketCap": "111,062,882,431",
      "url": "/market-activity/stocks/ibm"
  },
  {
      "symbol": "DE",
      "name": "Deere & Company Common Stock",
      "lastsale": "$373.98",
      "netchange": "1.19",
      "pctchange": "0.319%",
      "marketCap": "110,818,603,657",
      "url": "/market-activity/stocks/de"
  },
  {
      "symbol": "AXP",
      "name": "American Express Company Common Stock",
      "lastsale": "$147.93",
      "netchange": "-0.06",
      "pctchange": "-0.041%",
      "marketCap": "109,947,597,787",
      "url": "/market-activity/stocks/axp"
  },
  {
      "symbol": "ELV",
      "name": "Elevance Health, Inc. Common Stock",
      "lastsale": "$457.46",
      "netchange": "0.68",
      "pctchange": "0.149%",
      "marketCap": "108,443,548,555",
      "url": "/market-activity/stocks/elv"
  },
  {
      "symbol": "SYK",
      "name": "Stryker Corporation Common Stock",
      "lastsale": "$285.47",
      "netchange": "0.35",
      "pctchange": "0.123%",
      "marketCap": "108,227,952,772",
      "url": "/market-activity/stocks/syk"
  },
  {
      "symbol": "CAT",
      "name": "Caterpillar, Inc. Common Stock",
      "lastsale": "$209.54",
      "netchange": "-0.49",
      "pctchange": "-0.233%",
      "marketCap": "108,195,033,975",
      "url": "/market-activity/stocks/cat"
  },
  {
      "symbol": "GE",
      "name": "General Electric Company Common Stock",
      "lastsale": "$98.80",
      "netchange": "-0.71",
      "pctchange": "-0.713%",
      "marketCap": "107,589,250,865",
      "url": "/market-activity/stocks/ge"
  },
  {
      "symbol": "ISRG",
      "name": "Intuitive Surgical, Inc. Common Stock",
      "lastsale": "$305.27",
      "netchange": "1.80",
      "pctchange": "0.593%",
      "marketCap": "106,966,018,218",
      "url": "/market-activity/stocks/isrg"
  },
  {
      "symbol": "GS",
      "name": "Goldman Sachs Group, Inc. (The) Common Stock",
      "lastsale": "$319.50",
      "netchange": "-1.22",
      "pctchange": "-0.38%",
      "marketCap": "106,647,444,351",
      "url": "/market-activity/stocks/gs"
  },
  {
      "symbol": "MDLZ",
      "name": "Mondelez International, Inc. Class A Common Stock",
      "lastsale": "$77.88",
      "netchange": "-0.48",
      "pctchange": "-0.613%",
      "marketCap": "106,162,436,246",
      "url": "/market-activity/stocks/mdlz"
  },
  {
      "symbol": "BP",
      "name": "BP p.l.c. Common Stock",
      "lastsale": "$35.81",
      "netchange": "-0.16",
      "pctchange": "-0.445%",
      "marketCap": "105,350,011,387",
      "url": "/market-activity/stocks/bp"
  },
  {
      "symbol": "DEO",
      "name": "Diageo plc Common Stock",
      "lastsale": "$178.22",
      "netchange": "-4.72",
      "pctchange": "-2.58%",
      "marketCap": "100,415,824,121",
      "url": "/market-activity/stocks/deo"
  },
  {
      "symbol": "RIO",
      "name": "Rio Tinto Plc Common Stock",
      "lastsale": "$61.74",
      "netchange": "0.36",
      "pctchange": "0.587%",
      "marketCap": "100,144,888,206",
      "url": "/market-activity/stocks/rio"
  },
  {
      "symbol": "AMAT",
      "name": "Applied Materials, Inc. Common Stock",
      "lastsale": "$116.09",
      "netchange": "0.63",
      "pctchange": "0.546%",
      "marketCap": "98,109,798,190",
      "url": "/market-activity/stocks/amat"
  },
  {
      "symbol": "BKNG",
      "name": "Booking Holdings Inc. Common Stock",
      "lastsale": "$2,630.82",
      "netchange": "-25.76",
      "pctchange": "-0.97%",
      "marketCap": "97,635,860,011",
      "url": "/market-activity/stocks/bkng"
  },
  {
      "symbol": "GILD",
      "name": "Gilead Sciences, Inc. Common Stock",
      "lastsale": "$78.17",
      "netchange": "-0.53",
      "pctchange": "-0.673%",
      "marketCap": "97,619,950,863",
      "url": "/market-activity/stocks/gild"
  },
  {
      "symbol": "BLK",
      "name": "BlackRock, Inc. Common Stock",
      "lastsale": "$645.10",
      "netchange": "3.08",
      "pctchange": "0.48%",
      "marketCap": "96,703,422,625",
      "url": "/market-activity/stocks/blk"
  },
  {
      "symbol": "AMT",
      "name": "American Tower Corporation (REIT) Common Stock",
      "lastsale": "$200.29",
      "netchange": "4.60",
      "pctchange": "2.351%",
      "marketCap": "93,342,106,687",
      "url": "/market-activity/stocks/amt"
  },
  {
      "symbol": "NOW",
      "name": "ServiceNow, Inc. Common Stock",
      "lastsale": "$455.20",
      "netchange": "2.63",
      "pctchange": "0.581%",
      "marketCap": "92,742,494,886",
      "url": "/market-activity/stocks/now"
  },
  {
      "symbol": "ADI",
      "name": "Analog Devices, Inc. Common Stock",
      "lastsale": "$180.57",
      "netchange": "-0.02",
      "pctchange": "-0.011%",
      "marketCap": "91,341,785,744",
      "url": "/market-activity/stocks/adi"
  },
  {
      "symbol": "TJX",
      "name": "TJX Companies, Inc. (The) Common Stock",
      "lastsale": "$78.99",
      "netchange": "0.93",
      "pctchange": "1.191%",
      "marketCap": "91,041,420,413",
      "url": "/market-activity/stocks/tjx"
  },
  {
      "symbol": "MMC",
      "name": "Marsh & McLennan Companies, Inc. Common Stock",
      "lastsale": "$181.22",
      "netchange": "0.85",
      "pctchange": "0.471%",
      "marketCap": "89,653,400,147",
      "url": "/market-activity/stocks/mmc"
  },
  {
      "symbol": "VRTX",
      "name": "Vertex Pharmaceuticals Incorporated Common Stock",
      "lastsale": "$347.41",
      "netchange": "-2.99",
      "pctchange": "-0.853%",
      "marketCap": "89,489,124,074",
      "url": "/market-activity/stocks/vrtx"
  },
  {
      "symbol": "SCHW",
      "name": "Charles Schwab Corporation (The) Common Stock",
      "lastsale": "$48.94",
      "netchange": "1.21",
      "pctchange": "2.535%",
      "marketCap": "89,007,741,985",
      "url": "/market-activity/stocks/schw"
  },
  {
      "symbol": "C",
      "name": "Citigroup, Inc. Common Stock",
      "lastsale": "$45.45",
      "netchange": "-0.58",
      "pctchange": "-1.26%",
      "marketCap": "88,466,816,252",
      "url": "/market-activity/stocks/c"
  },
  {
      "symbol": "ADP",
      "name": "Automatic Data Processing, Inc. Common Stock",
      "lastsale": "$212.74",
      "netchange": "2.93",
      "pctchange": "1.397%",
      "marketCap": "88,149,147,045",
      "url": "/market-activity/stocks/adp"
  },
  {
      "symbol": "CVS",
      "name": "CVS Health Corporation Common Stock",
      "lastsale": "$68.58",
      "netchange": "-0.39",
      "pctchange": "-0.565%",
      "marketCap": "87,770,671,997",
      "url": "/market-activity/stocks/cvs"
  },
  {
      "symbol": "EQNR",
      "name": "Equinor ASA",
      "lastsale": "$27.89",
      "netchange": "0.14",
      "pctchange": "0.505%",
      "marketCap": "86,772,475,847",
      "url": "/market-activity/stocks/eqnr"
  },
  {
      "symbol": "ZTS",
      "name": "Zoetis Inc. Class A Common Stock",
      "lastsale": "$183.62",
      "netchange": "-1.50",
      "pctchange": "-0.81%",
      "marketCap": "84,935,064,300",
      "url": "/market-activity/stocks/zts"
  },
  {
      "symbol": "CB",
      "name": "Chubb Limited  Common Stock",
      "lastsale": "$200.27",
      "netchange": "-1.12",
      "pctchange": "-0.556%",
      "marketCap": "82,943,558,844",
      "url": "/market-activity/stocks/cb"
  },
  {
      "symbol": "REGN",
      "name": "Regeneron Pharmaceuticals, Inc. Common Stock",
      "lastsale": "$744.35",
      "netchange": "-1.22",
      "pctchange": "-0.164%",
      "marketCap": "81,662,827,565",
      "url": "/market-activity/stocks/regn"
  },
  {
      "symbol": "MO",
      "name": "Altria Group, Inc.",
      "lastsale": "$45.67",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "81,573,272,292",
      "url": "/market-activity/stocks/mo"
  },
  {
      "symbol": "IBN",
      "name": "ICICI Bank Limited Common Stock",
      "lastsale": "$22.98",
      "netchange": "0.03",
      "pctchange": "0.131%",
      "marketCap": "80,242,488,784",
      "url": "/market-activity/stocks/ibn"
  },
  {
      "symbol": "SO",
      "name": "Southern Company (The) Common Stock",
      "lastsale": "$73.35",
      "netchange": "-1.30",
      "pctchange": "-1.741%",
      "marketCap": "80,062,594,590",
      "url": "/market-activity/stocks/so"
  },
  {
      "symbol": "PDD",
      "name": "PDD Holdings Inc. American Depositary Shares",
      "lastsale": "$63.32",
      "netchange": "-1.85",
      "pctchange": "-2.839%",
      "marketCap": "80,060,900,561",
      "url": "/market-activity/stocks/pdd"
  },
  {
      "symbol": "CNI",
      "name": "Canadian National Railway Company Common Stock",
      "lastsale": "$120.57",
      "netchange": "0.59",
      "pctchange": "0.492%",
      "marketCap": "79,865,568,000",
      "url": "/market-activity/stocks/cni"
  },
  {
      "symbol": "SHOP",
      "name": "Shopify Inc. Class A Subordinate Voting Shares",
      "lastsale": "$61.33",
      "netchange": "-1.57",
      "pctchange": "-2.496%",
      "marketCap": "78,294,090,631",
      "url": "/market-activity/stocks/shop"
  },
  {
      "symbol": "PGR",
      "name": "Progressive Corporation (The) Common Stock",
      "lastsale": "$133.43",
      "netchange": "-0.51",
      "pctchange": "-0.381%",
      "marketCap": "78,105,445,157",
      "url": "/market-activity/stocks/pgr"
  },
  {
      "symbol": "ENB",
      "name": "Enbridge Inc Common Stock",
      "lastsale": "$38.44",
      "netchange": "-1.04",
      "pctchange": "-2.634%",
      "marketCap": "77,838,495,173",
      "url": "/market-activity/stocks/enb"
  },
  {
      "symbol": "MUFG",
      "name": "Mitsubishi UFJ Financial Group, Inc. Common Stock",
      "lastsale": "$6.41",
      "netchange": "-0.02",
      "pctchange": "-0.311%",
      "marketCap": "77,615,105,284",
      "url": "/market-activity/stocks/mufg"
  },
  {
      "symbol": "UBER",
      "name": "Uber Technologies, Inc. Common Stock",
      "lastsale": "$38.45",
      "netchange": "0.03",
      "pctchange": "0.078%",
      "marketCap": "77,433,375,785",
      "url": "/market-activity/stocks/uber"
  },
  {
      "symbol": "PBR",
      "name": "Petroleo Brasileiro S.A.- Petrobras Common Stock",
      "lastsale": "$11.86",
      "netchange": "0.55",
      "pctchange": "4.863%",
      "marketCap": "77,352,113,472",
      "url": "/market-activity/stocks/pbr"
  },
  {
      "symbol": "BSX",
      "name": "Boston Scientific Corporation Common Stock",
      "lastsale": "$53.34",
      "netchange": "-0.05",
      "pctchange": "-0.094%",
      "marketCap": "76,667,076,800",
      "url": "/market-activity/stocks/bsx"
  },
  {
      "symbol": "HCA",
      "name": "HCA Healthcare, Inc. Common Stock",
      "lastsale": "$275.87",
      "netchange": "-2.23",
      "pctchange": "-0.802%",
      "marketCap": "76,486,224,019",
      "url": "/market-activity/stocks/hca"
  },
  {
      "symbol": "CP",
      "name": "Canadian Pacific Kansas City Limited Common Shares",
      "lastsale": "$81.93",
      "netchange": "0.98",
      "pctchange": "1.211%",
      "marketCap": "76,266,290,361",
      "url": "/market-activity/stocks/cp"
  },
  {
      "symbol": "CI",
      "name": "The Cigna Group Common Stock",
      "lastsale": "$256.57",
      "netchange": "-3.43",
      "pctchange": "-1.319%",
      "marketCap": "76,209,630,064",
      "url": "/market-activity/stocks/ci"
  },
  {
      "symbol": "BTI",
      "name": "British American Tobacco  Industries, p.l.c. Common Stock ADR",
      "lastsale": "$33.71",
      "netchange": "-0.51",
      "pctchange": "-1.49%",
      "marketCap": "75,373,104,328",
      "url": "/market-activity/stocks/bti"
  },
  {
      "symbol": "DUK",
      "name": "Duke Energy Corporation (Holding Company) Common Stock",
      "lastsale": "$97.45",
      "netchange": "0.12",
      "pctchange": "0.123%",
      "marketCap": "75,099,668,259",
      "url": "/market-activity/stocks/duk"
  },
  {
      "symbol": "FISV",
      "name": "Fiserv, Inc. Common Stock",
      "lastsale": "$119.45",
      "netchange": "0.10",
      "pctchange": "0.084%",
      "marketCap": "74,435,174,448",
      "url": "/market-activity/stocks/fisv"
  },
  {
      "symbol": "GSK",
      "name": "GSK plc American Depositary Shares (Each representing two Ordinary Shares)",
      "lastsale": "$36.53",
      "netchange": "0.25",
      "pctchange": "0.689%",
      "marketCap": "74,009,780,000",
      "url": "/market-activity/stocks/gsk"
  },
  {
      "symbol": "TGT",
      "name": "Target Corporation Common Stock",
      "lastsale": "$157.99",
      "netchange": "-0.88",
      "pctchange": "-0.554%",
      "marketCap": "72,732,906,938",
      "url": "/market-activity/stocks/tgt"
  },
  {
      "symbol": "BDX",
      "name": "Becton, Dickinson and Company Common Stock",
      "lastsale": "$252.51",
      "netchange": "1.11",
      "pctchange": "0.442%",
      "marketCap": "71,688,003,621",
      "url": "/market-activity/stocks/bdx"
  },
  {
      "symbol": "EL",
      "name": "Estee Lauder Companies, Inc. (The) Common Stock",
      "lastsale": "$199.15",
      "netchange": "-2.64",
      "pctchange": "-1.308%",
      "marketCap": "71,140,402,432",
      "url": "/market-activity/stocks/el"
  },
  {
      "symbol": "LRCX",
      "name": "Lam Research Corporation Common Stock",
      "lastsale": "$527.10",
      "netchange": "-0.38",
      "pctchange": "-0.072%",
      "marketCap": "70,810,863,845",
      "url": "/market-activity/stocks/lrcx"
  },
  {
      "symbol": "AMX",
      "name": "America Movil, S.A.B. de C.V. American Depositary Shares (each representing the right to receive twenty (20) Series B Shares",
      "lastsale": "$22.20",
      "netchange": "-0.06",
      "pctchange": "-0.27%",
      "marketCap": "70,176,420,000",
      "url": "/market-activity/stocks/amx"
  },
  {
      "symbol": "ITW",
      "name": "Illinois Tool Works Inc. Common Stock",
      "lastsale": "$228.52",
      "netchange": "0.62",
      "pctchange": "0.272%",
      "marketCap": "69,657,721,657",
      "url": "/market-activity/stocks/itw"
  },
  {
      "symbol": "CHTR",
      "name": "Charter Communications, Inc. Class A Common Stock New",
      "lastsale": "$338.09",
      "netchange": "-3.62",
      "pctchange": "-1.059%",
      "marketCap": "69,274,362,752",
      "url": "/market-activity/stocks/chtr"
  },
  {
      "symbol": "PYPL",
      "name": "PayPal Holdings, Inc. Common Stock",
      "lastsale": "$61.69",
      "netchange": "-2.49",
      "pctchange": "-3.88%",
      "marketCap": "69,265,902,634",
      "url": "/market-activity/stocks/pypl"
  },
  {
      "symbol": "EQIX",
      "name": "Equinix, Inc. Common Stock REIT",
      "lastsale": "$739.23",
      "netchange": "-4.21",
      "pctchange": "-0.566%",
      "marketCap": "69,128,850,983",
      "url": "/market-activity/stocks/eqix"
  },
  {
      "symbol": "AON",
      "name": "Aon plc Class A Ordinary Shares (Ireland)",
      "lastsale": "$336.17",
      "netchange": "0.95",
      "pctchange": "0.283%",
      "marketCap": "68,962,713,548",
      "url": "/market-activity/stocks/aon"
  },
  {
      "symbol": "WM",
      "name": "Waste Management, Inc. Common Stock",
      "lastsale": "$169.24",
      "netchange": "-0.95",
      "pctchange": "-0.558%",
      "marketCap": "68,841,281,605",
      "url": "/market-activity/stocks/wm"
  },
  {
      "symbol": "ABB",
      "name": "ABB Ltd Common Stock",
      "lastsale": "$36.93",
      "netchange": "0.20",
      "pctchange": "0.545%",
      "marketCap": "68,704,316,260",
      "url": "/market-activity/stocks/abb"
  },
  {
      "symbol": "CL",
      "name": "Colgate-Palmolive Company Common Stock",
      "lastsale": "$81.98",
      "netchange": "0.35",
      "pctchange": "0.429%",
      "marketCap": "68,218,643,071",
      "url": "/market-activity/stocks/cl"
  },
  {
      "symbol": "ETN",
      "name": "Eaton Corporation, PLC Ordinary Shares",
      "lastsale": "$168.58",
      "netchange": "0.06",
      "pctchange": "0.036%",
      "marketCap": "67,181,267,763",
      "url": "/market-activity/stocks/etn"
  },
  {
      "symbol": "NOC",
      "name": "Northrop Grumman Corporation Common Stock",
      "lastsale": "$438.76",
      "netchange": "2.91",
      "pctchange": "0.668%",
      "marketCap": "66,712,191,300",
      "url": "/market-activity/stocks/noc"
  },
  {
      "symbol": "MU",
      "name": "Micron Technology, Inc. Common Stock",
      "lastsale": "$60.92",
      "netchange": "-0.69",
      "pctchange": "-1.12%",
      "marketCap": "66,670,504,046",
      "url": "/market-activity/stocks/mu"
  },
  {
      "symbol": "CME",
      "name": "CME Group Inc. Class A Common Stock",
      "lastsale": "$184.95",
      "netchange": "1.47",
      "pctchange": "0.801%",
      "marketCap": "66,534,444,916",
      "url": "/market-activity/stocks/cme"
  },
  {
      "symbol": "HUM",
      "name": "Humana Inc. Common Stock",
      "lastsale": "$527.35",
      "netchange": "-1.64",
      "pctchange": "-0.31%",
      "marketCap": "65,958,104,548",
      "url": "/market-activity/stocks/hum"
  },
  {
      "symbol": "EOG",
      "name": "EOG Resources, Inc. Common Stock",
      "lastsale": "$110.42",
      "netchange": "-0.11",
      "pctchange": "-0.10%",
      "marketCap": "64,902,869,779",
      "url": "/market-activity/stocks/eog"
  },
  {
      "symbol": "CSX",
      "name": "CSX Corporation Common Stock",
      "lastsale": "$31.82",
      "netchange": "0.03",
      "pctchange": "0.094%",
      "marketCap": "64,691,807,618",
      "url": "/market-activity/stocks/csx"
  },
  {
      "symbol": "MELI",
      "name": "MercadoLibre, Inc. Common Stock",
      "lastsale": "$1,279.67",
      "netchange": "-16.85",
      "pctchange": "-1.30%",
      "marketCap": "64,313,336,222",
      "url": "/market-activity/stocks/meli"
  },
  {
      "symbol": "SLB",
      "name": "Schlumberger N.V. Common Stock",
      "lastsale": "$44.07",
      "netchange": "-0.07",
      "pctchange": "-0.159%",
      "marketCap": "62,799,750,000",
      "url": "/market-activity/stocks/slb"
  },
  {
      "symbol": "ABNB",
      "name": "Airbnb, Inc. Class A Common Stock",
      "lastsale": "$105.275",
      "netchange": "-5.925",
      "pctchange": "-5.328%",
      "marketCap": "62,785,905,462",
      "url": "/market-activity/stocks/abnb"
  },
  {
      "symbol": "INFY",
      "name": "Infosys Limited American Depositary Shares",
      "lastsale": "$15.08",
      "netchange": "0.05",
      "pctchange": "0.333%",
      "marketCap": "62,374,875,446",
      "url": "/market-activity/stocks/infy"
  },
  {
      "symbol": "BMO",
      "name": "Bank Of Montreal Common Stock",
      "lastsale": "$87.76",
      "netchange": "0.25",
      "pctchange": "0.286%",
      "marketCap": "62,287,956,453",
      "url": "/market-activity/stocks/bmo"
  },
  {
      "symbol": "MNST",
      "name": "Monster Beverage Corporation",
      "lastsale": "$59.54",
      "netchange": "0.26",
      "pctchange": "0.439%",
      "marketCap": "62,208,506,351",
      "url": "/market-activity/stocks/mnst"
  },
  {
      "symbol": "BX",
      "name": "Blackstone Inc. Common Stock",
      "lastsale": "$82.86",
      "netchange": "-0.42",
      "pctchange": "-0.504%",
      "marketCap": "61,806,668,368",
      "url": "/market-activity/stocks/bx"
  },
  {
      "symbol": "APD",
      "name": "Air Products and Chemicals, Inc. Common Stock",
      "lastsale": "$278.00",
      "netchange": "1.45",
      "pctchange": "0.524%",
      "marketCap": "61,739,032,578",
      "url": "/market-activity/stocks/apd"
  },
  {
      "symbol": "VALE",
      "name": "VALE S.A.  American Depositary Shares Each Representing one common share",
      "lastsale": "$13.78",
      "netchange": "0.07",
      "pctchange": "0.511%",
      "marketCap": "61,300,739,969",
      "url": "/market-activity/stocks/vale"
  },
  {
      "symbol": "CNQ",
      "name": "Canadian Natural Resources Limited Common Stock",
      "lastsale": "$55.49",
      "netchange": "-0.22",
      "pctchange": "-0.395%",
      "marketCap": "61,001,411,629",
      "url": "/market-activity/stocks/cnq"
  },
  {
      "symbol": "ICE",
      "name": "Intercontinental Exchange Inc. Common Stock",
      "lastsale": "$108.59",
      "netchange": "0.38",
      "pctchange": "0.351%",
      "marketCap": "60,778,351,616",
      "url": "/market-activity/stocks/ice"
  },
  {
      "symbol": "ATVI",
      "name": "Activision Blizzard, Inc. Common Stock",
      "lastsale": "$77.37",
      "netchange": "0.33",
      "pctchange": "0.428%",
      "marketCap": "60,679,289,129",
      "url": "/market-activity/stocks/atvi"
  },
  {
      "symbol": "PANW",
      "name": "Palo Alto Networks, Inc. Common Stock",
      "lastsale": "$199.30",
      "netchange": "2.12",
      "pctchange": "1.075%",
      "marketCap": "60,309,762,841",
      "url": "/market-activity/stocks/panw"
  },
  {
      "symbol": "ORLY",
      "name": "O'Reilly Automotive, Inc. Common Stock",
      "lastsale": "$962.10",
      "netchange": "3.84",
      "pctchange": "0.401%",
      "marketCap": "59,233,822,362",
      "url": "/market-activity/stocks/orly"
  },
  {
      "symbol": "RELX",
      "name": "RELX PLC PLC American Depositary Shares (Each representing One Ordinary Share)",
      "lastsale": "$31.01",
      "netchange": "-0.19",
      "pctchange": "-0.609%",
      "marketCap": "58,981,588,041",
      "url": "/market-activity/stocks/relx"
  },
  {
      "symbol": "SHW",
      "name": "Sherwin-Williams Company (The) Common Stock",
      "lastsale": "$227.43",
      "netchange": "-2.75",
      "pctchange": "-1.195%",
      "marketCap": "58,651,994,568",
      "url": "/market-activity/stocks/shw"
  },
  {
      "symbol": "BNS",
      "name": "Bank Nova Scotia Halifax Pfd 3 Ordinary Shares",
      "lastsale": "$49.08",
      "netchange": "-0.26",
      "pctchange": "-0.527%",
      "marketCap": "58,491,397,241",
      "url": "/market-activity/stocks/bns"
  },
  {
      "symbol": "UBS",
      "name": "UBS Group AG Registered Ordinary Shares",
      "lastsale": "$19.16",
      "netchange": "-0.03",
      "pctchange": "-0.156%",
      "marketCap": "58,481,740,115",
      "url": "/market-activity/stocks/ubs"
  },
  {
      "symbol": "TRI",
      "name": "Thomson Reuters Corp Ordinary Shares",
      "lastsale": "$123.64",
      "netchange": "0.72",
      "pctchange": "0.586%",
      "marketCap": "58,338,784,865",
      "url": "/market-activity/stocks/tri"
  },
  {
      "symbol": "GD",
      "name": "General Dynamics Corporation Common Stock",
      "lastsale": "$209.96",
      "netchange": "1.91",
      "pctchange": "0.918%",
      "marketCap": "57,599,502,786",
      "url": "/market-activity/stocks/gd"
  },
  {
      "symbol": "MCO",
      "name": "Moody's Corporation Common Stock",
      "lastsale": "$309.71",
      "netchange": "0.76",
      "pctchange": "0.246%",
      "marketCap": "56,831,785,000",
      "url": "/market-activity/stocks/mco"
  },
  {
      "symbol": "CMG",
      "name": "Chipotle Mexican Grill, Inc. Common Stock",
      "lastsale": "$2,045.63",
      "netchange": "-12.87",
      "pctchange": "-0.625%",
      "marketCap": "56,461,433,630",
      "url": "/market-activity/stocks/cmg"
  },
  {
      "symbol": "SMFG",
      "name": "Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)",
      "lastsale": "$8.39",
      "netchange": "-0.02",
      "pctchange": "-0.238%",
      "marketCap": "56,406,831,821",
      "url": "/market-activity/stocks/smfg"
  },
  {
      "symbol": "EPD",
      "name": "Enterprise Products Partners L.P. Common Stock",
      "lastsale": "$25.92",
      "netchange": "0.16",
      "pctchange": "0.621%",
      "marketCap": "56,363,272,010",
      "url": "/market-activity/stocks/epd"
  },
  {
      "symbol": "SNPS",
      "name": "Synopsys, Inc. Common Stock",
      "lastsale": "$368.84",
      "netchange": "0.88",
      "pctchange": "0.239%",
      "marketCap": "56,174,950,545",
      "url": "/market-activity/stocks/snps"
  },
  {
      "symbol": "HSY",
      "name": "The Hershey Company Common Stock",
      "lastsale": "$274.58",
      "netchange": "-0.20",
      "pctchange": "-0.073%",
      "marketCap": "56,099,357,426",
      "url": "/market-activity/stocks/hsy"
  },
  {
      "symbol": "FDX",
      "name": "FedEx Corporation Common Stock",
      "lastsale": "$222.93",
      "netchange": "-1.91",
      "pctchange": "-0.849%",
      "marketCap": "56,033,887,315",
      "url": "/market-activity/stocks/fdx"
  },
  {
      "symbol": "NTES",
      "name": "NetEase, Inc. American Depositary Shares",
      "lastsale": "$85.18",
      "netchange": "-3.21",
      "pctchange": "-3.632%",
      "marketCap": "55,946,066,758",
      "url": "/market-activity/stocks/ntes"
  },
  {
      "symbol": "JD",
      "name": "JD.com, Inc. American Depositary Shares",
      "lastsale": "$35.30",
      "netchange": "-2.33",
      "pctchange": "-6.192%",
      "marketCap": "55,558,965,249",
      "url": "/market-activity/stocks/jd"
  },
  {
      "symbol": "MMM",
      "name": "3M Company Common Stock",
      "lastsale": "$100.27",
      "netchange": "-0.51",
      "pctchange": "-0.506%",
      "marketCap": "55,316,173,199",
      "url": "/market-activity/stocks/mmm"
  },
  {
      "symbol": "SAN",
      "name": "Banco Santander, S.A. Sponsored ADR (Spain)",
      "lastsale": "$3.38",
      "netchange": "-0.02",
      "pctchange": "-0.588%",
      "marketCap": "55,003,233,679",
      "url": "/market-activity/stocks/san"
  },
  {
      "symbol": "CDNS",
      "name": "Cadence Design Systems, Inc. Common Stock",
      "lastsale": "$201.16",
      "netchange": "-0.30",
      "pctchange": "-0.149%",
      "marketCap": "54,853,113,440",
      "url": "/market-activity/stocks/cdns"
  },
  {
      "symbol": "NGG",
      "name": "National Grid Transco, PLC National Grid PLC (NEW) American Depositary Shares",
      "lastsale": "$74.22",
      "netchange": "1.48",
      "pctchange": "2.035%",
      "marketCap": "54,587,025,157",
      "url": "/market-activity/stocks/ngg"
  },
  {
      "symbol": "SNOW",
      "name": "Snowflake Inc. Class A Common Stock",
      "lastsale": "$167.40",
      "netchange": "-2.67",
      "pctchange": "-1.57%",
      "marketCap": "54,405,000,000",
      "url": "/market-activity/stocks/snow"
  },
  {
      "symbol": "EW",
      "name": "Edwards Lifesciences Corporation Common Stock",
      "lastsale": "$89.18",
      "netchange": "0.40",
      "pctchange": "0.451%",
      "marketCap": "54,052,020,652",
      "url": "/market-activity/stocks/ew"
  },
  {
      "symbol": "RACE",
      "name": "Ferrari N.V. Common Shares",
      "lastsale": "$296.27",
      "netchange": "2.66",
      "pctchange": "0.906%",
      "marketCap": "53,793,250,610",
      "url": "/market-activity/stocks/race"
  },
  {
      "symbol": "MAR",
      "name": "Marriott International Class A Common Stock",
      "lastsale": "$174.10",
      "netchange": "-0.39",
      "pctchange": "-0.224%",
      "marketCap": "53,776,635,282",
      "url": "/market-activity/stocks/mar"
  },
  {
      "symbol": "SCCO",
      "name": "Southern Copper Corporation Common Stock",
      "lastsale": "$69.49",
      "netchange": "0.04",
      "pctchange": "0.058%",
      "marketCap": "53,722,834,979",
      "url": "/market-activity/stocks/scco"
  },
  {
      "symbol": "KLAC",
      "name": "KLA Corporation Common Stock",
      "lastsale": "$386.97",
      "netchange": "1.73",
      "pctchange": "0.449%",
      "marketCap": "53,587,514,275",
      "url": "/market-activity/stocks/klac"
  },
  {
      "symbol": "FTNT",
      "name": "Fortinet, Inc. Common Stock",
      "lastsale": "$67.77",
      "netchange": "0.27",
      "pctchange": "0.40%",
      "marketCap": "53,432,014,954",
      "url": "/market-activity/stocks/ftnt"
  },
  {
      "symbol": "MCK",
      "name": "McKesson Corporation Common Stock",
      "lastsale": "$389.97",
      "netchange": "-2.08",
      "pctchange": "-0.531%",
      "marketCap": "53,402,190,353",
      "url": "/market-activity/stocks/mck"
  },
  {
      "symbol": "GIS",
      "name": "General Mills, Inc. Common Stock",
      "lastsale": "$90.61",
      "netchange": "0.35",
      "pctchange": "0.388%",
      "marketCap": "53,220,190,158",
      "url": "/market-activity/stocks/gis"
  },
  {
      "symbol": "ITUB",
      "name": "Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)",
      "lastsale": "$5.42",
      "netchange": "-0.03",
      "pctchange": "-0.55%",
      "marketCap": "53,113,721,828",
      "url": "/market-activity/stocks/itub"
  },
  {
      "symbol": "VMW",
      "name": "Vmware, Inc. Common stock, Class A",
      "lastsale": "$123.44",
      "netchange": "0.38",
      "pctchange": "0.309%",
      "marketCap": "52,891,988,180",
      "url": "/market-activity/stocks/vmw"
  },
  {
      "symbol": "OXY",
      "name": "Occidental Petroleum Corporation Common Stock",
      "lastsale": "$58.09",
      "netchange": "0.16",
      "pctchange": "0.276%",
      "marketCap": "52,171,508,366",
      "url": "/market-activity/stocks/oxy"
  },
  {
      "symbol": "PSA",
      "name": "Public Storage Common Stock",
      "lastsale": "$295.99",
      "netchange": "0.99",
      "pctchange": "0.336%",
      "marketCap": "52,033,661,503",
      "url": "/market-activity/stocks/psa"
  },
  {
      "symbol": "TAK",
      "name": "Takeda Pharmaceutical Company Limited American Depositary Shares (each representing 1/2 of a share of Common Stock)",
      "lastsale": "$16.38",
      "netchange": "0.22",
      "pctchange": "1.361%",
      "marketCap": "51,123,369,843",
      "url": "/market-activity/stocks/tak"
  },
  {
      "symbol": "STLA",
      "name": "Stellantis N.V. Common Shares",
      "lastsale": "$16.20",
      "netchange": "-0.09",
      "pctchange": "-0.552%",
      "marketCap": "50,878,126,150",
      "url": "/market-activity/stocks/stla"
  },
  {
      "symbol": "CCI",
      "name": "Crown Castle Inc. Common Stock",
      "lastsale": "$116.69",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "50,643,460,000",
      "url": "/market-activity/stocks/cci"
  },
  {
      "symbol": "AZO",
      "name": "AutoZone, Inc. Common Stock",
      "lastsale": "$2,729.06",
      "netchange": "13.86",
      "pctchange": "0.51%",
      "marketCap": "50,208,440,807",
      "url": "/market-activity/stocks/azo"
  },
  {
      "symbol": "FCX",
      "name": "Freeport-McMoRan, Inc. Common Stock",
      "lastsale": "$34.99",
      "netchange": "0.45",
      "pctchange": "1.303%",
      "marketCap": "50,059,972,178",
      "url": "/market-activity/stocks/fcx"
  },
  {
      "symbol": "KHC",
      "name": "The Kraft Heinz Company Common Stock",
      "lastsale": "$40.66",
      "netchange": "0.01",
      "pctchange": "0.025%",
      "marketCap": "49,889,776,331",
      "url": "/market-activity/stocks/khc"
  },
  {
      "symbol": "MRNA",
      "name": "Moderna, Inc. Common Stock",
      "lastsale": "$129.30",
      "netchange": "0.89",
      "pctchange": "0.693%",
      "marketCap": "49,868,159,582",
      "url": "/market-activity/stocks/mrna"
  },
  {
      "symbol": "ECL",
      "name": "Ecolab Inc. Common Stock",
      "lastsale": "$174.19",
      "netchange": "-0.03",
      "pctchange": "-0.017%",
      "marketCap": "49,586,579,857",
      "url": "/market-activity/stocks/ecl"
  },
  {
      "symbol": "MSI",
      "name": "Motorola Solutions, Inc. Common Stock",
      "lastsale": "$292.96",
      "netchange": "4.54",
      "pctchange": "1.574%",
      "marketCap": "49,061,140,230",
      "url": "/market-activity/stocks/msi"
  },
  {
      "symbol": "ROP",
      "name": "Roper Technologies, Inc. Common Stock",
      "lastsale": "$461.71",
      "netchange": "3.25",
      "pctchange": "0.709%",
      "marketCap": "49,053,582,500",
      "url": "/market-activity/stocks/rop"
  },
  {
      "symbol": "KMB",
      "name": "Kimberly-Clark Corporation Common Stock",
      "lastsale": "$144.65",
      "netchange": "0.97",
      "pctchange": "0.675%",
      "marketCap": "48,802,168,304",
      "url": "/market-activity/stocks/kmb"
  },
  {
      "symbol": "E",
      "name": "ENI S.p.A. Common Stock",
      "lastsale": "$29.03",
      "netchange": "0.13",
      "pctchange": "0.45%",
      "marketCap": "48,558,337,911",
      "url": "/market-activity/stocks/e"
  },
  {
      "symbol": "MPC",
      "name": "Marathon Petroleum Corporation Common Stock",
      "lastsale": "$109.88",
      "netchange": "-0.22",
      "pctchange": "-0.20%",
      "marketCap": "48,525,825,543",
      "url": "/market-activity/stocks/mpc"
  },
  {
      "symbol": "CTAS",
      "name": "Cintas Corporation Common Stock",
      "lastsale": "$474.36",
      "netchange": "1.28",
      "pctchange": "0.271%",
      "marketCap": "48,243,267,745",
      "url": "/market-activity/stocks/ctas"
  },
  {
      "symbol": "NSC",
      "name": "Norfolk Southern Corporation Common Stock",
      "lastsale": "$211.91",
      "netchange": "1.60",
      "pctchange": "0.761%",
      "marketCap": "48,236,677,028",
      "url": "/market-activity/stocks/nsc"
  },
  {
      "symbol": "SRE",
      "name": "DBA Sempra Common Stock",
      "lastsale": "$153.29",
      "netchange": "-0.19",
      "pctchange": "-0.124%",
      "marketCap": "48,232,752,611",
      "url": "/market-activity/stocks/sre"
  },
  {
      "symbol": "SE",
      "name": "Sea Limited American Depositary Shares, each representing one Class A Ordinary Share",
      "lastsale": "$84.77",
      "netchange": "-1.94",
      "pctchange": "-2.237%",
      "marketCap": "48,044,147,036",
      "url": "/market-activity/stocks/se"
  },
  {
      "symbol": "DG",
      "name": "Dollar General Corporation Common Stock",
      "lastsale": "$218.51",
      "netchange": "1.22",
      "pctchange": "0.561%",
      "marketCap": "47,877,393,309",
      "url": "/market-activity/stocks/dg"
  },
  {
      "symbol": "PXD",
      "name": "Pioneer Natural Resources Company Common Stock",
      "lastsale": "$204.78",
      "netchange": "-2.42",
      "pctchange": "-1.168%",
      "marketCap": "47,864,363,267",
      "url": "/market-activity/stocks/pxd"
  },
  {
      "symbol": "LULU",
      "name": "lululemon athletica inc. Common Stock",
      "lastsale": "$376.20",
      "netchange": "-1.12",
      "pctchange": "-0.297%",
      "marketCap": "47,839,337,944",
      "url": "/market-activity/stocks/lulu"
  },
  {
      "symbol": "BN",
      "name": "Brookfield Corporation Class A Limited Voting Shares",
      "lastsale": "$30.35",
      "netchange": "-0.85",
      "pctchange": "-2.724%",
      "marketCap": "47,533,870,142",
      "url": "/market-activity/stocks/bn"
  },
  {
      "symbol": "WDAY",
      "name": "Workday, Inc. Class A Common Stock",
      "lastsale": "$182.76",
      "netchange": "4.44",
      "pctchange": "2.49%",
      "marketCap": "47,334,840,000",
      "url": "/market-activity/stocks/wday"
  },
  {
      "symbol": "DXCM",
      "name": "DexCom, Inc. Common Stock",
      "lastsale": "$121.70",
      "netchange": "0.63",
      "pctchange": "0.52%",
      "marketCap": "47,175,255,319",
      "url": "/market-activity/stocks/dxcm"
  },
  {
      "symbol": "EMR",
      "name": "Emerson Electric Company Common Stock",
      "lastsale": "$82.52",
      "netchange": "0.54",
      "pctchange": "0.659%",
      "marketCap": "47,151,928,000",
      "url": "/market-activity/stocks/emr"
  },
  {
      "symbol": "AEP",
      "name": "American Electric Power Company, Inc. Common Stock",
      "lastsale": "$91.66",
      "netchange": "0.98",
      "pctchange": "1.081%",
      "marketCap": "47,150,540,029",
      "url": "/market-activity/stocks/aep"
  },
  {
      "symbol": "RSG",
      "name": "Republic Services, Inc. Common Stock",
      "lastsale": "$148.19",
      "netchange": "0.07",
      "pctchange": "0.047%",
      "marketCap": "46,864,135,379",
      "url": "/market-activity/stocks/rsg"
  },
  {
      "symbol": "AJG",
      "name": "Arthur J. Gallagher & Co. Common Stock",
      "lastsale": "$218.62",
      "netchange": "1.81",
      "pctchange": "0.835%",
      "marketCap": "46,801,105,139",
      "url": "/market-activity/stocks/ajg"
  },
  {
      "symbol": "F",
      "name": "Ford Motor Company Common Stock",
      "lastsale": "$11.67",
      "netchange": "-0.20",
      "pctchange": "-1.685%",
      "marketCap": "46,679,534,600",
      "url": "/market-activity/stocks/f"
  },
  {
      "symbol": "HMC",
      "name": "Honda Motor Company, Ltd. Common Stock",
      "lastsale": "$27.75",
      "netchange": "0.16",
      "pctchange": "0.58%",
      "marketCap": "46,211,095,592",
      "url": "/market-activity/stocks/hmc"
  },
  {
      "symbol": "D",
      "name": "Dominion Energy, Inc. Common Stock",
      "lastsale": "$55.19",
      "netchange": "-0.27",
      "pctchange": "-0.487%",
      "marketCap": "46,097,486,961",
      "url": "/market-activity/stocks/d"
  },
  {
      "symbol": "KDP",
      "name": "Keurig Dr Pepper Inc. Common Stock",
      "lastsale": "$32.67",
      "netchange": "0.24",
      "pctchange": "0.74%",
      "marketCap": "45,948,628,423",
      "url": "/market-activity/stocks/kdp"
  },
  {
      "symbol": "LVS",
      "name": "Las Vegas Sands Corp. Common Stock",
      "lastsale": "$60.12",
      "netchange": "-1.03",
      "pctchange": "-1.684%",
      "marketCap": "45,947,995,726",
      "url": "/market-activity/stocks/lvs"
  },
  {
      "symbol": "ING",
      "name": "ING Group, N.V. Common Stock",
      "lastsale": "$12.69",
      "netchange": "0.03",
      "pctchange": "0.237%",
      "marketCap": "45,886,899,991",
      "url": "/market-activity/stocks/ing"
  },
  {
      "symbol": "ABEV",
      "name": "Ambev S.A. American Depositary Shares (Each representing 1 Common Share)",
      "lastsale": "$2.91",
      "netchange": "0.01",
      "pctchange": "0.345%",
      "marketCap": "45,820,784,768",
      "url": "/market-activity/stocks/abev"
  },
  {
      "symbol": "BSBR",
      "name": "Banco Santander Brasil SA American Depositary Shares, each representing one unit",
      "lastsale": "$6.12",
      "netchange": "0.10",
      "pctchange": "1.661%",
      "marketCap": "45,569,243,119",
      "url": "/market-activity/stocks/bsbr"
  },
  {
      "symbol": "AIG",
      "name": "American International Group, Inc. New Common Stock",
      "lastsale": "$52.49",
      "netchange": "-0.32",
      "pctchange": "-0.606%",
      "marketCap": "45,221,485,778",
      "url": "/market-activity/stocks/aig"
  },
  {
      "symbol": "GM",
      "name": "General Motors Company Common Stock",
      "lastsale": "$32.40",
      "netchange": "-0.72",
      "pctchange": "-2.174%",
      "marketCap": "45,040,001,368",
      "url": "/market-activity/stocks/gm"
  },
  {
      "symbol": "BIIB",
      "name": "Biogen Inc. Common Stock",
      "lastsale": "$309.60",
      "netchange": "-0.96",
      "pctchange": "-0.309%",
      "marketCap": "44,812,217,628",
      "url": "/market-activity/stocks/biib"
  },
  {
      "symbol": "APH",
      "name": "Amphenol Corporation Common Stock",
      "lastsale": "$75.10",
      "netchange": "-0.02",
      "pctchange": "-0.027%",
      "marketCap": "44,704,190,769",
      "url": "/market-activity/stocks/aph"
  },
  {
      "symbol": "USB",
      "name": "U.S. Bancorp Common Stock",
      "lastsale": "$29.13",
      "netchange": "0.21",
      "pctchange": "0.726%",
      "marketCap": "44,656,290,000",
      "url": "/market-activity/stocks/usb"
  },
  {
      "symbol": "PNC",
      "name": "PNC Financial Services Group, Inc. (The) Common Stock",
      "lastsale": "$111.58",
      "netchange": "-1.12",
      "pctchange": "-0.994%",
      "marketCap": "44,596,535,301",
      "url": "/market-activity/stocks/pnc"
  },
  {
      "symbol": "TDG",
      "name": "Transdigm Group Incorporated Common Stock",
      "lastsale": "$795.59",
      "netchange": "-1.29",
      "pctchange": "-0.162%",
      "marketCap": "43,437,673,738",
      "url": "/market-activity/stocks/tdg"
  },
  {
      "symbol": "BCE",
      "name": "BCE, Inc. Common Stock",
      "lastsale": "$47.34",
      "netchange": "-0.30",
      "pctchange": "-0.63%",
      "marketCap": "43,181,612,220",
      "url": "/market-activity/stocks/bce"
  },
  {
      "symbol": "PSX",
      "name": "Phillips 66 Common Stock",
      "lastsale": "$93.22",
      "netchange": "-0.18",
      "pctchange": "-0.193%",
      "marketCap": "42,966,289,911",
      "url": "/market-activity/stocks/psx"
  },
  {
      "symbol": "BBVA",
      "name": "Banco Bilbao Vizcaya Argentaria S.A. Common Stock",
      "lastsale": "$7.14",
      "netchange": "0.02",
      "pctchange": "0.281%",
      "marketCap": "42,747,091,400",
      "url": "/market-activity/stocks/bbva"
  },
  {
      "symbol": "NXPI",
      "name": "NXP Semiconductors N.V. Common Stock",
      "lastsale": "$164.55",
      "netchange": "1.20",
      "pctchange": "0.735%",
      "marketCap": "42,739,443,944",
      "url": "/market-activity/stocks/nxpi"
  },
  {
      "symbol": "JCI",
      "name": "Johnson Controls International plc Ordinary Share",
      "lastsale": "$62.03",
      "netchange": "-0.03",
      "pctchange": "-0.048%",
      "marketCap": "42,625,378,036",
      "url": "/market-activity/stocks/jci"
  },
  {
      "symbol": "WDS",
      "name": "Woodside Energy Group Limited American Depositary Shares, each representing one Ordinary Share",
      "lastsale": "$22.44",
      "netchange": "-0.02",
      "pctchange": "-0.089%",
      "marketCap": "42,607,944,861",
      "url": "/market-activity/stocks/wds"
  },
  {
      "symbol": "ANET",
      "name": "Arista Networks, Inc. Common Stock",
      "lastsale": "$138.63",
      "netchange": "-0.38",
      "pctchange": "-0.273%",
      "marketCap": "42,475,592,084",
      "url": "/market-activity/stocks/anet"
  },
  {
      "symbol": "TRP",
      "name": "TC Energy Corporation Common Stock",
      "lastsale": "$41.28",
      "netchange": "-0.12",
      "pctchange": "-0.29%",
      "marketCap": "42,216,965,019",
      "url": "/market-activity/stocks/trp"
  },
  {
      "symbol": "TRV",
      "name": "The Travelers Companies, Inc. Common Stock",
      "lastsale": "$182.09",
      "netchange": "-0.72",
      "pctchange": "-0.394%",
      "marketCap": "42,058,522,721",
      "url": "/market-activity/stocks/trv"
  },
  {
      "symbol": "BIDU",
      "name": "Baidu, Inc. ADS",
      "lastsale": "$120.07",
      "netchange": "-4.10",
      "pctchange": "-3.302%",
      "marketCap": "41,976,138,446",
      "url": "/market-activity/stocks/bidu"
  },
  {
      "symbol": "ADSK",
      "name": "Autodesk, Inc. Common Stock",
      "lastsale": "$194.45",
      "netchange": "1.35",
      "pctchange": "0.699%",
      "marketCap": "41,764,496,404",
      "url": "/market-activity/stocks/adsk"
  },
  {
      "symbol": "KKR",
      "name": "KKR & Co. Inc. Common Stock",
      "lastsale": "$48.49",
      "netchange": "-0.12",
      "pctchange": "-0.247%",
      "marketCap": "41,755,126,193",
      "url": "/market-activity/stocks/kkr"
  },
  {
      "symbol": "STZ",
      "name": "Constellation Brands, Inc. Common Stock",
      "lastsale": "$227.75",
      "netchange": "2.88",
      "pctchange": "1.281%",
      "marketCap": "41,731,080,712",
      "url": "/market-activity/stocks/stz"
  },
  {
      "symbol": "PH",
      "name": "Parker-Hannifin Corporation Common Stock",
      "lastsale": "$323.99",
      "netchange": "-0.60",
      "pctchange": "-0.185%",
      "marketCap": "41,556,911,060",
      "url": "/market-activity/stocks/ph"
  },
  {
      "symbol": "EXC",
      "name": "Exelon Corporation Common Stock",
      "lastsale": "$41.75",
      "netchange": "-0.37",
      "pctchange": "-0.878%",
      "marketCap": "41,511,983,167",
      "url": "/market-activity/stocks/exc"
  },
  {
      "symbol": "ADM",
      "name": "Archer-Daniels-Midland Company Common Stock",
      "lastsale": "$75.38",
      "netchange": "0.48",
      "pctchange": "0.641%",
      "marketCap": "41,054,572,505",
      "url": "/market-activity/stocks/adm"
  },
  {
      "symbol": "O",
      "name": "Realty Income Corporation Common Stock",
      "lastsale": "$62.03",
      "netchange": "0.23",
      "pctchange": "0.372%",
      "marketCap": "40,973,212,273",
      "url": "/market-activity/stocks/o"
  },
  {
      "symbol": "HES",
      "name": "Hess Corporation Common Stock",
      "lastsale": "$132.79",
      "netchange": "0.26",
      "pctchange": "0.196%",
      "marketCap": "40,773,248,510",
      "url": "/market-activity/stocks/hes"
  },
  {
      "symbol": "VLO",
      "name": "Valero Energy Corporation Common Stock",
      "lastsale": "$110.52",
      "netchange": "-0.14",
      "pctchange": "-0.127%",
      "marketCap": "40,653,692,936",
      "url": "/market-activity/stocks/vlo"
  },
  {
      "symbol": "CTVA",
      "name": "Corteva, Inc. Common Stock ",
      "lastsale": "$57.02",
      "netchange": "0.19",
      "pctchange": "0.334%",
      "marketCap": "40,632,761,105",
      "url": "/market-activity/stocks/ctva"
  },
  {
      "symbol": "TT",
      "name": "Trane Technologies plc",
      "lastsale": "$177.73",
      "netchange": "0.89",
      "pctchange": "0.503%",
      "marketCap": "40,531,265,539",
      "url": "/market-activity/stocks/tt"
  },
  {
      "symbol": "IDXX",
      "name": "IDEXX Laboratories, Inc. Common Stock",
      "lastsale": "$487.47",
      "netchange": "0.74",
      "pctchange": "0.152%",
      "marketCap": "40,446,763,490",
      "url": "/market-activity/stocks/idxx"
  },
  {
      "symbol": "AFL",
      "name": "AFLAC Incorporated Common Stock",
      "lastsale": "$66.11",
      "netchange": "-0.56",
      "pctchange": "-0.84%",
      "marketCap": "40,440,041,729",
      "url": "/market-activity/stocks/afl"
  },
  {
      "symbol": "MCHP",
      "name": "Microchip Technology Incorporated Common Stock",
      "lastsale": "$73.81",
      "netchange": "0.66",
      "pctchange": "0.902%",
      "marketCap": "40,432,815,158",
      "url": "/market-activity/stocks/mchp"
  },
  {
      "symbol": "HLN",
      "name": "Haleon plc American Depositary Shares (Each representing two Ordinary Shares)",
      "lastsale": "$8.73",
      "netchange": "-0.02",
      "pctchange": "-0.229%",
      "marketCap": "40,308,914,768",
      "url": "/market-activity/stocks/hln"
  },
  {
      "symbol": "PUK",
      "name": "Prudential Public Limited Company Common Stock",
      "lastsale": "$28.79",
      "netchange": "-0.85",
      "pctchange": "-2.868%",
      "marketCap": "39,632,402,126",
      "url": "/market-activity/stocks/puk"
  },
  {
      "symbol": "WELL",
      "name": "Welltower Inc. Common Stock",
      "lastsale": "$79.30",
      "netchange": "0.15",
      "pctchange": "0.19%",
      "marketCap": "39,356,155,119",
      "url": "/market-activity/stocks/well"
  },
  {
      "symbol": "ALC",
      "name": "Alcon Inc. Ordinary Shares",
      "lastsale": "$79.42",
      "netchange": "-0.49",
      "pctchange": "-0.613%",
      "marketCap": "39,058,756,000",
      "url": "/market-activity/stocks/alc"
  },
  {
      "symbol": "CPRT",
      "name": "Copart, Inc. (DE) Common Stock",
      "lastsale": "$81.81",
      "netchange": "1.23",
      "pctchange": "1.526%",
      "marketCap": "38,990,033,734",
      "url": "/market-activity/stocks/cprt"
  },
  {
      "symbol": "MET",
      "name": "MetLife, Inc. Common Stock",
      "lastsale": "$50.22",
      "netchange": "-1.01",
      "pctchange": "-1.972%",
      "marketCap": "38,888,464,260",
      "url": "/market-activity/stocks/met"
  },
  {
      "symbol": "YUM",
      "name": "Yum! Brands, Inc.",
      "lastsale": "$138.51",
      "netchange": "1.17",
      "pctchange": "0.852%",
      "marketCap": "38,782,800,000",
      "url": "/market-activity/stocks/yum"
  },
  {
      "symbol": "PAYX",
      "name": "Paychex, Inc. Common Stock",
      "lastsale": "$106.89",
      "netchange": "0.28",
      "pctchange": "0.263%",
      "marketCap": "38,534,794,183",
      "url": "/market-activity/stocks/payx"
  },
  {
      "symbol": "STM",
      "name": "STMicroelectronics N.V. Common Stock",
      "lastsale": "$42.42",
      "netchange": "0.53",
      "pctchange": "1.265%",
      "marketCap": "38,237,460,835",
      "url": "/market-activity/stocks/stm"
  },
  {
      "symbol": "ET",
      "name": "Energy Transfer LP Common Units ",
      "lastsale": "$12.32",
      "netchange": "-0.02",
      "pctchange": "-0.162%",
      "marketCap": "38,125,395,123",
      "url": "/market-activity/stocks/et"
  },
  {
      "symbol": "TEL",
      "name": "TE Connectivity Ltd. New Switzerland Registered Shares",
      "lastsale": "$120.46",
      "netchange": "0.40",
      "pctchange": "0.333%",
      "marketCap": "38,077,530,074",
      "url": "/market-activity/stocks/tel"
  },
  {
      "symbol": "PCAR",
      "name": "PACCAR Inc. Common Stock",
      "lastsale": "$72.73",
      "netchange": "0.29",
      "pctchange": "0.40%",
      "marketCap": "38,005,423,477",
      "url": "/market-activity/stocks/pcar"
  },
  {
      "symbol": "CM",
      "name": "Canadian Imperial Bank of Commerce Common Stock",
      "lastsale": "$41.65",
      "netchange": "-0.01",
      "pctchange": "-0.024%",
      "marketCap": "37,970,032,826",
      "url": "/market-activity/stocks/cm"
  },
  {
      "symbol": "SU",
      "name": "Suncor Energy  Inc. Common Stock",
      "lastsale": "$28.68",
      "netchange": "-0.15",
      "pctchange": "-0.52%",
      "marketCap": "37,912,484,830",
      "url": "/market-activity/stocks/su"
  },
  {
      "symbol": "XEL",
      "name": "Xcel Energy Inc. Common Stock",
      "lastsale": "$68.89",
      "netchange": "0.27",
      "pctchange": "0.393%",
      "marketCap": "37,904,806,807",
      "url": "/market-activity/stocks/xel"
  },
  {
      "symbol": "SYY",
      "name": "Sysco Corporation Common Stock",
      "lastsale": "$74.64",
      "netchange": "0.98",
      "pctchange": "1.33%",
      "marketCap": "37,887,563,978",
      "url": "/market-activity/stocks/syy"
  },
  {
      "symbol": "A",
      "name": "Agilent Technologies, Inc. Common Stock",
      "lastsale": "$127.49",
      "netchange": "-0.17",
      "pctchange": "-0.133%",
      "marketCap": "37,699,029,239",
      "url": "/market-activity/stocks/a"
  },
  {
      "symbol": "KMI",
      "name": "Kinder Morgan, Inc. Common Stock",
      "lastsale": "$16.80",
      "netchange": "0.10",
      "pctchange": "0.599%",
      "marketCap": "37,652,390,059",
      "url": "/market-activity/stocks/kmi"
  },
  {
      "symbol": "HLT",
      "name": "Hilton Worldwide Holdings Inc. Common Stock ",
      "lastsale": "$141.58",
      "netchange": "-0.12",
      "pctchange": "-0.085%",
      "marketCap": "37,631,395,273",
      "url": "/market-activity/stocks/hlt"
  },
  {
      "symbol": "MSCI",
      "name": "MSCI Inc Common Stock",
      "lastsale": "$469.63",
      "netchange": "-0.77",
      "pctchange": "-0.164%",
      "marketCap": "37,600,175,481",
      "url": "/market-activity/stocks/msci"
  },
  {
      "symbol": "SGEN",
      "name": "Seagen Inc. Common Stock",
      "lastsale": "$199.00",
      "netchange": "-0.50",
      "pctchange": "-0.251%",
      "marketCap": "37,270,520,353",
      "url": "/market-activity/stocks/sgen"
  },
  {
      "symbol": "MFG",
      "name": "Mizuho Financial Group, Inc. Sponosred ADR (Japan)",
      "lastsale": "$2.94",
      "netchange": "-0.04",
      "pctchange": "-1.342%",
      "marketCap": "37,253,873,943",
      "url": "/market-activity/stocks/mfg"
  },
  {
      "symbol": "LYG",
      "name": "Lloyds Banking Group Plc American Depositary Shares",
      "lastsale": "$2.25",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "37,168,250,360",
      "url": "/market-activity/stocks/lyg"
  },
  {
      "symbol": "WCN",
      "name": "Waste Connections, Inc. Common Shares",
      "lastsale": "$143.89",
      "netchange": "0.30",
      "pctchange": "0.209%",
      "marketCap": "37,058,426,175",
      "url": "/market-activity/stocks/wcn"
  },
  {
      "symbol": "DHI",
      "name": "D.R. Horton, Inc. Common Stock",
      "lastsale": "$108.59",
      "netchange": "-0.56",
      "pctchange": "-0.513%",
      "marketCap": "37,036,918,567",
      "url": "/market-activity/stocks/dhi"
  },
  {
      "symbol": "DOW",
      "name": "Dow Inc. Common Stock ",
      "lastsale": "$52.31",
      "netchange": "-0.03",
      "pctchange": "-0.057%",
      "marketCap": "36,999,637,554",
      "url": "/market-activity/stocks/dow"
  },
  {
      "symbol": "CNC",
      "name": "Centene Corporation Common Stock",
      "lastsale": "$67.17",
      "netchange": "-0.20",
      "pctchange": "-0.297%",
      "marketCap": "36,860,831,060",
      "url": "/market-activity/stocks/cnc"
  },
  {
      "symbol": "NEM",
      "name": "Newmont Corporation",
      "lastsale": "$45.94",
      "netchange": "0.06",
      "pctchange": "0.131%",
      "marketCap": "36,499,720,490",
      "url": "/market-activity/stocks/nem"
  },
  {
      "symbol": "TFC",
      "name": "Truist Financial Corporation Common Stock",
      "lastsale": "$27.30",
      "netchange": "0.47",
      "pctchange": "1.752%",
      "marketCap": "36,361,361,400",
      "url": "/market-activity/stocks/tfc"
  },
  {
      "symbol": "CRH",
      "name": "CRH PLC American Depositary Shares",
      "lastsale": "$48.98",
      "netchange": "-0.74",
      "pctchange": "-1.488%",
      "marketCap": "36,189,535,846",
      "url": "/market-activity/stocks/crh"
  },
  {
      "symbol": "LNG",
      "name": "Cheniere Energy, Inc. Common Stock",
      "lastsale": "$147.91",
      "netchange": "0.91",
      "pctchange": "0.619%",
      "marketCap": "36,015,181,566",
      "url": "/market-activity/stocks/lng"
  },
  {
      "symbol": "ROST",
      "name": "Ross Stores, Inc. Common Stock",
      "lastsale": "$104.51",
      "netchange": "1.98",
      "pctchange": "1.931%",
      "marketCap": "35,747,829,960",
      "url": "/market-activity/stocks/rost"
  },
  {
      "symbol": "WMB",
      "name": "Williams Companies, Inc. (The) Common Stock",
      "lastsale": "$29.28",
      "netchange": "0.28",
      "pctchange": "0.966%",
      "marketCap": "35,686,809,358",
      "url": "/market-activity/stocks/wmb"
  },
  {
      "symbol": "APO",
      "name": "Apollo Global Management, Inc. (New) Common Stock",
      "lastsale": "$62.51",
      "netchange": "-1.21",
      "pctchange": "-1.899%",
      "marketCap": "35,671,480,836",
      "url": "/market-activity/stocks/apo"
  },
  {
      "symbol": "LHX",
      "name": "L3Harris Technologies, Inc. Common Stock",
      "lastsale": "$186.75",
      "netchange": "-0.12",
      "pctchange": "-0.064%",
      "marketCap": "35,474,381,978",
      "url": "/market-activity/stocks/lhx"
  },
  {
      "symbol": "CARR",
      "name": "Carrier Global Corporation Common Stock ",
      "lastsale": "$42.40",
      "netchange": "-0.43",
      "pctchange": "-1.004%",
      "marketCap": "35,401,943,558",
      "url": "/market-activity/stocks/carr"
  },
  {
      "symbol": "KR",
      "name": "Kroger Company (The) Common Stock",
      "lastsale": "$49.18",
      "netchange": "0.02",
      "pctchange": "0.041%",
      "marketCap": "35,285,053,224",
      "url": "/market-activity/stocks/kr"
  },
  {
      "symbol": "DLTR",
      "name": "Dollar Tree Inc. Common Stock",
      "lastsale": "$158.72",
      "netchange": "3.51",
      "pctchange": "2.261%",
      "marketCap": "35,113,238,958",
      "url": "/market-activity/stocks/dltr"
  },
  {
      "symbol": "ON",
      "name": "ON Semiconductor Corporation Common Stock",
      "lastsale": "$81.34",
      "netchange": "1.02",
      "pctchange": "1.27%",
      "marketCap": "35,104,184,098",
      "url": "/market-activity/stocks/on"
  },
  {
      "symbol": "IQV",
      "name": "IQVIA Holdings, Inc. Common Stock",
      "lastsale": "$188.18",
      "netchange": "-1.69",
      "pctchange": "-0.89%",
      "marketCap": "35,028,052,521",
      "url": "/market-activity/stocks/iqv"
  },
  {
      "symbol": "MFC",
      "name": "Manulife Financial Corporation Common Stock",
      "lastsale": "$18.88",
      "netchange": "-0.54",
      "pctchange": "-2.781%",
      "marketCap": "34,930,897,853",
      "url": "/market-activity/stocks/mfc"
  },
  {
      "symbol": "NUE",
      "name": "Nucor Corporation Common Stock",
      "lastsale": "$139.08",
      "netchange": "1.57",
      "pctchange": "1.142%",
      "marketCap": "34,909,080,000",
      "url": "/market-activity/stocks/nue"
  },
  {
      "symbol": "OTIS",
      "name": "Otis Worldwide Corporation Common Stock ",
      "lastsale": "$84.40",
      "netchange": "-0.14",
      "pctchange": "-0.166%",
      "marketCap": "34,877,688,691",
      "url": "/market-activity/stocks/otis"
  },
  {
      "symbol": "PCG",
      "name": "Pacific Gas & Electric Co. Common Stock",
      "lastsale": "$17.45",
      "netchange": "0.10",
      "pctchange": "0.576%",
      "marketCap": "34,826,023,325",
      "url": "/market-activity/stocks/pcg"
  },
  {
      "symbol": "SPG",
      "name": "Simon Property Group, Inc. Common Stock",
      "lastsale": "$106.35",
      "netchange": "0.10",
      "pctchange": "0.094%",
      "marketCap": "34,748,763,479",
      "url": "/market-activity/stocks/spg"
  },
  {
      "symbol": "TEAM",
      "name": "Atlassian Corporation Class A Common Stock",
      "lastsale": "$135.02",
      "netchange": "-0.66",
      "pctchange": "-0.486%",
      "marketCap": "34,603,919,617",
      "url": "/market-activity/stocks/team"
  },
  {
      "symbol": "ABC",
      "name": "AmerisourceBergen Corporation Common Stock",
      "lastsale": "$170.99",
      "netchange": "-0.45",
      "pctchange": "-0.262%",
      "marketCap": "34,584,127,566",
      "url": "/market-activity/stocks/abc"
  },
  {
      "symbol": "ED",
      "name": "Consolidated Edison, Inc. Common Stock",
      "lastsale": "$99.52",
      "netchange": "0.56",
      "pctchange": "0.566%",
      "marketCap": "34,477,495,131",
      "url": "/market-activity/stocks/ed"
  },
  {
      "symbol": "GWW",
      "name": "W.W. Grainger, Inc. Common Stock",
      "lastsale": "$684.62",
      "netchange": "0.25",
      "pctchange": "0.037%",
      "marketCap": "34,410,853,097",
      "url": "/market-activity/stocks/gww"
  },
  {
      "symbol": "EA",
      "name": "Electronic Arts Inc. Common Stock",
      "lastsale": "$125.47",
      "netchange": "0.15",
      "pctchange": "0.12%",
      "marketCap": "34,407,336,470",
      "url": "/market-activity/stocks/ea"
  },
  {
      "symbol": "MRVL",
      "name": "Marvell Technology, Inc. Common Stock",
      "lastsale": "$40.12",
      "netchange": "0.39",
      "pctchange": "0.982%",
      "marketCap": "34,378,828,000",
      "url": "/market-activity/stocks/mrvl"
  },
  {
      "symbol": "RMD",
      "name": "ResMed Inc. Common Stock",
      "lastsale": "$233.50",
      "netchange": "-2.62",
      "pctchange": "-1.11%",
      "marketCap": "34,303,347,936",
      "url": "/market-activity/stocks/rmd"
  },
  {
      "symbol": "GEHC",
      "name": "GE HealthCare Technologies Inc. Common Stock ",
      "lastsale": "$74.92",
      "netchange": "-0.07",
      "pctchange": "-0.093%",
      "marketCap": "34,064,418,521",
      "url": "/market-activity/stocks/gehc"
  },
  {
      "symbol": "MPLX",
      "name": "MPLX LP Common Units Representing Limited Partner Interests",
      "lastsale": "$33.98",
      "netchange": "0.01",
      "pctchange": "0.029%",
      "marketCap": "34,015,472,775",
      "url": "/market-activity/stocks/mplx"
  },
  {
      "symbol": "ODFL",
      "name": "Old Dominion Freight Line, Inc. Common Stock",
      "lastsale": "$308.07",
      "netchange": "-2.35",
      "pctchange": "-0.757%",
      "marketCap": "33,872,356,574",
      "url": "/market-activity/stocks/odfl"
  },
  {
      "symbol": "BBD",
      "name": "Banco Bradesco Sa American Depositary Shares",
      "lastsale": "$3.17",
      "netchange": "0.04",
      "pctchange": "1.278%",
      "marketCap": "33,683,952,197",
      "url": "/market-activity/stocks/bbd"
  },
  {
      "symbol": "GOLD",
      "name": "Barrick Gold Corporation Common Stock (BC)",
      "lastsale": "$19.18",
      "netchange": "0.15",
      "pctchange": "0.788%",
      "marketCap": "33,668,717,001",
      "url": "/market-activity/stocks/gold"
  },
  {
      "symbol": "AME",
      "name": "AMETEK, Inc.",
      "lastsale": "$145.42",
      "netchange": "1.66",
      "pctchange": "1.155%",
      "marketCap": "33,487,452,841",
      "url": "/market-activity/stocks/ame"
  },
  {
      "symbol": "SQ",
      "name": "Block, Inc. Class A Common Stock,",
      "lastsale": "$55.56",
      "netchange": "-1.75",
      "pctchange": "-3.054%",
      "marketCap": "33,448,569,283",
      "url": "/market-activity/stocks/sq"
  },
  {
      "symbol": "ORAN",
      "name": "Orange",
      "lastsale": "$12.57",
      "netchange": "-0.07",
      "pctchange": "-0.554%",
      "marketCap": "33,429,194,601",
      "url": "/market-activity/stocks/oran"
  },
  {
      "symbol": "COF",
      "name": "Capital One Financial Corporation Common Stock",
      "lastsale": "$86.34",
      "netchange": "-1.08",
      "pctchange": "-1.235%",
      "marketCap": "33,020,291,026",
      "url": "/market-activity/stocks/cof"
  },
  {
      "symbol": "ILMN",
      "name": "Illumina, Inc. Common Stock",
      "lastsale": "$208.60",
      "netchange": "0.39",
      "pctchange": "0.187%",
      "marketCap": "32,969,721,670",
      "url": "/market-activity/stocks/ilmn"
  },
  {
      "symbol": "LEN",
      "name": "Lennar Corporation Class A Common Stock",
      "lastsale": "$113.23",
      "netchange": "-0.77",
      "pctchange": "-0.675%",
      "marketCap": "32,768,843,865",
      "url": "/market-activity/stocks/len"
  },
  {
      "symbol": "DELL",
      "name": "Dell Technologies Inc. Class C Common Stock ",
      "lastsale": "$44.76",
      "netchange": "0.06",
      "pctchange": "0.134%",
      "marketCap": "32,728,729,220",
      "url": "/market-activity/stocks/dell"
  },
  {
      "symbol": "FIS",
      "name": "Fidelity National Information Services, Inc. Common Stock",
      "lastsale": "$55.07",
      "netchange": "0.07",
      "pctchange": "0.127%",
      "marketCap": "32,625,233,985",
      "url": "/market-activity/stocks/fis"
  },
  {
      "symbol": "PPG",
      "name": "PPG Industries, Inc. Common Stock",
      "lastsale": "$138.10",
      "netchange": "0.86",
      "pctchange": "0.627%",
      "marketCap": "32,510,955,815",
      "url": "/market-activity/stocks/ppg"
  },
  {
      "symbol": "VICI",
      "name": "VICI Properties Inc. Common Stock",
      "lastsale": "$31.90",
      "netchange": "-0.02",
      "pctchange": "-0.063%",
      "marketCap": "32,034,136,884",
      "url": "/market-activity/stocks/vici"
  },
  {
      "symbol": "PEG",
      "name": "Public Service Enterprise Group Incorporated Common Stock",
      "lastsale": "$63.81",
      "netchange": "0.37",
      "pctchange": "0.583%",
      "marketCap": "31,826,507,957",
      "url": "/market-activity/stocks/peg"
  },
  {
      "symbol": "BK",
      "name": "The Bank of New York Mellon Corporation Common Stock",
      "lastsale": "$40.15",
      "netchange": "-0.53",
      "pctchange": "-1.303%",
      "marketCap": "31,683,730,100",
      "url": "/market-activity/stocks/bk"
  },
  {
      "symbol": "CHT",
      "name": "Chunghwa Telecom Co., Ltd.",
      "lastsale": "$40.45",
      "netchange": "-0.47",
      "pctchange": "-1.149%",
      "marketCap": "31,378,871,254",
      "url": "/market-activity/stocks/cht"
  },
  {
      "symbol": "CTSH",
      "name": "Cognizant Technology Solutions Corporation Class A Common Stock",
      "lastsale": "$61.66",
      "netchange": "-0.22",
      "pctchange": "-0.356%",
      "marketCap": "31,290,366,139",
      "url": "/market-activity/stocks/ctsh"
  },
  {
      "symbol": "FAST",
      "name": "Fastenal Company Common Stock",
      "lastsale": "$54.745",
      "netchange": "-0.125",
      "pctchange": "-0.228%",
      "marketCap": "31,261,718,323",
      "url": "/market-activity/stocks/fast"
  },
  {
      "symbol": "ROK",
      "name": "Rockwell Automation, Inc. Common Stock",
      "lastsale": "$271.86",
      "netchange": "1.37",
      "pctchange": "0.506%",
      "marketCap": "31,204,756,041",
      "url": "/market-activity/stocks/rok"
  },
  {
      "symbol": "ALL",
      "name": "Allstate Corporation (The) Common Stock",
      "lastsale": "$118.26",
      "netchange": "-0.07",
      "pctchange": "-0.059%",
      "marketCap": "31,122,086,255",
      "url": "/market-activity/stocks/all"
  },
  {
      "symbol": "NWG",
      "name": "NatWest Group plc American Depositary Shares, (each representing two (2) Ordinary Shares)",
      "lastsale": "$6.52",
      "netchange": "-0.01",
      "pctchange": "-0.153%",
      "marketCap": "31,085,190,516",
      "url": "/market-activity/stocks/nwg"
  },
  {
      "symbol": "DVN",
      "name": "Devon Energy Corporation Common Stock",
      "lastsale": "$47.52",
      "netchange": "0.26",
      "pctchange": "0.55%",
      "marketCap": "31,078,080,000",
      "url": "/market-activity/stocks/dvn"
  },
  {
      "symbol": "VRSK",
      "name": "Verisk Analytics, Inc. Common Stock",
      "lastsale": "$215.01",
      "netchange": "-0.32",
      "pctchange": "-0.149%",
      "marketCap": "31,059,619,371",
      "url": "/market-activity/stocks/vrsk"
  },
  {
      "symbol": "CMI",
      "name": "Cummins Inc. Common Stock",
      "lastsale": "$217.25",
      "netchange": "0.30",
      "pctchange": "0.138%",
      "marketCap": "30,749,506,560",
      "url": "/market-activity/stocks/cmi"
  },
  {
      "symbol": "CRWD",
      "name": "CrowdStrike Holdings, Inc. Class A Common Stock",
      "lastsale": "$130.23",
      "netchange": "-1.92",
      "pctchange": "-1.453%",
      "marketCap": "30,716,566,767",
      "url": "/market-activity/stocks/crwd"
  },
  {
      "symbol": "LI",
      "name": "Li Auto Inc. American Depositary Shares",
      "lastsale": "$29.44",
      "netchange": "0.175",
      "pctchange": "0.598%",
      "marketCap": "30,684,987,777",
      "url": "/market-activity/stocks/li"
  },
  {
      "symbol": "CSGP",
      "name": "CoStar Group, Inc. Common Stock",
      "lastsale": "$75.37",
      "netchange": "0.40",
      "pctchange": "0.534%",
      "marketCap": "30,658,438,124",
      "url": "/market-activity/stocks/csgp"
  },
  {
      "symbol": "AMP",
      "name": "Ameriprise Financial, Inc. Common Stock",
      "lastsale": "$293.33",
      "netchange": "2.75",
      "pctchange": "0.946%",
      "marketCap": "30,623,652,000",
      "url": "/market-activity/stocks/amp"
  },
  {
      "symbol": "MTD",
      "name": "Mettler-Toledo International, Inc. Common Stock",
      "lastsale": "$1,383.55",
      "netchange": "35.47",
      "pctchange": "2.631%",
      "marketCap": "30,535,042,581",
      "url": "/market-activity/stocks/mtd"
  },
  {
      "symbol": "MBLY",
      "name": "Mobileye Global Inc. Class A Common Stock",
      "lastsale": "$38.02",
      "netchange": "-0.88",
      "pctchange": "-2.262%",
      "marketCap": "30,488,690,628",
      "url": "/market-activity/stocks/mbly"
  },
  {
      "symbol": "WBD",
      "name": "Warner Bros. Discovery, Inc. Series A Common Stock ",
      "lastsale": "$12.51",
      "netchange": "0.13",
      "pctchange": "1.05%",
      "marketCap": "30,469,355,925",
      "url": "/market-activity/stocks/wbd"
  },
  {
      "symbol": "TTD",
      "name": "The Trade Desk, Inc. Class A Common Stock",
      "lastsale": "$62.30",
      "netchange": "-2.23",
      "pctchange": "-3.456%",
      "marketCap": "30,407,149,503",
      "url": "/market-activity/stocks/ttd"
  },
  {
      "symbol": "CVE",
      "name": "Cenovus Energy Inc Common Stock",
      "lastsale": "$15.86",
      "netchange": "-0.01",
      "pctchange": "-0.063%",
      "marketCap": "30,255,852,443",
      "url": "/market-activity/stocks/cve"
  },
  {
      "symbol": "VOD",
      "name": "Vodafone Group Plc American Depositary Shares",
      "lastsale": "$11.16",
      "netchange": "-0.12",
      "pctchange": "-1.064%",
      "marketCap": "30,123,702,116",
      "url": "/market-activity/stocks/vod"
  },
  {
      "symbol": "FNV",
      "name": "Franco-Nevada Corporation",
      "lastsale": "$156.72",
      "netchange": "1.95",
      "pctchange": "1.26%",
      "marketCap": "30,073,422,534",
      "url": "/market-activity/stocks/fnv"
  },
  {
      "symbol": "CCEP",
      "name": "Coca-Cola Europacific Partners plc Ordinary Shares",
      "lastsale": "$65.50",
      "netchange": "-0.42",
      "pctchange": "-0.637%",
      "marketCap": "30,009,384,632",
      "url": "/market-activity/stocks/ccep"
  },
  {
      "symbol": "NTR",
      "name": "Nutrien Ltd. Common Shares",
      "lastsale": "$59.89",
      "netchange": "-1.85",
      "pctchange": "-2.996%",
      "marketCap": "29,933,779,489",
      "url": "/market-activity/stocks/ntr"
  },
  {
      "symbol": "BCS",
      "name": "Barclays PLC Common Stock",
      "lastsale": "$7.66",
      "netchange": "-0.02",
      "pctchange": "-0.26%",
      "marketCap": "29,773,855,895",
      "url": "/market-activity/stocks/bcs"
  },
  {
      "symbol": "WEC",
      "name": "WEC Energy Group, Inc. Common Stock",
      "lastsale": "$93.89",
      "netchange": "0.06",
      "pctchange": "0.064%",
      "marketCap": "29,616,148,116",
      "url": "/market-activity/stocks/wec"
  },
  {
      "symbol": "FERG",
      "name": "Ferguson plc Ordinary Shares",
      "lastsale": "$144.40",
      "netchange": "-0.83",
      "pctchange": "-0.572%",
      "marketCap": "29,611,744,401",
      "url": "/market-activity/stocks/ferg"
  },
  {
      "symbol": "TU",
      "name": "Telus Corporation Ordinary Shares",
      "lastsale": "$20.46",
      "netchange": "-0.06",
      "pctchange": "-0.292%",
      "marketCap": "29,456,371,502",
      "url": "/market-activity/stocks/tu"
  },
  {
      "symbol": "GFS",
      "name": "GlobalFoundries Inc. Ordinary Shares",
      "lastsale": "$53.72",
      "netchange": "-0.26",
      "pctchange": "-0.482%",
      "marketCap": "29,425,397,848",
      "url": "/market-activity/stocks/gfs"
  },
  {
      "symbol": "DD",
      "name": "DuPont de Nemours, Inc. Common Stock",
      "lastsale": "$63.77",
      "netchange": "-0.09",
      "pctchange": "-0.141%",
      "marketCap": "29,271,457,080",
      "url": "/market-activity/stocks/dd"
  },
  {
      "symbol": "AWK",
      "name": "American Water Works Company, Inc. Common Stock",
      "lastsale": "$149.77",
      "netchange": "0.35",
      "pctchange": "0.234%",
      "marketCap": "29,151,659,345",
      "url": "/market-activity/stocks/awk"
  },
  {
      "symbol": "LYB",
      "name": "LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)",
      "lastsale": "$89.26",
      "netchange": "0.49",
      "pctchange": "0.552%",
      "marketCap": "29,051,327,325",
      "url": "/market-activity/stocks/lyb"
  },
  {
      "symbol": "PRU",
      "name": "Prudential Financial, Inc. Common Stock",
      "lastsale": "$78.94",
      "netchange": "-1.57",
      "pctchange": "-1.95%",
      "marketCap": "28,968,938,848",
      "url": "/market-activity/stocks/pru"
  },
  {
      "symbol": "ZBH",
      "name": "Zimmer Biomet Holdings, Inc. Common Stock",
      "lastsale": "$136.75",
      "netchange": "0.06",
      "pctchange": "0.044%",
      "marketCap": "28,689,848,466",
      "url": "/market-activity/stocks/zbh"
  },
  {
      "symbol": "ACGL",
      "name": "Arch Capital Group Ltd. Common Stock",
      "lastsale": "$76.90",
      "netchange": "-0.41",
      "pctchange": "-0.53%",
      "marketCap": "28,646,783,847",
      "url": "/market-activity/stocks/acgl"
  },
  {
      "symbol": "OKE",
      "name": "ONEOK, Inc. Common Stock",
      "lastsale": "$63.72",
      "netchange": "0.89",
      "pctchange": "1.417%",
      "marketCap": "28,510,860,997",
      "url": "/market-activity/stocks/oke"
  },
  {
      "symbol": "CPNG",
      "name": "Coupang, Inc. Class A Common Stock",
      "lastsale": "$16.05",
      "netchange": "-0.34",
      "pctchange": "-2.074%",
      "marketCap": "28,476,608,881",
      "url": "/market-activity/stocks/cpng"
  },
  {
      "symbol": "HPQ",
      "name": "HP Inc. Common Stock",
      "lastsale": "$28.90",
      "netchange": "-0.49",
      "pctchange": "-1.667%",
      "marketCap": "28,475,981,570",
      "url": "/market-activity/stocks/hpq"
  },
  {
      "symbol": "BBDO",
      "name": "Banco Bradesco Sa American Depositary Shares (each representing one Common Share)",
      "lastsale": "$2.67",
      "netchange": "0.02",
      "pctchange": "0.755%",
      "marketCap": "28,371,025,983",
      "url": "/market-activity/stocks/bbdo"
  },
  {
      "symbol": "DLR",
      "name": "Digital Realty Trust, Inc. Common Stock",
      "lastsale": "$97.10",
      "netchange": "-0.67",
      "pctchange": "-0.685%",
      "marketCap": "28,284,830,822",
      "url": "/market-activity/stocks/dlr"
  },
  {
      "symbol": "EIX",
      "name": "Edison International Common Stock",
      "lastsale": "$73.68",
      "netchange": "0.47",
      "pctchange": "0.642%",
      "marketCap": "28,191,992,358",
      "url": "/market-activity/stocks/eix"
  },
  {
      "symbol": "SLF",
      "name": "Sun Life Financial Inc. Common Stock",
      "lastsale": "$47.95",
      "netchange": "0.17",
      "pctchange": "0.356%",
      "marketCap": "28,134,657,321",
      "url": "/market-activity/stocks/slf"
  },
  {
      "symbol": "DDOG",
      "name": "Datadog, Inc. Class A Common Stock",
      "lastsale": "$87.25",
      "netchange": "0.60",
      "pctchange": "0.692%",
      "marketCap": "28,082,600,322",
      "url": "/market-activity/stocks/ddog"
  },
  {
      "symbol": "BKR",
      "name": "Baker Hughes Company Class A Common Stock",
      "lastsale": "$27.66",
      "netchange": "0.30",
      "pctchange": "1.096%",
      "marketCap": "28,001,938,065",
      "url": "/market-activity/stocks/bkr"
  },
  {
      "symbol": "VEEV",
      "name": "Veeva Systems Inc. Class A Common Stock",
      "lastsale": "$174.22",
      "netchange": "0.94",
      "pctchange": "0.542%",
      "marketCap": "27,841,479,545",
      "url": "/market-activity/stocks/veev"
  },
  {
      "symbol": "SPOT",
      "name": "Spotify Technology S.A. Ordinary Shares",
      "lastsale": "$142.53",
      "netchange": "-4.53",
      "pctchange": "-3.08%",
      "marketCap": "27,567,903,030",
      "url": "/market-activity/stocks/spot"
  },
  {
      "symbol": "NU",
      "name": "Nu Holdings Ltd. Class A Ordinary Shares",
      "lastsale": "$5.81",
      "netchange": "-0.10",
      "pctchange": "-1.692%",
      "marketCap": "27,276,717,432",
      "url": "/market-activity/stocks/nu"
  },
  {
      "symbol": "NDAQ",
      "name": "Nasdaq, Inc. Common Stock",
      "lastsale": "$55.14",
      "netchange": "-0.08",
      "pctchange": "-0.145%",
      "marketCap": "27,240,997,375",
      "url": "/market-activity/stocks/ndaq"
  },
  {
      "symbol": "GMAB",
      "name": "Genmab A/S ADS",
      "lastsale": "$41.69",
      "netchange": "-0.27",
      "pctchange": "-0.643%",
      "marketCap": "27,191,266,920",
      "url": "/market-activity/stocks/gmab"
  },
  {
      "symbol": "GPN",
      "name": "Global Payments Inc. Common Stock",
      "lastsale": "$102.60",
      "netchange": "-0.93",
      "pctchange": "-0.898%",
      "marketCap": "27,064,280,158",
      "url": "/market-activity/stocks/gpn"
  },
  {
      "symbol": "ES",
      "name": "Eversource Energy (D/B/A) Common Stock",
      "lastsale": "$77.08",
      "netchange": "0.83",
      "pctchange": "1.089%",
      "marketCap": "26,875,728,175",
      "url": "/market-activity/stocks/es"
  },
  {
      "symbol": "WBA",
      "name": "Walgreens Boots Alliance, Inc. Common Stock",
      "lastsale": "$31.07",
      "netchange": "-0.10",
      "pctchange": "-0.321%",
      "marketCap": "26,807,063,020",
      "url": "/market-activity/stocks/wba"
  },
  {
      "symbol": "TLK",
      "name": "PT Telekomunikasi Indonesia, Tbk",
      "lastsale": "$27.03",
      "netchange": "-0.66",
      "pctchange": "-2.384%",
      "marketCap": "26,776,517,147",
      "url": "/market-activity/stocks/tlk"
  },
  {
      "symbol": "WST",
      "name": "West Pharmaceutical Services, Inc. Common Stock",
      "lastsale": "$360.02",
      "netchange": "-0.08",
      "pctchange": "-0.022%",
      "marketCap": "26,738,663,079",
      "url": "/market-activity/stocks/wst"
  },
  {
      "symbol": "IMO",
      "name": "Imperial Oil Limited Common Stock",
      "lastsale": "$45.20",
      "netchange": "-0.10",
      "pctchange": "-0.221%",
      "marketCap": "26,403,702,854",
      "url": "/market-activity/stocks/imo"
  },
  {
      "symbol": "TSCO",
      "name": "Tractor Supply Company Common Stock",
      "lastsale": "$239.92",
      "netchange": "-1.90",
      "pctchange": "-0.786%",
      "marketCap": "26,366,087,334",
      "url": "/market-activity/stocks/tsco"
  },
  {
      "symbol": "CEG",
      "name": "Constellation Energy Corporation Common Stock ",
      "lastsale": "$79.85",
      "netchange": "0.73",
      "pctchange": "0.923%",
      "marketCap": "26,153,805,176",
      "url": "/market-activity/stocks/ceg"
  },
  {
      "symbol": "VMC",
      "name": "Vulcan Materials Company (Holding Company) Common Stock",
      "lastsale": "$195.38",
      "netchange": "0.55",
      "pctchange": "0.282%",
      "marketCap": "25,996,658,099",
      "url": "/market-activity/stocks/vmc"
  },
  {
      "symbol": "AEM",
      "name": "Agnico Eagle Mines Limited Common Stock",
      "lastsale": "$56.75",
      "netchange": "-0.03",
      "pctchange": "-0.053%",
      "marketCap": "25,991,552,494",
      "url": "/market-activity/stocks/aem"
  },
  {
      "symbol": "KEYS",
      "name": "Keysight Technologies Inc. Common Stock",
      "lastsale": "$145.27",
      "netchange": "0.76",
      "pctchange": "0.526%",
      "marketCap": "25,878,212,871",
      "url": "/market-activity/stocks/keys"
  },
  {
      "symbol": "HAL",
      "name": "Halliburton Company Common Stock",
      "lastsale": "$28.61",
      "netchange": "0.12",
      "pctchange": "0.421%",
      "marketCap": "25,831,375,972",
      "url": "/market-activity/stocks/hal"
  },
  {
      "symbol": "DASH",
      "name": "DoorDash, Inc. Class A Common Stock",
      "lastsale": "$65.87",
      "netchange": "-1.35",
      "pctchange": "-2.008%",
      "marketCap": "25,826,025,634",
      "url": "/market-activity/stocks/dash"
  },
  {
      "symbol": "ANSS",
      "name": "ANSYS, Inc. Common Stock",
      "lastsale": "$297.49",
      "netchange": "1.48",
      "pctchange": "0.50%",
      "marketCap": "25,825,305,623",
      "url": "/market-activity/stocks/anss"
  },
  {
      "symbol": "RCI",
      "name": "Rogers Communication, Inc. Common Stock",
      "lastsale": "$48.80",
      "netchange": "-0.14",
      "pctchange": "-0.286%",
      "marketCap": "25,794,057,790",
      "url": "/market-activity/stocks/rci"
  },
  {
      "symbol": "ULTA",
      "name": "Ulta Beauty, Inc. Common Stock",
      "lastsale": "$513.88",
      "netchange": "1.77",
      "pctchange": "0.346%",
      "marketCap": "25,739,518,463",
      "url": "/market-activity/stocks/ulta"
  },
  {
      "symbol": "SBAC",
      "name": "SBA Communications Corporation Class A Common Stock",
      "lastsale": "$236.71",
      "netchange": "3.66",
      "pctchange": "1.57%",
      "marketCap": "25,640,843,573",
      "url": "/market-activity/stocks/sbac"
  },
  {
      "symbol": "ALNY",
      "name": "Alnylam Pharmaceuticals, Inc. Common Stock",
      "lastsale": "$205.36",
      "netchange": "-0.73",
      "pctchange": "-0.354%",
      "marketCap": "25,510,545,353",
      "url": "/market-activity/stocks/alny"
  },
  {
      "symbol": "GLW",
      "name": "Corning Incorporated Common Stock",
      "lastsale": "$30.99",
      "netchange": "0.01",
      "pctchange": "0.032%",
      "marketCap": "25,504,770,000",
      "url": "/market-activity/stocks/glw"
  },
  {
      "symbol": "WIT",
      "name": "Wipro Limited Common Stock",
      "lastsale": "$4.64",
      "netchange": "-0.02",
      "pctchange": "-0.429%",
      "marketCap": "25,415,879,272",
      "url": "/market-activity/stocks/wit"
  },
  {
      "symbol": "YUMC",
      "name": "Yum China Holdings, Inc. Common Stock",
      "lastsale": "$60.73",
      "netchange": "-1.18",
      "pctchange": "-1.906%",
      "marketCap": "25,381,332,715",
      "url": "/market-activity/stocks/yumc"
  },
  {
      "symbol": "BNTX",
      "name": "BioNTech SE American Depositary Share",
      "lastsale": "$105.24",
      "netchange": "2.66",
      "pctchange": "2.593%",
      "marketCap": "25,362,208,350",
      "url": "/market-activity/stocks/bntx"
  },
  {
      "symbol": "HZNP",
      "name": "Horizon Therapeutics Public Limited Company Ordinary Shares",
      "lastsale": "$111.00",
      "netchange": "0.97",
      "pctchange": "0.882%",
      "marketCap": "25,357,730,664",
      "url": "/market-activity/stocks/hznp"
  },
  {
      "symbol": "PWR",
      "name": "Quanta Services, Inc. Common Stock",
      "lastsale": "$173.85",
      "netchange": "2.26",
      "pctchange": "1.317%",
      "marketCap": "25,236,093,642",
      "url": "/market-activity/stocks/pwr"
  },
  {
      "symbol": "AVB",
      "name": "AvalonBay Communities, Inc. Common Stock",
      "lastsale": "$180.18",
      "netchange": "-0.18",
      "pctchange": "-0.10%",
      "marketCap": "25,226,975,854",
      "url": "/market-activity/stocks/avb"
  },
  {
      "symbol": "APTV",
      "name": "Aptiv PLC Ordinary Shares",
      "lastsale": "$92.69",
      "netchange": "-1.60",
      "pctchange": "-1.697%",
      "marketCap": "25,123,340,776",
      "url": "/market-activity/stocks/aptv"
  },
  {
      "symbol": "EFX",
      "name": "Equifax, Inc. Common Stock",
      "lastsale": "$203.95",
      "netchange": "0.28",
      "pctchange": "0.137%",
      "marketCap": "25,013,193,628",
      "url": "/market-activity/stocks/efx"
  },
  {
      "symbol": "MLM",
      "name": "Martin Marietta Materials, Inc. Common Stock",
      "lastsale": "$402.57",
      "netchange": "2.00",
      "pctchange": "0.499%",
      "marketCap": "24,958,119,005",
      "url": "/market-activity/stocks/mlm"
  },
  {
      "symbol": "BGNE",
      "name": "BeiGene, Ltd. American Depositary Shares",
      "lastsale": "$238.37",
      "netchange": "-6.23",
      "pctchange": "-2.547%",
      "marketCap": "24,901,249,824",
      "url": "/market-activity/stocks/bgne"
  },
  {
      "symbol": "FSLR",
      "name": "First Solar, Inc. Common Stock",
      "lastsale": "$231.69",
      "netchange": "48.50",
      "pctchange": "26.475%",
      "marketCap": "24,749,752,058",
      "url": "/market-activity/stocks/fslr"
  },
  {
      "symbol": "IT",
      "name": "Gartner, Inc. Common Stock",
      "lastsale": "$310.63",
      "netchange": "4.78",
      "pctchange": "1.563%",
      "marketCap": "24,591,630,300",
      "url": "/market-activity/stocks/it"
  },
  {
      "symbol": "GIB",
      "name": "CGI Inc. Common Stock",
      "lastsale": "$102.66",
      "netchange": "0.10",
      "pctchange": "0.098%",
      "marketCap": "24,476,625,806",
      "url": "/market-activity/stocks/gib"
  },
  {
      "symbol": "WTW",
      "name": "Willis Towers Watson Public Limited Company Ordinary Shares",
      "lastsale": "$229.30",
      "netchange": "0.96",
      "pctchange": "0.42%",
      "marketCap": "24,412,630,411",
      "url": "/market-activity/stocks/wtw"
  },
  {
      "symbol": "K",
      "name": "Kellogg Company Common Stock",
      "lastsale": "$70.81",
      "netchange": "0.11",
      "pctchange": "0.156%",
      "marketCap": "24,264,337,508",
      "url": "/market-activity/stocks/k"
  },
  {
      "symbol": "MKC",
      "name": "McCormick & Company, Incorporated Common Stock",
      "lastsale": "$90.28",
      "netchange": "0.77",
      "pctchange": "0.86%",
      "marketCap": "24,215,961,307",
      "url": "/market-activity/stocks/mkc"
  },
  {
      "symbol": "DFS",
      "name": "Discover Financial Services Common Stock",
      "lastsale": "$95.23",
      "netchange": "-0.60",
      "pctchange": "-0.626%",
      "marketCap": "24,183,280,723",
      "url": "/market-activity/stocks/dfs"
  },
  {
      "symbol": "EBAY",
      "name": "eBay Inc. Common Stock",
      "lastsale": "$44.91",
      "netchange": "-0.87",
      "pctchange": "-1.90%",
      "marketCap": "24,111,293,465",
      "url": "/market-activity/stocks/ebay"
  },
  {
      "symbol": "RBLX",
      "name": "Roblox Corporation Class A Common Stock",
      "lastsale": "$39.36",
      "netchange": "-0.52",
      "pctchange": "-1.304%",
      "marketCap": "24,027,004,559",
      "url": "/market-activity/stocks/rblx"
  },
  {
      "symbol": "GPC",
      "name": "Genuine Parts Company Common Stock",
      "lastsale": "$170.65",
      "netchange": "-0.99",
      "pctchange": "-0.577%",
      "marketCap": "23,978,993,966",
      "url": "/market-activity/stocks/gpc"
  },
  {
      "symbol": "TEF",
      "name": "Telefonica SA Common Stock",
      "lastsale": "$4.16",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "23,921,905,883",
      "url": "/market-activity/stocks/tef"
  },
  {
      "symbol": "EQR",
      "name": "Equity Residential Common Shares of Beneficial Interest",
      "lastsale": "$62.80",
      "netchange": "-0.11",
      "pctchange": "-0.175%",
      "marketCap": "23,794,808,279",
      "url": "/market-activity/stocks/eqr"
  },
  {
      "symbol": "TROW",
      "name": "T. Rowe Price Group, Inc. Common Stock",
      "lastsale": "$105.31",
      "netchange": "-0.74",
      "pctchange": "-0.698%",
      "marketCap": "23,643,538,274",
      "url": "/market-activity/stocks/trow"
  },
  {
      "symbol": "CHD",
      "name": "Church & Dwight Company, Inc. Common Stock",
      "lastsale": "$96.86",
      "netchange": "0.48",
      "pctchange": "0.498%",
      "marketCap": "23,639,501,080",
      "url": "/market-activity/stocks/chd"
  },
  {
      "symbol": "IR",
      "name": "Ingersoll Rand Inc. Common Stock",
      "lastsale": "$58.25",
      "netchange": "0.30",
      "pctchange": "0.518%",
      "marketCap": "23,588,727,484",
      "url": "/market-activity/stocks/ir"
  },
  {
      "symbol": "DTE",
      "name": "DTE Energy Company Common Stock",
      "lastsale": "$113.45",
      "netchange": "0.39",
      "pctchange": "0.345%",
      "marketCap": "23,382,993,329",
      "url": "/market-activity/stocks/dte"
  },
  {
      "symbol": "FANG",
      "name": "Diamondback Energy, Inc. Common Stock",
      "lastsale": "$128.00",
      "netchange": "0.34",
      "pctchange": "0.266%",
      "marketCap": "23,245,411,968",
      "url": "/market-activity/stocks/fang"
  },
  {
      "symbol": "VRSN",
      "name": "VeriSign, Inc. Common Stock",
      "lastsale": "$222.73",
      "netchange": "2.26",
      "pctchange": "1.025%",
      "marketCap": "23,236,965,417",
      "url": "/market-activity/stocks/vrsn"
  },
  {
      "symbol": "ZTO",
      "name": "ZTO Express (Cayman) Inc. American Depositary Shares, each representing one Class A ordinary share.",
      "lastsale": "$28.36",
      "netchange": "-0.36",
      "pctchange": "-1.253%",
      "marketCap": "23,088,213,597",
      "url": "/market-activity/stocks/zto"
  },
  {
      "symbol": "AEE",
      "name": "Ameren Corporation Common Stock",
      "lastsale": "$87.72",
      "netchange": "-1.12",
      "pctchange": "-1.261%",
      "marketCap": "23,024,345,860",
      "url": "/market-activity/stocks/aee"
  },
  {
      "symbol": "PODD",
      "name": "Insulet Corporation Common Stock",
      "lastsale": "$330.23",
      "netchange": "8.96",
      "pctchange": "2.789%",
      "marketCap": "23,015,041,694",
      "url": "/market-activity/stocks/podd"
  },
  {
      "symbol": "URI",
      "name": "United Rentals, Inc. Common Stock",
      "lastsale": "$331.66",
      "netchange": "-2.42",
      "pctchange": "-0.724%",
      "marketCap": "23,012,242,035",
      "url": "/market-activity/stocks/uri"
  },
  {
      "symbol": "CDW",
      "name": "CDW Corporation Common Stock",
      "lastsale": "$170.24",
      "netchange": "2.74",
      "pctchange": "1.636%",
      "marketCap": "23,005,603,201",
      "url": "/market-activity/stocks/cdw"
  },
  {
      "symbol": "ALB",
      "name": "Albemarle Corporation Common Stock",
      "lastsale": "$195.79",
      "netchange": "-2.73",
      "pctchange": "-1.375%",
      "marketCap": "22,966,047,960",
      "url": "/market-activity/stocks/alb"
  },
  {
      "symbol": "ENPH",
      "name": "Enphase Energy, Inc. Common Stock",
      "lastsale": "$167.55",
      "netchange": "6.76",
      "pctchange": "4.204%",
      "marketCap": "22,961,676,291",
      "url": "/market-activity/stocks/enph"
  },
  {
      "symbol": "HUBS",
      "name": "HubSpot, Inc. Common Stock",
      "lastsale": "$462.17",
      "netchange": "0.70",
      "pctchange": "0.152%",
      "marketCap": "22,916,244,675",
      "url": "/market-activity/stocks/hubs"
  },
  {
      "symbol": "FTV",
      "name": "Fortive Corporation Common Stock ",
      "lastsale": "$64.51",
      "netchange": "0.37",
      "pctchange": "0.577%",
      "marketCap": "22,804,907,651",
      "url": "/market-activity/stocks/ftv"
  },
  {
      "symbol": "WPM",
      "name": "Wheaton Precious Metals Corp Common Shares (Canada)",
      "lastsale": "$50.35",
      "netchange": "0.13",
      "pctchange": "0.259%",
      "marketCap": "22,784,355,466",
      "url": "/market-activity/stocks/wpm"
  },
  {
      "symbol": "ETR",
      "name": "Entergy Corporation Common Stock",
      "lastsale": "$107.14",
      "netchange": "0.83",
      "pctchange": "0.781%",
      "marketCap": "22,723,442,168",
      "url": "/market-activity/stocks/etr"
  },
  {
      "symbol": "HEI",
      "name": "Heico Corporation Common Stock",
      "lastsale": "$165.96",
      "netchange": "-2.38",
      "pctchange": "-1.414%",
      "marketCap": "22,718,523,464",
      "url": "/market-activity/stocks/hei"
  },
  {
      "symbol": "CBRE",
      "name": "CBRE Group Inc Common Stock Class A",
      "lastsale": "$73.10",
      "netchange": "-0.54",
      "pctchange": "-0.733%",
      "marketCap": "22,718,439,933",
      "url": "/market-activity/stocks/cbre"
  },
  {
      "symbol": "QSR",
      "name": "Restaurant Brands International Inc. Common Shares",
      "lastsale": "$72.88",
      "netchange": "0.04",
      "pctchange": "0.055%",
      "marketCap": "22,676,230,838",
      "url": "/market-activity/stocks/qsr"
  },
  {
      "symbol": "FE",
      "name": "FirstEnergy Corp. Common Stock",
      "lastsale": "$39.46",
      "netchange": "0.07",
      "pctchange": "0.178%",
      "marketCap": "22,604,143,364",
      "url": "/market-activity/stocks/fe"
  },
  {
      "symbol": "RYAAY",
      "name": "Ryanair Holdings plc American Depositary Shares",
      "lastsale": "$99.12",
      "netchange": "-0.68",
      "pctchange": "-0.681%",
      "marketCap": "22,573,083,784",
      "url": "/market-activity/stocks/ryaay"
  },
  {
      "symbol": "ALGN",
      "name": "Align Technology, Inc. Common Stock",
      "lastsale": "$293.71",
      "netchange": "-2.37",
      "pctchange": "-0.80%",
      "marketCap": "22,539,015,215",
      "url": "/market-activity/stocks/algn"
  },
  {
      "symbol": "NOK",
      "name": "Nokia Corporation Sponsored American Depositary Shares",
      "lastsale": "$4.03",
      "netchange": "0.03",
      "pctchange": "0.75%",
      "marketCap": "22,469,994,317",
      "url": "/market-activity/stocks/nok"
  },
  {
      "symbol": "ARGX",
      "name": "argenx SE American Depositary Shares",
      "lastsale": "$403.48",
      "netchange": "-3.37",
      "pctchange": "-0.828%",
      "marketCap": "22,465,003,016",
      "url": "/market-activity/stocks/argx"
  },
  {
      "symbol": "TECK",
      "name": "Teck Resources Ltd Ordinary Shares",
      "lastsale": "$43.53",
      "netchange": "0.54",
      "pctchange": "1.256%",
      "marketCap": "22,395,797,017",
      "url": "/market-activity/stocks/teck"
  },
  {
      "symbol": "STT",
      "name": "State Street Corporation Common Stock",
      "lastsale": "$66.54",
      "netchange": "-1.19",
      "pctchange": "-1.757%",
      "marketCap": "22,388,119,731",
      "url": "/market-activity/stocks/stt"
  },
  {
      "symbol": "CQP",
      "name": "Cheniere Energy Partners, LP Cheniere Energy Partners, LP Common Units",
      "lastsale": "$45.85",
      "netchange": "-0.09",
      "pctchange": "-0.196%",
      "marketCap": "22,192,918,690",
      "url": "/market-activity/stocks/cqp"
  },
  {
      "symbol": "FTS",
      "name": "Fortis Inc. Common Shares",
      "lastsale": "$45.42",
      "netchange": "0.12",
      "pctchange": "0.265%",
      "marketCap": "21,999,528,142",
      "url": "/market-activity/stocks/fts"
  },
  {
      "symbol": "HRL",
      "name": "Hormel Foods Corporation Common Stock",
      "lastsale": "$40.24",
      "netchange": "-0.05",
      "pctchange": "-0.124%",
      "marketCap": "21,992,484,822",
      "url": "/market-activity/stocks/hrl"
  },
  {
      "symbol": "WY",
      "name": "Weyerhaeuser Company Common Stock",
      "lastsale": "$29.83",
      "netchange": "0.08",
      "pctchange": "0.269%",
      "marketCap": "21,862,167,763",
      "url": "/market-activity/stocks/wy"
  },
  {
      "symbol": "CAH",
      "name": "Cardinal Health, Inc. Common Stock",
      "lastsale": "$84.77",
      "netchange": "-0.07",
      "pctchange": "-0.083%",
      "marketCap": "21,840,063,031",
      "url": "/market-activity/stocks/cah"
  },
  {
      "symbol": "HIG",
      "name": "Hartford Financial Services Group, Inc. (The) Common Stock",
      "lastsale": "$69.52",
      "netchange": "-0.35",
      "pctchange": "-0.501%",
      "marketCap": "21,717,581,312",
      "url": "/market-activity/stocks/hig"
  },
  {
      "symbol": "BAX",
      "name": "Baxter International Inc. Common Stock",
      "lastsale": "$42.47",
      "netchange": "-0.91",
      "pctchange": "-2.098%",
      "marketCap": "21,469,568,308",
      "url": "/market-activity/stocks/bax"
  },
  {
      "symbol": "DAL",
      "name": "Delta Air Lines, Inc. Common Stock",
      "lastsale": "$33.23",
      "netchange": "0.01",
      "pctchange": "0.03%",
      "marketCap": "21,357,473,382",
      "url": "/market-activity/stocks/dal"
  },
  {
      "symbol": "TCOM",
      "name": "Trip.com Group Limited American Depositary Shares",
      "lastsale": "$33.05",
      "netchange": "-0.37",
      "pctchange": "-1.107%",
      "marketCap": "21,355,248,246",
      "url": "/market-activity/stocks/tcom"
  },
  {
      "symbol": "DB",
      "name": "Deutsche Bank AG Common Stock",
      "lastsale": "$10.46",
      "netchange": "-0.05",
      "pctchange": "-0.476%",
      "marketCap": "21,315,822,226",
      "url": "/market-activity/stocks/db"
  },
  {
      "symbol": "IFF",
      "name": "International Flavors & Fragrances, Inc. Common Stock",
      "lastsale": "$83.16",
      "netchange": "-2.20",
      "pctchange": "-2.577%",
      "marketCap": "21,211,411,304",
      "url": "/market-activity/stocks/iff"
  },
  {
      "symbol": "TTWO",
      "name": "Take-Two Interactive Software, Inc. Common Stock",
      "lastsale": "$125.26",
      "netchange": "-0.31",
      "pctchange": "-0.247%",
      "marketCap": "21,128,171,503",
      "url": "/market-activity/stocks/ttwo"
  },
  {
      "symbol": "ROL",
      "name": "Rollins, Inc. Common Stock",
      "lastsale": "$42.58",
      "netchange": "0.18",
      "pctchange": "0.425%",
      "marketCap": "20,981,049,824",
      "url": "/market-activity/stocks/rol"
  },
  {
      "symbol": "PPL",
      "name": "PPL Corporation Common Stock",
      "lastsale": "$28.45",
      "netchange": "0.06",
      "pctchange": "0.211%",
      "marketCap": "20,969,234,722",
      "url": "/market-activity/stocks/ppl"
  },
  {
      "symbol": "STE",
      "name": "STERIS plc (Ireland) Ordinary Shares",
      "lastsale": "$210.85",
      "netchange": "2.85",
      "pctchange": "1.37%",
      "marketCap": "20,934,124,807",
      "url": "/market-activity/stocks/ste"
  },
  {
      "symbol": "CLX",
      "name": "Clorox Company (The) Common Stock",
      "lastsale": "$169.13",
      "netchange": "-0.12",
      "pctchange": "-0.071%",
      "marketCap": "20,891,771,073",
      "url": "/market-activity/stocks/clx"
  },
  {
      "symbol": "ELP",
      "name": "Companhia Paranaense de Energia (COPEL) American Depositary Shares (each representing one Unit consisting one Common Share and four non-voting Class B Preferred Shares)",
      "lastsale": "$7.63",
      "netchange": "-0.10",
      "pctchange": "-1.294%",
      "marketCap": "20,879,905,113",
      "url": "/market-activity/stocks/elp"
  },
  {
      "symbol": "INVH",
      "name": "Invitation Homes Inc. Common Stock",
      "lastsale": "$34.01",
      "netchange": "-0.02",
      "pctchange": "-0.059%",
      "marketCap": "20,809,377,748",
      "url": "/market-activity/stocks/invh"
  },
  {
      "symbol": "MT",
      "name": "Arcelor Mittal NY Registry Shares NEW",
      "lastsale": "$26.37",
      "netchange": "0.26",
      "pctchange": "0.996%",
      "marketCap": "20,742,919,913",
      "url": "/market-activity/stocks/mt"
  },
  {
      "symbol": "EXR",
      "name": "Extra Space Storage Inc Common Stock",
      "lastsale": "$153.54",
      "netchange": "0.97",
      "pctchange": "0.636%",
      "marketCap": "20,729,017,771",
      "url": "/market-activity/stocks/exr"
  },
  {
      "symbol": "ARE",
      "name": "Alexandria Real Estate Equities, Inc. Common Stock",
      "lastsale": "$119.46",
      "netchange": "-0.95",
      "pctchange": "-0.789%",
      "marketCap": "20,668,207,404",
      "url": "/market-activity/stocks/are"
  },
  {
      "symbol": "PKX",
      "name": "POSCO Holdings Inc. American Depositary Shares (Each representing 1/4th of a share of Common Stock)",
      "lastsale": "$68.04",
      "netchange": "-0.23",
      "pctchange": "-0.337%",
      "marketCap": "20,650,468,497",
      "url": "/market-activity/stocks/pkx"
  },
  {
      "symbol": "BEKE",
      "name": "KE Holdings Inc American Depositary Shares (each representing three Class A Ordinary Shares)",
      "lastsale": "$16.45",
      "netchange": "-0.21",
      "pctchange": "-1.261%",
      "marketCap": "20,532,326,160",
      "url": "/market-activity/stocks/beke"
  },
  {
      "symbol": "SQM",
      "name": "Sociedad Quimica y Minera S.A. Common Stock",
      "lastsale": "$71.68",
      "netchange": "0.38",
      "pctchange": "0.533%",
      "marketCap": "20,474,518,077",
      "url": "/market-activity/stocks/sqm"
  },
  {
      "symbol": "HOLX",
      "name": "Hologic, Inc. Common Stock",
      "lastsale": "$82.77",
      "netchange": "0.92",
      "pctchange": "1.124%",
      "marketCap": "20,407,276,732",
      "url": "/market-activity/stocks/holx"
  },
  {
      "symbol": "RTO",
      "name": "Rentokil Initial plc American Depositary Shares (each representing five (5) Ordinary Shares)",
      "lastsale": "$40.14",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "20,230,880,197",
      "url": "/market-activity/stocks/rto"
  },
  {
      "symbol": "GRMN",
      "name": "Garmin Ltd. Common Stock (Switzerland)",
      "lastsale": "$103.77",
      "netchange": "0.21",
      "pctchange": "0.203%",
      "marketCap": "19,863,196,086",
      "url": "/market-activity/stocks/grmn"
  },
  {
      "symbol": "PLTR",
      "name": "Palantir Technologies Inc. Class A Common Stock",
      "lastsale": "$9.50",
      "netchange": "-0.38",
      "pctchange": "-3.846%",
      "marketCap": "19,761,851,978",
      "url": "/market-activity/stocks/pltr"
  },
  {
      "symbol": "IX",
      "name": "Orix Corp Ads Common Stock",
      "lastsale": "$85.12",
      "netchange": "-1.40",
      "pctchange": "-1.618%",
      "marketCap": "19,572,135,466",
      "url": "/market-activity/stocks/ix"
  },
  {
      "symbol": "UMC",
      "name": "United Microelectronics Corporation (NEW) Common Stock",
      "lastsale": "$7.82",
      "netchange": "-0.03",
      "pctchange": "-0.382%",
      "marketCap": "19,557,820,000",
      "url": "/market-activity/stocks/umc"
  },
  {
      "symbol": "LH",
      "name": "Laboratory Corporation of America Holdings Common Stock",
      "lastsale": "$220.77",
      "netchange": "0.69",
      "pctchange": "0.314%",
      "marketCap": "19,538,352,745",
      "url": "/market-activity/stocks/lh"
  },
  {
      "symbol": "DOV",
      "name": "Dover Corporation Common Stock",
      "lastsale": "$138.76",
      "netchange": "-0.55",
      "pctchange": "-0.395%",
      "marketCap": "19,394,581,222",
      "url": "/market-activity/stocks/dov"
  },
  {
      "symbol": "TDY",
      "name": "Teledyne Technologies Incorporated Common Stock",
      "lastsale": "$410.98",
      "netchange": "-2.66",
      "pctchange": "-0.643%",
      "marketCap": "19,317,226,361",
      "url": "/market-activity/stocks/tdy"
  },
  {
      "symbol": "COO",
      "name": "The Cooper Companies, Inc. Common Stock",
      "lastsale": "$390.16",
      "netchange": "-1.93",
      "pctchange": "-0.492%",
      "marketCap": "19,295,621,866",
      "url": "/market-activity/stocks/coo"
  },
  {
      "symbol": "RCL",
      "name": "D/B/A Royal Caribbean Cruises Ltd. Common Stock",
      "lastsale": "$75.11",
      "netchange": "-1.24",
      "pctchange": "-1.624%",
      "marketCap": "19,208,023,685",
      "url": "/market-activity/stocks/rcl"
  },
  {
      "symbol": "EC",
      "name": "Ecopetrol S.A. American Depositary Shares",
      "lastsale": "$9.31",
      "netchange": "0.18",
      "pctchange": "1.972%",
      "marketCap": "19,139,821,374",
      "url": "/market-activity/stocks/ec"
  },
  {
      "symbol": "CTRA",
      "name": "Coterra Energy Inc. Common Stock",
      "lastsale": "$24.80",
      "netchange": "0.44",
      "pctchange": "1.806%",
      "marketCap": "18,984,488,883",
      "url": "/market-activity/stocks/ctra"
  },
  {
      "symbol": "CNP",
      "name": "CenterPoint Energy, Inc (Holding Co) Common Stock",
      "lastsale": "$30.05",
      "netchange": "0.14",
      "pctchange": "0.468%",
      "marketCap": "18,961,630,474",
      "url": "/market-activity/stocks/cnp"
  },
  {
      "symbol": "XYL",
      "name": "Xylem Inc. Common Stock New",
      "lastsale": "$104.75",
      "netchange": "-0.37",
      "pctchange": "-0.352%",
      "marketCap": "18,919,714,760",
      "url": "/market-activity/stocks/xyl"
  },
  {
      "symbol": "MPWR",
      "name": "Monolithic Power Systems, Inc. Common Stock",
      "lastsale": "$399.19",
      "netchange": "0.58",
      "pctchange": "0.146%",
      "marketCap": "18,883,682,950",
      "url": "/market-activity/stocks/mpwr"
  },
  {
      "symbol": "NVR",
      "name": "NVR, Inc. Common Stock",
      "lastsale": "$5,822.41",
      "netchange": "-15.42",
      "pctchange": "-0.264%",
      "marketCap": "18,874,797,618",
      "url": "/market-activity/stocks/nvr"
  },
  {
      "symbol": "CNHI",
      "name": "CNH Industrial N.V. Common Shares",
      "lastsale": "$14.07",
      "netchange": "0.23",
      "pctchange": "1.662%",
      "marketCap": "18,833,744,439",
      "url": "/market-activity/stocks/cnhi"
  },
  {
      "symbol": "MTB",
      "name": "M&T Bank Corporation Common Stock",
      "lastsale": "$111.43",
      "netchange": "-1.82",
      "pctchange": "-1.607%",
      "marketCap": "18,725,151,612",
      "url": "/market-activity/stocks/mtb"
  },
  {
      "symbol": "ZM",
      "name": "Zoom Video Communications, Inc. Class A Common Stock",
      "lastsale": "$63.69",
      "netchange": "-0.76",
      "pctchange": "-1.179%",
      "marketCap": "18,714,439,424",
      "url": "/market-activity/stocks/zm"
  },
  {
      "symbol": "FICO",
      "name": "Fair Isaac Corproation Common Stock",
      "lastsale": "$743.83",
      "netchange": "-5.46",
      "pctchange": "-0.729%",
      "marketCap": "18,710,877,776",
      "url": "/market-activity/stocks/fico"
  },
  {
      "symbol": "KOF",
      "name": "Coca Cola Femsa S.A.B. de C.V.  American Depositary Shares, each representing 10 Units (each Unit consists of 3 Series B Shares and 5 Series L Shares)",
      "lastsale": "$88.73",
      "netchange": "-1.89",
      "pctchange": "-2.086%",
      "marketCap": "18,640,684,643",
      "url": "/market-activity/stocks/kof"
  },
  {
      "symbol": "BRO",
      "name": "Brown & Brown, Inc. Common Stock",
      "lastsale": "$65.68",
      "netchange": "0.02",
      "pctchange": "0.03%",
      "marketCap": "18,626,848,000",
      "url": "/market-activity/stocks/bro"
  },
  {
      "symbol": "VTR",
      "name": "Ventas, Inc. Common Stock",
      "lastsale": "$46.49",
      "netchange": "-0.21",
      "pctchange": "-0.45%",
      "marketCap": "18,598,487,076",
      "url": "/market-activity/stocks/vtr"
  },
  {
      "symbol": "OMC",
      "name": "Omnicom Group Inc. Common Stock",
      "lastsale": "$92.84",
      "netchange": "1.71",
      "pctchange": "1.876%",
      "marketCap": "18,522,949,854",
      "url": "/market-activity/stocks/omc"
  },
  {
      "symbol": "MDB",
      "name": "MongoDB, Inc. Class A Common Stock",
      "lastsale": "$263.60",
      "netchange": "-0.49",
      "pctchange": "-0.186%",
      "marketCap": "18,461,804,602",
      "url": "/market-activity/stocks/mdb"
  },
  {
      "symbol": "MAA",
      "name": "Mid-America Apartment Communities, Inc. Common Stock",
      "lastsale": "$153.39",
      "netchange": "0.26",
      "pctchange": "0.17%",
      "marketCap": "18,369,442,632",
      "url": "/market-activity/stocks/maa"
  },
  {
      "symbol": "MKL",
      "name": "Markel Corporation Common Stock",
      "lastsale": "$1,369.02",
      "netchange": "-4.85",
      "pctchange": "-0.353%",
      "marketCap": "18,320,384,446",
      "url": "/market-activity/stocks/mkl"
  },
  {
      "symbol": "JBHT",
      "name": "J.B. Hunt Transport Services, Inc. Common Stock",
      "lastsale": "$176.01",
      "netchange": "-0.33",
      "pctchange": "-0.187%",
      "marketCap": "18,243,084,480",
      "url": "/market-activity/stocks/jbht"
  },
  {
      "symbol": "BR",
      "name": "Broadridge Financial Solutions, Inc. Common Stock",
      "lastsale": "$154.57",
      "netchange": "-0.13",
      "pctchange": "-0.084%",
      "marketCap": "18,191,809,483",
      "url": "/market-activity/stocks/br"
  },
  {
      "symbol": "RJF",
      "name": "Raymond James Financial, Inc. Common Stock",
      "lastsale": "$84.41",
      "netchange": "-0.63",
      "pctchange": "-0.741%",
      "marketCap": "18,177,822,732",
      "url": "/market-activity/stocks/rjf"
  },
  {
      "symbol": "HWM",
      "name": "Howmet Aerospace Inc. Common Stock",
      "lastsale": "$43.96",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "18,102,913,555",
      "url": "/market-activity/stocks/hwm"
  },
  {
      "symbol": "LYV",
      "name": "Live Nation Entertainment, Inc. Common Stock",
      "lastsale": "$78.15",
      "netchange": "0.39",
      "pctchange": "0.502%",
      "marketCap": "18,098,856,500",
      "url": "/market-activity/stocks/lyv"
  },
  {
      "symbol": "PHG",
      "name": "Koninklijke Philips N.V. NY Registry Shares",
      "lastsale": "$20.48",
      "netchange": "-0.25",
      "pctchange": "-1.206%",
      "marketCap": "18,053,918,720",
      "url": "/market-activity/stocks/phg"
  },
  {
      "symbol": "CMS",
      "name": "CMS Energy Corporation Common Stock",
      "lastsale": "$61.72",
      "netchange": "0.17",
      "pctchange": "0.276%",
      "marketCap": "18,000,737,061",
      "url": "/market-activity/stocks/cms"
  },
  {
      "symbol": "DRI",
      "name": "Darden Restaurants, Inc. Common Stock",
      "lastsale": "$148.55",
      "netchange": "1.54",
      "pctchange": "1.048%",
      "marketCap": "17,964,070,540",
      "url": "/market-activity/stocks/dri"
  },
  {
      "symbol": "FCNCA",
      "name": "First Citizens BancShares, Inc. Class A Common Stock",
      "lastsale": "$1,236.18",
      "netchange": "2.29",
      "pctchange": "0.186%",
      "marketCap": "17,934,435,159",
      "url": "/market-activity/stocks/fcnca"
  },
  {
      "symbol": "HPE",
      "name": "Hewlett Packard Enterprise Company Common Stock",
      "lastsale": "$13.83",
      "netchange": "0.05",
      "pctchange": "0.363%",
      "marketCap": "17,921,868,381",
      "url": "/market-activity/stocks/hpe"
  },
  {
      "symbol": "PBA",
      "name": "Pembina Pipeline Corp. Ordinary Shares (Canada)",
      "lastsale": "$32.24",
      "netchange": "0.27",
      "pctchange": "0.845%",
      "marketCap": "17,743,738,648",
      "url": "/market-activity/stocks/pba"
  },
  {
      "symbol": "BALL",
      "name": "Ball Corporation Common Stock",
      "lastsale": "$56.20",
      "netchange": "-0.89",
      "pctchange": "-1.559%",
      "marketCap": "17,669,006,587",
      "url": "/market-activity/stocks/ball"
  },
  {
      "symbol": "WAB",
      "name": "Westinghouse Air Brake Technologies Corporation Common Stock",
      "lastsale": "$97.99",
      "netchange": "-0.09",
      "pctchange": "-0.092%",
      "marketCap": "17,636,797,665",
      "url": "/market-activity/stocks/wab"
  },
  {
      "symbol": "BMRN",
      "name": "BioMarin Pharmaceutical Inc. Common Stock",
      "lastsale": "$93.93",
      "netchange": "-1.46",
      "pctchange": "-1.531%",
      "marketCap": "17,621,306,981",
      "url": "/market-activity/stocks/bmrn"
  },
  {
      "symbol": "CAG",
      "name": "ConAgra Brands, Inc. Common Stock",
      "lastsale": "$36.75",
      "netchange": "0.25",
      "pctchange": "0.685%",
      "marketCap": "17,526,324,790",
      "url": "/market-activity/stocks/cag"
  },
  {
      "symbol": "EXPD",
      "name": "Expeditors International of Washington, Inc. Common Stock",
      "lastsale": "$112.96",
      "netchange": "0.59",
      "pctchange": "0.525%",
      "marketCap": "17,447,370,319",
      "url": "/market-activity/stocks/expd"
  },
  {
      "symbol": "MOH",
      "name": "Molina Healthcare Inc Common Stock",
      "lastsale": "$298.71",
      "netchange": "1.31",
      "pctchange": "0.44%",
      "marketCap": "17,405,480,716",
      "url": "/market-activity/stocks/moh"
  },
  {
      "symbol": "TSN",
      "name": "Tyson Foods, Inc. Common Stock",
      "lastsale": "$48.87",
      "netchange": "-0.47",
      "pctchange": "-0.953%",
      "marketCap": "17,379,440,519",
      "url": "/market-activity/stocks/tsn"
  },
  {
      "symbol": "ERIC",
      "name": "Ericsson American Depositary Shares",
      "lastsale": "$5.17",
      "netchange": "0.02",
      "pctchange": "0.388%",
      "marketCap": "17,216,100,000",
      "url": "/market-activity/stocks/eric"
  },
  {
      "symbol": "ATO",
      "name": "Atmos Energy Corporation Common Stock",
      "lastsale": "$119.15",
      "netchange": "1.05",
      "pctchange": "0.889%",
      "marketCap": "17,215,346,048",
      "url": "/market-activity/stocks/ato"
  },
  {
      "symbol": "LUV",
      "name": "Southwest Airlines Company Common Stock",
      "lastsale": "$28.63",
      "netchange": "-0.34",
      "pctchange": "-1.174%",
      "marketCap": "17,032,157,749",
      "url": "/market-activity/stocks/luv"
  },
  {
      "symbol": "RE",
      "name": "Everest Re Group, Ltd. Common Stock",
      "lastsale": "$385.88",
      "netchange": "-1.22",
      "pctchange": "-0.315%",
      "marketCap": "17,016,866,553",
      "url": "/market-activity/stocks/re"
  },
  {
      "symbol": "FWONK",
      "name": "Liberty Media Corporation Series C Liberty Formula One Common Stock",
      "lastsale": "$72.76",
      "netchange": "1.37",
      "pctchange": "1.919%",
      "marketCap": "17,016,481,245",
      "url": "/market-activity/stocks/fwonk"
  },
  {
      "symbol": "SEDG",
      "name": "SolarEdge Technologies, Inc. Common Stock",
      "lastsale": "$301.85",
      "netchange": "5.79",
      "pctchange": "1.956%",
      "marketCap": "17,007,183,752",
      "url": "/market-activity/stocks/sedg"
  },
  {
      "symbol": "SJM",
      "name": "J.M. Smucker Company (The) New Common Stock",
      "lastsale": "$158.15",
      "netchange": "0.76",
      "pctchange": "0.483%",
      "marketCap": "16,864,498,108",
      "url": "/market-activity/stocks/sjm"
  },
  {
      "symbol": "SUI",
      "name": "Sun Communities, Inc. Common Stock",
      "lastsale": "$134.69",
      "netchange": "-1.26",
      "pctchange": "-0.927%",
      "marketCap": "16,758,528,617",
      "url": "/market-activity/stocks/sui"
  },
  {
      "symbol": "FLT",
      "name": "FleetCor Technologies, Inc. Common Stock",
      "lastsale": "$227.04",
      "netchange": "-0.13",
      "pctchange": "-0.057%",
      "marketCap": "16,685,531,048",
      "url": "/market-activity/stocks/flt"
  },
  {
      "symbol": "LW",
      "name": "Lamb Weston Holdings, Inc. Common Stock ",
      "lastsale": "$114.28",
      "netchange": "1.22",
      "pctchange": "1.079%",
      "marketCap": "16,651,072,205",
      "url": "/market-activity/stocks/lw"
  },
  {
      "symbol": "ZS",
      "name": "Zscaler, Inc. Common Stock",
      "lastsale": "$114.33",
      "netchange": "-1.09",
      "pctchange": "-0.944%",
      "marketCap": "16,591,580,461",
      "url": "/market-activity/stocks/zs"
  },
  {
      "symbol": "STLD",
      "name": "Steel Dynamics, Inc.",
      "lastsale": "$97.20",
      "netchange": "0.21",
      "pctchange": "0.217%",
      "marketCap": "16,580,894,854",
      "url": "/market-activity/stocks/stld"
  },
  {
      "symbol": "EBR",
      "name": "Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one Common Share)",
      "lastsale": "$7.17",
      "netchange": "-0.12",
      "pctchange": "-1.646%",
      "marketCap": "16,541,905,645",
      "url": "/market-activity/stocks/ebr"
  },
  {
      "symbol": "BIP",
      "name": "Brookfield Infrastructure Partners LP Limited Partnership Units",
      "lastsale": "$35.85",
      "netchange": "0.67",
      "pctchange": "1.904%",
      "marketCap": "16,434,126,018",
      "url": "/market-activity/stocks/bip"
  },
  {
      "symbol": "FOXA",
      "name": "Fox Corporation Class A Common Stock",
      "lastsale": "$30.72",
      "netchange": "0.05",
      "pctchange": "0.163%",
      "marketCap": "16,421,731,953",
      "url": "/market-activity/stocks/foxa"
  },
  {
      "symbol": "NET",
      "name": "Cloudflare, Inc. Class A Common Stock",
      "lastsale": "$49.43",
      "netchange": "-0.59",
      "pctchange": "-1.18%",
      "marketCap": "16,404,851,237",
      "url": "/market-activity/stocks/net"
  },
  {
      "symbol": "PFG",
      "name": "Principal Financial Group Inc Common Stock",
      "lastsale": "$67.49",
      "netchange": "-1.23",
      "pctchange": "-1.79%",
      "marketCap": "16,398,699,076",
      "url": "/market-activity/stocks/pfg"
  },
  {
      "symbol": "TYL",
      "name": "Tyler Technologies, Inc. Common Stock",
      "lastsale": "$390.68",
      "netchange": "2.06",
      "pctchange": "0.53%",
      "marketCap": "16,367,668,696",
      "url": "/market-activity/stocks/tyl"
  },
  {
      "symbol": "ICLR",
      "name": "ICON plc Ordinary Shares",
      "lastsale": "$200.00",
      "netchange": "0.89",
      "pctchange": "0.447%",
      "marketCap": "16,344,711,000",
      "url": "/market-activity/stocks/iclr"
  },
  {
      "symbol": "CINF",
      "name": "Cincinnati Financial Corporation Common Stock",
      "lastsale": "$103.57",
      "netchange": "-0.38",
      "pctchange": "-0.366%",
      "marketCap": "16,278,766,791",
      "url": "/market-activity/stocks/cinf"
  },
  {
      "symbol": "CPB",
      "name": "Campbell Soup Company Common Stock",
      "lastsale": "$54.33",
      "netchange": "-0.13",
      "pctchange": "-0.239%",
      "marketCap": "16,270,530,591",
      "url": "/market-activity/stocks/cpb"
  },
  {
      "symbol": "PAYC",
      "name": "Paycom Software, Inc. Common Stock",
      "lastsale": "$268.51",
      "netchange": "3.20",
      "pctchange": "1.206%",
      "marketCap": "16,192,731,570",
      "url": "/market-activity/stocks/payc"
  },
  {
      "symbol": "FITB",
      "name": "Fifth Third Bancorp Common Stock",
      "lastsale": "$23.62",
      "netchange": "-0.04",
      "pctchange": "-0.169%",
      "marketCap": "16,074,283,940",
      "url": "/market-activity/stocks/fitb"
  },
  {
      "symbol": "IRM",
      "name": "Iron Mountain Incorporated (Delaware)Common Stock REIT",
      "lastsale": "$55.09",
      "netchange": "-0.13",
      "pctchange": "-0.235%",
      "marketCap": "16,062,820,089",
      "url": "/market-activity/stocks/irm"
  },
  {
      "symbol": "WAT",
      "name": "Waters Corporation Common Stock",
      "lastsale": "$271.00",
      "netchange": "2.03",
      "pctchange": "0.755%",
      "marketCap": "15,994,483,143",
      "url": "/market-activity/stocks/wat"
  },
  {
      "symbol": "BLDR",
      "name": "Builders FirstSource, Inc. Common Stock",
      "lastsale": "$115.84",
      "netchange": "-1.43",
      "pctchange": "-1.219%",
      "marketCap": "15,987,345,064",
      "url": "/market-activity/stocks/bldr"
  },
  {
      "symbol": "AGR",
      "name": "Avangrid, Inc. Common Stock",
      "lastsale": "$41.02",
      "netchange": "0.37",
      "pctchange": "0.91%",
      "marketCap": "15,859,861,062",
      "url": "/market-activity/stocks/agr"
  },
  {
      "symbol": "TRGP",
      "name": "Targa Resources, Inc. Common Stock",
      "lastsale": "$69.89",
      "netchange": "0.20",
      "pctchange": "0.287%",
      "marketCap": "15,814,421,812",
      "url": "/market-activity/stocks/trgp"
  },
  {
      "symbol": "IEX",
      "name": "IDEX Corporation Common Stock",
      "lastsale": "$208.47",
      "netchange": "0.52",
      "pctchange": "0.25%",
      "marketCap": "15,754,281,367",
      "url": "/market-activity/stocks/iex"
  },
  {
      "symbol": "TS",
      "name": "Tenaris S.A. American Depositary Shares",
      "lastsale": "$26.60",
      "netchange": "0.05",
      "pctchange": "0.188%",
      "marketCap": "15,701,139,839",
      "url": "/market-activity/stocks/ts"
  },
  {
      "symbol": "MGM",
      "name": "MGM Resorts International Common Stock",
      "lastsale": "$41.97",
      "netchange": "-0.55",
      "pctchange": "-1.294%",
      "marketCap": "15,650,274,554",
      "url": "/market-activity/stocks/mgm"
  },
  {
      "symbol": "BBY",
      "name": "Best Buy Co., Inc. Common Stock",
      "lastsale": "$71.73",
      "netchange": "0.11",
      "pctchange": "0.154%",
      "marketCap": "15,640,420,715",
      "url": "/market-activity/stocks/bby"
  },
  {
      "symbol": "CBOE",
      "name": "Cboe Global Markets, Inc. Common Stock",
      "lastsale": "$138.78",
      "netchange": "-0.26",
      "pctchange": "-0.187%",
      "marketCap": "15,518,206,125",
      "url": "/market-activity/stocks/cboe"
  },
  {
      "symbol": "WRB",
      "name": "W.R. Berkley Corporation Common Stock",
      "lastsale": "$58.92",
      "netchange": "0.04",
      "pctchange": "0.068%",
      "marketCap": "15,468,680,040",
      "url": "/market-activity/stocks/wrb"
  },
  {
      "symbol": "SWKS",
      "name": "Skyworks Solutions, Inc. Common Stock",
      "lastsale": "$97.14",
      "netchange": "0.23",
      "pctchange": "0.237%",
      "marketCap": "15,460,137,185",
      "url": "/market-activity/stocks/swks"
  },
  {
      "symbol": "GFL",
      "name": "GFL Environmental Inc. Subordinate voting shares, no par value",
      "lastsale": "$37.71",
      "netchange": "-0.16",
      "pctchange": "-0.422%",
      "marketCap": "15,414,333,189",
      "url": "/market-activity/stocks/gfl"
  },
  {
      "symbol": "PTC",
      "name": "PTC Inc. Common Stock",
      "lastsale": "$130.10",
      "netchange": "0.62",
      "pctchange": "0.479%",
      "marketCap": "15,386,042,710",
      "url": "/market-activity/stocks/ptc"
  },
  {
      "symbol": "RPRX",
      "name": "Royalty Pharma plc Class A Ordinary Shares ",
      "lastsale": "$34.55",
      "netchange": "0.05",
      "pctchange": "0.145%",
      "marketCap": "15,311,386,337",
      "url": "/market-activity/stocks/rprx"
  },
  {
      "symbol": "WPC",
      "name": "W. P. Carey Inc. REIT",
      "lastsale": "$71.58",
      "netchange": "-0.16",
      "pctchange": "-0.223%",
      "marketCap": "15,310,290,580",
      "url": "/market-activity/stocks/wpc"
  },
  {
      "symbol": "AMCR",
      "name": "Amcor plc Ordinary Shares",
      "lastsale": "$10.30",
      "netchange": "-0.06",
      "pctchange": "-0.579%",
      "marketCap": "15,303,533,670",
      "url": "/market-activity/stocks/amcr"
  },
  {
      "symbol": "PHM",
      "name": "PulteGroup, Inc. Common Stock",
      "lastsale": "$68.43",
      "netchange": "0.31",
      "pctchange": "0.455%",
      "marketCap": "15,275,234,264",
      "url": "/market-activity/stocks/phm"
  },
  {
      "symbol": "FDS",
      "name": "FactSet Research Systems Inc. Common Stock",
      "lastsale": "$398.36",
      "netchange": "-1.91",
      "pctchange": "-0.477%",
      "marketCap": "15,264,950,045",
      "url": "/market-activity/stocks/fds"
  },
  {
      "symbol": "FWONA",
      "name": "Liberty Media Corporation Series A Liberty Formula One Common Stock",
      "lastsale": "$65.23",
      "netchange": "1.21",
      "pctchange": "1.89%",
      "marketCap": "15,255,429,791",
      "url": "/market-activity/stocks/fwona"
  },
  {
      "symbol": "TW",
      "name": "Tradeweb Markets Inc. Class A Common Stock",
      "lastsale": "$72.80",
      "netchange": "0.36",
      "pctchange": "0.497%",
      "marketCap": "15,139,924,290",
      "url": "/market-activity/stocks/tw"
  },
  {
      "symbol": "LKQ",
      "name": "LKQ Corporation Common Stock",
      "lastsale": "$56.57",
      "netchange": "-0.07",
      "pctchange": "-0.124%",
      "marketCap": "15,120,578,159",
      "url": "/market-activity/stocks/lkq"
  },
  {
      "symbol": "FOX",
      "name": "Fox Corporation Class B Common Stock",
      "lastsale": "$28.27",
      "netchange": "0.11",
      "pctchange": "0.391%",
      "marketCap": "15,112,056,064",
      "url": "/market-activity/stocks/fox"
  },
  {
      "symbol": "CHKP",
      "name": "Check Point Software Technologies Ltd. Ordinary Shares",
      "lastsale": "$120.17",
      "netchange": "-0.72",
      "pctchange": "-0.596%",
      "marketCap": "15,070,678,685",
      "url": "/market-activity/stocks/chkp"
  },
  {
      "symbol": "MGA",
      "name": "Magna International, Inc. Common Stock",
      "lastsale": "$52.56",
      "netchange": "-0.73",
      "pctchange": "-1.37%",
      "marketCap": "15,038,360,766",
      "url": "/market-activity/stocks/mga"
  },
  {
      "symbol": "COIN",
      "name": "Coinbase Global, Inc. Class A Common Stock",
      "lastsale": "$57.34",
      "netchange": "-3.01",
      "pctchange": "-4.988%",
      "marketCap": "15,017,346,000",
      "url": "/market-activity/stocks/coin"
  },
  {
      "symbol": "ASX",
      "name": "ASE Technology Holding Co., Ltd. American Depositary Shares (each representing Two Common Shares) ",
      "lastsale": "$6.86",
      "netchange": "-0.02",
      "pctchange": "-0.291%",
      "marketCap": "14,999,266,300",
      "url": "/market-activity/stocks/asx"
  },
  {
      "symbol": "AXON",
      "name": "Axon Enterprise, Inc. Common Stock",
      "lastsale": "$201.50",
      "netchange": "-3.095",
      "pctchange": "-1.513%",
      "marketCap": "14,886,733,960",
      "url": "/market-activity/stocks/axon"
  },
  {
      "symbol": "AES",
      "name": "The AES Corporation Common Stock",
      "lastsale": "$22.11",
      "netchange": "0.08",
      "pctchange": "0.363%",
      "marketCap": "14,792,272,845",
      "url": "/market-activity/stocks/aes"
  },
  {
      "symbol": "UAL",
      "name": "United Airlines Holdings, Inc. Common Stock",
      "lastsale": "$45.08",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "14,784,836,750",
      "url": "/market-activity/stocks/ual"
  },
  {
      "symbol": "LPLA",
      "name": "LPL Financial Holdings Inc. Common Stock",
      "lastsale": "$187.93",
      "netchange": "-0.03",
      "pctchange": "-0.016%",
      "marketCap": "14,776,198,463",
      "url": "/market-activity/stocks/lpla"
  },
  {
      "symbol": "ARES",
      "name": "Ares Management Corporation Class A Common Stock",
      "lastsale": "$82.02",
      "netchange": "0.53",
      "pctchange": "0.65%",
      "marketCap": "14,723,556,114",
      "url": "/market-activity/stocks/ares"
  },
  {
      "symbol": "RF",
      "name": "Regions Financial Corporation Common Stock",
      "lastsale": "$15.74",
      "netchange": "0.22",
      "pctchange": "1.418%",
      "marketCap": "14,716,900,000",
      "url": "/market-activity/stocks/rf"
  },
  {
      "symbol": "PKI",
      "name": "PerkinElmer, Inc. Common Stock",
      "lastsale": "$116.30",
      "netchange": "-2.07",
      "pctchange": "-1.749%",
      "marketCap": "14,701,713,856",
      "url": "/market-activity/stocks/pki"
  },
  {
      "symbol": "HUBB",
      "name": "Hubbell Inc Common Stock",
      "lastsale": "$273.52",
      "netchange": "0.77",
      "pctchange": "0.282%",
      "marketCap": "14,654,769,165",
      "url": "/market-activity/stocks/hubb"
  },
  {
      "symbol": "PINS",
      "name": "Pinterest, Inc. Class A Common Stock",
      "lastsale": "$21.40",
      "netchange": "-0.08",
      "pctchange": "-0.372%",
      "marketCap": "14,644,602,979",
      "url": "/market-activity/stocks/pins"
  },
  {
      "symbol": "DGX",
      "name": "Quest Diagnostics Incorporated Common Stock",
      "lastsale": "$130.73",
      "netchange": "-0.15",
      "pctchange": "-0.115%",
      "marketCap": "14,625,792,638",
      "url": "/market-activity/stocks/dgx"
  },
  {
      "symbol": "WLK",
      "name": "Westlake Corporation Common Stock",
      "lastsale": "$114.47",
      "netchange": "1.07",
      "pctchange": "0.944%",
      "marketCap": "14,619,410,705",
      "url": "/market-activity/stocks/wlk"
  },
  {
      "symbol": "J",
      "name": "Jacobs Solutions Inc. Common Stock",
      "lastsale": "$115.14",
      "netchange": "-1.09",
      "pctchange": "-0.938%",
      "marketCap": "14,589,864,468",
      "url": "/market-activity/stocks/j"
  },
  {
      "symbol": "NTRS",
      "name": "Northern Trust Corporation Common Stock",
      "lastsale": "$69.93",
      "netchange": "-0.59",
      "pctchange": "-0.837%",
      "marketCap": "14,569,356,060",
      "url": "/market-activity/stocks/ntrs"
  },
  {
      "symbol": "INCY",
      "name": "Incyte Corp. Common Stock",
      "lastsale": "$65.28",
      "netchange": "1.11",
      "pctchange": "1.73%",
      "marketCap": "14,555,156,375",
      "url": "/market-activity/stocks/incy"
  },
  {
      "symbol": "CHWY",
      "name": "Chewy, Inc. Class A Common Stock",
      "lastsale": "$33.93",
      "netchange": "-1.13",
      "pctchange": "-3.223%",
      "marketCap": "14,486,260,645",
      "url": "/market-activity/stocks/chwy"
  },
  {
      "symbol": "EVRG",
      "name": "Evergy, Inc. Common Stock",
      "lastsale": "$62.37",
      "netchange": "-0.06",
      "pctchange": "-0.096%",
      "marketCap": "14,319,100,068",
      "url": "/market-activity/stocks/evrg"
  },
  {
      "symbol": "IPG",
      "name": "Interpublic Group of Companies, Inc. (The) Common Stock",
      "lastsale": "$36.77",
      "netchange": "0.51",
      "pctchange": "1.407%",
      "marketCap": "14,210,191,120",
      "url": "/market-activity/stocks/ipg"
  },
  {
      "symbol": "RS",
      "name": "Reliance Steel & Aluminum Co. Common Stock (DE)",
      "lastsale": "$241.22",
      "netchange": "1.83",
      "pctchange": "0.764%",
      "marketCap": "14,193,363,090",
      "url": "/market-activity/stocks/rs"
  },
  {
      "symbol": "EXAS",
      "name": "Exact Sciences Corporation Common Stock",
      "lastsale": "$79.19",
      "netchange": "1.12",
      "pctchange": "1.435%",
      "marketCap": "14,193,356,422",
      "url": "/market-activity/stocks/exas"
  },
  {
      "symbol": "TER",
      "name": "Teradyne, Inc. Common Stock",
      "lastsale": "$90.93",
      "netchange": "-0.25",
      "pctchange": "-0.274%",
      "marketCap": "14,162,863,073",
      "url": "/market-activity/stocks/ter"
  },
  {
      "symbol": "AVY",
      "name": "Avery Dennison Corporation Common Stock",
      "lastsale": "$173.15",
      "netchange": "0.84",
      "pctchange": "0.487%",
      "marketCap": "14,044,019,021",
      "url": "/market-activity/stocks/avy"
  },
  {
      "symbol": "SPLK",
      "name": "Splunk Inc. Common Stock",
      "lastsale": "$84.84",
      "netchange": "-0.77",
      "pctchange": "-0.899%",
      "marketCap": "14,041,020,000",
      "url": "/market-activity/stocks/splk"
  },
  {
      "symbol": "KB",
      "name": "KB Financial Group Inc",
      "lastsale": "$36.52",
      "netchange": "-0.52",
      "pctchange": "-1.404%",
      "marketCap": "14,032,749,340",
      "url": "/market-activity/stocks/kb"
  },
  {
      "symbol": "VIV",
      "name": "Telefonica Brasil S.A. American Depositary Shares (Each representing One Common Share)",
      "lastsale": "$8.40",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "13,973,876,540",
      "url": "/market-activity/stocks/viv"
  },
  {
      "symbol": "MRO",
      "name": "Marathon Oil Corporation Common Stock",
      "lastsale": "$22.39",
      "netchange": "-0.08",
      "pctchange": "-0.356%",
      "marketCap": "13,946,177,295",
      "url": "/market-activity/stocks/mro"
  },
  {
      "symbol": "GFI",
      "name": "Gold Fields Limited American Depositary Shares",
      "lastsale": "$15.62",
      "netchange": "-0.09",
      "pctchange": "-0.573%",
      "marketCap": "13,923,333,279",
      "url": "/market-activity/stocks/gfi"
  },
  {
      "symbol": "TAP",
      "name": "Molson Coors Beverage Company Class B Common Stock",
      "lastsale": "$64.25",
      "netchange": "0.25",
      "pctchange": "0.391%",
      "marketCap": "13,891,057,849",
      "url": "/market-activity/stocks/tap"
  },
  {
      "symbol": "ESS",
      "name": "Essex Property Trust, Inc. Common Stock",
      "lastsale": "$215.32",
      "netchange": "-1.66",
      "pctchange": "-0.765%",
      "marketCap": "13,880,350,153",
      "url": "/market-activity/stocks/ess"
  },
  {
      "symbol": "LNT",
      "name": "Alliant Energy Corporation Common Stock",
      "lastsale": "$55.03",
      "netchange": "0.43",
      "pctchange": "0.788%",
      "marketCap": "13,833,761,454",
      "url": "/market-activity/stocks/lnt"
  },
  {
      "symbol": "SNN",
      "name": "Smith & Nephew SNATS, Inc. Common Stock",
      "lastsale": "$31.63",
      "netchange": "-0.18",
      "pctchange": "-0.566%",
      "marketCap": "13,812,371,601",
      "url": "/market-activity/stocks/snn"
  },
  {
      "symbol": "FMS",
      "name": "Fresenius Medical Care AG Common Stock",
      "lastsale": "$23.51",
      "netchange": "-0.35",
      "pctchange": "-1.467%",
      "marketCap": "13,796,300,372",
      "url": "/market-activity/stocks/fms"
  },
  {
      "symbol": "SIRI",
      "name": "Sirius XM Holdings Inc. Common Stock",
      "lastsale": "$3.55",
      "netchange": "-0.07",
      "pctchange": "-1.934%",
      "marketCap": "13,756,809,785",
      "url": "/market-activity/stocks/siri"
  },
  {
      "symbol": "FMC",
      "name": "FMC Corporation Common Stock",
      "lastsale": "$109.58",
      "netchange": "0.08",
      "pctchange": "0.073%",
      "marketCap": "13,713,035,705",
      "url": "/market-activity/stocks/fmc"
  },
  {
      "symbol": "SSNC",
      "name": "SS&C Technologies Holdings, Inc. Common Stock",
      "lastsale": "$54.96",
      "netchange": "-0.07",
      "pctchange": "-0.127%",
      "marketCap": "13,710,075,379",
      "url": "/market-activity/stocks/ssnc"
  },
  {
      "symbol": "ZBRA",
      "name": "Zebra Technologies Corporation Class A Common Stock",
      "lastsale": "$266.16",
      "netchange": "0.88",
      "pctchange": "0.332%",
      "marketCap": "13,680,448,601",
      "url": "/market-activity/stocks/zbra"
  },
  {
      "symbol": "AVTR",
      "name": "Avantor, Inc. Common Stock",
      "lastsale": "$20.24",
      "netchange": "-0.15",
      "pctchange": "-0.736%",
      "marketCap": "13,663,033,778",
      "url": "/market-activity/stocks/avtr"
  },
  {
      "symbol": "UDR",
      "name": "UDR, Inc. Common Stock",
      "lastsale": "$41.38",
      "netchange": "0.03",
      "pctchange": "0.073%",
      "marketCap": "13,621,183,913",
      "url": "/market-activity/stocks/udr"
  },
  {
      "symbol": "SNA",
      "name": "Snap-On Incorporated Common Stock",
      "lastsale": "$256.04",
      "netchange": "0.01",
      "pctchange": "0.004%",
      "marketCap": "13,552,663,449",
      "url": "/market-activity/stocks/sna"
  },
  {
      "symbol": "BG",
      "name": "Bunge Limited Bunge Limited",
      "lastsale": "$90.30",
      "netchange": "0.33",
      "pctchange": "0.367%",
      "marketCap": "13,539,721,694",
      "url": "/market-activity/stocks/bg"
  },
  {
      "symbol": "SNAP",
      "name": "Snap Inc. Class A Common Stock",
      "lastsale": "$8.55",
      "netchange": "-0.20",
      "pctchange": "-2.286%",
      "marketCap": "13,520,415,541",
      "url": "/market-activity/stocks/snap"
  },
  {
      "symbol": "L",
      "name": "Loews Corporation Common Stock",
      "lastsale": "$58.51",
      "netchange": "0.11",
      "pctchange": "0.188%",
      "marketCap": "13,508,570,148",
      "url": "/market-activity/stocks/l"
  },
  {
      "symbol": "NTAP",
      "name": "NetApp, Inc. Common Stock",
      "lastsale": "$63.14",
      "netchange": "0.09",
      "pctchange": "0.143%",
      "marketCap": "13,505,943,453",
      "url": "/market-activity/stocks/ntap"
  },
  {
      "symbol": "ENTG",
      "name": "Entegris, Inc. Common Stock",
      "lastsale": "$90.22",
      "netchange": "-3.21",
      "pctchange": "-3.436%",
      "marketCap": "13,502,630,144",
      "url": "/market-activity/stocks/entg"
  },
  {
      "symbol": "DT",
      "name": "Dynatrace, Inc. Common Stock",
      "lastsale": "$46.58",
      "netchange": "-0.38",
      "pctchange": "-0.809%",
      "marketCap": "13,464,035,732",
      "url": "/market-activity/stocks/dt"
  },
  {
      "symbol": "HBAN",
      "name": "Huntington Bancshares Incorporated Common Stock",
      "lastsale": "$9.28",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "13,396,746,884",
      "url": "/market-activity/stocks/hban"
  },
  {
      "symbol": "AER",
      "name": "AerCap Holdings N.V. Ordinary Shares",
      "lastsale": "$56.16",
      "netchange": "0.22",
      "pctchange": "0.393%",
      "marketCap": "13,380,480,940",
      "url": "/market-activity/stocks/aer"
  },
  {
      "symbol": "EXPE",
      "name": "Expedia Group, Inc. Common Stock",
      "lastsale": "$89.45",
      "netchange": "-1.77",
      "pctchange": "-1.94%",
      "marketCap": "13,373,138,704",
      "url": "/market-activity/stocks/expe"
  },
  {
      "symbol": "AKAM",
      "name": "Akamai Technologies, Inc. Common Stock",
      "lastsale": "$85.32",
      "netchange": "-0.60",
      "pctchange": "-0.698%",
      "marketCap": "13,335,875,538",
      "url": "/market-activity/stocks/akam"
  },
  {
      "symbol": "HTHT",
      "name": "H World Group Limited American Depositary Shares",
      "lastsale": "$41.75",
      "netchange": "-1.13",
      "pctchange": "-2.635%",
      "marketCap": "13,292,544,108",
      "url": "/market-activity/stocks/htht"
  },
  {
      "symbol": "EPAM",
      "name": "EPAM Systems, Inc. Common Stock",
      "lastsale": "$229.70",
      "netchange": "-2.96",
      "pctchange": "-1.272%",
      "marketCap": "13,289,807,569",
      "url": "/market-activity/stocks/epam"
  },
  {
      "symbol": "NIO",
      "name": "NIO Inc. American depositary shares, each  representing one Class A ordinary share",
      "lastsale": "$7.95",
      "netchange": "-0.50",
      "pctchange": "-5.917%",
      "marketCap": "13,280,742,398",
      "url": "/market-activity/stocks/nio"
  },
  {
      "symbol": "POOL",
      "name": "Pool Corporation Common Stock",
      "lastsale": "$338.65",
      "netchange": "-9.39",
      "pctchange": "-2.698%",
      "marketCap": "13,232,348,466",
      "url": "/market-activity/stocks/pool"
  },
  {
      "symbol": "BSY",
      "name": "Bentley Systems, Incorporated Class B Common Stock",
      "lastsale": "$45.07",
      "netchange": "-0.15",
      "pctchange": "-0.332%",
      "marketCap": "13,139,495,881",
      "url": "/market-activity/stocks/bsy"
  },
  {
      "symbol": "WSO",
      "name": "Watsco, Inc. Common Stock",
      "lastsale": "$337.15",
      "netchange": "-1.40",
      "pctchange": "-0.414%",
      "marketCap": "13,090,860,537",
      "url": "/market-activity/stocks/wso"
  },
  {
      "symbol": "WMG",
      "name": "Warner Music Group Corp. Class A Common Stock",
      "lastsale": "$25.29",
      "netchange": "-0.56",
      "pctchange": "-2.166%",
      "marketCap": "13,048,094,098",
      "url": "/market-activity/stocks/wmg"
  },
  {
      "symbol": "SHG",
      "name": "Shinhan Financial Group Co Ltd American Depositary Shares",
      "lastsale": "$25.83",
      "netchange": "-0.68",
      "pctchange": "-2.565%",
      "marketCap": "13,046,785,874",
      "url": "/market-activity/stocks/shg"
  },
  {
      "symbol": "CF",
      "name": "CF Industries Holdings, Inc. Common Stock",
      "lastsale": "$66.53",
      "netchange": "-0.65",
      "pctchange": "-0.968%",
      "marketCap": "13,038,166,254",
      "url": "/market-activity/stocks/cf"
  },
  {
      "symbol": "GGG",
      "name": "Graco Inc. Common Stock",
      "lastsale": "$77.14",
      "netchange": "-0.31",
      "pctchange": "-0.40%",
      "marketCap": "12,959,108,535",
      "url": "/market-activity/stocks/ggg"
  },
  {
      "symbol": "DECK",
      "name": "Deckers Outdoor Corporation Common Stock",
      "lastsale": "$490.58",
      "netchange": "0.14",
      "pctchange": "0.029%",
      "marketCap": "12,931,324,790",
      "url": "/market-activity/stocks/deck"
  },
  {
      "symbol": "TRU",
      "name": "TransUnion Common Stock",
      "lastsale": "$66.90",
      "netchange": "0.28",
      "pctchange": "0.42%",
      "marketCap": "12,925,080,000",
      "url": "/market-activity/stocks/tru"
  },
  {
      "symbol": "TXT",
      "name": "Textron Inc. Common Stock",
      "lastsale": "$63.29",
      "netchange": "-1.14",
      "pctchange": "-1.769%",
      "marketCap": "12,889,657,096",
      "url": "/market-activity/stocks/txt"
  },
  {
      "symbol": "LCID",
      "name": "Lucid Group, Inc. Common Stock",
      "lastsale": "$7.04",
      "netchange": "-0.02",
      "pctchange": "-0.283%",
      "marketCap": "12,887,197,073",
      "url": "/market-activity/stocks/lcid"
  },
  {
      "symbol": "GLPI",
      "name": "Gaming and Leisure Properties, Inc. Common Stock",
      "lastsale": "$49.10",
      "netchange": "-0.41",
      "pctchange": "-0.828%",
      "marketCap": "12,881,604,821",
      "url": "/market-activity/stocks/glpi"
  },
  {
      "symbol": "ELS",
      "name": "Equity Lifestyle Properties, Inc. Common Stock",
      "lastsale": "$68.82",
      "netchange": "-0.42",
      "pctchange": "-0.607%",
      "marketCap": "12,814,948,595",
      "url": "/market-activity/stocks/els"
  },
  {
      "symbol": "CCL",
      "name": "Carnival Corporation Common Stock",
      "lastsale": "$9.83",
      "netchange": "-0.41",
      "pctchange": "-4.004%",
      "marketCap": "12,806,724,434",
      "url": "/market-activity/stocks/ccl"
  },
  {
      "symbol": "TECH",
      "name": "Bio-Techne Corp Common Stock",
      "lastsale": "$81.30",
      "netchange": "-0.55",
      "pctchange": "-0.672%",
      "marketCap": "12,786,473,760",
      "url": "/market-activity/stocks/tech"
  },
  {
      "symbol": "AMH",
      "name": "American Homes 4 Rent Common Shares of Beneficial Interest",
      "lastsale": "$35.03",
      "netchange": "0.04",
      "pctchange": "0.114%",
      "marketCap": "12,672,990,546",
      "url": "/market-activity/stocks/amh"
  },
  {
      "symbol": "IEP",
      "name": "Icahn Enterprises, L.P. Common Stock",
      "lastsale": "$35.40",
      "netchange": "3.75",
      "pctchange": "11.848%",
      "marketCap": "12,516,455,243",
      "url": "/market-activity/stocks/iep"
  },
  {
      "symbol": "BAM",
      "name": "Brookfield Asset Management Inc Class A Limited Voting Shares",
      "lastsale": "$31.55",
      "netchange": "-0.86",
      "pctchange": "-2.654%",
      "marketCap": "12,499,353,052",
      "url": "/market-activity/stocks/bam"
  },
  {
      "symbol": "NDSN",
      "name": "Nordson Corporation Common Stock",
      "lastsale": "$216.31",
      "netchange": "0.07",
      "pctchange": "0.032%",
      "marketCap": "12,386,121,070",
      "url": "/market-activity/stocks/ndsn"
  },
  {
      "symbol": "TME",
      "name": "Tencent Music Entertainment Group American Depositary Shares, each representing two Class A Ordinary Shares",
      "lastsale": "$7.28",
      "netchange": "-0.19",
      "pctchange": "-2.544%",
      "marketCap": "12,340,161,514",
      "url": "/market-activity/stocks/tme"
  },
  {
      "symbol": "OKTA",
      "name": "Okta, Inc. Class A Common Stock",
      "lastsale": "$76.47",
      "netchange": "-2.42",
      "pctchange": "-3.068%",
      "marketCap": "12,333,679,060",
      "url": "/market-activity/stocks/okta"
  },
  {
      "symbol": "BAH",
      "name": "Booz Allen Hamilton Holding Corporation Common Stock",
      "lastsale": "$92.85",
      "netchange": "0.72",
      "pctchange": "0.782%",
      "marketCap": "12,281,814,808",
      "url": "/market-activity/stocks/bah"
  },
  {
      "symbol": "PEN",
      "name": "Penumbra, Inc. Common Stock",
      "lastsale": "$320.46",
      "netchange": "3.07",
      "pctchange": "0.967%",
      "marketCap": "12,255,255,642",
      "url": "/market-activity/stocks/pen"
  },
  {
      "symbol": "BEN",
      "name": "Franklin Resources, Inc. Common Stock",
      "lastsale": "$24.49",
      "netchange": "-0.03",
      "pctchange": "-0.122%",
      "marketCap": "12,253,763,673",
      "url": "/market-activity/stocks/ben"
  },
  {
      "symbol": "GRAB",
      "name": "Grab Holdings Limited Class A Ordinary Shares",
      "lastsale": "$3.17",
      "netchange": "-0.04",
      "pctchange": "-1.246%",
      "marketCap": "12,172,800,000",
      "url": "/market-activity/stocks/grab"
  },
  {
      "symbol": "ERIE",
      "name": "Erie Indemnity Company Class A Common Stock",
      "lastsale": "$232.45",
      "netchange": "-1.48",
      "pctchange": "-0.633%",
      "marketCap": "12,154,779,817",
      "url": "/market-activity/stocks/erie"
  },
  {
      "symbol": "H",
      "name": "Hyatt Hotels Corporation Class A Common Stock",
      "lastsale": "$113.55",
      "netchange": "1.05",
      "pctchange": "0.933%",
      "marketCap": "12,080,459,709",
      "url": "/market-activity/stocks/h"
  },
  {
      "symbol": "SWK",
      "name": "Stanley Black & Decker, Inc. Common Stock",
      "lastsale": "$78.79",
      "netchange": "-1.66",
      "pctchange": "-2.063%",
      "marketCap": "12,059,221,729",
      "url": "/market-activity/stocks/swk"
  },
  {
      "symbol": "UHAL",
      "name": "U-Haul Holding Company Common Stock",
      "lastsale": "$61.50",
      "netchange": "-0.11",
      "pctchange": "-0.179%",
      "marketCap": "12,058,789,620",
      "url": "/market-activity/stocks/uhal"
  },
  {
      "symbol": "EQT",
      "name": "EQT Corporation Common Stock",
      "lastsale": "$33.45",
      "netchange": "1.55",
      "pctchange": "4.859%",
      "marketCap": "12,054,046,349",
      "url": "/market-activity/stocks/eqt"
  },
  {
      "symbol": "WPP",
      "name": "WPP plc American Depositary Shares",
      "lastsale": "$55.89",
      "netchange": "-0.04",
      "pctchange": "-0.072%",
      "marketCap": "12,012,135,167",
      "url": "/market-activity/stocks/wpp"
  },
  {
      "symbol": "CFG",
      "name": "Citizens Financial Group, Inc. Common Stock",
      "lastsale": "$24.80",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "12,002,760,147",
      "url": "/market-activity/stocks/cfg"
  },
  {
      "symbol": "CCJ",
      "name": "Cameco Corporation Common Stock",
      "lastsale": "$27.71",
      "netchange": "-0.01",
      "pctchange": "-0.036%",
      "marketCap": "12,000,707,402",
      "url": "/market-activity/stocks/ccj"
  },
  {
      "symbol": "DKS",
      "name": "Dick's Sporting Goods Inc Common Stock",
      "lastsale": "$140.00",
      "netchange": "0.67",
      "pctchange": "0.481%",
      "marketCap": "11,986,536,940",
      "url": "/market-activity/stocks/dks"
  },
  {
      "symbol": "WYNN",
      "name": "Wynn Resorts, Limited Common stock",
      "lastsale": "$105.39",
      "netchange": "-1.51",
      "pctchange": "-1.413%",
      "marketCap": "11,980,910,358",
      "url": "/market-activity/stocks/wynn"
  },
  {
      "symbol": "RIVN",
      "name": "Rivian Automotive, Inc. Class A Common Stock",
      "lastsale": "$12.91",
      "netchange": "-0.93",
      "pctchange": "-6.72%",
      "marketCap": "11,968,732,068",
      "url": "/market-activity/stocks/rivn"
  },
  {
      "symbol": "HST",
      "name": "Host Hotels & Resorts, Inc. Common Stock",
      "lastsale": "$16.74",
      "netchange": "-0.12",
      "pctchange": "-0.712%",
      "marketCap": "11,927,034,037",
      "url": "/market-activity/stocks/hst"
  },
  {
      "symbol": "STX",
      "name": "Seagate Technology Holdings PLC Ordinary Shares (Ireland)",
      "lastsale": "$57.57",
      "netchange": "0.77",
      "pctchange": "1.356%",
      "marketCap": "11,916,990,000",
      "url": "/market-activity/stocks/stx"
  },
  {
      "symbol": "PKG",
      "name": "Packaging Corporation of America Common Stock",
      "lastsale": "$132.42",
      "netchange": "0.08",
      "pctchange": "0.06%",
      "marketCap": "11,902,387,636",
      "url": "/market-activity/stocks/pkg"
  },
  {
      "symbol": "CPT",
      "name": "Camden Property Trust Common Stock",
      "lastsale": "$110.50",
      "netchange": "-0.39",
      "pctchange": "-0.352%",
      "marketCap": "11,797,330,064",
      "url": "/market-activity/stocks/cpt"
  },
  {
      "symbol": "NI",
      "name": "NiSource Inc Common Stock",
      "lastsale": "$28.49",
      "netchange": "0.33",
      "pctchange": "1.172%",
      "marketCap": "11,765,875,385",
      "url": "/market-activity/stocks/ni"
  },
  {
      "symbol": "MOS",
      "name": "Mosaic Company (The) Common Stock",
      "lastsale": "$35.35",
      "netchange": "-0.60",
      "pctchange": "-1.669%",
      "marketCap": "11,739,686,924",
      "url": "/market-activity/stocks/mos"
  },
  {
      "symbol": "TFX",
      "name": "Teleflex Incorporated Common Stock",
      "lastsale": "$249.59",
      "netchange": "-0.10",
      "pctchange": "-0.04%",
      "marketCap": "11,722,183,539",
      "url": "/market-activity/stocks/tfx"
  },
  {
      "symbol": "MAS",
      "name": "Masco Corporation Common Stock",
      "lastsale": "$52.00",
      "netchange": "-0.58",
      "pctchange": "-1.103%",
      "marketCap": "11,720,590,804",
      "url": "/market-activity/stocks/mas"
  },
  {
      "symbol": "ETSY",
      "name": "Etsy, Inc. Common Stock",
      "lastsale": "$94.68",
      "netchange": "-1.68",
      "pctchange": "-1.743%",
      "marketCap": "11,676,828,918",
      "url": "/market-activity/stocks/etsy"
  },
  {
      "symbol": "SYF",
      "name": "Synchrony Financial Common Stock",
      "lastsale": "$27.08",
      "netchange": "-0.33",
      "pctchange": "-1.204%",
      "marketCap": "11,605,691,198",
      "url": "/market-activity/stocks/syf"
  },
  {
      "symbol": "LEGN",
      "name": "Legend Biotech Corporation American Depositary Shares",
      "lastsale": "$70.26",
      "netchange": "-0.29",
      "pctchange": "-0.411%",
      "marketCap": "11,597,624,282",
      "url": "/market-activity/stocks/legn"
  },
  {
      "symbol": "ACI",
      "name": "Albertsons Companies, Inc. Class A Common Stock",
      "lastsale": "$20.20",
      "netchange": "-0.16",
      "pctchange": "-0.786%",
      "marketCap": "11,565,107,071",
      "url": "/market-activity/stocks/aci"
  },
  {
      "symbol": "TRMB",
      "name": "Trimble Inc. Common Stock",
      "lastsale": "$46.74",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "11,563,057,069",
      "url": "/market-activity/stocks/trmb"
  },
  {
      "symbol": "CHRW",
      "name": "C.H. Robinson Worldwide, Inc. Common Stock",
      "lastsale": "$99.24",
      "netchange": "-0.06",
      "pctchange": "-0.06%",
      "marketCap": "11,560,127,306",
      "url": "/market-activity/stocks/chrw"
  },
  {
      "symbol": "LSI",
      "name": "Life Storage, Inc. Common Stock",
      "lastsale": "$135.31",
      "netchange": "0.79",
      "pctchange": "0.587%",
      "marketCap": "11,513,243,749",
      "url": "/market-activity/stocks/lsi"
  },
  {
      "symbol": "PEAK",
      "name": "Healthpeak Properties, Inc. Common Stock",
      "lastsale": "$20.97",
      "netchange": "-0.11",
      "pctchange": "-0.522%",
      "marketCap": "11,470,435,661",
      "url": "/market-activity/stocks/peak"
  },
  {
      "symbol": "BCH",
      "name": "Banco De Chile Banco De Chile ADS",
      "lastsale": "$22.68",
      "netchange": "0.20",
      "pctchange": "0.89%",
      "marketCap": "11,455,336,985",
      "url": "/market-activity/stocks/bch"
  },
  {
      "symbol": "NICE",
      "name": "NICE Ltd American Depositary Shares",
      "lastsale": "$180.05",
      "netchange": "-0.03",
      "pctchange": "-0.017%",
      "marketCap": "11,451,503,730",
      "url": "/market-activity/stocks/nice"
  },
  {
      "symbol": "IHG",
      "name": "Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)",
      "lastsale": "$66.49",
      "netchange": "-1.02",
      "pctchange": "-1.511%",
      "marketCap": "11,431,246,773",
      "url": "/market-activity/stocks/ihg"
  },
  {
      "symbol": "CUK",
      "name": "Carnival Plc ADS ADS",
      "lastsale": "$8.77",
      "netchange": "-0.39",
      "pctchange": "-4.258%",
      "marketCap": "11,424,455,672",
      "url": "/market-activity/stocks/cuk"
  },
  {
      "symbol": "JKHY",
      "name": "Jack Henry & Associates, Inc. Common Stock",
      "lastsale": "$155.81",
      "netchange": "0.83",
      "pctchange": "0.536%",
      "marketCap": "11,372,685,174",
      "url": "/market-activity/stocks/jkhy"
  },
  {
      "symbol": "KIM",
      "name": "Kimco Realty Corporation (HC) Common Stock",
      "lastsale": "$18.27",
      "netchange": "0.27",
      "pctchange": "1.50%",
      "marketCap": "11,325,423,387",
      "url": "/market-activity/stocks/kim"
  },
  {
      "symbol": "BURL",
      "name": "Burlington Stores, Inc. Common Stock",
      "lastsale": "$174.24",
      "netchange": "1.20",
      "pctchange": "0.693%",
      "marketCap": "11,313,730,597",
      "url": "/market-activity/stocks/burl"
  },
  {
      "symbol": "SUZ",
      "name": "Suzano S.A. American Depositary Shares (each representing One Ordinary Share)",
      "lastsale": "$8.62",
      "netchange": "0.25",
      "pctchange": "2.987%",
      "marketCap": "11,269,702,791",
      "url": "/market-activity/stocks/suz"
  },
  {
      "symbol": "MMP",
      "name": "Magellan Midstream Partners L.P. Limited Partnership",
      "lastsale": "$55.41",
      "netchange": "0.54",
      "pctchange": "0.984%",
      "marketCap": "11,264,510,677",
      "url": "/market-activity/stocks/mmp"
  },
  {
      "symbol": "MKTX",
      "name": "MarketAxess Holdings, Inc. Common Stock",
      "lastsale": "$299.23",
      "netchange": "-1.02",
      "pctchange": "-0.34%",
      "marketCap": "11,253,607,613",
      "url": "/market-activity/stocks/mktx"
  },
  {
      "symbol": "LBRDK",
      "name": "Liberty Broadband Corporation Class C Common Stock",
      "lastsale": "$76.97",
      "netchange": "-1.31",
      "pctchange": "-1.673%",
      "marketCap": "11,251,035,255",
      "url": "/market-activity/stocks/lbrdk"
  },
  {
      "symbol": "KMX",
      "name": "CarMax Inc",
      "lastsale": "$71.16",
      "netchange": "-1.11",
      "pctchange": "-1.536%",
      "marketCap": "11,249,779,470",
      "url": "/market-activity/stocks/kmx"
  },
  {
      "symbol": "WTRG",
      "name": "Essential Utilities, Inc. Common Stock",
      "lastsale": "$42.53",
      "netchange": "0.34",
      "pctchange": "0.806%",
      "marketCap": "11,243,630,029",
      "url": "/market-activity/stocks/wtrg"
  },
  {
      "symbol": "LSCC",
      "name": "Lattice Semiconductor Corporation Common Stock",
      "lastsale": "$81.61",
      "netchange": "0.66",
      "pctchange": "0.815%",
      "marketCap": "11,229,889,045",
      "url": "/market-activity/stocks/lscc"
  },
  {
      "symbol": "U",
      "name": "Unity Software Inc. Common Stock",
      "lastsale": "$29.65",
      "netchange": "-2.81",
      "pctchange": "-8.657%",
      "marketCap": "11,223,349,122",
      "url": "/market-activity/stocks/u"
  },
  {
      "symbol": "SRPT",
      "name": "Sarepta Therapeutics, Inc. Common Stock (DE)",
      "lastsale": "$120.20",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "11,195,976,713",
      "url": "/market-activity/stocks/srpt"
  },
  {
      "symbol": "LBRDA",
      "name": "Liberty Broadband Corporation Class A Common Stock",
      "lastsale": "$76.51",
      "netchange": "-1.26",
      "pctchange": "-1.62%",
      "marketCap": "11,183,795,081",
      "url": "/market-activity/stocks/lbrda"
  },
  {
      "symbol": "PARAA",
      "name": "Paramount Global Class A Common Stock",
      "lastsale": "$17.18",
      "netchange": "-0.37",
      "pctchange": "-2.108%",
      "marketCap": "11,175,875,772",
      "url": "/market-activity/stocks/paraa"
  },
  {
      "symbol": "CE",
      "name": "Celanese Corporation Celanese Corporation Common Stock",
      "lastsale": "$100.79",
      "netchange": "-0.44",
      "pctchange": "-0.435%",
      "marketCap": "11,170,043,082",
      "url": "/market-activity/stocks/ce"
  },
  {
      "symbol": "REXR",
      "name": "Rexford Industrial Realty, Inc. Common Stock",
      "lastsale": "$55.56",
      "netchange": "-0.25",
      "pctchange": "-0.448%",
      "marketCap": "11,162,926,963",
      "url": "/market-activity/stocks/rexr"
  },
  {
      "symbol": "VTRS",
      "name": "Viatris Inc. Common Stock",
      "lastsale": "$9.28",
      "netchange": "-0.08",
      "pctchange": "-0.855%",
      "marketCap": "11,106,433,540",
      "url": "/market-activity/stocks/vtrs"
  },
  {
      "symbol": "IP",
      "name": "International Paper Company Common Stock",
      "lastsale": "$31.76",
      "netchange": "0.07",
      "pctchange": "0.221%",
      "marketCap": "11,095,855,680",
      "url": "/market-activity/stocks/ip"
  },
  {
      "symbol": "BIO",
      "name": "Bio-Rad Laboratories, Inc. Class A Common Stock",
      "lastsale": "$372.51",
      "netchange": "8.17",
      "pctchange": "2.242%",
      "marketCap": "11,024,698,305",
      "url": "/market-activity/stocks/bio"
  },
  {
      "symbol": "TTC",
      "name": "Toro Company (The) Common Stock",
      "lastsale": "$105.30",
      "netchange": "0.28",
      "pctchange": "0.267%",
      "marketCap": "10,981,172,908",
      "url": "/market-activity/stocks/ttc"
  },
  {
      "symbol": "CHDN",
      "name": "Churchill Downs, Incorporated Common Stock",
      "lastsale": "$291.88",
      "netchange": "-1.37",
      "pctchange": "-0.467%",
      "marketCap": "10,925,639,317",
      "url": "/market-activity/stocks/chdn"
  },
  {
      "symbol": "FIVE",
      "name": "Five Below, Inc. Common Stock",
      "lastsale": "$196.23",
      "netchange": "3.42",
      "pctchange": "1.774%",
      "marketCap": "10,921,319,973",
      "url": "/market-activity/stocks/five"
  },
  {
      "symbol": "DPZ",
      "name": "Domino's Pizza Inc Common Stock",
      "lastsale": "$307.58",
      "netchange": "0.65",
      "pctchange": "0.212%",
      "marketCap": "10,893,976,708",
      "url": "/market-activity/stocks/dpz"
  },
  {
      "symbol": "AZPN",
      "name": "Aspen Technology, Inc. Common Stock",
      "lastsale": "$168.18",
      "netchange": "1.71",
      "pctchange": "1.027%",
      "marketCap": "10,893,232,525",
      "url": "/market-activity/stocks/azpn"
  },
  {
      "symbol": "BAP",
      "name": "Credicorp Ltd. Common Stock",
      "lastsale": "$136.96",
      "netchange": "-4.04",
      "pctchange": "-2.865%",
      "marketCap": "10,892,695,598",
      "url": "/market-activity/stocks/bap"
  },
  {
      "symbol": "GDDY",
      "name": "GoDaddy Inc. Class A Common Stock",
      "lastsale": "$70.45",
      "netchange": "0.02",
      "pctchange": "0.028%",
      "marketCap": "10,883,524,680",
      "url": "/market-activity/stocks/gddy"
  },
  {
      "symbol": "DOX",
      "name": "Amdocs Limited Ordinary Shares",
      "lastsale": "$90.16",
      "netchange": "0.90",
      "pctchange": "1.008%",
      "marketCap": "10,872,214,080",
      "url": "/market-activity/stocks/dox"
  },
  {
      "symbol": "OTEX",
      "name": "Open Text Corporation Common Shares",
      "lastsale": "$40.18",
      "netchange": "-0.075",
      "pctchange": "-0.186%",
      "marketCap": "10,867,208,121",
      "url": "/market-activity/stocks/otex"
  },
  {
      "symbol": "XM",
      "name": "Qualtrics International Inc. Class A Common Stock",
      "lastsale": "$17.92",
      "netchange": "-0.01",
      "pctchange": "-0.056%",
      "marketCap": "10,865,381,489",
      "url": "/market-activity/stocks/xm"
  },
  {
      "symbol": "DKNG",
      "name": "DraftKings Inc. Class A Common Stock",
      "lastsale": "$23.53",
      "netchange": "-0.47",
      "pctchange": "-1.958%",
      "marketCap": "10,863,787,235",
      "url": "/market-activity/stocks/dkng"
  },
  {
      "symbol": "ACM",
      "name": "AECOM Common Stock",
      "lastsale": "$78.14",
      "netchange": "0.26",
      "pctchange": "0.334%",
      "marketCap": "10,857,573,473",
      "url": "/market-activity/stocks/acm"
  },
  {
      "symbol": "SWAV",
      "name": "ShockWave Medical, Inc. Common Stock",
      "lastsale": "$296.20",
      "netchange": "-6.48",
      "pctchange": "-2.141%",
      "marketCap": "10,839,145,170",
      "url": "/market-activity/stocks/swav"
  },
  {
      "symbol": "LDOS",
      "name": "Leidos Holdings, Inc. Common Stock",
      "lastsale": "$78.91",
      "netchange": "0.64",
      "pctchange": "0.818%",
      "marketCap": "10,825,923,461",
      "url": "/market-activity/stocks/ldos"
  },
  {
      "symbol": "BRKR",
      "name": "Bruker Corporation Common Stock",
      "lastsale": "$73.75",
      "netchange": "-2.81",
      "pctchange": "-3.67%",
      "marketCap": "10,821,375,703",
      "url": "/market-activity/stocks/brkr"
  },
  {
      "symbol": "CNA",
      "name": "CNA Financial Corporation Common Stock",
      "lastsale": "$39.85",
      "netchange": "-0.47",
      "pctchange": "-1.166%",
      "marketCap": "10,773,520,386",
      "url": "/market-activity/stocks/cna"
  },
  {
      "symbol": "CHK",
      "name": "Chesapeake Energy Corporation Common Stock",
      "lastsale": "$79.78",
      "netchange": "2.52",
      "pctchange": "3.262%",
      "marketCap": "10,747,947,319",
      "url": "/market-activity/stocks/chk"
  },
  {
      "symbol": "CSL",
      "name": "Carlisle Companies Incorporated Common Stock",
      "lastsale": "$210.07",
      "netchange": "2.43",
      "pctchange": "1.17%",
      "marketCap": "10,730,338,208",
      "url": "/market-activity/stocks/csl"
  },
  {
      "symbol": "MANH",
      "name": "Manhattan Associates, Inc. Common Stock",
      "lastsale": "$172.82",
      "netchange": "2.20",
      "pctchange": "1.289%",
      "marketCap": "10,719,478,489",
      "url": "/market-activity/stocks/manh"
  },
  {
      "symbol": "AU",
      "name": "AngloGold Ashanti Limited Common Stock",
      "lastsale": "$25.54",
      "netchange": "-1.10",
      "pctchange": "-4.129%",
      "marketCap": "10,691,083,715",
      "url": "/market-activity/stocks/au"
  },
  {
      "symbol": "NMR",
      "name": "Nomura Holdings Inc ADR American Depositary Shares",
      "lastsale": "$3.55",
      "netchange": "-0.04",
      "pctchange": "-1.114%",
      "marketCap": "10,664,383,794",
      "url": "/market-activity/stocks/nmr"
  },
  {
      "symbol": "FLEX",
      "name": "Flex Ltd. Ordinary Shares",
      "lastsale": "$23.61",
      "netchange": "0.61",
      "pctchange": "2.652%",
      "marketCap": "10,650,022,788",
      "url": "/market-activity/stocks/flex"
  },
  {
      "symbol": "UI",
      "name": "Ubiquiti Inc. Common Stock",
      "lastsale": "$175.43",
      "netchange": "-3.44",
      "pctchange": "-1.923%",
      "marketCap": "10,603,252,696",
      "url": "/market-activity/stocks/ui"
  },
  {
      "symbol": "JBL",
      "name": "Jabil Inc. Common Stock",
      "lastsale": "$79.59",
      "netchange": "0.49",
      "pctchange": "0.619%",
      "marketCap": "10,560,344,472",
      "url": "/market-activity/stocks/jbl"
  },
  {
      "symbol": "CRBG",
      "name": "Corebridge Financial Inc. Common Stock",
      "lastsale": "$16.29",
      "netchange": "-0.45",
      "pctchange": "-2.688%",
      "marketCap": "10,548,819,808",
      "url": "/market-activity/stocks/crbg"
  },
  {
      "symbol": "WDC",
      "name": "Western Digital Corporation Common Stock",
      "lastsale": "$33.03",
      "netchange": "0.48",
      "pctchange": "1.475%",
      "marketCap": "10,547,398,819",
      "url": "/market-activity/stocks/wdc"
  },
  {
      "symbol": "TPL",
      "name": "Texas Pacific Land Corporation Common Stock",
      "lastsale": "$1,365.80",
      "netchange": "1.53",
      "pctchange": "0.112%",
      "marketCap": "10,510,508,437",
      "url": "/market-activity/stocks/tpl"
  },
  {
      "symbol": "Z",
      "name": "Zillow Group, Inc. Class C Capital Stock",
      "lastsale": "$44.82",
      "netchange": "-0.91",
      "pctchange": "-1.99%",
      "marketCap": "10,503,286,158",
      "url": "/market-activity/stocks/z"
  },
  {
      "symbol": "NWS",
      "name": "News Corporation Class B Common Stock",
      "lastsale": "$18.29",
      "netchange": "1.46",
      "pctchange": "8.675%",
      "marketCap": "10,497,382,335",
      "url": "/market-activity/stocks/nws"
  },
  {
      "symbol": "NWSA",
      "name": "News Corporation Class A Common Stock",
      "lastsale": "$18.16",
      "netchange": "1.42",
      "pctchange": "8.483%",
      "marketCap": "10,422,769,995",
      "url": "/market-activity/stocks/nwsa"
  },
  {
      "symbol": "ONON",
      "name": "On Holding AG Class A Ordinary Shares",
      "lastsale": "$32.87",
      "netchange": "-0.25",
      "pctchange": "-0.755%",
      "marketCap": "10,404,016,903",
      "url": "/market-activity/stocks/onon"
  },
  {
      "symbol": "CUBE",
      "name": "CubeSmart Common Shares",
      "lastsale": "$46.13",
      "netchange": "0.77",
      "pctchange": "1.698%",
      "marketCap": "10,403,375,852",
      "url": "/market-activity/stocks/cube"
  },
  {
      "symbol": "RPM",
      "name": "RPM International Inc. Common Stock",
      "lastsale": "$80.68",
      "netchange": "0.07",
      "pctchange": "0.087%",
      "marketCap": "10,400,590,308",
      "url": "/market-activity/stocks/rpm"
  },
  {
      "symbol": "GEN",
      "name": "Gen Digital Inc. Common Stock",
      "lastsale": "$16.22",
      "netchange": "-0.94",
      "pctchange": "-5.478%",
      "marketCap": "10,366,680,003",
      "url": "/market-activity/stocks/gen"
  },
  {
      "symbol": "ZG",
      "name": "Zillow Group, Inc. Class A Common Stock",
      "lastsale": "$44.14",
      "netchange": "-0.88",
      "pctchange": "-1.955%",
      "marketCap": "10,343,932,419",
      "url": "/market-activity/stocks/zg"
  },
  {
      "symbol": "GL",
      "name": "Globe Life Inc. Common Stock",
      "lastsale": "$107.10",
      "netchange": "-0.73",
      "pctchange": "-0.677%",
      "marketCap": "10,337,415,915",
      "url": "/market-activity/stocks/gl"
  },
  {
      "symbol": "TOST",
      "name": "Toast, Inc. Class A Common Stock",
      "lastsale": "$19.49",
      "netchange": "-1.31",
      "pctchange": "-6.298%",
      "marketCap": "10,320,866,528",
      "url": "/market-activity/stocks/tost"
  },
  {
      "symbol": "BWA",
      "name": "BorgWarner Inc. Common Stock",
      "lastsale": "$44.11",
      "netchange": "-0.53",
      "pctchange": "-1.187%",
      "marketCap": "10,312,269,804",
      "url": "/market-activity/stocks/bwa"
  },
  {
      "symbol": "QGEN",
      "name": "Qiagen N.V. Common Shares ",
      "lastsale": "$45.09",
      "netchange": "-0.45",
      "pctchange": "-0.988%",
      "marketCap": "10,267,777,746",
      "url": "/market-activity/stocks/qgen"
  },
  {
      "symbol": "APA",
      "name": "APA Corporation Common Stock",
      "lastsale": "$32.98",
      "netchange": "-0.10",
      "pctchange": "-0.302%",
      "marketCap": "10,258,323,299",
      "url": "/market-activity/stocks/apa"
  },
  {
      "symbol": "LII",
      "name": "Lennox International, Inc. Common Stock",
      "lastsale": "$288.91",
      "netchange": "-0.51",
      "pctchange": "-0.176%",
      "marketCap": "10,255,569,146",
      "url": "/market-activity/stocks/lii"
  },
  {
      "symbol": "APLS",
      "name": "Apellis Pharmaceuticals, Inc. Common Stock",
      "lastsale": "$87.96",
      "netchange": "-0.58",
      "pctchange": "-0.655%",
      "marketCap": "10,219,117,242",
      "url": "/market-activity/stocks/apls"
  },
  {
      "symbol": "AOS",
      "name": "A.O. Smith Corporation Common Stock",
      "lastsale": "$67.24",
      "netchange": "-1.16",
      "pctchange": "-1.696%",
      "marketCap": "10,147,555,934",
      "url": "/market-activity/stocks/aos"
  },
  {
      "symbol": "SCI",
      "name": "Service Corporation International Common Stock",
      "lastsale": "$66.08",
      "netchange": "0.06",
      "pctchange": "0.091%",
      "marketCap": "10,121,592,676",
      "url": "/market-activity/stocks/sci"
  },
  {
      "symbol": "LOGI",
      "name": "Logitech International S.A. Ordinary Shares",
      "lastsale": "$62.97",
      "netchange": "-1.18",
      "pctchange": "-1.839%",
      "marketCap": "10,094,343,510",
      "url": "/market-activity/stocks/logi"
  },
  {
      "symbol": "JHX",
      "name": "James Hardie Industries plc American Depositary Shares (Ireland)",
      "lastsale": "$22.65",
      "netchange": "-0.19",
      "pctchange": "-0.832%",
      "marketCap": "10,062,181,005",
      "url": "/market-activity/stocks/jhx"
  },
  {
      "symbol": "HSIC",
      "name": "Henry Schein, Inc. Common Stock",
      "lastsale": "$76.43",
      "netchange": "-0.50",
      "pctchange": "-0.65%",
      "marketCap": "10,027,250,665",
      "url": "/market-activity/stocks/hsic"
  },
  {
      "symbol": "REG",
      "name": "Regency Centers Corporation Common Stock",
      "lastsale": "$58.53",
      "netchange": "0.04",
      "pctchange": "0.068%",
      "marketCap": "10,026,653,377",
      "url": "/market-activity/stocks/reg"
  },
  {
      "symbol": "AGL",
      "name": "agilon health, inc. Common Stock",
      "lastsale": "$24.15",
      "netchange": "-1.02",
      "pctchange": "-4.052%",
      "marketCap": "10,009,319,269",
      "url": "/market-activity/stocks/agl"
  },
  {
      "symbol": "DAR",
      "name": "Darling Ingredients Inc. Common Stock",
      "lastsale": "$62.40",
      "netchange": "-0.80",
      "pctchange": "-1.266%",
      "marketCap": "9,978,253,022",
      "url": "/market-activity/stocks/dar"
  },
  {
      "symbol": "BILL",
      "name": "BILL Holdings, Inc. Common Stock",
      "lastsale": "$93.70",
      "netchange": "-5.82",
      "pctchange": "-5.848%",
      "marketCap": "9,968,324,723",
      "url": "/market-activity/stocks/bill"
  },
  {
      "symbol": "CELH",
      "name": "Celsius Holdings, Inc. Common Stock",
      "lastsale": "$129.83",
      "netchange": "-0.38",
      "pctchange": "-0.292%",
      "marketCap": "9,958,853,451",
      "url": "/market-activity/stocks/celh"
  },
  {
      "symbol": "IOT",
      "name": "Samsara Inc. Class A Common Stock",
      "lastsale": "$18.97",
      "netchange": "-0.15",
      "pctchange": "-0.785%",
      "marketCap": "9,947,084,065",
      "url": "/market-activity/stocks/iot"
  },
  {
      "symbol": "ARCC",
      "name": "Ares Capital Corporation Common Stock",
      "lastsale": "$18.25",
      "netchange": "0.02",
      "pctchange": "0.11%",
      "marketCap": "9,938,604,710",
      "url": "/market-activity/stocks/arcc"
  },
  {
      "symbol": "UTHR",
      "name": "United Therapeutics Corporation Common Stock",
      "lastsale": "$214.02",
      "netchange": "0.54",
      "pctchange": "0.253%",
      "marketCap": "9,909,480,417",
      "url": "/market-activity/stocks/uthr"
  },
  {
      "symbol": "DOCU",
      "name": "DocuSign, Inc. Common Stock",
      "lastsale": "$48.85",
      "netchange": "-0.59",
      "pctchange": "-1.193%",
      "marketCap": "9,883,193,119",
      "url": "/market-activity/stocks/docu"
  },
  {
      "symbol": "AFG",
      "name": "American Financial Group, Inc. Common Stock",
      "lastsale": "$116.04",
      "netchange": "0.04",
      "pctchange": "0.034%",
      "marketCap": "9,883,130,977",
      "url": "/market-activity/stocks/afg"
  },
  {
      "symbol": "RGA",
      "name": "Reinsurance Group of America, Incorporated Common Stock",
      "lastsale": "$148.44",
      "netchange": "-1.05",
      "pctchange": "-0.702%",
      "marketCap": "9,877,266,773",
      "url": "/market-activity/stocks/rga"
  },
  {
      "symbol": "FND",
      "name": "Floor & Decor Holdings, Inc. Common Stock",
      "lastsale": "$92.57",
      "netchange": "-0.59",
      "pctchange": "-0.633%",
      "marketCap": "9,855,369,055",
      "url": "/market-activity/stocks/fnd"
  },
  {
      "symbol": "CCK",
      "name": "Crown Holdings, Inc.",
      "lastsale": "$82.02",
      "netchange": "-1.39",
      "pctchange": "-1.666%",
      "marketCap": "9,851,191,724",
      "url": "/market-activity/stocks/cck"
  },
  {
      "symbol": "CRL",
      "name": "Charles River Laboratories International, Inc. Common Stock",
      "lastsale": "$191.24",
      "netchange": "-4.51",
      "pctchange": "-2.304%",
      "marketCap": "9,788,000,739",
      "url": "/market-activity/stocks/crl"
  },
  {
      "symbol": "CG",
      "name": "The Carlyle Group Inc. Common Stock",
      "lastsale": "$27.03",
      "netchange": "0.615",
      "pctchange": "2.328%",
      "marketCap": "9,786,385,681",
      "url": "/market-activity/stocks/cg"
  },
  {
      "symbol": "WES",
      "name": "Western Midstream Partners, LP Common Units Representing Limited Partner Interests",
      "lastsale": "$25.40",
      "netchange": "-0.06",
      "pctchange": "-0.236%",
      "marketCap": "9,776,264,649",
      "url": "/market-activity/stocks/wes"
  },
  {
      "symbol": "UHS",
      "name": "Universal Health Services, Inc. Common Stock",
      "lastsale": "$139.53",
      "netchange": "-0.50",
      "pctchange": "-0.357%",
      "marketCap": "9,773,067,000",
      "url": "/market-activity/stocks/uhs"
  },
  {
      "symbol": "PARA",
      "name": "Paramount Global Class B Common Stock",
      "lastsale": "$15.02",
      "netchange": "-0.35",
      "pctchange": "-2.277%",
      "marketCap": "9,770,759,843",
      "url": "/market-activity/stocks/para"
  },
  {
      "symbol": "TPR",
      "name": "Tapestry, Inc. Common Stock",
      "lastsale": "$41.18",
      "netchange": "0.97",
      "pctchange": "2.412%",
      "marketCap": "9,721,594,608",
      "url": "/market-activity/stocks/tpr"
  },
  {
      "symbol": "ARMK",
      "name": "Aramark Common Stock",
      "lastsale": "$37.23",
      "netchange": "0.03",
      "pctchange": "0.081%",
      "marketCap": "9,698,890,576",
      "url": "/market-activity/stocks/armk"
  },
  {
      "symbol": "PNR",
      "name": "Pentair plc. Ordinary Share",
      "lastsale": "$58.80",
      "netchange": "0.15",
      "pctchange": "0.256%",
      "marketCap": "9,698,483,995",
      "url": "/market-activity/stocks/pnr"
  },
  {
      "symbol": "LECO",
      "name": "Lincoln Electric Holdings, Inc. Common Shares",
      "lastsale": "$168.33",
      "netchange": "1.30",
      "pctchange": "0.778%",
      "marketCap": "9,695,381,788",
      "url": "/market-activity/stocks/leco"
  },
  {
      "symbol": "RBA",
      "name": "Ritchie Bros. Auctioneers Incorporated Common Stock",
      "lastsale": "$53.29",
      "netchange": "-1.24",
      "pctchange": "-2.274%",
      "marketCap": "9,687,529,575",
      "url": "/market-activity/stocks/rba"
  },
  {
      "symbol": "PAG",
      "name": "Penske Automotive Group, Inc. Common Stock",
      "lastsale": "$140.13",
      "netchange": "1.18",
      "pctchange": "0.849%",
      "marketCap": "9,678,652,422",
      "url": "/market-activity/stocks/pag"
  },
  {
      "symbol": "LAMR",
      "name": "Lamar Advertising Company Class A Common Stock",
      "lastsale": "$94.87",
      "netchange": "0.34",
      "pctchange": "0.36%",
      "marketCap": "9,665,144,135",
      "url": "/market-activity/stocks/lamr"
  },
  {
      "symbol": "CX",
      "name": "Cemex, S.A.B. de C.V. Sponsored ADR",
      "lastsale": "$6.61",
      "netchange": "-0.05",
      "pctchange": "-0.751%",
      "marketCap": "9,590,004,967",
      "url": "/market-activity/stocks/cx"
  },
  {
      "symbol": "COTY",
      "name": "Coty Inc. Class A Common Stock",
      "lastsale": "$11.23",
      "netchange": "-0.02",
      "pctchange": "-0.178%",
      "marketCap": "9,574,651,070",
      "url": "/market-activity/stocks/coty"
  },
  {
      "symbol": "OC",
      "name": "Owens Corning Inc Common Stock New",
      "lastsale": "$105.34",
      "netchange": "0.32",
      "pctchange": "0.305%",
      "marketCap": "9,562,493,317",
      "url": "/market-activity/stocks/oc"
  },
  {
      "symbol": "MTN",
      "name": "Vail Resorts, Inc. Common Stock",
      "lastsale": "$236.93",
      "netchange": "-2.49",
      "pctchange": "-1.04%",
      "marketCap": "9,555,492,571",
      "url": "/market-activity/stocks/mtn"
  },
  {
      "symbol": "ALLE",
      "name": "Allegion plc Ordinary Shares",
      "lastsale": "$108.72",
      "netchange": "-0.15",
      "pctchange": "-0.138%",
      "marketCap": "9,552,947,098",
      "url": "/market-activity/stocks/alle"
  },
  {
      "symbol": "KEP",
      "name": "Korea Electric Power Corporation Common Stock",
      "lastsale": "$7.44",
      "netchange": "0.17",
      "pctchange": "2.338%",
      "marketCap": "9,552,425,466",
      "url": "/market-activity/stocks/kep"
  },
  {
      "symbol": "BJ",
      "name": "BJ's Wholesale Club Holdings, Inc. Common Stock",
      "lastsale": "$70.80",
      "netchange": "-1.31",
      "pctchange": "-1.817%",
      "marketCap": "9,480,374,738",
      "url": "/market-activity/stocks/bj"
  },
  {
      "symbol": "USFD",
      "name": "US Foods Holding Corp. Common Stock",
      "lastsale": "$40.81",
      "netchange": "1.19",
      "pctchange": "3.004%",
      "marketCap": "9,465,839,261",
      "url": "/market-activity/stocks/usfd"
  },
  {
      "symbol": "NBIX",
      "name": "Neurocrine Biosciences, Inc. Common Stock",
      "lastsale": "$96.71",
      "netchange": "-1.11",
      "pctchange": "-1.135%",
      "marketCap": "9,431,704,838",
      "url": "/market-activity/stocks/nbix"
  },
  {
      "symbol": "PFGC",
      "name": "Performance Food Group Company Common Stock",
      "lastsale": "$60.27",
      "netchange": "0.19",
      "pctchange": "0.316%",
      "marketCap": "9,410,579,678",
      "url": "/market-activity/stocks/pfgc"
  },
  {
      "symbol": "EMN",
      "name": "Eastman Chemical Company Common Stock",
      "lastsale": "$78.70",
      "netchange": "-0.11",
      "pctchange": "-0.14%",
      "marketCap": "9,376,162,568",
      "url": "/market-activity/stocks/emn"
  },
  {
      "symbol": "FNF",
      "name": "FNF Group of Fidelity National Financial, Inc. Common Stock",
      "lastsale": "$34.38",
      "netchange": "-0.08",
      "pctchange": "-0.232%",
      "marketCap": "9,358,473,738",
      "url": "/market-activity/stocks/fnf"
  },
  {
      "symbol": "JNPR",
      "name": "Juniper Networks, Inc. Common Stock",
      "lastsale": "$29.08",
      "netchange": "0.16",
      "pctchange": "0.553%",
      "marketCap": "9,344,676,250",
      "url": "/market-activity/stocks/jnpr"
  },
  {
      "symbol": "VST",
      "name": "Vistra Corp. Common Stock",
      "lastsale": "$24.52",
      "netchange": "-0.12",
      "pctchange": "-0.487%",
      "marketCap": "9,312,506,362",
      "url": "/market-activity/stocks/vst"
  },
  {
      "symbol": "TFII",
      "name": "TFI International Inc. Common Shares",
      "lastsale": "$107.00",
      "netchange": "0.81",
      "pctchange": "0.763%",
      "marketCap": "9,284,518,079",
      "url": "/market-activity/stocks/tfii"
  },
  {
      "symbol": "BSAC",
      "name": "Banco Santander - Chile ADS",
      "lastsale": "$19.70",
      "netchange": "0.05",
      "pctchange": "0.254%",
      "marketCap": "9,280,971,725",
      "url": "/market-activity/stocks/bsac"
  },
  {
      "symbol": "RXDX",
      "name": "Prometheus Biosciences, Inc. Common Stock",
      "lastsale": "$193.90",
      "netchange": "0.10",
      "pctchange": "0.052%",
      "marketCap": "9,262,925,456",
      "url": "/market-activity/stocks/rxdx"
  },
  {
      "symbol": "NLY",
      "name": "Annaly Capital Management Inc. Common Stock",
      "lastsale": "$18.74",
      "netchange": "-0.18",
      "pctchange": "-0.951%",
      "marketCap": "9,255,324,730",
      "url": "/market-activity/stocks/nly"
  },
  {
      "symbol": "LSXMB",
      "name": "Liberty Media Corporation Series B Liberty SiriusXM Common Stock",
      "lastsale": "$28.33",
      "netchange": "-0.57",
      "pctchange": "-1.972%",
      "marketCap": "9,251,269,154",
      "url": "/market-activity/stocks/lsxmb"
  },
  {
      "symbol": "KNX",
      "name": "Knight-Swift Transportation Holdings Inc.",
      "lastsale": "$57.28",
      "netchange": "0.15",
      "pctchange": "0.263%",
      "marketCap": "9,222,612,933",
      "url": "/market-activity/stocks/knx"
  },
  {
      "symbol": "PAC",
      "name": "Grupo Aeroportuario Del Pacifico, S.A. B. de C.V. Grupo Aeroportuario Del Pacifico, S.A. de C.V. (each representing 10 Series B shares)",
      "lastsale": "$181.73",
      "netchange": "-0.82",
      "pctchange": "-0.449%",
      "marketCap": "9,182,407,281",
      "url": "/market-activity/stocks/pac"
  },
  {
      "symbol": "CZR",
      "name": "Caesars Entertainment, Inc. Common Stock",
      "lastsale": "$42.67",
      "netchange": "-0.93",
      "pctchange": "-2.133%",
      "marketCap": "9,181,758,933",
      "url": "/market-activity/stocks/czr"
  },
  {
      "symbol": "AGCO",
      "name": "AGCO Corporation Common Stock",
      "lastsale": "$122.51",
      "netchange": "-1.01",
      "pctchange": "-0.818%",
      "marketCap": "9,169,407,594",
      "url": "/market-activity/stocks/agco"
  },
  {
      "symbol": "AAL",
      "name": "American Airlines Group Inc. Common Stock",
      "lastsale": "$14.02",
      "netchange": "-0.05",
      "pctchange": "-0.355%",
      "marketCap": "9,152,487,204",
      "url": "/market-activity/stocks/aal"
  },
  {
      "symbol": "PNW",
      "name": "Pinnacle West Capital Corporation Common Stock",
      "lastsale": "$80.81",
      "netchange": "0.25",
      "pctchange": "0.31%",
      "marketCap": "9,151,852,584",
      "url": "/market-activity/stocks/pnw"
  },
  {
      "symbol": "RNR",
      "name": "RenaissanceRe Holdings Ltd. Common Stock",
      "lastsale": "$208.91",
      "netchange": "-2.28",
      "pctchange": "-1.08%",
      "marketCap": "9,132,014,934",
      "url": "/market-activity/stocks/rnr"
  },
  {
      "symbol": "PCTY",
      "name": "Paylocity Holding Corporation Common Stock",
      "lastsale": "$163.30",
      "netchange": "-1.90",
      "pctchange": "-1.15%",
      "marketCap": "9,107,194,949",
      "url": "/market-activity/stocks/pcty"
  },
  {
      "symbol": "LSXMA",
      "name": "Liberty Media Corporation Series A Liberty SiriusXM Common Stock",
      "lastsale": "$27.88",
      "netchange": "-1.14",
      "pctchange": "-3.928%",
      "marketCap": "9,104,319,944",
      "url": "/market-activity/stocks/lsxma"
  },
  {
      "symbol": "MASI",
      "name": "Masimo Corporation Common Stock",
      "lastsale": "$172.63",
      "netchange": "-0.13",
      "pctchange": "-0.075%",
      "marketCap": "9,080,673,420",
      "url": "/market-activity/stocks/masi"
  },
  {
      "symbol": "LSXMK",
      "name": "Liberty Media Corporation Series C Liberty SiriusXM Common Stock",
      "lastsale": "$27.80",
      "netchange": "-1.06",
      "pctchange": "-3.673%",
      "marketCap": "9,078,195,640",
      "url": "/market-activity/stocks/lsxmk"
  },
  {
      "symbol": "RDY",
      "name": "Dr. Reddy's Laboratories Ltd Common Stock",
      "lastsale": "$54.48",
      "netchange": "-0.28",
      "pctchange": "-0.511%",
      "marketCap": "9,049,406,665",
      "url": "/market-activity/stocks/rdy"
  },
  {
      "symbol": "QRVO",
      "name": "Qorvo, Inc. Common Stock",
      "lastsale": "$90.24",
      "netchange": "-0.32",
      "pctchange": "-0.353%",
      "marketCap": "9,014,002,310",
      "url": "/market-activity/stocks/qrvo"
  },
  {
      "symbol": "TEVA",
      "name": "Teva Pharmaceutical Industries Limited American Depositary Shares",
      "lastsale": "$8.03",
      "netchange": "-0.18",
      "pctchange": "-2.192%",
      "marketCap": "8,996,858,702",
      "url": "/market-activity/stocks/teva"
  },
  {
      "symbol": "VFC",
      "name": "V.F. Corporation Common Stock",
      "lastsale": "$21.29",
      "netchange": "-0.20",
      "pctchange": "-0.931%",
      "marketCap": "8,979,721,237",
      "url": "/market-activity/stocks/vfc"
  },
  {
      "symbol": "RGLD",
      "name": "Royal Gold, Inc. Common Stock",
      "lastsale": "$136.58",
      "netchange": "0.89",
      "pctchange": "0.656%",
      "marketCap": "8,970,348,497",
      "url": "/market-activity/stocks/rgld"
  },
  {
      "symbol": "WSC",
      "name": "WillScot Mobile Mini Holdings Corp. Class A Common Stock",
      "lastsale": "$44.03",
      "netchange": "0.15",
      "pctchange": "0.342%",
      "marketCap": "8,966,131,782",
      "url": "/market-activity/stocks/wsc"
  },
  {
      "symbol": "PAA",
      "name": "Plains All American Pipeline, L.P. Common Units representing Limited Partner Interests",
      "lastsale": "$12.64",
      "netchange": "0.08",
      "pctchange": "0.637%",
      "marketCap": "8,827,649,676",
      "url": "/market-activity/stocks/paa"
  },
  {
      "symbol": "CASY",
      "name": "Casey's General Stores, Inc. Common Stock",
      "lastsale": "$236.06",
      "netchange": "5.58",
      "pctchange": "2.421%",
      "marketCap": "8,796,174,419",
      "url": "/market-activity/stocks/casy"
  },
  {
      "symbol": "CDAY",
      "name": "Ceridian HCM Holding Inc. Common Stock",
      "lastsale": "$57.59",
      "netchange": "0.05",
      "pctchange": "0.087%",
      "marketCap": "8,793,810,900",
      "url": "/market-activity/stocks/cday"
  },
  {
      "symbol": "VIPS",
      "name": "Vipshop Holdings Limited American Depositary Shares, each representing two ordinary shares",
      "lastsale": "$15.56",
      "netchange": "-0.50",
      "pctchange": "-3.113%",
      "marketCap": "8,761,224,414",
      "url": "/market-activity/stocks/vips"
  },
  {
      "symbol": "BEP",
      "name": "Brookfield Renewable Partners L.P. ",
      "lastsale": "$31.81",
      "netchange": "0.24",
      "pctchange": "0.76%",
      "marketCap": "8,759,161,838",
      "url": "/market-activity/stocks/bep"
  },
  {
      "symbol": "AEG",
      "name": "AEGON N.V. Common Stock",
      "lastsale": "$4.33",
      "netchange": "-0.02",
      "pctchange": "-0.46%",
      "marketCap": "8,690,190,258",
      "url": "/market-activity/stocks/aeg"
  },
  {
      "symbol": "UNM",
      "name": "Unum Group Common Stock",
      "lastsale": "$43.97",
      "netchange": "0.47",
      "pctchange": "1.08%",
      "marketCap": "8,687,598,888",
      "url": "/market-activity/stocks/unm"
  },
  {
      "symbol": "XRAY",
      "name": "DENTSPLY SIRONA Inc. Common Stock",
      "lastsale": "$40.88",
      "netchange": "-0.11",
      "pctchange": "-0.268%",
      "marketCap": "8,685,615,844",
      "url": "/market-activity/stocks/xray"
  },
  {
      "symbol": "DCP",
      "name": "DCP Midstream,  LP Common Units ",
      "lastsale": "$41.50",
      "netchange": "0.01",
      "pctchange": "0.024%",
      "marketCap": "8,654,851,228",
      "url": "/market-activity/stocks/dcp"
  },
  {
      "symbol": "XP",
      "name": "XP Inc. Class A Common Stock",
      "lastsale": "$15.38",
      "netchange": "-0.15",
      "pctchange": "-0.966%",
      "marketCap": "8,620,778,452",
      "url": "/market-activity/stocks/xp"
  },
  {
      "symbol": "MTCH",
      "name": "Match Group, Inc. Common Stock",
      "lastsale": "$30.86",
      "netchange": "-0.84",
      "pctchange": "-2.65%",
      "marketCap": "8,619,935,245",
      "url": "/market-activity/stocks/mtch"
  },
  {
      "symbol": "JAZZ",
      "name": "Jazz Pharmaceuticals plc Common Stock (Ireland)",
      "lastsale": "$135.72",
      "netchange": "-1.37",
      "pctchange": "-0.999%",
      "marketCap": "8,595,341,680",
      "url": "/market-activity/stocks/jazz"
  },
  {
      "symbol": "ASR",
      "name": "Grupo Aeroportuario del Sureste, S.A. de C.V. Common Stock",
      "lastsale": "$286.45",
      "netchange": "1.37",
      "pctchange": "0.481%",
      "marketCap": "8,593,500,000",
      "url": "/market-activity/stocks/asr"
  },
  {
      "symbol": "CGNX",
      "name": "Cognex Corporation Common Stock",
      "lastsale": "$49.72",
      "netchange": "-0.41",
      "pctchange": "-0.818%",
      "marketCap": "8,587,845,931",
      "url": "/market-activity/stocks/cgnx"
  },
  {
      "symbol": "TWLO",
      "name": "Twilio Inc. Class A Common Stock",
      "lastsale": "$45.83",
      "netchange": "-1.65",
      "pctchange": "-3.475%",
      "marketCap": "8,582,802,297",
      "url": "/market-activity/stocks/twlo"
  },
  {
      "symbol": "GGB",
      "name": "Gerdau S.A. Common Stock",
      "lastsale": "$4.90",
      "netchange": "0.06",
      "pctchange": "1.24%",
      "marketCap": "8,565,166,469",
      "url": "/market-activity/stocks/ggb"
  },
  {
      "symbol": "INSP",
      "name": "Inspire Medical Systems, Inc. Common Stock",
      "lastsale": "$293.89",
      "netchange": "2.56",
      "pctchange": "0.879%",
      "marketCap": "8,561,137,370",
      "url": "/market-activity/stocks/insp"
  },
  {
      "symbol": "KRTX",
      "name": "Karuna Therapeutics, Inc. Common Stock",
      "lastsale": "$227.98",
      "netchange": "0.18",
      "pctchange": "0.079%",
      "marketCap": "8,520,546,178",
      "url": "/market-activity/stocks/krtx"
  },
  {
      "symbol": "DVA",
      "name": "DaVita Inc. Common Stock",
      "lastsale": "$93.72",
      "netchange": "-1.87",
      "pctchange": "-1.956%",
      "marketCap": "8,496,063,077",
      "url": "/market-activity/stocks/dva"
  },
  {
      "symbol": "HAS",
      "name": "Hasbro, Inc. Common Stock",
      "lastsale": "$61.19",
      "netchange": "1.17",
      "pctchange": "1.949%",
      "marketCap": "8,480,834,627",
      "url": "/market-activity/stocks/has"
  },
  {
      "symbol": "XPEV",
      "name": "XPeng Inc. American depositary shares, each representing two Class A ordinary shares",
      "lastsale": "$9.82",
      "netchange": "-0.93",
      "pctchange": "-8.651%",
      "marketCap": "8,472,455,390",
      "url": "/market-activity/stocks/xpev"
  },
  {
      "symbol": "ESLT",
      "name": "Elbit Systems Ltd. Ordinary Shares",
      "lastsale": "$190.80",
      "netchange": "-2.72",
      "pctchange": "-1.406%",
      "marketCap": "8,461,531,238",
      "url": "/market-activity/stocks/eslt"
  },
  {
      "symbol": "RGEN",
      "name": "Repligen Corporation Common Stock",
      "lastsale": "$151.98",
      "netchange": "-0.36",
      "pctchange": "-0.236%",
      "marketCap": "8,456,812,507",
      "url": "/market-activity/stocks/rgen"
  },
  {
      "symbol": "EQH",
      "name": "Equitable Holdings, Inc. Common Stock",
      "lastsale": "$23.47",
      "netchange": "0.04",
      "pctchange": "0.171%",
      "marketCap": "8,427,110,458",
      "url": "/market-activity/stocks/eqh"
  },
  {
      "symbol": "BKI",
      "name": "Black Knight, Inc. Common Stock ",
      "lastsale": "$53.69",
      "netchange": "-0.82",
      "pctchange": "-1.504%",
      "marketCap": "8,418,583,302",
      "url": "/market-activity/stocks/bki"
  },
  {
      "symbol": "KEY",
      "name": "KeyCorp Common Stock",
      "lastsale": "$8.99",
      "netchange": "-0.10",
      "pctchange": "-1.10%",
      "marketCap": "8,407,708,710",
      "url": "/market-activity/stocks/key"
  },
  {
      "symbol": "RRX",
      "name": "Regal Rexnord Corporation Common Stock",
      "lastsale": "$126.70",
      "netchange": "0.27",
      "pctchange": "0.214%",
      "marketCap": "8,394,673,970",
      "url": "/market-activity/stocks/rrx"
  },
  {
      "symbol": "ZI",
      "name": "ZoomInfo Technologies Inc Common Stock",
      "lastsale": "$20.61",
      "netchange": "-0.58",
      "pctchange": "-2.737%",
      "marketCap": "8,328,407,018",
      "url": "/market-activity/stocks/zi"
  },
  {
      "symbol": "FFIV",
      "name": "F5, Inc. Common Stock",
      "lastsale": "$137.66",
      "netchange": "2.86",
      "pctchange": "2.122%",
      "marketCap": "8,323,611,900",
      "url": "/market-activity/stocks/ffiv"
  },
  {
      "symbol": "SNX",
      "name": "TD SYNNEX Corporation Common Stock",
      "lastsale": "$87.85",
      "netchange": "-0.06",
      "pctchange": "-0.068%",
      "marketCap": "8,289,264,910",
      "url": "/market-activity/stocks/snx"
  },
  {
      "symbol": "FBIN",
      "name": "Fortune Brands Innovations, Inc. Common Stock",
      "lastsale": "$65.25",
      "netchange": "-0.15",
      "pctchange": "-0.229%",
      "marketCap": "8,284,949,883",
      "url": "/market-activity/stocks/fbin"
  },
  {
      "symbol": "SKX",
      "name": "Skechers U.S.A., Inc. Common Stock",
      "lastsale": "$53.22",
      "netchange": "0.72",
      "pctchange": "1.371%",
      "marketCap": "8,264,196,013",
      "url": "/market-activity/stocks/skx"
  },
  {
      "symbol": "SKM",
      "name": "SK Telecom Co., Ltd. Common Stock",
      "lastsale": "$20.87",
      "netchange": "-0.13",
      "pctchange": "-0.619%",
      "marketCap": "8,215,377,348",
      "url": "/market-activity/stocks/skm"
  },
  {
      "symbol": "LBTYK",
      "name": "Liberty Global plc Class C Ordinary Shares",
      "lastsale": "$18.01",
      "netchange": "-0.14",
      "pctchange": "-0.771%",
      "marketCap": "8,215,077,726",
      "url": "/market-activity/stocks/lbtyk"
  },
  {
      "symbol": "CHE",
      "name": "Chemed Corp",
      "lastsale": "$547.16",
      "netchange": "1.99",
      "pctchange": "0.365%",
      "marketCap": "8,209,335,305",
      "url": "/market-activity/stocks/che"
  },
  {
      "symbol": "COLD",
      "name": "Americold Realty Trust, Inc. Common Stock",
      "lastsale": "$30.11",
      "netchange": "-0.03",
      "pctchange": "-0.10%",
      "marketCap": "8,132,603,598",
      "url": "/market-activity/stocks/cold"
  },
  {
      "symbol": "APP",
      "name": "Applovin Corporation Class A Common Stock",
      "lastsale": "$21.51",
      "netchange": "-0.49",
      "pctchange": "-2.227%",
      "marketCap": "8,096,433,262",
      "url": "/market-activity/stocks/app"
  },
  {
      "symbol": "MORN",
      "name": "Morningstar, Inc. Common Stock",
      "lastsale": "$189.94",
      "netchange": "0.44",
      "pctchange": "0.232%",
      "marketCap": "8,082,121,745",
      "url": "/market-activity/stocks/morn"
  },
  {
      "symbol": "KBR",
      "name": "KBR, Inc. Common Stock",
      "lastsale": "$59.18",
      "netchange": "0.07",
      "pctchange": "0.118%",
      "marketCap": "8,068,643,218",
      "url": "/market-activity/stocks/kbr"
  },
  {
      "symbol": "DLB",
      "name": "Dolby Laboratories Common Stock",
      "lastsale": "$84.15",
      "netchange": "-0.05",
      "pctchange": "-0.059%",
      "marketCap": "8,063,410,865",
      "url": "/market-activity/stocks/dlb"
  },
  {
      "symbol": "OVV",
      "name": "Ovintiv Inc. (DE)",
      "lastsale": "$32.88",
      "netchange": "-0.38",
      "pctchange": "-1.143%",
      "marketCap": "8,039,947,147",
      "url": "/market-activity/stocks/ovv"
  },
  {
      "symbol": "NNN",
      "name": "NNN REIT, Inc. Common Stock",
      "lastsale": "$44.10",
      "netchange": "0.43",
      "pctchange": "0.985%",
      "marketCap": "8,030,017,384",
      "url": "/market-activity/stocks/nnn"
  },
  {
      "symbol": "GPK",
      "name": "Graphic Packaging Holding Company",
      "lastsale": "$25.95",
      "netchange": "0.27",
      "pctchange": "1.051%",
      "marketCap": "7,975,030,864",
      "url": "/market-activity/stocks/gpk"
  },
  {
      "symbol": "NVCR",
      "name": "NovoCure Limited Ordinary Shares",
      "lastsale": "$75.01",
      "netchange": "1.83",
      "pctchange": "2.501%",
      "marketCap": "7,965,289,247",
      "url": "/market-activity/stocks/nvcr"
  },
  {
      "symbol": "PATH",
      "name": "UiPath, Inc. Class A Common Stock",
      "lastsale": "$14.25",
      "netchange": "-0.36",
      "pctchange": "-2.464%",
      "marketCap": "7,943,274,715",
      "url": "/market-activity/stocks/path"
  },
  {
      "symbol": "ICL",
      "name": "ICL Group Ltd. Ordinary Shares",
      "lastsale": "$6.16",
      "netchange": "-0.08",
      "pctchange": "-1.282%",
      "marketCap": "7,941,817,391",
      "url": "/market-activity/stocks/icl"
  },
  {
      "symbol": "ATR",
      "name": "AptarGroup, Inc. Common Stock",
      "lastsale": "$120.79",
      "netchange": "1.51",
      "pctchange": "1.266%",
      "marketCap": "7,897,845,091",
      "url": "/market-activity/stocks/atr"
  },
  {
      "symbol": "LBTYA",
      "name": "Liberty Global plc Class A Ordinary Shares",
      "lastsale": "$17.23",
      "netchange": "-0.12",
      "pctchange": "-0.692%",
      "marketCap": "7,859,288,685",
      "url": "/market-activity/stocks/lbtya"
  },
  {
      "symbol": "EME",
      "name": "EMCOR Group, Inc. Common Stock",
      "lastsale": "$165.10",
      "netchange": "0.06",
      "pctchange": "0.036%",
      "marketCap": "7,856,178,166",
      "url": "/market-activity/stocks/eme"
  },
  {
      "symbol": "SEIC",
      "name": "SEI Investments Company Common Stock",
      "lastsale": "$58.76",
      "netchange": "0.43",
      "pctchange": "0.737%",
      "marketCap": "7,833,065,672",
      "url": "/market-activity/stocks/seic"
  },
  {
      "symbol": "HOOD",
      "name": "Robinhood Markets, Inc. Class A Common Stock",
      "lastsale": "$8.74",
      "netchange": "-0.91",
      "pctchange": "-9.43%",
      "marketCap": "7,831,441,594",
      "url": "/market-activity/stocks/hood"
  },
  {
      "symbol": "WWE",
      "name": "World Wrestling Entertainment, Inc. Class A Common Stock",
      "lastsale": "$105.17",
      "netchange": "0.46",
      "pctchange": "0.439%",
      "marketCap": "7,829,499,492",
      "url": "/market-activity/stocks/wwe"
  },
  {
      "symbol": "IRDM",
      "name": "Iridium Communications Inc Common Stock",
      "lastsale": "$62.08",
      "netchange": "-0.43",
      "pctchange": "-0.688%",
      "marketCap": "7,817,386,938",
      "url": "/market-activity/stocks/irdm"
  },
  {
      "symbol": "IBKR",
      "name": "Interactive Brokers Group, Inc. Class A Common Stock",
      "lastsale": "$75.77",
      "netchange": "-0.09",
      "pctchange": "-0.119%",
      "marketCap": "7,804,264,690",
      "url": "/market-activity/stocks/ibkr"
  },
  {
      "symbol": "HII",
      "name": "Huntington Ingalls Industries, Inc. Common Stock",
      "lastsale": "$195.27",
      "netchange": "-1.49",
      "pctchange": "-0.757%",
      "marketCap": "7,796,300,226",
      "url": "/market-activity/stocks/hii"
  },
  {
      "symbol": "DBX",
      "name": "Dropbox, Inc. Class A Common Stock",
      "lastsale": "$22.02",
      "netchange": "0.30",
      "pctchange": "1.381%",
      "marketCap": "7,787,121,157",
      "url": "/market-activity/stocks/dbx"
  },
  {
      "symbol": "TTEK",
      "name": "Tetra Tech, Inc. Common Stock",
      "lastsale": "$146.30",
      "netchange": "-0.73",
      "pctchange": "-0.496%",
      "marketCap": "7,786,984,136",
      "url": "/market-activity/stocks/ttek"
  },
  {
      "symbol": "DINO",
      "name": "HF Sinclair Corporation Common Stock",
      "lastsale": "$40.05",
      "netchange": "-0.06",
      "pctchange": "-0.15%",
      "marketCap": "7,718,844,911",
      "url": "/market-activity/stocks/dino"
  },
  {
      "symbol": "SSL",
      "name": "Sasol Ltd. American Depositary Shares",
      "lastsale": "$12.14",
      "netchange": "0.26",
      "pctchange": "2.189%",
      "marketCap": "7,700,842,257",
      "url": "/market-activity/stocks/ssl"
  },
  {
      "symbol": "DCI",
      "name": "Donaldson Company, Inc. Common Stock",
      "lastsale": "$63.29",
      "netchange": "-0.01",
      "pctchange": "-0.016%",
      "marketCap": "7,675,566,837",
      "url": "/market-activity/stocks/dci"
  },
  {
      "symbol": "HR",
      "name": "Healthcare Realty Trust Incorporated Common Stock",
      "lastsale": "$20.14",
      "netchange": "0.16",
      "pctchange": "0.801%",
      "marketCap": "7,668,906,401",
      "url": "/market-activity/stocks/hr"
  },
  {
      "symbol": "KNSL",
      "name": "Kinsale Capital Group, Inc. Common Stock",
      "lastsale": "$329.69",
      "netchange": "-1.99",
      "pctchange": "-0.60%",
      "marketCap": "7,633,846,668",
      "url": "/market-activity/stocks/knsl"
  },
  {
      "symbol": "NATI",
      "name": "National Instruments Corporation Common Stock",
      "lastsale": "$58.01",
      "netchange": "0.03",
      "pctchange": "0.052%",
      "marketCap": "7,628,102,567",
      "url": "/market-activity/stocks/nati"
  },
  {
      "symbol": "NRG",
      "name": "NRG Energy, Inc. Common Stock",
      "lastsale": "$32.79",
      "netchange": "1.75",
      "pctchange": "5.638%",
      "marketCap": "7,616,129,464",
      "url": "/market-activity/stocks/nrg"
  },
  {
      "symbol": "PCOR",
      "name": "Procore Technologies, Inc. Common Stock",
      "lastsale": "$54.27",
      "netchange": "-1.78",
      "pctchange": "-3.176%",
      "marketCap": "7,611,523,689",
      "url": "/market-activity/stocks/pcor"
  },
  {
      "symbol": "CLH",
      "name": "Clean Harbors, Inc. Common Stock",
      "lastsale": "$138.51",
      "netchange": "-1.45",
      "pctchange": "-1.036%",
      "marketCap": "7,600,691,096",
      "url": "/market-activity/stocks/clh"
  },
  {
      "symbol": "ORI",
      "name": "Old Republic International Corporation Common Stock",
      "lastsale": "$25.63",
      "netchange": "0.35",
      "pctchange": "1.384%",
      "marketCap": "7,594,610,502",
      "url": "/market-activity/stocks/ori"
  },
  {
      "symbol": "BXP",
      "name": "Boston Properties, Inc. Common Stock",
      "lastsale": "$48.42",
      "netchange": "-1.01",
      "pctchange": "-2.043%",
      "marketCap": "7,593,698,577",
      "url": "/market-activity/stocks/bxp"
  },
  {
      "symbol": "AMC",
      "name": "AMC Entertainment Holdings, Inc. Class A Common Stock",
      "lastsale": "$5.20",
      "netchange": "-0.14",
      "pctchange": "-2.622%",
      "marketCap": "7,577,092,552",
      "url": "/market-activity/stocks/amc"
  },
  {
      "symbol": "BZ",
      "name": "KANZHUN LIMITED American Depository Shares",
      "lastsale": "$17.44",
      "netchange": "-0.53",
      "pctchange": "-2.949%",
      "marketCap": "7,573,660,289",
      "url": "/market-activity/stocks/bz"
  },
  {
      "symbol": "CLF",
      "name": "Cleveland-Cliffs Inc. Common Stock",
      "lastsale": "$14.69",
      "netchange": "0.08",
      "pctchange": "0.548%",
      "marketCap": "7,566,103,053",
      "url": "/market-activity/stocks/clf"
  },
  {
      "symbol": "OGE",
      "name": "OGE Energy Corp Common Stock",
      "lastsale": "$37.77",
      "netchange": "0.25",
      "pctchange": "0.666%",
      "marketCap": "7,564,853,738",
      "url": "/market-activity/stocks/oge"
  },
  {
      "symbol": "BBWI",
      "name": "Bath & Body Works, Inc.",
      "lastsale": "$33.00",
      "netchange": "0.77",
      "pctchange": "2.389%",
      "marketCap": "7,555,369,272",
      "url": "/market-activity/stocks/bbwi"
  },
  {
      "symbol": "ALV",
      "name": "Autoliv, Inc. Common Stock",
      "lastsale": "$87.99",
      "netchange": "-0.84",
      "pctchange": "-0.946%",
      "marketCap": "7,552,164,454",
      "url": "/market-activity/stocks/alv"
  },
  {
      "symbol": "ALLY",
      "name": "Ally Financial Inc. Common Stock",
      "lastsale": "$25.07",
      "netchange": "-0.22",
      "pctchange": "-0.87%",
      "marketCap": "7,541,582,470",
      "url": "/market-activity/stocks/ally"
  },
  {
      "symbol": "ROKU",
      "name": "Roku, Inc. Class A Common Stock",
      "lastsale": "$53.73",
      "netchange": "-3.12",
      "pctchange": "-5.488%",
      "marketCap": "7,528,075,268",
      "url": "/market-activity/stocks/roku"
  },
  {
      "symbol": "MIDD",
      "name": "Middleby Corporation (The) Common Stock",
      "lastsale": "$140.03",
      "netchange": "-1.44",
      "pctchange": "-1.018%",
      "marketCap": "7,517,538,556",
      "url": "/market-activity/stocks/midd"
  },
  {
      "symbol": "MTZ",
      "name": "MasTec, Inc. Common Stock",
      "lastsale": "$94.99",
      "netchange": "4.13",
      "pctchange": "4.545%",
      "marketCap": "7,502,271,064",
      "url": "/market-activity/stocks/mtz"
  },
  {
      "symbol": "WSM",
      "name": "Williams-Sonoma, Inc. Common Stock (DE)",
      "lastsale": "$113.93",
      "netchange": "0.66",
      "pctchange": "0.583%",
      "marketCap": "7,480,935,803",
      "url": "/market-activity/stocks/wsm"
  },
  {
      "symbol": "FRT",
      "name": "Federal Realty Investment Trust Common Stock",
      "lastsale": "$91.41",
      "netchange": "0.56",
      "pctchange": "0.616%",
      "marketCap": "7,450,923,252",
      "url": "/market-activity/stocks/frt"
  },
  {
      "symbol": "SAIA",
      "name": "Saia, Inc. Common Stock",
      "lastsale": "$280.47",
      "netchange": "-1.52",
      "pctchange": "-0.539%",
      "marketCap": "7,440,769,533",
      "url": "/market-activity/stocks/saia"
  },
  {
      "symbol": "WEX",
      "name": "WEX Inc. common stock",
      "lastsale": "$173.66",
      "netchange": "-0.73",
      "pctchange": "-0.419%",
      "marketCap": "7,438,855,650",
      "url": "/market-activity/stocks/wex"
  },
  {
      "symbol": "RL",
      "name": "Ralph Lauren Corporation Common Stock",
      "lastsale": "$112.36",
      "netchange": "1.39",
      "pctchange": "1.253%",
      "marketCap": "7,413,442,575",
      "url": "/market-activity/stocks/rl"
  },
  {
      "symbol": "EGP",
      "name": "EastGroup Properties, Inc. Common Stock",
      "lastsale": "$167.31",
      "netchange": "-1.17",
      "pctchange": "-0.694%",
      "marketCap": "7,402,245,970",
      "url": "/market-activity/stocks/egp"
  },
  {
      "symbol": "BILI",
      "name": "Bilibili Inc. American Depositary Shares",
      "lastsale": "$18.21",
      "netchange": "-0.89",
      "pctchange": "-4.66%",
      "marketCap": "7,367,833,268",
      "url": "/market-activity/stocks/bili"
  },
  {
      "symbol": "STVN",
      "name": "Stevanato Group S.p.A. Ordinary Shares",
      "lastsale": "$27.71",
      "netchange": "-1.18",
      "pctchange": "-4.084%",
      "marketCap": "7,334,822,619",
      "url": "/market-activity/stocks/stvn"
  },
  {
      "symbol": "TX",
      "name": "Ternium S.A. Ternium S.A. American Depositary Shares (each representing ten shares, USD1.00 par value)",
      "lastsale": "$37.34",
      "netchange": "0.09",
      "pctchange": "0.242%",
      "marketCap": "7,330,128,659",
      "url": "/market-activity/stocks/tx"
  },
  {
      "symbol": "AAP",
      "name": "Advance Auto Parts Inc.",
      "lastsale": "$122.86",
      "netchange": "-1.31",
      "pctchange": "-1.055%",
      "marketCap": "7,302,024,751",
      "url": "/market-activity/stocks/aap"
  },
  {
      "symbol": "PSO",
      "name": "Pearson, Plc Common Stock",
      "lastsale": "$10.19",
      "netchange": "0.07",
      "pctchange": "0.692%",
      "marketCap": "7,297,385,090",
      "url": "/market-activity/stocks/pso"
  },
  {
      "symbol": "NYCB",
      "name": "New York Community Bancorp, Inc. Common Stock",
      "lastsale": "$10.09",
      "netchange": "0.34",
      "pctchange": "3.487%",
      "marketCap": "7,286,496,497",
      "url": "/market-activity/stocks/nycb"
  },
  {
      "symbol": "ALGM",
      "name": "Allegro MicroSystems, Inc. Common Stock",
      "lastsale": "$38.02",
      "netchange": "-0.49",
      "pctchange": "-1.272%",
      "marketCap": "7,281,144,501",
      "url": "/market-activity/stocks/algm"
  },
  {
      "symbol": "LEA",
      "name": "Lear Corporation Common Stock",
      "lastsale": "$123.24",
      "netchange": "-2.33",
      "pctchange": "-1.856%",
      "marketCap": "7,278,647,816",
      "url": "/market-activity/stocks/lea"
  },
  {
      "symbol": "RHI",
      "name": "Robert Half International Inc. Common Stock",
      "lastsale": "$67.08",
      "netchange": "-0.07",
      "pctchange": "-0.104%",
      "marketCap": "7,233,709,851",
      "url": "/market-activity/stocks/rhi"
  },
  {
      "symbol": "SBS",
      "name": "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares (Each repstg 250 Common Shares)",
      "lastsale": "$10.58",
      "netchange": "0.78",
      "pctchange": "7.959%",
      "marketCap": "7,231,534,414",
      "url": "/market-activity/stocks/sbs"
  },
  {
      "symbol": "INGR",
      "name": "Ingredion Incorporated Common Stock",
      "lastsale": "$109.58",
      "netchange": "-0.05",
      "pctchange": "-0.046%",
      "marketCap": "7,229,128,589",
      "url": "/market-activity/stocks/ingr"
  },
  {
      "symbol": "CACI",
      "name": "CACI International, Inc. Class A Common Stock",
      "lastsale": "$306.73",
      "netchange": "1.65",
      "pctchange": "0.541%",
      "marketCap": "7,210,645,341",
      "url": "/market-activity/stocks/caci"
  },
  {
      "symbol": "THC",
      "name": "Tenet Healthcare Corporation Common Stock",
      "lastsale": "$69.59",
      "netchange": "-0.51",
      "pctchange": "-0.728%",
      "marketCap": "7,197,726,407",
      "url": "/market-activity/stocks/thc"
  },
  {
      "symbol": "PSTG",
      "name": "Pure Storage, Inc. Class A Common Stock",
      "lastsale": "$23.24",
      "netchange": "0.30",
      "pctchange": "1.308%",
      "marketCap": "7,158,972,795",
      "url": "/market-activity/stocks/pstg"
  },
  {
      "symbol": "WHR",
      "name": "Whirlpool Corporation Common Stock",
      "lastsale": "$130.59",
      "netchange": "-1.83",
      "pctchange": "-1.382%",
      "marketCap": "7,150,839,123",
      "url": "/market-activity/stocks/whr"
  },
  {
      "symbol": "CROX",
      "name": "Crocs, Inc. Common Stock",
      "lastsale": "$115.40",
      "netchange": "-1.40",
      "pctchange": "-1.199%",
      "marketCap": "7,126,149,873",
      "url": "/market-activity/stocks/crox"
  },
  {
      "symbol": "TOL",
      "name": "Toll Brothers, Inc. Common Stock",
      "lastsale": "$64.21",
      "netchange": "-0.75",
      "pctchange": "-1.155%",
      "marketCap": "7,110,165,930",
      "url": "/market-activity/stocks/tol"
  },
  {
      "symbol": "SMCI",
      "name": "Super Micro Computer, Inc. Common Stock",
      "lastsale": "$134.50",
      "netchange": "-1.93",
      "pctchange": "-1.415%",
      "marketCap": "7,094,138,747",
      "url": "/market-activity/stocks/smci"
  },
  {
      "symbol": "TXRH",
      "name": "Texas Roadhouse, Inc. Common Stock",
      "lastsale": "$105.54",
      "netchange": "1.80",
      "pctchange": "1.735%",
      "marketCap": "7,075,156,642",
      "url": "/market-activity/stocks/txrh"
  },
  {
      "symbol": "FR",
      "name": "First Industrial Realty Trust, Inc. Common Stock",
      "lastsale": "$53.30",
      "netchange": "-0.10",
      "pctchange": "-0.187%",
      "marketCap": "7,048,560,588",
      "url": "/market-activity/stocks/fr"
  },
  {
      "symbol": "PSNY",
      "name": "Polestar Automotive Holding UK PLC Class A ADS",
      "lastsale": "$3.31",
      "netchange": "-0.165",
      "pctchange": "-4.748%",
      "marketCap": "7,036,869,553",
      "url": "/market-activity/stocks/psny"
  },
  {
      "symbol": "WRK",
      "name": "Westrock Company Common Stock",
      "lastsale": "$27.61",
      "netchange": "-0.01",
      "pctchange": "-0.036%",
      "marketCap": "7,030,935,729",
      "url": "/market-activity/stocks/wrk"
  },
  {
      "symbol": "EDR",
      "name": "Endeavor Group Holdings, Inc. Class A Common Stock",
      "lastsale": "$23.97",
      "netchange": "0.47",
      "pctchange": "2.00%",
      "marketCap": "6,986,919,684",
      "url": "/market-activity/stocks/edr"
  },
  {
      "symbol": "BERY",
      "name": "Berry Global Group, Inc. Common Stock",
      "lastsale": "$57.46",
      "netchange": "-0.56",
      "pctchange": "-0.965%",
      "marketCap": "6,975,644,000",
      "url": "/market-activity/stocks/bery"
  },
  {
      "symbol": "IVZ",
      "name": "Invesco Ltd Common Stock",
      "lastsale": "$15.22",
      "netchange": "-0.18",
      "pctchange": "-1.169%",
      "marketCap": "6,973,804,000",
      "url": "/market-activity/stocks/ivz"
  },
  {
      "symbol": "BYD",
      "name": "Boyd Gaming Corporation Common Stock",
      "lastsale": "$68.32",
      "netchange": "-0.25",
      "pctchange": "-0.365%",
      "marketCap": "6,960,732,780",
      "url": "/market-activity/stocks/byd"
  },
  {
      "symbol": "WMS",
      "name": "Advanced Drainage Systems, Inc. Common Stock",
      "lastsale": "$85.67",
      "netchange": "-0.73",
      "pctchange": "-0.845%",
      "marketCap": "6,959,266,149",
      "url": "/market-activity/stocks/wms"
  },
  {
      "symbol": "OHI",
      "name": "Omega Healthcare Investors, Inc. Common Stock",
      "lastsale": "$29.53",
      "netchange": "0.14",
      "pctchange": "0.476%",
      "marketCap": "6,920,330,990",
      "url": "/market-activity/stocks/ohi"
  },
  {
      "symbol": "JEF",
      "name": "Jefferies Financial Group Inc. Common Stock",
      "lastsale": "$29.61",
      "netchange": "-0.25",
      "pctchange": "-0.837%",
      "marketCap": "6,914,764,080",
      "url": "/market-activity/stocks/jef"
  },
  {
      "symbol": "ROIV",
      "name": "Roivant Sciences Ltd. Common Shares",
      "lastsale": "$9.11",
      "netchange": "0.06",
      "pctchange": "0.663%",
      "marketCap": "6,909,273,159",
      "url": "/market-activity/stocks/roiv"
  },
  {
      "symbol": "TIMB",
      "name": "TIM S.A. American Depositary Shares (Each representing 5 Common Shares) ",
      "lastsale": "$14.20",
      "netchange": "-0.05",
      "pctchange": "-0.351%",
      "marketCap": "6,875,049,706",
      "url": "/market-activity/stocks/timb"
  },
  {
      "symbol": "OLN",
      "name": "Olin Corporation Common Stock",
      "lastsale": "$52.52",
      "netchange": "-0.38",
      "pctchange": "-0.718%",
      "marketCap": "6,873,252,642",
      "url": "/market-activity/stocks/oln"
  },
  {
      "symbol": "ARW",
      "name": "Arrow Electronics, Inc. Common Stock",
      "lastsale": "$119.14",
      "netchange": "0.44",
      "pctchange": "0.371%",
      "marketCap": "6,859,360,046",
      "url": "/market-activity/stocks/arw"
  },
  {
      "symbol": "AIZ",
      "name": "Assurant, Inc. Common Stock",
      "lastsale": "$129.58",
      "netchange": "0.26",
      "pctchange": "0.201%",
      "marketCap": "6,857,484,909",
      "url": "/market-activity/stocks/aiz"
  },
  {
      "symbol": "GNRC",
      "name": "Generac Holdlings Inc. Common Stock",
      "lastsale": "$111.49",
      "netchange": "-0.47",
      "pctchange": "-0.42%",
      "marketCap": "6,847,372,968",
      "url": "/market-activity/stocks/gnrc"
  },
  {
      "symbol": "CAE",
      "name": "CAE Inc. Ordinary Shares",
      "lastsale": "$21.50",
      "netchange": "-0.07",
      "pctchange": "-0.325%",
      "marketCap": "6,833,979,573",
      "url": "/market-activity/stocks/cae"
  },
  {
      "symbol": "NVT",
      "name": "nVent Electric plc Ordinary Shares ",
      "lastsale": "$41.25",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "6,833,763,008",
      "url": "/market-activity/stocks/nvt"
  },
  {
      "symbol": "LNTH",
      "name": "Lantheus Holdings, Inc. Common Stock",
      "lastsale": "$99.65",
      "netchange": "0.27",
      "pctchange": "0.272%",
      "marketCap": "6,796,436,224",
      "url": "/market-activity/stocks/lnth"
  },
  {
      "symbol": "G",
      "name": "Genpact Limited Common Stock",
      "lastsale": "$36.86",
      "netchange": "0.80",
      "pctchange": "2.219%",
      "marketCap": "6,770,044,095",
      "url": "/market-activity/stocks/g"
  },
  {
      "symbol": "RCM",
      "name": "R1 RCM Inc. Common Stock",
      "lastsale": "$16.23",
      "netchange": "-0.14",
      "pctchange": "-0.855%",
      "marketCap": "6,762,419,602",
      "url": "/market-activity/stocks/rcm"
  },
  {
      "symbol": "ITT",
      "name": "ITT Inc. Common Stock ",
      "lastsale": "$81.59",
      "netchange": "-0.08",
      "pctchange": "-0.098%",
      "marketCap": "6,756,205,262",
      "url": "/market-activity/stocks/itt"
  },
  {
      "symbol": "CFLT",
      "name": "Confluent, Inc. Class A Common Stock",
      "lastsale": "$22.82",
      "netchange": "-0.78",
      "pctchange": "-3.305%",
      "marketCap": "6,741,315,418",
      "url": "/market-activity/stocks/cflt"
  },
  {
      "symbol": "VOYA",
      "name": "Voya Financial, Inc. Common Stock",
      "lastsale": "$68.60",
      "netchange": "-1.22",
      "pctchange": "-1.747%",
      "marketCap": "6,735,159,456",
      "url": "/market-activity/stocks/voya"
  },
  {
      "symbol": "BLD",
      "name": "TopBuild Corp. Common Stock",
      "lastsale": "$211.54",
      "netchange": "-3.43",
      "pctchange": "-1.596%",
      "marketCap": "6,716,818,926",
      "url": "/market-activity/stocks/bld"
  },
  {
      "symbol": "SITE",
      "name": "SiteOne Landscape Supply, Inc. Common Stock",
      "lastsale": "$148.63",
      "netchange": "0.54",
      "pctchange": "0.365%",
      "marketCap": "6,685,056,656",
      "url": "/market-activity/stocks/site"
  },
  {
      "symbol": "GXO",
      "name": "GXO Logistics, Inc. Common Stock ",
      "lastsale": "$56.11",
      "netchange": "1.54",
      "pctchange": "2.822%",
      "marketCap": "6,673,014,001",
      "url": "/market-activity/stocks/gxo"
  },
  {
      "symbol": "AXTA",
      "name": "Axalta Coating Systems Ltd. Common Shares",
      "lastsale": "$30.06",
      "netchange": "-0.21",
      "pctchange": "-0.694%",
      "marketCap": "6,658,716,251",
      "url": "/market-activity/stocks/axta"
  },
  {
      "symbol": "DSGX",
      "name": "Descartes Systems Group Inc. (The) Common Stock",
      "lastsale": "$78.12",
      "netchange": "-0.32",
      "pctchange": "-0.408%",
      "marketCap": "6,646,295,625",
      "url": "/market-activity/stocks/dsgx"
  },
  {
      "symbol": "VVV",
      "name": "Valvoline Inc. Common Stock",
      "lastsale": "$38.55",
      "netchange": "0.05",
      "pctchange": "0.13%",
      "marketCap": "6,628,116,455",
      "url": "/market-activity/stocks/vvv"
  },
  {
      "symbol": "GNTX",
      "name": "Gentex Corporation Common Stock",
      "lastsale": "$28.22",
      "netchange": "-0.17",
      "pctchange": "-0.599%",
      "marketCap": "6,610,224,016",
      "url": "/market-activity/stocks/gntx"
  },
  {
      "symbol": "PRI",
      "name": "Primerica, Inc. Common Stock",
      "lastsale": "$180.81",
      "netchange": "1.51",
      "pctchange": "0.842%",
      "marketCap": "6,600,465,615",
      "url": "/market-activity/stocks/pri"
  },
  {
      "symbol": "WCC",
      "name": "WESCO International, Inc. Common Stock",
      "lastsale": "$128.19",
      "netchange": "0.28",
      "pctchange": "0.219%",
      "marketCap": "6,570,042,592",
      "url": "/market-activity/stocks/wcc"
  },
  {
      "symbol": "TPX",
      "name": "Tempur Sealy International, Inc. Common Stock",
      "lastsale": "$38.15",
      "netchange": "0.80",
      "pctchange": "2.142%",
      "marketCap": "6,564,507,658",
      "url": "/market-activity/stocks/tpx"
  },
  {
      "symbol": "ACHC",
      "name": "Acadia Healthcare Company, Inc. Common Stock",
      "lastsale": "$71.24",
      "netchange": "-0.16",
      "pctchange": "-0.224%",
      "marketCap": "6,557,980,319",
      "url": "/market-activity/stocks/achc"
  },
  {
      "symbol": "MAT",
      "name": "Mattel, Inc. Common Stock",
      "lastsale": "$18.50",
      "netchange": "-0.03",
      "pctchange": "-0.162%",
      "marketCap": "6,547,677,306",
      "url": "/market-activity/stocks/mat"
  },
  {
      "symbol": "JLL",
      "name": "Jones Lang LaSalle Incorporated Common Stock",
      "lastsale": "$137.11",
      "netchange": "0.31",
      "pctchange": "0.227%",
      "marketCap": "6,527,697,960",
      "url": "/market-activity/stocks/jll"
  },
  {
      "symbol": "BLCO",
      "name": "Bausch + Lomb Corporation Common Shares",
      "lastsale": "$18.60",
      "netchange": "0.06",
      "pctchange": "0.324%",
      "marketCap": "6,510,017,354",
      "url": "/market-activity/stocks/blco"
  },
  {
      "symbol": "KGC",
      "name": "Kinross Gold Corporation Common Stock",
      "lastsale": "$5.30",
      "netchange": "-0.03",
      "pctchange": "-0.563%",
      "marketCap": "6,505,962,223",
      "url": "/market-activity/stocks/kgc"
  },
  {
      "symbol": "FSV",
      "name": "FirstService Corporation Common Shares",
      "lastsale": "$145.47",
      "netchange": "-2.34",
      "pctchange": "-1.583%",
      "marketCap": "6,480,130,913",
      "url": "/market-activity/stocks/fsv"
  },
  {
      "symbol": "CIEN",
      "name": "Ciena Corporation Common Stock",
      "lastsale": "$43.41",
      "netchange": "0.07",
      "pctchange": "0.162%",
      "marketCap": "6,475,025,529",
      "url": "/market-activity/stocks/cien"
  },
  {
      "symbol": "OLED",
      "name": "Universal Display Corporation Common Stock",
      "lastsale": "$136.73",
      "netchange": "-1.29",
      "pctchange": "-0.935%",
      "marketCap": "6,471,697,113",
      "url": "/market-activity/stocks/oled"
  },
  {
      "symbol": "STN",
      "name": "Stantec Inc Common Stock",
      "lastsale": "$58.16",
      "netchange": "-0.99",
      "pctchange": "-1.674%",
      "marketCap": "6,454,112,502",
      "url": "/market-activity/stocks/stn"
  },
  {
      "symbol": "EDU",
      "name": "New Oriental Education & Technology Group, Inc. Sponsored ADR representing 10 Ordinary Share (Cayman Islands)",
      "lastsale": "$37.77",
      "netchange": "-2.02",
      "pctchange": "-5.077%",
      "marketCap": "6,418,542,359",
      "url": "/market-activity/stocks/edu"
  },
  {
      "symbol": "WWD",
      "name": "Woodward, Inc. Common Stock",
      "lastsale": "$107.45",
      "netchange": "-0.28",
      "pctchange": "-0.26%",
      "marketCap": "6,417,826,251",
      "url": "/market-activity/stocks/wwd"
  },
  {
      "symbol": "GWRE",
      "name": "Guidewire Software, Inc. Common Stock",
      "lastsale": "$78.58",
      "netchange": "-0.27",
      "pctchange": "-0.342%",
      "marketCap": "6,409,512,779",
      "url": "/market-activity/stocks/gwre"
  },
  {
      "symbol": "WF",
      "name": "Woori Financial Group Inc. American Depositary Shares (each representing three (3) shares of Common Stock)",
      "lastsale": "$26.40",
      "netchange": "-0.46",
      "pctchange": "-1.713%",
      "marketCap": "6,406,912,380",
      "url": "/market-activity/stocks/wf"
  },
  {
      "symbol": "AR",
      "name": "Antero Resources Corporation Common Stock",
      "lastsale": "$21.70",
      "netchange": "0.78",
      "pctchange": "3.728%",
      "marketCap": "6,406,911,199",
      "url": "/market-activity/stocks/ar"
  },
  {
      "symbol": "DOCS",
      "name": "Doximity, Inc. Class A Common Stock",
      "lastsale": "$33.04",
      "netchange": "-0.14",
      "pctchange": "-0.422%",
      "marketCap": "6,396,228,303",
      "url": "/market-activity/stocks/docs"
  },
  {
      "symbol": "COLB",
      "name": "Columbia Banking System, Inc. Common Stock",
      "lastsale": "$18.44",
      "netchange": "-0.01",
      "pctchange": "-0.054%",
      "marketCap": "6,391,868,467",
      "url": "/market-activity/stocks/colb"
  },
  {
      "symbol": "MEDP",
      "name": "Medpace Holdings, Inc. Common Stock",
      "lastsale": "$208.95",
      "netchange": "-0.56",
      "pctchange": "-0.267%",
      "marketCap": "6,372,781,512",
      "url": "/market-activity/stocks/medp"
  },
  {
      "symbol": "LSTR",
      "name": "Landstar System, Inc. Common Stock",
      "lastsale": "$176.85",
      "netchange": "-0.01",
      "pctchange": "-0.006%",
      "marketCap": "6,370,627,228",
      "url": "/market-activity/stocks/lstr"
  },
  {
      "symbol": "RRC",
      "name": "Range Resources Corporation Common Stock",
      "lastsale": "$26.38",
      "netchange": "1.31",
      "pctchange": "5.225%",
      "marketCap": "6,365,133,254",
      "url": "/market-activity/stocks/rrc"
  },
  {
      "symbol": "RBC",
      "name": "RBC Bearings Incorporated Common Stock",
      "lastsale": "$217.99",
      "netchange": "-0.41",
      "pctchange": "-0.188%",
      "marketCap": "6,326,487,905",
      "url": "/market-activity/stocks/rbc"
  },
  {
      "symbol": "EWBC",
      "name": "East West Bancorp, Inc. Common Stock",
      "lastsale": "$44.74",
      "netchange": "0.92",
      "pctchange": "2.099%",
      "marketCap": "6,326,031,762",
      "url": "/market-activity/stocks/ewbc"
  },
  {
      "symbol": "LFUS",
      "name": "Littelfuse, Inc. Common Stock",
      "lastsale": "$254.93",
      "netchange": "-1.47",
      "pctchange": "-0.573%",
      "marketCap": "6,321,747,257",
      "url": "/market-activity/stocks/lfus"
  },
  {
      "symbol": "AA",
      "name": "Alcoa Corporation Common Stock ",
      "lastsale": "$35.37",
      "netchange": "0.04",
      "pctchange": "0.113%",
      "marketCap": "6,308,399,231",
      "url": "/market-activity/stocks/aa"
  },
  {
      "symbol": "GME",
      "name": "GameStop Corporation Common Stock",
      "lastsale": "$20.69",
      "netchange": "-0.19",
      "pctchange": "-0.91%",
      "marketCap": "6,303,734,833",
      "url": "/market-activity/stocks/gme"
  },
  {
      "symbol": "CAR",
      "name": "Avis Budget Group, Inc. Common Stock",
      "lastsale": "$158.89",
      "netchange": "-4.66",
      "pctchange": "-2.849%",
      "marketCap": "6,271,472,829",
      "url": "/market-activity/stocks/car"
  },
  {
      "symbol": "CFR",
      "name": "Cullen/Frost Bankers, Inc. Common Stock",
      "lastsale": "$97.36",
      "netchange": "1.69",
      "pctchange": "1.766%",
      "marketCap": "6,267,533,546",
      "url": "/market-activity/stocks/cfr"
  },
  {
      "symbol": "MNDY",
      "name": "monday.com Ltd. Ordinary Shares",
      "lastsale": "$131.10",
      "netchange": "-1.91",
      "pctchange": "-1.436%",
      "marketCap": "6,258,434,495",
      "url": "/market-activity/stocks/mndy"
  },
  {
      "symbol": "CW",
      "name": "Curtiss-Wright Corporation Common Stock",
      "lastsale": "$163.34",
      "netchange": "-0.25",
      "pctchange": "-0.153%",
      "marketCap": "6,257,008,864",
      "url": "/market-activity/stocks/cw"
  },
  {
      "symbol": "CHH",
      "name": "Choice Hotels International, Inc. Common Stock",
      "lastsale": "$121.87",
      "netchange": "-0.07",
      "pctchange": "-0.057%",
      "marketCap": "6,249,798,519",
      "url": "/market-activity/stocks/chh"
  },
  {
      "symbol": "STAG",
      "name": "Stag Industrial, Inc. Common Stock",
      "lastsale": "$34.72",
      "netchange": "0.04",
      "pctchange": "0.115%",
      "marketCap": "6,227,826,081",
      "url": "/market-activity/stocks/stag"
  },
  {
      "symbol": "YMM",
      "name": "Full Truck Alliance Co. Ltd. American Depositary Shares (each representing 20 Class A Ordinary Shares)",
      "lastsale": "$5.81",
      "netchange": "-0.13",
      "pctchange": "-2.189%",
      "marketCap": "6,219,143,273",
      "url": "/market-activity/stocks/ymm"
  },
  {
      "symbol": "EXEL",
      "name": "Exelixis, Inc. Common Stock",
      "lastsale": "$19.18",
      "netchange": "-0.17",
      "pctchange": "-0.879%",
      "marketCap": "6,215,995,124",
      "url": "/market-activity/stocks/exel"
  },
  {
      "symbol": "WING",
      "name": "Wingstop Inc. Common Stock",
      "lastsale": "$207.41",
      "netchange": "0.50",
      "pctchange": "0.242%",
      "marketCap": "6,215,753,518",
      "url": "/market-activity/stocks/wing"
  },
  {
      "symbol": "FTI",
      "name": "TechnipFMC plc Ordinary Share",
      "lastsale": "$14.08",
      "netchange": "UNCH",
      "pctchange": "--",
      "marketCap": "6,213,616,837",
      "url": "/market-activity/stocks/fti"
  },
  {
      "symbol": "SIGI",
      "name": "Selective Insurance Group, Inc. Common Stock",
      "lastsale": "$102.69",
      "netchange": "0.73",
      "pctchange": "0.716%",
      "marketCap": "6,211,923,172",
      "url": "/market-activity/stocks/sigi"
  },
  {
      "symbol": "WFG",
      "name": "West Fraser Timber Co. Ltd Common stock",
      "lastsale": "$74.29",
      "netchange": "0.06",
      "pctchange": "0.081%",
      "marketCap": "6,207,331,706",
      "url": "/market-activity/stocks/wfg"
  },
  {
      "symbol": "BRX",
      "name": "Brixmor Property Group Inc. Common Stock",
      "lastsale": "$20.64",
      "netchange": "0.12",
      "pctchange": "0.585%",
      "marketCap": "6,202,751,170",
      "url": "/market-activity/stocks/brx"
  },
  {
      "symbol": "MUSA",
      "name": "Murphy USA Inc. Common Stock",
      "lastsale": "$283.83",
      "netchange": "6.27",
      "pctchange": "2.259%",
      "marketCap": "6,182,443,813",
      "url": "/market-activity/stocks/musa"
  },
  {
      "symbol": "TREX",
      "name": "Trex Company, Inc. Common Stock",
      "lastsale": "$56.64",
      "netchange": "-1.45",
      "pctchange": "-2.496%",
      "marketCap": "6,162,149,480",
      "url": "/market-activity/stocks/trex"
  },
  {
      "symbol": "CSAN",
      "name": "Cosan S.A. ADS",
      "lastsale": "$13.20",
      "netchange": "0.08",
      "pctchange": "0.61%",
      "marketCap": "6,159,879,792",
      "url": "/market-activity/stocks/csan"
  },
  {
      "symbol": "ITCI",
      "name": "Intra-Cellular Therapies Inc. Common Stock",
      "lastsale": "$64.42",
      "netchange": "0.05",
      "pctchange": "0.078%",
      "marketCap": "6,137,937,793",
      "url": "/market-activity/stocks/itci"
  },
  {
      "symbol": "SEE",
      "name": "Sealed Air Corporation Common Stock",
      "lastsale": "$42.42",
      "netchange": "0.23",
      "pctchange": "0.545%",
      "marketCap": "6,124,819,887",
      "url": "/market-activity/stocks/see"
  },
  {
      "symbol": "BEPC",
      "name": "Brookfield Renewable Corporation Class A Subordinate Voting Shares ",
      "lastsale": "$35.55",
      "netchange": "0.35",
      "pctchange": "0.994%",
      "marketCap": "6,122,742,585",
      "url": "/market-activity/stocks/bepc"
  },
  {
      "symbol": "ST",
      "name": "Sensata Technologies Holding plc Ordinary Shares",
      "lastsale": "$40.14",
      "netchange": "-0.07",
      "pctchange": "-0.174%",
      "marketCap": "6,122,059,555",
      "url": "/market-activity/stocks/st"
  },
  {
      "symbol": "VMI",
      "name": "Valmont Industries, Inc. Common Stock",
      "lastsale": "$286.34",
      "netchange": "2.96",
      "pctchange": "1.045%",
      "marketCap": "6,113,360,432",
      "url": "/market-activity/stocks/vmi"
  },
  {
      "symbol": "EHC",
      "name": "Encompass Health Corporation Common Stock",
      "lastsale": "$61.30",
      "netchange": "-0.58",
      "pctchange": "-0.937%",
      "marketCap": "6,113,290,969",
      "url": "/market-activity/stocks/ehc"
  },
  {
      "symbol": "RLI",
      "name": "RLI Corp. Common Stock (DE)",
      "lastsale": "$133.79",
      "netchange": "-1.34",
      "pctchange": "-0.992%",
      "marketCap": "6,094,762,778",
      "url": "/market-activity/stocks/rli"
  },
  {
      "symbol": "SF",
      "name": "Stifel Financial Corporation Common Stock",
      "lastsale": "$57.12",
      "netchange": "-0.16",
      "pctchange": "-0.279%",
      "marketCap": "6,094,758,835",
      "url": "/market-activity/stocks/sf"
  },
  {
      "symbol": "HLI",
      "name": "Houlihan Lokey, Inc. Class A Common Stock",
      "lastsale": "$88.70",
      "netchange": "-0.67",
      "pctchange": "-0.75%",
      "marketCap": "6,092,886,467",
      "url": "/market-activity/stocks/hli"
  },
  {
      "symbol": "BWXT",
      "name": "BWX Technologies, Inc. Common Stock",
      "lastsale": "$66.57",
      "netchange": "0.09",
      "pctchange": "0.135%",
      "marketCap": "6,087,057,151",
      "url": "/market-activity/stocks/bwxt"
  },
  {
      "symbol": "CBSH",
      "name": "Commerce Bancshares, Inc. Common Stock",
      "lastsale": "$48.75",
      "netchange": "0.22",
      "pctchange": "0.453%",
      "marketCap": "6,080,134,613",
      "url": "/market-activity/stocks/cbsh"
  },
  {
      "symbol": "KT",
      "name": "KT Corporation Common Stock",
      "lastsale": "$11.86",
      "netchange": "0.18",
      "pctchange": "1.541%",
      "marketCap": "6,073,332,322",
      "url": "/market-activity/stocks/kt"
  },
  {
      "symbol": "TXG",
      "name": "10x Genomics, Inc. Class A Common Stock",
      "lastsale": "$52.64",
      "netchange": "0.01",
      "pctchange": "0.019%",
      "marketCap": "6,072,366,371",
      "url": "/market-activity/stocks/txg"
  },
  {
      "symbol": "FLO",
      "name": "Flowers Foods, Inc. Common Stock",
      "lastsale": "$28.66",
      "netchange": "-0.12",
      "pctchange": "-0.417%",
      "marketCap": "6,070,949,496",
      "url": "/market-activity/stocks/flo"
  }
]
