var Game = {
    create: function() {
        game.stage.backgroundColor = '#789ABC';

        this.board = [];

        for (var i = 0; i < 10; i++) {
            this.board[i] = [];

            for (var j = 0; j < 10; j++) {
                this.board[i][j] = game.add.sprite(
                    SPRITE_SIZE / 2 + i * SPRITE_SIZE,
                    SPRITE_SIZE / 2 + j * SPRITE_SIZE,
                    'sprite' + Math.floor((Math.random() * SPRITES_NB) + 1)
                );

                this.board[i][j].inputEnabled = true;
                this.board[i][j].events.onInputDown.add(this.onDown, this);
                this.board[i][j].anchor.setTo(0.5, 0.5);
                this.board[i][j].angle = Math.floor((Math.random() * 4)) * 90;
            }
        }

        this.rotations = [];
    },

    update: function() {
        for (var i = 0; i < this.rotations.length; i++) {
            this.rotations[i].sprite.angle += 10;
            this.rotations[i].angle -= 10;

            if (this.rotations[i].angle === 0) {
                this.rotations.splice(i, 1);
                i--;
            }
        }
    },

    onDown: function(sprite, pointer) {
        this.rotations.push(
            {
                sprite: sprite,
                angle: 90
            }
        );
    }
};
