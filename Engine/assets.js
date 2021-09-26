class Assets {
    static audio = {};

    static playAudio(asset) {
        Assets.audio[asset].play();
    }
}