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

import ComponentNode from "./ComponentNode";

export type VRElementAttrs = null | any;

export type VRElementListeners = {
    [key: string]: (event: Event) => any;
} | null;

export type VRNode = VRElement | ComponentNode | any;

export type VRElementChildren = Array<VRNode>;
export type VRElementStyle = any;
export type VRElementRef = any;

export type VRElementProps = {
    attributes?: VRElementAttrs;
    listeners?: VRElementListeners;
    children?: VRElementChildren;
    style?: VRElementChildren;
    ref?: VRElementRef;
    dangerouslySetInnerHTML?: string;
};

class VRElement {
    public tagName: string;
    public attributes: VRElementAttrs | undefined = null;
    public listeners: VRElementListeners | undefined = null;
    public children: VRElementChildren | undefined = [];
    public style: VRElementStyle | undefined = null;
    public ref: VRElementRef | undefined = null;
    public dangerouslySetInnerHTML: string | null | undefined = null;

    constructor(tagName: string, props?: VRElementProps) {
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

export default VRElement