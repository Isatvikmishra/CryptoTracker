import React from 'react'
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinsData = () => {
   
    const data =  {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "web_slug": "bitcoin",
        "asset_platform_id": null,
        "platforms": {
            "": ""
        },
        "detail_platforms": {
            "": {
                "decimal_place": null,
                "contract_address": ""
            }
        },
        "block_time_in_minutes": 10,
        "hashing_algorithm": "SHA-256",
        "categories": [
            "Cryptocurrency",
            "Layer 1 (L1)",
            "FTX Holdings",
            "Proof of Work (PoW)",
            "GMCI 30 Index"
        ],
        "preview_listing": false,
        "public_notice": null,
        "additional_notices": [],
        "localization": {
            "en": "Bitcoin",
            "de": "Bitcoin",
            "es": "Bitcoin",
            "fr": "Bitcoin",
            "it": "Bitcoin",
            "pl": "Bitcoin",
            "ro": "Bitcoin",
            "hu": "Bitcoin",
            "nl": "Bitcoin",
            "pt": "Bitcoin",
            "sv": "",
            "vi": "Bitcoin",
            "tr": "Bitcoin",
            "ru": "Биткоин",
            "ja": "ビットコイン",
            "zh": "比特币",
            "zh-tw": "比特幣",
            "ko": "비트코인",
            "ar": "بيتكوين",
            "th": "บิตคอยน์",
            "id": "Bitcoin",
            "cs": "",
            "da": "",
            "el": "",
            "hi": "",
            "no": "",
            "sk": "",
            "uk": "Bitcoin",
            "he": "",
            "fi": "",
            "bg": "",
            "hr": "",
            "lt": "",
            "sl": ""
        },
        "description": {
            "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>.",
            "de": "",
            "es": "",
            "fr": "",
            "it": "",
            "pl": "",
            "ro": "",
            "hu": "",
            "nl": "",
            "pt": "",
            "sv": "",
            "vi": "",
            "tr": "",
            "ru": "",
            "ja": "",
            "zh": "",
            "zh-tw": "",
            "ko": "비트코인은 2009년 나카모토 사토시가 만든 디지털 통화로, 통화를 발행하고 관리하는 중앙 장치가 존재하지 않는 구조를 가지고 있다. 대신, 비트코인의 거래는 P2P 기반 분산 데이터베이스에 의해 이루어지며, 공개 키 암호 방식 기반으로 거래를 수행한다. 비트코인은 공개성을 가지고 있다. 비트코인은 지갑 파일의 형태로 저장되며, 이 지갑에는 각각의 고유 주소가 부여되며, 그 주소를 기반으로 비트코인의 거래가 이루어진다. 비트코인은 1998년 웨이따이가 사이버펑크 메일링 리스트에 올린 암호통화란 구상을 최초로 구현한 것 중의 하나이다.\r\n\r\n비트코인은 최초로 구현된 가상화폐입니다. 발행 및 유통을 관리하는 중앙권력이나 중간상인 없이, P2P 네트워크 기술을 이용하여 네트워크에 참여하는 사용자들이 주체적으로 화폐를 발행하고 이체내용을 공동으로 관리합니다. 이를 가능하게 한 블록체인 기술을 처음으로 코인에 도입한 것이 바로 비트코인입니다.\r\n\r\n비트코인을 사용하는 개인과 사업자의 수는 꾸준히 증가하고 있으며, 여기에는 식당, 아파트, 법률사무소, 온라인 서비스를 비롯한 소매상들이 포함됩니다. 비트코인은 새로운 사회 현상이지만 아주 빠르게 성장하고 있습니다. 이를 바탕으로 가치 증대는 물론, 매일 수백만 달러의 비트코인이 교환되고 있습니다. \r\n\r\n비트코인은 가상화폐 시장에서 현재 유통시가총액과 코인의 가치가 가장 크고, 거래량 또한 안정적입니다. 이더리움이 빠르게 추격하고 있지만 아직은 가장 견고한 가상화폐라고 볼 수 있습니다. \r\n\r\n코인 특징\r\n1. 중앙주체 없이 사용자들에 의해 거래내용이 관리될 수 있는 비트코인의 운영 시스템은 블록체인 기술에서 기인합니다. 블록체인은 쉽게 말해 다 같이 장부를 공유하고, 항상 서로의 컴퓨터에 있는 장부 파일을 비교함으로써 같은 내용만 인정하는 방식으로 운영됩니다. 따라서 전통적인 금융기관에서 장부에 대한 접근을 튼튼하게 방어하던 것과는 정반대의 작업을 통해 보안을 달성합니다. 장부를 해킹하려면 51%의 장부를 동시에 조작해야 하는데, 이는 사실상 불가능합니다. 왜냐하면, 이를 실행하기 위해서는 컴퓨팅 파워가 어마어마하게 소요되고, 이것이 가능한 슈퍼컴퓨터는 세상에 존재하지 않기 때문입니다. 또한, 장부의 자료들은 줄글로 기록되는 것이 아니라 암호화 해시 함수형태로 블록에 저장되고, 이 블록들은 서로 연결되어 있어서 더 강력한 보안을 제공합니다. \r\n\r\n2. 비트코인은 블록발행보상을 채굴자에게 지급하는 방식으로 신규 코인을 발행합니다. 블록발행보상은 매 21만 블록(약 4년)을 기준으로 발행량이 절반으로 줄어듭니다. 처음에는 50비트코인씩 발행이 되었고, 4년마다 계속 반으로 감소하고 있습니다. 코인의 총량이 2,100만 개에 도달하면 신규 발행은 종료되고, 이후에는 거래 수수료만을 통해 시스템이 지탱될 것입니다. \r\n\r\n핵심 가치\r\n(키워드: 통화로 사용될 수 있는 보편성 및 편의성)\r\n\r\n1. 다양한 알트코인들의 등장에 앞서 비트코인은 가상화폐 시장에서 독보적이었기 때문에, 현재 가장 보편적인 결제수단으로 사용됩니다. 실생활에서 이를 활용할 수 있는 가맹점이 알트코인들보다 압도적으로 많을 뿐만 아니라, 이 또한 증가하고 있습니다. 일례로 일본 업체들이 비트코인 결제 시스템을 도입하면서 곧 비트코인을 오프라인 점포 26만 곳에서 이용할 수 있게 될 것입니다. \r\n\r\n2. 여러 나라에서 비트코인을 정식 결제 수단으로 인정하면서, 실물화폐와 가상화폐를 거래할 때 더는 부가가치세가 부과되지 않게 된다고 합니다. 실제로 일본과 호주에서는 이미 비트코인을 합법적 결제 수단으로 인정하면서 제도권 안으로 들여오고 있고, 미국에서는 비트코인 ETF 승인 노력도 진행되고 있습니다. 각국에 비트코인을 기반으로 한 ATM 기계도 설치되었다고 합니다. ",
            "ar": "",
            "th": "",
            "id": "",
            "cs": "",
            "da": "",
            "el": "",
            "hi": "",
            "no": "",
            "sk": "",
            "uk": "",
            "he": "",
            "fi": "",
            "bg": "",
            "hr": "",
            "lt": "",
            "sl": ""
        },
        "links": {
            "homepage": [
                "http://www.bitcoin.org",
                "",
                ""
            ],
            "whitepaper": "https://bitcoin.org/bitcoin.pdf",
            "blockchain_site": [
                "https://mempool.space/",
                "https://blockchair.com/bitcoin/",
                "https://btc.com/",
                "https://btc.tokenview.io/",
                "https://www.oklink.com/btc",
                "https://3xpl.com/bitcoin",
                "",
                "",
                "",
                ""
            ],
            "official_forum_url": [
                "https://bitcointalk.org/",
                "",
                ""
            ],
            "chat_url": [
                "",
                "",
                ""
            ],
            "announcement_url": [
                "",
                ""
            ],
            "twitter_screen_name": "bitcoin",
            "facebook_username": "bitcoins",
            "bitcointalk_thread_identifier": null,
            "telegram_channel_identifier": "",
            "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
            "repos_url": {
                "github": [
                    "https://github.com/bitcoin/bitcoin",
                    "https://github.com/bitcoin/bips"
                ],
                "bitbucket": []
            }
        },
        "image": {
            "thumb": "https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400",
            "small": "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png?1696501400",
            "large": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
        },
        "country_origin": "",
        "genesis_date": "2009-01-03",
        "sentiment_votes_up_percentage": 80.44,
        "sentiment_votes_down_percentage": 19.56,
        "watchlist_portfolio_users": 1645685,
        "market_cap_rank": 1,
        "market_data": {
            "current_price": {
                "aed": 224174,
                "ars": 57109145,
                "aud": 92798,
                "bch": 173.203,
                "bdt": 7174887,
                "bhd": 23002,
                "bmd": 61033,
                "bnb": 116.522,
                "brl": 336047,
                "btc": 1,
                "cad": 83960,
                "chf": 52812,
                "clp": 56932746,
                "cny": 437405,
                "czk": 1411399,
                "dkk": 417212,
                "dot": 12859,
                "eos": 124755,
                "eth": 23.445384,
                "eur": 55872,
                "gbp": 47937,
                "gel": 164484,
                "hkd": 475938,
                "huf": 22035943,
                "idr": 973469274,
                "ils": 227339,
                "inr": 5123950,
                "jpy": 8951945,
                "krw": 83299281,
                "kwd": 18680.72,
                "lkr": 18312124,
                "ltc": 999.281,
                "mmk": 128047106,
                "mxn": 1149391,
                "myr": 269582,
                "ngn": 98873361,
                "nok": 659803,
                "nzd": 101781,
                "php": 3493525,
                "pkr": 17012932,
                "pln": 241610,
                "rub": 5297883,
                "sar": 229099,
                "sek": 642082,
                "sgd": 80777,
                "thb": 2149208,
                "try": 2043963,
                "twd": 1980519,
                "uah": 2511454,
                "usd": 61033,
                "vef": 6111.23,
                "vnd": 1532144171,
                "xag": 2222.24,
                "xau": 25.11,
                "xdr": 45947,
                "xlm": 603018,
                "xrp": 103366,
                "yfi": 11.870766,
                "zar": 1143155,
                "bits": 999808,
                "link": 5766,
                "sats": 99980767
            },
            "total_value_locked": null,
            "mcap_to_tvl_ratio": null,
            "fdv_to_tvl_ratio": null,
            "roi": null,
            "ath": {
                "aed": 270832,
                "ars": 65065695,
                "aud": 111440,
                "bch": 270.677,
                "bdt": 8447272,
                "bhd": 27794,
                "bmd": 73738,
                "bnb": 143062,
                "brl": 395640,
                "btc": 1.003301,
                "cad": 99381,
                "chf": 65815,
                "clp": 70749614,
                "cny": 530375,
                "czk": 1703814,
                "dkk": 502620,
                "dot": 13755,
                "eos": 128486,
                "eth": 624.203,
                "eur": 67405,
                "gbp": 57639,
                "gel": 200913,
                "hkd": 576788,
                "huf": 26873106,
                "idr": 1171203031,
                "ils": 270420,
                "inr": 6110932,
                "jpy": 11230398,
                "krw": 98576718,
                "kwd": 22651,
                "lkr": 22592284,
                "ltc": 1015,
                "mmk": 222355720,
                "mxn": 1409247,
                "myr": 345647,
                "ngn": 118524884,
                "nok": 777707,
                "nzd": 120651,
                "php": 4215196,
                "pkr": 20569197,
                "pln": 288843,
                "rub": 6746469,
                "sar": 276540,
                "sek": 769988,
                "sgd": 98281,
                "thb": 2666077,
                "try": 2368817,
                "twd": 2333691,
                "uah": 2892060,
                "usd": 73738,
                "vef": 8618768857,
                "vnd": 1827754928,
                "xag": 3040.05,
                "xau": 37.72,
                "xdr": 55169,
                "xlm": 731116,
                "xrp": 159288,
                "yfi": 12.106647,
                "zar": 1375794,
                "bits": 1058236,
                "link": 74906,
                "sats": 105823579
            },
            "ath_change_percentage": {
                "aed": -17.10131,
                "ars": -12.09448,
                "aud": -16.60123,
                "bch": -36.04339,
                "bdt": -14.933,
                "bhd": -17.11456,
                "bmd": -17.10356,
                "bnb": -99.91858,
                "brl": -14.93274,
                "btc": -0.32896,
                "cad": -15.38845,
                "chf": -19.63466,
                "clp": -19.40639,
                "cny": -17.40322,
                "czk": -17.03593,
                "dkk": -16.86581,
                "dot": -6.43227,
                "eos": -2.84548,
                "eth": -96.24683,
                "eur": -16.9844,
                "gbp": -16.7062,
                "gel": -18.007,
                "hkd": -17.35876,
                "huf": -17.87482,
                "idr": -16.75606,
                "ils": -15.803,
                "inr": -16.02307,
                "jpy": -20.16656,
                "krw": -15.369,
                "kwd": -17.40068,
                "lkr": -18.82148,
                "ltc": -1.52923,
                "mmk": -42.32548,
                "mxn": -18.31486,
                "myr": -21.88724,
                "ngn": -16.45272,
                "nok": -15.03092,
                "nzd": -15.51108,
                "php": -16.99415,
                "pkr": -17.163,
                "pln": -16.22472,
                "rub": -21.35187,
                "sar": -17.02865,
                "sek": -16.48417,
                "sgd": -17.68416,
                "thb": -19.26378,
                "try": -13.58203,
                "twd": -15.00404,
                "uah": -13.02779,
                "usd": -17.10356,
                "vef": -99.99993,
                "vnd": -16.04545,
                "xag": -26.78966,
                "xau": -33.33323,
                "xdr": -16.58968,
                "xlm": -17.48546,
                "xrp": -35.11621,
                "yfi": -1.98932,
                "zar": -16.78263,
                "bits": -5.49249,
                "link": -92.30083,
                "sats": -5.49249
            },
            "ath_date": {
                "aed": "2024-03-14T07:10:36.635Z",
                "ars": "2024-07-29T13:16:45.133Z",
                "aud": "2024-03-14T07:10:36.635Z",
                "bch": "2023-06-10T04:30:21.139Z",
                "bdt": "2024-06-07T12:20:33.049Z",
                "bhd": "2024-03-14T07:10:36.635Z",
                "bmd": "2024-03-14T07:10:36.635Z",
                "bnb": "2017-10-19T00:00:00.000Z",
                "brl": "2024-07-29T11:21:43.812Z",
                "btc": "2019-10-15T16:00:56.136Z",
                "cad": "2024-03-14T07:10:36.635Z",
                "chf": "2024-04-08T12:16:10.708Z",
                "clp": "2024-03-13T09:15:27.924Z",
                "cny": "2024-03-14T07:10:36.635Z",
                "czk": "2024-03-13T09:15:27.924Z",
                "dkk": "2024-03-14T07:10:36.635Z",
                "dot": "2024-08-05T04:41:44.938Z",
                "eos": "2024-08-09T20:25:34.723Z",
                "eth": "2015-10-20T00:00:00.000Z",
                "eur": "2024-03-14T07:10:36.635Z",
                "gbp": "2024-03-14T07:10:36.635Z",
                "gel": "2024-06-10T18:15:34.123Z",
                "hkd": "2024-03-14T07:10:36.635Z",
                "huf": "2024-03-13T08:35:34.668Z",
                "idr": "2024-06-05T18:05:25.718Z",
                "ils": "2024-03-13T09:15:27.924Z",
                "inr": "2024-03-14T07:10:36.635Z",
                "jpy": "2024-06-07T13:55:20.414Z",
                "krw": "2024-06-07T13:55:20.414Z",
                "kwd": "2024-03-14T07:10:36.635Z",
                "lkr": "2024-03-13T09:15:27.924Z",
                "ltc": "2024-08-08T23:11:32.412Z",
                "mmk": "2024-07-22T00:50:47.932Z",
                "mxn": "2021-11-10T17:30:22.767Z",
                "myr": "2024-03-14T07:10:36.635Z",
                "ngn": "2024-03-14T07:10:36.635Z",
                "nok": "2024-04-08T12:16:10.708Z",
                "nzd": "2024-04-08T12:16:10.708Z",
                "php": "2024-06-05T16:15:39.385Z",
                "pkr": "2024-03-14T07:10:36.635Z",
                "pln": "2024-03-13T09:15:27.924Z",
                "rub": "2024-03-13T09:15:27.924Z",
                "sar": "2024-03-14T07:10:36.635Z",
                "sek": "2024-04-12T12:36:25.803Z",
                "sgd": "2024-03-14T07:10:36.635Z",
                "thb": "2024-04-08T12:16:10.708Z",
                "try": "2024-03-14T07:10:36.635Z",
                "twd": "2024-04-08T12:16:10.708Z",
                "uah": "2024-06-07T12:20:33.049Z",
                "usd": "2024-03-14T07:10:36.635Z",
                "vef": "2021-01-03T12:04:17.372Z",
                "vnd": "2024-06-07T12:20:33.049Z",
                "xag": "2024-03-13T09:15:27.924Z",
                "xau": "2021-10-20T14:54:17.702Z",
                "xdr": "2024-03-14T07:10:36.635Z",
                "xlm": "2024-06-18T17:56:17.250Z",
                "xrp": "2021-01-03T07:54:40.240Z",
                "yfi": "2024-07-29T12:56:52.330Z",
                "zar": "2024-03-13T08:35:34.668Z",
                "bits": "2021-05-19T16:00:11.072Z",
                "link": "2017-12-12T00:00:00.000Z",
                "sats": "2021-05-19T16:00:11.072Z"
            },
            "atl": {
                "aed": 632.31,
                "ars": 1478.98,
                "aud": 72.61,
                "bch": 3.513889,
                "bdt": 9390.25,
                "bhd": 45.91,
                "bmd": 121.77,
                "bnb": 52.17,
                "brl": 149.66,
                "btc": 0.99895134,
                "cad": 69.81,
                "chf": 63.26,
                "clp": 107408,
                "cny": 407.23,
                "czk": 4101.56,
                "dkk": 382.47,
                "dot": 991.882,
                "eos": 908.141,
                "eth": 6.779735,
                "eur": 51.3,
                "gbp": 43.9,
                "gel": 102272,
                "hkd": 514.37,
                "huf": 46598,
                "idr": 658780,
                "ils": 672.18,
                "inr": 3993.42,
                "jpy": 6641.83,
                "krw": 75594,
                "kwd": 50.61,
                "lkr": 22646,
                "ltc": 20.707835,
                "mmk": 117588,
                "mxn": 859.32,
                "myr": 211.18,
                "ngn": 10932.64,
                "nok": 1316.03,
                "nzd": 84.85,
                "php": 2880.5,
                "pkr": 17315.84,
                "pln": 220.11,
                "rub": 2206.43,
                "sar": 646.04,
                "sek": 443.81,
                "sgd": 84.47,
                "thb": 5644.35,
                "try": 392.91,
                "twd": 1998.66,
                "uah": 553.37,
                "usd": 67.81,
                "vef": 766.19,
                "vnd": 3672339,
                "xag": 3.37,
                "xau": 0.0531,
                "xdr": 44.39,
                "xlm": 21608,
                "xrp": 9908,
                "yfi": 0.23958075,
                "zar": 666.26,
                "bits": 950993,
                "link": 598.477,
                "sats": 95099268
            },
            "atl_change_percentage": {
                "aed": 35407.07902,
                "ars": 3867190.05326,
                "aud": 127898.87106,
                "bch": 4826.61686,
                "bdt": 76424.45674,
                "bhd": 50075.64784,
                "bmd": 50098.01434,
                "bnb": 123.26903,
                "brl": 224785.60827,
                "btc": 0.10498,
                "cad": 120358.91115,
                "chf": 83510.34294,
                "clp": 52986.88459,
                "cny": 107474.99079,
                "czk": 34363.8257,
                "dkk": 109150.88033,
                "dot": 1197.53011,
                "eos": 13645.61449,
                "eth": 245.55048,
                "eur": 108981.35838,
                "gbp": 109256.39254,
                "gel": 61.07591,
                "hkd": 92568.7045,
                "huf": 47261.61535,
                "idr": 147894.10571,
                "ils": 33772.51584,
                "inr": 128405.7465,
                "jpy": 134887.04818,
                "krw": 110261.513,
                "kwd": 36866.76898,
                "lkr": 80884.90283,
                "ltc": 4726.07343,
                "mmk": 108961.00111,
                "mxn": 133860.27997,
                "myr": 127752.63531,
                "ngn": 905667.45857,
                "nok": 50112.52068,
                "nzd": 120031.05546,
                "php": 121366.97411,
                "pkr": 98300.66859,
                "pln": 109834.63276,
                "rub": 240377.33344,
                "sar": 35416.23666,
                "sek": 144797.30985,
                "sgd": 95679.02337,
                "thb": 38035.31628,
                "try": 520906.53975,
                "twd": 99143.85468,
                "uah": 454441.8274,
                "usd": 90044.55612,
                "vef": 698.83091,
                "vnd": 41684.9021,
                "xag": 65948.30136,
                "xau": 47251.4483,
                "xdr": 103561.4836,
                "xlm": 2691.8771,
                "xrp": 943.11996,
                "yfi": 4852.73827,
                "zar": 171738.6477,
                "bits": 5.16509,
                "link": 863.63849,
                "sats": 5.16509
            },
            "atl_date": {
                "aed": "2015-01-14T00:00:00.000Z",
                "ars": "2015-01-14T00:00:00.000Z",
                "aud": "2013-07-05T00:00:00.000Z",
                "bch": "2017-08-02T00:00:00.000Z",
                "bdt": "2013-09-08T00:00:00.000Z",
                "bhd": "2013-09-08T00:00:00.000Z",
                "bmd": "2013-09-08T00:00:00.000Z",
                "bnb": "2022-11-27T02:35:06.345Z",
                "brl": "2013-07-05T00:00:00.000Z",
                "btc": "2019-10-21T00:00:00.000Z",
                "cad": "2013-07-05T00:00:00.000Z",
                "chf": "2013-07-05T00:00:00.000Z",
                "clp": "2015-01-14T00:00:00.000Z",
                "cny": "2013-07-05T00:00:00.000Z",
                "czk": "2015-01-14T00:00:00.000Z",
                "dkk": "2013-07-05T00:00:00.000Z",
                "dot": "2021-05-19T11:04:48.978Z",
                "eos": "2019-04-11T00:00:00.000Z",
                "eth": "2017-06-12T00:00:00.000Z",
                "eur": "2013-07-05T00:00:00.000Z",
                "gbp": "2013-07-05T00:00:00.000Z",
                "gel": "2024-01-23T14:25:15.024Z",
                "hkd": "2013-07-05T00:00:00.000Z",
                "huf": "2015-01-14T00:00:00.000Z",
                "idr": "2013-07-05T00:00:00.000Z",
                "ils": "2015-01-14T00:00:00.000Z",
                "inr": "2013-07-05T00:00:00.000Z",
                "jpy": "2013-07-05T00:00:00.000Z",
                "krw": "2013-07-05T00:00:00.000Z",
                "kwd": "2015-01-14T00:00:00.000Z",
                "lkr": "2015-01-14T00:00:00.000Z",
                "ltc": "2013-11-28T00:00:00.000Z",
                "mmk": "2013-09-08T00:00:00.000Z",
                "mxn": "2013-07-05T00:00:00.000Z",
                "myr": "2013-07-05T00:00:00.000Z",
                "ngn": "2013-07-06T00:00:00.000Z",
                "nok": "2015-01-14T00:00:00.000Z",
                "nzd": "2013-07-05T00:00:00.000Z",
                "php": "2013-07-05T00:00:00.000Z",
                "pkr": "2015-01-14T00:00:00.000Z",
                "pln": "2013-07-05T00:00:00.000Z",
                "rub": "2013-07-05T00:00:00.000Z",
                "sar": "2015-01-14T00:00:00.000Z",
                "sek": "2013-07-05T00:00:00.000Z",
                "sgd": "2013-07-05T00:00:00.000Z",
                "thb": "2015-01-14T00:00:00.000Z",
                "try": "2015-01-14T00:00:00.000Z",
                "twd": "2013-07-05T00:00:00.000Z",
                "uah": "2013-07-06T00:00:00.000Z",
                "usd": "2013-07-06T00:00:00.000Z",
                "vef": "2013-09-08T00:00:00.000Z",
                "vnd": "2015-01-14T00:00:00.000Z",
                "xag": "2013-07-05T00:00:00.000Z",
                "xau": "2013-07-05T00:00:00.000Z",
                "xdr": "2013-07-05T00:00:00.000Z",
                "xlm": "2018-11-20T00:00:00.000Z",
                "xrp": "2018-12-25T00:00:00.000Z",
                "yfi": "2020-09-12T20:09:36.122Z",
                "zar": "2013-07-05T00:00:00.000Z",
                "bits": "2021-05-19T13:14:13.071Z",
                "link": "2020-08-16T08:13:13.338Z",
                "sats": "2021-05-19T13:14:13.071Z"
            },
            "market_cap": {
                "aed": 4426537086109,
                "ars": 1127676560955011,
                "aud": 1832379066860,
                "bch": 3418966231,
                "bdt": 141675239812601,
                "bhd": 454200305894,
                "bmd": 1205155754454,
                "bnb": 2300041571,
                "brl": 6635587584024,
                "btc": 19738125,
                "cad": 1657872513615,
                "chf": 1042827300108,
                "clp": 1124193390869750,
                "cny": 8636989745445,
                "czk": 27869467852899,
                "dkk": 8238263964084,
                "dot": 253760363967,
                "eos": 2462777924079,
                "eth": 462750128,
                "eur": 1103241758079,
                "gbp": 946557048130,
                "gel": 3247894758253,
                "hkd": 9397864831020,
                "huf": 435121485145605,
                "idr": 19222113767965348,
                "ils": 4489024411978,
                "inr": 101177465436065,
                "jpy": 176765015128781,
                "krw": 1644826702572638,
                "kwd": 368869252700,
                "lkr": 361590995322519,
                "ltc": 19723986112,
                "mmk": 2528416772844423,
                "mxn": 22695854714603,
                "myr": 5323172967423,
                "ngn": 1952352322215429,
                "nok": 13028456799100,
                "nzd": 2009765942358,
                "php": 68983112974634,
                "pkr": 335937166554043,
                "pln": 4770828392353,
                "rub": 104611937587600,
                "sar": 4523783514248,
                "sek": 12678539825794,
                "sgd": 1595023641020,
                "thb": 42438246273324,
                "try": 40360064843942,
                "twd": 39107304232031,
                "uah": 49591145759791,
                "usd": 1205155754454,
                "vef": 120672245693,
                "vnd": 30253702249798276,
                "xag": 43880263340,
                "xau": 495728768,
                "xdr": 907261739601,
                "xlm": 11902702389295,
                "xrp": 2040356715010,
                "yfi": 234318071,
                "zar": 22572717925392,
                "bits": 19735290212037,
                "link": 113801635064,
                "sats": 1973529021203660
            },
            "market_cap_rank": 1,
            "fully_diluted_valuation": {
                "aed": 4709529340213,
                "ars": 1199769875814204,
                "aud": 1949524608039,
                "bch": 3637543629,
                "bdt": 150732657537868,
                "bhd": 483237715020,
                "bmd": 1282202379584,
                "bnb": 2447085171,
                "brl": 7059806301991,
                "btc": 21000000,
                "cad": 1763861703475,
                "chf": 1109496130066,
                "clp": 1196064023723872,
                "cny": 9189159793767,
                "czk": 29651186468364,
                "dkk": 8764943136482,
                "dot": 269983478335,
                "eos": 2620225396569,
                "eth": 492334135,
                "eur": 1173772935355,
                "gbp": 1007071239580,
                "gel": 3455535412980,
                "hkd": 9998678266118,
                "huf": 462939169148929,
                "idr": 20450999734132412,
                "ils": 4776011533595,
                "inr": 107645826245268,
                "jpy": 188065751823155,
                "krw": 1749981862716210,
                "kwd": 392451375534,
                "lkr": 384707813015314,
                "ltc": 20984957201,
                "mmk": 2690060592367962,
                "mxn": 24146819873046,
                "myr": 5663487910624,
                "ngn": 2077167854926646,
                "nok": 13861377044735,
                "nzd": 2138251976290,
                "php": 73393261643003,
                "pkr": 357413913309137,
                "pln": 5075831480418,
                "rub": 111299867101845,
                "sar": 4812992814627,
                "sek": 13489089583822,
                "sgd": 1696994849380,
                "thb": 45151359196469,
                "try": 42940317873292,
                "twd": 41607467217512,
                "uah": 52761549587695,
                "usd": 1282202379584,
                "vef": 128386924268,
                "vnd": 32187846983731424,
                "xag": 46685565632,
                "xau": 527421127,
                "xdr": 965263748792,
                "xlm": 12663652204817,
                "xrp": 2170798442872,
                "yfi": 249298223,
                "zar": 24015810844912,
                "bits": 20996983981648,
                "link": 121077069699,
                "sats": 2099698398164814
            },
            "market_cap_fdv_ratio": 0.94,
            "total_volume": {
                "aed": 51735690160,
                "ars": 13179856855037,
                "aud": 21416153037,
                "bch": 39972440,
                "bdt": 1655846583396,
                "bhd": 5308521275,
                "bmd": 14085404345,
                "bnb": 26891416,
                "brl": 77554236325,
                "btc": 230739,
                "cad": 19376586488,
                "chf": 12188170807,
                "clp": 13139146881348,
                "cny": 100945867321,
                "czk": 325727792565,
                "dkk": 96285711294,
                "dot": 2967745809,
                "eos": 28791483955,
                "eth": 5410811,
                "eur": 12894272127,
                "gbp": 11063000537,
                "gel": 37960164710,
                "hkd": 109838687355,
                "huf": 5085535238857,
                "idr": 224660790766510,
                "ils": 52466018375,
                "inr": 1182523923592,
                "jpy": 2065962596937,
                "krw": 19224111985524,
                "kwd": 4311204220,
                "lkr": 4226138702737,
                "ltc": 230617681,
                "mmk": 29551178316362,
                "mxn": 265260560251,
                "myr": 62215230993,
                "ngn": 22818355039326,
                "nok": 152271672215,
                "nzd": 23489383702,
                "php": 806248516552,
                "pkr": 3926306461242,
                "pln": 55759636644,
                "rub": 1222664734261,
                "sar": 52872269608,
                "sek": 148181975063,
                "sgd": 18642032651,
                "thb": 496002160928,
                "try": 471713162906,
                "twd": 457071371004,
                "uah": 579602542983,
                "usd": 14085404345,
                "vef": 1410371537,
                "vnd": 353593821839795,
                "xag": 512855911,
                "xau": 5793890,
                "xdr": 10603731843,
                "xlm": 139166787448,
                "xrp": 23855256226,
                "yfi": 2739579,
                "zar": 263821384062,
                "bits": 230739263011,
                "link": 1330785757,
                "sats": 23073926301110
            },
            "high_24h": {
                "aed": 225872,
                "ars": 57541652,
                "aud": 93500,
                "bch": 175.931,
                "bdt": 7229225,
                "bhd": 23176,
                "bmd": 61495,
                "bnb": 119.786,
                "brl": 338592,
                "btc": 1,
                "cad": 84596,
                "chf": 53212,
                "clp": 57363918,
                "cny": 440717,
                "czk": 1422088,
                "dkk": 420372,
                "dot": 12891,
                "eos": 128486,
                "eth": 23.457232,
                "eur": 56295,
                "gbp": 48300,
                "gel": 165729,
                "hkd": 479542,
                "huf": 22202828,
                "idr": 980841693,
                "ils": 229060,
                "inr": 5162756,
                "jpy": 9019741,
                "krw": 83930135,
                "kwd": 18822.19,
                "lkr": 18450808,
                "ltc": 1012,
                "mmk": 129016851,
                "mxn": 1158095,
                "myr": 271624,
                "ngn": 99622163,
                "nok": 664800,
                "nzd": 102552,
                "php": 3519983,
                "pkr": 17141777,
                "pln": 243440,
                "rub": 5369043,
                "sar": 230834,
                "sek": 646944,
                "sgd": 81389,
                "thb": 2165683,
                "try": 2059442,
                "twd": 1995518,
                "uah": 2530474,
                "usd": 61495,
                "vef": 6157.51,
                "vnd": 1543747628,
                "xag": 2239.07,
                "xau": 25.3,
                "xdr": 46295,
                "xlm": 612974,
                "xrp": 105193,
                "yfi": 11.988625,
                "zar": 1151812,
                "bits": 1001183,
                "link": 5820,
                "sats": 100118259
            },
            "low_24h": {
                "aed": 220607,
                "ars": 56200396,
                "aud": 91349,
                "bch": 169.097,
                "bdt": 7060717,
                "bhd": 22636,
                "bmd": 60062,
                "bnb": 116.463,
                "brl": 330700,
                "btc": 1,
                "cad": 82576,
                "chf": 51972,
                "clp": 56026804,
                "cny": 430445,
                "czk": 1388934,
                "dkk": 410573,
                "dot": 12603,
                "eos": 124347,
                "eth": 23.054467,
                "eur": 54983,
                "gbp": 47174,
                "gel": 161866,
                "hkd": 468365,
                "huf": 21685296,
                "idr": 957978945,
                "ils": 223721,
                "inr": 5042415,
                "jpy": 8809497,
                "krw": 81973781,
                "kwd": 18383.46,
                "lkr": 18020732,
                "ltc": 989.818,
                "mmk": 126009557,
                "mxn": 1131101,
                "myr": 265293,
                "ngn": 97300039,
                "nok": 649304,
                "nzd": 100170,
                "php": 3437304,
                "pkr": 16742213,
                "pln": 237789,
                "rub": 5213580,
                "sar": 225450,
                "sek": 631865,
                "sgd": 79492,
                "thb": 2115009,
                "try": 2011438,
                "twd": 1949004,
                "uah": 2471491,
                "usd": 60062,
                "vef": 6013.98,
                "vnd": 1507850295,
                "xag": 2186.88,
                "xau": 24.71,
                "xdr": 45216,
                "xlm": 594275,
                "xrp": 100996,
                "yfi": 11.778835,
                "zar": 1109884,
                "bits": 998400,
                "link": 5693,
                "sats": 99840040
            },
            "price_change_24h": 433.711,
            "price_change_percentage_24h": 0.7157,
            "price_change_percentage_7d": 1.32015,
            "price_change_percentage_14d": -10.95326,
            "price_change_percentage_30d": 5.55171,
            "price_change_percentage_60d": -9.2182,
            "price_change_percentage_200d": 56.00769,
            "price_change_percentage_1y": 107.58303,
            "market_cap_change_24h": 7325707049,
            "market_cap_change_percentage_24h": 0.61158,
            "price_change_24h_in_currency": {
                "aed": 1593.02,
                "ars": 342818,
                "aud": 622.23,
                "bch": -2.2277996171328596,
                "bdt": 50986,
                "bhd": 164.49,
                "bmd": 433.71,
                "bnb": -3.0729554280762983,
                "brl": 1794.14,
                "btc": 0,
                "cad": 746.62,
                "chf": 427.04,
                "clp": 408816,
                "cny": 3077.98,
                "czk": 10472.03,
                "dkk": 3029.14,
                "dot": 218.572,
                "eos": -3034.222097697653,
                "eth": 0.0626034,
                "eur": 371.95,
                "gbp": 442.33,
                "gel": 1168.85,
                "hkd": 3230.6,
                "huf": 148138,
                "idr": 7032963,
                "ils": 1579.15,
                "inr": 36075,
                "jpy": 65317,
                "krw": 559016,
                "kwd": 132.51,
                "lkr": 130129,
                "ltc": -10.008693158803567,
                "mmk": 909926,
                "mxn": 6847.74,
                "myr": 1915.7,
                "ngn": 702612,
                "nok": 4384.16,
                "nzd": 810.05,
                "php": 24159,
                "pkr": 120897,
                "pln": 1888.54,
                "rub": -71160.51876077801,
                "sar": 1630.44,
                "sek": 4636.38,
                "sgd": 573.71,
                "thb": 13085.63,
                "try": 14021.79,
                "twd": 15164.77,
                "uah": 17846.84,
                "usd": 433.71,
                "vef": 43.43,
                "vnd": 8073585,
                "xag": 13.97,
                "xau": 0.143861,
                "xdr": 326.5,
                "xlm": -5321.893152524019,
                "xrp": -819.4718886773189,
                "yfi": -0.10354855326607115,
                "zar": 33271,
                "bits": 111.24,
                "link": -43.56742683838547,
                "sats": 11124.07
            },
            "price_change_percentage_1h_in_currency": {
                "aed": 0.23944,
                "ars": 0.23944,
                "aud": 0.23944,
                "bch": -0.09552,
                "bdt": 0.23944,
                "bhd": 0.23944,
                "bmd": 0.23944,
                "bnb": -0.32447,
                "brl": 0.23944,
                "btc": 0,
                "cad": 0.23944,
                "chf": 0.23944,
                "clp": 0.23944,
                "cny": 0.23944,
                "czk": 0.23944,
                "dkk": 0.23944,
                "dot": 0.15443,
                "eos": 0.04384,
                "eth": 0.19695,
                "eur": 0.23944,
                "gbp": 0.23944,
                "gel": 0.23944,
                "hkd": 0.23944,
                "huf": 0.23944,
                "idr": 0.23944,
                "ils": 0.23944,
                "inr": 0.23944,
                "jpy": 0.23944,
                "krw": 0.23944,
                "kwd": 0.23944,
                "lkr": 0.23944,
                "ltc": 0.12816,
                "mmk": 0.23944,
                "mxn": 0.23944,
                "myr": 0.23944,
                "ngn": 0.23944,
                "nok": 0.23944,
                "nzd": 0.23944,
                "php": 0.23944,
                "pkr": 0.23944,
                "pln": 0.23944,
                "rub": 0.23944,
                "sar": 0.23944,
                "sek": 0.23944,
                "sgd": 0.23944,
                "thb": 0.23944,
                "try": 0.23944,
                "twd": 0.23944,
                "uah": 0.23944,
                "usd": 0.23944,
                "vef": 0.23944,
                "vnd": 0.23944,
                "xag": 0.23944,
                "xau": 0.23944,
                "xdr": 0.23944,
                "xlm": 0.04392,
                "xrp": 0.1787,
                "yfi": 0.23792,
                "zar": 0.23944,
                "bits": 0.04048,
                "link": -0.0188,
                "sats": 0.04048
            },
            "price_change_percentage_24h_in_currency": {
                "aed": 0.7157,
                "ars": 0.60391,
                "aud": 0.67505,
                "bch": -1.2699,
                "bdt": 0.7157,
                "bhd": 0.72025,
                "bmd": 0.7157,
                "bnb": -2.56947,
                "brl": 0.53676,
                "btc": 0,
                "cad": 0.89723,
                "chf": 0.8152,
                "clp": 0.72326,
                "cny": 0.70868,
                "czk": 0.74751,
                "dkk": 0.73135,
                "dot": 1.72909,
                "eos": -2.37439,
                "eth": 0.26773,
                "eur": 0.67018,
                "gbp": 0.93134,
                "gel": 0.7157,
                "hkd": 0.68343,
                "huf": 0.6768,
                "idr": 0.72772,
                "ils": 0.69948,
                "inr": 0.70904,
                "jpy": 0.735,
                "krw": 0.67563,
                "kwd": 0.71439,
                "lkr": 0.7157,
                "ltc": -0.99166,
                "mmk": 0.7157,
                "mxn": 0.59934,
                "myr": 0.7157,
                "ngn": 0.7157,
                "nok": 0.66891,
                "nzd": 0.80226,
                "php": 0.69636,
                "pkr": 0.7157,
                "pln": 0.78781,
                "rub": -1.32539,
                "sar": 0.71678,
                "sek": 0.72734,
                "sgd": 0.71532,
                "thb": 0.61259,
                "try": 0.69075,
                "twd": 0.7716,
                "uah": 0.7157,
                "usd": 0.7157,
                "vef": 0.7157,
                "vnd": 0.52974,
                "xag": 0.63268,
                "xau": 0.57633,
                "xdr": 0.7157,
                "xlm": -0.87482,
                "xrp": -0.78655,
                "yfi": -0.86476,
                "zar": 2.9977,
                "bits": 0.01113,
                "link": -0.74988,
                "sats": 0.01113
            },
            "price_change_percentage_7d_in_currency": {
                "aed": 1.32015,
                "ars": 1.63308,
                "aud": 0.25715,
                "bch": 3.46128,
                "bdt": 1.42202,
                "bhd": 1.39656,
                "bmd": 1.32015,
                "bnb": 2.04895,
                "brl": -2.61011,
                "btc": 0,
                "cad": 0.4512,
                "chf": 2.17327,
                "clp": -0.67524,
                "cny": 1.4263,
                "czk": 0.85394,
                "dkk": 1.27941,
                "dot": 4.80687,
                "eos": 1.01484,
                "eth": 13.14093,
                "eur": 1.25268,
                "gbp": 1.90909,
                "gel": 0.94559,
                "hkd": 1.19169,
                "huf": 0.19622,
                "idr": -0.09574,
                "ils": -0.68189,
                "inr": 1.54573,
                "jpy": 1.37475,
                "krw": 1.81699,
                "kwd": 1.6946,
                "lkr": 0.74232,
                "ltc": 4.99409,
                "mmk": 1.32015,
                "mxn": -0.50882,
                "myr": -0.49336,
                "ngn": 0.08012,
                "nok": 0.04719,
                "nzd": 0.6781,
                "php": 0.34718,
                "pkr": 1.22936,
                "pln": 2.08426,
                "rub": 2.95624,
                "sar": 1.31373,
                "sek": 0.99304,
                "sgd": 1.0453,
                "thb": 1.12786,
                "try": 2.25663,
                "twd": 0.84189,
                "uah": 1.33259,
                "usd": 1.32015,
                "vef": 1.32015,
                "vnd": 0.86235,
                "xag": 5.34996,
                "xau": 1.77293,
                "xdr": 1.23785,
                "xlm": -7.5562,
                "xrp": -5.43794,
                "yfi": 2.86303,
                "zar": 3.82641,
                "bits": -0.05076,
                "link": 9.92307,
                "sats": -0.05076
            },
            "price_change_percentage_14d_in_currency": {
                "aed": -10.95326,
                "ars": -10.22414,
                "aud": -11.35943,
                "bch": -0.33875,
                "bdt": -10.87162,
                "bhd": -10.92655,
                "bmd": -10.95326,
                "bnb": -0.64172,
                "brl": -13.12372,
                "btc": 0,
                "cad": -11.4233,
                "chf": -12.88808,
                "clp": -12.31809,
                "cny": -11.98123,
                "czk": -11.77881,
                "dkk": -11.44746,
                "dot": 9.24596,
                "eos": 4.97347,
                "eth": 11.05872,
                "eur": -11.37931,
                "gbp": -10.08944,
                "gel": -11.11816,
                "hkd": -11.0525,
                "huf": -10.7518,
                "idr": -12.88803,
                "ils": -9.3465,
                "inr": -10.7072,
                "jpy": -15.04315,
                "krw": -12.24215,
                "kwd": -10.86123,
                "lkr": -11.7911,
                "ltc": 4.41459,
                "mmk": -10.95326,
                "mxn": -9.33419,
                "myr": -15.55138,
                "ngn": -12.97163,
                "nok": -12.34253,
                "nzd": -12.56446,
                "php": -12.81159,
                "pkr": -10.68375,
                "pln": -10.45651,
                "rub": -10.09275,
                "sar": -10.90413,
                "sek": -13.37372,
                "sgd": -12.19389,
                "thb": -12.61861,
                "try": -9.58472,
                "twd": -11.93836,
                "uah": -10.71356,
                "usd": -10.95326,
                "vef": -10.95326,
                "vnd": -11.697,
                "xag": -9.50127,
                "xau": -12.56657,
                "xdr": -11.08165,
                "xlm": -10.7275,
                "xrp": -10.19626,
                "yfi": 0.78622,
                "zar": -8.74012,
                "bits": 0.01019,
                "link": 13.46538,
                "sats": 0.01019
            },
            "price_change_percentage_30d_in_currency": {
                "aed": 5.55171,
                "ars": 7.44014,
                "aud": 8.51912,
                "bch": 5.307,
                "bdt": 5.60967,
                "bhd": 5.53967,
                "bmd": 5.55171,
                "bnb": 6.65307,
                "brl": 6.87749,
                "btc": 0,
                "cad": 6.51508,
                "chf": 1.99642,
                "clp": 7.62619,
                "cny": 4.22539,
                "czk": 4.57583,
                "dkk": 5.10052,
                "dot": 33.4373,
                "eos": 14.8947,
                "eth": 27.20808,
                "eur": 5.01267,
                "gbp": 7.05319,
                "gel": 3.62909,
                "hkd": 5.43516,
                "huf": 5.12833,
                "idr": 4.53916,
                "ils": 7.9963,
                "inr": 6.12676,
                "jpy": -2.47395,
                "krw": 4.9739,
                "kwd": 5.66495,
                "lkr": 4.53973,
                "ltc": 18.50716,
                "mmk": 0.50537,
                "mxn": 11.9222,
                "myr": -0.81442,
                "ngn": 21.61719,
                "nok": 6.45629,
                "nzd": 7.33215,
                "php": 3.77142,
                "pkr": 5.64255,
                "pln": 6.62168,
                "rub": 5.31297,
                "sar": 5.63763,
                "sek": 5.77611,
                "sgd": 4.01758,
                "thb": 2.90674,
                "try": 7.65896,
                "twd": 5.50295,
                "uah": 6.1765,
                "usd": 5.55171,
                "vef": 5.55171,
                "vnd": 4.20039,
                "xag": 20.91812,
                "xau": 4.91408,
                "xdr": 4.89253,
                "xlm": -6.6506,
                "xrp": -19.63136,
                "yfi": 19.3314,
                "zar": 9.96496,
                "bits": 0.00497,
                "link": 27.02971,
                "sats": 0.00497
            },
            "price_change_percentage_60d_in_currency": {
                "aed": -9.21573,
                "ars": -5.82193,
                "aud": -8.72136,
                "bch": 14.94262,
                "bdt": -9.31005,
                "bhd": -9.22446,
                "bmd": -9.2182,
                "bnb": 5.52945,
                "brl": -6.72627,
                "btc": 0,
                "cad": -9.17271,
                "chf": -12.42846,
                "clp": -8.28614,
                "cny": -8.50711,
                "czk": -8.7526,
                "dkk": -10.58032,
                "dot": 23.4668,
                "eos": 27.13399,
                "eth": 21.80489,
                "eur": -10.67972,
                "gbp": -9.09192,
                "gel": -14.60491,
                "hkd": -9.38854,
                "huf": -10.88292,
                "idr": -11.14608,
                "ils": -8.75325,
                "inr": -8.82937,
                "jpy": -15.19574,
                "krw": -10.13153,
                "kwd": -9.39493,
                "lkr": -10.32897,
                "ltc": 14.55752,
                "mmk": -9.21561,
                "mxn": -7.34867,
                "myr": -15.06393,
                "ngn": -0.90792,
                "nok": -8.26225,
                "nzd": -6.91628,
                "php": -11.53493,
                "pkr": -9.13671,
                "pln": -10.9784,
                "rub": -11.63313,
                "sar": -9.14208,
                "sek": -8.83304,
                "sgd": -11.16867,
                "thb": -12.96537,
                "try": -6.01119,
                "twd": -9.01155,
                "uah": -7.791,
                "usd": -9.2182,
                "vef": -9.2182,
                "vnd": -10.36909,
                "xag": -3.30529,
                "xau": -13.56376,
                "xdr": -9.47613,
                "xlm": -12.78347,
                "xrp": -25.91731,
                "yfi": 9.45513,
                "zar": -8.54474,
                "bits": -0.07387,
                "link": 28.93102,
                "sats": -0.07387
            },
            "price_change_percentage_200d_in_currency": {
                "aed": 56.01619,
                "ars": 77.60697,
                "aud": 55.74618,
                "bch": -0.53704,
                "bdt": 67.17966,
                "bhd": 56.00811,
                "bmd": 56.00769,
                "bnb": -11.8421,
                "brl": 73.40487,
                "btc": 0,
                "cad": 59.21361,
                "chf": 54.91863,
                "clp": 59.33856,
                "cny": 57.61314,
                "czk": 57.21784,
                "dkk": 54.9906,
                "dot": 104.79883,
                "eos": 111.25428,
                "eth": 31.24214,
                "eur": 54.76643,
                "gbp": 55.22959,
                "gel": 58.35809,
                "hkd": 55.52505,
                "huf": 57.92476,
                "idr": 58.19665,
                "ils": 54.75918,
                "inr": 57.47915,
                "jpy": 54.05022,
                "krw": 58.89185,
                "kwd": 55.15859,
                "lkr": 46.33333,
                "ltc": 65.43323,
                "mmk": 55.93108,
                "mxn": 69.48544,
                "myr": 45.79202,
                "ngn": 183.17363,
                "nok": 60.09345,
                "nzd": 58.0765,
                "php": 58.47028,
                "pkr": 55.46392,
                "pln": 52.39154,
                "rub": 52.34795,
                "sar": 56.14684,
                "sek": 56.24718,
                "sgd": 53.91499,
                "thb": 53.79734,
                "try": 72.60743,
                "twd": 60.98612,
                "uah": 71.36297,
                "usd": 56.00769,
                "vef": 56.00769,
                "vnd": 59.37579,
                "xag": 26.9805,
                "xau": 29.97955,
                "xdr": 56.40951,
                "xlm": 67.76639,
                "xrp": 33.99869,
                "yfi": 103.50615,
                "zar": 53.42758,
                "bits": 0.02843,
                "link": 105.18186,
                "sats": 0.02843
            },
            "price_change_percentage_1y_in_currency": {
                "aed": 107.57992,
                "ars": 578.72776,
                "aud": 106.26401,
                "bch": 36.39192,
                "bdt": 122.96066,
                "bhd": 107.52797,
                "bmd": 107.58303,
                "bnb": -4.50125,
                "brl": 134.67316,
                "btc": 0,
                "cad": 112.73212,
                "chf": 105.02878,
                "clp": 129.02141,
                "cny": 106.10769,
                "czk": 117.51085,
                "dkk": 109.23352,
                "dot": 118.05982,
                "eos": 204.20505,
                "eth": 47.38166,
                "eur": 108.76249,
                "gbp": 106.84905,
                "gel": 114.09796,
                "hkd": 107.00434,
                "huf": 113.76551,
                "idr": 117.61465,
                "ils": 108.4763,
                "inr": 110.49755,
                "jpy": 110.44074,
                "krw": 115.0738,
                "kwd": 106.52771,
                "lkr": 94.77432,
                "ltc": 181.90392,
                "mmk": 107.38643,
                "mxn": 129.72318,
                "myr": 100.54555,
                "ngn": 337.16462,
                "nok": 118.10559,
                "nzd": 108.98446,
                "php": 111.88059,
                "pkr": 101.19441,
                "pln": 102.99976,
                "rub": 85.13272,
                "sar": 107.68251,
                "sek": 104.34228,
                "sgd": 103.67572,
                "thb": 108.07885,
                "try": 157.16454,
                "twd": 111.89603,
                "uah": 132.46215,
                "usd": 107.58303,
                "vef": 107.58303,
                "vnd": 119.43829,
                "xag": 71.87704,
                "xau": 63.47367,
                "xdr": 108.92318,
                "xlm": 186.06842,
                "xrp": 122.58511,
                "yfi": 155.2138,
                "zar": 106.77817,
                "bits": -0.02046,
                "link": 49.27136,
                "sats": -0.02046
            },
            "market_cap_change_24h_in_currency": {
                "aed": 26907321992,
                "ars": 5609264048699,
                "aud": 10402903634,
                "bch": -41737151.08117485,
                "bdt": 861192670883,
                "bhd": 2781282909,
                "bmd": 7325707049,
                "bnb": -59867990.26533127,
                "brl": 28596608549,
                "btc": 397,
                "cad": 13042238270,
                "chf": 7361917799,
                "clp": 6917414153058,
                "cny": 51902229687,
                "czk": 178152600003,
                "dkk": 51349530043,
                "dot": 4426000246,
                "eos": -57070045913.22461,
                "eth": 1512430,
                "eur": 6210306993,
                "gbp": 7763737627,
                "gel": 19742780498,
                "hkd": 54131654737,
                "huf": 2477849238542,
                "idr": 119123701961056,
                "ils": 26568461874,
                "inr": 608372156169,
                "jpy": 1108149780083,
                "krw": 9347524663163,
                "kwd": 2237431791,
                "lkr": 2197981209990,
                "ltc": -185262579.3724861,
                "mmk": 15369333389454,
                "mxn": 111867580942,
                "myr": 32357648037,
                "ngn": 11867645419888,
                "nok": 73176192639,
                "nzd": 13931934732,
                "php": 406150919820,
                "pkr": 2042040839996,
                "pln": 32392399328,
                "rub": -1514851139734.4531,
                "sar": 27546361147,
                "sek": 78523633093,
                "sgd": 9689584130,
                "thb": 214737102310,
                "try": 235392284160,
                "twd": 259281332434,
                "uah": 301446684160,
                "usd": 7325707049,
                "vef": 733523047,
                "vnd": 128276557571188,
                "xag": 230749476,
                "xau": 2330593,
                "xdr": 5514916804,
                "xlm": -106895780608.70117,
                "xrp": -18040325953.288086,
                "yfi": -1852556.7573111057,
                "zar": 634286921819,
                "bits": -343058813.21484375,
                "link": -753226402.3901062,
                "sats": -34305881321.5
            },
            "market_cap_change_percentage_24h_in_currency": {
                "aed": 0.61158,
                "ars": 0.4999,
                "aud": 0.57097,
                "bch": -1.20603,
                "bdt": 0.61158,
                "bhd": 0.61612,
                "bmd": 0.61158,
                "bnb": -2.53688,
                "brl": 0.43282,
                "btc": 0.00201,
                "cad": 0.79292,
                "chf": 0.71098,
                "clp": 0.61913,
                "cny": 0.60456,
                "czk": 0.64335,
                "dkk": 0.62721,
                "dot": 1.77513,
                "eos": -2.26482,
                "eth": 0.32791,
                "eur": 0.5661,
                "gbp": 0.82699,
                "gel": 0.61158,
                "hkd": 0.57934,
                "huf": 0.57272,
                "idr": 0.62359,
                "ils": 0.59538,
                "inr": 0.60493,
                "jpy": 0.63086,
                "krw": 0.57155,
                "kwd": 0.61027,
                "lkr": 0.61158,
                "ltc": -0.93054,
                "mmk": 0.61158,
                "mxn": 0.49534,
                "myr": 0.61158,
                "ngn": 0.61158,
                "nok": 0.56484,
                "nzd": 0.69805,
                "php": 0.59226,
                "pkr": 0.61158,
                "pln": 0.68361,
                "rub": -1.4274,
                "sar": 0.61265,
                "sek": 0.6232,
                "sgd": 0.6112,
                "thb": 0.50857,
                "try": 0.58665,
                "twd": 0.66742,
                "uah": 0.61158,
                "usd": 0.61158,
                "vef": 0.61158,
                "vnd": 0.42581,
                "xag": 0.52864,
                "xau": 0.47236,
                "xdr": 0.61158,
                "xlm": -0.89009,
                "xrp": -0.87643,
                "yfi": -0.78441,
                "zar": 2.89121,
                "bits": -0.00174,
                "link": -0.65752,
                "sats": -0.00174
            },
            "total_supply": 21000000,
            "max_supply": 21000000,
            "circulating_supply": 19738125,
            "last_updated": "2024-08-10T19:52:32.488Z"
        },
        "community_data": {
            "facebook_likes": null,
            "twitter_followers": 6779892,
            "reddit_average_posts_48h": 0,
            "reddit_average_comments_48h": 0,
            "reddit_subscribers": 0,
            "reddit_accounts_active_48h": 0,
            "telegram_channel_user_count": null
        },
        "developer_data": {
            "forks": 36426,
            "stars": 73168,
            "subscribers": 3967,
            "total_issues": 7743,
            "closed_issues": 7380,
            "pull_requests_merged": 11215,
            "pull_request_contributors": 846,
            "code_additions_deletions_4_weeks": {
                "additions": 1570,
                "deletions": -1948
            },
            "commit_count_4_weeks": 108,
            "last_4_weeks_commit_activity_series": []
        },
        "status_updates": [],
        "last_updated": "2024-08-10T19:52:32.488Z",
        "tickers": [
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 61029.08,
                "volume": 13364.08464,
                "converted_last": {
                    "btc": 0.99966077,
                    "eth": 23.439896,
                    "usd": 61045
                },
                "converted_volume": {
                    "btc": 13281,
                    "eth": 311418,
                    "usd": 811037374
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:00+00:00",
                "last_traded_at": "2024-08-10T19:52:00+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/BTC_USDT?ref=37754157",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "Kraken",
                    "identifier": "kraken",
                    "has_trading_incentive": false
                },
                "last": 61080.1,
                "volume": 2105.98860352,
                "converted_last": {
                    "btc": 1.00023,
                    "eth": 23.453254,
                    "usd": 61080
                },
                "converted_volume": {
                    "btc": 2106,
                    "eth": 49392,
                    "usd": 128633995
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.kraken.com/app/trade/BTC-USD",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 1.0002,
                "volume": 444.09155,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 443.888,
                    "eth": 10408,
                    "usd": 27106493
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019997,
                "timestamp": "2024-08-10T19:50:19+00:00",
                "last_traded_at": "2024-08-10T19:50:19+00:00",
                "last_fetch_at": "2024-08-10T19:52:02+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/WBTC_BTC?ref=37754157",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "Coinbase Exchange",
                    "identifier": "gdax",
                    "has_trading_incentive": false
                },
                "last": 61049.19,
                "volume": 4534.26796205,
                "converted_last": {
                    "btc": 0.99972429,
                    "eth": 23.441385,
                    "usd": 61049
                },
                "converted_volume": {
                    "btc": 4533,
                    "eth": 106290,
                    "usd": 276813386
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinbase.com/advanced-trade/spot/BTC-USD",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Gate.io",
                    "identifier": "gate",
                    "has_trading_incentive": false
                },
                "last": 61024.9,
                "volume": 1375.0700208437,
                "converted_last": {
                    "btc": 0.9995923,
                    "eth": 23.440334,
                    "usd": 61020
                },
                "converted_volume": {
                    "btc": 1366,
                    "eth": 32035,
                    "usd": 83393155
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:36+00:00",
                "last_traded_at": "2024-08-10T19:52:36+00:00",
                "last_fetch_at": "2024-08-10T19:52:36+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.gate.io/trade/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "MEXC",
                    "identifier": "mxc",
                    "has_trading_incentive": false
                },
                "last": 61032.96,
                "volume": 9486.15747,
                "converted_last": {
                    "btc": 0.99972432,
                    "eth": 23.441386,
                    "usd": 61049
                },
                "converted_volume": {
                    "btc": 9484,
                    "eth": 222369,
                    "usd": 579122248
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:25+00:00",
                "last_traded_at": "2024-08-10T19:52:25+00:00",
                "last_fetch_at": "2024-08-10T19:52:25+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.mexc.com/exchange/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Pionex",
                    "identifier": "pionex",
                    "has_trading_incentive": false
                },
                "last": 61023.28,
                "volume": 9243.390048,
                "converted_last": {
                    "btc": 0.99950648,
                    "eth": 23.436278,
                    "usd": 61036
                },
                "converted_volume": {
                    "btc": 9186,
                    "eth": 215390,
                    "usd": 560947063
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:08+00:00",
                "last_traded_at": "2024-08-10T19:52:08+00:00",
                "last_fetch_at": "2024-08-10T19:52:08+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.pionex.com/en/trade/BTC_USDT/Bot",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "OKX",
                    "identifier": "okex",
                    "has_trading_incentive": false
                },
                "last": 61018,
                "volume": 4443.43717718,
                "converted_last": {
                    "btc": 0.99947928,
                    "eth": 23.43564,
                    "usd": 61034
                },
                "converted_volume": {
                    "btc": 4417,
                    "eth": 103573,
                    "usd": 269738897
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:31+00:00",
                "last_traded_at": "2024-08-10T19:52:31+00:00",
                "last_fetch_at": "2024-08-10T19:52:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.okx.com/trade-spot/btc-usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Dcoin",
                    "identifier": "dcoin",
                    "has_trading_incentive": false
                },
                "last": 61029.74,
                "volume": 359,
                "converted_last": {
                    "btc": 0.99967158,
                    "eth": 23.442193,
                    "usd": 61025
                },
                "converted_volume": {
                    "btc": 358.882,
                    "eth": 8416,
                    "usd": 21907843
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011636,
                "timestamp": "2024-08-10T19:52:37+00:00",
                "last_traded_at": "2024-08-10T19:52:37+00:00",
                "last_fetch_at": "2024-08-10T19:52:37+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.dcoin.com/currencyTrading/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Slex",
                    "identifier": "slex",
                    "has_trading_incentive": false
                },
                "last": 61053,
                "volume": 111.5639,
                "converted_last": {
                    "btc": 0.99999327,
                    "eth": 23.447692,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 110.859,
                    "eth": 2599,
                    "usd": 6769748
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010819,
                "timestamp": "2024-08-10T19:52:13+00:00",
                "last_traded_at": "2024-08-10T19:52:13+00:00",
                "last_fetch_at": "2024-08-10T19:52:13+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://slex.io/trade/btcusdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Azbit",
                    "identifier": "azbit",
                    "has_trading_incentive": false
                },
                "last": 61071.99,
                "volume": 1191.09,
                "converted_last": {
                    "btc": 1.000076,
                    "eth": 23.443242,
                    "usd": 61076
                },
                "converted_volume": {
                    "btc": 1183,
                    "eth": 27742,
                    "usd": 72274782
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:08+00:00",
                "last_traded_at": "2024-08-10T19:49:08+00:00",
                "last_fetch_at": "2024-08-10T19:49:08+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://azbit.com/exchange/BTC_USDC?referralCode=OH5QDS1",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Bybit",
                    "identifier": "bybit_spot",
                    "has_trading_incentive": false
                },
                "last": 61018.23,
                "volume": 5761.274432,
                "converted_last": {
                    "btc": 0.99896695,
                    "eth": 23.423627,
                    "usd": 61003
                },
                "converted_volume": {
                    "btc": 5724,
                    "eth": 134211,
                    "usd": 349529230
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.012851,
                "timestamp": "2024-08-10T19:52:23+00:00",
                "last_traded_at": "2024-08-10T19:52:23+00:00",
                "last_fetch_at": "2024-08-10T19:52:23+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bybit.com/trade/spot/BTC/USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Bitfinex",
                    "identifier": "bitfinex",
                    "has_trading_incentive": false
                },
                "last": 61060,
                "volume": 71.26544384,
                "converted_last": {
                    "btc": 1.000167,
                    "eth": 23.451772,
                    "usd": 61076
                },
                "converted_volume": {
                    "btc": 71.277,
                    "eth": 1671,
                    "usd": 4352625
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.016375,
                "timestamp": "2024-08-10T19:51:31+00:00",
                "last_traded_at": "2024-08-10T19:51:31+00:00",
                "last_fetch_at": "2024-08-10T19:52:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://trading.bitfinex.com/t/BTC:UST?type=exchange",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "LBank",
                    "identifier": "lbank",
                    "has_trading_incentive": false
                },
                "last": 61040.4,
                "volume": 5903.165,
                "converted_last": {
                    "btc": 0.99981957,
                    "eth": 23.439374,
                    "usd": 61060
                },
                "converted_volume": {
                    "btc": 5902,
                    "eth": 138366,
                    "usd": 360444790
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:47+00:00",
                "last_traded_at": "2024-08-10T19:49:47+00:00",
                "last_fetch_at": "2024-08-10T19:49:47+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.lbank.com/trade/btc_usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "CoinW",
                    "identifier": "coinw",
                    "has_trading_incentive": false
                },
                "last": 61039.79,
                "volume": 5047.7523,
                "converted_last": {
                    "btc": 0.99980958,
                    "eth": 23.437006,
                    "usd": 61060
                },
                "converted_volume": {
                    "btc": 5047,
                    "eth": 118304,
                    "usd": 308216164
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010868,
                "timestamp": "2024-08-10T19:49:16+00:00",
                "last_traded_at": "2024-08-10T19:49:16+00:00",
                "last_fetch_at": "2024-08-10T19:49:16+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinw.com/front/market",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "AscendEX (BitMax)",
                    "identifier": "bitmax",
                    "has_trading_incentive": false
                },
                "last": 61034.06,
                "volume": 4515.22519,
                "converted_last": {
                    "btc": 0.99968305,
                    "eth": 23.438512,
                    "usd": 61050
                },
                "converted_volume": {
                    "btc": 4514,
                    "eth": 105830,
                    "usd": 275652460
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.026001,
                "timestamp": "2024-08-10T19:51:36+00:00",
                "last_traded_at": "2024-08-10T19:51:36+00:00",
                "last_fetch_at": "2024-08-10T19:51:36+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://ascendex.com/en/cashtrade-spottrading/usdt/btc",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 61044,
                "volume": 1357.54612,
                "converted_last": {
                    "btc": 0.99938885,
                    "eth": 23.43352,
                    "usd": 61029
                },
                "converted_volume": {
                    "btc": 1349,
                    "eth": 31623,
                    "usd": 82356619
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/BTC_USDC?ref=37754157",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Tapbit",
                    "identifier": "tapbit",
                    "has_trading_incentive": false
                },
                "last": 61024.01,
                "volume": 6169.6509,
                "converted_last": {
                    "btc": 0.99957772,
                    "eth": 23.437949,
                    "usd": 61040
                },
                "converted_volume": {
                    "btc": 6130,
                    "eth": 143744,
                    "usd": 374356279
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:27+00:00",
                "last_traded_at": "2024-08-10T19:52:27+00:00",
                "last_fetch_at": "2024-08-10T19:52:27+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.tapbit.com/spot/exchange/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "HashKey Exchange",
                    "identifier": "hashkey_exchange",
                    "has_trading_incentive": false
                },
                "last": 61044.22,
                "volume": 431.20751,
                "converted_last": {
                    "btc": 0.99954987,
                    "eth": 23.430918,
                    "usd": 61044
                },
                "converted_volume": {
                    "btc": 428.352,
                    "eth": 10041,
                    "usd": 26160219
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.hashkey.com/en-US/spot/BTC_USD",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "FameEX",
                    "identifier": "fameex",
                    "has_trading_incentive": false
                },
                "last": 61040.41,
                "volume": 4776.004643,
                "converted_last": {
                    "btc": 0.99981974,
                    "eth": 23.437244,
                    "usd": 61061
                },
                "converted_volume": {
                    "btc": 4746,
                    "eth": 111259,
                    "usd": 289861291
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010033,
                "timestamp": "2024-08-10T19:49:31+00:00",
                "last_traded_at": "2024-08-10T19:49:31+00:00",
                "last_fetch_at": "2024-08-10T19:49:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.fameex.com/en-US/trade/btc-usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 0.04269,
                "volume": 18085.2508,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.427672,
                    "usd": 61083
                },
                "converted_volume": {
                    "btc": 777.335,
                    "eth": 18211,
                    "usd": 47482149
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.02343,
                "timestamp": "2024-08-10T19:33:11+00:00",
                "last_traded_at": "2024-08-10T19:33:11+00:00",
                "last_fetch_at": "2024-08-10T19:33:11+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/ETH_BTC?ref=37754157",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "KuCoin",
                    "identifier": "kucoin",
                    "has_trading_incentive": false
                },
                "last": 61023.8,
                "volume": 1759.62423218,
                "converted_last": {
                    "btc": 0.999515,
                    "eth": 23.436478,
                    "usd": 61036
                },
                "converted_volume": {
                    "btc": 1759,
                    "eth": 41239,
                    "usd": 107401145
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:00+00:00",
                "last_traded_at": "2024-08-10T19:52:00+00:00",
                "last_fetch_at": "2024-08-10T19:52:00+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.kucoin.com/trade/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Kraken",
                    "identifier": "kraken",
                    "has_trading_incentive": false
                },
                "last": 61027,
                "volume": 113.51632617,
                "converted_last": {
                    "btc": 0.9996267,
                    "eth": 23.439097,
                    "usd": 61043
                },
                "converted_volume": {
                    "btc": 113.474,
                    "eth": 2661,
                    "usd": 6929403
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.kraken.com/app/trade/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Tapbit",
                    "identifier": "tapbit",
                    "has_trading_incentive": false
                },
                "last": 61054.56,
                "volume": 474.70988,
                "converted_last": {
                    "btc": 0.9999279,
                    "eth": 23.43978,
                    "usd": 61067
                },
                "converted_volume": {
                    "btc": 471.742,
                    "eth": 11058,
                    "usd": 28810066
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:35+00:00",
                "last_traded_at": "2024-08-10T19:49:35+00:00",
                "last_fetch_at": "2024-08-10T19:49:35+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.tapbit.com/spot/exchange/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "C-Patex",
                    "identifier": "c_patex",
                    "has_trading_incentive": false
                },
                "last": 60997.8996,
                "volume": 533.14012469,
                "converted_last": {
                    "btc": 0.99915003,
                    "eth": 23.429963,
                    "usd": 60993
                },
                "converted_volume": {
                    "btc": 532.687,
                    "eth": 12491,
                    "usd": 32517705
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019998,
                "timestamp": "2024-08-10T19:52:35+00:00",
                "last_traded_at": "2024-08-10T19:52:35+00:00",
                "last_fetch_at": "2024-08-10T19:52:35+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://c-patex.com/exchange/BTC/USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "HTX",
                    "identifier": "huobi",
                    "has_trading_incentive": false
                },
                "last": 61026.34,
                "volume": 2404.355397106504,
                "converted_last": {
                    "btc": 0.99961589,
                    "eth": 23.438844,
                    "usd": 61043
                },
                "converted_volume": {
                    "btc": 2389,
                    "eth": 56023,
                    "usd": 145902891
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:52:30+00:00",
                "last_traded_at": "2024-08-10T19:52:30+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.huobi.com/en-us/exchange/btc_usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "SOL",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.00253827,
                "volume": 36673.98,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 93.088,
                    "eth": 2182,
                    "usd": 5685072
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011183,
                "timestamp": "2024-08-10T19:49:06+00:00",
                "last_traded_at": "2024-08-10T19:49:06+00:00",
                "last_fetch_at": "2024-08-10T19:49:06+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/SOL_BTC",
                "token_info_url": null,
                "coin_id": "solana",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Fastex",
                    "identifier": "fastex",
                    "has_trading_incentive": false
                },
                "last": 61021.2,
                "volume": 1403.1775,
                "converted_last": {
                    "btc": 0.99947241,
                    "eth": 23.433573,
                    "usd": 61037
                },
                "converted_volume": {
                    "btc": 1402,
                    "eth": 32881,
                    "usd": 85645304
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:00+00:00",
                "last_traded_at": "2024-08-10T19:52:00+00:00",
                "last_fetch_at": "2024-08-10T19:52:00+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://exchange.fastex.com/btc-usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Azbit",
                    "identifier": "azbit",
                    "has_trading_incentive": false
                },
                "last": 0.04266,
                "volume": 3702.93,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 159.304,
                    "eth": 3734,
                    "usd": 9728943
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.014068,
                "timestamp": "2024-08-10T19:49:07+00:00",
                "last_traded_at": "2024-08-10T19:49:07+00:00",
                "last_fetch_at": "2024-08-10T19:49:07+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://azbit.com/exchange/ETH_BTC?referralCode=OH5QDS1",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Bitcointry",
                    "identifier": "bitcointry_exchange",
                    "has_trading_incentive": false
                },
                "last": 61050.005000000005,
                "volume": 18.4627,
                "converted_last": {
                    "btc": 0.99996512,
                    "eth": 23.445025,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 18.324732,
                    "eth": 429.639,
                    "usd": 1119064
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.012016,
                "timestamp": "2024-08-10T19:51:10+00:00",
                "last_traded_at": "2024-08-10T19:51:10+00:00",
                "last_fetch_at": "2024-08-10T19:51:10+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://bitcointry.com/en/exchange/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "LATOKEN",
                    "identifier": "latoken",
                    "has_trading_incentive": false
                },
                "last": 61040.41,
                "volume": 2476.7298497506767,
                "converted_last": {
                    "btc": 0.99980796,
                    "eth": 23.441542,
                    "usd": 61056
                },
                "converted_volume": {
                    "btc": 2476,
                    "eth": 58058,
                    "usd": 151219140
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011032,
                "timestamp": "2024-08-10T19:50:17+00:00",
                "last_traded_at": "2024-08-10T19:50:17+00:00",
                "last_fetch_at": "2024-08-10T19:50:17+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://latoken.com/exchange/USDT-BTC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "BingX",
                    "identifier": "bingx",
                    "has_trading_incentive": false
                },
                "last": 61026.1,
                "volume": 882.549816,
                "converted_last": {
                    "btc": 0.99961196,
                    "eth": 23.438751,
                    "usd": 61042
                },
                "converted_volume": {
                    "btc": 876.952,
                    "eth": 20563,
                    "usd": 53551969
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.01082,
                "timestamp": "2024-08-10T19:52:27+00:00",
                "last_traded_at": "2024-08-10T19:52:27+00:00",
                "last_fetch_at": "2024-08-10T19:52:27+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://bingx.com/en-us/spot/BTCUSDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "BigONE",
                    "identifier": "bigone",
                    "has_trading_incentive": false
                },
                "last": 61070.98,
                "volume": 1554.052982,
                "converted_last": {
                    "btc": 1.000309,
                    "eth": 23.453495,
                    "usd": 61087
                },
                "converted_volume": {
                    "btc": 1555,
                    "eth": 36448,
                    "usd": 94932992
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.018563,
                "timestamp": "2024-08-10T19:50:55+00:00",
                "last_traded_at": "2024-08-10T19:50:55+00:00",
                "last_fetch_at": "2024-08-10T19:50:55+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://big.one/trade/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "OrangeX",
                    "identifier": "orangex",
                    "has_trading_incentive": false
                },
                "last": 61021.469,
                "volume": 3910.04351,
                "converted_last": {
                    "btc": 0.99947682,
                    "eth": 23.435583,
                    "usd": 61034
                },
                "converted_volume": {
                    "btc": 3886,
                    "eth": 91117,
                    "usd": 237299047
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010287,
                "timestamp": "2024-08-10T19:52:11+00:00",
                "last_traded_at": "2024-08-10T19:52:11+00:00",
                "last_fetch_at": "2024-08-10T19:52:11+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.orangex.com/spot/BTC-USDT-SPOT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Bitget",
                    "identifier": "bitget",
                    "has_trading_incentive": false
                },
                "last": 0.042643,
                "volume": 257.2549,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 11.0615,
                    "eth": 259.368,
                    "usd": 675482
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023444,
                "timestamp": "2024-08-10T19:52:12+00:00",
                "last_traded_at": "2024-08-10T19:52:12+00:00",
                "last_fetch_at": "2024-08-10T19:52:12+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitget.com/spot/ETHBTC",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 61037.43,
                "volume": 10019.676241,
                "converted_last": {
                    "btc": 0.99967595,
                    "eth": 23.433874,
                    "usd": 61052
                },
                "converted_volume": {
                    "btc": 10016,
                    "eth": 234800,
                    "usd": 611720473
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:04+00:00",
                "last_traded_at": "2024-08-10T19:49:04+00:00",
                "last_fetch_at": "2024-08-10T19:49:04+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "P2B",
                    "identifier": "p2pb2b",
                    "has_trading_incentive": false
                },
                "last": 61040.42,
                "volume": 5078.831715,
                "converted_last": {
                    "btc": 0.9998199,
                    "eth": 23.439382,
                    "usd": 61060
                },
                "converted_volume": {
                    "btc": 5078,
                    "eth": 119045,
                    "usd": 310111445
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.01059,
                "timestamp": "2024-08-10T19:49:41+00:00",
                "last_traded_at": "2024-08-10T19:49:41+00:00",
                "last_fetch_at": "2024-08-10T19:49:41+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": null,
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "Bitstamp",
                    "identifier": "bitstamp",
                    "has_trading_incentive": false
                },
                "last": 61040,
                "volume": 1303.5340736,
                "converted_last": {
                    "btc": 0.9995738,
                    "eth": 23.437857,
                    "usd": 61040
                },
                "converted_volume": {
                    "btc": 1303,
                    "eth": 30552,
                    "usd": 79567720
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.050363,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitstamp.net/markets/btc/usd/",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "HashKey Global",
                    "identifier": "hashkey-global",
                    "has_trading_incentive": false
                },
                "last": 61029.08,
                "volume": 693.20166,
                "converted_last": {
                    "btc": 0.99960148,
                    "eth": 23.438506,
                    "usd": 61042
                },
                "converted_volume": {
                    "btc": 688.478,
                    "eth": 16143,
                    "usd": 42042604
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.014294,
                "timestamp": "2024-08-10T19:52:12+00:00",
                "last_traded_at": "2024-08-10T19:52:12+00:00",
                "last_fetch_at": "2024-08-10T19:52:12+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://global.hashkey.com/en-US/spot/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "XBT",
                "market": {
                    "name": "Kraken",
                    "identifier": "kraken",
                    "has_trading_incentive": false
                },
                "last": 0.04268,
                "volume": 352.39720454,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 15.040313,
                    "eth": 352.663,
                    "usd": 918452
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.02343,
                "timestamp": "2024-08-10T19:50:49+00:00",
                "last_traded_at": "2024-08-10T19:50:49+00:00",
                "last_fetch_at": "2024-08-10T19:52:08+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.kraken.com/app/trade/ETH-XBT",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "SOL",
                "target": "BTC",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 0.0025326,
                "volume": 213983.4,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 545.253,
                    "eth": 12785,
                    "usd": 33296421
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.013947,
                "timestamp": "2024-08-10T19:52:05+00:00",
                "last_traded_at": "2024-08-10T19:52:05+00:00",
                "last_fetch_at": "2024-08-10T19:52:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/SOL_BTC?ref=37754157",
                "token_info_url": null,
                "coin_id": "solana",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Biconomy",
                    "identifier": "biconomy",
                    "has_trading_incentive": false
                },
                "last": 61055.94,
                "volume": 4966.75396707,
                "converted_last": {
                    "btc": 1.000062,
                    "eth": 23.447304,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 4935,
                    "eth": 115705,
                    "usd": 301371344
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010033,
                "timestamp": "2024-08-10T19:51:01+00:00",
                "last_traded_at": "2024-08-10T19:51:01+00:00",
                "last_fetch_at": "2024-08-10T19:51:01+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.biconomy.com/exchange/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Kraken",
                    "identifier": "kraken",
                    "has_trading_incentive": false
                },
                "last": 61064.5,
                "volume": 47.87127677,
                "converted_last": {
                    "btc": 0.99972447,
                    "eth": 23.44139,
                    "usd": 61049
                },
                "converted_volume": {
                    "btc": 47.858087,
                    "eth": 1122,
                    "usd": 2922503
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.015014,
                "timestamp": "2024-08-10T19:45:01+00:00",
                "last_traded_at": "2024-08-10T19:45:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.kraken.com/app/trade/BTC-USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "OKX",
                    "identifier": "okex",
                    "has_trading_incentive": false
                },
                "last": 1,
                "volume": 5.6453,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 5.643232,
                    "eth": 132.311,
                    "usd": 344626
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.02,
                "timestamp": "2024-08-10T19:46:37+00:00",
                "last_traded_at": "2024-08-10T19:46:37+00:00",
                "last_fetch_at": "2024-08-10T19:51:35+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.okx.com/trade-spot/wbtc-btc",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "Gemini",
                    "identifier": "gemini",
                    "has_trading_incentive": false
                },
                "last": 61061.29,
                "volume": 219.390017,
                "converted_last": {
                    "btc": 0.99992244,
                    "eth": 23.446031,
                    "usd": 61061
                },
                "converted_volume": {
                    "btc": 219.373,
                    "eth": 5144,
                    "usd": 13396237
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019381,
                "timestamp": "2024-08-10T19:51:33+00:00",
                "last_traded_at": "2024-08-10T19:51:33+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://exchange.gemini.com/trade/BTCUSD",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Coinbase Exchange",
                    "identifier": "gdax",
                    "has_trading_incentive": false
                },
                "last": 61033.22,
                "volume": 266.92480763,
                "converted_last": {
                    "btc": 0.99972858,
                    "eth": 23.441486,
                    "usd": 61049
                },
                "converted_volume": {
                    "btc": 266.852,
                    "eth": 6257,
                    "usd": 16295613
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.016259,
                "timestamp": "2024-08-10T19:52:01+00:00",
                "last_traded_at": "2024-08-10T19:52:01+00:00",
                "last_fetch_at": "2024-08-10T19:52:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinbase.com/advanced-trade/spot/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Bitfinex",
                    "identifier": "bitfinex",
                    "has_trading_incentive": false
                },
                "last": 0.042651,
                "volume": 283.74004111,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 12.101796,
                    "eth": 283.761,
                    "usd": 739009
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023447,
                "timestamp": "2024-08-10T19:45:07+00:00",
                "last_traded_at": "2024-08-10T19:45:07+00:00",
                "last_fetch_at": "2024-08-10T19:52:06+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://trading.bitfinex.com/t/ETH:BTC?type=exchange",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Bitstamp",
                    "identifier": "bitstamp",
                    "has_trading_incentive": false
                },
                "last": 0.04265264,
                "volume": 79.04321876,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445843,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 3.371402,
                    "eth": 79.045,
                    "usd": 205886
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.040661,
                "timestamp": "2024-08-10T19:51:29+00:00",
                "last_traded_at": "2024-08-10T19:51:29+00:00",
                "last_fetch_at": "2024-08-10T19:51:29+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitstamp.net/markets/eth/btc/",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BNB",
                "target": "BTC",
                "market": {
                    "name": "Binance",
                    "identifier": "binance",
                    "has_trading_incentive": false
                },
                "last": 0.00857,
                "volume": 22049.039,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445843,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 186.304,
                    "eth": 4368,
                    "usd": 11377291
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011647,
                "timestamp": "2024-08-10T19:51:02+00:00",
                "last_traded_at": "2024-08-10T19:51:02+00:00",
                "last_fetch_at": "2024-08-10T19:51:02+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.binance.com/en/trade/BNB_BTC?ref=37754157",
                "token_info_url": null,
                "coin_id": "binancecoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "BVOX",
                    "identifier": "bitvenus_spot",
                    "has_trading_incentive": false
                },
                "last": 61040.41,
                "volume": 5426.57062,
                "converted_last": {
                    "btc": 0.99981974,
                    "eth": 23.437244,
                    "usd": 61061
                },
                "converted_volume": {
                    "btc": 5393,
                    "eth": 126416,
                    "usd": 329350931
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:15+00:00",
                "last_traded_at": "2024-08-10T19:49:15+00:00",
                "last_fetch_at": "2024-08-10T19:49:15+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitvenus.me/exchange/BTC/USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "JPY",
                "market": {
                    "name": "bitFlyer",
                    "identifier": "bitflyer",
                    "has_trading_incentive": false
                },
                "last": 8955607,
                "volume": 805.26667943,
                "converted_last": {
                    "btc": 0.99986699,
                    "eth": 23.444731,
                    "usd": 61058
                },
                "converted_volume": {
                    "btc": 805.16,
                    "eth": 18879,
                    "usd": 49167896
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.047245,
                "timestamp": "2024-08-10T19:51:28+00:00",
                "last_traded_at": "2024-08-10T19:51:28+00:00",
                "last_fetch_at": "2024-08-10T19:52:23+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://bitflyer.com/en-jp/ex/simpleex",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "HashKey Exchange",
                    "identifier": "hashkey_exchange",
                    "has_trading_incentive": false
                },
                "last": 61036.89,
                "volume": 3.04232,
                "converted_last": {
                    "btc": 0.99966711,
                    "eth": 23.433666,
                    "usd": 61051
                },
                "converted_volume": {
                    "btc": 3.025602,
                    "eth": 70.925,
                    "usd": 184779
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:06+00:00",
                "last_traded_at": "2024-08-10T19:49:06+00:00",
                "last_fetch_at": "2024-08-10T19:49:06+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.hashkey.com/en-US/spot/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "Azbit",
                    "identifier": "azbit",
                    "has_trading_incentive": false
                },
                "last": 0.9999,
                "volume": 3.44927,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 3.448085,
                    "eth": 80.828,
                    "usd": 210580
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.02,
                "timestamp": "2024-08-10T19:49:07+00:00",
                "last_traded_at": "2024-08-10T19:49:07+00:00",
                "last_fetch_at": "2024-08-10T19:49:07+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://azbit.com/exchange/WBTC_BTC?referralCode=OH5QDS1",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "Bitrue",
                    "identifier": "bitrue",
                    "has_trading_incentive": false
                },
                "last": 1.0002,
                "volume": 504.2772,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 504.378,
                    "eth": 11826,
                    "usd": 30801815
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.069958,
                "timestamp": "2024-08-10T19:51:51+00:00",
                "last_traded_at": "2024-08-10T19:51:51+00:00",
                "last_fetch_at": "2024-08-10T19:51:51+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitrue.com/trade/wbtc_btc",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "OKX",
                    "identifier": "okex",
                    "has_trading_incentive": false
                },
                "last": 0.04265,
                "volume": 2422.646322,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 104.07,
                    "eth": 2440,
                    "usd": 6355442
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023441,
                "timestamp": "2024-08-10T19:51:35+00:00",
                "last_traded_at": "2024-08-10T19:51:35+00:00",
                "last_fetch_at": "2024-08-10T19:51:35+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.okx.com/trade-spot/eth-btc",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USD",
                "market": {
                    "name": "itBit",
                    "identifier": "itbit",
                    "has_trading_incentive": false
                },
                "last": 61051.5,
                "volume": 87.99429663,
                "converted_last": {
                    "btc": 1.000112,
                    "eth": 23.452514,
                    "usd": 61052
                },
                "converted_volume": {
                    "btc": 88.004,
                    "eth": 2064,
                    "usd": 5372184
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.01041,
                "timestamp": "2024-08-10T19:52:33+00:00",
                "last_traded_at": "2024-08-10T19:52:33+00:00",
                "last_fetch_at": "2024-08-10T19:52:33+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": null,
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "CoinEx",
                    "identifier": "coinex",
                    "has_trading_incentive": false
                },
                "last": 61013.58,
                "volume": 413.97279049,
                "converted_last": {
                    "btc": 0.99934761,
                    "eth": 23.430647,
                    "usd": 61029
                },
                "converted_volume": {
                    "btc": 411.466,
                    "eth": 9647,
                    "usd": 25127779
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:51:40+00:00",
                "last_traded_at": "2024-08-10T19:51:40+00:00",
                "last_fetch_at": "2024-08-10T19:51:40+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinex.com/trading?currency=USDT&dest=BTC#limit",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "BitDelta",
                    "identifier": "bitdelta",
                    "has_trading_incentive": false
                },
                "last": 61029.09,
                "volume": 353.55870999999996,
                "converted_last": {
                    "btc": 0.99966093,
                    "eth": 23.4399,
                    "usd": 61045
                },
                "converted_volume": {
                    "btc": 351.199,
                    "eth": 8235,
                    "usd": 21446323
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.038222,
                "timestamp": "2024-08-10T19:52:18+00:00",
                "last_traded_at": "2024-08-10T19:52:18+00:00",
                "last_fetch_at": "2024-08-10T19:52:18+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://bitdelta.com/en/trade/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "LBank",
                    "identifier": "lbank",
                    "has_trading_incentive": false
                },
                "last": 61052.47,
                "volume": 266.484,
                "converted_last": {
                    "btc": 0.99989367,
                    "eth": 23.441111,
                    "usd": 61064
                },
                "converted_volume": {
                    "btc": 266.456,
                    "eth": 6247,
                    "usd": 16272608
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011163,
                "timestamp": "2024-08-10T19:49:48+00:00",
                "last_traded_at": "2024-08-10T19:49:48+00:00",
                "last_fetch_at": "2024-08-10T19:49:48+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.lbank.com/trade/btc_usdc",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Trubit",
                    "identifier": "trubit",
                    "has_trading_incentive": false
                },
                "last": 61062.67,
                "volume": 23.50947,
                "converted_last": {
                    "btc": 1.000184,
                    "eth": 23.450367,
                    "usd": 61079
                },
                "converted_volume": {
                    "btc": 23.368097,
                    "eth": 547.889,
                    "usd": 1427036
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010213,
                "timestamp": "2024-08-10T19:50:02+00:00",
                "last_traded_at": "2024-08-10T19:50:02+00:00",
                "last_fetch_at": "2024-08-10T19:50:02+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.trubit.com/pro/crypto-spot-trading/BTC/USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Slex",
                    "identifier": "slex",
                    "has_trading_incentive": false
                },
                "last": 61068.03,
                "volume": 95.1769,
                "converted_last": {
                    "btc": 0.99978226,
                    "eth": 23.442745,
                    "usd": 61053
                },
                "converted_volume": {
                    "btc": 94.536,
                    "eth": 2217,
                    "usd": 5772917
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011786,
                "timestamp": "2024-08-10T19:52:13+00:00",
                "last_traded_at": "2024-08-10T19:52:13+00:00",
                "last_fetch_at": "2024-08-10T19:52:13+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://slex.io/trade/btcusdc",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "EUR",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 55904.46,
                "volume": 125.714785,
                "converted_last": {
                    "btc": 0.99995133,
                    "eth": 23.440329,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 125.709,
                    "eth": 2947,
                    "usd": 7677243
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.043703,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/BTC_EUR",
                "token_info_url": null,
                "coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "KuCoin",
                    "identifier": "kucoin",
                    "has_trading_incentive": false
                },
                "last": 61077.1,
                "volume": 28.44131632,
                "converted_last": {
                    "btc": 0.99995292,
                    "eth": 23.446746,
                    "usd": 61063
                },
                "converted_volume": {
                    "btc": 28.439977,
                    "eth": 666.856,
                    "usd": 1736716
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:52:00+00:00",
                "last_traded_at": "2024-08-10T19:52:00+00:00",
                "last_fetch_at": "2024-08-10T19:52:00+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.kucoin.com/trade/BTC-USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Dex-Trade",
                    "identifier": "dextrade",
                    "has_trading_incentive": false
                },
                "last": 61054.45,
                "volume": 1022.0050956,
                "converted_last": {
                    "btc": 1.000038,
                    "eth": 23.447147,
                    "usd": 61071
                },
                "converted_volume": {
                    "btc": 1022,
                    "eth": 23963,
                    "usd": 62414693
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.062044,
                "timestamp": "2024-08-10T19:50:48+00:00",
                "last_traded_at": "2024-08-10T19:50:48+00:00",
                "last_fetch_at": "2024-08-10T19:50:48+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://dex-trade.com/spot/trading/BTCUSDT?interface=classic",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "PointPay",
                    "identifier": "pointpay",
                    "has_trading_incentive": false
                },
                "last": 61040.41,
                "volume": 214.35851203,
                "converted_last": {
                    "btc": 0.99981974,
                    "eth": 23.437244,
                    "usd": 61061
                },
                "converted_volume": {
                    "btc": 213.014,
                    "eth": 4993,
                    "usd": 13009147
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.039992,
                "timestamp": "2024-08-10T19:49:33+00:00",
                "last_traded_at": "2024-08-10T19:49:33+00:00",
                "last_fetch_at": "2024-08-10T19:49:33+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://exchange.pointpay.io/trade-classic/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "BitMart",
                    "identifier": "bitmart",
                    "has_trading_incentive": false
                },
                "last": 0.042655,
                "volume": 140.573,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.446045,
                    "usd": 61068
                },
                "converted_volume": {
                    "btc": 5.996141,
                    "eth": 140.586,
                    "usd": 366171
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.017033,
                "timestamp": "2024-08-10T19:50:20+00:00",
                "last_traded_at": "2024-08-10T19:50:20+00:00",
                "last_fetch_at": "2024-08-10T19:50:20+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitmart.com/trade/en?symbol=ETH_BTC",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Bitunix",
                    "identifier": "bitunix",
                    "has_trading_incentive": false
                },
                "last": 61040.41,
                "volume": 1751.59392,
                "converted_last": {
                    "btc": 0.99981974,
                    "eth": 23.437244,
                    "usd": 61061
                },
                "converted_volume": {
                    "btc": 1751,
                    "eth": 41053,
                    "usd": 106953570
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:49:31+00:00",
                "last_traded_at": "2024-08-10T19:49:31+00:00",
                "last_fetch_at": "2024-08-10T19:49:31+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitunix.com/spot-trade/BTCUSDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "XT.COM",
                    "identifier": "xt",
                    "has_trading_incentive": false
                },
                "last": 61026.41,
                "volume": 2505.22004,
                "converted_last": {
                    "btc": 0.99961703,
                    "eth": 23.43887,
                    "usd": 61043
                },
                "converted_volume": {
                    "btc": 2490,
                    "eth": 58376,
                    "usd": 152030291
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.011017,
                "timestamp": "2024-08-10T19:52:30+00:00",
                "last_traded_at": "2024-08-10T19:52:30+00:00",
                "last_fetch_at": "2024-08-10T19:52:30+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.xt.com/en/trade/btc_usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Bittime",
                    "identifier": "bittime",
                    "has_trading_incentive": false
                },
                "last": 61047.98,
                "volume": 7.46083,
                "converted_last": {
                    "btc": 0.99994373,
                    "eth": 23.440151,
                    "usd": 61068
                },
                "converted_volume": {
                    "btc": 7.37279,
                    "eth": 172.829,
                    "usd": 450269
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010065,
                "timestamp": "2024-08-10T19:49:25+00:00",
                "last_traded_at": "2024-08-10T19:49:25+00:00",
                "last_fetch_at": "2024-08-10T19:49:25+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bittime.com/en/trade/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Phemex",
                    "identifier": "phemex",
                    "has_trading_incentive": false
                },
                "last": 61018.61,
                "volume": 120.995819,
                "converted_last": {
                    "btc": 0.99942999,
                    "eth": 23.432579,
                    "usd": 61034
                },
                "converted_volume": {
                    "btc": 120.927,
                    "eth": 2835,
                    "usd": 7384870
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.0197,
                "timestamp": "2024-08-10T19:51:58+00:00",
                "last_traded_at": "2024-08-10T19:51:58+00:00",
                "last_fetch_at": "2024-08-10T19:51:58+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://phemex.com/spot/trade/BTCUSDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "BTSE",
                    "identifier": "btse",
                    "has_trading_incentive": false
                },
                "last": 61026.3359141096,
                "volume": 559.7791817699551,
                "converted_last": {
                    "btc": 0.99957743,
                    "eth": 23.435935,
                    "usd": 61043
                },
                "converted_volume": {
                    "btc": 559.543,
                    "eth": 13119,
                    "usd": 34170434
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.012524,
                "timestamp": "2024-08-10T19:51:02+00:00",
                "last_traded_at": "2024-08-10T19:51:02+00:00",
                "last_fetch_at": "2024-08-10T19:51:02+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.btse.com/en/trading/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Biconomy",
                    "identifier": "biconomy",
                    "has_trading_incentive": false
                },
                "last": 61068,
                "volume": 673.1938,
                "converted_last": {
                    "btc": 0.99996576,
                    "eth": 23.44504,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 668.777,
                    "eth": 15680,
                    "usd": 40841206
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:51:01+00:00",
                "last_traded_at": "2024-08-10T19:51:01+00:00",
                "last_fetch_at": "2024-08-10T19:51:01+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.biconomy.com/exchange/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "Bybit",
                    "identifier": "bybit_spot",
                    "has_trading_incentive": false
                },
                "last": 1,
                "volume": 21.3816,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 21.37426,
                    "eth": 501.18,
                    "usd": 1305241
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019998,
                "timestamp": "2024-08-10T19:52:24+00:00",
                "last_traded_at": "2024-08-10T19:52:24+00:00",
                "last_fetch_at": "2024-08-10T19:52:24+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bybit.com/trade/spot/WBTC/BTC",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "PointPay",
                    "identifier": "pointpay",
                    "has_trading_incentive": false
                },
                "last": 61055.18,
                "volume": 139.51099308,
                "converted_last": {
                    "btc": 0.99993805,
                    "eth": 23.440018,
                    "usd": 61068
                },
                "converted_volume": {
                    "btc": 138.64,
                    "eth": 3250,
                    "usd": 8466986
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.039992,
                "timestamp": "2024-08-10T19:49:33+00:00",
                "last_traded_at": "2024-08-10T19:49:33+00:00",
                "last_fetch_at": "2024-08-10T19:49:33+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://exchange.pointpay.io/trade-classic/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Bitrue",
                    "identifier": "bitrue",
                    "has_trading_incentive": false
                },
                "last": 61041.67,
                "volume": 650.012,
                "converted_last": {
                    "btc": 0.99937287,
                    "eth": 23.431239,
                    "usd": 61031
                },
                "converted_volume": {
                    "btc": 649.604,
                    "eth": 15231,
                    "usd": 39670626
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.044582,
                "timestamp": "2024-08-10T19:51:52+00:00",
                "last_traded_at": "2024-08-10T19:51:52+00:00",
                "last_fetch_at": "2024-08-10T19:51:52+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitrue.com/trade/btc_usdc",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Coinbase Exchange",
                    "identifier": "gdax",
                    "has_trading_incentive": false
                },
                "last": 0.04264,
                "volume": 2517.04092772,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 107.327,
                    "eth": 2516,
                    "usd": 6554319
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.046882,
                "timestamp": "2024-08-10T19:49:48+00:00",
                "last_traded_at": "2024-08-10T19:49:48+00:00",
                "last_fetch_at": "2024-08-10T19:51:39+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinbase.com/advanced-trade/spot/ETH-BTC",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "ProBit Global",
                    "identifier": "probit",
                    "has_trading_incentive": false
                },
                "last": 61029.1,
                "volume": 1824.0128091,
                "converted_last": {
                    "btc": 0.9996611,
                    "eth": 23.439904,
                    "usd": 61045
                },
                "converted_volume": {
                    "btc": 1823,
                    "eth": 42755,
                    "usd": 111347466
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023598,
                "timestamp": "2024-08-10T19:52:20+00:00",
                "last_traded_at": "2024-08-10T19:52:20+00:00",
                "last_fetch_at": "2024-08-10T19:52:20+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.probit.com/app/exchange/BTC-USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Bitrue",
                    "identifier": "bitrue",
                    "has_trading_incentive": false
                },
                "last": 61026.41,
                "volume": 5374.47,
                "converted_last": {
                    "btc": 0.99955775,
                    "eth": 23.435574,
                    "usd": 61042
                },
                "converted_volume": {
                    "btc": 5372,
                    "eth": 125954,
                    "usd": 328067843
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:51:51+00:00",
                "last_traded_at": "2024-08-10T19:51:51+00:00",
                "last_fetch_at": "2024-08-10T19:51:51+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitrue.com/trade/btc_usdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "TRX",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.0000021201,
                "volume": 3337935,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 7.076756,
                    "eth": 165.89,
                    "usd": 432190
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.014715,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/TRX_BTC",
                "token_info_url": null,
                "coin_id": "tron",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Bybit",
                    "identifier": "bybit_spot",
                    "has_trading_incentive": false
                },
                "last": 0.042655,
                "volume": 3132.76668,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 134.53,
                    "eth": 3154,
                    "usd": 8215195
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019378,
                "timestamp": "2024-08-10T19:52:23+00:00",
                "last_traded_at": "2024-08-10T19:52:23+00:00",
                "last_fetch_at": "2024-08-10T19:52:23+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bybit.com/trade/spot/ETH/BTC",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "WBTC",
                "target": "BTC",
                "market": {
                    "name": "Coinbase Exchange",
                    "identifier": "gdax",
                    "has_trading_incentive": false
                },
                "last": 1.0003,
                "volume": 18.47363393,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 18.479176,
                    "eth": 433.297,
                    "usd": 1128450
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.059952,
                "timestamp": "2024-08-10T19:48:29+00:00",
                "last_traded_at": "2024-08-10T19:48:29+00:00",
                "last_fetch_at": "2024-08-10T19:52:23+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.coinbase.com/advanced-trade/spot/WBTC-BTC",
                "token_info_url": null,
                "coin_id": "wrapped-bitcoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "SOL",
                "target": "XBT",
                "market": {
                    "name": "Kraken",
                    "identifier": "kraken",
                    "has_trading_incentive": false
                },
                "last": 0.0025388,
                "volume": 4889.39775674,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 12.413203,
                    "eth": 291.063,
                    "usd": 758025
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019734,
                "timestamp": "2024-08-10T19:50:52+00:00",
                "last_traded_at": "2024-08-10T19:50:52+00:00",
                "last_fetch_at": "2024-08-10T19:52:09+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.kraken.com/app/trade/SOL-XBT",
                "token_info_url": null,
                "coin_id": "solana",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "SOL",
                "target": "BTC",
                "market": {
                    "name": "Azbit",
                    "identifier": "azbit",
                    "has_trading_incentive": false
                },
                "last": 0.0025376,
                "volume": 2558.32,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 6.50734,
                    "eth": 152.542,
                    "usd": 397414
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.013942,
                "timestamp": "2024-08-10T19:49:08+00:00",
                "last_traded_at": "2024-08-10T19:49:08+00:00",
                "last_fetch_at": "2024-08-10T19:49:08+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://azbit.com/exchange/SOL_BTC?referralCode=OH5QDS1",
                "token_info_url": null,
                "coin_id": "solana",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ADA",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.000005701,
                "volume": 549452,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 3.132426,
                    "eth": 73.429,
                    "usd": 191303
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.017532,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/ADA_BTC",
                "token_info_url": null,
                "coin_id": "cardano",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "NEAR",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.00006853,
                "volume": 36805.96,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 2.522312,
                    "eth": 59.127,
                    "usd": 154042
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.014575,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/NEAR_BTC",
                "token_info_url": null,
                "coin_id": "near",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 61045.3,
                "volume": 204.965599,
                "converted_last": {
                    "btc": 0.99963856,
                    "eth": 23.432997,
                    "usd": 61050
                },
                "converted_volume": {
                    "btc": 204.892,
                    "eth": 4803,
                    "usd": 12513075
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.020014,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "SOL",
                "target": "BTC",
                "market": {
                    "name": "OKX",
                    "identifier": "okex",
                    "has_trading_incentive": false
                },
                "last": 0.002533,
                "volume": 13271.3584,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 33.78728,
                    "eth": 792.175,
                    "usd": 2063352
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023654,
                "timestamp": "2024-08-10T19:51:35+00:00",
                "last_traded_at": "2024-08-10T19:51:35+00:00",
                "last_fetch_at": "2024-08-10T19:51:35+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.okx.com/trade-spot/sol-btc",
                "token_info_url": null,
                "coin_id": "solana",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BCH",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.005773,
                "volume": 779.947,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 4.502634,
                    "eth": 105.548,
                    "usd": 274984
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.017322,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/BCH_BTC",
                "token_info_url": null,
                "coin_id": "bitcoin-cash",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Slex",
                    "identifier": "slex",
                    "has_trading_incentive": false
                },
                "last": 0.04266,
                "volume": 506.731,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 21.78256,
                    "eth": 510.754,
                    "usd": 1330174
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.093743,
                "timestamp": "2024-08-10T19:52:13+00:00",
                "last_traded_at": "2024-08-10T19:52:13+00:00",
                "last_fetch_at": "2024-08-10T19:52:13+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://slex.io/trade/ethbtc",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "Bitrue",
                    "identifier": "bitrue",
                    "has_trading_incentive": false
                },
                "last": 0.042654,
                "volume": 18452.099,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.445943,
                    "usd": 61069
                },
                "converted_volume": {
                    "btc": 787.056,
                    "eth": 18453,
                    "usd": 48064637
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.051573,
                "timestamp": "2024-08-10T19:51:51+00:00",
                "last_traded_at": "2024-08-10T19:51:51+00:00",
                "last_fetch_at": "2024-08-10T19:51:51+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.bitrue.com/trade/eth_btc",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "AVAX",
                "target": "BTC",
                "market": {
                    "name": "WhiteBIT",
                    "identifier": "whitebit",
                    "has_trading_incentive": false
                },
                "last": 0.00035475,
                "volume": 12621.65,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 4.47753,
                    "eth": 104.96,
                    "usd": 273450
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.012819,
                "timestamp": "2024-08-10T19:49:05+00:00",
                "last_traded_at": "2024-08-10T19:49:05+00:00",
                "last_fetch_at": "2024-08-10T19:49:05+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://whitebit.com/trade/AVAX_BTC",
                "token_info_url": null,
                "coin_id": "avalanche-2",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "MEXC",
                    "identifier": "mxc",
                    "has_trading_incentive": false
                },
                "last": 61036.99,
                "volume": 31.99616,
                "converted_last": {
                    "btc": 0.99964015,
                    "eth": 23.433034,
                    "usd": 61050
                },
                "converted_volume": {
                    "btc": 31.984646,
                    "eth": 749.767,
                    "usd": 1953357
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.046077,
                "timestamp": "2024-08-10T19:49:26+00:00",
                "last_traded_at": "2024-08-10T19:49:26+00:00",
                "last_fetch_at": "2024-08-10T19:49:26+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.mexc.com/exchange/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Fairdesk",
                    "identifier": "fairdesk",
                    "has_trading_incentive": false
                },
                "last": 61026.5,
                "volume": 132.77716,
                "converted_last": {
                    "btc": 0.99955922,
                    "eth": 23.435609,
                    "usd": 61042
                },
                "converted_volume": {
                    "btc": 132.719,
                    "eth": 3112,
                    "usd": 8104982
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.01721,
                "timestamp": "2024-08-10T19:51:59+00:00",
                "last_traded_at": "2024-08-10T19:51:59+00:00",
                "last_fetch_at": "2024-08-10T19:51:59+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.fairdesk.com/spot/btcusdt",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "BingX",
                    "identifier": "bingx",
                    "has_trading_incentive": false
                },
                "last": 61049.79,
                "volume": 99.836516,
                "converted_last": {
                    "btc": 0.99948364,
                    "eth": 23.435743,
                    "usd": 61034
                },
                "converted_volume": {
                    "btc": 99.192,
                    "eth": 2326,
                    "usd": 6057249
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.020017,
                "timestamp": "2024-08-10T19:52:29+00:00",
                "last_traded_at": "2024-08-10T19:52:29+00:00",
                "last_fetch_at": "2024-08-10T19:52:29+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://bingx.com/en-us/spot/BTCUSDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "Bitvavo",
                    "identifier": "bitvavo",
                    "has_trading_incentive": false
                },
                "last": 61051,
                "volume": 2.64057265,
                "converted_last": {
                    "btc": 0.9998696,
                    "eth": 23.438413,
                    "usd": 61064
                },
                "converted_volume": {
                    "btc": 2.640228,
                    "eth": 61.891,
                    "usd": 161243
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.021288,
                "timestamp": "2024-08-10T19:45:58+00:00",
                "last_traded_at": "2024-08-10T19:45:58+00:00",
                "last_fetch_at": "2024-08-10T19:49:11+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://account.bitvavo.com/markets/BTC-USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "EXMO",
                    "identifier": "exmo",
                    "has_trading_incentive": false
                },
                "last": 61054.5,
                "volume": 27.09718456,
                "converted_last": {
                    "btc": 1.000018,
                    "eth": 23.446261,
                    "usd": 61070
                },
                "converted_volume": {
                    "btc": 27.097668,
                    "eth": 635.328,
                    "usd": 1654814
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010016,
                "timestamp": "2024-08-10T19:51:14+00:00",
                "last_traded_at": "2024-08-10T19:51:14+00:00",
                "last_fetch_at": "2024-08-10T19:51:14+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://exmo.com/en/trade/BTC_USDT",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            },
            {
                "base": "BTC",
                "target": "USDC",
                "market": {
                    "name": "HashKey Exchange",
                    "identifier": "hashkey_exchange",
                    "has_trading_incentive": false
                },
                "last": 61053.99,
                "volume": 0.49035,
                "converted_last": {
                    "btc": 0.99978086,
                    "eth": 23.436333,
                    "usd": 61058
                },
                "converted_volume": {
                    "btc": 0.48557252,
                    "eth": 11.382533,
                    "usd": 29655
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.019973,
                "timestamp": "2024-08-10T19:49:06+00:00",
                "last_traded_at": "2024-08-10T19:49:06+00:00",
                "last_fetch_at": "2024-08-10T19:49:06+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://pro.hashkey.com/en-US/spot/BTC_USDC",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "usd-coin"
            },
            {
                "base": "ETH",
                "target": "BTC",
                "market": {
                    "name": "KuCoin",
                    "identifier": "kucoin",
                    "has_trading_incentive": false
                },
                "last": 0.04264,
                "volume": 609.351599,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44785,
                    "usd": 61066
                },
                "converted_volume": {
                    "btc": 25.982752,
                    "eth": 609.24,
                    "usd": 1586663
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.023441,
                "timestamp": "2024-08-10T19:52:00+00:00",
                "last_traded_at": "2024-08-10T19:52:00+00:00",
                "last_fetch_at": "2024-08-10T19:52:00+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://www.kucoin.com/trade/ETH-BTC",
                "token_info_url": null,
                "coin_id": "ethereum",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BNB",
                "target": "BTC",
                "market": {
                    "name": "Slex",
                    "identifier": "slex",
                    "has_trading_incentive": false
                },
                "last": 0.008576,
                "volume": 3336.79,
                "converted_last": {
                    "btc": 1,
                    "eth": 23.44147,
                    "usd": 61072
                },
                "converted_volume": {
                    "btc": 28.19043,
                    "eth": 660.825,
                    "usd": 1721638
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.058309,
                "timestamp": "2024-08-10T19:49:22+00:00",
                "last_traded_at": "2024-08-10T19:49:22+00:00",
                "last_fetch_at": "2024-08-10T19:49:22+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://slex.io/trade/bnbbtc",
                "token_info_url": null,
                "coin_id": "binancecoin",
                "target_coin_id": "bitcoin"
            },
            {
                "base": "BTC",
                "target": "USDT",
                "market": {
                    "name": "Azbit",
                    "identifier": "azbit",
                    "has_trading_incentive": false
                },
                "last": 61061,
                "volume": 271.619287,
                "converted_last": {
                    "btc": 1.000062,
                    "eth": 23.442923,
                    "usd": 61075
                },
                "converted_volume": {
                    "btc": 269.825,
                    "eth": 6325,
                    "usd": 16478681
                },
                "trust_score": "green",
                "bid_ask_spread_percentage": 0.010164,
                "timestamp": "2024-08-10T19:49:07+00:00",
                "last_traded_at": "2024-08-10T19:49:07+00:00",
                "last_fetch_at": "2024-08-10T19:49:07+00:00",
                "is_anomaly": false,
                "is_stale": false,
                "trade_url": "https://azbit.com/exchange/BTC_USDT?referralCode=OH5QDS1",
                "token_info_url": null,
                "coin_id": "bitcoin",
                "target_coin_id": "tether"
            }
        ]
  }   

  
    const { id } = useParams();  // Get the coin ID from the URL
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                // Fetch coin data (you already have this part)
                const coinResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                const coinInfo = await coinResponse.json();
                setCoinData(coinInfo);

                // Fetch historical data for the chart
                const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
                const chartInfo = await chartResponse.json();

                const timestamps = chartInfo.prices.map(price => new Date(price[0]).toLocaleDateString());
                const prices = chartInfo.prices.map(price => price[1]);

                setChartData({
                    labels: timestamps,
                    datasets: [{
                        label: `${id.toUpperCase()} Price (USD)`,
                        data: prices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                    }]
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching coin data:', error);
                setLoading(false);
            }
        };

        fetchCoinData();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    

