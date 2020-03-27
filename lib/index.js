"use strict";
/*
 * Telegram V
 * Copyright (C) 2020 Davyd Kohut
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// WIP
const dom_1 = __importDefault(require("./dom"));
const div = dom_1.default.createElement("div", null, dom_1.default.createElement("ul", {
    className: "list"
}, dom_1.default.createElement("li", null, "a"), dom_1.default.createElement("li", null, "b"), dom_1.default.createElement("li", null, "c"), dom_1.default.createElement("li", null, "d", dom_1.default.createElement("div", null, dom_1.default.createElement("a", { href: "gogol" }, "gogol")))), dom_1.default.createElement("b", null, "123"), dom_1.default.createElement("hr", null), dom_1.default.createElement("svg", null));
console.log("X", div);
