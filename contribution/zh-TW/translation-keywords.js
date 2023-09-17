/**
 * An array of objects containing English and Chinese translations for various terms and phrases.
 * @typedef {Object} Example
 * @property {string} eng - The English term or phrase.
 * @property {string} trans - The Chinese translation of the term or phrase.
 * @property {string[]} match - An array of strings that can be used to match the term or phrase.
 */
/**
 * An array of objects containing English and Chinese translations for various terms and phrases.
 * @type {Example[]}
 */
const EXAMPLE = [
  {
    eng: "Player ${0} is ${1} has been killed during PVP",
    trans: "玩家${0}在PVP戰鬥中被${1}擊敗",
    match: [
      ""
    ],
    desc: "Example of how to translate a sentence with variables",
  },
  {
    eng: "Inventory",
    trans: "物品欄",
    match: [],
    desc: "Shown in inventory page",
  },
  {
    eng: "Backpack",
    trans: "背包",
    match: [],
    desc: "A separate inventory that player brings to adventure",
  },
  {
    eng: "Vault",
    trans: "倉庫",
    match: [],
    desc: "A separate inventory that player stores in their apartment, can only be accessed in apartment",
  },
  {
    eng: "AFK Tasks",
    trans: "掛機任務",
    match: [
      "afk"
    ],
    desc: "AFK = away from keyboard, tasks player can perform while they are not actively playing",
  },
  {
    eng: "AFK", trans: "掛機", match: [], desc: ""
  },
  {
    eng: "Red Bar",
    trans: "霓虹酒吧",
    match: [],
    desc: "A cool name of a bar player can visit",
  },
  {
    eng: "Deliveries",
    trans: "包裹",
    match: [],
    desc: "Like an item inbox, player can receive items from other players through the market",
  },
  {
    eng: "Upper Armour",
    trans: "上半身護甲",
    match: [],
    desc: "A type of armor player can equip on their upper body",
  },
  {
    eng: "Lower Armour",
    trans: "下半身護甲",
    match: [],
    desc: "A type of armor player can equip on their lower body",
  },
  {
    eng: "Place Hit",
    trans: "下達擊殺令",
    match: [],
    desc: 'Placing a bounty on another player for a hitman, synonym of "place bounty"',
  },
  {
    eng: "Dismantle",
    trans: "拆解",
    match: [],
    desc: "Dismantle an item to get components",
  },
  {
    eng: "Stronghold",
    trans: "地城",
    match: [],
    desc: "Like a dungeon but with a sci-fi name",
  },
  {
    eng: "Health",
    trans: "生命",
    match: [],
    desc: "Player's Health, also known as HP",
  },
  {
    eng: "Vitality", trans: "活力", match: [], desc: "An attribute name"
  },
  {
    eng: "Strength", trans: "力量", match: [], desc: "An attribute name"
  },
  {
    eng: "Intelligence",
    trans: "智力",
    match: [],
    desc: "An attribute name",
  },
  {
    eng: "Dexterity", trans: "敏捷", match: [], desc: "An attribute name"
  },
  {
    eng: "Vitality Attribute",
    trans: "活力屬性",
    match: [],
    desc: "An attribute name added a repeat for AI to easier to understand",
  },
  {
    eng: "Strength Attribute",
    trans: "力量屬性",
    match: [],
    desc: "An attribute name added a repeat for AI to easier to understand",
  },
  {
    eng: "Intelligence Attribute",
    trans: "智力屬性",
    match: [],
    desc: "An attribute name added a repeat for AI to easier to understand",
  },
  {
    eng: "Dexterity Attribute",
    trans: "敏捷屬性",
    match: [],
    desc: "An attribute name added a repeat for AI to easier to understand",
  },
  {
    eng: "Thieving",
    trans: "偷竊",
    match: [],
    desc: "A job name player can perform",
  },
  {
    eng: "Scavenge",
    trans: "搜括",
    match: [],
    desc: "A job name player can perform",
  },
  {
    eng: "Extraction Mission",
    trans: "救援任務",
    match: [],
    desc: "A job name player can perform",
  },
  {
    eng: "Arclight City",
    trans: "幻光之城",
    match: [],
    desc: "Name of the game, also the name of the city set in the game, when translating this please make it sounds good, does not to be direct translation",
  },
  {
    eng: "Arclight",
    trans: "幻光之城",
    match: [],
    desc: "Short-term name of the game, also the name of the city set in the game",
  },
  {
    eng: "Territory",
    trans: "領地",
    match: [],
    desc: "A district area player can take control of",
  },
  {
    eng: "gang",
    trans: "幫派",
    match: [],
    desc: "Like clans in other games",
  },
  {
    eng: "Gang Upkeep",
    trans: "幫派維護",
    match: [],
    desc: "A cost player needs to pay to maintain their gang",
  },
  {
    eng: "Gang Territory",
    trans: "幫派領地",
    match: [],
    desc: "A district area gang can take control of",
  },
  {
    eng: "Ripperdoc",
    trans: "電馭醫生",
    match: [],
    desc: "An NPC profession name, like a cybernetic doctor",
  },
  {
    eng: "money",
    trans: "歐元",
    match: [],
    desc: 'Main currency in the game, which is Eurodollars, please translate directly to Eurodollars or simply "money" if more appropriate',
  },
  {
    eng: "Nano Repairer",
    trans: "納米修復器",
    match: [],
    desc: "An item name used to repair broken equipment",
  },
  {
    eng: "TaiXing Cybernetic",
    trans: "台芯電馭",
    match: [
      "taixing"
    ],
    desc: "A fake company name, specialized in making cybernetic implants and other tech",
  },
  {
    eng: "TaiXing",
    trans: "台芯",
    match: [],
    desc: "A fake company name, specialized in making cybernetic implants and other tech",
  },
  {
    eng: "Trauma Team",
    trans: "創傷小隊",
    match: [],
    desc: "An NPC profession name, like a medical rescue team but with guns",
  },
  {
    eng: "extraction force",
    trans: "救援部隊",
    match: [],
    desc: "Teams work under Trauma Team, like a medical rescue team but with guns",
  },
  {
    eng: "crew",
    trans: "隊伍",
    match: [],
    desc: "A team of mercenaries player can hire to help them fight",
  },
  {
    eng: "Implant", trans: "電馭元件", match: [], desc: ""
  },
  {
    eng: "Cyber psychosis",
    trans: "網絡狂躁症",
    match: [
      "psychosis"
    ],
    desc: "Same thing as in the Anime, when a person uses too much cybernetic ability, they will lose their mind",
  },
  {
    eng: "stats",
    trans: "屬性",
    match: [
      "stat"
    ],
    desc: "The attributes of items, like damage, health, armor, etc",
  },
  {
    eng: "reward",
    trans: "獎勵",
    match: [],
    desc: "A reward player can get from doing quests or other stuff",
  },
  {
    eng: "calibration",
    trans: "校準",
    match: [
      "calibrate"
    ],
    desc: "A process to make equipment work better",
  },
  {
    eng: "calibrate",
    trans: "校準",
    match: [],
    desc: "A process to make equipment work better",
  },
  {
    eng: "What is equipment calibration",
    trans: "裝備校準是甚麼",
    match: [
      "calibrate"
    ],
    desc: "",
  },
  {
    eng: "upgrade",
    trans: "升級",
    match: [],
    desc: "A process to make equipment work better, including increasing level, resetting, or adding new stats",
  },
  {
    eng: "place hit",
    trans: "下達擊殺令",
    match: [],
    desc: "Placing a bounty order on another player",
  },
  {
    eng: "netrunner",
    trans: "駭客",
    match: [],
    desc: "Hacker in cyberpunk term",
  },
  {
    eng: "netrunning",
    trans: "網絡行走",
    match: [],
    desc: "Hacking in cyberpunk term",
  },
  {
    eng: "flatline",
    trans: "心跳停止",
    match: [],
    desc: "Dead in cyberpunk term, will show up in the dead screen with bit writing, supposed to look cool",
  },
  {
    eng: "cybernet",
    trans: "網際網路",
    match: [],
    desc: '"Internet" in cyberpunk term',
  },
  {
    eng: "use", trans: "使用", match: [], desc: "Use an item"
  },
  {
    eng: "next",
    trans: "下一步",
    match: [],
    desc: "In UI context, like a button",
  },
  {
    eng: "block",
    trans: "封鎖",
    match: [],
    desc: "Block a player from sending messages to you",
  },
  {
    eng: "bundle",
    trans: "禮包",
    match: [],
    desc: "A bundle of items players can buy in most mobile games",
  },
  {
    eng: "block chance",
    trans: "格擋機率",
    match: [],
    desc: "A stat of equipment, a chance that players can block incoming damage",
  },
  {
    eng: "Universal Dollars",
    trans: "通用幣",
    match: [],
    desc: "A fictional currency name in the game, translate to a suitable name in your language",
  },
  {
    eng: "Cybernetic Enhancer",
    trans: "電馭增強器",
    match: [
      "enhancer"
    ],
    desc: "An item name, a cybernetic implant that can enhance players' abilities",
  },
  {
    eng: "Eurodollars",
    trans: "歐元",
    match: [
      "eddie"
    ],
    desc: 'Main currency in the game, which is Eurodollars, please translate directly to Eurodollars or simply "money" if more appropriate',
  },
  {
    eng: "Lore note",
    trans: "背景故事",
    match: [
      "lore"
    ],
    desc: "A note that players can find in the game and read to learn more about the game world",
  },
  {
    eng: "referral",
    trans: "推薦",
    match: [
      "refer"
    ],
    desc: "Referral as in referring a friend to play the game",
  },
  {
    eng: "refer",
    trans: "推薦",
    match: [],
    desc: "Referral as in referring a friend to play the game",
  },
];

EXAMPLE;
