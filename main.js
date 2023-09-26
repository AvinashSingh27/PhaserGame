// Initialize Phaser game
var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
});

function preload() {
    // Load assets needed for the loading screen
    this.load.image('loading', 'assets/loading.png');
}

function create() {
    // Display loading screen
    var loadingScreen = this.add.image(400, 300, 'loading');
    
    // Add loading text
    var loadingText = this.add.text(400, 450, 'Loading...', {
        fontSize: '24px',
        fill: '#ffffff'
    });
    loadingText.setOrigin(0.5);

    // Simulate loading process (e.g., load assets, data, etc.)
    setTimeout(function () {
        // After a delay (simulating loading), transition to the menu screen
        game.scene.start('menu');
    }, 2000);
}

// Create the menu screen
var MenuScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MenuScene() {
        Phaser.Scene.call(this, { key: 'menu' });
    },

    create: function () {
        // Add menu screen elements (e.g., buttons)
        var playButton = this.add.text(400, 300, 'Play', {
            fontSize: '32px',
            fill: '#ffffff'
        });
        playButton.setOrigin(0.5);
        playButton.setInteractive();

        // Handle button click event
        playButton.on('pointerup', function () {
            // Start the game or transition to your game scene here
            console.log('Play button clicked! Start the game.');
        });
    }
});

// Add the menu scene to the game
game.scene.add('menu', MenuScene);
