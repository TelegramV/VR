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

import {VRElementAttrs, VRElementChildren} from "../VRElement";
import createElement from "../createElement";

export const div = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("div", attrs, ...children);
export const a = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("a", attrs, ...children);
export const b = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("b", attrs, ...children);
export const br = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("br", attrs, ...children);
export const hr = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("hr", attrs, ...children);
export const article = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("article", attrs, ...children);
export const title = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("title", attrs, ...children);
export const html = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("html", attrs, ...children);
export const head = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("head", attrs, ...children);
export const body = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("body", attrs, ...children);
export const script = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("script", attrs, ...children);
export const style = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("style", attrs, ...children);
export const span = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("span", attrs, ...children);
export const img = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("img", attrs, ...children);
export const link = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("link", attrs, ...children);
export const section = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("section", attrs, ...children);
export const t = (attrs: VRElementAttrs = null, ...children: VRElementChildren) => createElement("t", attrs, ...children);