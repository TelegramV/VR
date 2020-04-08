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

import VRElement, {VRElementAttrs, VRElementChildren, VRNode} from "./VRElement";
import VRDOM from "./index";
import processClassAttribute from "./attributeProcessors/processClassAttribute";
import isTagNameComponentOrTemplate from "./check/isComponentOrTemplate";
import isTagNameComponent from "./check/isTagNameComponent";
import ComponentNode from "./ComponentNode";

const processors = new Map([
    ["className", processClassAttribute],
    ["class", processClassAttribute],
]);

const aliases = new Map([
    ["className", "class"]
]);

const RENDER_IF_L = "renderif";
const SHOW_IF_L = "showif";
const HIDE_IF_L = "hideif";
const REF_L = "ref";
const DANGEROUSLY_SET_INNER_HTML_L = "ref";

const vrdom_createElement = (tagName: string, attrs: VRElementAttrs = null, ...children: VRElementChildren): VRNode | null => {
    if (tagName === VRDOM.Fragment) {
        console.warn("Fragments are not fully supported.")
    }

    if (typeof tagName === "function") {
        if (isTagNameComponent(tagName)) {
            let ref = null;

            if (attrs && attrs.ref) {
                ref = attrs.ref;
                delete attrs.ref;
            }

            return new ComponentNode(tagName, {attributes: attrs, children, ref})
        }
    }

    // @ts-ignore
    children = children.flat();

    const attributes: any = {};
    const listeners: any = {};
    let style: any = attrs && attrs.style ? attrs.style : {};
    let ref: any = null;
    let dangerouslySetInnerHTML: any = null;

    if (attrs) {
        // @ts-ignore
        for (let [attrKey, attrValue] of Object.entries(attrs)) {
            const isComponentOrTemplate = isTagNameComponentOrTemplate(tagName);

            // @ts-ignore
            attrKey = aliases.has(attrKey) ? aliases.get(attrKey) : attrKey;
            attrKey = isComponentOrTemplate ? attrKey : attrKey.toLowerCase();

            if (attrKey.startsWith("on")) {
                listeners[attrKey.substring(2).toLowerCase()] = attrValue;
            } else if (processors.has(attrKey)) {
                // @ts-ignore
                attributes[attrKey] = processors.get(attrKey)(attrValue);
            } else {
                let display = null;

                switch (attrKey) {
                    case SHOW_IF_L:
                        display = attrValue ? null : "none";
                        if (typeof style === "object") {
                            style.display = display;
                        } else {
                            style += `;display:${display};`;
                        }
                        break;

                    case HIDE_IF_L:
                        display = attrValue ? "none" : null;
                        if (typeof style === "object") {
                            style.display = display;
                        } else {
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

    return new VRElement(tagName, {attributes, listeners, children, style, ref, dangerouslySetInnerHTML});
};

export default vrdom_createElement;