
class Media {
    constructor(title, author, year) {
        this._title = title
        this._author = author
        this._year = year
    }

    get title() {
        console.log("getter called")
        return this._title
    }

}

class Book extends Media {
    constructor(title, author, year, pageCount) {
        super(title, author, year)
        this._pageCount = pageCount
    }
}

class Film extends Media {
    constructor(title, author, year, duration) {
        super(title, author, year)
        this._duration = duration
    }
}

class Magazine extends Media {
    constructor(title, author, year, cost) {
        super(title, author, year)
        this._cost = cost
    }
}

class Library{
    constructor(MediaArray) {
        this._collection = MediaArray
    }
    addMedia(media) {
        this._collection.push(media)
        return this._collection
    }

    removeMedia(media) {
        this._collection.remove(media)
        return this._collection
    }

    findMedia(title) {
        for (let i = 0; i < _collection.length; i++) {
            if (_collection[i]._title === title) {
                return _collection[i]
            }
        }
    }
}
