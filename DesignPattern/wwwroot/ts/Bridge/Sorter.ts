namespace Bridge {
    export class Sorter {
        private sortImple: SortImple;

        constructor(sortImple: SortImple) {
            this.sortImple = sortImple;
        }

        public Sort(array: Object[]): void {
            this.sortImple.sort(array);
        }
    }
}