import { Song } from "./Song";

export interface PlayerInterface {
    readonly currentSong: Song | undefined;
    readonly isPlaying: boolean;
    play(song: Song): void;
    pause(): void;
    resume(): void;
    makeFavorite(): void;
}

export class Player implements PlayerInterface {
    private _isPlaying: boolean;
    private _currentSong: Song | undefined;

    constructor(initialSong?: Song) {
        this._currentSong = initialSong;
        this._isPlaying = initialSong === undefined;
    }

    get currentSong(): Song | undefined {
        return this._currentSong;
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    play(song: Song) {
        this._currentSong = song;
        this._isPlaying = true;
    }

    pause() {
        this._isPlaying = false;
    }

    resume() {
        if (this._isPlaying) {
            throw new Error("Current song is already playing.");
        }

        this._isPlaying = true;
    }

    stop() {
        this._isPlaying = false;
    }

    makeFavorite() {
        this._currentSong?.setFavorite(true);
    }
}
