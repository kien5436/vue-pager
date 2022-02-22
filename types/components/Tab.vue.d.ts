declare const _default: import("vue").DefineComponent<{
    active: {
        default: boolean;
        type: BooleanConstructor;
    };
    closable: {
        default: boolean;
        type: BooleanConstructor;
    };
    group: {
        required: true;
        type: StringConstructor;
    };
    tabId: StringConstructor;
    rounded: {
        default: boolean;
        type: BooleanConstructor;
    };
}, {
    activateTab: () => void;
    classes: import("vue").ComputedRef<{
        "vp-item-active": boolean;
        "vp-pr-8 vp-justify-start": boolean;
        "vp-pr-4 vp-justify-center": boolean;
        "vp-rounded-t": boolean;
        "vp-text-gray-100 !vp-text-gray-500 !vp-bg-gray-100 vp-pointer-events-none": boolean;
    }>;
    computedTabId: import("vue").ComputedRef<string>;
    removeTab: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: {
        default: boolean;
        type: BooleanConstructor;
    };
    closable: {
        default: boolean;
        type: BooleanConstructor;
    };
    group: {
        required: true;
        type: StringConstructor;
    };
    tabId: StringConstructor;
    rounded: {
        default: boolean;
        type: BooleanConstructor;
    };
}>>, {
    active: boolean;
    closable: boolean;
    rounded: boolean;
}>;
export default _default;