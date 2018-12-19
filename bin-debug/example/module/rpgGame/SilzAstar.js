var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SilzAstar = (function () {
    /**
     * @param    mapdata        地图数据
     */
    function SilzAstar(mapdata) {
        /**
         * 寻路方式，8方向和4方向，有效值为8和4
         */
        this.WorkMode = 8;
        this.makeGrid(mapdata);
    }
    /**
     * @param        xnow    当前坐标X(世界坐标)
     * @param        ynow    当前坐标Y(世界坐标)
     * @param        xpos    目标点X(世界坐标)
     * @param        ypos    目标点Y(世界坐标)
     */
    SilzAstar.prototype.find = function (xnow, ynow, xpos, ypos) {
        xpos = Math.floor(xpos / RpgGameData.GameCellWidth);
        ypos = Math.floor(ypos / RpgGameData.GameCellHeight);
        xpos = Math.min(xpos, this._grid.numCols - 1);
        ypos = Math.min(ypos, this._grid.numRows - 1);
        this._grid.setEndNode(xpos, ypos); //1
        xnow = Math.floor(xnow / RpgGameData.GameCellWidth);
        ynow = Math.floor(ynow / RpgGameData.GameCellHeight);
        this._grid.setStartNode(xnow, ynow); //2
        var time = egret.getTimer();
        if (this._astar.findPath()) {
            // this._astar.floyd();
            // this._path = this._astar.floydPath;
            this._path = this._astar.path;
            // time = egret.getTimer() - time;
            // console.log("[SilzAstar]", time + "ms   length:" + this._astar.path.length);
            return this._path;
        }
        else {
            this._grid.setEndNode(xpos - 1, ypos - 1);
            time = egret.getTimer() - time;
            console.log("[SilzAstar]", time + "ms 找不到");
        }
        return null;
    };
    SilzAstar.prototype.makeGrid = function (data) {
        var rows = data.length;
        var cols = data[0].length;
        this._grid = new Grid(cols, rows);
        var px;
        var py;
        for (py = 0; py < rows; py++) {
            for (px = 0; px < cols; px++) {
                this._grid.setWalkable(px, py, data[py][px] == 1);
            }
        }
        if (this.WorkMode == 4)
            this._grid.calculateLinks(1);
        else
            this._grid.calculateLinks();
        this._astar = new AStar(this._grid);
    };
    return SilzAstar;
}());
__reflect(SilzAstar.prototype, "SilzAstar");
var AStar = (function () {
    function AStar(grid) {
        this._straightCost = 1.0;
        this._diagCost = Math.SQRT2;
        this._nowversion = 1;
        this.TwoOneTwoZero = 2 * Math.cos(Math.PI / 3);
        this._grid = grid;
        this._heuristic = this.manhattan;
    }
    AStar.prototype.justMin = function (x, y) {
        return x.f < y.f;
    };
    AStar.prototype.findPath = function () {
        this._endNode = this._grid.endNode;
        this._nowversion++;
        this._startNode = this._grid.startNode;
        this._open = new BinaryHeap(this.justMin);
        this._startNode.g = 0;
        return this.search();
    };
    AStar.prototype.floyd = function () {
        if (this.path == null)
            return;
        this._floydPath = this.path.concat();
        var len = this._floydPath.length;
        if (len > 2) {
            var vector = new PathNode(0, 0);
            var tempVector = new PathNode(0, 0);
            this.floydVector(vector, this._floydPath[len - 1], this._floydPath[len - 2]);
            for (var i = this._floydPath.length - 3; i >= 0; i--) {
                this.floydVector(tempVector, this._floydPath[i + 1], this._floydPath[i]);
                if (vector.x == tempVector.x && vector.y == tempVector.y) {
                    this._floydPath.splice(i + 1, 1);
                }
                else {
                    vector.x = tempVector.x;
                    vector.y = tempVector.y;
                }
            }
        }
        len = this._floydPath.length;
        for (i = len - 1; i >= 0; i--) {
            for (var j = 0; j <= i - 2; j++) {
                if (this.floydCrossAble(this._floydPath[i], this._floydPath[j])) {
                    for (var k = i - 1; k > j; k--) {
                        this._floydPath.splice(k, 1);
                    }
                    i = j;
                    len = this._floydPath.length;
                    break;
                }
            }
        }
    };
    AStar.prototype.floydCrossAble = function (n1, n2) {
        var ps = this.bresenhamNodes(new egret.Point(n1.x, n1.y), new egret.Point(n2.x, n2.y));
        for (var i = ps.length - 2; i > 0; i--) {
            if (!this._grid.getNode(ps[i].x, ps[i].y).walkable) {
                return false;
            }
        }
        return true;
    };
    AStar.prototype.bresenhamNodes = function (p1, p2) {
        var steep = Math.abs(p2.y - p1.y) > Math.abs(p2.x - p1.x);
        if (steep) {
            var temp = p1.x;
            p1.x = p1.y;
            p1.y = temp;
            temp = p2.x;
            p2.x = p2.y;
            p2.y = temp;
        }
        var stepX = p2.x > p1.x ? 1 : (p2.x < p1.x ? -1 : 0);
        var stepY = p2.y > p1.y ? 1 : (p2.y < p1.y ? -1 : 0);
        var deltay = (p2.y - p1.y) / Math.abs(p2.x - p1.x);
        var ret = [];
        var nowX = p1.x + stepX;
        var nowY = p1.y + deltay;
        if (steep) {
            ret.push(new egret.Point(p1.y, p1.x));
        }
        else {
            ret.push(new egret.Point(p1.x, p1.y));
        }
        while (nowX != p2.x) {
            var fy = Math.floor(nowY);
            var cy = Math.ceil(nowY);
            if (steep) {
                ret.push(new egret.Point(fy, nowX));
            }
            else {
                ret.push(new egret.Point(nowX, fy));
            }
            if (fy != cy) {
                if (steep) {
                    ret.push(new egret.Point(cy, nowX));
                }
                else {
                    ret.push(new egret.Point(nowX, cy));
                }
            }
            nowX += stepX;
            nowY += deltay;
        }
        if (steep) {
            ret.push(new egret.Point(p2.y, p2.x));
        }
        else {
            ret.push(new egret.Point(p2.x, p2.y));
        }
        return ret;
    };
    AStar.prototype.floydVector = function (target, n1, n2) {
        target.x = n1.x - n2.x;
        target.y = n1.y - n2.y;
    };
    AStar.prototype.search = function () {
        var node = this._startNode;
        node.version = this._nowversion;
        while (node != this._endNode) {
            var len = node.links.length;
            for (var i = 0; i < len; i++) {
                var test = node.links[i].node;
                if (!test.walkable) {
                    continue;
                }
                var cost = node.links[i].cost;
                var g = node.g + cost;
                var h = this._heuristic(test);
                var f = g + h;
                if (test.version == this._nowversion) {
                    if (test.f > f) {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                    }
                }
                else {
                    test.f = f;
                    test.g = g;
                    test.h = h;
                    test.parent = node;
                    this._open.ins(test);
                    test.version = this._nowversion;
                }
            }
            if (this._open.a.length == 1) {
                return false;
            }
            node = this._open.pop();
        }
        this.buildPath();
        return true;
    };
    AStar.prototype.buildPath = function () {
        this._path = [];
        var node = this._endNode;
        this._path.push(node);
        while (node != this._startNode) {
            node = node.parent;
            this._path.unshift(node);
        }
    };
    Object.defineProperty(AStar.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AStar.prototype, "floydPath", {
        get: function () {
            return this._floydPath;
        },
        enumerable: true,
        configurable: true
    });
    AStar.prototype.manhattan = function (node) {
        return Math.abs(node.x - this._endNode.x) + Math.abs(node.y - this._endNode.y);
    };
    AStar.prototype.manhattan2 = function (node) {
        var dx = Math.abs(node.x - this._endNode.x);
        var dy = Math.abs(node.y - this._endNode.y);
        return dx + dy + Math.abs(dx - dy) / 1000;
    };
    AStar.prototype.euclidian = function (node) {
        var dx = node.x - this._endNode.x;
        var dy = node.y - this._endNode.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    AStar.prototype.chineseCheckersEuclidian2 = function (node) {
        var y = node.y / this.TwoOneTwoZero;
        var x = node.x + node.y / 2;
        var dx = x - this._endNode.x - this._endNode.y / 2;
        var dy = y - this._endNode.y / this.TwoOneTwoZero;
        return this.sqrt(dx * dx + dy * dy);
    };
    AStar.prototype.sqrt = function (x) {
        return Math.sqrt(x);
    };
    AStar.prototype.euclidian2 = function (node) {
        var dx = node.x - this._endNode.x;
        var dy = node.y - this._endNode.y;
        return dx * dx + dy * dy;
    };
    AStar.prototype.diagonal = function (node) {
        var dx = Math.abs(node.x - this._endNode.x);
        var dy = Math.abs(node.y - this._endNode.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
    };
    return AStar;
}());
__reflect(AStar.prototype, "AStar");
var BinaryHeap = (function () {
    function BinaryHeap(justMinFun) {
        if (justMinFun === void 0) { justMinFun = null; }
        this.a = [];
        this.justMinFun = function (x, y) {
            return x < y;
        };
        this.a.push(-1);
        if (justMinFun != null) {
            this.justMinFun = justMinFun;
        }
    }
    BinaryHeap.prototype.ins = function (value) {
        var p = this.a.length;
        this.a[p] = value;
        var pp = p >> 1;
        while (p > 1 && this.justMinFun(this.a[p], this.a[pp])) {
            var temp = this.a[p];
            this.a[p] = this.a[pp];
            this.a[pp] = temp;
            p = pp;
            pp = p >> 1;
        }
    };
    BinaryHeap.prototype.pop = function () {
        var min = this.a[1];
        this.a[1] = this.a[this.a.length - 1];
        this.a.pop();
        var p = 1;
        var l = this.a.length;
        var sp1 = p << 1;
        var sp2 = sp1 + 1;
        while (sp1 < l) {
            if (sp2 < l) {
                var minp = this.justMinFun(this.a[sp2], this.a[sp1]) ? sp2 : sp1;
            }
            else {
                minp = sp1;
            }
            if (this.justMinFun(this.a[minp], this.a[p])) {
                var temp = this.a[p];
                this.a[p] = this.a[minp];
                this.a[minp] = temp;
                p = minp;
                sp1 = p << 1;
                sp2 = sp1 + 1;
            }
            else {
                break;
            }
        }
        return min;
    };
    return BinaryHeap;
}());
__reflect(BinaryHeap.prototype, "BinaryHeap");
var Grid = (function () {
    function Grid(numCols, numRows) {
        this._straightCost = 1.0;
        this._diagCost = Math.SQRT2;
        this._numCols = numCols;
        this._numRows = numRows;
        this._nodes = [];
        for (var i = 0; i < this._numCols; i++) {
            this._nodes[i] = [];
            for (var j = 0; j < this._numRows; j++) {
                this._nodes[i][j] = new PathNode(i, j);
            }
        }
    }
    /**
     *
     * @param   type    0八方向 1四方向 2跳棋
     */
    Grid.prototype.calculateLinks = function (type) {
        if (type === void 0) { type = 0; }
        this.type = type;
        for (var i = 0; i < this._numCols; i++) {
            for (var j = 0; j < this._numRows; j++) {
                this.initNodeLink(this._nodes[i][j], type);
            }
        }
    };
    Grid.prototype.getType = function () {
        return this.type;
    };
    /**
     *
     * @param   node
     * @param   type    0八方向 1四方向 2跳棋
     */
    Grid.prototype.initNodeLink = function (node, type) {
        var startX = Math.max(0, node.x - 1);
        var endX = Math.min(this.numCols - 1, node.x + 1);
        var startY = Math.max(0, node.y - 1);
        var endY = Math.min(this.numRows - 1, node.y + 1);
        node.links = [];
        for (var i = startX; i <= endX; i++) {
            for (var j = startY; j <= endY; j++) {
                var test = this.getNode(i, j);
                if (test == node || !test.walkable) {
                    continue;
                }
                if (type != 2 && i != node.x && j != node.y) {
                    var test2 = this.getNode(node.x, j);
                    if (!test2.walkable) {
                        continue;
                    }
                    test2 = this.getNode(i, node.y);
                    if (!test2.walkable) {
                        continue;
                    }
                }
                var cost = this._straightCost;
                if (!((node.x == test.x) || (node.y == test.y))) {
                    if (type == 1) {
                        continue;
                    }
                    if (type == 2 && (node.x - test.x) * (node.y - test.y) == 1) {
                        continue;
                    }
                    if (type == 2) {
                        cost = this._straightCost;
                    }
                    else {
                        cost = this._diagCost;
                    }
                }
                node.links.push(new Link(test, cost));
            }
        }
    };
    Grid.prototype.getNode = function (x, y) {
        return this._nodes[x][y];
    };
    Grid.prototype.setEndNode = function (x, y) {
        this._endNode = this._nodes[x][y];
    };
    Grid.prototype.setStartNode = function (x, y) {
        this._startNode = this._nodes[x][y];
    };
    Grid.prototype.setWalkable = function (x, y, value) {
        this._nodes[x][y].walkable = value;
    };
    Object.defineProperty(Grid.prototype, "endNode", {
        get: function () {
            return this._endNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numCols", {
        get: function () {
            return this._numCols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "numRows", {
        get: function () {
            return this._numRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "startNode", {
        get: function () {
            return this._startNode;
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
__reflect(Grid.prototype, "Grid");
var Link = (function () {
    function Link(node, cost) {
        this.node = node;
        this.cost = cost;
    }
    return Link;
}());
__reflect(Link.prototype, "Link");
var PathNode = (function () {
    //public index:number;
    function PathNode(x, y) {
        this.walkable = true;
        //public costMultiplier:number = 1.0;
        this.version = 1;
        this.x = x;
        this.y = y;
    }
    PathNode.prototype.toString = function () {
        return "x:" + this.x + " y:" + this.y;
    };
    return PathNode;
}());
__reflect(PathNode.prototype, "PathNode");
//# sourceMappingURL=SilzAstar.js.map