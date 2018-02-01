export enum OGTDType {
    REFERENCE,
    TAG,
    CONTEXT,
    IN_BASKET_ITEM,
    TASK,
    INCUBATED_ITEM,
    DELEGATE,
    PROJECT,
}
export interface IWithDateMetadata {
    createdTimestamp: number;
    editedTimestamp: number;
}
export interface IOGTDItem extends IWithDateMetadata {
    type: OGTDType;
    uid?: string;
    content: string; // All items should have at least one field describing what they are
}
export type ITag = IOGTDItem;
export type IContext = IOGTDItem;
export interface IPerson extends IOGTDItem {
    phoneNumber?: string;
    email?: string;
}
export interface IReference extends IOGTDItem {
    content: string;
    mimeType: string;
    data: Uint8Array;
}
export interface IInBasketItem extends IOGTDItem {
    content: string;
    references: string[];
}
export interface IAction extends IOGTDItem {
    title: string;
    content: string;
    priority: number;
    project: string;
    contexts: string[];
    references: string[];
    tags: string[];
    dueDateTimestamp?: number;
    reminderTimestamp?: number;
    // periodical stuff create spawners maybe?
}
export interface IIncubatedItem extends IOGTDItem {
    reminderTimestamp: number;
    references: string[];
}
export interface ISomedayMaybeItem extends IOGTDItem {
    references: string[];
    tags: string[];
}
export interface IDelegate extends IAction {
    description: string;
    people: string[];
}
export interface IProject extends IOGTDItem {
    title: string;
    content: string;
    references: string[];
}
