namespace Bridge {
    export abstract class SortImple {
        public abstract sort(array: Object[]): void;
    }

    export class QuickSortImple extends SortImple {
        /**
         * クイックソートでソートする
         * @param array
         */
        public sort(array: Object[]): void {

        }
    }

    export class BubbleSortImple extends SortImple {
        /**
         * バブルソートでソートする
         * @param array
         */
        public sort(array: Object[]): void {

        }
    }
}