import {VRNode} from "./VRElement";
import vrdom_render, {RenderProps} from "./render";

// @ts-ignore
const vrdom_prepend = (node: VRNode, $el: Element, props: RenderProps = {}): Element => {
    const $node = vrdom_render(node, props);

    // @ts-ignore
    $el.prepend($node);

    vrdom_mounted($node);

    // @ts-ignore
    return $node;
};

export default vrdom_prepend;
