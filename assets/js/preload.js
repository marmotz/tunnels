var Preload = {
    preload: function() {
        for (var i = 1; i <= SPRITES_NB; i++) {
            game.load.image('sprite' + i, './assets/images/sprite' + i + '.png');
        }
    },

    create: function() {
        game.state.start('Game');
    }
};
