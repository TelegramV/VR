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
const processClassAttribute_1 = __importDefault(require("./attributeProcessors/processClassAttribute"));
const isComponentOrTemplate_1 = __importDefault(require("./check/isComponentOrTemplate"));
const processors = new Map([
    ["className", processClassAttribute_1.default],
    ["class", processClassAttribute_1.default],
]);
const aliases = new Map([
    ["className", "class"]
]);
const RENDER_IF_L = "renderif";
const SHOW_IF_L = "showif";
const HIDE_IF_L = "hideif";
const REF_L = "ref";
const DANGEROUSLY_SET_INNER_HTML_L = "ref";
const createElement = (tagName, attrs = null, ...children) => {
    if (tagName === index_1.default.Fragment) {
        console.warn("Fragments are not fully supported.");
    }
    // @ts-ignore
    children = children.flat();
    const attributes = {};
    const listeners = {};
    let style = attrs && attrs.style ? attrs.style : {};
    let ref = null;
    let dangerouslySetInnerHTML = null;
    if (attrs) {
        // @ts-ignore
        for (let [attrKey, attrValue] of Object.entries(attrs)) {
            const isTagNameComponentOrTemplate = isComponentOrTemplate_1.default(tagName);
            attrKey = aliases.has(attrKey) ? aliases.get(attrKey) : attrKey;
            attrKey = isTagNameComponentOrTemplate ? attrKey : attrKey.toLowerCase();
            if (attrKey.startsWith("on")) {
                listeners[attrKey.substring(2).toLowerCase()] = attrValue;
            }
            else if (processors.has(attrKey)) {
                // @ts-ignore
                attributes[attrKey] = processors.get(attrKey)(attrValue);
            }
            else {
                let display = null;
                switch (attrKey) {
                    case SHOW_IF_L:
                        display = attrValue ? null : "none";
                        if (typeof style === "object") {
                            style.display = display;
                        }
                        else {
                            style += `;display:${display};`;
                        }
                        break;
                    case HIDE_IF_L:
                        display = attrValue ? "none" : null;
                        if (typeof style === "object") {
                            style.display = display;
                        }
                        else {
                            style += `;display:${display};`;
                        }
                        break;
                    case RENDER_IF_L:
                        if (!attrValue) {
                            return null;
                        }
                        break;
                    case REF_L:
                        ref = attrValue;
                        break;
                    case DANGEROUSLY_SET_INNER_HTML_L:
                        dangerouslySetInnerHTML = attrValue;
                        break;
                    default:
                        attributes[attrKey] = attrValue;
                        break;
                }
            }
        }
    }
    return new VRElement_1.default(tagName, { attributes, listeners, children, style, ref, dangerouslySetInnerHTML });
};
exports.default = createElement;
