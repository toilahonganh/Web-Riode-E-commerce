"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var index_1 = require("../index");
var AuthService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthService = _classThis = /** @class */ (function () {
        function AuthService_1(authModel, jwtService) {
            this.authModel = authModel;
            this.jwtService = jwtService;
        }
        /**
         * Refresh access token
         * @param refreshToken - Refresh token
         * @returns Access token if refresh token is valid
         * @throws Error if refresh is invalid
         */
        AuthService_1.prototype.refreshAccessToken = function (refreshToken) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, user, newAccessToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = this.jwtService.verify(refreshToken, {
                                secret: process.env.JWT_REFRESH_SECRET || '123456abc',
                            });
                            return [4 /*yield*/, this.authModel.findById(payload.id).lean()];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                throw new common_1.UnauthorizedException('Refresh token không hợp lệ.');
                            }
                            newAccessToken = this.jwtService.sign({ id: user._id, email: user.email, name: user.name, role: user.role }, { expiresIn: '15m' });
                            return [2 /*return*/, {
                                    accessToken: newAccessToken,
                                    refreshToken: refreshToken,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role,
                                }];
                    }
                });
            });
        };
        /**
         * Signs up a new user by creating an account in the system.
         * @param auth - The authentication details for the new user.
         * @param auth.name - The name of the user.
         * @param auth.email - The email address of the user.
         * @param auth.password - The password for the user (will be hashed before saving).
         * @param auth.phone_number - The phone number of the user.
         * @param auth.address - The address of the user.
         * @returns The created user with the hashed password.
         * @throws Error if the user already exists.
         */
        AuthService_1.prototype.signUp = function (auth) {
            return __awaiter(this, void 0, void 0, function () {
                var name, email, password, phone_number, address, avatar, existingUser, avatarUrl, saltOrRounds, hashedPassword, newUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            name = auth.name, email = auth.email, password = auth.password, phone_number = auth.phone_number, address = auth.address, avatar = auth.avatar;
                            return [4 /*yield*/, this.authModel.findOne({ email: email })];
                        case 1:
                            existingUser = _a.sent();
                            if (existingUser) {
                                throw new common_1.BadRequestException("User already exists!");
                            }
                            avatarUrl = '';
                            if (!avatar) return [3 /*break*/, 3];
                            return [4 /*yield*/, (0, index_1.uploadImage)(avatar)];
                        case 2:
                            avatarUrl = _a.sent();
                            _a.label = 3;
                        case 3:
                            saltOrRounds = 10;
                            return [4 /*yield*/, bcrypt.hash(auth.password, saltOrRounds)];
                        case 4:
                            hashedPassword = _a.sent();
                            return [4 /*yield*/, this.authModel.create(__assign(__assign({}, auth), { password: hashedPassword, avatar: avatarUrl }))];
                        case 5:
                            newUser = _a.sent();
                            return [2 /*return*/, newUser];
                    }
                });
            });
        };
        /**
         * Validate user credentials.
         * @param email - The email address of the user.
         * @param password - The password of the user (to be verified).
         * @returns The authenticated user if the credentials are valid.
         * @throws Error if the credentials are invalid or the user does not exist.
         */
        AuthService_1.prototype.validateUser = function (email, password) {
            return __awaiter(this, void 0, void 0, function () {
                var existingUser, isPasswordValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authModel.findOne({ email: email }).lean()];
                        case 1:
                            existingUser = _a.sent();
                            if (!existingUser) {
                                throw new common_1.UnauthorizedException('User is not registered!');
                            }
                            return [4 /*yield*/, bcrypt.compare(password, existingUser.password)];
                        case 2:
                            isPasswordValid = _a.sent();
                            if (!isPasswordValid) {
                                throw new common_1.UnauthorizedException('Invalid password');
                            }
                            return [2 /*return*/, existingUser];
                    }
                });
            });
        };
        /**
        * Login with an account in the system.
        * @param auth - The authentication details for the user attempting to log in.
        * @returns An object containing access and refresh tokens along with user details.
        * @throws Error if the credentials are invalid or the user does not exist.
        */
        AuthService_1.prototype.login = function (auth) {
            return __awaiter(this, void 0, void 0, function () {
                var user, payload, accessToken, refreshToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateUser(auth.email, auth.password)];
                        case 1:
                            user = _a.sent();
                            payload = { id: user._id, email: user.email, name: user.name, role: user.role };
                            accessToken = this.jwtService.sign(payload, { expiresIn: '5d' });
                            refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
                            return [2 /*return*/, {
                                    accessToken: accessToken,
                                    refreshToken: refreshToken,
                                    name: user.name,
                                    email: user.email,
                                    role: user.role
                                }];
                    }
                });
            });
        };
        /*
        * Profile
        * @param id - The ID of the user to find.
        * @returns The user with the specified ID.
        * @throws Error if the user does not exist.
        */
        AuthService_1.prototype.profile = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var existingUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authModel.findById(id).lean()];
                        case 1:
                            existingUser = _a.sent();
                            if (!existingUser)
                                throw new common_1.NotFoundException("User with ID ".concat(id, " does not exist."));
                            return [2 /*return*/, existingUser];
                    }
                });
            });
        };
        /**
         * Giải mã token JWT.
         * @param token - Token cần được giải mã.
         * @returns Payload đã được giải mã của token.
         * @throws UnauthorizedException nếu token không hợp lệ.
         */
        AuthService_1.prototype.decode = function (accessToken) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    try {
                        payload = this.jwtService.verify(accessToken, {
                            secret: process.env.JWT_ACCESS_SECRET || '123456abc',
                        });
                        return [2 /*return*/, payload];
                    }
                    catch (error) {
                        throw new common_1.UnauthorizedException('Invalid token');
                    }
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.getUserFromToken = function (accessToken) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, userId, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.decode(accessToken)];
                        case 1:
                            payload = _a.sent();
                            userId = payload.id;
                            return [4 /*yield*/, this.authModel.findById(userId).select('-password -email -phone_number -address').lean()];
                        case 2:
                            user = _a.sent();
                            if (!user) {
                                throw new common_1.UnauthorizedException('User not found');
                            }
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        /**
         *
         */
        AuthService_1.prototype.getAllUser = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authModel.find().lean()];
                        case 1:
                            response = _a.sent();
                            if (!response)
                                throw new common_1.UnauthorizedException('Users not found');
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        /**
         *
         */
        AuthService_1.prototype.deleteUser = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authModel.findByIdAndDelete({ _id: id }).lean()];
                        case 1:
                            response = _a.sent();
                            if (!response)
                                throw new common_1.BadRequestException("Bad request");
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        /**
         *
         */
        AuthService_1.prototype.editUser = function (id, updateData) {
            return __awaiter(this, void 0, void 0, function () {
                var salt, _a, response;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!updateData.password) return [3 /*break*/, 3];
                            return [4 /*yield*/, bcrypt.genSalt()];
                        case 1:
                            salt = _b.sent();
                            _a = updateData;
                            return [4 /*yield*/, bcrypt.hash(updateData.password, salt)];
                        case 2:
                            _a.password = _b.sent();
                            _b.label = 3;
                        case 3: return [4 /*yield*/, this.authModel.findByIdAndUpdate(id, updateData, { new: true })];
                        case 4:
                            response = _b.sent();
                            if (!response)
                                throw new common_1.UnauthorizedException('User not found');
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        return AuthService_1;
    }());
    __setFunctionName(_classThis, "AuthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
}();
exports.AuthService = AuthService;
