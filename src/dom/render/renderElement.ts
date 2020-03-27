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

import VRElement from "../VRElement";
import {RenderProps} from "./index";
import vrdom_append from "../append";

const XML_NAMESPACES = new Map([
    ["svg", "http://www.w3.org/2000/svg"]
]);

const vrdom_renderElement = (element: VRElement, props: RenderProps = {}): HTMLElement | Element => {
    let $el: HTMLElement | Element;

    let xmlns: string | undefined = props.xmlns;

    if (element.attributes.xmlns) {
        xmlns = element.attributes.xmlns;
        // @ts-ignore
        $el = document.createElementNS(xmlns, element.tagName);
    } else if (XML_NAMESPACES.has(element.tagName)) {
        xmlns = XML_NAMESPACES.get(element.tagName);
        $el = document.createElementNS(xmlns || "http://www.w3.org/2000/html", element.tagName);
    } else if (xmlns) {
        $el = document.createElementNS(xmlns, element.tagName);
    } else {
        $el = document.createElement(element.tagName);
    }

    if (element.dangerouslySetInnerHTML != null) {
        if (Array.isArray(element.children)) {
            if (element.children.length > 0) {
                console.error(element);
                throw new Error("VRElement with `dangerouslySetInnerHTML` must not have children.");
            }
        } else if (element.children) {
            console.error(element);
            throw new Error("VRElement with `dangerouslySetInnerHTML` must not have children.");
        }

        $el.innerHTML = element.dangerouslySetInnerHTML;
    }

    if (element.ref) {
        if (element.ref.__ref || element.ref.__fragment_ref) {
            element.ref.$el = $el;
        }
    }

    // @ts-ignore
    for (let [k, v] of Object.entries(element.attributes)) {
        if (v != null) {
            $el.setAttribute(k, v);
        }
    }

    // @ts-ignore
    for (let [k, v] of Object.entries(element.style)) {
        if (v !== undefined) {
            // @ts-ignore
            $el.style.setProperty(k, v);
            // @ts-ignore
            $el.__v.patched_styles.add(k);
        }
    }

    // @ts-ignore
    for (const [k, v] of Object.entries(element.listeners)) {
        // @ts-ignore
        $el[`on${k}`] = v;
        $el.__v.patched_events.add(k);
    }

    if (element.children) {
        for (let child of element.children) {
            if (child != null) {
                // @ts-ignore
                vrdom_append(child, $el, {xmlns})
            }
        }
    }

    return $el;
};

export default vrdom_renderElement;