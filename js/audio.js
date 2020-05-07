export default{
    isMuted = false,

    playSong(songFile){
        if(this.isMuted) return;

        let audio = new Audio(`/sfx/${songFile}`);
        audio.play();
    }
}