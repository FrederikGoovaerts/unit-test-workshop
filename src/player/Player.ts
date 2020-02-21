import { SongInterface } from "./Song";

export interface PlayerInterface {
    readonly currentSong: SongInterface | undefined;
    readonly isPlaying: boolean;
    play(song: SongInterface): void;
    pause(): void;
    resume(): void;
    makeFavorite(): void;
}

export class Player implements PlayerInterface {
    private _isPlaying: boolean;
    private _currentSong: SongInterface | undefined;

    constructor(initialSong?: SongInterface) {
        this._currentSong = initialSong;
        this._isPlaying = initialSong === undefined;
    }

    get currentSong(): SongInterface | undefined {
        return this._currentSong;
    }

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    play(song: SongInterface) {
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
        this._currentSong = undefined;
        this._isPlaying = false;
    }

    makeFavorite() {
        this._currentSong?.setFavorite(true);
    }
}
