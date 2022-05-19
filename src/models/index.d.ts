import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Profile {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly plan?: number | null;
  readonly mainHelper?: string | null;
  readonly avatar?: string | null;
  readonly firstGame?: boolean | null;
  readonly lastStepTime?: string | null;
  readonly histories?: (History | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class History {
  readonly id: string;
  readonly ownerProfId: string;
  readonly profile?: Profile | null;
  readonly count: number;
  readonly plan: number;
  readonly status: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<History, HistoryMetaData>);
  static copyOf(source: History, mutator: (draft: MutableModel<History, HistoryMetaData>) => MutableModel<History, HistoryMetaData> | void): History;
}

export declare class Todo {
  readonly id: string;
  readonly tenant: string;
  readonly title: string;
  readonly body: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}