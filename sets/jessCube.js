exports.cube = function(outputFunc) {

    var whiteCardsList = [
        "Herald of Anafenza",
        "Kytheon, Hero of Akros",
        "Mother of Runes",
        "Soldier of the Pantheon",
        "Soul Warden",
        "Steppe Lynx",
        "Thraben Inspector",
        "Topplegeist",
        "Town Gossipmonger",
        "Accorder Paladin",
        "Ajani's Pridemate",
        "Anafenza, Kin-Tree Spirit",
        "Azorius Arrester",
        "Consul's Lieutenant",
        "Daring Skyjek",
        "Hanweir Militia Captain",
        "Hidden Dragonslayer",
        "Knight of the White Orchid",
        "Myrsmith",
        "Precinct Captain",
        "Puresteel Paladin",
        "Seeker of the Way",
        "Serene Steward",
        "Stoneforge Mystic",
        "Sunspear Shikari",
        "Suture Priest",
        "Topan Freeblade",
        "Blade Splicer",
        "Bygone Bishop",
        "Hallowed Spiritkeeper",
        "Mentor of the Meek",
        "Mirran Crusader",
        "Mirror Entity",
        "Sandsteppe Outcast",
        "Silverblade Paladin",
        "Vryn Wingmare",
        "High Sentinels of Arashin",
        'Kongming, "Sleeping Dragon"',
        "Nearheath Chaplain",
        "Odric, Lunarch Marshal",
        "Relief Captain",
        "Restoration Angel",
        "Exalted Angel",
        "Sun Titan",
        "Yosei, the Morning Star",
        "Ajani Goldmane",
        "Elspeth, Knight-Errant",
        "Gideon, Ally of Zendikar",
        "Elspeth, Sun's Champion",
        "Court Homunculus",
        "Porcelain Legionnaire",
        "Path to Exile",
        "Swords to Plowshares",
        "Gideon's Reproach",
        "Raise the Alarm",
        "Valorous Stance",
        "Fortify",
        "Shining Shoal",
        "Balance",
        "Lingering Souls",
        "Glorious Anthem",
        "Oblivion Ring",
        "Nyx-Fleece Ram"
    ];
    var blueCardsList = [
        "Delver of Secrets",
        "Sidisi's Faithful",
        "Aquamoeba",
        "Coralhelm Guide",
        "Deranged Assistant",
        "Jace, Vryn's Prodigy",
        "Merfolk Looter",
        "Mindshrieker",
        "Snapcaster Mage",
        "Spiketail Hatchling",
        "Thing in the Ice",
        "Eldrazi Skyspawner",
        "Man-o'-War",
        "Ruination Guide",
        "Trinket Mage",
        "Vendilion Clique",
        "Aberrant Researcher",
        "Soulsworn Spirit",
        "Talrand, Sky Summoner",
        "Venser, Shaper Savant",
        "Whirler Rogue",
        "Mulldrifter",
        //"Aethersnipe",
        "Consecrated Sphinx",
        "Drowner of Hope",
        "Frost Titan",
        "Keiga, the Tide Star",
        "Somber Hoverguard",
        "Jace Beleren",
        "Jace, the Mind Sculptor",
        "Tezzeret the Seeker",
        "Etherium Sculptor",
        "Master of Etherium",
        "Brainstorm",
        "Counterspell",
        "Disperse",
        "Impulse",
        "Mana Leak",
        "Negate",
        "Remand",
        "Remove Soul",
        "Circular Logic",
        "Steady Progress",
        "Fact or Fiction",
        "Gifts Ungiven",
        "Ray of Command",
        "Repeal",
        "Dig Through Time",
        "Clutch of Currents",
        "Ponder",
        "Preordain",
        "Serum Visions",
        "Compulsive Research",
        "Fabricate",
        "Sleep",
        "Tezzeret's Gambit",
        "Welcome to the Fold",
        "Bribery",
        "Thoughtcast",
        "Treasure Cruise",
        "Ghostly Wings",
        "Chamber of Manipulation",
        "Thopter Spy Network"
    ];
    var blackCardsList = [
        "Bloodsoaked Champion",
        "Carrion Feeder",
        "Sludge Crawler",
        "Vampire Lacerator",
        "Viscera Seer",
        "Asylum Visitor",
        "Blood Artist",
        "Bloodghast",
        "Dark Confidant",
        "Dross Hopper",
        "Heir of Falkenrath",
        "Oona's Prowler",
        "Pale Rider of Trostad",
        "Relentless Dead",
        "Silumgar Assassin",
        "Sultai Emissary",
        "Thrill-Kill Assassin",
        "Vampire Hexmage",
        "Zulaport Cutthroat",
        "Deadbridge Shaman",
        "Drana, Liberator of Malakir",
        "Flesh Carver",
        "Fleshbag Marauder",
        "Liliana, Heretical Healer",
        "Merciless Executioner",
        "Nantuko Husk",
        "Pitiless Horde",
        "Vampire Nighthawk",
        "Accursed Witch",
        "Kalitas, Traitor of Ghet",
        "Priest of the Blood Rite",
        "Shriekmaw",
        "Sidisi, Undead Vizier",
        "Grave Titan",
        "Kokusho, the Evening Star",
        "Tasigur, the Golden Fang",
        "Visara the Dreadful",
        "Liliana of the Veil",
        "Ob Nixilis Reignited",
        "Dark Ritual",
        "Diabolic Edict",
        "Doom Blade",
        "Nameless Inversion",
        "Dismember",
        "Murderous Cut",
        "Sickening Shoal",
        "Cabal Therapy",
        "Reanimate",
        "Thoughtseize",
        "Exhume",
        "Mind Rot",
        "Ruinous Path",
        "Victimize",
        "Dread Return",
        "Zombify",
        "Dark Petition",
        "Damnable Pact",
        "Vampiric Rites",
        "Necromancy",
        "Unspeakable Symbol",
        "Demonic Pact",
        "Triskaidekaphobia"
    ];
    var redCardsList = [
        "Gnarled Scarhide",
        "Dragonmaster Outcast",
        "Falkenrath Gorger",
        "Goblin Guide",
        "Grim Lavamancer",
        "Monastery Swiftspear",
        "Reckless Waif",
        "Skitter of Lizards",
        "Abbot of Keral Keep",
        "Ember-Eye Wolf",
        "Goblin Shortcutter",
        "Goblin Wardriver",
        "Hellspark Elemental",
        "Humble Defector",
        "Ire Shaman",
        "Kessig Forgemaster",
        "Kiln Fiend",
        "Lightning Mauler",
        "Mage-Ring Bully",
        "Mogg War Marshal",
        "Plated Geopede",
        "Ravenous Bloodseeker",
        "Torch Fiend",
        "Young Pyromancer",
        "Alesha, Who Smiles at Death",
        "Countryside Crusher",
        "Goblin Rabblemaster",
        "Guttersnipe",
        "Sin Prodder",
        "Splatter Thug",
        "Tuktuk the Explorer",
        "Embodiment of Fury",
        "Flametongue Kavu",
        "Goblin Heelcutter",
        "Goldnight Castigator",
        "Hellrider",
        "Oxidda Scrapmelter",
        "Voldaren Duelist",
        "Glarewielder",
        "Goblin Dark-Dwellers",
        "Kumano, Master Yamabushi",
        "Zealous Conscripts",
        "Inferno Titan",
        "Greater Gargadon",
        "Brute Force",
        "Burst Lightning",
        "Dynacharge",
        "Geistflame",
        "Hearth Charm",
        "Lightning Bolt",
        "Smelt",
        "Titan's Strength",
        "Desperate Ravings",
        "Smash to Smithereens",
        "Temur Battle Rage",
        "Staggershock",
        "Trumpet Blast",
        "Flame Slash",
        "Seething Anger",
        "Dragon Fodder",
        "Tormenting Voice",
        "Arc Lightning",
        "Mark of Mutiny",
        "Hammer of Purphoros"
    ];
    var greenCardsList = [
        "Avacyn's Pilgrim",
        "Birds of Paradise",
        "Elves of Deep Shadow",
        "Experiment One",
        "Llanowar Elves",
        "Noble Hierarch",
        "Scute Mob",
        "Wild Nacatl",
        "Aquastrand Spider",
        "Bramblesnap",
        "Den Protector",
        "Duskwatch Recruiter",
        "Jade Mage",
        "Lambholt Pacifist",
        "Lotus Cobra",
        "Nest Invader",
        "Obsessive Skinner",
        "Sakura-Tribe Elder",
        "Strangleroot Geist",
        "Sylvan Caryatid",
        "Voyaging Satyr",
        "Wild Mongrel",
        "Eternal Witness",
        "Gluttonous Slime",
        "Reclamation Sage",
        "Tireless Tracker",
        "Undergrowth Champion",
        "Yasova Dragonclaw",
        "Yavimaya Elder",
        "Chameleon Colossus",
        "Kozilek's Predator",
        "Oracle of Mul Daya",
        "Pack Guardian",
        "Polukranos, World Eater",
        "Surrak, the Hunt Caller",
        "Temur Sabertooth",
        "Woodland Wanderer",
        "Conclave Naturalists",
        "Greenwarden of Murasa",
        "Primeval Titan",
        "Ulvenwald Hydra",
        "Hornet Queen",
        "Pelakka Wurm",
        "World Breaker",
        "Garruk Wildspeaker",
        "Birthing Pod",
        "Nature's Claim",
        "Beast Within",
        "Sundering Vitae",
        "Become Immense",
        "Epic Confrontation",
        "Rampant Growth",
        "Kodama's Reach",
        "Harmonize",
        "Overrun",
        "Green Sun's Zenith",
        "Nissa's Renewal",
        "Roar of the Wurm",
        "Tooth and Nail",
        "Cryptolith Rite",
        "Evolutionary Leap",
        "Awakening Zone",
        "From Beyond"
    ];
    var colorlessCardsList = [
        "Endless One",
        "Kozilek's Channeler",
        "Oblivion Sower",
        "Void Winnower",
        "Ugin, the Spirit Dragon",
        "Memnite",
        "Ornithopter",
        "Chronomaton",
        "Hex Parasite",
        "Signal Pest",
        "Arcbound Ravager",
        "Manakin",
        "Perilous Myr",
        "Runed Servitor",
        "Steel Overseer",
        "Chief of the Foundry",
        "Etched Champion",
        "Junk Diver",
        "Frogmite",
        "Lodestone Golem",
        "Lodestone Myr",
        "Mindless Automaton",
        "Molten-Tail Masticore",
        "Solemn Simulacrum",
        "Precursor Golem",
        "Steel Hellkite",
        "Wurmcoil Engine",
        "Myr Battlesphere",
        "Myr Enforcer",
        "Hangarback Walker",
        "Everflowing Chalice",
        "Mox Opal",
        "Basilisk Collar",
        "Bonesplitter",
        "Brittle Effigy",
        "Expedition Map",
        "Flayer Husk",
        "Ghostfire Blade",
        "Pithing Needle",
        "Springleaf Drum",
        "Sylvok Lifestaff",
        "Wayfarer's Bauble",
        "Contagion Clasp",
        "Cranial Plating",
        "Empyrial Plate",
        "Glint Hawk Idol",
        "Howling Mine",
        "Liquimetal Coating",
        "Manriki-Gusari",
        "Mycosynth Wellspring",
        "Ratchet Bomb",
        "Sun Droplet",
        "Swiftfoot Boots",
        "Sword of the Animist",
        "Ashnod's Altar",
        "Chromatic Lantern",
        "Crystal Shard",
        "Loxodon Warhammer",
        "Mimic Vat",
        "Pristine Talisman",
        "Sword of Body and Mind",
        "Sword of Feast and Famine",
        "Sword of Fire and Ice",
        "Sword of Light and Shadow",
        "Sword of Vengeance",
        "Sword of War and Peace",
        "Tumble Magnet",
        "Hedron Archive",
        "Gilded Lotus"
    ];
    var multicolorCardsList = [
        "Azorius Guildmage",
        "Minister of Impediments",
        "Thunderclap Wyvern",
        "Dragonlord Ojutai",
        "Noyan Dar, Roil Shaper",
        "Detention Sphere",
        "Dimir Guildmage",
        "Dragonlord Silumgar",
        "Sire of Stagnation",
        "Ashiok, Nightmare Weaver",
        "Baleful Strix",
        "Recoil",
        "Silumgar's Command",
        "Rakdos Cackler",
        "Rakdos Guildmage",
        "Blazing Hellhound",
        "Exava, Rakdos Blood Witch",
        "Olivia Voldaren",
        "Kolaghan, the Storm's Fury",
        "Dreadbore",
        "Gruul Guildmage",
        "Bloodbraid Elf",
        "Grove Rumbler",
        "Dragonlord Atarka",
        "Domri Rade",
        "Savage Twister",
        "Fires of Yavimaya",
        "Qasali Pridemage",
        "Selesnya Guildmage",
        "Chronicler of Heroes",
        "Joraga Auxiliary",
        "Knight of the Reliquary",
        "Dragonlord Dromoka",
        "Mirari's Wake",
        "Ayli, Eternal Pilgrim",
        "Orzhov Guildmage",
        "Drana's Emissary",
        "Sorin, Lord of Innistrad",
        "Tidehollow Sculler",
        "Anguished Unmaking",
        "Mortify",
        "Deathrite Shaman",
        "Golgari Guildmage",
        "Lotleth Troll",
        "Creakwood Liege",
        "Brood Butcher",
        "Spiritmonger",
        "Putrefy",
        "Kiora's Follower",
        "Simic Guildmage",
        "Trygon Predator",
        "Master Biomancer",
        "Prophet of Kruphix",
        "Sagu Mauler",
        "Goblin Electromancer",
        "Izzet Guildmage",
        "Nivix Cyclops",
        "Izzet Charm",
        //"Turn // Burn",
        "Electrolyze",
        "Call the Skybreaker",
        "Figure of Destiny",
        "Boros Guildmage",
        "Boros Reckoner",
        "Boros Charm",
        "Intimidation Bolt",
        "Goblin Trenches",
        "Broodmate Dragon",
        "Jund Charm",
        "Naya Charm",
        "Bant Charm",
        "Esper Charm",
        "Grixis Charm",
        //Breaking // Entering",
        "Jeskai Charm",
        //"Catch // Release",
        "Mardu Charm",
        "Siege Rhino",
        "Abzan Charm",
        "Sultai Charm",
        "Temur Charm"
    ];

    //all cards arry
    var set = whiteCardsList.concat(blueCardsList,blackCardsList,redCardsList,greenCardsList,multicolorCardsList,colorlessCardsList);

    return set;
};
