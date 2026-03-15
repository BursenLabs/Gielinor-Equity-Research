/**
 * @module ui/searchFilterData
 * Search filter category definitions and keyword matching logic
 * for the market search popover.
 */

import type { RankedItem } from "../../services";
import { getCachedNatureRunePrice } from "../state";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SearchFilterDef {
  id: string;
  label: string;
  match: (name: string, item?: RankedItem) => boolean;
}

export interface SearchFilterGroup {
  title: string;
  filters: SearchFilterDef[];
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Case-insensitive keyword helper. */
export function nameHasAny(name: string, keywords: string[]): boolean {
  const lower = name.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
}

// ─── Filter groups ──────────────────────────────────────────────────────────

export const SEARCH_FILTER_GROUPS: SearchFilterGroup[] = [
  /* ── Combat Equipment ──────────────────────────────────────────── */
  {
    title: "Combat Equipment",
    filters: [
      { id: "ce-melee-armour", label: "Melee Armour", match: (n) => nameHasAny(n, [
        "platebody", "platelegs", "plateskirt", "chainbody", "full helm", "med helm",
        "kiteshield", "sq shield", "gauntlets", "sabatons", "defender",
        "bandos", "torva", "malevolent", "masterwork", "rock-shell",
        "bane armour", "elder rune armour", "orikalkum armour", "necronium armour",
        "trimmed masterwork", "hauberk", "greaves", "cuirass", "linza"
      ]) },
      { id: "ce-melee-weapons", label: "Melee Weapons", match: (n) => nameHasAny(n, [
        "sword", "scimitar", "mace", "warhammer", "lance", "halberd", "whip",
        "godsword", "maul", "rapier", "spear", "claw", "dagger", "2h sword",
        "battleaxe", "longsword", "hasta", "noxious scythe", "drygore",
        "khopesh", "abyssal vine", "lava whip", "ripper claw", "korasi",
        "saradomin sword", "zamorakian spear", "flail", "cleaver"
      ]) },
      { id: "ce-ranged-armour", label: "Ranged Armour", match: (n) => nameHasAny(n, [
        "dragonhide body", "d'hide body", "d'hide chaps", "d'hide vamb",
        "armadyl", "pernix", "sirenic", "royal d'hide", "karil",
        "robin hood", "ranger boots", "snakeskin", "spined", "coif",
        "chaps", "vambraces", "anima core of zamorak", "elite ranger",
        "glaiven", "fleeting boots", "tracking gloves"
      ]) },
      { id: "ce-ranged-weapons", label: "Ranged Weapons", match: (n) => nameHasAny(n, [
        "crossbow", "shortbow", "longbow", "shieldbow", "chargebow",
        "noxious longbow", "seren godbow", "blowpipe", "decimation",
        "zaryte bow", "hexhunter bow", "wyvern crossbow", "ascension crossbow",
        "mechanised chinchompa", "sagittarian", "hand cannon"
      ]) },
      { id: "ce-magic-armour", label: "Magic Armour", match: (n) => nameHasAny(n, [
        "mystic robe", "ahrim", "virtus", "tectonic", "subjugation",
        "ganodermic", "seasinger", "anima core of seren", "skeletal",
        "splitbark", "infinity robe", "zuriel", "robes of", "batwing",
        "dagon'hai", "fungal visor", "fungal poncho", "fungal leggings",
        "battle-mage"
      ]) },
      { id: "ce-magic-weapons", label: "Magic Weapons", match: (n) => nameHasAny(n, [
        "staff of", " staff", "wand", "book of", "seismic", "noxious staff",
        "inquisitor staff", "fractured staff", "cywir", "obliteration",
        "abyssal wand", "seasinger kiba", "virtus wand", "orb of",
        "polypore staff", "camel staff", "staff of sliske"
      ]) },
      { id: "ce-ammunition", label: "Ammunition", match: (n) => nameHasAny(n, [
        "arrow", "bolt", "dart", "javelin", "throwing knife", "throwing axe",
        "chinchompa", "brutal", "cannonball", "skillchompa",
        "bakriminel", "ascension bolt", "dragonstone bolt", "ruby bolt",
        "diamond bolt", "onyx bolt", "hydrix bolt", "tar", "grapple",
        "fire arrows", "ogre arrow"
      ]) },
      { id: "ce-prayer-necro", label: "Prayer / Necro Gear", match: (n) => nameHasAny(n, [
        "proselyte", "initiate", "vestment", "monk robe", "stole",
        "mitre", "crozier", "deathwarden", "deathstorm",
        "skull lantern", "spectral shield", "prayer cape",
        "spirit shield", "deathguard", "omni guard",
        "first necromancer", "soulbound lantern"
      ]) },
    ],
  },
  /* ── Skills / Materials ────────────────────────────────────────── */
  {
    title: "Skills / Materials",
    filters: [
      { id: "sk-herblore", label: "Herblore", match: (n) => nameHasAny(n, [
        "grimy", "clean ", "unfinished potion", "vial of",
        "dwarf weed", "snapdragon", "torstol", "lantadyme", "cadantine",
        "kwuarm", "avantoe", "ranarr", "toadflax", "irit", "harralander",
        "tarromin", "guam", "marrentill", "spirit weed", "wergali", "fellstalk",
        "arbuck", "bloodweed",
        "eye of newt", "limpwurt root", "white berries", "red spiders' eggs",
        "wine of zamorak", "potato cactus", "mort myre fungus", "snape grass",
        "blue dragon scale", "crushed nest", "jangerberries", "ground mud rune",
        "bird nest", "unicorn horn dust", "kebbit teeth dust",
        "primal extract", "coconut milk", "desert goat horn", "goat horn dust",
        "cave nightshade", "grenwall spike", "crystal flask", "proboscis",
        "spark chitin", "ground miasma rune", "wimpy feather"
      ]) },
      { id: "sk-mining-smithing", label: "Mining & Smithing", match: (n) => nameHasAny(n, [
        " ore", " bar", "arrowhead", "dart tip", "unfinished bolt",
        "bane ", "elder rune", "orikalkum", "necronium", "phasmatite",
        "banite", "luminite", "drakolith", "light animica", "dark animica",
        "copper ore", "tin ore", "iron ore", "coal", "mithril ore",
        "adamantite ore", "runite ore", "gold ore", "silver ore",
        "bronze bar", "iron bar", "steel bar", "mithril bar", "adamant bar",
        "rune bar", "gold bar", "silver bar", "stone spirit",
        "corrupted ore", "concentrated gold", "seren stone"
      ]) },
      { id: "sk-crafting", label: "Crafting", match: (n) => nameHasAny(n, [
        "dragonhide", "d'hide", "leather", "uncut ", " gem",
        "emerald", "ruby", "sapphire", "diamond", "onyx", "hydrix",
        "dragonstone", "gold bar", "silver bar", "battlestaff",
        "molten glass", "ball of wool", "flax", "bowstring",
        "red topaz", "jade", "opal", "cut "
      ]) },
      { id: "sk-cooking", label: "Cooking", match: (n) => nameHasAny(n, [
        "raw ", "cooked ", "shark", "rocktail", "sailfish", "lobster",
        "swordfish", "monkfish", "tuna", "trout", "salmon", "pie",
        "cake", "bread", "soup", "manta ray", "cavefish", "catfish",
        "great white", "blue blubber", "green blubber",
        "baron shark", "bass", "herring", "karambwan",
        "ale yeast", "barley", "barley malt", "hops",
        "dough", "flour", "milk", "chocolate", "grapes",
        "biscuit", "pizza", "kebab", "stew",
        "shrimp", "sardine", "mackerel", "pike", "cod",
        "sea turtle", "roast ", "wrapped oomlie"
      ]) },
      { id: "sk-fletching", label: "Fletching", match: (n) => nameHasAny(n, [
        "arrow shaft", "bowstring", "headless arrow", "feather",
        "unstrung", "bow (u)", "crossbow (u)", "longbow (u)", "shortbow (u)",
        "shieldbow (u)", "javelin shaft", "flax", "bolt tips",
        "broad arrowhead", "ascension shard"
      ]) },
      { id: "sk-farming", label: "Farming & Seeds", match: (n) => nameHasAny(n, [
        "seed", "sapling", "compost", "plant cure", "herb seed",
        "allotment", "snapdragon seed", "torstol seed", "magic seed",
        "yew seed", "papaya", "coconut", "pineapple", "sweetcorn",
        "strawberry", "watermelon", "avocado", "mango", "dragonfruit",
        "cactus spine", "calquat", "spirit seed", "palm tree",
        "mushroom spore", "poison ivy"
      ]) },
      { id: "sk-runecrafting", label: "Runecrafting", match: (n) => nameHasAny(n, [
        "pure essence", "rune essence", "talisman", "tiara",
        "binding necklace", "runecrafting", "vis wax"
      ]) },
      { id: "sk-construction", label: "Construction", match: (n) => nameHasAny(n, [
        "plank", "limestone", "marble block", "white marble", "gold leaf",
        "mahogany plank", "teak plank", "oak plank",
        "bolt of cloth", "nails", "flatpack", "bagged ",
        "clockwork"
      ]) },
      { id: "sk-woodcutting", label: "Woodcutting", match: (n) => nameHasAny(n, [
        "logs", "wood spirit"
      ]) },
      { id: "sk-archaeology", label: "Archaeology", match: (n) => nameHasAny(n, [
        "soil", "chronotes", "artefact", "restored ", "mattock",
        "ancient vis", "tyrian purple", "whiteite", "cadmium red",
        "samite silk", "goldrune", "orthenglass", "star of saradomin",
        "hellfire metal", "quintessence", "imperial steel",
        "armadylean yellow", "stormguard steel", "wings of war",
        "warforged bronze", "zarosian insignia", "third age iron",
        "blood of orcus", "white oak", "soapstone", "vellum",
        "leather scraps", "animal furs", "malachite green",
        "cobalt blue", "chaotic brimstone", "demonhide", "keramos",
        "silvthril", "everlight silvthril", "orgone", "felt"
      ]) },
      { id: "sk-summoning", label: "Summoning", match: (n) => nameHasAny(n, [
        "pouch", "spirit shard", "charm", "spirit gem", "summoning",
        "water talisman", "tortoise shell", "honeycomb",
        "swamp lizard", "crimson charm", "blue charm", "gold charm", "green charm",
        "kyatt", "graahk", "larupia"
      ]) },
      { id: "sk-prayer", label: "Prayer Materials", match: (n) => nameHasAny(n, [
        "bone", "ashes", "ectoplasm", "dragon bone", "frost dragon bone",
        "big bone", "dagannoth bone", "airut bone", "dinosaur bone",
        "reinforced dragon bone", "hardened dragon bone", "baby dragon bone",
        "wyvern bone", "impious ashes", "accursed ashes", "infernal ashes",
        "searing ashes", "tortured ashes", "holy elixir"
      ]) },
      { id: "sk-divination", label: "Divination", match: (n) => nameHasAny(n, [
        "energy", "sign of", "divine ", "porter", "incandescent",
        "luminous", "brilliant", "vibrant", "radiant", "elder energy",
        "cursed energy", "pale energy", "flickering", "gleaming", "lustrous"
      ]) },
      { id: "sk-invention", label: "Invention", match: (n) => nameHasAny(n, [
        "augment", "divine charge", "simple parts", "component",
        "siphon", "equipment dissolver", "charge pack",
        "ancient invention", "gizmo"
      ]) },
      { id: "sk-firemaking", label: "Firemaking", match: (n) => nameHasAny(n, [
        "incense stick", "pyre log", "pyre logs"
      ]) },
      { id: "sk-hunting", label: "Hunting", match: (n) => nameHasAny(n, [
        "box trap", "bird snare", "butterfly net", "magic box",
        "noose wand", "teasing stick", "kebbit", "chinchompa",
        "imp-in-a-box", "rabbit", "jerboa", "larupia", "graahk",
        "kyatt", "polar kebbit", "sabre-tooth", "hunter kit"
      ]) },
    ],
  },
  /* ── Consumables ───────────────────────────────────────────────── */
  {
    title: "Consumables",
    filters: [
      { id: "co-food", label: "Food & Drink", match: (n) => nameHasAny(n, [
        "shark", "rocktail", "sailfish", "lobster", "swordfish", "monkfish",
        "tuna", "manta ray", "cavefish", "baron shark", "blue blubber",
        "great white", "green blubber", "catfish", "bass", "trout", "salmon",
        "pie", "cake", "bread", "soup", "stew", "pizza", "biscuit",
        "anchovies", "cooked ", "baguette", "kebab", "curry",
        "beer", "ale ", "wine", "cider", "grog",
        "jellyfish", "beltfish", "desert sole", "ghostly sole",
        "shrimp", "sardine", "herring", "mackerel", "pike",
        "karambwan", "sea turtle", "roast ", "wrapped oomlie"
      ]) },
      { id: "co-potions", label: "Potions", match: (n) => nameHasAny(n, [
        "potion", "flask", "overload", "brew", "prayer renewal",
        "super restore", "weapon poison", "antifire", "aggression",
        "adrenaline", "extreme", "supreme overload", "saradomin brew",
        "super antifire", "super prayer", "replenishment", "powerburst",
        "antipoison", "super antipoison", "combat mix", "prayer mix",
        "restore mix", "mixture", "juju"
      ]) },
      { id: "co-runes-teleports", label: "Runes & Teleports", match: (n) => nameHasAny(n, [
        "air rune", "water rune", "earth rune", "fire rune",
        "mind rune", "body rune", "cosmic rune", "chaos rune",
        "nature rune", "law rune", "death rune", "blood rune",
        "soul rune", "astral rune", "armadyl rune",
        "dust rune", "lava rune", "mist rune", "mud rune",
        "smoke rune", "steam rune",
        "teleport", "teletab", "tablet",
        "ring of duelling", "ring of wealth", "combat bracelet",
        "skills necklace", "games necklace", "amulet of glory",
        "ectophial", "house teleport"
      ]) },
      { id: "co-scrolls", label: "Summoning Scrolls", match: (n) => nameHasAny(n, [
        "scroll ("
      ]) },
      { id: "co-pocket", label: "Pocket Items", match: (n) => nameHasAny(n, [
        "scrimshaw", "god book", "book of", "illuminated ",
        "sign of the porter", "sign of life", "sign of death",
        "scripture", "grimoire", "god page",
        "ancient page", "armadyl page", "bandos page",
        "guthix page", "saradomin page", "zamorak page", "zaros page",
        "seren page"
      ]) },
    ],
  },
  /* ── Other ─────────────────────────────────────────────────────── */
  {
    title: "Other",
    filters: [
      { id: "ot-jewellery", label: "Jewellery", match: (n) => nameHasAny(n, [
        "amulet", "necklace", "bracelet", "ring of", "brooch",
        "pendant", "ring (", "onyx ring", "diamond ring",
        "ruby ring", "emerald ring", "sapphire ring", "dragonstone ring",
        "zenyte", "alchemical onyx",
        "luck of the dwarves", "hazelmere", "locket"
      ]) },
      { id: "ot-salvage", label: "Salvage", match: (n) => nameHasAny(n, ["salvage"]) },
      { id: "ot-stone-spirits", label: "Stone Spirits", match: (n) => nameHasAny(n, [
        "stone spirit"
      ]) },
      { id: "ot-costumes", label: "Costumes", match: (n) => nameHasAny(n, [
        "costume", "outfit", "mask", "wig", "robe set",
        "fancy dress", "mime", "lederhosen", "camo", "zombie"
      ]) },
      { id: "ot-tools", label: "Tools & Containers", match: (n) => nameHasAny(n, [
        "hatchet", "pickaxe", "chisel", "hammer", "knife",
        "tinderbox", "bucket", "jug", "vial", "pot ", "basket",
        "watering can", "secateurs", "spade", "rake"
      ]) },
      { id: "ot-familiars", label: "Familiars", match: (n) => nameHasAny(n, [
        "pouch", "familiar", "beast of burden", "titan ", "minotaur",
        "unicorn stallion", "war tortoise", "pack yak", "nihil",
        "ripper demon", "steel titan", "pack mammoth"
      ]) },
      { id: "ot-rares", label: "Rares / Discontinued", match: (n) => nameHasAny(n, [
        "partyhat", "cracker", "santa hat", "h'ween mask", "halloween mask",
        "disk of returning", "pumpkin", "easter egg", "black santa",
        "christmas scythe", "christmas cracker",
        "fish mask", "holly wreath", "candy cane", "yo-yo"
      ]) },
    ],
  },
  /* ── Metric-based signals (no GE category equivalent) ──────────── */
  {
    title: "Market Signals",
    filters: [
      { id: "ms-uptrend",    label: "\u25b2 Uptrend",     match: (_n, item) => item?.priceTrend === "Uptrend" },
      { id: "ms-downtrend",  label: "\u25bc Downtrend",    match: (_n, item) => item?.priceTrend === "Downtrend" },
      { id: "ms-instaflip",  label: "\u26a1 Insta-Flip",   match: (_n, item) => item?.tradeVelocity === "Insta-Flip" },
      { id: "ms-hype",       label: "\ud83d\udd25 Volume Spike",  match: (_n, item) => (item?.volumeSpikeMultiplier ?? 0) > 0 },
      { id: "ms-highalch",   label: "\ud83e\uddea Alch Profit",   match: (_n, item) => typeof item?.highAlch === "number" && item.highAlch > (item.price + getCachedNatureRunePrice()) },
      { id: "ms-risky",      label: "\u26a0 Risky",       match: (_n, item) => item?.isRisky === true },
      { id: "ms-conf-high",  label: "\u2705 High Confidence", match: (_n, item) => item?.trendReliability === "High" },
      { id: "ms-conf-med",   label: "\u25cf Med Confidence",  match: (_n, item) => item?.trendReliability === "Medium" || item?.trendReliability === "High" },
    ],
  },
];
