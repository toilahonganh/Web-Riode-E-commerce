"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var ProductController = function () {
    var _classDecorators = [(0, common_1.Controller)('product')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createProduct_decorators;
    var _getAllProducts_decorators;
    var _getAll_decorators;
    var _getProductByCategory_decorators;
    var _editUser_decorators;
    var _deleteProduct_decorators;
    var _searchProductById_decorators;
    var _searchProducts_decorators;
    var ProductController = _classThis = /** @class */ (function () {
        function ProductController_1(productService) {
            this.productService = (__runInitializers(this, _instanceExtraInitializers), productService);
        }
        ProductController_1.prototype.createProduct = function (createProductDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productService.createProduct(createProductDto)];
                });
            });
        };
        ProductController_1.prototype.getAllProducts = function () {
            return __awaiter(this, arguments, void 0, function (page, limit) {
                var _a, products, totalProducts, totalPages, currentPage, error_1;
                if (page === void 0) { page = 1; }
                if (limit === void 0) { limit = 5; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.productService.findAllProducts(page, limit)];
                        case 1:
                            _a = _b.sent(), products = _a.products, totalProducts = _a.totalProducts, totalPages = _a.totalPages, currentPage = _a.currentPage;
                            return [2 /*return*/, {
                                    products: products,
                                    totalProducts: totalProducts,
                                    totalPages: totalPages,
                                    currentPage: currentPage,
                                }];
                        case 2:
                            error_1 = _b.sent();
                            throw new common_1.HttpException('Error fetching products', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ProductController_1.prototype.getAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, products, totalProducts, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.productService.findAll()];
                        case 1:
                            _a = _b.sent(), products = _a.products, totalProducts = _a.totalProducts;
                            return [2 /*return*/, {
                                    products: products,
                                    totalProducts: totalProducts,
                                }];
                        case 2:
                            error_2 = _b.sent();
                            throw new common_1.HttpException('Error fetching products', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ProductController_1.prototype.getProductByCategory = function (category) {
            return __awaiter(this, void 0, void 0, function () {
                var products, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.productService.findProductByCategory(category)];
                        case 1:
                            products = _a.sent();
                            return [2 /*return*/, { products: products }];
                        case 2:
                            error_3 = _a.sent();
                            throw new common_1.HttpException('Error fetching products', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ProductController_1.prototype.editUser = function (id, updateData) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productService.editProduct(id, updateData)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ProductController_1.prototype.deleteProduct = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.productService.deleteProduct(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        ProductController_1.prototype.searchProductById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.productService.findProductById(id)];
                });
            });
        };
        ProductController_1.prototype.searchProducts = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var products, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!query) {
                                throw new common_1.HttpException('Query parameter must be provided', common_1.HttpStatus.BAD_REQUEST);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.productService.findAllBySearch(query)];
                        case 2:
                            products = _a.sent();
                            if (products.length === 0) {
                                throw new common_1.HttpException('No products found', common_1.HttpStatus.NOT_FOUND);
                            }
                            return [2 /*return*/, products];
                        case 3:
                            error_4 = _a.sent();
                            throw new common_1.HttpException('Error searching for products', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return ProductController_1;
    }());
    __setFunctionName(_classThis, "ProductController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createProduct_decorators = [(0, common_1.Post)()];
        _getAllProducts_decorators = [(0, common_1.Get)('get-all-products')];
        _getAll_decorators = [(0, common_1.Get)('get-all')];
        _getProductByCategory_decorators = [(0, common_1.Get)('get-products-category')];
        _editUser_decorators = [(0, common_1.Put)('/:id')];
        _deleteProduct_decorators = [(0, common_1.Delete)('/:id')];
        _searchProductById_decorators = [(0, common_1.Get)('/:id')];
        _searchProducts_decorators = [(0, common_1.Get)()];
        __esDecorate(_classThis, null, _createProduct_decorators, { kind: "method", name: "createProduct", static: false, private: false, access: { has: function (obj) { return "createProduct" in obj; }, get: function (obj) { return obj.createProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllProducts_decorators, { kind: "method", name: "getAllProducts", static: false, private: false, access: { has: function (obj) { return "getAllProducts" in obj; }, get: function (obj) { return obj.getAllProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAll_decorators, { kind: "method", name: "getAll", static: false, private: false, access: { has: function (obj) { return "getAll" in obj; }, get: function (obj) { return obj.getAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProductByCategory_decorators, { kind: "method", name: "getProductByCategory", static: false, private: false, access: { has: function (obj) { return "getProductByCategory" in obj; }, get: function (obj) { return obj.getProductByCategory; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _editUser_decorators, { kind: "method", name: "editUser", static: false, private: false, access: { has: function (obj) { return "editUser" in obj; }, get: function (obj) { return obj.editUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteProduct_decorators, { kind: "method", name: "deleteProduct", static: false, private: false, access: { has: function (obj) { return "deleteProduct" in obj; }, get: function (obj) { return obj.deleteProduct; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchProductById_decorators, { kind: "method", name: "searchProductById", static: false, private: false, access: { has: function (obj) { return "searchProductById" in obj; }, get: function (obj) { return obj.searchProductById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchProducts_decorators, { kind: "method", name: "searchProducts", static: false, private: false, access: { has: function (obj) { return "searchProducts" in obj; }, get: function (obj) { return obj.searchProducts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductController = _classThis;
}();
exports.ProductController = ProductController;
