import screen from './screen.js';
export default{
    isMuted: false,

    playSong(songFile){
        if(this.isMuted) return;

        let audio = new Audio(`/sfx/${songFile}`);
        audio.play();
    },

    toggleAudio(){
        this.isMuted = !this.isMuted;
        screen.updateAudioButtonElement(this.isMuted);
    }
}