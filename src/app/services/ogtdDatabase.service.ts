import { Injectable } from '@angular/core';
import { IAction, IContext, ITag, IPerson, IInBasketItem, IIncubatedItem, ISomedayMaybeItem, IDelegate, IProject } from './ogtdTypes';
import Dexie from 'dexie';
import 'dexie-observable';



@Injectable()
export class OGTDDatabaseService extends Dexie {
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
      contexts: '$$uid,content,createdTimestamp,editedTimestamp',
      tags: '$$uid,content,createdTimestamp,editedTimestamp',
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
    this.open();
  }
}
