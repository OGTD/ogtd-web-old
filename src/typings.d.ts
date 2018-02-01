/* SystemJS module definition */
export { ICreateChange, IDatabaseChange, IDeleteChange, IUpdateChange, DatabaseChangeType } from "dexie-observable/api";

declare var module: NodeModule;
interface NodeModule {
  id: string;
}
