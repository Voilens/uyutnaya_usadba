const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 540,
  parent: "game-container",
  backgroundColor: "#beeacb",
  scene: [LoaderScene, MainMenuScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

// Дальше идет твой код с LoaderScene, MainMenuScene, путь к ассетам: "assets/image/....png"

// this.load.image("soil", "assets/image/zemlya.png");
// this.load.image("house", "assets/image/domik.png");

window.onload = function () {
  new Phaser.Game(config);
}
