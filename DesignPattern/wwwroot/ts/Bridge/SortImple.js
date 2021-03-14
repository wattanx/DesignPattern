var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bridge;
(function (Bridge) {
    var SortImple = /** @class */ (function () {
        function SortImple() {
        }
        return SortImple;
    }());
    Bridge.SortImple = SortImple;
    var QuickSortImple = /** @class */ (function (_super) {
        __extends(QuickSortImple, _super);
        function QuickSortImple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * クイックソートでソートする
         * @param array
         */
        QuickSortImple.prototype.sort = function (array) {
        };
        return QuickSortImple;
    }(SortImple));
    Bridge.QuickSortImple = QuickSortImple;
    var BubbleSortImple = /** @class */ (function (_super) {
        __extends(BubbleSortImple, _super);
        function BubbleSortImple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * バブルソートでソートする
         * @param array
         */
        BubbleSortImple.prototype.sort = function (array) {
        };
        return BubbleSortImple;
    }(SortImple));
    Bridge.BubbleSortImple = BubbleSortImple;
})(Bridge || (Bridge = {}));
//# sourceMappingURL=SortImple.js.map