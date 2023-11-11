## Update log

### Notice

**This game is still in early Beta stage, please expect many changes such as new features, bug fixes, buffs and nerfs.**

**If you find any bugs please report to our discord bug report channel [here](https://discord.com/channels/1140647450122657812/1146133684022415400)**

**If you find a exploit please do not spread it to others and directly email the details to the developer at [ching.huang.dexter@gmail.com](mailto:ching.huang.dexter@gmail.com)**

### 0.0.17
-   gives **additional** chance for 5 star mercenary when you have tried to draw them many times but still unable to get them due to statistically unluckiness, this is to prevent such extreme rare case from happening ensuring even if you are extremely unlucky you will still get them eventually much easier and faster.

    **Please note, the base probability stated in game is not changed, this update only adds additional chance for rare unlucky case❤️**
-   Added auto select to mercenary page, allowing you to customize which tiers to auto select, so you can dismiss them easier and faster
-   Added average price hint at market placing item page, so you can use it to help determine what price to sell your item at
-   Fixed gang motto word count issue 
-   Fixed issue with identifier able to identify unlimited amount of prefixes at once, its suppose to identify one at a time.

### 0.0.16

-   Tweaks to UI to make it easier to know how to upgrade items
-   Added many new tutorial to help new players understand the game better
-   give new players a bunch of items get from for starting
-   Added indication light on equipment page to show if item can be upgraded, encouraging new players to click on item to upgrade them.
-   Multiple bug fixes
-   Changed level required to put item on market to 30, to prevent alt issues and make it easier for me to give out items to new players in the future without worrying about problem caused by alt accounts

### 0.0.16

-   Added `Common Container`, `Uncommon Locked Container`, `Rare Locked Container` and `Unique Locked Container`, each of the locked containers requires a respective container key to be unlocked, you can craft a container key with `Container Key Fragments`, all the keys and containers can only be obtained from strongholds currently.
-   New item tier `Mythic` has been added, it is higher then epic tier, Mythic tier is much stronger. you can only upgrade to this tier on item that is 60+ levels, additionally this tier allows you to calibrate the item up to +12, which is 2 more then epic tier with much higher stats.
the level, upgrades and reset shards cannot be traded, but the equipment itself can be traded.
the only way to obtain the shards for this tier is by unlocking `Unique Locked Containers`
-   Added `Calibration Stabilizer`, use this item during calibration can increase the success chance by 1%, this will be required to calibrate items to +12 as +11 to +12 has base chance of 0%, system will prevent you from attempting to calibrate when there is zero chance of success.
-   Added auto calibration & repair functionality, you can use that to automatically calibrate and repair the item until calibration success without doing manually and much faster.
-   Fixed issue with being able to purchase same equipment from NPC multiple times, purchasing exact same item is blocked because it can cause problems with the game since each items are designed to be unique.
-   Added skip animation toggle to mercenary draw page
-   Fixed issue with chat due to third-party service downtime
-   Show player level on message
-   Updated animation framework
-   Buffed mercenary power on 100+ levels
-   Optimization on game rendering
-   Improved tutorial
-   Added button to manage mercenary at mercenary draw page to allow quicker access to mercenary management


### 0.0.15

-   added skip animation toggle, allowing you to calibrate equipments faster.
-   Added skip animation and auto repair toggle to item repair interface; using auto repair will automatically retry repairing the item until it is repaired successfully, will only stop when the item is repaired successfully or you run out of `Nano Repairer` 
-   Improved Calibration and item Upgrade interface, takes less space and more compact now

### 0.0.14

-   Updated cooking interface
-   Improved PvP fairness, to protect innocent players (player without hostile or wanted status) now will:
    -  Require you to have at least 20,000 eurodollars in your character, to prevent people from using this advantage to pvp random players without significant risk
    -  incur a double psychosis usage as you are attacking an innocent player, this is to decrease the amount of mass killing of innocent players
-   Optimization, the game should run smoother and require less battery on some devices now
-   Fixed issue with feedback and bug report button

*mechanic for arresting or attacking a player with hostile status will remain unchanged*
-   Added protection against new players for placing hit, you can only place hit on players thats level 25 or above, this is to prevent people from placing hits on new players and players that are protected by pvp.

### 0.0.13
-   Added first top-up discount, you can now get double value on first top-up
-   Updated notice popup UI

### 0.0.12
-   Fixed issue with purchasing bundle when inventory is full


### 0.0.11

-   Fixed bug with auto healing in combats
-   Fixed issue with equipment tab UI

### 0.0.11

-   Added translation for dungeon time and health event.
-   Bug fixes

### 0.0.10

-   Added new dungeon encounter system, there is a small chance of getting a random encounter in dungeons, you can choose different action for the encounter, and you might get rewarded or damaged base on your choice and chance. the encounter is translatable in Github.
-   Reduced `Calibration Bundle` price
-   Fixed issue with tile track minigame where clicking on wrong tile wont reset the minigame

### 0.0.9

-   Fixed issue with PvP kills sometimes able to complete kill enemy quest
-   Added edit translation link
-   Improved chat UI with scroll interaction
-   Typo fixes
-   Hide the dismantle button for buttons in a backpack, as items in backpack cannot be dismantled

### 0.0.8
-   Lowered enemy damage
-   Decreased enemy damage specially for lower level enemies
-   Decreased eurodollars needed for upgrading mercenary specially for lower levels
-   Increased quest reward to newbie quests
-   Updated `Advance Healing Nanobot`'s icon

### 0.0.7
-   Daily reward reset will now reset the claimed reward as well
-   Daily reward buffed, Please keep in mine, due to technical reasons this WILL cause daily rewards to randomize to apply these changes: 
    - Added `Neuroblocker`, `Token of Peace`, `Defense boost buff activator` and `Loot Increase Buff Activator` into possible rewards
    - buffed equipment items rarity on daily reward

    **IMPORTANT: the rewards is randomized, NOTHING is secretly removed, everyone's daily reward is different, some may get something they didn't have before update, some may see different stuff showing up, this is a technical side-effect of adding new items into the reward list**
-   Added feedback button in main menu
-   Fixes issue with depositing funds to gang sometimes does not trigger UI update (the funds is still deposited correctly, just not showing correctly)
-   Added more tips to item source hint
-   Fixed issue with able to place locked item on market
-   Locked item will now display with a padlock icon on item selection modal

### 0.0.6

-   You will not get PvP debuff when arresting wanted player now
-   Fixed issue with being able to sell locked items to NPCs

### 0.0.5

-   Base on community feedback, we have buffed 5 stars mercenary power

### 0.0.4

-   Buffed eurodollars gain from performing tasks
-   Buffed `Cybernetic Enhancer` drastically increased drop amount for `Mirai District` task
-   Increased location reward variation, you can now receive various rare items by clearing by clearing Difficult Dungeons; location clear reward now drop `Location Reward Container` which will contain random rare item, including `Cybernetic Enhancer`, `Token of Peace`, `Reward Cipher`, `Neural Upgrade Augmenter`, `Repair Kit` and `Red Bar VIP Token`. Additionally it will now give 2 free `Equipment Calibrator` and some Eurodollars base on level cleared!
-   AFK task upgrade 3 has been removed as it caused some technical issues.
-   Fixed Dungeon tile not align properly
-   Fixed Equipment icon display incorrectly issue
-   Fixed quest boss level display incorrectly issue

### 0.0.3

-   Fixed(Hopefully!) unkillable dead enemy bug where enemy is dead but still stuck in dungeon
-   Added `All` button in dismantle page, allowing quicker dismantling of all items 
-   Fixed extraction task giving abnormal amount of eurodollars compare to other tasks
-   Decreased enemy health
-   Fixed issue with clicking empty equipment slot on other player's details page
-   Fixed enemy level display in quest details
-   Increased timing circle minigame response time, should be easier to press now
-   Added new Minigame
-   Added UI scaling, can be changed in settings page, this is experimental, so please report any issues you have with it
-   Adjusted main page layout
-   Increased base mercenary contact max slot to 30
-   Changed tutorial merc draw to fixed set of mercenary instead of random to ensure fairness
-   Fix pvp protected player cannot break protection by attacking other players
-   Fix Friend list UI issue
-   Fixed player selection menu UI issue

### 0.0.2

-   Increased calibration animation speed
-   Increased shop item price tag size
-   Improved Chipr post hashtag rendering
-   Improved translation quality
-   Added image view functionality for mercenary, you can open the full image by clicking the eye icon in mercenary details page
-   Fixed issue with PvP combat log where enemy player's name is displayed incorrectly
-   Adjusted npc quest button
-   improve amount select input validation

### 0.0.1

-   Added confirmation when starting pvp fight with players, to prevent accidental clicks
-   Fixed PvP protection not getting removed when player initiates PvP fight
-   Added market link to player profile, you can now see what items a player is selling in the market by clicking on their profile -> assets -> market
-   Fixed issue with duplicated item suffix when using identification shard
-   Fixed issue with level display in stronghold lobby when level is unlocked with defeating stronghold
-   Added player's eurodollars to player profile
-   Added player's PVP kill/death statistic to player profile
-   You can now see player's Eurodollars and kill/death statistic in their profile
-   You can now transfer leadership of your gang to another gang member
-   As gang leader you can now manage permission of your gang members, such as kicking, inviting, edit gang motto and set gang banner image
-   Fixed `Chirp`'s translation for non-english broken.
-   Fixed auto attack sometimes stop working if pause app and resume again
-   Fixed equipment tier display in details page
-   Fixed location page display issue when unlocked a higher level location by defeating stronghold
-   Added upload log