return (
<div className='w-full grid grid-cols-3 divide-x-2 items-center mt-4 px-10'>
    
    <div className=' w-3/4 pl-4'>
       
        <div className='flex items-center gap-2 pt-4  ' >
            <img className='w-7' src={data.image.small} />
            <h2 className='text-[22px] font-semibold'>{data.name}</h2> <sup className='text-[15px] text-transform: uppercase'>{data.symbol}</sup> 
            <div className='bg-slate-200 py-1 px-1.5 rounded-xl'  >
                #{data.market_cap_rank}
            </div>
        </div> 
       
       <div className='flex items-center gap-4'>
            <div className='text-[40px] font-bold  '>
             ${(data.market_data.current_price.usd).toLocaleString()}   
            </div>
            <div className='flex gap-2'>
            {(data.market_data.price_change_percentage_24h > 0 ? (
             <FaArrowTrendUp className='text-white text-[22px] bg-green-600 rounded-full px-1 '/>
             ) : (
              <FaArrowTrendDown />
             ))}
               <div className=''>{Math.round(data.market_data.price_change_percentage_24h * 100)/100}%</div> 
            </div>  
       </div>
       
       <div className=''>
             <div className='border rounded-md text-center shadow-lg ' >Add To Watchlist</div>
       </div>
       <div className=' '>
            <div className='flex shadow-sm items-center justify-between py-2'> 
                <div className='pt-4'>Market Cap</div>
                <div className='pt-4'>${(data.market_data.market_cap.usd).toLocaleString()}</div>  
            </div>
            <div className='flex shadow-sm items-center justify-between py-2'> 
                <div>24 Hour Trading Vol</div>
                <div>${(data.market_data.total_volume.usd).toLocaleString()}</div>  
            </div>
            <div className='flex shadow-sm items-center justify-between py-2'> 
                <div>Circulating Supply</div>
                <div>{(data.market_data.circulating_supply).toLocaleString()}</div>  
            </div>
            <div className='flex shadow-sm items-center justify-between py-2'> 
                <div>Total Supply</div>
                <div>{(data.market_data.total_supply).toLocaleString()}</div>  
            </div>
       </div>
       <div className='text-[22px] py-4 font-semibold'>Info</div>      
       <div>
            <div className='shadow-sm flex items-center justify-between  py-2'> 
                <div>Website</div>
                <div><Link className='bg-slate-200 py-1 px-1.5 rounded-md' to={data.links.homepage[0]}>Website</Link> <Link className='bg-slate-200 py-1 px-1.5 rounded-md' to={data.links.whitepaper}>whitepaper</Link></div>  
            </div>
            <div className='shadow-sm flex items-center justify-between py-2'> 
                <div>Community</div>
                <div></div>  
            </div>
            <div className='shadow-sm flex items-center justify-between py-2'> 
                <div>Source Code</div>
                <div></div>  
            </div>
        </div>      

    </div>   

    <div className="w-4/5 col-span-2 pl-14 ">
        <div className=" p-4 bg-white ">
            <h2 className="text-2xl  font-extrabold text-center text-gray-800 mb-6">{id.toUpperCase()} Price Chart</h2>
            <div className="h-96 overflow-hidden">
                <Line
                    data={{
                        labels: chartData.labels,
                        datasets: [{
                            label: `${id.toUpperCase()} Price (USD)`,
                            data: chartData.datasets[0].data,
                            borderColor: 'rgba(54, 162, 235, 1)', // Blue color for the line
                            backgroundColor: 'rgba(54, 162, 235, 0.1)', // Light blue for the glow effect
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4, // Smooths the line
                            pointRadius: 0, // Removes the dots on the line
                            pointHoverRadius: 0, // Ensures no dots appear on hover
                        }]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                grid: {
                                    color: 'rgba(0, 0, 0, 0.1)', // Light grid lines for the x-axis
                                    borderColor: 'rgba(0, 0, 0, 0.1)', // Border color for the x-axis grid
                                    borderDash: [5, 5], // Dotted lines
                                    drawOnChartArea: true,
                                },
                                ticks: {
                                    color: 'rgba(0, 0, 0, 0.6)', // Color of the x-axis labels
                                },
                            },
                            y: {
                                grid: {
                                    color: 'rgba(0, 0, 0, 0.1)', // Light grid lines for the y-axis
                                    borderColor: 'rgba(0, 0, 0, 0.1)', // Border color for the y-axis grid
                                    borderDash: [5, 5], // Dotted lines
                                    drawOnChartArea: true,
                                },
                                ticks: {
                                    color: 'rgba(0, 0, 0, 0.6)', // Color of the y-axis labels
                                },
                            }
                        },
                        plugins: {
                            legend: {
                                display: false, // Hide the legend to keep the focus on the chart
                            },
                            tooltip: {
                                enabled: true, // Show tooltips
                                mode: 'index', // Show tooltip for all points at the hovered index
                                intersect: false, // Tooltip follows the index of the cursor
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background for the tooltip
                                titleColor: '#fff', // White color for the tooltip title
                                bodyColor: '#fff', // White color for the tooltip body
                                borderColor: 'rgba(54, 162, 235, 1)', // Border color of the tooltip
                                borderWidth: 1,
                                padding: 10,
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toFixed(2)}`;
                                    }
                                }
                            },
                            annotation: {
                                annotations: {
                                    line1: {
                                        type: 'line',
                                        borderColor: 'rgba(54, 162, 235, 0.5)', // Color for the vertical line
                                        borderWidth: 1,
                                        borderDash: [5, 5], // Dotted vertical line
                                        scaleID: 'x',
                                        value: 0, // You can dynamically set this value if needed
                                        borderDashOffset: 0,
                                        label: {
                                            enabled: false,
                                        },
                                    },
                                    line2: {
                                        type: 'line',
                                        borderColor: 'rgba(54, 162, 235, 0.5)', // Color for the horizontal line
                                        borderWidth: 1,
                                        borderDash: [5, 5], // Dotted horizontal line
                                        scaleID: 'y',
                                        value: 0, // You can dynamically set this value if needed
                                        borderDashOffset: 0,
                                        label: {
                                            enabled: false,
                                        },
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    </div>
             
</div>   


  )
}

export default CoinsData;