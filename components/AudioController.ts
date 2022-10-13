import useSound from 'use-sound'

function AudioController(soundUrl: string, volume: number) {
    const [play, { stop }] = useSound(soundUrl, { volume: volume })
    return { play, stop }
}

export default AudioController
