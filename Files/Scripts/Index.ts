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
    // Create inputs
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
        // Variables
        var buttonText = $(e).attr('button-text')
        var button = $.button(buttonText, 'form-button', uploadData).ripple().attr({
            float: "1-2-3"
        })

        // Append button
        $(e).after(button).remove()
    })
}

function uploadData() {
    alert('hello world')
}