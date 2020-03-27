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
const VRElement_1 = __importDefault(require("./VRElement"));
const index_1 = __importDefault(require("./index"));
const createElement = (tagName, attrs = null, ...children) => {
    if (tagName === index_1.default.Fragment) {
        console.warn("Fragments are not fully supported.");
    }
    const attributes = {};
    const listeners = {};
    if (attrs) {
        // @ts-ignore
        for (const [k, v] of Object.entries(attrs)) {
            if (k.startsWith("on")) {
                listeners[k.substring(2).toLowerCase()] = v;
            }
            else {
                attributes[k] = v;
            }
        }
    }
    return new VRElement_1.default(tagName, { attributes, listeners, children });
};
exports.default = createElement;
