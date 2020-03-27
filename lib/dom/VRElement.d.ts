export declare type VRElementAttrs = null | any;
export declare type VRElementListeners = {
    [key: string]: (event: Event) => any;
} | null;
export declare type VRNode = VRElement | any;
export declare type VRElementChildren = Array<VRNode>;
export declare type VRElementProps = {
    attributes: VRElementAttrs;
    listeners: VRElementListeners;
    children: VRElementChildren;
};
declare class VRElement {
    tagName: string;
    attributes: VRElementAttrs;
    listeners: VRElementListeners;
    children: VRElementChildren;
    constructor(tagName: string, props?: VRElementProps);
}
export default VRElement;
