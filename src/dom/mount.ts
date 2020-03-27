import vrdom_render, {RenderProps} from "./render";
import {VRNode} from "./VRElement";

export const vrdom_realMount = ($el: Element | Node | Text, $target: Element | Node | Text | string): Element => {
    if (typeof $target === "string") {
        // @ts-ignore
        $target = document.querySelector($target);
    }

    // @ts-ignore
    $target.replaceWith($el);

    // @ts-ignore
    return $el;
};

const vrdom_mount = (node: VRNode, $el: Element | Node | Text | string, props: RenderProps = {}): Element | Node | Text => {
    // @ts-ignore
    const $mounted = vrdom_realMount(vrdom_render(node, props), $el);

    // @ts-ignore
    vrdom_mounted($mounted);

    return $mounted
};

export default vrdom_mount;