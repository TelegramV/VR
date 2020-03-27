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

import VRElement, {VRNode} from "../VRElement";
import ComponentNode from "../ComponentNode";
import vrdom_renderComponentNode from "./renderComponentNode";
import vrdom_renderElement from "./renderElement";
import vrdom_renderText from "./renderText";

export type RenderProps = {
    xmlns?: string;
};

const vrdom_render = (node: VRNode, props: RenderProps = {}): HTMLElement | Element | Text | null => {
    if (node instanceof ComponentNode) {
        return vrdom_renderComponentNode(node, props);
    }

    if (node instanceof VRElement) {
        return vrdom_renderElement(node, props);
    } else if (node == null) {
        return null;
    } else {
        if (typeof node === "object") {
            return vrdom_renderText(JSON.stringify(node));
        } else {
            return vrdom_renderText(node);
        }
    }
};

export default vrdom_render;