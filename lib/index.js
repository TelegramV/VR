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
Object.defineProperty(exports, "__esModule", { value: true });
const elements_1 = require("./dom/elements");
if (!Map || !Set) {
    throw new Error("Map and Set are required.");
}
// @ts-ignore
if (!Array.prototype.flat) {
    throw new Error("Array.prototype.flat() are required.");
}
const list = ["a", 1, "b"];
const dom = elements_1.html({}, ...list.map(v => elements_1.div(null, v)), elements_1.head({ renderIf: false }, elements_1.title({}, 'Telegram V'), elements_1.link({ rel: 'stylesheet', href: '/styles.css' })), elements_1.body({ class: 'theme-dark', showIf: true }, elements_1.div({ class: 'header' }, elements_1.a({ class: 'header-link', href: '/' }, 'Telegram V')), elements_1.article({ class: 'post' }, elements_1.div({ class: 'title' }, 'Telegram lost all users..'), elements_1.section({ class: 'content' }, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))));
console.log(dom);
