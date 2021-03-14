var Bridge;
(function (Bridge) {
    var Sorter = /** @class */ (function () {
        function Sorter(sortImple) {
            this.sortImple = sortImple;
        }
        Sorter.prototype.Sort = function (array) {
            this.sortImple.sort(array);
        };
        return Sorter;
    }());
    Bridge.Sorter = Sorter;
})(Bridge || (Bridge = {}));
//# sourceMappingURL=Sorter.js.map