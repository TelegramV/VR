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
import vrdom_createElement from "../createElement";

const create = (tagName, ...props) => {
    if (props.length > 0) {
        if (props[0] instanceof VRElement) {
            return vrdom_createElement(tagName, null, ...props);
        } else {
            return vrdom_createElement(tagName, props[0], ...props.slice(1));
        }
    }
};

export const div = (...props) => create("div", ...props);
export const article = (...props) => create("article", ...props);
export const title = (...props) => create("title", ...props);
export const html = (...props) => create("html", ...props);
export const head = (...props) => create("head", ...props);
export const body = (...props) => create("body", ...props);
export const style = (...props) => create("style", ...props);
export const link = (...props) => create("link", ...props);
export const section = (...props) => create("section", ...props);
export const svg = (...props) => create("svg", ...props);
export const meta = (...props) => create("meta", ...props);
export const base = (...props) => create("base", ...props);
export const address = (...props) => create("address", ...props);
export const h1 = (...props) => create("h1", ...props);
export const h2 = (...props) => create("h2", ...props);
export const h3 = (...props) => create("h3", ...props);
export const h4 = (...props) => create("h4", ...props);
export const h5 = (...props) => create("h5", ...props);
export const h6 = (...props) => create("h6", ...props);
export const aside = (...props) => create("aside", ...props);
export const footer = (...props) => create("footer", ...props);
export const header = (...props) => create("header", ...props);
export const hgroup = (...props) => create("hgroup", ...props);
export const nav = (...props) => create("nav", ...props);

export const blockquote = (...props) => create("blockquote", ...props);
export const dd = (...props) => create("dd", ...props);
export const dl = (...props) => create("dl", ...props);
export const dt = (...props) => create("dt", ...props);
export const figcaption = (...props) => create("figcaption", ...props);
export const figure = (...props) => create("figure", ...props);
export const hr = (...props) => create("hr", ...props);
export const li = (...props) => create("li", ...props);
export const main = (...props) => create("main", ...props);
export const ol = (...props) => create("ol", ...props);
export const p = (...props) => create("p", ...props);
export const pre = (...props) => create("pre", ...props);
export const ul = (...props) => create("ul", ...props);

export const a = (...props) => create("a", ...props);
export const abbr = (...props) => create("abbr", ...props);
export const b = (...props) => create("b", ...props);
export const bdi = (...props) => create("bdi", ...props);
export const bdo = (...props) => create("bdo", ...props);
export const br = (...props) => create("br", ...props);
export const cite = (...props) => create("cite", ...props);
export const code = (...props) => create("code", ...props);
export const data = (...props) => create("data", ...props);
export const dfn = (...props) => create("dfn", ...props);
export const em = (...props) => create("em", ...props);
export const i = (...props) => create("i", ...props);
export const kbd = (...props) => create("kbd", ...props);
export const mark = (...props) => create("mark", ...props);
export const q = (...props) => create("q", ...props);
export const rb = (...props) => create("rb", ...props);
export const rp = (...props) => create("rp", ...props);
export const rt = (...props) => create("rt", ...props);
export const rtc = (...props) => create("rtc", ...props);
export const ruby = (...props) => create("ruby", ...props);
export const s = (...props) => create("s", ...props);
export const samp = (...props) => create("samp", ...props);
export const small = (...props) => create("small", ...props);
export const span = (...props) => create("span", ...props);
export const strong = (...props) => create("strong", ...props);
export const sub = (...props) => create("sub", ...props);
export const sup = (...props) => create("sup", ...props);
export const time = (...props) => create("time", ...props);
export const u = (...props) => create("u", ...props);
export const var_ = (...props) => create("var", ...props);
export const wbr = (...props) => create("wbr", ...props);

export const area = (...props) => create("area", ...props);
export const audio = (...props) => create("audio", ...props);
export const img = (...props) => create("img", ...props);
export const map = (...props) => create("map", ...props);
export const track = (...props) => create("track", ...props);
export const video = (...props) => create("video", ...props);

export const embed = (...props) => create("embed", ...props);
export const iframe = (...props) => create("iframe", ...props);
export const object = (...props) => create("object", ...props);
export const param = (...props) => create("param", ...props);
export const picture = (...props) => create("picture", ...props);
export const source = (...props) => create("source", ...props);

export const canvas = (...props) => create("canvas", ...props);
export const noscript = (...props) => create("noscript", ...props);
export const script = (...props) => create("script", ...props);

export const del = (...props) => create("del", ...props);
export const ins = (...props) => create("ins", ...props);

export const caption = (...props) => create("caption", ...props);
export const col = (...props) => create("col", ...props);
export const colgroup = (...props) => create("colgroup", ...props);
export const table = (...props) => create("table", ...props);
export const tbody = (...props) => create("tbody", ...props);
export const td = (...props) => create("td", ...props);
export const tfoot = (...props) => create("tfoot", ...props);
export const th = (...props) => create("th", ...props);
export const thead = (...props) => create("thead", ...props);
export const tr = (...props) => create("tr", ...props);

export const button = (...props) => create("button", ...props);
export const datalist = (...props) => create("datalist", ...props);
export const fieldset = (...props) => create("fieldset", ...props);
export const form = (...props) => create("form", ...props);
export const input = (...props) => create("input", ...props);
export const label = (...props) => create("label", ...props);
export const legend = (...props) => create("legend", ...props);
export const meter = (...props) => create("meter", ...props);
export const optgroup = (...props) => create("optgroup", ...props);
export const option = (...props) => create("option", ...props);
export const output = (...props) => create("output", ...props);
export const progress = (...props) => create("progress", ...props);
export const select = (...props) => create("select", ...props);
export const textarea = (...props) => create("textarea", ...props);

export const details = (...props) => create("details", ...props);
export const dialog = (...props) => create("dialog", ...props);
export const menu = (...props) => create("menu", ...props);
export const summary = (...props) => create("summary", ...props);

export const slot = (...props) => create("slot", ...props);
export const template = (...props) => create("template", ...props);

// render component or template
export const $c = (component, ...props) => create(component, ...props);