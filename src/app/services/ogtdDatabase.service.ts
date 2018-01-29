import { Injectable } from '@angular/core';
import Dexie from 'dexie';

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
export interface OGTDItem extends IWithDateMetadata {
  type: OGTDType;
  uid: string;
  content: string; // All items should have at least one field describing what they are
}
export type ITag = OGTDItem;
export type IContext = OGTDItem;
export interface IPerson extends OGTDItem {
  phoneNumber?: string;
  email?: string;
}
export interface IReference extends OGTDItem {
  content: string;
  mimeType: string;
  data: Uint8Array;
}
export interface IInBasketItem extends OGTDItem {
  content: string;
  references: string[];
}
export interface IAction extends OGTDItem {
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
export interface IIncubatedItem extends OGTDItem {
  reminderTimestamp: number;
  references: string[];
}
export interface ISomedayMaybeItem extends OGTDItem {
  references: string[];
  tags: string[];
}
export interface IDelegate extends IAction {
  description: string;
  people: string[];
}
export interface IProject extends OGTDItem {
  title: string;
  content: string;
  references: string[];
}

export class OGTDDexie extends Dexie {
  contexts: Dexie.Table<IContext, string>;
  tags: Dexie.Table<ITag, string>;
  people: Dexie.Table<IPerson, string>;
  in: Dexie.Table<IInBasketItem, string>;
  nextActions: Dexie.Table<IAction, string>;
  incubated: Dexie.Table<IIncubatedItem, string>;
  somedayMaybe: Dexie.Table<ISomedayMaybeItem, string>;
  delegates: Dexie.Table<IDelegate, string>;
  projects: Dexie.Table<IProject, string>;
  constructor() {
    super('OGTDDexie');
    this.version(1).stores({
      contexts: '$$uid,content,createdTimestamp,editedTimestamp,',
      tags: '$$uid,content,createdTimestamp,editedTimestamp,',
      people: '$$uid,content,createdTimestamp,editedTimestamp,' + 'phoneNumber, email',
      in: '$$uid,content,createdTimestamp,editedTimestamp,' + '*references,*contexts', // separated based on base/subclass
      nextActions: '$$uid,content,createdTimestamp,editedTimestamp,'
        + 'title,priority,project,*references,*contexts,*tags,dueDateTimestamp,reminderTimestamp',
      incubated: '$$uid,content,createdTimestamp,editedTimestamp,' + '*references,reminderTimestamp',
      somedayMaybe: '$$uid,content,createdTimestamp,editedTimestamp,' + '*references,*tags,reminderTimestamp',
      delegates: '$$uid,content,createdTimestamp,editedTimestamp,'
        + 'title,priority,project,*references,*contexts,*tags,dueDateTimestamp,reminderTimestamp,'
        + 'description, people',
      projects: '$$uid,content,createdTimestamp,editedTimestamp,' + '*references,title',
    });
  }
}
@Injectable()
export class OGTDDatabaseService {

  constructor() { }

}
