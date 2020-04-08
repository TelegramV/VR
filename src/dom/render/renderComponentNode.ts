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

import {VRNode} from "../VRElement";
import ComponentNode from "../ComponentNode";
import vrdom_render, {RenderProps} from "./index";
import vrdom_instantiateComponentNode from "./instantiateComponentNode";
import __component_render from "../component/render";
import __component_init from "../component/init";

const vrdom_renderComponentNode = (node: VRNode, props: RenderProps = {}): HTMLElement | Element | Text | null => {
    const componentInstance: any = vrdom_instantiateComponentNode(node);

    __component_init(componentInstance);

    const renderedVRNode = __component_render(componentInstance);

    if (renderedVRNode instanceof ComponentNode) {
        throw new Error("Components on top level are forbidden.");
    }

    const $node = vrdom_render(renderedVRNode, props);

    return $node;
};

export default vrdom_renderComponentNode;