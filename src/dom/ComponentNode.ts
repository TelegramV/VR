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

import VR from "../VR";

export type ComponentNodeProps = {
    attributes?: any;
    children?: any;
    ref?: any;
}

class ComponentNode {
    public componentClass: any = null;
    public attributes: any = null;
    public children: any = null;
    public ref: any = null;

    constructor(componentClass: any, props: ComponentNodeProps) {
        this.componentClass = componentClass;

        if (props) {
            this.attributes = props.attributes;
            this.children = props.children;
            this.ref = props.ref;
        }
    }
}

export default ComponentNode;