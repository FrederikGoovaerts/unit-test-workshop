export interface SongInterface {
    setFavorite(value: boolean): void;
    isFavorite: boolean;
}

export class Song {
    private _isFavorite: boolean;

    constructor() {
        this._isFavorite = false;
    }

    get isFavorite() {
        return this._isFavorite;
    }

    setFavorite(value: boolean) {
        this._isFavorite = value;
    }
}
