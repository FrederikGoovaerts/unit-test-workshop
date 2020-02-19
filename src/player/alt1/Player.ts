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
    private _songState: Map<Song, boolean>;
    private _currentSong: Song | undefined;

    constructor(initialSong?: Song) {
        this._songState = new Map();
        this._currentSong = initialSong;
    }

    get currentSong(): Song | undefined {
        return this._currentSong;
    }

    get isPlaying(): boolean {
        if (!this._currentSong) {
            return false;
        }
        return !!this._songState.get(this._currentSong);
    }

    play(song: Song) {
        this._currentSong = song;
        this._songState.set(song, true);
    }

    pause() {
        if (this._currentSong) {
            this._songState.set(this._currentSong, false);
        }
    }

    resume() {
        if (this._currentSong && this._songState.get(this._currentSong)) {
            throw new Error("Current song is already playing.");
        }
        if (!this._currentSong) {
            return;
        }
        this._songState.set(this._currentSong, true);
    }

    stop() {
        if (this._currentSong) {
            this._songState.set(this._currentSong, false);
        }
        this._currentSong = undefined;
    }

    makeFavorite() {
        this._currentSong?.setFavorite(true);
    }
}
