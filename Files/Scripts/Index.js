// Types
var cards;
(function (cards) {
    cards[cards["Archers"] = 0] = "Archers";
    cards[cards["Baby Dragon"] = 1] = "Baby Dragon";
    cards[cards["Balloon"] = 2] = "Balloon";
    cards[cards["Bandit"] = 3] = "Bandit";
    cards[cards["Barbarians"] = 4] = "Barbarians";
    cards[cards["Bats"] = 5] = "Bats";
    cards[cards["Battle Ram"] = 6] = "Battle Ram";
    cards[cards["Bomber"] = 7] = "Bomber";
    cards[cards["Bowler"] = 8] = "Bowler";
    cards[cards["Cannon Cart"] = 9] = "Cannon Cart";
    cards[cards["Dark Prince"] = 10] = "Dark Prince";
    cards[cards["Dart Goblin"] = 11] = "Dart Goblin";
    cards[cards["Electro Dragon"] = 12] = "Electro Dragon";
    cards[cards["Electro Wizard"] = 13] = "Electro Wizard";
    cards[cards["Elite Barbarians"] = 14] = "Elite Barbarians";
    cards[cards["Executioner"] = 15] = "Executioner";
    cards[cards["Fire Spirits"] = 16] = "Fire Spirits";
    cards[cards["Flying Machine"] = 17] = "Flying Machine";
    cards[cards["Giant"] = 18] = "Giant";
    cards[cards["Giant Skeleton"] = 19] = "Giant Skeleton";
    cards[cards["Goblin Gang"] = 20] = "Goblin Gang";
    cards[cards["Goblin Giant"] = 21] = "Goblin Giant";
    cards[cards["Goblins"] = 22] = "Goblins";
    cards[cards["Golem"] = 23] = "Golem";
    cards[cards["Golemite"] = 24] = "Golemite";
    cards[cards["Guards"] = 25] = "Guards";
    cards[cards["Hog Rider"] = 26] = "Hog Rider";
    cards[cards["Hunter"] = 27] = "Hunter";
    cards[cards["Ice Golem"] = 28] = "Ice Golem";
    cards[cards["Ice Spirit"] = 29] = "Ice Spirit";
    cards[cards["Ice Wizard"] = 30] = "Ice Wizard";
    cards[cards["Inferno Dragon"] = 31] = "Inferno Dragon";
    cards[cards["Knight"] = 32] = "Knight";
    cards[cards["Lava Hound"] = 33] = "Lava Hound";
    cards[cards["Lava Pup"] = 34] = "Lava Pup";
    cards[cards["Lumberjack"] = 35] = "Lumberjack";
    cards[cards["Magic Archer"] = 36] = "Magic Archer";
    cards[cards["Mega Minion"] = 37] = "Mega Minion";
    cards[cards["Mega Knight"] = 38] = "Mega Knight";
    cards[cards["Mini P.E.K.K.A."] = 39] = "Mini P.E.K.K.A.";
    cards[cards["Miner"] = 40] = "Miner";
    cards[cards["Minions"] = 41] = "Minions";
    cards[cards["Minion Horde"] = 42] = "Minion Horde";
    cards[cards["Musketeer"] = 43] = "Musketeer";
    cards[cards["Night Witch"] = 44] = "Night Witch";
    cards[cards["P.E.K.K.A."] = 45] = "P.E.K.K.A.";
    cards[cards["Prince"] = 46] = "Prince";
    cards[cards["Princess"] = 47] = "Princess";
    cards[cards["Ram Rider"] = 48] = "Ram Rider";
    cards[cards["Rascal Boy"] = 49] = "Rascal Boy";
    cards[cards["Rascal Girl"] = 50] = "Rascal Girl";
    cards[cards["Royal Ghost"] = 51] = "Royal Ghost";
    cards[cards["Royal Giant"] = 52] = "Royal Giant";
    cards[cards["Royal Hogs"] = 53] = "Royal Hogs";
    cards[cards["Royal Recruits"] = 54] = "Royal Recruits";
    cards[cards["Skeletons"] = 55] = "Skeletons";
    cards[cards["Skeleton Army"] = 56] = "Skeleton Army";
    cards[cards["Skeleton Barrel"] = 57] = "Skeleton Barrel";
    cards[cards["Sparky"] = 58] = "Sparky";
    cards[cards["Spear Goblins"] = 59] = "Spear Goblins";
    cards[cards["Three Musketeers"] = 60] = "Three Musketeers";
    cards[cards["Valkyrie"] = 61] = "Valkyrie";
    cards[cards["Wall Breakers"] = 62] = "Wall Breakers";
    cards[cards["Witch"] = 63] = "Witch";
    cards[cards["Wizard"] = 64] = "Wizard";
    cards[cards["Zappies"] = 65] = "Zappies";
    cards[cards["Bomb Tower"] = 66] = "Bomb Tower";
    cards[cards["Cannon"] = 67] = "Cannon";
    cards[cards["Inferno Tower"] = 68] = "Inferno Tower";
    cards[cards["Mortar"] = 69] = "Mortar";
    cards[cards["Tesla"] = 70] = "Tesla";
    cards[cards["X-Bow"] = 71] = "X-Bow";
    cards[cards["Barbarian Hut"] = 72] = "Barbarian Hut";
    cards[cards["Elixir Collector"] = 73] = "Elixir Collector";
    cards[cards["Furnace"] = 74] = "Furnace";
    cards[cards["Goblin Hut"] = 75] = "Goblin Hut";
    cards[cards["Tombstone"] = 76] = "Tombstone";
    cards[cards["Arrows"] = 77] = "Arrows";
    cards[cards["Barbarian Barrel"] = 78] = "Barbarian Barrel";
    cards[cards["Fireball"] = 79] = "Fireball";
    cards[cards["Giant Snowball"] = 80] = "Giant Snowball";
    cards[cards["Lightning"] = 81] = "Lightning";
    cards[cards["Poison"] = 82] = "Poison";
    cards[cards["Rocket"] = 83] = "Rocket";
    cards[cards["The Log"] = 84] = "The Log";
    cards[cards["Tornado"] = 85] = "Tornado";
    cards[cards["Zap"] = 86] = "Zap";
    cards[cards["Goblin Barrel"] = 87] = "Goblin Barrel";
    cards[cards["Graveyard"] = 88] = "Graveyard";
})(cards || (cards = {}));
// Variables
let dropdowns = {
    cards: enumKeys(cards)
};
// Functions
function start() {
    // Initialize
    initialize();
}
function initialize() {
    $('.form-section').attr('float', '0-1-1');
    $('.form-section-input').each(function (i, e) {
        // Variables
        var inputType = $(e).attr('input-type');
        var inputTitle = $(e).attr('input-title');
        var inputIndex = $(e).attr('input-index');
        var defaultValue = $(e).attr('default-value');
        var input = $.div('form-section-input').attr({
            'input-type': inputType,
            'input-index': inputIndex,
        });
        // Parse input
        switch (inputType) {
            case 'number':
                $.textinput(inputTitle).find('input').attr('type', 'number').end().appendTo(input);
                break;
            case 'dropdown':
                var dropdownName = $(e).attr('dropdown-list');
                $.dropdown(inputTitle, dropdowns[dropdownName]).appendTo(input);
                break;
            default:
                $.textinput(inputTitle).appendTo(input);
                break;
        }
        // Set default value
        input.find('input').val(defaultValue);
        // Append input
        $(e).after(input).remove();
    });
    $('.form-button').each(function (i, e) {
        // Set handler
        switch ($(e).attr('button-index')) {
            case '1':
                var handler = uploadData;
                break;
            case '2':
                var handler = setDefault;
                break;
        }
        // Variables
        var buttonText = $(e).attr('button-text');
        var button = $.button(buttonText, 'form-button', handler).ripple().attr({
            float: "1-2-3"
        });
        // Append button
        $(e).after(button).remove();
    });
}
function parseInputsToData() {
    // Variables
    var data = {};
    // Iterate each container (Player - Enemy)
    $('.form-container').each(function (i, e) {
        // Variables
        var sections = $(e).find('.form-section');
        var user = {
            Cards: []
        };
        // First section
        user['Username'] = sections.eq(0).children('[input-index="5"]').find('input').val();
        user['KingLevel'] = sections.eq(0).children('[input-index="1"]').find('input').val();
        // Second section
        $(e).find('.form-section-card').each(function (i, e) {
            // Variables
            var cardName = $(e).children('[input-index="2"]').find('input').val();
            var cardLevel = $(e).children('[input-index="3"]').find('input').val();
            // Push card
            if (cardName.trim() != '' && cardLevel.trim() != '') {
                user.Cards.push({
                    'CardName': cardName,
                    'CardLevel': cardLevel,
                });
            }
        });
        // Push data
        if (i == 0)
            data['Player'] = user;
        else
            data['Enemy'] = user;
    });
    return data;
}
function uploadData() {
    // Variables
    var data = parseInputsToData();
    console.log('Upload Data', data);
}
function setDefault() {
    // Variables
    var data = parseInputsToData();
    // Verbose
    $.snackbar('Setting Default Info...');
    // Ajax
    $.get('Files/Handlers/set-default.php', data['Player'], function (a, b) {
        $.snackbar('Loading Finished');
    });
}
//# sourceMappingURL=Index.js.map