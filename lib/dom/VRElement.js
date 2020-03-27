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
class VRElement {
    constructor(tagName, props) {
        this.attributes = null;
        this.listeners = null;
        this.children = [];
        this.style = null;
        this.ref = null;
        this.dangerouslySetInnerHTML = null;
        this.tagName = tagName;
        if (props) {
            this.attributes = props.attributes;
            this.listeners = props.listeners;
            this.children = props.children;
            this.style = props.style;
            this.ref = props.ref;
            this.dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;
        }
    }
}
exports.default = VRElement;
