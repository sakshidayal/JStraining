class Media {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        console.log(this.constructor.name)
    }
}

class Book extends Media {
    constructor(title, author, year, pageCount) {
        super(title, author, year);
        this.pageCount = pageCount;
    }
}

class Film extends Media {
    constructor(title, author, year, duration) {
        super(title, author, year);
        this.duration = duration;
    }
}

class Magazine extends Media {
    constructor(title, author, year, issueNumber) {
        super(title, author, year);
        this.issueNumber = issueNumber;
    }
}

class Library {
    constructor() {
        this.collection = [];
    }

    async addMedia(media) {
        await this.collection.push(media);
    }

    async removeMedia(title) {
        this.collection = await this.collection.filter(media => media.title !== title);
    }

    async findMediaByTitle(title) {
        await this.collection.find(media => media.title === title);
    }

    async findMediaByAuthor(author) {
        await this.collection.find(media => media.author === author);
    }

    async displayLibrary() {
        this.collection.forEach(media => {
            await console.log(`Title: ${media.title}, Author: ${media.author}, Year: ${media.year}`);
            if (media instanceof Book) {
                await console.log(`Number of page: ${media.pageCount}`);
            } else if (media instanceof Film) {
                await console.log(`duration: ${media.duration} minutes`);
            } else if (media instanceof Magazine) {
                await console.log(`Magazine number: ${media.issueNumber}`);
            }
            await console.log('----------------------');
        });
    }

    async saveLibrary() {
        const jsonLibrary = await JSON.stringify(this.collection)
        // await saveInAFile(jsonLibrary)
        await console.log("Library saved")
    }

    async loadLibrary(jsonLibrary) {
        this.collection = await JSON.parse(jsonLibrary)
        // etc.
    }
}