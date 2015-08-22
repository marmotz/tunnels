var SPRITES_NB  = 5;
var SPRITE_SIZE = 32;

var game = new Phaser.Game(320, 320, Phaser.AUTO, '');

game.state.add('Preload', Preload);
game.state.add('Game', Game);

game.state.start('Preload');
