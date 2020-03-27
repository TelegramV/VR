export declare type VRElementAttrs = null | any;
export declare type VRElementListeners = {
    [key: string]: (event: Event) => any;
} | null;
export declare type VRNode = VRElement | any;
export declare type VRElementChildren = Array<VRNode>;
export declare type VRElementStyle = any;
export declare type VRElementRef = any;
export declare type VRElementProps = {
    attributes?: VRElementAttrs;
    listeners?: VRElementListeners;
    children?: VRElementChildren;
    style?: VRElementChildren;
    ref?: VRElementRef;
    dangerouslySetInnerHTML?: string;
};
declare class VRElement {
    tagName: string;
    attributes: VRElementAttrs | undefined;
    listeners: VRElementListeners | undefined;
    children: VRElementChildren | undefined;
    style: VRElementStyle | undefined;
    ref: VRElementRef | undefined;
    dangerouslySetInnerHTML: string | null | undefined;
    constructor(tagName: string, props?: VRElementProps);
}
export default VRElement;
