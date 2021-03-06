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
import {RenderProps} from "./index";
import {ComponentRef} from "../../Ref";

const vrdom_instantiateComponentNode = (node: VRNode, props: RenderProps = {}): HTMLElement | Text | null => {
    const componentInstance: any = new (node.componentClass)({
        props: node.attributes,
        slot: node.children,
    });

    if (node.ref instanceof ComponentRef) {
        node.ref.component = componentInstance;
    }

    return componentInstance;
};

export default vrdom_instantiateComponentNode;