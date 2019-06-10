// Types
enum cards {
    "Archers",
    "Baby Dragon",
    "Balloon",
    "Bandit",
    "Barbarians",
    "Bats",
    "Battle Ram",
    "Bomber",
    "Bowler",
    "Cannon Cart",
    "Dark Prince",
    "Dart Goblin",
    "Electro Dragon",
    "Electro Wizard",
    "Elite Barbarians",
    "Executioner",
    "Fire Spirits",
    "Flying Machine",
    "Giant",
    "Giant Skeleton",
    "Goblin Gang",
    "Goblin Giant",
    "Goblins",
    "Golem",
    "Golemite",
    "Guards",
    "Hog Rider",
    "Hunter",
    "Ice Golem",
    "Ice Spirit",
    "Ice Wizard",
    "Inferno Dragon",
    "Knight",
    "Lava Hound",
    "Lava Pup",
    "Lumberjack",
    "Magic Archer",
    "Mega Minion",
    "Mega Knight",
    "Mini P.E.K.K.A.",
    "Miner",
    "Minions",
    "Minion Horde",
    "Musketeer",
    "Night Witch",
    "P.E.K.K.A.",
    "Prince",
    "Princess",
    "Ram Rider",
    "Rascal Boy",
    "Rascal Girl",
    "Royal Ghost",
    "Royal Giant",
    "Royal Hogs",
    "Royal Recruits",
    "Skeletons",
    "Skeleton Army",
    "Skeleton Barrel",
    "Sparky",
    "Spear Goblins",
    "Three Musketeers",
    "Valkyrie",
    "Wall Breakers",
    "Witch",
    "Wizard",
    "Zappies",
    "Bomb Tower",
    "Cannon",
    "Inferno Tower",
    "Mortar",
    "Tesla",
    "X-Bow",
    "Barbarian Hut",
    "Elixir Collector",
    "Furnace",
    "Goblin Hut",
    "Tombstone",
    "Arrows",
    "Barbarian Barrel",
    "Fireball",
    "Giant Snowball",
    "Lightning",
    "Poison",
    "Rocket",
    "The Log",
    "Tornado",
    "Zap",
    "Goblin Barrel",
    "Graveyard"
}

// Variables
let dropdowns = {
    cards: enumKeys(cards)
}

// Functions
function start() {
    // Initialize
    initialize();
}
function initialize() {
    $('.form-section').attr('float', '0-1-1')
    $('.form-section-input').each(function(i, e) {
        // Variables
        var inputType = $(e).attr('input-type')
        var inputTitle = $(e).attr('input-title')
        var inputIndex = $(e).attr('input-index')
        var defaultValue = $(e).attr('default-value')
        var input = $.div('form-section-input').attr({
            'input-type': inputType,
            'input-index': inputIndex,
        })
        
        // Parse input
        switch (inputType) {
            case 'number':
                $.textinput(inputTitle).find('input').attr('type', 'number').end().appendTo(input)
                break

            case 'dropdown':
                var dropdownName = $(e).attr('dropdown-list')
                $.dropdown(inputTitle, dropdowns[dropdownName]).appendTo(input)
                break

            default:
                $.textinput(inputTitle).appendTo(input)
                break
        }

        // Set default value
        input.find('input').val(defaultValue)

        // Append input
        $(e).after(input).remove()
    })
    $('.form-button').each(function(i, e) {
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
        var buttonText = $(e).attr('button-text')
        var button = $.button(buttonText, 'form-button', handler).ripple().attr({
            float: "1-2-3"
        })

        // Append button
        $(e).after(button).remove()
    })
}

function parseInputsToData() {
    // Variables
    var data = {}

    // Iterate each container (Player - Enemy)
    $('.form-container').each(function(i, e) {
        // Variables
        var sections = $(e).find('.form-section')
        var user = {
            Cards: []
        }

        // First section
        user['Username'] = sections.eq(0).children('[input-index="5"]').find('input').val()
        user['KingLevel'] = sections.eq(0).children('[input-index="1"]').find('input').val()

        // Second section
        $(e).find('.form-section-card').each(function(i, e) {
            // Variables
            var cardName = $(e).children('[input-index="2"]').find('input').val()
            var cardLevel = $(e).children('[input-index="3"]').find('input').val()

            // Push card
            if (cardName.trim() != '' && cardLevel.trim() != '') {
                user.Cards.push({ 
                    'CardName': cardName,
                    'CardLevel': cardLevel,
                })
            }
        })
        
        // Push data
        if (i == 0)
            data['Player'] = user
        else
            data['Enemy'] = user
    })

    return data
}

function uploadData() {
    // Variables
    var data = parseInputsToData();

    console.log('Upload Data', data)
}
function setDefault() {
    // Variables
    var data = parseInputsToData();
    
    // Verbose
    $.snackbar('Setting Default Info...')

    // Ajax
    $.get('Files/Handlers/set-default.php', data['Player'], function(a, b) {
        $.snackbar('Loading Finished')
    })
}