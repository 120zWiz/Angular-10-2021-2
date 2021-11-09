export class Item {
    constructor(
        public id: number,
        public title: string,
        public imgSrc: string,
        public price: number,
        public category: string,
        public isActive: boolean
    ) {}
}