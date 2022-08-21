import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  conversation_type: any
  jsonb: any
  numeric: any
  source_kind: any
  timestamptz: any
}

/** columns and relationships of "author" */
export type Author = {
  __typename?: 'Author'
  avatarUrl?: Maybe<Scalars['String']>
  id: Scalars['Int']
  idOnSource: Scalars['String']
  /** An array relationship */
  messages: Array<Message>
  /** An aggregate relationship */
  messagesAggregate: MessageAggregate
  name: Scalars['String']
  sourceKind: Scalars['source_kind']
}

/** columns and relationships of "author" */
export type AuthorMessagesArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

/** columns and relationships of "author" */
export type AuthorMessagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

/** aggregated selection of "author" */
export type AuthorAggregate = {
  __typename?: 'AuthorAggregate'
  aggregate?: Maybe<AuthorAggregateFields>
  nodes: Array<Author>
}

/** aggregate fields of "author" */
export type AuthorAggregateFields = {
  __typename?: 'AuthorAggregateFields'
  avg?: Maybe<AuthorAvgFields>
  count: Scalars['Int']
  max?: Maybe<AuthorMaxFields>
  min?: Maybe<AuthorMinFields>
  stddev?: Maybe<AuthorStddevFields>
  stddevPop?: Maybe<AuthorStddevPopFields>
  stddevSamp?: Maybe<AuthorStddevSampFields>
  sum?: Maybe<AuthorSumFields>
  varPop?: Maybe<AuthorVarPopFields>
  varSamp?: Maybe<AuthorVarSampFields>
  variance?: Maybe<AuthorVarianceFields>
}

/** aggregate fields of "author" */
export type AuthorAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthorSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type AuthorAvgFields = {
  __typename?: 'AuthorAvgFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "author". All fields are combined with a logical 'AND'. */
export type AuthorBoolExp = {
  _and?: InputMaybe<Array<AuthorBoolExp>>
  _not?: InputMaybe<AuthorBoolExp>
  _or?: InputMaybe<Array<AuthorBoolExp>>
  avatarUrl?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  idOnSource?: InputMaybe<StringComparisonExp>
  messages?: InputMaybe<MessageBoolExp>
  name?: InputMaybe<StringComparisonExp>
  sourceKind?: InputMaybe<SourceKindComparisonExp>
}

/** unique or primary key constraints on table "author" */
export enum AuthorConstraint {
  /** unique or primary key constraint on columns "id" */
  AuthorPkey = 'author_pkey',
  /** unique or primary key constraint on columns "source_kind", "id_on_source" */
  AuthorSourceKindIdOnSourceKey = 'author_source_kind_id_on_source_key',
}

/** input type for incrementing numeric columns in table "author" */
export type AuthorIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "author" */
export type AuthorInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  messages?: InputMaybe<MessageArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
}

/** aggregate max on columns */
export type AuthorMaxFields = {
  __typename?: 'AuthorMaxFields'
  avatarUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sourceKind?: Maybe<Scalars['source_kind']>
}

/** aggregate min on columns */
export type AuthorMinFields = {
  __typename?: 'AuthorMinFields'
  avatarUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  sourceKind?: Maybe<Scalars['source_kind']>
}

/** response of any mutation on the table "author" */
export type AuthorMutationResponse = {
  __typename?: 'AuthorMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Author>
}

/** input type for inserting object relation for remote table "author" */
export type AuthorObjRelInsertInput = {
  data: AuthorInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<AuthorOnConflict>
}

/** on_conflict condition type for table "author" */
export type AuthorOnConflict = {
  constraint: AuthorConstraint
  update_columns?: Array<AuthorUpdateColumn>
  where?: InputMaybe<AuthorBoolExp>
}

/** Ordering options when selecting data from "author". */
export type AuthorOrderBy = {
  avatarUrl?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  messages_aggregate?: InputMaybe<MessageAggregateOrderBy>
  name?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
}

/** primary key columns input for table: author */
export type AuthorPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "author" */
export enum AuthorSelectColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  Name = 'name',
  /** column name */
  SourceKind = 'sourceKind',
}

/** input type for updating data in table "author" */
export type AuthorSetInput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
}

/** aggregate stddev on columns */
export type AuthorStddevFields = {
  __typename?: 'AuthorStddevFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type AuthorStddevPopFields = {
  __typename?: 'AuthorStddevPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type AuthorStddevSampFields = {
  __typename?: 'AuthorStddevSampFields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "author" */
export type AuthorStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: AuthorStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type AuthorStreamcursorvalueinput = {
  avatarUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
}

/** aggregate sum on columns */
export type AuthorSumFields = {
  __typename?: 'AuthorSumFields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "author" */
export enum AuthorUpdateColumn {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  Name = 'name',
  /** column name */
  SourceKind = 'sourceKind',
}

/** aggregate var_pop on columns */
export type AuthorVarPopFields = {
  __typename?: 'AuthorVarPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type AuthorVarSampFields = {
  __typename?: 'AuthorVarSampFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type AuthorVarianceFields = {
  __typename?: 'AuthorVarianceFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

/** A cache of the commit someone is referring to when they refer to a branch at a certain point in time. */
export type BranchPointer = {
  __typename?: 'BranchPointer'
  commitHash: Scalars['String']
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  name: Scalars['String']
  /** An object relationship */
  repo: Repo
  repoId: Scalars['Int']
  updatedAt: Scalars['timestamptz']
  validSince: Scalars['timestamptz']
}

/** aggregated selection of "branch_pointer" */
export type BranchPointerAggregate = {
  __typename?: 'BranchPointerAggregate'
  aggregate?: Maybe<BranchPointerAggregateFields>
  nodes: Array<BranchPointer>
}

/** aggregate fields of "branch_pointer" */
export type BranchPointerAggregateFields = {
  __typename?: 'BranchPointerAggregateFields'
  avg?: Maybe<BranchPointerAvgFields>
  count: Scalars['Int']
  max?: Maybe<BranchPointerMaxFields>
  min?: Maybe<BranchPointerMinFields>
  stddev?: Maybe<BranchPointerStddevFields>
  stddevPop?: Maybe<BranchPointerStddevPopFields>
  stddevSamp?: Maybe<BranchPointerStddevSampFields>
  sum?: Maybe<BranchPointerSumFields>
  varPop?: Maybe<BranchPointerVarPopFields>
  varSamp?: Maybe<BranchPointerVarSampFields>
  variance?: Maybe<BranchPointerVarianceFields>
}

/** aggregate fields of "branch_pointer" */
export type BranchPointerAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BranchPointerSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "branch_pointer" */
export type BranchPointerAggregateOrderBy = {
  avg?: InputMaybe<BranchPointerAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<BranchPointerMaxOrderBy>
  min?: InputMaybe<BranchPointerMinOrderBy>
  stddev?: InputMaybe<BranchPointerStddevOrderBy>
  stddev_pop?: InputMaybe<BranchPointerStddevPopOrderBy>
  stddev_samp?: InputMaybe<BranchPointerStddevSampOrderBy>
  sum?: InputMaybe<BranchPointerSumOrderBy>
  var_pop?: InputMaybe<BranchPointerVarPopOrderBy>
  var_samp?: InputMaybe<BranchPointerVarSampOrderBy>
  variance?: InputMaybe<BranchPointerVarianceOrderBy>
}

/** input type for inserting array relation for remote table "branch_pointer" */
export type BranchPointerArrRelInsertInput = {
  data: Array<BranchPointerInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<BranchPointerOnConflict>
}

/** aggregate avg on columns */
export type BranchPointerAvgFields = {
  __typename?: 'BranchPointerAvgFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "branch_pointer" */
export type BranchPointerAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "branch_pointer". All fields are combined with a logical 'AND'. */
export type BranchPointerBoolExp = {
  _and?: InputMaybe<Array<BranchPointerBoolExp>>
  _not?: InputMaybe<BranchPointerBoolExp>
  _or?: InputMaybe<Array<BranchPointerBoolExp>>
  commitHash?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  repo?: InputMaybe<RepoBoolExp>
  repoId?: InputMaybe<IntComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  validSince?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "branch_pointer" */
export enum BranchPointerConstraint {
  /** unique or primary key constraint on columns "name", "repo_id", "valid_since" */
  BranchPointerLookup = 'branch_pointer_lookup',
  /** unique or primary key constraint on columns "id" */
  BranchPointerPkey = 'branch_pointer_pkey',
}

/** input type for incrementing numeric columns in table "branch_pointer" */
export type BranchPointerIncInput = {
  id?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "branch_pointer" */
export type BranchPointerInsertInput = {
  commitHash?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  repo?: InputMaybe<RepoObjRelInsertInput>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  validSince?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type BranchPointerMaxFields = {
  __typename?: 'BranchPointerMaxFields'
  commitHash?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  validSince?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "branch_pointer" */
export type BranchPointerMaxOrderBy = {
  commitHash?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  validSince?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type BranchPointerMinFields = {
  __typename?: 'BranchPointerMinFields'
  commitHash?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  validSince?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "branch_pointer" */
export type BranchPointerMinOrderBy = {
  commitHash?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  validSince?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "branch_pointer" */
export type BranchPointerMutationResponse = {
  __typename?: 'BranchPointerMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<BranchPointer>
}

/** on_conflict condition type for table "branch_pointer" */
export type BranchPointerOnConflict = {
  constraint: BranchPointerConstraint
  update_columns?: Array<BranchPointerUpdateColumn>
  where?: InputMaybe<BranchPointerBoolExp>
}

/** Ordering options when selecting data from "branch_pointer". */
export type BranchPointerOrderBy = {
  commitHash?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  repo?: InputMaybe<RepoOrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  validSince?: InputMaybe<OrderBy>
}

/** primary key columns input for table: branch_pointer */
export type BranchPointerPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "branch_pointer" */
export enum BranchPointerSelectColumn {
  /** column name */
  CommitHash = 'commitHash',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  ValidSince = 'validSince',
}

/** input type for updating data in table "branch_pointer" */
export type BranchPointerSetInput = {
  commitHash?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  validSince?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type BranchPointerStddevFields = {
  __typename?: 'BranchPointerStddevFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "branch_pointer" */
export type BranchPointerStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type BranchPointerStddevPopFields = {
  __typename?: 'BranchPointerStddevPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "branch_pointer" */
export type BranchPointerStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type BranchPointerStddevSampFields = {
  __typename?: 'BranchPointerStddevSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "branch_pointer" */
export type BranchPointerStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "branch_pointer" */
export type BranchPointerStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: BranchPointerStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type BranchPointerStreamcursorvalueinput = {
  commitHash?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  validSince?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type BranchPointerSumFields = {
  __typename?: 'BranchPointerSumFields'
  id?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "branch_pointer" */
export type BranchPointerSumOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** update columns of table "branch_pointer" */
export enum BranchPointerUpdateColumn {
  /** column name */
  CommitHash = 'commitHash',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  ValidSince = 'validSince',
}

/** aggregate var_pop on columns */
export type BranchPointerVarPopFields = {
  __typename?: 'BranchPointerVarPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "branch_pointer" */
export type BranchPointerVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type BranchPointerVarSampFields = {
  __typename?: 'BranchPointerVarSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "branch_pointer" */
export type BranchPointerVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type BranchPointerVarianceFields = {
  __typename?: 'BranchPointerVarianceFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "branch_pointer" */
export type BranchPointerVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** Depicts a git commit for a particular repository (at a particular origin). */
export type Commit = {
  __typename?: 'Commit'
  createdAt: Scalars['timestamptz']
  hash: Scalars['String']
  id: Scalars['Int']
  parentHash: Scalars['String']
  processedAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  repo: Repo
  repoId: Scalars['Int']
  updatedAt: Scalars['timestamptz']
}

/** aggregated selection of "commit" */
export type CommitAggregate = {
  __typename?: 'CommitAggregate'
  aggregate?: Maybe<CommitAggregateFields>
  nodes: Array<Commit>
}

/** aggregate fields of "commit" */
export type CommitAggregateFields = {
  __typename?: 'CommitAggregateFields'
  avg?: Maybe<CommitAvgFields>
  count: Scalars['Int']
  max?: Maybe<CommitMaxFields>
  min?: Maybe<CommitMinFields>
  stddev?: Maybe<CommitStddevFields>
  stddevPop?: Maybe<CommitStddevPopFields>
  stddevSamp?: Maybe<CommitStddevSampFields>
  sum?: Maybe<CommitSumFields>
  varPop?: Maybe<CommitVarPopFields>
  varSamp?: Maybe<CommitVarSampFields>
  variance?: Maybe<CommitVarianceFields>
}

/** aggregate fields of "commit" */
export type CommitAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommitSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "commit" */
export type CommitAggregateOrderBy = {
  avg?: InputMaybe<CommitAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<CommitMaxOrderBy>
  min?: InputMaybe<CommitMinOrderBy>
  stddev?: InputMaybe<CommitStddevOrderBy>
  stddev_pop?: InputMaybe<CommitStddevPopOrderBy>
  stddev_samp?: InputMaybe<CommitStddevSampOrderBy>
  sum?: InputMaybe<CommitSumOrderBy>
  var_pop?: InputMaybe<CommitVarPopOrderBy>
  var_samp?: InputMaybe<CommitVarSampOrderBy>
  variance?: InputMaybe<CommitVarianceOrderBy>
}

/** input type for inserting array relation for remote table "commit" */
export type CommitArrRelInsertInput = {
  data: Array<CommitInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<CommitOnConflict>
}

/** aggregate avg on columns */
export type CommitAvgFields = {
  __typename?: 'CommitAvgFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "commit" */
export type CommitAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "commit". All fields are combined with a logical 'AND'. */
export type CommitBoolExp = {
  _and?: InputMaybe<Array<CommitBoolExp>>
  _not?: InputMaybe<CommitBoolExp>
  _or?: InputMaybe<Array<CommitBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  hash?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  parentHash?: InputMaybe<StringComparisonExp>
  processedAt?: InputMaybe<TimestamptzComparisonExp>
  repo?: InputMaybe<RepoBoolExp>
  repoId?: InputMaybe<IntComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "commit" */
export enum CommitConstraint {
  /** unique or primary key constraint on columns "id" */
  CommitPkey = 'commit_pkey',
}

/** input type for incrementing numeric columns in table "commit" */
export type CommitIncInput = {
  id?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "commit" */
export type CommitInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  hash?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  parentHash?: InputMaybe<Scalars['String']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  repo?: InputMaybe<RepoObjRelInsertInput>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type CommitMaxFields = {
  __typename?: 'CommitMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  hash?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  parentHash?: Maybe<Scalars['String']>
  processedAt?: Maybe<Scalars['timestamptz']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "commit" */
export type CommitMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  parentHash?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type CommitMinFields = {
  __typename?: 'CommitMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  hash?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  parentHash?: Maybe<Scalars['String']>
  processedAt?: Maybe<Scalars['timestamptz']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "commit" */
export type CommitMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  parentHash?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "commit" */
export type CommitMutationResponse = {
  __typename?: 'CommitMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Commit>
}

/** on_conflict condition type for table "commit" */
export type CommitOnConflict = {
  constraint: CommitConstraint
  update_columns?: Array<CommitUpdateColumn>
  where?: InputMaybe<CommitBoolExp>
}

/** Ordering options when selecting data from "commit". */
export type CommitOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  hash?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  parentHash?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  repo?: InputMaybe<RepoOrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: commit */
export type CommitPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "commit" */
export enum CommitSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  ParentHash = 'parentHash',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "commit" */
export type CommitSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  hash?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  parentHash?: InputMaybe<Scalars['String']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type CommitStddevFields = {
  __typename?: 'CommitStddevFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "commit" */
export type CommitStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type CommitStddevPopFields = {
  __typename?: 'CommitStddevPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "commit" */
export type CommitStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type CommitStddevSampFields = {
  __typename?: 'CommitStddevSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "commit" */
export type CommitStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "commit" */
export type CommitStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: CommitStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type CommitStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  hash?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  parentHash?: InputMaybe<Scalars['String']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type CommitSumFields = {
  __typename?: 'CommitSumFields'
  id?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "commit" */
export type CommitSumOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** update columns of table "commit" */
export enum CommitUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  ParentHash = 'parentHash',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type CommitVarPopFields = {
  __typename?: 'CommitVarPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "commit" */
export type CommitVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type CommitVarSampFields = {
  __typename?: 'CommitVarSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "commit" */
export type CommitVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type CommitVarianceFields = {
  __typename?: 'CommitVarianceFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "commit" */
export type CommitVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
}

/** columns and relationships of "conversation" */
export type Conversation = {
  __typename?: 'Conversation'
  archivedAt?: Maybe<Scalars['timestamptz']>
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  idOnSource: Scalars['String']
  /** An aggregate relationship */
  lineReferencesAggregate: LineReferenceAggregate
  /** An array relationship */
  line_references: Array<LineReference>
  /** An array relationship */
  messages: Array<Message>
  /** An aggregate relationship */
  messagesAggregate: MessageAggregate
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind: Scalars['source_kind']
  type: Scalars['conversation_type']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "conversation" */
export type ConversationLineReferencesAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "conversation" */
export type ConversationLine_ReferencesArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "conversation" */
export type ConversationMessagesArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

/** columns and relationships of "conversation" */
export type ConversationMessagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

/** aggregated selection of "conversation" */
export type ConversationAggregate = {
  __typename?: 'ConversationAggregate'
  aggregate?: Maybe<ConversationAggregateFields>
  nodes: Array<Conversation>
}

/** aggregate fields of "conversation" */
export type ConversationAggregateFields = {
  __typename?: 'ConversationAggregateFields'
  avg?: Maybe<ConversationAvgFields>
  count: Scalars['Int']
  max?: Maybe<ConversationMaxFields>
  min?: Maybe<ConversationMinFields>
  stddev?: Maybe<ConversationStddevFields>
  stddevPop?: Maybe<ConversationStddevPopFields>
  stddevSamp?: Maybe<ConversationStddevSampFields>
  sum?: Maybe<ConversationSumFields>
  varPop?: Maybe<ConversationVarPopFields>
  varSamp?: Maybe<ConversationVarSampFields>
  variance?: Maybe<ConversationVarianceFields>
}

/** aggregate fields of "conversation" */
export type ConversationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ConversationSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type ConversationAvgFields = {
  __typename?: 'ConversationAvgFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "conversation". All fields are combined with a logical 'AND'. */
export type ConversationBoolExp = {
  _and?: InputMaybe<Array<ConversationBoolExp>>
  _not?: InputMaybe<ConversationBoolExp>
  _or?: InputMaybe<Array<ConversationBoolExp>>
  archivedAt?: InputMaybe<TimestamptzComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  idOnSource?: InputMaybe<StringComparisonExp>
  line_references?: InputMaybe<LineReferenceBoolExp>
  messages?: InputMaybe<MessageBoolExp>
  queriedAt?: InputMaybe<TimestamptzComparisonExp>
  sourceKind?: InputMaybe<SourceKindComparisonExp>
  type?: InputMaybe<ConversationTypeComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "conversation" */
export enum ConversationConstraint {
  /** unique or primary key constraint on columns "id" */
  ConversationPkey = 'conversation_pkey',
  /** unique or primary key constraint on columns "source_kind", "id_on_source" */
  ConversationSourceKindIdOnSourceKey = 'conversation_source_kind_id_on_source_key',
}

/** input type for incrementing numeric columns in table "conversation" */
export type ConversationIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "conversation" */
export type ConversationInsertInput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  line_references?: InputMaybe<LineReferenceArrRelInsertInput>
  messages?: InputMaybe<MessageArrRelInsertInput>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  type?: InputMaybe<Scalars['conversation_type']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type ConversationMaxFields = {
  __typename?: 'ConversationMaxFields'
  archivedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind?: Maybe<Scalars['source_kind']>
  type?: Maybe<Scalars['conversation_type']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type ConversationMinFields = {
  __typename?: 'ConversationMinFields'
  archivedAt?: Maybe<Scalars['timestamptz']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind?: Maybe<Scalars['source_kind']>
  type?: Maybe<Scalars['conversation_type']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "conversation" */
export type ConversationMutationResponse = {
  __typename?: 'ConversationMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Conversation>
}

/** input type for inserting object relation for remote table "conversation" */
export type ConversationObjRelInsertInput = {
  data: ConversationInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<ConversationOnConflict>
}

/** on_conflict condition type for table "conversation" */
export type ConversationOnConflict = {
  constraint: ConversationConstraint
  update_columns?: Array<ConversationUpdateColumn>
  where?: InputMaybe<ConversationBoolExp>
}

/** Ordering options when selecting data from "conversation". */
export type ConversationOrderBy = {
  archivedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  line_references_aggregate?: InputMaybe<LineReferenceAggregateOrderBy>
  messages_aggregate?: InputMaybe<MessageAggregateOrderBy>
  queriedAt?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  type?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: conversation */
export type ConversationPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "conversation" */
export enum ConversationSelectColumn {
  /** column name */
  ArchivedAt = 'archivedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  QueriedAt = 'queriedAt',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "conversation" */
export type ConversationSetInput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  type?: InputMaybe<Scalars['conversation_type']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type ConversationStddevFields = {
  __typename?: 'ConversationStddevFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type ConversationStddevPopFields = {
  __typename?: 'ConversationStddevPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type ConversationStddevSampFields = {
  __typename?: 'ConversationStddevSampFields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "conversation" */
export type ConversationStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: ConversationStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type ConversationStreamcursorvalueinput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  type?: InputMaybe<Scalars['conversation_type']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type ConversationSumFields = {
  __typename?: 'ConversationSumFields'
  id?: Maybe<Scalars['Int']>
}

/** Boolean expression to compare columns of type "conversation_type". All fields are combined with logical 'AND'. */
export type ConversationTypeComparisonExp = {
  _eq?: InputMaybe<Scalars['conversation_type']>
  _gt?: InputMaybe<Scalars['conversation_type']>
  _gte?: InputMaybe<Scalars['conversation_type']>
  _in?: InputMaybe<Array<Scalars['conversation_type']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['conversation_type']>
  _lte?: InputMaybe<Scalars['conversation_type']>
  _neq?: InputMaybe<Scalars['conversation_type']>
  _nin?: InputMaybe<Array<Scalars['conversation_type']>>
}

/** update columns of table "conversation" */
export enum ConversationUpdateColumn {
  /** column name */
  ArchivedAt = 'archivedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  QueriedAt = 'queriedAt',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type ConversationVarPopFields = {
  __typename?: 'ConversationVarPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type ConversationVarSampFields = {
  __typename?: 'ConversationVarSampFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type ConversationVarianceFields = {
  __typename?: 'ConversationVarianceFields'
  id?: Maybe<Scalars['Float']>
}

/** Credentials used to programmatically interact with third-party services on a user's behalf */
export type Credentials = {
  __typename?: 'Credentials'
  accessToken: Scalars['String']
  createdAt: Scalars['timestamptz']
  expiresAt?: Maybe<Scalars['timestamptz']>
  id: Scalars['Int']
  isLogin: Scalars['Boolean']
  refreshToken?: Maybe<Scalars['String']>
  sourceKind: Scalars['source_kind']
  /** An array relationship */
  sources: Array<Source>
  /** An aggregate relationship */
  sourcesAggregate: SourceAggregate
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user?: Maybe<User>
  userId?: Maybe<Scalars['Int']>
  userInfo: Scalars['jsonb']
}

/** Credentials used to programmatically interact with third-party services on a user's behalf */
export type CredentialsSourcesArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

/** Credentials used to programmatically interact with third-party services on a user's behalf */
export type CredentialsSourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

/** Credentials used to programmatically interact with third-party services on a user's behalf */
export type CredentialsUserInfoArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "credentials" */
export type CredentialsAggregate = {
  __typename?: 'CredentialsAggregate'
  aggregate?: Maybe<CredentialsAggregateFields>
  nodes: Array<Credentials>
}

/** aggregate fields of "credentials" */
export type CredentialsAggregateFields = {
  __typename?: 'CredentialsAggregateFields'
  avg?: Maybe<CredentialsAvgFields>
  count: Scalars['Int']
  max?: Maybe<CredentialsMaxFields>
  min?: Maybe<CredentialsMinFields>
  stddev?: Maybe<CredentialsStddevFields>
  stddevPop?: Maybe<CredentialsStddevPopFields>
  stddevSamp?: Maybe<CredentialsStddevSampFields>
  sum?: Maybe<CredentialsSumFields>
  varPop?: Maybe<CredentialsVarPopFields>
  varSamp?: Maybe<CredentialsVarSampFields>
  variance?: Maybe<CredentialsVarianceFields>
}

/** aggregate fields of "credentials" */
export type CredentialsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CredentialsSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "credentials" */
export type CredentialsAggregateOrderBy = {
  avg?: InputMaybe<CredentialsAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<CredentialsMaxOrderBy>
  min?: InputMaybe<CredentialsMinOrderBy>
  stddev?: InputMaybe<CredentialsStddevOrderBy>
  stddev_pop?: InputMaybe<CredentialsStddevPopOrderBy>
  stddev_samp?: InputMaybe<CredentialsStddevSampOrderBy>
  sum?: InputMaybe<CredentialsSumOrderBy>
  var_pop?: InputMaybe<CredentialsVarPopOrderBy>
  var_samp?: InputMaybe<CredentialsVarSampOrderBy>
  variance?: InputMaybe<CredentialsVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type CredentialsAppendInput = {
  userInfo?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "credentials" */
export type CredentialsArrRelInsertInput = {
  data: Array<CredentialsInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<CredentialsOnConflict>
}

/** aggregate avg on columns */
export type CredentialsAvgFields = {
  __typename?: 'CredentialsAvgFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "credentials" */
export type CredentialsAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "credentials". All fields are combined with a logical 'AND'. */
export type CredentialsBoolExp = {
  _and?: InputMaybe<Array<CredentialsBoolExp>>
  _not?: InputMaybe<CredentialsBoolExp>
  _or?: InputMaybe<Array<CredentialsBoolExp>>
  accessToken?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  expiresAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  isLogin?: InputMaybe<BooleanComparisonExp>
  refreshToken?: InputMaybe<StringComparisonExp>
  sourceKind?: InputMaybe<SourceKindComparisonExp>
  sources?: InputMaybe<SourceBoolExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userId?: InputMaybe<IntComparisonExp>
  userInfo?: InputMaybe<JsonbComparisonExp>
}

/** unique or primary key constraints on table "credentials" */
export enum CredentialsConstraint {
  /** unique or primary key constraint on columns "id" */
  CredentialsPkey = 'credentials_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type CredentialsDeleteAtPathInput = {
  userInfo?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type CredentialsDeleteElemInput = {
  userInfo?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type CredentialsDeleteKeyInput = {
  userInfo?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "credentials" */
export type CredentialsIncInput = {
  id?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "credentials" */
export type CredentialsInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  expiresAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isLogin?: InputMaybe<Scalars['Boolean']>
  refreshToken?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  sources?: InputMaybe<SourceArrRelInsertInput>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<UserObjRelInsertInput>
  userId?: InputMaybe<Scalars['Int']>
  userInfo?: InputMaybe<Scalars['jsonb']>
}

/** aggregate max on columns */
export type CredentialsMaxFields = {
  __typename?: 'CredentialsMaxFields'
  accessToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  expiresAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  refreshToken?: Maybe<Scalars['String']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "credentials" */
export type CredentialsMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type CredentialsMinFields = {
  __typename?: 'CredentialsMinFields'
  accessToken?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  expiresAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  refreshToken?: Maybe<Scalars['String']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "credentials" */
export type CredentialsMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "credentials" */
export type CredentialsMutationResponse = {
  __typename?: 'CredentialsMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Credentials>
}

/** input type for inserting object relation for remote table "credentials" */
export type CredentialsObjRelInsertInput = {
  data: CredentialsInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<CredentialsOnConflict>
}

/** on_conflict condition type for table "credentials" */
export type CredentialsOnConflict = {
  constraint: CredentialsConstraint
  update_columns?: Array<CredentialsUpdateColumn>
  where?: InputMaybe<CredentialsBoolExp>
}

/** Ordering options when selecting data from "credentials". */
export type CredentialsOrderBy = {
  accessToken?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  expiresAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  isLogin?: InputMaybe<OrderBy>
  refreshToken?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  sources_aggregate?: InputMaybe<SourceAggregateOrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userId?: InputMaybe<OrderBy>
  userInfo?: InputMaybe<OrderBy>
}

/** primary key columns input for table: credentials */
export type CredentialsPkColumnsInput = {
  id: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type CredentialsPrependInput = {
  userInfo?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "credentials" */
export enum CredentialsSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsLogin = 'isLogin',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserInfo = 'userInfo',
}

/** input type for updating data in table "credentials" */
export type CredentialsSetInput = {
  accessToken?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  expiresAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isLogin?: InputMaybe<Scalars['Boolean']>
  refreshToken?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['Int']>
  userInfo?: InputMaybe<Scalars['jsonb']>
}

/** aggregate stddev on columns */
export type CredentialsStddevFields = {
  __typename?: 'CredentialsStddevFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "credentials" */
export type CredentialsStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type CredentialsStddevPopFields = {
  __typename?: 'CredentialsStddevPopFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "credentials" */
export type CredentialsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type CredentialsStddevSampFields = {
  __typename?: 'CredentialsStddevSampFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "credentials" */
export type CredentialsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "credentials" */
export type CredentialsStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: CredentialsStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type CredentialsStreamcursorvalueinput = {
  accessToken?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  expiresAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isLogin?: InputMaybe<Scalars['Boolean']>
  refreshToken?: InputMaybe<Scalars['String']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['Int']>
  userInfo?: InputMaybe<Scalars['jsonb']>
}

/** aggregate sum on columns */
export type CredentialsSumFields = {
  __typename?: 'CredentialsSumFields'
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "credentials" */
export type CredentialsSumOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** update columns of table "credentials" */
export enum CredentialsUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsLogin = 'isLogin',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserInfo = 'userInfo',
}

/** aggregate var_pop on columns */
export type CredentialsVarPopFields = {
  __typename?: 'CredentialsVarPopFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "credentials" */
export type CredentialsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type CredentialsVarSampFields = {
  __typename?: 'CredentialsVarSampFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "credentials" */
export type CredentialsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type CredentialsVarianceFields = {
  __typename?: 'CredentialsVarianceFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "credentials" */
export type CredentialsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** ordering argument of a cursor */
export enum Cursorordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

export type ExternalRepo = {
  name: Scalars['String']
  origin: Scalars['String']
  owner: Scalars['String']
}

/** columns and relationships of "incoming_webhook" */
export type IncomingWebhook = {
  __typename?: 'IncomingWebhook'
  createdAt: Scalars['timestamptz']
  enabled: Scalars['Boolean']
  id: Scalars['Int']
  idOnSource: Scalars['String']
  secret: Scalars['String']
  /** An object relationship */
  source: Source
  sourceId: Scalars['Int']
  sourceKind: Scalars['source_kind']
  updatedAt: Scalars['timestamptz']
  uuid: Scalars['String']
}

/** aggregated selection of "incoming_webhook" */
export type IncomingWebhookAggregate = {
  __typename?: 'IncomingWebhookAggregate'
  aggregate?: Maybe<IncomingWebhookAggregateFields>
  nodes: Array<IncomingWebhook>
}

/** aggregate fields of "incoming_webhook" */
export type IncomingWebhookAggregateFields = {
  __typename?: 'IncomingWebhookAggregateFields'
  avg?: Maybe<IncomingWebhookAvgFields>
  count: Scalars['Int']
  max?: Maybe<IncomingWebhookMaxFields>
  min?: Maybe<IncomingWebhookMinFields>
  stddev?: Maybe<IncomingWebhookStddevFields>
  stddevPop?: Maybe<IncomingWebhookStddevPopFields>
  stddevSamp?: Maybe<IncomingWebhookStddevSampFields>
  sum?: Maybe<IncomingWebhookSumFields>
  varPop?: Maybe<IncomingWebhookVarPopFields>
  varSamp?: Maybe<IncomingWebhookVarSampFields>
  variance?: Maybe<IncomingWebhookVarianceFields>
}

/** aggregate fields of "incoming_webhook" */
export type IncomingWebhookAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "incoming_webhook" */
export type IncomingWebhookAggregateOrderBy = {
  avg?: InputMaybe<IncomingWebhookAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<IncomingWebhookMaxOrderBy>
  min?: InputMaybe<IncomingWebhookMinOrderBy>
  stddev?: InputMaybe<IncomingWebhookStddevOrderBy>
  stddev_pop?: InputMaybe<IncomingWebhookStddevPopOrderBy>
  stddev_samp?: InputMaybe<IncomingWebhookStddevSampOrderBy>
  sum?: InputMaybe<IncomingWebhookSumOrderBy>
  var_pop?: InputMaybe<IncomingWebhookVarPopOrderBy>
  var_samp?: InputMaybe<IncomingWebhookVarSampOrderBy>
  variance?: InputMaybe<IncomingWebhookVarianceOrderBy>
}

/** input type for inserting array relation for remote table "incoming_webhook" */
export type IncomingWebhookArrRelInsertInput = {
  data: Array<IncomingWebhookInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<IncomingWebhookOnConflict>
}

/** aggregate avg on columns */
export type IncomingWebhookAvgFields = {
  __typename?: 'IncomingWebhookAvgFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "incoming_webhook" */
export type IncomingWebhookAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "incoming_webhook". All fields are combined with a logical 'AND'. */
export type IncomingWebhookBoolExp = {
  _and?: InputMaybe<Array<IncomingWebhookBoolExp>>
  _not?: InputMaybe<IncomingWebhookBoolExp>
  _or?: InputMaybe<Array<IncomingWebhookBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  enabled?: InputMaybe<BooleanComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  idOnSource?: InputMaybe<StringComparisonExp>
  secret?: InputMaybe<StringComparisonExp>
  source?: InputMaybe<SourceBoolExp>
  sourceId?: InputMaybe<IntComparisonExp>
  sourceKind?: InputMaybe<SourceKindComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  uuid?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "incoming_webhook" */
export enum IncomingWebhookConstraint {
  /** unique or primary key constraint on columns "id" */
  IncomingWebhookPkey = 'incoming_webhook_pkey',
  /** unique or primary key constraint on columns "source_kind", "id_on_source" */
  IncomingWebhookSourceKindIdOnSourceKey = 'incoming_webhook_source_kind_id_on_source_key',
}

/** input type for incrementing numeric columns in table "incoming_webhook" */
export type IncomingWebhookIncInput = {
  id?: InputMaybe<Scalars['Int']>
  sourceId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "incoming_webhook" */
export type IncomingWebhookInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  enabled?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  secret?: InputMaybe<Scalars['String']>
  source?: InputMaybe<SourceObjRelInsertInput>
  sourceId?: InputMaybe<Scalars['Int']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  uuid?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type IncomingWebhookMaxFields = {
  __typename?: 'IncomingWebhookMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  secret?: Maybe<Scalars['String']>
  sourceId?: Maybe<Scalars['Int']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  uuid?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "incoming_webhook" */
export type IncomingWebhookMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  secret?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  uuid?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type IncomingWebhookMinFields = {
  __typename?: 'IncomingWebhookMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  secret?: Maybe<Scalars['String']>
  sourceId?: Maybe<Scalars['Int']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  uuid?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "incoming_webhook" */
export type IncomingWebhookMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  secret?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  uuid?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "incoming_webhook" */
export type IncomingWebhookMutationResponse = {
  __typename?: 'IncomingWebhookMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<IncomingWebhook>
}

/** on_conflict condition type for table "incoming_webhook" */
export type IncomingWebhookOnConflict = {
  constraint: IncomingWebhookConstraint
  update_columns?: Array<IncomingWebhookUpdateColumn>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

/** Ordering options when selecting data from "incoming_webhook". */
export type IncomingWebhookOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  enabled?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  secret?: InputMaybe<OrderBy>
  source?: InputMaybe<SourceOrderBy>
  sourceId?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  uuid?: InputMaybe<OrderBy>
}

/** primary key columns input for table: incoming_webhook */
export type IncomingWebhookPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "incoming_webhook" */
export enum IncomingWebhookSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  Secret = 'secret',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid',
}

/** input type for updating data in table "incoming_webhook" */
export type IncomingWebhookSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  enabled?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  secret?: InputMaybe<Scalars['String']>
  sourceId?: InputMaybe<Scalars['Int']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  uuid?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type IncomingWebhookStddevFields = {
  __typename?: 'IncomingWebhookStddevFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "incoming_webhook" */
export type IncomingWebhookStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type IncomingWebhookStddevPopFields = {
  __typename?: 'IncomingWebhookStddevPopFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "incoming_webhook" */
export type IncomingWebhookStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type IncomingWebhookStddevSampFields = {
  __typename?: 'IncomingWebhookStddevSampFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "incoming_webhook" */
export type IncomingWebhookStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "incoming_webhook" */
export type IncomingWebhookStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: IncomingWebhookStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type IncomingWebhookStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  enabled?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  secret?: InputMaybe<Scalars['String']>
  sourceId?: InputMaybe<Scalars['Int']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  uuid?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type IncomingWebhookSumFields = {
  __typename?: 'IncomingWebhookSumFields'
  id?: Maybe<Scalars['Int']>
  sourceId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "incoming_webhook" */
export type IncomingWebhookSumOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** update columns of table "incoming_webhook" */
export enum IncomingWebhookUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  Secret = 'secret',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Uuid = 'uuid',
}

/** aggregate var_pop on columns */
export type IncomingWebhookVarPopFields = {
  __typename?: 'IncomingWebhookVarPopFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "incoming_webhook" */
export type IncomingWebhookVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type IncomingWebhookVarSampFields = {
  __typename?: 'IncomingWebhookVarSampFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "incoming_webhook" */
export type IncomingWebhookVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type IncomingWebhookVarianceFields = {
  __typename?: 'IncomingWebhookVarianceFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "incoming_webhook" */
export type IncomingWebhookVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>
  _eq?: InputMaybe<Scalars['jsonb']>
  _gt?: InputMaybe<Scalars['jsonb']>
  _gte?: InputMaybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>
  _in?: InputMaybe<Array<Scalars['jsonb']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['jsonb']>
  _lte?: InputMaybe<Scalars['jsonb']>
  _neq?: InputMaybe<Scalars['jsonb']>
  _nin?: InputMaybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "line" */
export type Line = {
  __typename?: 'Line'
  /** An array relationship */
  children: Array<Line>
  /** An aggregate relationship */
  childrenAggregate: LineAggregate
  commitHash: Scalars['String']
  content?: Maybe<Scalars['String']>
  contentContext?: Maybe<Scalars['Int']>
  /** An array relationship */
  descendentReferences: Array<LineReference>
  /** An aggregate relationship */
  descendentReferencesAggregate: LineReferenceAggregate
  /** An array relationship */
  descendents: Array<Line>
  /** An aggregate relationship */
  descendentsAggregate: LineAggregate
  id: Scalars['Int']
  lineNumber: Scalars['Int']
  /** An object relationship */
  parent?: Maybe<Line>
  parentLineId?: Maybe<Scalars['Int']>
  parentMatchConfidence?: Maybe<Scalars['numeric']>
  /** An array relationship */
  references: Array<LineReference>
  /** An aggregate relationship */
  referencesAggregate: LineReferenceAggregate
  repoId: Scalars['Int']
  /** An object relationship */
  root?: Maybe<Line>
  rootLineId?: Maybe<Scalars['Int']>
  treePath: Scalars['String']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "line" */
export type LineChildrenArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

/** columns and relationships of "line" */
export type LineChildrenAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

/** columns and relationships of "line" */
export type LineDescendentReferencesArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "line" */
export type LineDescendentReferencesAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "line" */
export type LineDescendentsArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

/** columns and relationships of "line" */
export type LineDescendentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

/** columns and relationships of "line" */
export type LineReferencesArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "line" */
export type LineReferencesAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** aggregated selection of "line" */
export type LineAggregate = {
  __typename?: 'LineAggregate'
  aggregate?: Maybe<LineAggregateFields>
  nodes: Array<Line>
}

/** aggregate fields of "line" */
export type LineAggregateFields = {
  __typename?: 'LineAggregateFields'
  avg?: Maybe<LineAvgFields>
  count: Scalars['Int']
  max?: Maybe<LineMaxFields>
  min?: Maybe<LineMinFields>
  stddev?: Maybe<LineStddevFields>
  stddevPop?: Maybe<LineStddevPopFields>
  stddevSamp?: Maybe<LineStddevSampFields>
  sum?: Maybe<LineSumFields>
  varPop?: Maybe<LineVarPopFields>
  varSamp?: Maybe<LineVarSampFields>
  variance?: Maybe<LineVarianceFields>
}

/** aggregate fields of "line" */
export type LineAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LineSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "line" */
export type LineAggregateOrderBy = {
  avg?: InputMaybe<LineAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<LineMaxOrderBy>
  min?: InputMaybe<LineMinOrderBy>
  stddev?: InputMaybe<LineStddevOrderBy>
  stddev_pop?: InputMaybe<LineStddevPopOrderBy>
  stddev_samp?: InputMaybe<LineStddevSampOrderBy>
  sum?: InputMaybe<LineSumOrderBy>
  var_pop?: InputMaybe<LineVarPopOrderBy>
  var_samp?: InputMaybe<LineVarSampOrderBy>
  variance?: InputMaybe<LineVarianceOrderBy>
}

/** input type for inserting array relation for remote table "line" */
export type LineArrRelInsertInput = {
  data: Array<LineInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<LineOnConflict>
}

/** aggregate avg on columns */
export type LineAvgFields = {
  __typename?: 'LineAvgFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "line" */
export type LineAvgOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "line". All fields are combined with a logical 'AND'. */
export type LineBoolExp = {
  _and?: InputMaybe<Array<LineBoolExp>>
  _not?: InputMaybe<LineBoolExp>
  _or?: InputMaybe<Array<LineBoolExp>>
  children?: InputMaybe<LineBoolExp>
  commitHash?: InputMaybe<StringComparisonExp>
  content?: InputMaybe<StringComparisonExp>
  contentContext?: InputMaybe<IntComparisonExp>
  descendentReferences?: InputMaybe<LineReferenceBoolExp>
  descendents?: InputMaybe<LineBoolExp>
  id?: InputMaybe<IntComparisonExp>
  lineNumber?: InputMaybe<IntComparisonExp>
  parent?: InputMaybe<LineBoolExp>
  parentLineId?: InputMaybe<IntComparisonExp>
  parentMatchConfidence?: InputMaybe<NumericComparisonExp>
  references?: InputMaybe<LineReferenceBoolExp>
  repoId?: InputMaybe<IntComparisonExp>
  root?: InputMaybe<LineBoolExp>
  rootLineId?: InputMaybe<IntComparisonExp>
  treePath?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "line" */
export enum LineConstraint {
  /** unique or primary key constraint on columns "id" */
  LinePkey = 'line_pkey',
  /** unique or primary key constraint on columns "tree_path", "commit_hash", "repo_id", "line_number" */
  LineRepoIdCommitHashTreePathLineNumberKey = 'line_repo_id_commit_hash_tree_path_line_number_key',
}

/** input type for incrementing numeric columns in table "line" */
export type LineIncInput = {
  contentContext?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  lineNumber?: InputMaybe<Scalars['Int']>
  parentLineId?: InputMaybe<Scalars['Int']>
  parentMatchConfidence?: InputMaybe<Scalars['numeric']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "line" */
export type LineInsertInput = {
  children?: InputMaybe<LineArrRelInsertInput>
  commitHash?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  contentContext?: InputMaybe<Scalars['Int']>
  descendentReferences?: InputMaybe<LineReferenceArrRelInsertInput>
  descendents?: InputMaybe<LineArrRelInsertInput>
  id?: InputMaybe<Scalars['Int']>
  lineNumber?: InputMaybe<Scalars['Int']>
  parent?: InputMaybe<LineObjRelInsertInput>
  parentLineId?: InputMaybe<Scalars['Int']>
  parentMatchConfidence?: InputMaybe<Scalars['numeric']>
  references?: InputMaybe<LineReferenceArrRelInsertInput>
  repoId?: InputMaybe<Scalars['Int']>
  root?: InputMaybe<LineObjRelInsertInput>
  rootLineId?: InputMaybe<Scalars['Int']>
  treePath?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type LineMaxFields = {
  __typename?: 'LineMaxFields'
  commitHash?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  contentContext?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  lineNumber?: Maybe<Scalars['Int']>
  parentLineId?: Maybe<Scalars['Int']>
  parentMatchConfidence?: Maybe<Scalars['numeric']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
  treePath?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "line" */
export type LineMaxOrderBy = {
  commitHash?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
  treePath?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type LineMinFields = {
  __typename?: 'LineMinFields'
  commitHash?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['String']>
  contentContext?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  lineNumber?: Maybe<Scalars['Int']>
  parentLineId?: Maybe<Scalars['Int']>
  parentMatchConfidence?: Maybe<Scalars['numeric']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
  treePath?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "line" */
export type LineMinOrderBy = {
  commitHash?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
  treePath?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "line" */
export type LineMutationResponse = {
  __typename?: 'LineMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Line>
}

/** input type for inserting object relation for remote table "line" */
export type LineObjRelInsertInput = {
  data: LineInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<LineOnConflict>
}

/** on_conflict condition type for table "line" */
export type LineOnConflict = {
  constraint: LineConstraint
  update_columns?: Array<LineUpdateColumn>
  where?: InputMaybe<LineBoolExp>
}

/** Ordering options when selecting data from "line". */
export type LineOrderBy = {
  children_aggregate?: InputMaybe<LineAggregateOrderBy>
  commitHash?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  contentContext?: InputMaybe<OrderBy>
  descendentReferences_aggregate?: InputMaybe<LineReferenceAggregateOrderBy>
  descendents_aggregate?: InputMaybe<LineAggregateOrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parent?: InputMaybe<LineOrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  references_aggregate?: InputMaybe<LineReferenceAggregateOrderBy>
  repoId?: InputMaybe<OrderBy>
  root?: InputMaybe<LineOrderBy>
  rootLineId?: InputMaybe<OrderBy>
  treePath?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: line */
export type LinePkColumnsInput = {
  id: Scalars['Int']
}

/** When a message refers to a specific line in a codebase. */
export type LineReference = {
  __typename?: 'LineReference'
  /** An object relationship */
  conversation: Conversation
  conversationId: Scalars['Int']
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  lineId: Scalars['Int']
  /** An object relationship */
  message?: Maybe<Message>
  messageId: Scalars['Int']
  /** An object relationship */
  originalLine: Line
  /** An object relationship */
  repo: Repo
  repoId: Scalars['Int']
  /** An object relationship */
  rootLine: Line
  rootLineId: Scalars['Int']
}

/** aggregated selection of "line_reference" */
export type LineReferenceAggregate = {
  __typename?: 'LineReferenceAggregate'
  aggregate?: Maybe<LineReferenceAggregateFields>
  nodes: Array<LineReference>
}

/** aggregate fields of "line_reference" */
export type LineReferenceAggregateFields = {
  __typename?: 'LineReferenceAggregateFields'
  avg?: Maybe<LineReferenceAvgFields>
  count: Scalars['Int']
  max?: Maybe<LineReferenceMaxFields>
  min?: Maybe<LineReferenceMinFields>
  stddev?: Maybe<LineReferenceStddevFields>
  stddevPop?: Maybe<LineReferenceStddevPopFields>
  stddevSamp?: Maybe<LineReferenceStddevSampFields>
  sum?: Maybe<LineReferenceSumFields>
  varPop?: Maybe<LineReferenceVarPopFields>
  varSamp?: Maybe<LineReferenceVarSampFields>
  variance?: Maybe<LineReferenceVarianceFields>
}

/** aggregate fields of "line_reference" */
export type LineReferenceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LineReferenceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "line_reference" */
export type LineReferenceAggregateOrderBy = {
  avg?: InputMaybe<LineReferenceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<LineReferenceMaxOrderBy>
  min?: InputMaybe<LineReferenceMinOrderBy>
  stddev?: InputMaybe<LineReferenceStddevOrderBy>
  stddev_pop?: InputMaybe<LineReferenceStddevPopOrderBy>
  stddev_samp?: InputMaybe<LineReferenceStddevSampOrderBy>
  sum?: InputMaybe<LineReferenceSumOrderBy>
  var_pop?: InputMaybe<LineReferenceVarPopOrderBy>
  var_samp?: InputMaybe<LineReferenceVarSampOrderBy>
  variance?: InputMaybe<LineReferenceVarianceOrderBy>
}

/** input type for inserting array relation for remote table "line_reference" */
export type LineReferenceArrRelInsertInput = {
  data: Array<LineReferenceInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<LineReferenceOnConflict>
}

/** aggregate avg on columns */
export type LineReferenceAvgFields = {
  __typename?: 'LineReferenceAvgFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "line_reference" */
export type LineReferenceAvgOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "line_reference". All fields are combined with a logical 'AND'. */
export type LineReferenceBoolExp = {
  _and?: InputMaybe<Array<LineReferenceBoolExp>>
  _not?: InputMaybe<LineReferenceBoolExp>
  _or?: InputMaybe<Array<LineReferenceBoolExp>>
  conversation?: InputMaybe<ConversationBoolExp>
  conversationId?: InputMaybe<IntComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  lineId?: InputMaybe<IntComparisonExp>
  message?: InputMaybe<MessageBoolExp>
  messageId?: InputMaybe<IntComparisonExp>
  originalLine?: InputMaybe<LineBoolExp>
  repo?: InputMaybe<RepoBoolExp>
  repoId?: InputMaybe<IntComparisonExp>
  rootLine?: InputMaybe<LineBoolExp>
  rootLineId?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "line_reference" */
export enum LineReferenceConstraint {
  /** unique or primary key constraint on columns "id" */
  LineReferencePkey = 'line_reference_pkey',
}

/** input type for incrementing numeric columns in table "line_reference" */
export type LineReferenceIncInput = {
  conversationId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  lineId?: InputMaybe<Scalars['Int']>
  messageId?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "line_reference" */
export type LineReferenceInsertInput = {
  conversation?: InputMaybe<ConversationObjRelInsertInput>
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  lineId?: InputMaybe<Scalars['Int']>
  message?: InputMaybe<MessageObjRelInsertInput>
  messageId?: InputMaybe<Scalars['Int']>
  originalLine?: InputMaybe<LineObjRelInsertInput>
  repo?: InputMaybe<RepoObjRelInsertInput>
  repoId?: InputMaybe<Scalars['Int']>
  rootLine?: InputMaybe<LineObjRelInsertInput>
  rootLineId?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type LineReferenceMaxFields = {
  __typename?: 'LineReferenceMaxFields'
  conversationId?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  lineId?: Maybe<Scalars['Int']>
  messageId?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "line_reference" */
export type LineReferenceMaxOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type LineReferenceMinFields = {
  __typename?: 'LineReferenceMinFields'
  conversationId?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  lineId?: Maybe<Scalars['Int']>
  messageId?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "line_reference" */
export type LineReferenceMinOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "line_reference" */
export type LineReferenceMutationResponse = {
  __typename?: 'LineReferenceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<LineReference>
}

/** on_conflict condition type for table "line_reference" */
export type LineReferenceOnConflict = {
  constraint: LineReferenceConstraint
  update_columns?: Array<LineReferenceUpdateColumn>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** Ordering options when selecting data from "line_reference". */
export type LineReferenceOrderBy = {
  conversation?: InputMaybe<ConversationOrderBy>
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  message?: InputMaybe<MessageOrderBy>
  messageId?: InputMaybe<OrderBy>
  originalLine?: InputMaybe<LineOrderBy>
  repo?: InputMaybe<RepoOrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLine?: InputMaybe<LineOrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: line_reference */
export type LineReferencePkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "line_reference" */
export enum LineReferenceSelectColumn {
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'lineId',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  RootLineId = 'rootLineId',
}

/** input type for updating data in table "line_reference" */
export type LineReferenceSetInput = {
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  lineId?: InputMaybe<Scalars['Int']>
  messageId?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type LineReferenceStddevFields = {
  __typename?: 'LineReferenceStddevFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "line_reference" */
export type LineReferenceStddevOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type LineReferenceStddevPopFields = {
  __typename?: 'LineReferenceStddevPopFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "line_reference" */
export type LineReferenceStddevPopOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type LineReferenceStddevSampFields = {
  __typename?: 'LineReferenceStddevSampFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "line_reference" */
export type LineReferenceStddevSampOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "line_reference" */
export type LineReferenceStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: LineReferenceStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type LineReferenceStreamcursorvalueinput = {
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  lineId?: InputMaybe<Scalars['Int']>
  messageId?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type LineReferenceSumFields = {
  __typename?: 'LineReferenceSumFields'
  conversationId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  lineId?: Maybe<Scalars['Int']>
  messageId?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "line_reference" */
export type LineReferenceSumOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** update columns of table "line_reference" */
export enum LineReferenceUpdateColumn {
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LineId = 'lineId',
  /** column name */
  MessageId = 'messageId',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  RootLineId = 'rootLineId',
}

/** aggregate var_pop on columns */
export type LineReferenceVarPopFields = {
  __typename?: 'LineReferenceVarPopFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "line_reference" */
export type LineReferenceVarPopOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type LineReferenceVarSampFields = {
  __typename?: 'LineReferenceVarSampFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "line_reference" */
export type LineReferenceVarSampOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type LineReferenceVarianceFields = {
  __typename?: 'LineReferenceVarianceFields'
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineId?: Maybe<Scalars['Float']>
  messageId?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "line_reference" */
export type LineReferenceVarianceOrderBy = {
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineId?: InputMaybe<OrderBy>
  messageId?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** select columns of table "line" */
export enum LineSelectColumn {
  /** column name */
  CommitHash = 'commitHash',
  /** column name */
  Content = 'content',
  /** column name */
  ContentContext = 'contentContext',
  /** column name */
  Id = 'id',
  /** column name */
  LineNumber = 'lineNumber',
  /** column name */
  ParentLineId = 'parentLineId',
  /** column name */
  ParentMatchConfidence = 'parentMatchConfidence',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  RootLineId = 'rootLineId',
  /** column name */
  TreePath = 'treePath',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "line" */
export type LineSetInput = {
  commitHash?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  contentContext?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  lineNumber?: InputMaybe<Scalars['Int']>
  parentLineId?: InputMaybe<Scalars['Int']>
  parentMatchConfidence?: InputMaybe<Scalars['numeric']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
  treePath?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type LineStddevFields = {
  __typename?: 'LineStddevFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "line" */
export type LineStddevOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type LineStddevPopFields = {
  __typename?: 'LineStddevPopFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "line" */
export type LineStddevPopOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type LineStddevSampFields = {
  __typename?: 'LineStddevSampFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "line" */
export type LineStddevSampOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "line" */
export type LineStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: LineStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type LineStreamcursorvalueinput = {
  commitHash?: InputMaybe<Scalars['String']>
  content?: InputMaybe<Scalars['String']>
  contentContext?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  lineNumber?: InputMaybe<Scalars['Int']>
  parentLineId?: InputMaybe<Scalars['Int']>
  parentMatchConfidence?: InputMaybe<Scalars['numeric']>
  repoId?: InputMaybe<Scalars['Int']>
  rootLineId?: InputMaybe<Scalars['Int']>
  treePath?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type LineSumFields = {
  __typename?: 'LineSumFields'
  contentContext?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  lineNumber?: Maybe<Scalars['Int']>
  parentLineId?: Maybe<Scalars['Int']>
  parentMatchConfidence?: Maybe<Scalars['numeric']>
  repoId?: Maybe<Scalars['Int']>
  rootLineId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "line" */
export type LineSumOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** update columns of table "line" */
export enum LineUpdateColumn {
  /** column name */
  CommitHash = 'commitHash',
  /** column name */
  Content = 'content',
  /** column name */
  ContentContext = 'contentContext',
  /** column name */
  Id = 'id',
  /** column name */
  LineNumber = 'lineNumber',
  /** column name */
  ParentLineId = 'parentLineId',
  /** column name */
  ParentMatchConfidence = 'parentMatchConfidence',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  RootLineId = 'rootLineId',
  /** column name */
  TreePath = 'treePath',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type LineVarPopFields = {
  __typename?: 'LineVarPopFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "line" */
export type LineVarPopOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type LineVarSampFields = {
  __typename?: 'LineVarSampFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "line" */
export type LineVarSampOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type LineVarianceFields = {
  __typename?: 'LineVarianceFields'
  contentContext?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  lineNumber?: Maybe<Scalars['Float']>
  parentLineId?: Maybe<Scalars['Float']>
  parentMatchConfidence?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  rootLineId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "line" */
export type LineVarianceOrderBy = {
  contentContext?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lineNumber?: InputMaybe<OrderBy>
  parentLineId?: InputMaybe<OrderBy>
  parentMatchConfidence?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  rootLineId?: InputMaybe<OrderBy>
}

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'Message'
  archivedAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  author: Author
  authorId: Scalars['Int']
  content: Scalars['String']
  /** An object relationship */
  conversation: Conversation
  conversationId: Scalars['Int']
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  idOnSource: Scalars['String']
  /** An aggregate relationship */
  lineReferencesAggregate: LineReferenceAggregate
  /** An array relationship */
  line_references: Array<LineReference>
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind: Scalars['source_kind']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "message" */
export type MessageLineReferencesAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "message" */
export type MessageLine_ReferencesArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** aggregated selection of "message" */
export type MessageAggregate = {
  __typename?: 'MessageAggregate'
  aggregate?: Maybe<MessageAggregateFields>
  nodes: Array<Message>
}

/** aggregate fields of "message" */
export type MessageAggregateFields = {
  __typename?: 'MessageAggregateFields'
  avg?: Maybe<MessageAvgFields>
  count: Scalars['Int']
  max?: Maybe<MessageMaxFields>
  min?: Maybe<MessageMinFields>
  stddev?: Maybe<MessageStddevFields>
  stddevPop?: Maybe<MessageStddevPopFields>
  stddevSamp?: Maybe<MessageStddevSampFields>
  sum?: Maybe<MessageSumFields>
  varPop?: Maybe<MessageVarPopFields>
  varSamp?: Maybe<MessageVarSampFields>
  variance?: Maybe<MessageVarianceFields>
}

/** aggregate fields of "message" */
export type MessageAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MessageSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "message" */
export type MessageAggregateOrderBy = {
  avg?: InputMaybe<MessageAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<MessageMaxOrderBy>
  min?: InputMaybe<MessageMinOrderBy>
  stddev?: InputMaybe<MessageStddevOrderBy>
  stddev_pop?: InputMaybe<MessageStddevPopOrderBy>
  stddev_samp?: InputMaybe<MessageStddevSampOrderBy>
  sum?: InputMaybe<MessageSumOrderBy>
  var_pop?: InputMaybe<MessageVarPopOrderBy>
  var_samp?: InputMaybe<MessageVarSampOrderBy>
  variance?: InputMaybe<MessageVarianceOrderBy>
}

/** input type for inserting array relation for remote table "message" */
export type MessageArrRelInsertInput = {
  data: Array<MessageInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<MessageOnConflict>
}

/** aggregate avg on columns */
export type MessageAvgFields = {
  __typename?: 'MessageAvgFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "message" */
export type MessageAvgOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type MessageBoolExp = {
  _and?: InputMaybe<Array<MessageBoolExp>>
  _not?: InputMaybe<MessageBoolExp>
  _or?: InputMaybe<Array<MessageBoolExp>>
  archivedAt?: InputMaybe<TimestamptzComparisonExp>
  author?: InputMaybe<AuthorBoolExp>
  authorId?: InputMaybe<IntComparisonExp>
  content?: InputMaybe<StringComparisonExp>
  conversation?: InputMaybe<ConversationBoolExp>
  conversationId?: InputMaybe<IntComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  idOnSource?: InputMaybe<StringComparisonExp>
  line_references?: InputMaybe<LineReferenceBoolExp>
  queriedAt?: InputMaybe<TimestamptzComparisonExp>
  sourceKind?: InputMaybe<SourceKindComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "message" */
export enum MessageConstraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = 'message_pkey',
  /** unique or primary key constraint on columns "source_kind", "id_on_source" */
  MessageSourceKindIdOnSourceKey = 'message_source_kind_id_on_source_key',
}

/** input type for incrementing numeric columns in table "message" */
export type MessageIncInput = {
  authorId?: InputMaybe<Scalars['Int']>
  conversationId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "message" */
export type MessageInsertInput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  author?: InputMaybe<AuthorObjRelInsertInput>
  authorId?: InputMaybe<Scalars['Int']>
  content?: InputMaybe<Scalars['String']>
  conversation?: InputMaybe<ConversationObjRelInsertInput>
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  line_references?: InputMaybe<LineReferenceArrRelInsertInput>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type MessageMaxFields = {
  __typename?: 'MessageMaxFields'
  archivedAt?: Maybe<Scalars['timestamptz']>
  authorId?: Maybe<Scalars['Int']>
  content?: Maybe<Scalars['String']>
  conversationId?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "message" */
export type MessageMaxOrderBy = {
  archivedAt?: InputMaybe<OrderBy>
  authorId?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  queriedAt?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type MessageMinFields = {
  __typename?: 'MessageMinFields'
  archivedAt?: Maybe<Scalars['timestamptz']>
  authorId?: Maybe<Scalars['Int']>
  content?: Maybe<Scalars['String']>
  conversationId?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  idOnSource?: Maybe<Scalars['String']>
  queriedAt?: Maybe<Scalars['timestamptz']>
  sourceKind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "message" */
export type MessageMinOrderBy = {
  archivedAt?: InputMaybe<OrderBy>
  authorId?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  queriedAt?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "message" */
export type MessageMutationResponse = {
  __typename?: 'MessageMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Message>
}

/** input type for inserting object relation for remote table "message" */
export type MessageObjRelInsertInput = {
  data: MessageInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<MessageOnConflict>
}

/** on_conflict condition type for table "message" */
export type MessageOnConflict = {
  constraint: MessageConstraint
  update_columns?: Array<MessageUpdateColumn>
  where?: InputMaybe<MessageBoolExp>
}

/** Ordering options when selecting data from "message". */
export type MessageOrderBy = {
  archivedAt?: InputMaybe<OrderBy>
  author?: InputMaybe<AuthorOrderBy>
  authorId?: InputMaybe<OrderBy>
  content?: InputMaybe<OrderBy>
  conversation?: InputMaybe<ConversationOrderBy>
  conversationId?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  idOnSource?: InputMaybe<OrderBy>
  line_references_aggregate?: InputMaybe<LineReferenceAggregateOrderBy>
  queriedAt?: InputMaybe<OrderBy>
  sourceKind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: message */
export type MessagePkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "message" */
export enum MessageSelectColumn {
  /** column name */
  ArchivedAt = 'archivedAt',
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  QueriedAt = 'queriedAt',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "message" */
export type MessageSetInput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  authorId?: InputMaybe<Scalars['Int']>
  content?: InputMaybe<Scalars['String']>
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type MessageStddevFields = {
  __typename?: 'MessageStddevFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "message" */
export type MessageStddevOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type MessageStddevPopFields = {
  __typename?: 'MessageStddevPopFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "message" */
export type MessageStddevPopOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type MessageStddevSampFields = {
  __typename?: 'MessageStddevSampFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "message" */
export type MessageStddevSampOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "message" */
export type MessageStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: MessageStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type MessageStreamcursorvalueinput = {
  archivedAt?: InputMaybe<Scalars['timestamptz']>
  authorId?: InputMaybe<Scalars['Int']>
  content?: InputMaybe<Scalars['String']>
  conversationId?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  idOnSource?: InputMaybe<Scalars['String']>
  queriedAt?: InputMaybe<Scalars['timestamptz']>
  sourceKind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type MessageSumFields = {
  __typename?: 'MessageSumFields'
  authorId?: Maybe<Scalars['Int']>
  conversationId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "message" */
export type MessageSumOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** update columns of table "message" */
export enum MessageUpdateColumn {
  /** column name */
  ArchivedAt = 'archivedAt',
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdOnSource = 'idOnSource',
  /** column name */
  QueriedAt = 'queriedAt',
  /** column name */
  SourceKind = 'sourceKind',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type MessageVarPopFields = {
  __typename?: 'MessageVarPopFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "message" */
export type MessageVarPopOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type MessageVarSampFields = {
  __typename?: 'MessageVarSampFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "message" */
export type MessageVarSampOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type MessageVarianceFields = {
  __typename?: 'MessageVarianceFields'
  authorId?: Maybe<Scalars['Float']>
  conversationId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "message" */
export type MessageVarianceOrderBy = {
  authorId?: InputMaybe<OrderBy>
  conversationId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

/** columns and relationships of "repo" */
export type Repo = {
  __typename?: 'Repo'
  /** An aggregate relationship */
  branchPointersAggregate: BranchPointerAggregate
  /** An array relationship */
  branch_pointers: Array<BranchPointer>
  /** An array relationship */
  commits: Array<Commit>
  /** An aggregate relationship */
  commitsAggregate: CommitAggregate
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  /** An aggregate relationship */
  lineReferencesAggregate: LineReferenceAggregate
  /** An array relationship */
  line_references: Array<LineReference>
  mainBranchName?: Maybe<Scalars['String']>
  name: Scalars['String']
  origin: Scalars['source_kind']
  owner: Scalars['String']
  updatedAt: Scalars['timestamptz']
  /** An aggregate relationship */
  workspaceReposAggregate: WorkspaceRepoAggregate
  /** An array relationship */
  workspace_repos: Array<WorkspaceRepo>
}

/** columns and relationships of "repo" */
export type RepoBranchPointersAggregateArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

/** columns and relationships of "repo" */
export type RepoBranch_PointersArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

/** columns and relationships of "repo" */
export type RepoCommitsArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

/** columns and relationships of "repo" */
export type RepoCommitsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

/** columns and relationships of "repo" */
export type RepoLineReferencesAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "repo" */
export type RepoLine_ReferencesArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

/** columns and relationships of "repo" */
export type RepoWorkspaceReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

/** columns and relationships of "repo" */
export type RepoWorkspace_ReposArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

/** aggregated selection of "repo" */
export type RepoAggregate = {
  __typename?: 'RepoAggregate'
  aggregate?: Maybe<RepoAggregateFields>
  nodes: Array<Repo>
}

/** aggregate fields of "repo" */
export type RepoAggregateFields = {
  __typename?: 'RepoAggregateFields'
  avg?: Maybe<RepoAvgFields>
  count: Scalars['Int']
  max?: Maybe<RepoMaxFields>
  min?: Maybe<RepoMinFields>
  stddev?: Maybe<RepoStddevFields>
  stddevPop?: Maybe<RepoStddevPopFields>
  stddevSamp?: Maybe<RepoStddevSampFields>
  sum?: Maybe<RepoSumFields>
  varPop?: Maybe<RepoVarPopFields>
  varSamp?: Maybe<RepoVarSampFields>
  variance?: Maybe<RepoVarianceFields>
}

/** aggregate fields of "repo" */
export type RepoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RepoSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type RepoAvgFields = {
  __typename?: 'RepoAvgFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "repo". All fields are combined with a logical 'AND'. */
export type RepoBoolExp = {
  _and?: InputMaybe<Array<RepoBoolExp>>
  _not?: InputMaybe<RepoBoolExp>
  _or?: InputMaybe<Array<RepoBoolExp>>
  branch_pointers?: InputMaybe<BranchPointerBoolExp>
  commits?: InputMaybe<CommitBoolExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  line_references?: InputMaybe<LineReferenceBoolExp>
  mainBranchName?: InputMaybe<StringComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  origin?: InputMaybe<SourceKindComparisonExp>
  owner?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  workspace_repos?: InputMaybe<WorkspaceRepoBoolExp>
}

/** unique or primary key constraints on table "repo" */
export enum RepoConstraint {
  /** unique or primary key constraint on columns "origin", "owner", "name" */
  RepoOriginOwnerNameIdx = 'repo_origin_owner_name_idx',
  /** unique or primary key constraint on columns "id" */
  RepoPkey = 'repo_pkey',
}

/** input type for incrementing numeric columns in table "repo" */
export type RepoIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "repo" */
export type RepoInsertInput = {
  branch_pointers?: InputMaybe<BranchPointerArrRelInsertInput>
  commits?: InputMaybe<CommitArrRelInsertInput>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  line_references?: InputMaybe<LineReferenceArrRelInsertInput>
  mainBranchName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  origin?: InputMaybe<Scalars['source_kind']>
  owner?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspace_repos?: InputMaybe<WorkspaceRepoArrRelInsertInput>
}

/** aggregate max on columns */
export type RepoMaxFields = {
  __typename?: 'RepoMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  mainBranchName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['source_kind']>
  owner?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type RepoMinFields = {
  __typename?: 'RepoMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  mainBranchName?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['source_kind']>
  owner?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "repo" */
export type RepoMutationResponse = {
  __typename?: 'RepoMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Repo>
}

/** input type for inserting object relation for remote table "repo" */
export type RepoObjRelInsertInput = {
  data: RepoInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<RepoOnConflict>
}

/** on_conflict condition type for table "repo" */
export type RepoOnConflict = {
  constraint: RepoConstraint
  update_columns?: Array<RepoUpdateColumn>
  where?: InputMaybe<RepoBoolExp>
}

/** Ordering options when selecting data from "repo". */
export type RepoOrderBy = {
  branch_pointers_aggregate?: InputMaybe<BranchPointerAggregateOrderBy>
  commits_aggregate?: InputMaybe<CommitAggregateOrderBy>
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  line_references_aggregate?: InputMaybe<LineReferenceAggregateOrderBy>
  mainBranchName?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  origin?: InputMaybe<OrderBy>
  owner?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspace_repos_aggregate?: InputMaybe<WorkspaceRepoAggregateOrderBy>
}

/** primary key columns input for table: repo */
export type RepoPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "repo" */
export enum RepoSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MainBranchName = 'mainBranchName',
  /** column name */
  Name = 'name',
  /** column name */
  Origin = 'origin',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "repo" */
export type RepoSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  mainBranchName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  origin?: InputMaybe<Scalars['source_kind']>
  owner?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type RepoStddevFields = {
  __typename?: 'RepoStddevFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type RepoStddevPopFields = {
  __typename?: 'RepoStddevPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type RepoStddevSampFields = {
  __typename?: 'RepoStddevSampFields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "repo" */
export type RepoStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: RepoStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type RepoStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  mainBranchName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  origin?: InputMaybe<Scalars['source_kind']>
  owner?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type RepoSumFields = {
  __typename?: 'RepoSumFields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "repo" */
export enum RepoUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MainBranchName = 'mainBranchName',
  /** column name */
  Name = 'name',
  /** column name */
  Origin = 'origin',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type RepoVarPopFields = {
  __typename?: 'RepoVarPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type RepoVarSampFields = {
  __typename?: 'RepoVarSampFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type RepoVarianceFields = {
  __typename?: 'RepoVarianceFields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "source" */
export type Source = {
  __typename?: 'Source'
  backfillConfig?: Maybe<Scalars['jsonb']>
  backfillEnabled: Scalars['Boolean']
  config?: Maybe<Scalars['jsonb']>
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  credentials?: Maybe<Credentials>
  credentialsId?: Maybe<Scalars['Int']>
  /** An array relationship */
  events: Array<SourceEvent>
  /** An aggregate relationship */
  eventsAggregate: SourceEventAggregate
  id: Scalars['Int']
  /** An aggregate relationship */
  incomingWebhooksAggregate: IncomingWebhookAggregate
  /** An array relationship */
  incoming_webhooks: Array<IncomingWebhook>
  kind: Scalars['source_kind']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  workspace: Workspace
  workspaceId: Scalars['Int']
}

/** columns and relationships of "source" */
export type SourceBackfillConfigArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "source" */
export type SourceConfigArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "source" */
export type SourceEventsArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

/** columns and relationships of "source" */
export type SourceEventsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

/** columns and relationships of "source" */
export type SourceIncomingWebhooksAggregateArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

/** columns and relationships of "source" */
export type SourceIncoming_WebhooksArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

/** aggregated selection of "source" */
export type SourceAggregate = {
  __typename?: 'SourceAggregate'
  aggregate?: Maybe<SourceAggregateFields>
  nodes: Array<Source>
}

/** aggregate fields of "source" */
export type SourceAggregateFields = {
  __typename?: 'SourceAggregateFields'
  avg?: Maybe<SourceAvgFields>
  count: Scalars['Int']
  max?: Maybe<SourceMaxFields>
  min?: Maybe<SourceMinFields>
  stddev?: Maybe<SourceStddevFields>
  stddevPop?: Maybe<SourceStddevPopFields>
  stddevSamp?: Maybe<SourceStddevSampFields>
  sum?: Maybe<SourceSumFields>
  varPop?: Maybe<SourceVarPopFields>
  varSamp?: Maybe<SourceVarSampFields>
  variance?: Maybe<SourceVarianceFields>
}

/** aggregate fields of "source" */
export type SourceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SourceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "source" */
export type SourceAggregateOrderBy = {
  avg?: InputMaybe<SourceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<SourceMaxOrderBy>
  min?: InputMaybe<SourceMinOrderBy>
  stddev?: InputMaybe<SourceStddevOrderBy>
  stddev_pop?: InputMaybe<SourceStddevPopOrderBy>
  stddev_samp?: InputMaybe<SourceStddevSampOrderBy>
  sum?: InputMaybe<SourceSumOrderBy>
  var_pop?: InputMaybe<SourceVarPopOrderBy>
  var_samp?: InputMaybe<SourceVarSampOrderBy>
  variance?: InputMaybe<SourceVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type SourceAppendInput = {
  backfillConfig?: InputMaybe<Scalars['jsonb']>
  config?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "source" */
export type SourceArrRelInsertInput = {
  data: Array<SourceInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<SourceOnConflict>
}

/** aggregate avg on columns */
export type SourceAvgFields = {
  __typename?: 'SourceAvgFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "source" */
export type SourceAvgOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "source". All fields are combined with a logical 'AND'. */
export type SourceBoolExp = {
  _and?: InputMaybe<Array<SourceBoolExp>>
  _not?: InputMaybe<SourceBoolExp>
  _or?: InputMaybe<Array<SourceBoolExp>>
  backfillConfig?: InputMaybe<JsonbComparisonExp>
  backfillEnabled?: InputMaybe<BooleanComparisonExp>
  config?: InputMaybe<JsonbComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  credentials?: InputMaybe<CredentialsBoolExp>
  credentialsId?: InputMaybe<IntComparisonExp>
  events?: InputMaybe<SourceEventBoolExp>
  id?: InputMaybe<IntComparisonExp>
  incoming_webhooks?: InputMaybe<IncomingWebhookBoolExp>
  kind?: InputMaybe<SourceKindComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  workspace?: InputMaybe<WorkspaceBoolExp>
  workspaceId?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "source" */
export enum SourceConstraint {
  /** unique or primary key constraint on columns "id" */
  SourcePkey = 'source_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type SourceDeleteAtPathInput = {
  backfillConfig?: InputMaybe<Array<Scalars['String']>>
  config?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type SourceDeleteElemInput = {
  backfillConfig?: InputMaybe<Scalars['Int']>
  config?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type SourceDeleteKeyInput = {
  backfillConfig?: InputMaybe<Scalars['String']>
  config?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "source_event" */
export type SourceEvent = {
  __typename?: 'SourceEvent'
  createdAt: Scalars['timestamptz']
  debugOutput?: Maybe<Scalars['jsonb']>
  id: Scalars['Int']
  payload: Scalars['jsonb']
  processedAt?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  source: Source
  sourceId: Scalars['Int']
  updatedAt: Scalars['timestamptz']
  wasSuccessful?: Maybe<Scalars['Boolean']>
}

/** columns and relationships of "source_event" */
export type SourceEventDebugOutputArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "source_event" */
export type SourceEventPayloadArgs = {
  path?: InputMaybe<Scalars['String']>
}

/** aggregated selection of "source_event" */
export type SourceEventAggregate = {
  __typename?: 'SourceEventAggregate'
  aggregate?: Maybe<SourceEventAggregateFields>
  nodes: Array<SourceEvent>
}

/** aggregate fields of "source_event" */
export type SourceEventAggregateFields = {
  __typename?: 'SourceEventAggregateFields'
  avg?: Maybe<SourceEventAvgFields>
  count: Scalars['Int']
  max?: Maybe<SourceEventMaxFields>
  min?: Maybe<SourceEventMinFields>
  stddev?: Maybe<SourceEventStddevFields>
  stddevPop?: Maybe<SourceEventStddevPopFields>
  stddevSamp?: Maybe<SourceEventStddevSampFields>
  sum?: Maybe<SourceEventSumFields>
  varPop?: Maybe<SourceEventVarPopFields>
  varSamp?: Maybe<SourceEventVarSampFields>
  variance?: Maybe<SourceEventVarianceFields>
}

/** aggregate fields of "source_event" */
export type SourceEventAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SourceEventSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "source_event" */
export type SourceEventAggregateOrderBy = {
  avg?: InputMaybe<SourceEventAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<SourceEventMaxOrderBy>
  min?: InputMaybe<SourceEventMinOrderBy>
  stddev?: InputMaybe<SourceEventStddevOrderBy>
  stddev_pop?: InputMaybe<SourceEventStddevPopOrderBy>
  stddev_samp?: InputMaybe<SourceEventStddevSampOrderBy>
  sum?: InputMaybe<SourceEventSumOrderBy>
  var_pop?: InputMaybe<SourceEventVarPopOrderBy>
  var_samp?: InputMaybe<SourceEventVarSampOrderBy>
  variance?: InputMaybe<SourceEventVarianceOrderBy>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type SourceEventAppendInput = {
  debugOutput?: InputMaybe<Scalars['jsonb']>
  payload?: InputMaybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "source_event" */
export type SourceEventArrRelInsertInput = {
  data: Array<SourceEventInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<SourceEventOnConflict>
}

/** aggregate avg on columns */
export type SourceEventAvgFields = {
  __typename?: 'SourceEventAvgFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "source_event" */
export type SourceEventAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "source_event". All fields are combined with a logical 'AND'. */
export type SourceEventBoolExp = {
  _and?: InputMaybe<Array<SourceEventBoolExp>>
  _not?: InputMaybe<SourceEventBoolExp>
  _or?: InputMaybe<Array<SourceEventBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  debugOutput?: InputMaybe<JsonbComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  payload?: InputMaybe<JsonbComparisonExp>
  processedAt?: InputMaybe<TimestamptzComparisonExp>
  source?: InputMaybe<SourceBoolExp>
  sourceId?: InputMaybe<IntComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  wasSuccessful?: InputMaybe<BooleanComparisonExp>
}

/** unique or primary key constraints on table "source_event" */
export enum SourceEventConstraint {
  /** unique or primary key constraint on columns "id" */
  SourceEventPkey = 'source_event_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type SourceEventDeleteAtPathInput = {
  debugOutput?: InputMaybe<Array<Scalars['String']>>
  payload?: InputMaybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type SourceEventDeleteElemInput = {
  debugOutput?: InputMaybe<Scalars['Int']>
  payload?: InputMaybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type SourceEventDeleteKeyInput = {
  debugOutput?: InputMaybe<Scalars['String']>
  payload?: InputMaybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "source_event" */
export type SourceEventIncInput = {
  id?: InputMaybe<Scalars['Int']>
  sourceId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "source_event" */
export type SourceEventInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  debugOutput?: InputMaybe<Scalars['jsonb']>
  id?: InputMaybe<Scalars['Int']>
  payload?: InputMaybe<Scalars['jsonb']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  source?: InputMaybe<SourceObjRelInsertInput>
  sourceId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  wasSuccessful?: InputMaybe<Scalars['Boolean']>
}

/** aggregate max on columns */
export type SourceEventMaxFields = {
  __typename?: 'SourceEventMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  processedAt?: Maybe<Scalars['timestamptz']>
  sourceId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "source_event" */
export type SourceEventMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type SourceEventMinFields = {
  __typename?: 'SourceEventMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  processedAt?: Maybe<Scalars['timestamptz']>
  sourceId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "source_event" */
export type SourceEventMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "source_event" */
export type SourceEventMutationResponse = {
  __typename?: 'SourceEventMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<SourceEvent>
}

/** on_conflict condition type for table "source_event" */
export type SourceEventOnConflict = {
  constraint: SourceEventConstraint
  update_columns?: Array<SourceEventUpdateColumn>
  where?: InputMaybe<SourceEventBoolExp>
}

/** Ordering options when selecting data from "source_event". */
export type SourceEventOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  debugOutput?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  payload?: InputMaybe<OrderBy>
  processedAt?: InputMaybe<OrderBy>
  source?: InputMaybe<SourceOrderBy>
  sourceId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  wasSuccessful?: InputMaybe<OrderBy>
}

/** primary key columns input for table: source_event */
export type SourceEventPkColumnsInput = {
  id: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type SourceEventPrependInput = {
  debugOutput?: InputMaybe<Scalars['jsonb']>
  payload?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "source_event" */
export enum SourceEventSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DebugOutput = 'debugOutput',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WasSuccessful = 'wasSuccessful',
}

/** input type for updating data in table "source_event" */
export type SourceEventSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  debugOutput?: InputMaybe<Scalars['jsonb']>
  id?: InputMaybe<Scalars['Int']>
  payload?: InputMaybe<Scalars['jsonb']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  sourceId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  wasSuccessful?: InputMaybe<Scalars['Boolean']>
}

/** aggregate stddev on columns */
export type SourceEventStddevFields = {
  __typename?: 'SourceEventStddevFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "source_event" */
export type SourceEventStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type SourceEventStddevPopFields = {
  __typename?: 'SourceEventStddevPopFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "source_event" */
export type SourceEventStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type SourceEventStddevSampFields = {
  __typename?: 'SourceEventStddevSampFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "source_event" */
export type SourceEventStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "source_event" */
export type SourceEventStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: SourceEventStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type SourceEventStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  debugOutput?: InputMaybe<Scalars['jsonb']>
  id?: InputMaybe<Scalars['Int']>
  payload?: InputMaybe<Scalars['jsonb']>
  processedAt?: InputMaybe<Scalars['timestamptz']>
  sourceId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  wasSuccessful?: InputMaybe<Scalars['Boolean']>
}

/** aggregate sum on columns */
export type SourceEventSumFields = {
  __typename?: 'SourceEventSumFields'
  id?: Maybe<Scalars['Int']>
  sourceId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "source_event" */
export type SourceEventSumOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** update columns of table "source_event" */
export enum SourceEventUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DebugOutput = 'debugOutput',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  SourceId = 'sourceId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WasSuccessful = 'wasSuccessful',
}

/** aggregate var_pop on columns */
export type SourceEventVarPopFields = {
  __typename?: 'SourceEventVarPopFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "source_event" */
export type SourceEventVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type SourceEventVarSampFields = {
  __typename?: 'SourceEventVarSampFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "source_event" */
export type SourceEventVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type SourceEventVarianceFields = {
  __typename?: 'SourceEventVarianceFields'
  id?: Maybe<Scalars['Float']>
  sourceId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "source_event" */
export type SourceEventVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  sourceId?: InputMaybe<OrderBy>
}

/** input type for incrementing numeric columns in table "source" */
export type SourceIncInput = {
  credentialsId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "source" */
export type SourceInsertInput = {
  backfillConfig?: InputMaybe<Scalars['jsonb']>
  backfillEnabled?: InputMaybe<Scalars['Boolean']>
  config?: InputMaybe<Scalars['jsonb']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  credentials?: InputMaybe<CredentialsObjRelInsertInput>
  credentialsId?: InputMaybe<Scalars['Int']>
  events?: InputMaybe<SourceEventArrRelInsertInput>
  id?: InputMaybe<Scalars['Int']>
  incoming_webhooks?: InputMaybe<IncomingWebhookArrRelInsertInput>
  kind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspace?: InputMaybe<WorkspaceObjRelInsertInput>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** Boolean expression to compare columns of type "source_kind". All fields are combined with logical 'AND'. */
export type SourceKindComparisonExp = {
  _eq?: InputMaybe<Scalars['source_kind']>
  _gt?: InputMaybe<Scalars['source_kind']>
  _gte?: InputMaybe<Scalars['source_kind']>
  _in?: InputMaybe<Array<Scalars['source_kind']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['source_kind']>
  _lte?: InputMaybe<Scalars['source_kind']>
  _neq?: InputMaybe<Scalars['source_kind']>
  _nin?: InputMaybe<Array<Scalars['source_kind']>>
}

/** aggregate max on columns */
export type SourceMaxFields = {
  __typename?: 'SourceMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  credentialsId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  kind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "source" */
export type SourceMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  kind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type SourceMinFields = {
  __typename?: 'SourceMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  credentialsId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  kind?: Maybe<Scalars['source_kind']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "source" */
export type SourceMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  kind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "source" */
export type SourceMutationResponse = {
  __typename?: 'SourceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Source>
}

/** input type for inserting object relation for remote table "source" */
export type SourceObjRelInsertInput = {
  data: SourceInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<SourceOnConflict>
}

/** on_conflict condition type for table "source" */
export type SourceOnConflict = {
  constraint: SourceConstraint
  update_columns?: Array<SourceUpdateColumn>
  where?: InputMaybe<SourceBoolExp>
}

/** Ordering options when selecting data from "source". */
export type SourceOrderBy = {
  backfillConfig?: InputMaybe<OrderBy>
  backfillEnabled?: InputMaybe<OrderBy>
  config?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  credentials?: InputMaybe<CredentialsOrderBy>
  credentialsId?: InputMaybe<OrderBy>
  events_aggregate?: InputMaybe<SourceEventAggregateOrderBy>
  id?: InputMaybe<OrderBy>
  incoming_webhooks_aggregate?: InputMaybe<IncomingWebhookAggregateOrderBy>
  kind?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspace?: InputMaybe<WorkspaceOrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: source */
export type SourcePkColumnsInput = {
  id: Scalars['Int']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type SourcePrependInput = {
  backfillConfig?: InputMaybe<Scalars['jsonb']>
  config?: InputMaybe<Scalars['jsonb']>
}

/** select columns of table "source" */
export enum SourceSelectColumn {
  /** column name */
  BackfillConfig = 'backfillConfig',
  /** column name */
  BackfillEnabled = 'backfillEnabled',
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CredentialsId = 'credentialsId',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "source" */
export type SourceSetInput = {
  backfillConfig?: InputMaybe<Scalars['jsonb']>
  backfillEnabled?: InputMaybe<Scalars['Boolean']>
  config?: InputMaybe<Scalars['jsonb']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  credentialsId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  kind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type SourceStddevFields = {
  __typename?: 'SourceStddevFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "source" */
export type SourceStddevOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type SourceStddevPopFields = {
  __typename?: 'SourceStddevPopFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "source" */
export type SourceStddevPopOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type SourceStddevSampFields = {
  __typename?: 'SourceStddevSampFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "source" */
export type SourceStddevSampOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "source" */
export type SourceStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: SourceStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type SourceStreamcursorvalueinput = {
  backfillConfig?: InputMaybe<Scalars['jsonb']>
  backfillEnabled?: InputMaybe<Scalars['Boolean']>
  config?: InputMaybe<Scalars['jsonb']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  credentialsId?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['Int']>
  kind?: InputMaybe<Scalars['source_kind']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type SourceSumFields = {
  __typename?: 'SourceSumFields'
  credentialsId?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['Int']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "source" */
export type SourceSumOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** update columns of table "source" */
export enum SourceUpdateColumn {
  /** column name */
  BackfillConfig = 'backfillConfig',
  /** column name */
  BackfillEnabled = 'backfillEnabled',
  /** column name */
  Config = 'config',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CredentialsId = 'credentialsId',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** aggregate var_pop on columns */
export type SourceVarPopFields = {
  __typename?: 'SourceVarPopFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "source" */
export type SourceVarPopOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type SourceVarSampFields = {
  __typename?: 'SourceVarSampFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "source" */
export type SourceVarSampOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type SourceVarianceFields = {
  __typename?: 'SourceVarianceFields'
  credentialsId?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "source" */
export type SourceVarianceOrderBy = {
  credentialsId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _isNull?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'User'
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  credentials: Array<Credentials>
  /** An aggregate relationship */
  credentialsAggregate: CredentialsAggregate
  email: Scalars['String']
  id: Scalars['Int']
  imageUrl?: Maybe<Scalars['String']>
  realName?: Maybe<Scalars['String']>
  saltedPassword?: Maybe<Scalars['String']>
  updatedAt: Scalars['timestamptz']
  useRealName: Scalars['Boolean']
  /** An aggregate relationship */
  userWorkspacesAggregate: UserWorkspaceAggregate
  /** An array relationship */
  user_workspaces: Array<UserWorkspace>
  username: Scalars['String']
}

/** columns and relationships of "user" */
export type UserCredentialsArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

/** columns and relationships of "user" */
export type UserCredentialsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

/** columns and relationships of "user" */
export type UserUserWorkspacesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

/** columns and relationships of "user" */
export type UserUser_WorkspacesArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'UserAggregate'
  aggregate?: Maybe<UserAggregateFields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields'
  avg?: Maybe<UserAvgFields>
  count: Scalars['Int']
  max?: Maybe<UserMaxFields>
  min?: Maybe<UserMinFields>
  stddev?: Maybe<UserStddevFields>
  stddevPop?: Maybe<UserStddevPopFields>
  stddevSamp?: Maybe<UserStddevSampFields>
  sum?: Maybe<UserSumFields>
  varPop?: Maybe<UserVarPopFields>
  varSamp?: Maybe<UserVarSampFields>
  variance?: Maybe<UserVarianceFields>
}

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type UserAvgFields = {
  __typename?: 'UserAvgFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<Array<UserBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  credentials?: InputMaybe<CredentialsBoolExp>
  email?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  imageUrl?: InputMaybe<StringComparisonExp>
  realName?: InputMaybe<StringComparisonExp>
  saltedPassword?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  useRealName?: InputMaybe<BooleanComparisonExp>
  user_workspaces?: InputMaybe<UserWorkspaceBoolExp>
  username?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmail = 'user_email',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint on columns "username" */
  UserUsername = 'user_username',
}

/** input type for incrementing numeric columns in table "user" */
export type UserIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  credentials?: InputMaybe<CredentialsArrRelInsertInput>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  imageUrl?: InputMaybe<Scalars['String']>
  realName?: InputMaybe<Scalars['String']>
  saltedPassword?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  useRealName?: InputMaybe<Scalars['Boolean']>
  user_workspaces?: InputMaybe<UserWorkspaceArrRelInsertInput>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  realName?: Maybe<Scalars['String']>
  saltedPassword?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  imageUrl?: Maybe<Scalars['String']>
  realName?: Maybe<Scalars['String']>
  saltedPassword?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  username?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>
}

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint
  update_columns?: Array<UserUpdateColumn>
  where?: InputMaybe<UserBoolExp>
}

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  credentials_aggregate?: InputMaybe<CredentialsAggregateOrderBy>
  email?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  imageUrl?: InputMaybe<OrderBy>
  realName?: InputMaybe<OrderBy>
  saltedPassword?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  useRealName?: InputMaybe<OrderBy>
  user_workspaces_aggregate?: InputMaybe<UserWorkspaceAggregateOrderBy>
  username?: InputMaybe<OrderBy>
}

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  RealName = 'realName',
  /** column name */
  SaltedPassword = 'saltedPassword',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UseRealName = 'useRealName',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  imageUrl?: InputMaybe<Scalars['String']>
  realName?: InputMaybe<Scalars['String']>
  saltedPassword?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  useRealName?: InputMaybe<Scalars['Boolean']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type UserStddevFields = {
  __typename?: 'UserStddevFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type UserStddevPopFields = {
  __typename?: 'UserStddevPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type UserStddevSampFields = {
  __typename?: 'UserStddevSampFields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "user" */
export type UserStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: UserStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type UserStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  imageUrl?: InputMaybe<Scalars['String']>
  realName?: InputMaybe<Scalars['String']>
  saltedPassword?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  useRealName?: InputMaybe<Scalars['Boolean']>
  username?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: 'UserSumFields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  RealName = 'realName',
  /** column name */
  SaltedPassword = 'saltedPassword',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UseRealName = 'useRealName',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type UserVarPopFields = {
  __typename?: 'UserVarPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type UserVarSampFields = {
  __typename?: 'UserVarSampFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type UserVarianceFields = {
  __typename?: 'UserVarianceFields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "user_workspace" */
export type UserWorkspace = {
  __typename?: 'UserWorkspace'
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  isAdmin: Scalars['Boolean']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userId: Scalars['Int']
  /** An object relationship */
  workspace: Workspace
  workspaceId: Scalars['Int']
}

/** aggregated selection of "user_workspace" */
export type UserWorkspaceAggregate = {
  __typename?: 'UserWorkspaceAggregate'
  aggregate?: Maybe<UserWorkspaceAggregateFields>
  nodes: Array<UserWorkspace>
}

/** aggregate fields of "user_workspace" */
export type UserWorkspaceAggregateFields = {
  __typename?: 'UserWorkspaceAggregateFields'
  avg?: Maybe<UserWorkspaceAvgFields>
  count: Scalars['Int']
  max?: Maybe<UserWorkspaceMaxFields>
  min?: Maybe<UserWorkspaceMinFields>
  stddev?: Maybe<UserWorkspaceStddevFields>
  stddevPop?: Maybe<UserWorkspaceStddevPopFields>
  stddevSamp?: Maybe<UserWorkspaceStddevSampFields>
  sum?: Maybe<UserWorkspaceSumFields>
  varPop?: Maybe<UserWorkspaceVarPopFields>
  varSamp?: Maybe<UserWorkspaceVarSampFields>
  variance?: Maybe<UserWorkspaceVarianceFields>
}

/** aggregate fields of "user_workspace" */
export type UserWorkspaceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_workspace" */
export type UserWorkspaceAggregateOrderBy = {
  avg?: InputMaybe<UserWorkspaceAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<UserWorkspaceMaxOrderBy>
  min?: InputMaybe<UserWorkspaceMinOrderBy>
  stddev?: InputMaybe<UserWorkspaceStddevOrderBy>
  stddev_pop?: InputMaybe<UserWorkspaceStddevPopOrderBy>
  stddev_samp?: InputMaybe<UserWorkspaceStddevSampOrderBy>
  sum?: InputMaybe<UserWorkspaceSumOrderBy>
  var_pop?: InputMaybe<UserWorkspaceVarPopOrderBy>
  var_samp?: InputMaybe<UserWorkspaceVarSampOrderBy>
  variance?: InputMaybe<UserWorkspaceVarianceOrderBy>
}

/** input type for inserting array relation for remote table "user_workspace" */
export type UserWorkspaceArrRelInsertInput = {
  data: Array<UserWorkspaceInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<UserWorkspaceOnConflict>
}

/** aggregate avg on columns */
export type UserWorkspaceAvgFields = {
  __typename?: 'UserWorkspaceAvgFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_workspace" */
export type UserWorkspaceAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "user_workspace". All fields are combined with a logical 'AND'. */
export type UserWorkspaceBoolExp = {
  _and?: InputMaybe<Array<UserWorkspaceBoolExp>>
  _not?: InputMaybe<UserWorkspaceBoolExp>
  _or?: InputMaybe<Array<UserWorkspaceBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  isAdmin?: InputMaybe<BooleanComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userId?: InputMaybe<IntComparisonExp>
  workspace?: InputMaybe<WorkspaceBoolExp>
  workspaceId?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "user_workspace" */
export enum UserWorkspaceConstraint {
  /** unique or primary key constraint on columns "id" */
  UserWorkspacePkey = 'user_workspace_pkey',
  /** unique or primary key constraint on columns "workspace_id", "user_id" */
  UserWorkspaceUniq = 'user_workspace_uniq',
}

/** input type for incrementing numeric columns in table "user_workspace" */
export type UserWorkspaceIncInput = {
  id?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['Int']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "user_workspace" */
export type UserWorkspaceInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isAdmin?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<UserObjRelInsertInput>
  userId?: InputMaybe<Scalars['Int']>
  workspace?: InputMaybe<WorkspaceObjRelInsertInput>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type UserWorkspaceMaxFields = {
  __typename?: 'UserWorkspaceMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['Int']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "user_workspace" */
export type UserWorkspaceMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type UserWorkspaceMinFields = {
  __typename?: 'UserWorkspaceMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['Int']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "user_workspace" */
export type UserWorkspaceMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "user_workspace" */
export type UserWorkspaceMutationResponse = {
  __typename?: 'UserWorkspaceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<UserWorkspace>
}

/** on_conflict condition type for table "user_workspace" */
export type UserWorkspaceOnConflict = {
  constraint: UserWorkspaceConstraint
  update_columns?: Array<UserWorkspaceUpdateColumn>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

/** Ordering options when selecting data from "user_workspace". */
export type UserWorkspaceOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  isAdmin?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userId?: InputMaybe<OrderBy>
  workspace?: InputMaybe<WorkspaceOrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: user_workspace */
export type UserWorkspacePkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "user_workspace" */
export enum UserWorkspaceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'isAdmin',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "user_workspace" */
export type UserWorkspaceSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isAdmin?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['Int']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type UserWorkspaceStddevFields = {
  __typename?: 'UserWorkspaceStddevFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_workspace" */
export type UserWorkspaceStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type UserWorkspaceStddevPopFields = {
  __typename?: 'UserWorkspaceStddevPopFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_workspace" */
export type UserWorkspaceStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type UserWorkspaceStddevSampFields = {
  __typename?: 'UserWorkspaceStddevSampFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_workspace" */
export type UserWorkspaceStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "user_workspace" */
export type UserWorkspaceStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: UserWorkspaceStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type UserWorkspaceStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  isAdmin?: InputMaybe<Scalars['Boolean']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['Int']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type UserWorkspaceSumFields = {
  __typename?: 'UserWorkspaceSumFields'
  id?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['Int']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user_workspace" */
export type UserWorkspaceSumOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** update columns of table "user_workspace" */
export enum UserWorkspaceUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'isAdmin',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** aggregate var_pop on columns */
export type UserWorkspaceVarPopFields = {
  __typename?: 'UserWorkspaceVarPopFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_workspace" */
export type UserWorkspaceVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type UserWorkspaceVarSampFields = {
  __typename?: 'UserWorkspaceVarSampFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_workspace" */
export type UserWorkspaceVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type UserWorkspaceVarianceFields = {
  __typename?: 'UserWorkspaceVarianceFields'
  id?: Maybe<Scalars['Float']>
  userId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_workspace" */
export type UserWorkspaceVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** columns and relationships of "workspace" */
export type Workspace = {
  __typename?: 'Workspace'
  createdAt: Scalars['timestamptz']
  description?: Maybe<Scalars['String']>
  id: Scalars['Int']
  /** An array relationship */
  members: Array<UserWorkspace>
  /** An aggregate relationship */
  membersAggregate: UserWorkspaceAggregate
  name?: Maybe<Scalars['String']>
  slug: Scalars['String']
  /** An array relationship */
  sources: Array<Source>
  /** An aggregate relationship */
  sourcesAggregate: SourceAggregate
  updatedAt: Scalars['timestamptz']
  /** An aggregate relationship */
  workspaceReposAggregate: WorkspaceRepoAggregate
  /** An array relationship */
  workspace_repos: Array<WorkspaceRepo>
}

/** columns and relationships of "workspace" */
export type WorkspaceMembersArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

/** columns and relationships of "workspace" */
export type WorkspaceMembersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

/** columns and relationships of "workspace" */
export type WorkspaceSourcesArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

/** columns and relationships of "workspace" */
export type WorkspaceSourcesAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

/** columns and relationships of "workspace" */
export type WorkspaceWorkspaceReposAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

/** columns and relationships of "workspace" */
export type WorkspaceWorkspace_ReposArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

/** aggregated selection of "workspace" */
export type WorkspaceAggregate = {
  __typename?: 'WorkspaceAggregate'
  aggregate?: Maybe<WorkspaceAggregateFields>
  nodes: Array<Workspace>
}

/** aggregate fields of "workspace" */
export type WorkspaceAggregateFields = {
  __typename?: 'WorkspaceAggregateFields'
  avg?: Maybe<WorkspaceAvgFields>
  count: Scalars['Int']
  max?: Maybe<WorkspaceMaxFields>
  min?: Maybe<WorkspaceMinFields>
  stddev?: Maybe<WorkspaceStddevFields>
  stddevPop?: Maybe<WorkspaceStddevPopFields>
  stddevSamp?: Maybe<WorkspaceStddevSampFields>
  sum?: Maybe<WorkspaceSumFields>
  varPop?: Maybe<WorkspaceVarPopFields>
  varSamp?: Maybe<WorkspaceVarSampFields>
  variance?: Maybe<WorkspaceVarianceFields>
}

/** aggregate fields of "workspace" */
export type WorkspaceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type WorkspaceAvgFields = {
  __typename?: 'WorkspaceAvgFields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "workspace". All fields are combined with a logical 'AND'. */
export type WorkspaceBoolExp = {
  _and?: InputMaybe<Array<WorkspaceBoolExp>>
  _not?: InputMaybe<WorkspaceBoolExp>
  _or?: InputMaybe<Array<WorkspaceBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  description?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  members?: InputMaybe<UserWorkspaceBoolExp>
  name?: InputMaybe<StringComparisonExp>
  slug?: InputMaybe<StringComparisonExp>
  sources?: InputMaybe<SourceBoolExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  workspace_repos?: InputMaybe<WorkspaceRepoBoolExp>
}

/** unique or primary key constraints on table "workspace" */
export enum WorkspaceConstraint {
  /** unique or primary key constraint on columns "id" */
  WorkspacePkey = 'workspace_pkey',
  /** unique or primary key constraint on columns "slug" */
  WorkspaceSlug = 'workspace_slug',
}

/** input type for incrementing numeric columns in table "workspace" */
export type WorkspaceIncInput = {
  id?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "workspace" */
export type WorkspaceInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  members?: InputMaybe<UserWorkspaceArrRelInsertInput>
  name?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  sources?: InputMaybe<SourceArrRelInsertInput>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspace_repos?: InputMaybe<WorkspaceRepoArrRelInsertInput>
}

/** aggregate max on columns */
export type WorkspaceMaxFields = {
  __typename?: 'WorkspaceMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type WorkspaceMinFields = {
  __typename?: 'WorkspaceMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "workspace" */
export type WorkspaceMutationResponse = {
  __typename?: 'WorkspaceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Workspace>
}

/** input type for inserting object relation for remote table "workspace" */
export type WorkspaceObjRelInsertInput = {
  data: WorkspaceInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<WorkspaceOnConflict>
}

/** on_conflict condition type for table "workspace" */
export type WorkspaceOnConflict = {
  constraint: WorkspaceConstraint
  update_columns?: Array<WorkspaceUpdateColumn>
  where?: InputMaybe<WorkspaceBoolExp>
}

/** Ordering options when selecting data from "workspace". */
export type WorkspaceOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  members_aggregate?: InputMaybe<UserWorkspaceAggregateOrderBy>
  name?: InputMaybe<OrderBy>
  slug?: InputMaybe<OrderBy>
  sources_aggregate?: InputMaybe<SourceAggregateOrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspace_repos_aggregate?: InputMaybe<WorkspaceRepoAggregateOrderBy>
}

/** primary key columns input for table: workspace */
export type WorkspacePkColumnsInput = {
  id: Scalars['Int']
}

/** columns and relationships of "workspace_repo" */
export type WorkspaceRepo = {
  __typename?: 'WorkspaceRepo'
  createdAt: Scalars['timestamptz']
  id: Scalars['Int']
  /** An object relationship */
  repo: Repo
  repoId: Scalars['Int']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  workspace: Workspace
  workspaceId: Scalars['Int']
}

/** aggregated selection of "workspace_repo" */
export type WorkspaceRepoAggregate = {
  __typename?: 'WorkspaceRepoAggregate'
  aggregate?: Maybe<WorkspaceRepoAggregateFields>
  nodes: Array<WorkspaceRepo>
}

/** aggregate fields of "workspace_repo" */
export type WorkspaceRepoAggregateFields = {
  __typename?: 'WorkspaceRepoAggregateFields'
  avg?: Maybe<WorkspaceRepoAvgFields>
  count: Scalars['Int']
  max?: Maybe<WorkspaceRepoMaxFields>
  min?: Maybe<WorkspaceRepoMinFields>
  stddev?: Maybe<WorkspaceRepoStddevFields>
  stddevPop?: Maybe<WorkspaceRepoStddevPopFields>
  stddevSamp?: Maybe<WorkspaceRepoStddevSampFields>
  sum?: Maybe<WorkspaceRepoSumFields>
  varPop?: Maybe<WorkspaceRepoVarPopFields>
  varSamp?: Maybe<WorkspaceRepoVarSampFields>
  variance?: Maybe<WorkspaceRepoVarianceFields>
}

/** aggregate fields of "workspace_repo" */
export type WorkspaceRepoAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "workspace_repo" */
export type WorkspaceRepoAggregateOrderBy = {
  avg?: InputMaybe<WorkspaceRepoAvgOrderBy>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<WorkspaceRepoMaxOrderBy>
  min?: InputMaybe<WorkspaceRepoMinOrderBy>
  stddev?: InputMaybe<WorkspaceRepoStddevOrderBy>
  stddev_pop?: InputMaybe<WorkspaceRepoStddevPopOrderBy>
  stddev_samp?: InputMaybe<WorkspaceRepoStddevSampOrderBy>
  sum?: InputMaybe<WorkspaceRepoSumOrderBy>
  var_pop?: InputMaybe<WorkspaceRepoVarPopOrderBy>
  var_samp?: InputMaybe<WorkspaceRepoVarSampOrderBy>
  variance?: InputMaybe<WorkspaceRepoVarianceOrderBy>
}

/** input type for inserting array relation for remote table "workspace_repo" */
export type WorkspaceRepoArrRelInsertInput = {
  data: Array<WorkspaceRepoInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<WorkspaceRepoOnConflict>
}

/** aggregate avg on columns */
export type WorkspaceRepoAvgFields = {
  __typename?: 'WorkspaceRepoAvgFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "workspace_repo" */
export type WorkspaceRepoAvgOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Boolean expression to filter rows from the table "workspace_repo". All fields are combined with a logical 'AND'. */
export type WorkspaceRepoBoolExp = {
  _and?: InputMaybe<Array<WorkspaceRepoBoolExp>>
  _not?: InputMaybe<WorkspaceRepoBoolExp>
  _or?: InputMaybe<Array<WorkspaceRepoBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<IntComparisonExp>
  repo?: InputMaybe<RepoBoolExp>
  repoId?: InputMaybe<IntComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  workspace?: InputMaybe<WorkspaceBoolExp>
  workspaceId?: InputMaybe<IntComparisonExp>
}

/** unique or primary key constraints on table "workspace_repo" */
export enum WorkspaceRepoConstraint {
  /** unique or primary key constraint on columns "id" */
  WorkspaceRepoPkey = 'workspace_repo_pkey',
  /** unique or primary key constraint on columns "workspace_id", "repo_id" */
  WorkspaceRepoUniq = 'workspace_repo_uniq',
}

/** input type for incrementing numeric columns in table "workspace_repo" */
export type WorkspaceRepoIncInput = {
  id?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "workspace_repo" */
export type WorkspaceRepoInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  repo?: InputMaybe<RepoObjRelInsertInput>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspace?: InputMaybe<WorkspaceObjRelInsertInput>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate max on columns */
export type WorkspaceRepoMaxFields = {
  __typename?: 'WorkspaceRepoMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "workspace_repo" */
export type WorkspaceRepoMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate min on columns */
export type WorkspaceRepoMinFields = {
  __typename?: 'WorkspaceRepoMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "workspace_repo" */
export type WorkspaceRepoMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** response of any mutation on the table "workspace_repo" */
export type WorkspaceRepoMutationResponse = {
  __typename?: 'WorkspaceRepoMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceRepo>
}

/** on_conflict condition type for table "workspace_repo" */
export type WorkspaceRepoOnConflict = {
  constraint: WorkspaceRepoConstraint
  update_columns?: Array<WorkspaceRepoUpdateColumn>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

/** Ordering options when selecting data from "workspace_repo". */
export type WorkspaceRepoOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  repo?: InputMaybe<RepoOrderBy>
  repoId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  workspace?: InputMaybe<WorkspaceOrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: workspace_repo */
export type WorkspaceRepoPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "workspace_repo" */
export enum WorkspaceRepoSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** input type for updating data in table "workspace_repo" */
export type WorkspaceRepoSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type WorkspaceRepoStddevFields = {
  __typename?: 'WorkspaceRepoStddevFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "workspace_repo" */
export type WorkspaceRepoStddevOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type WorkspaceRepoStddevPopFields = {
  __typename?: 'WorkspaceRepoStddevPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "workspace_repo" */
export type WorkspaceRepoStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type WorkspaceRepoStddevSampFields = {
  __typename?: 'WorkspaceRepoStddevSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "workspace_repo" */
export type WorkspaceRepoStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "workspace_repo" */
export type WorkspaceRepoStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: WorkspaceRepoStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type WorkspaceRepoStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['Int']>
  repoId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  workspaceId?: InputMaybe<Scalars['Int']>
}

/** aggregate sum on columns */
export type WorkspaceRepoSumFields = {
  __typename?: 'WorkspaceRepoSumFields'
  id?: Maybe<Scalars['Int']>
  repoId?: Maybe<Scalars['Int']>
  workspaceId?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "workspace_repo" */
export type WorkspaceRepoSumOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** update columns of table "workspace_repo" */
export enum WorkspaceRepoUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RepoId = 'repoId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId',
}

/** aggregate var_pop on columns */
export type WorkspaceRepoVarPopFields = {
  __typename?: 'WorkspaceRepoVarPopFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "workspace_repo" */
export type WorkspaceRepoVarPopOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate var_samp on columns */
export type WorkspaceRepoVarSampFields = {
  __typename?: 'WorkspaceRepoVarSampFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "workspace_repo" */
export type WorkspaceRepoVarSampOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** aggregate variance on columns */
export type WorkspaceRepoVarianceFields = {
  __typename?: 'WorkspaceRepoVarianceFields'
  id?: Maybe<Scalars['Float']>
  repoId?: Maybe<Scalars['Float']>
  workspaceId?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "workspace_repo" */
export type WorkspaceRepoVarianceOrderBy = {
  id?: InputMaybe<OrderBy>
  repoId?: InputMaybe<OrderBy>
  workspaceId?: InputMaybe<OrderBy>
}

/** select columns of table "workspace" */
export enum WorkspaceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "workspace" */
export type WorkspaceSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type WorkspaceStddevFields = {
  __typename?: 'WorkspaceStddevFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type WorkspaceStddevPopFields = {
  __typename?: 'WorkspaceStddevPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type WorkspaceStddevSampFields = {
  __typename?: 'WorkspaceStddevSampFields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "workspace" */
export type WorkspaceStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: WorkspaceStreamcursorvalueinput
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>
}

/** Initial value of the column from where the streaming should start */
export type WorkspaceStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type WorkspaceSumFields = {
  __typename?: 'WorkspaceSumFields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "workspace" */
export enum WorkspaceUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type WorkspaceVarPopFields = {
  __typename?: 'WorkspaceVarPopFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type WorkspaceVarSampFields = {
  __typename?: 'WorkspaceVarSampFields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type WorkspaceVarianceFields = {
  __typename?: 'WorkspaceVarianceFields'
  id?: Maybe<Scalars['Float']>
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<StringComparisonExp>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "author" */
  deleteAuthor?: Maybe<AuthorMutationResponse>
  /** delete single row from the table: "author" */
  deleteAuthorByPk?: Maybe<Author>
  /** delete data from the table: "branch_pointer" */
  deleteBranchPointer?: Maybe<BranchPointerMutationResponse>
  /** delete single row from the table: "branch_pointer" */
  deleteBranchPointerByPk?: Maybe<BranchPointer>
  /** delete data from the table: "commit" */
  deleteCommit?: Maybe<CommitMutationResponse>
  /** delete single row from the table: "commit" */
  deleteCommitByPk?: Maybe<Commit>
  /** delete data from the table: "conversation" */
  deleteConversation?: Maybe<ConversationMutationResponse>
  /** delete single row from the table: "conversation" */
  deleteConversationByPk?: Maybe<Conversation>
  /** delete data from the table: "credentials" */
  deleteCredentials?: Maybe<CredentialsMutationResponse>
  /** delete single row from the table: "credentials" */
  deleteCredentialsByPk?: Maybe<Credentials>
  /** delete data from the table: "incoming_webhook" */
  deleteIncomingWebhook?: Maybe<IncomingWebhookMutationResponse>
  /** delete single row from the table: "incoming_webhook" */
  deleteIncomingWebhookByPk?: Maybe<IncomingWebhook>
  /** delete data from the table: "line" */
  deleteLine?: Maybe<LineMutationResponse>
  /** delete single row from the table: "line" */
  deleteLineByPk?: Maybe<Line>
  /** delete data from the table: "line_reference" */
  deleteLineReference?: Maybe<LineReferenceMutationResponse>
  /** delete single row from the table: "line_reference" */
  deleteLineReferenceByPk?: Maybe<LineReference>
  /** delete data from the table: "message" */
  deleteMessage?: Maybe<MessageMutationResponse>
  /** delete single row from the table: "message" */
  deleteMessageByPk?: Maybe<Message>
  /** delete data from the table: "repo" */
  deleteRepo?: Maybe<RepoMutationResponse>
  /** delete single row from the table: "repo" */
  deleteRepoByPk?: Maybe<Repo>
  /** delete data from the table: "source" */
  deleteSource?: Maybe<SourceMutationResponse>
  /** delete single row from the table: "source" */
  deleteSourceByPk?: Maybe<Source>
  /** delete data from the table: "source_event" */
  deleteSourceEvent?: Maybe<SourceEventMutationResponse>
  /** delete single row from the table: "source_event" */
  deleteSourceEventByPk?: Maybe<SourceEvent>
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>
  /** delete data from the table: "user_workspace" */
  deleteUserWorkspace?: Maybe<UserWorkspaceMutationResponse>
  /** delete single row from the table: "user_workspace" */
  deleteUserWorkspaceByPk?: Maybe<UserWorkspace>
  /** delete data from the table: "workspace" */
  deleteWorkspace?: Maybe<WorkspaceMutationResponse>
  /** delete single row from the table: "workspace" */
  deleteWorkspaceByPk?: Maybe<Workspace>
  /** delete data from the table: "workspace_repo" */
  deleteWorkspaceRepo?: Maybe<WorkspaceRepoMutationResponse>
  /** delete single row from the table: "workspace_repo" */
  deleteWorkspaceRepoByPk?: Maybe<WorkspaceRepo>
  /** Import repositories into a workspace that you are an admin of. */
  importRepos: Scalars['Int']
  /** insert data into the table: "author" */
  insertAuthor?: Maybe<AuthorMutationResponse>
  /** insert a single row into the table: "author" */
  insertAuthorOne?: Maybe<Author>
  /** insert data into the table: "branch_pointer" */
  insertBranchPointer?: Maybe<BranchPointerMutationResponse>
  /** insert a single row into the table: "branch_pointer" */
  insertBranchPointerOne?: Maybe<BranchPointer>
  /** insert data into the table: "commit" */
  insertCommit?: Maybe<CommitMutationResponse>
  /** insert a single row into the table: "commit" */
  insertCommitOne?: Maybe<Commit>
  /** insert data into the table: "conversation" */
  insertConversation?: Maybe<ConversationMutationResponse>
  /** insert a single row into the table: "conversation" */
  insertConversationOne?: Maybe<Conversation>
  /** insert data into the table: "credentials" */
  insertCredentials?: Maybe<CredentialsMutationResponse>
  /** insert a single row into the table: "credentials" */
  insertCredentialsOne?: Maybe<Credentials>
  /** insert data into the table: "incoming_webhook" */
  insertIncomingWebhook?: Maybe<IncomingWebhookMutationResponse>
  /** insert a single row into the table: "incoming_webhook" */
  insertIncomingWebhookOne?: Maybe<IncomingWebhook>
  /** insert data into the table: "line" */
  insertLine?: Maybe<LineMutationResponse>
  /** insert a single row into the table: "line" */
  insertLineOne?: Maybe<Line>
  /** insert data into the table: "line_reference" */
  insertLineReference?: Maybe<LineReferenceMutationResponse>
  /** insert a single row into the table: "line_reference" */
  insertLineReferenceOne?: Maybe<LineReference>
  /** insert data into the table: "message" */
  insertMessage?: Maybe<MessageMutationResponse>
  /** insert a single row into the table: "message" */
  insertMessageOne?: Maybe<Message>
  /** insert data into the table: "repo" */
  insertRepo?: Maybe<RepoMutationResponse>
  /** insert a single row into the table: "repo" */
  insertRepoOne?: Maybe<Repo>
  /** insert data into the table: "source" */
  insertSource?: Maybe<SourceMutationResponse>
  /** insert data into the table: "source_event" */
  insertSourceEvent?: Maybe<SourceEventMutationResponse>
  /** insert a single row into the table: "source_event" */
  insertSourceEventOne?: Maybe<SourceEvent>
  /** insert a single row into the table: "source" */
  insertSourceOne?: Maybe<Source>
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>
  /** insert data into the table: "user_workspace" */
  insertUserWorkspace?: Maybe<UserWorkspaceMutationResponse>
  /** insert a single row into the table: "user_workspace" */
  insertUserWorkspaceOne?: Maybe<UserWorkspace>
  /** insert data into the table: "workspace" */
  insertWorkspace?: Maybe<WorkspaceMutationResponse>
  /** insert a single row into the table: "workspace" */
  insertWorkspaceOne?: Maybe<Workspace>
  /** insert data into the table: "workspace_repo" */
  insertWorkspaceRepo?: Maybe<WorkspaceRepoMutationResponse>
  /** insert a single row into the table: "workspace_repo" */
  insertWorkspaceRepoOne?: Maybe<WorkspaceRepo>
  /** update data of the table: "author" */
  updateAuthor?: Maybe<AuthorMutationResponse>
  /** update single row of the table: "author" */
  updateAuthorByPk?: Maybe<Author>
  /** update data of the table: "branch_pointer" */
  updateBranchPointer?: Maybe<BranchPointerMutationResponse>
  /** update single row of the table: "branch_pointer" */
  updateBranchPointerByPk?: Maybe<BranchPointer>
  /** update data of the table: "commit" */
  updateCommit?: Maybe<CommitMutationResponse>
  /** update single row of the table: "commit" */
  updateCommitByPk?: Maybe<Commit>
  /** update data of the table: "conversation" */
  updateConversation?: Maybe<ConversationMutationResponse>
  /** update single row of the table: "conversation" */
  updateConversationByPk?: Maybe<Conversation>
  /** update data of the table: "credentials" */
  updateCredentials?: Maybe<CredentialsMutationResponse>
  /** update single row of the table: "credentials" */
  updateCredentialsByPk?: Maybe<Credentials>
  /** update data of the table: "incoming_webhook" */
  updateIncomingWebhook?: Maybe<IncomingWebhookMutationResponse>
  /** update single row of the table: "incoming_webhook" */
  updateIncomingWebhookByPk?: Maybe<IncomingWebhook>
  /** update data of the table: "line" */
  updateLine?: Maybe<LineMutationResponse>
  /** update single row of the table: "line" */
  updateLineByPk?: Maybe<Line>
  /** update data of the table: "line_reference" */
  updateLineReference?: Maybe<LineReferenceMutationResponse>
  /** update single row of the table: "line_reference" */
  updateLineReferenceByPk?: Maybe<LineReference>
  /** update data of the table: "message" */
  updateMessage?: Maybe<MessageMutationResponse>
  /** update single row of the table: "message" */
  updateMessageByPk?: Maybe<Message>
  /** update data of the table: "repo" */
  updateRepo?: Maybe<RepoMutationResponse>
  /** update single row of the table: "repo" */
  updateRepoByPk?: Maybe<Repo>
  /** update data of the table: "source" */
  updateSource?: Maybe<SourceMutationResponse>
  /** update single row of the table: "source" */
  updateSourceByPk?: Maybe<Source>
  /** update data of the table: "source_event" */
  updateSourceEvent?: Maybe<SourceEventMutationResponse>
  /** update single row of the table: "source_event" */
  updateSourceEventByPk?: Maybe<SourceEvent>
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>
  /** update data of the table: "user_workspace" */
  updateUserWorkspace?: Maybe<UserWorkspaceMutationResponse>
  /** update single row of the table: "user_workspace" */
  updateUserWorkspaceByPk?: Maybe<UserWorkspace>
  /** update data of the table: "workspace" */
  updateWorkspace?: Maybe<WorkspaceMutationResponse>
  /** update single row of the table: "workspace" */
  updateWorkspaceByPk?: Maybe<Workspace>
  /** update data of the table: "workspace_repo" */
  updateWorkspaceRepo?: Maybe<WorkspaceRepoMutationResponse>
  /** update single row of the table: "workspace_repo" */
  updateWorkspaceRepoByPk?: Maybe<WorkspaceRepo>
}

/** mutation root */
export type Mutation_RootDeleteAuthorArgs = {
  where: AuthorBoolExp
}

/** mutation root */
export type Mutation_RootDeleteAuthorByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteBranchPointerArgs = {
  where: BranchPointerBoolExp
}

/** mutation root */
export type Mutation_RootDeleteBranchPointerByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteCommitArgs = {
  where: CommitBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCommitByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteConversationArgs = {
  where: ConversationBoolExp
}

/** mutation root */
export type Mutation_RootDeleteConversationByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteCredentialsArgs = {
  where: CredentialsBoolExp
}

/** mutation root */
export type Mutation_RootDeleteCredentialsByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteIncomingWebhookArgs = {
  where: IncomingWebhookBoolExp
}

/** mutation root */
export type Mutation_RootDeleteIncomingWebhookByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteLineArgs = {
  where: LineBoolExp
}

/** mutation root */
export type Mutation_RootDeleteLineByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteLineReferenceArgs = {
  where: LineReferenceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteLineReferenceByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteMessageArgs = {
  where: MessageBoolExp
}

/** mutation root */
export type Mutation_RootDeleteMessageByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteRepoArgs = {
  where: RepoBoolExp
}

/** mutation root */
export type Mutation_RootDeleteRepoByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteSourceArgs = {
  where: SourceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSourceByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteSourceEventArgs = {
  where: SourceEventBoolExp
}

/** mutation root */
export type Mutation_RootDeleteSourceEventByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp
}

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteUserWorkspaceArgs = {
  where: UserWorkspaceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteUserWorkspaceByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteWorkspaceArgs = {
  where: WorkspaceBoolExp
}

/** mutation root */
export type Mutation_RootDeleteWorkspaceByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootDeleteWorkspaceRepoArgs = {
  where: WorkspaceRepoBoolExp
}

/** mutation root */
export type Mutation_RootDeleteWorkspaceRepoByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootImportReposArgs = {
  repos: Array<ExternalRepo>
  workspaceId: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsertAuthorArgs = {
  objects: Array<AuthorInsertInput>
  onConflict?: InputMaybe<AuthorOnConflict>
}

/** mutation root */
export type Mutation_RootInsertAuthorOneArgs = {
  object: AuthorInsertInput
  onConflict?: InputMaybe<AuthorOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBranchPointerArgs = {
  objects: Array<BranchPointerInsertInput>
  onConflict?: InputMaybe<BranchPointerOnConflict>
}

/** mutation root */
export type Mutation_RootInsertBranchPointerOneArgs = {
  object: BranchPointerInsertInput
  onConflict?: InputMaybe<BranchPointerOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCommitArgs = {
  objects: Array<CommitInsertInput>
  onConflict?: InputMaybe<CommitOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCommitOneArgs = {
  object: CommitInsertInput
  onConflict?: InputMaybe<CommitOnConflict>
}

/** mutation root */
export type Mutation_RootInsertConversationArgs = {
  objects: Array<ConversationInsertInput>
  onConflict?: InputMaybe<ConversationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertConversationOneArgs = {
  object: ConversationInsertInput
  onConflict?: InputMaybe<ConversationOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCredentialsArgs = {
  objects: Array<CredentialsInsertInput>
  onConflict?: InputMaybe<CredentialsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertCredentialsOneArgs = {
  object: CredentialsInsertInput
  onConflict?: InputMaybe<CredentialsOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIncomingWebhookArgs = {
  objects: Array<IncomingWebhookInsertInput>
  onConflict?: InputMaybe<IncomingWebhookOnConflict>
}

/** mutation root */
export type Mutation_RootInsertIncomingWebhookOneArgs = {
  object: IncomingWebhookInsertInput
  onConflict?: InputMaybe<IncomingWebhookOnConflict>
}

/** mutation root */
export type Mutation_RootInsertLineArgs = {
  objects: Array<LineInsertInput>
  onConflict?: InputMaybe<LineOnConflict>
}

/** mutation root */
export type Mutation_RootInsertLineOneArgs = {
  object: LineInsertInput
  onConflict?: InputMaybe<LineOnConflict>
}

/** mutation root */
export type Mutation_RootInsertLineReferenceArgs = {
  objects: Array<LineReferenceInsertInput>
  onConflict?: InputMaybe<LineReferenceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertLineReferenceOneArgs = {
  object: LineReferenceInsertInput
  onConflict?: InputMaybe<LineReferenceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertMessageArgs = {
  objects: Array<MessageInsertInput>
  onConflict?: InputMaybe<MessageOnConflict>
}

/** mutation root */
export type Mutation_RootInsertMessageOneArgs = {
  object: MessageInsertInput
  onConflict?: InputMaybe<MessageOnConflict>
}

/** mutation root */
export type Mutation_RootInsertRepoArgs = {
  objects: Array<RepoInsertInput>
  onConflict?: InputMaybe<RepoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertRepoOneArgs = {
  object: RepoInsertInput
  onConflict?: InputMaybe<RepoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSourceArgs = {
  objects: Array<SourceInsertInput>
  onConflict?: InputMaybe<SourceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSourceEventArgs = {
  objects: Array<SourceEventInsertInput>
  onConflict?: InputMaybe<SourceEventOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSourceEventOneArgs = {
  object: SourceEventInsertInput
  onConflict?: InputMaybe<SourceEventOnConflict>
}

/** mutation root */
export type Mutation_RootInsertSourceOneArgs = {
  object: SourceInsertInput
  onConflict?: InputMaybe<SourceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>
  onConflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput
  onConflict?: InputMaybe<UserOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserWorkspaceArgs = {
  objects: Array<UserWorkspaceInsertInput>
  onConflict?: InputMaybe<UserWorkspaceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertUserWorkspaceOneArgs = {
  object: UserWorkspaceInsertInput
  onConflict?: InputMaybe<UserWorkspaceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertWorkspaceArgs = {
  objects: Array<WorkspaceInsertInput>
  onConflict?: InputMaybe<WorkspaceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertWorkspaceOneArgs = {
  object: WorkspaceInsertInput
  onConflict?: InputMaybe<WorkspaceOnConflict>
}

/** mutation root */
export type Mutation_RootInsertWorkspaceRepoArgs = {
  objects: Array<WorkspaceRepoInsertInput>
  onConflict?: InputMaybe<WorkspaceRepoOnConflict>
}

/** mutation root */
export type Mutation_RootInsertWorkspaceRepoOneArgs = {
  object: WorkspaceRepoInsertInput
  onConflict?: InputMaybe<WorkspaceRepoOnConflict>
}

/** mutation root */
export type Mutation_RootUpdateAuthorArgs = {
  _inc?: InputMaybe<AuthorIncInput>
  _set?: InputMaybe<AuthorSetInput>
  where: AuthorBoolExp
}

/** mutation root */
export type Mutation_RootUpdateAuthorByPkArgs = {
  _inc?: InputMaybe<AuthorIncInput>
  _set?: InputMaybe<AuthorSetInput>
  pk_columns: AuthorPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateBranchPointerArgs = {
  _inc?: InputMaybe<BranchPointerIncInput>
  _set?: InputMaybe<BranchPointerSetInput>
  where: BranchPointerBoolExp
}

/** mutation root */
export type Mutation_RootUpdateBranchPointerByPkArgs = {
  _inc?: InputMaybe<BranchPointerIncInput>
  _set?: InputMaybe<BranchPointerSetInput>
  pk_columns: BranchPointerPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCommitArgs = {
  _inc?: InputMaybe<CommitIncInput>
  _set?: InputMaybe<CommitSetInput>
  where: CommitBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCommitByPkArgs = {
  _inc?: InputMaybe<CommitIncInput>
  _set?: InputMaybe<CommitSetInput>
  pk_columns: CommitPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateConversationArgs = {
  _inc?: InputMaybe<ConversationIncInput>
  _set?: InputMaybe<ConversationSetInput>
  where: ConversationBoolExp
}

/** mutation root */
export type Mutation_RootUpdateConversationByPkArgs = {
  _inc?: InputMaybe<ConversationIncInput>
  _set?: InputMaybe<ConversationSetInput>
  pk_columns: ConversationPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateCredentialsArgs = {
  _append?: InputMaybe<CredentialsAppendInput>
  _delete_at_path?: InputMaybe<CredentialsDeleteAtPathInput>
  _delete_elem?: InputMaybe<CredentialsDeleteElemInput>
  _delete_key?: InputMaybe<CredentialsDeleteKeyInput>
  _inc?: InputMaybe<CredentialsIncInput>
  _prepend?: InputMaybe<CredentialsPrependInput>
  _set?: InputMaybe<CredentialsSetInput>
  where: CredentialsBoolExp
}

/** mutation root */
export type Mutation_RootUpdateCredentialsByPkArgs = {
  _append?: InputMaybe<CredentialsAppendInput>
  _delete_at_path?: InputMaybe<CredentialsDeleteAtPathInput>
  _delete_elem?: InputMaybe<CredentialsDeleteElemInput>
  _delete_key?: InputMaybe<CredentialsDeleteKeyInput>
  _inc?: InputMaybe<CredentialsIncInput>
  _prepend?: InputMaybe<CredentialsPrependInput>
  _set?: InputMaybe<CredentialsSetInput>
  pk_columns: CredentialsPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateIncomingWebhookArgs = {
  _inc?: InputMaybe<IncomingWebhookIncInput>
  _set?: InputMaybe<IncomingWebhookSetInput>
  where: IncomingWebhookBoolExp
}

/** mutation root */
export type Mutation_RootUpdateIncomingWebhookByPkArgs = {
  _inc?: InputMaybe<IncomingWebhookIncInput>
  _set?: InputMaybe<IncomingWebhookSetInput>
  pk_columns: IncomingWebhookPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateLineArgs = {
  _inc?: InputMaybe<LineIncInput>
  _set?: InputMaybe<LineSetInput>
  where: LineBoolExp
}

/** mutation root */
export type Mutation_RootUpdateLineByPkArgs = {
  _inc?: InputMaybe<LineIncInput>
  _set?: InputMaybe<LineSetInput>
  pk_columns: LinePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateLineReferenceArgs = {
  _inc?: InputMaybe<LineReferenceIncInput>
  _set?: InputMaybe<LineReferenceSetInput>
  where: LineReferenceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateLineReferenceByPkArgs = {
  _inc?: InputMaybe<LineReferenceIncInput>
  _set?: InputMaybe<LineReferenceSetInput>
  pk_columns: LineReferencePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateMessageArgs = {
  _inc?: InputMaybe<MessageIncInput>
  _set?: InputMaybe<MessageSetInput>
  where: MessageBoolExp
}

/** mutation root */
export type Mutation_RootUpdateMessageByPkArgs = {
  _inc?: InputMaybe<MessageIncInput>
  _set?: InputMaybe<MessageSetInput>
  pk_columns: MessagePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateRepoArgs = {
  _inc?: InputMaybe<RepoIncInput>
  _set?: InputMaybe<RepoSetInput>
  where: RepoBoolExp
}

/** mutation root */
export type Mutation_RootUpdateRepoByPkArgs = {
  _inc?: InputMaybe<RepoIncInput>
  _set?: InputMaybe<RepoSetInput>
  pk_columns: RepoPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSourceArgs = {
  _append?: InputMaybe<SourceAppendInput>
  _delete_at_path?: InputMaybe<SourceDeleteAtPathInput>
  _delete_elem?: InputMaybe<SourceDeleteElemInput>
  _delete_key?: InputMaybe<SourceDeleteKeyInput>
  _inc?: InputMaybe<SourceIncInput>
  _prepend?: InputMaybe<SourcePrependInput>
  _set?: InputMaybe<SourceSetInput>
  where: SourceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSourceByPkArgs = {
  _append?: InputMaybe<SourceAppendInput>
  _delete_at_path?: InputMaybe<SourceDeleteAtPathInput>
  _delete_elem?: InputMaybe<SourceDeleteElemInput>
  _delete_key?: InputMaybe<SourceDeleteKeyInput>
  _inc?: InputMaybe<SourceIncInput>
  _prepend?: InputMaybe<SourcePrependInput>
  _set?: InputMaybe<SourceSetInput>
  pk_columns: SourcePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateSourceEventArgs = {
  _append?: InputMaybe<SourceEventAppendInput>
  _delete_at_path?: InputMaybe<SourceEventDeleteAtPathInput>
  _delete_elem?: InputMaybe<SourceEventDeleteElemInput>
  _delete_key?: InputMaybe<SourceEventDeleteKeyInput>
  _inc?: InputMaybe<SourceEventIncInput>
  _prepend?: InputMaybe<SourceEventPrependInput>
  _set?: InputMaybe<SourceEventSetInput>
  where: SourceEventBoolExp
}

/** mutation root */
export type Mutation_RootUpdateSourceEventByPkArgs = {
  _append?: InputMaybe<SourceEventAppendInput>
  _delete_at_path?: InputMaybe<SourceEventDeleteAtPathInput>
  _delete_elem?: InputMaybe<SourceEventDeleteElemInput>
  _delete_key?: InputMaybe<SourceEventDeleteKeyInput>
  _inc?: InputMaybe<SourceEventIncInput>
  _prepend?: InputMaybe<SourceEventPrependInput>
  _set?: InputMaybe<SourceEventSetInput>
  pk_columns: SourceEventPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>
  _set?: InputMaybe<UserSetInput>
  pk_columns: UserPkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateUserWorkspaceArgs = {
  _inc?: InputMaybe<UserWorkspaceIncInput>
  _set?: InputMaybe<UserWorkspaceSetInput>
  where: UserWorkspaceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateUserWorkspaceByPkArgs = {
  _inc?: InputMaybe<UserWorkspaceIncInput>
  _set?: InputMaybe<UserWorkspaceSetInput>
  pk_columns: UserWorkspacePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateWorkspaceArgs = {
  _inc?: InputMaybe<WorkspaceIncInput>
  _set?: InputMaybe<WorkspaceSetInput>
  where: WorkspaceBoolExp
}

/** mutation root */
export type Mutation_RootUpdateWorkspaceByPkArgs = {
  _inc?: InputMaybe<WorkspaceIncInput>
  _set?: InputMaybe<WorkspaceSetInput>
  pk_columns: WorkspacePkColumnsInput
}

/** mutation root */
export type Mutation_RootUpdateWorkspaceRepoArgs = {
  _inc?: InputMaybe<WorkspaceRepoIncInput>
  _set?: InputMaybe<WorkspaceRepoSetInput>
  where: WorkspaceRepoBoolExp
}

/** mutation root */
export type Mutation_RootUpdateWorkspaceRepoByPkArgs = {
  _inc?: InputMaybe<WorkspaceRepoIncInput>
  _set?: InputMaybe<WorkspaceRepoSetInput>
  pk_columns: WorkspaceRepoPkColumnsInput
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ascNullsFirst',
  /** in ascending order, nulls last */
  AscNullsLast = 'ascNullsLast',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'descNullsFirst',
  /** in descending order, nulls last */
  DescNullsLast = 'descNullsLast',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "author" */
  author: Array<Author>
  /** fetch aggregated fields from the table: "author" */
  authorAggregate: AuthorAggregate
  /** fetch data from the table: "author" using primary key columns */
  authorByPk?: Maybe<Author>
  /** fetch data from the table: "branch_pointer" */
  branchPointer: Array<BranchPointer>
  /** fetch aggregated fields from the table: "branch_pointer" */
  branchPointerAggregate: BranchPointerAggregate
  /** fetch data from the table: "branch_pointer" using primary key columns */
  branchPointerByPk?: Maybe<BranchPointer>
  /** fetch data from the table: "commit" */
  commit: Array<Commit>
  /** fetch aggregated fields from the table: "commit" */
  commitAggregate: CommitAggregate
  /** fetch data from the table: "commit" using primary key columns */
  commitByPk?: Maybe<Commit>
  /** fetch data from the table: "conversation" */
  conversation: Array<Conversation>
  /** fetch aggregated fields from the table: "conversation" */
  conversationAggregate: ConversationAggregate
  /** fetch data from the table: "conversation" using primary key columns */
  conversationByPk?: Maybe<Conversation>
  /** An array relationship */
  credentials: Array<Credentials>
  /** An aggregate relationship */
  credentialsAggregate: CredentialsAggregate
  /** fetch data from the table: "credentials" using primary key columns */
  credentialsByPk?: Maybe<Credentials>
  /** fetch data from the table: "incoming_webhook" */
  incomingWebhook: Array<IncomingWebhook>
  /** fetch aggregated fields from the table: "incoming_webhook" */
  incomingWebhookAggregate: IncomingWebhookAggregate
  /** fetch data from the table: "incoming_webhook" using primary key columns */
  incomingWebhookByPk?: Maybe<IncomingWebhook>
  /** fetch data from the table: "line" */
  line: Array<Line>
  /** fetch aggregated fields from the table: "line" */
  lineAggregate: LineAggregate
  /** fetch data from the table: "line" using primary key columns */
  lineByPk?: Maybe<Line>
  /** fetch data from the table: "line_reference" */
  lineReference: Array<LineReference>
  /** fetch aggregated fields from the table: "line_reference" */
  lineReferenceAggregate: LineReferenceAggregate
  /** fetch data from the table: "line_reference" using primary key columns */
  lineReferenceByPk?: Maybe<LineReference>
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** fetch aggregated fields from the table: "message" */
  messageAggregate: MessageAggregate
  /** fetch data from the table: "message" using primary key columns */
  messageByPk?: Maybe<Message>
  /** fetch data from the table: "repo" */
  repo: Array<Repo>
  /** fetch aggregated fields from the table: "repo" */
  repoAggregate: RepoAggregate
  /** fetch data from the table: "repo" using primary key columns */
  repoByPk?: Maybe<Repo>
  /** fetch data from the table: "source" */
  source: Array<Source>
  /** fetch aggregated fields from the table: "source" */
  sourceAggregate: SourceAggregate
  /** fetch data from the table: "source" using primary key columns */
  sourceByPk?: Maybe<Source>
  /** fetch data from the table: "source_event" */
  sourceEvent: Array<SourceEvent>
  /** fetch aggregated fields from the table: "source_event" */
  sourceEventAggregate: SourceEventAggregate
  /** fetch data from the table: "source_event" using primary key columns */
  sourceEventByPk?: Maybe<SourceEvent>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** fetch data from the table: "user_workspace" */
  userWorkspace: Array<UserWorkspace>
  /** fetch aggregated fields from the table: "user_workspace" */
  userWorkspaceAggregate: UserWorkspaceAggregate
  /** fetch data from the table: "user_workspace" using primary key columns */
  userWorkspaceByPk?: Maybe<UserWorkspace>
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>
  /** fetch aggregated fields from the table: "workspace" */
  workspaceAggregate: WorkspaceAggregate
  /** fetch data from the table: "workspace" using primary key columns */
  workspaceByPk?: Maybe<Workspace>
  /** fetch data from the table: "workspace_repo" */
  workspaceRepo: Array<WorkspaceRepo>
  /** fetch aggregated fields from the table: "workspace_repo" */
  workspaceRepoAggregate: WorkspaceRepoAggregate
  /** fetch data from the table: "workspace_repo" using primary key columns */
  workspaceRepoByPk?: Maybe<WorkspaceRepo>
}

export type Query_RootAuthorArgs = {
  distinctOn?: InputMaybe<Array<AuthorSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AuthorOrderBy>>
  where?: InputMaybe<AuthorBoolExp>
}

export type Query_RootAuthorAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthorSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AuthorOrderBy>>
  where?: InputMaybe<AuthorBoolExp>
}

export type Query_RootAuthorByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootBranchPointerArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

export type Query_RootBranchPointerAggregateArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

export type Query_RootBranchPointerByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootCommitArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

export type Query_RootCommitAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

export type Query_RootCommitByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootConversationArgs = {
  distinctOn?: InputMaybe<Array<ConversationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ConversationOrderBy>>
  where?: InputMaybe<ConversationBoolExp>
}

export type Query_RootConversationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConversationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ConversationOrderBy>>
  where?: InputMaybe<ConversationBoolExp>
}

export type Query_RootConversationByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootCredentialsArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

export type Query_RootCredentialsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

export type Query_RootCredentialsByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootIncomingWebhookArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

export type Query_RootIncomingWebhookAggregateArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

export type Query_RootIncomingWebhookByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootLineArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

export type Query_RootLineAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

export type Query_RootLineByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootLineReferenceArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

export type Query_RootLineReferenceAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

export type Query_RootLineReferenceByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootMessageArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

export type Query_RootMessageAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

export type Query_RootMessageByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootRepoArgs = {
  distinctOn?: InputMaybe<Array<RepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoOrderBy>>
  where?: InputMaybe<RepoBoolExp>
}

export type Query_RootRepoAggregateArgs = {
  distinctOn?: InputMaybe<Array<RepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoOrderBy>>
  where?: InputMaybe<RepoBoolExp>
}

export type Query_RootRepoByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootSourceArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

export type Query_RootSourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

export type Query_RootSourceByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootSourceEventArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

export type Query_RootSourceEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

export type Query_RootSourceEventByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Query_RootUserByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootUserWorkspaceArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

export type Query_RootUserWorkspaceAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

export type Query_RootUserWorkspaceByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootWorkspaceArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceOrderBy>>
  where?: InputMaybe<WorkspaceBoolExp>
}

export type Query_RootWorkspaceAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceOrderBy>>
  where?: InputMaybe<WorkspaceBoolExp>
}

export type Query_RootWorkspaceByPkArgs = {
  id: Scalars['Int']
}

export type Query_RootWorkspaceRepoArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

export type Query_RootWorkspaceRepoAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

export type Query_RootWorkspaceRepoByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "author" */
  author: Array<Author>
  /** fetch aggregated fields from the table: "author" */
  authorAggregate: AuthorAggregate
  /** fetch data from the table: "author" using primary key columns */
  authorByPk?: Maybe<Author>
  /** fetch data from the table in a streaming manner : "author" */
  authorStream: Array<Author>
  /** fetch data from the table: "branch_pointer" */
  branchPointer: Array<BranchPointer>
  /** fetch aggregated fields from the table: "branch_pointer" */
  branchPointerAggregate: BranchPointerAggregate
  /** fetch data from the table: "branch_pointer" using primary key columns */
  branchPointerByPk?: Maybe<BranchPointer>
  /** fetch data from the table in a streaming manner : "branch_pointer" */
  branchPointerStream: Array<BranchPointer>
  /** fetch data from the table: "commit" */
  commit: Array<Commit>
  /** fetch aggregated fields from the table: "commit" */
  commitAggregate: CommitAggregate
  /** fetch data from the table: "commit" using primary key columns */
  commitByPk?: Maybe<Commit>
  /** fetch data from the table in a streaming manner : "commit" */
  commitStream: Array<Commit>
  /** fetch data from the table: "conversation" */
  conversation: Array<Conversation>
  /** fetch aggregated fields from the table: "conversation" */
  conversationAggregate: ConversationAggregate
  /** fetch data from the table: "conversation" using primary key columns */
  conversationByPk?: Maybe<Conversation>
  /** fetch data from the table in a streaming manner : "conversation" */
  conversationStream: Array<Conversation>
  /** An array relationship */
  credentials: Array<Credentials>
  /** An aggregate relationship */
  credentialsAggregate: CredentialsAggregate
  /** fetch data from the table: "credentials" using primary key columns */
  credentialsByPk?: Maybe<Credentials>
  /** fetch data from the table in a streaming manner : "credentials" */
  credentialsStream: Array<Credentials>
  /** fetch data from the table: "incoming_webhook" */
  incomingWebhook: Array<IncomingWebhook>
  /** fetch aggregated fields from the table: "incoming_webhook" */
  incomingWebhookAggregate: IncomingWebhookAggregate
  /** fetch data from the table: "incoming_webhook" using primary key columns */
  incomingWebhookByPk?: Maybe<IncomingWebhook>
  /** fetch data from the table in a streaming manner : "incoming_webhook" */
  incomingWebhookStream: Array<IncomingWebhook>
  /** fetch data from the table: "line" */
  line: Array<Line>
  /** fetch aggregated fields from the table: "line" */
  lineAggregate: LineAggregate
  /** fetch data from the table: "line" using primary key columns */
  lineByPk?: Maybe<Line>
  /** fetch data from the table: "line_reference" */
  lineReference: Array<LineReference>
  /** fetch aggregated fields from the table: "line_reference" */
  lineReferenceAggregate: LineReferenceAggregate
  /** fetch data from the table: "line_reference" using primary key columns */
  lineReferenceByPk?: Maybe<LineReference>
  /** fetch data from the table in a streaming manner : "line_reference" */
  lineReferenceStream: Array<LineReference>
  /** fetch data from the table in a streaming manner : "line" */
  lineStream: Array<Line>
  /** fetch data from the table: "message" */
  message: Array<Message>
  /** fetch aggregated fields from the table: "message" */
  messageAggregate: MessageAggregate
  /** fetch data from the table: "message" using primary key columns */
  messageByPk?: Maybe<Message>
  /** fetch data from the table in a streaming manner : "message" */
  messageStream: Array<Message>
  /** fetch data from the table: "repo" */
  repo: Array<Repo>
  /** fetch aggregated fields from the table: "repo" */
  repoAggregate: RepoAggregate
  /** fetch data from the table: "repo" using primary key columns */
  repoByPk?: Maybe<Repo>
  /** fetch data from the table in a streaming manner : "repo" */
  repoStream: Array<Repo>
  /** fetch data from the table: "source" */
  source: Array<Source>
  /** fetch aggregated fields from the table: "source" */
  sourceAggregate: SourceAggregate
  /** fetch data from the table: "source" using primary key columns */
  sourceByPk?: Maybe<Source>
  /** fetch data from the table: "source_event" */
  sourceEvent: Array<SourceEvent>
  /** fetch aggregated fields from the table: "source_event" */
  sourceEventAggregate: SourceEventAggregate
  /** fetch data from the table: "source_event" using primary key columns */
  sourceEventByPk?: Maybe<SourceEvent>
  /** fetch data from the table in a streaming manner : "source_event" */
  sourceEventStream: Array<SourceEvent>
  /** fetch data from the table in a streaming manner : "source" */
  sourceStream: Array<Source>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>
  /** fetch data from the table in a streaming manner : "user" */
  userStream: Array<User>
  /** fetch data from the table: "user_workspace" */
  userWorkspace: Array<UserWorkspace>
  /** fetch aggregated fields from the table: "user_workspace" */
  userWorkspaceAggregate: UserWorkspaceAggregate
  /** fetch data from the table: "user_workspace" using primary key columns */
  userWorkspaceByPk?: Maybe<UserWorkspace>
  /** fetch data from the table in a streaming manner : "user_workspace" */
  userWorkspaceStream: Array<UserWorkspace>
  /** fetch data from the table: "workspace" */
  workspace: Array<Workspace>
  /** fetch aggregated fields from the table: "workspace" */
  workspaceAggregate: WorkspaceAggregate
  /** fetch data from the table: "workspace" using primary key columns */
  workspaceByPk?: Maybe<Workspace>
  /** fetch data from the table: "workspace_repo" */
  workspaceRepo: Array<WorkspaceRepo>
  /** fetch aggregated fields from the table: "workspace_repo" */
  workspaceRepoAggregate: WorkspaceRepoAggregate
  /** fetch data from the table: "workspace_repo" using primary key columns */
  workspaceRepoByPk?: Maybe<WorkspaceRepo>
  /** fetch data from the table in a streaming manner : "workspace_repo" */
  workspaceRepoStream: Array<WorkspaceRepo>
  /** fetch data from the table in a streaming manner : "workspace" */
  workspaceStream: Array<Workspace>
}

export type Subscription_RootAuthorArgs = {
  distinctOn?: InputMaybe<Array<AuthorSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AuthorOrderBy>>
  where?: InputMaybe<AuthorBoolExp>
}

export type Subscription_RootAuthorAggregateArgs = {
  distinctOn?: InputMaybe<Array<AuthorSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AuthorOrderBy>>
  where?: InputMaybe<AuthorBoolExp>
}

export type Subscription_RootAuthorByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootAuthorStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<AuthorStreamcursorinput>>
  where?: InputMaybe<AuthorBoolExp>
}

export type Subscription_RootBranchPointerArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

export type Subscription_RootBranchPointerAggregateArgs = {
  distinctOn?: InputMaybe<Array<BranchPointerSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BranchPointerOrderBy>>
  where?: InputMaybe<BranchPointerBoolExp>
}

export type Subscription_RootBranchPointerByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootBranchPointerStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<BranchPointerStreamcursorinput>>
  where?: InputMaybe<BranchPointerBoolExp>
}

export type Subscription_RootCommitArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

export type Subscription_RootCommitAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommitSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CommitOrderBy>>
  where?: InputMaybe<CommitBoolExp>
}

export type Subscription_RootCommitByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootCommitStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<CommitStreamcursorinput>>
  where?: InputMaybe<CommitBoolExp>
}

export type Subscription_RootConversationArgs = {
  distinctOn?: InputMaybe<Array<ConversationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ConversationOrderBy>>
  where?: InputMaybe<ConversationBoolExp>
}

export type Subscription_RootConversationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ConversationSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ConversationOrderBy>>
  where?: InputMaybe<ConversationBoolExp>
}

export type Subscription_RootConversationByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootConversationStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<ConversationStreamcursorinput>>
  where?: InputMaybe<ConversationBoolExp>
}

export type Subscription_RootCredentialsArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

export type Subscription_RootCredentialsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CredentialsSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CredentialsOrderBy>>
  where?: InputMaybe<CredentialsBoolExp>
}

export type Subscription_RootCredentialsByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootCredentialsStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<CredentialsStreamcursorinput>>
  where?: InputMaybe<CredentialsBoolExp>
}

export type Subscription_RootIncomingWebhookArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

export type Subscription_RootIncomingWebhookAggregateArgs = {
  distinctOn?: InputMaybe<Array<IncomingWebhookSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<IncomingWebhookOrderBy>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

export type Subscription_RootIncomingWebhookByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootIncomingWebhookStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<IncomingWebhookStreamcursorinput>>
  where?: InputMaybe<IncomingWebhookBoolExp>
}

export type Subscription_RootLineArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

export type Subscription_RootLineAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineOrderBy>>
  where?: InputMaybe<LineBoolExp>
}

export type Subscription_RootLineByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootLineReferenceArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

export type Subscription_RootLineReferenceAggregateArgs = {
  distinctOn?: InputMaybe<Array<LineReferenceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LineReferenceOrderBy>>
  where?: InputMaybe<LineReferenceBoolExp>
}

export type Subscription_RootLineReferenceByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootLineReferenceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<LineReferenceStreamcursorinput>>
  where?: InputMaybe<LineReferenceBoolExp>
}

export type Subscription_RootLineStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<LineStreamcursorinput>>
  where?: InputMaybe<LineBoolExp>
}

export type Subscription_RootMessageArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

export type Subscription_RootMessageAggregateArgs = {
  distinctOn?: InputMaybe<Array<MessageSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MessageOrderBy>>
  where?: InputMaybe<MessageBoolExp>
}

export type Subscription_RootMessageByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootMessageStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<MessageStreamcursorinput>>
  where?: InputMaybe<MessageBoolExp>
}

export type Subscription_RootRepoArgs = {
  distinctOn?: InputMaybe<Array<RepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoOrderBy>>
  where?: InputMaybe<RepoBoolExp>
}

export type Subscription_RootRepoAggregateArgs = {
  distinctOn?: InputMaybe<Array<RepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RepoOrderBy>>
  where?: InputMaybe<RepoBoolExp>
}

export type Subscription_RootRepoByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootRepoStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<RepoStreamcursorinput>>
  where?: InputMaybe<RepoBoolExp>
}

export type Subscription_RootSourceArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

export type Subscription_RootSourceAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceOrderBy>>
  where?: InputMaybe<SourceBoolExp>
}

export type Subscription_RootSourceByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootSourceEventArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

export type Subscription_RootSourceEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<SourceEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<SourceEventOrderBy>>
  where?: InputMaybe<SourceEventBoolExp>
}

export type Subscription_RootSourceEventByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootSourceEventStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<SourceEventStreamcursorinput>>
  where?: InputMaybe<SourceEventBoolExp>
}

export type Subscription_RootSourceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<SourceStreamcursorinput>>
  where?: InputMaybe<SourceBoolExp>
}

export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUserByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<UserStreamcursorinput>>
  where?: InputMaybe<UserBoolExp>
}

export type Subscription_RootUserWorkspaceArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

export type Subscription_RootUserWorkspaceAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserWorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserWorkspaceOrderBy>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

export type Subscription_RootUserWorkspaceByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootUserWorkspaceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<UserWorkspaceStreamcursorinput>>
  where?: InputMaybe<UserWorkspaceBoolExp>
}

export type Subscription_RootWorkspaceArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceOrderBy>>
  where?: InputMaybe<WorkspaceBoolExp>
}

export type Subscription_RootWorkspaceAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceOrderBy>>
  where?: InputMaybe<WorkspaceBoolExp>
}

export type Subscription_RootWorkspaceByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootWorkspaceRepoArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

export type Subscription_RootWorkspaceRepoAggregateArgs = {
  distinctOn?: InputMaybe<Array<WorkspaceRepoSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkspaceRepoOrderBy>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

export type Subscription_RootWorkspaceRepoByPkArgs = {
  id: Scalars['Int']
}

export type Subscription_RootWorkspaceRepoStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<WorkspaceRepoStreamcursorinput>>
  where?: InputMaybe<WorkspaceRepoBoolExp>
}

export type Subscription_RootWorkspaceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<WorkspaceStreamcursorinput>>
  where?: InputMaybe<WorkspaceBoolExp>
}

export type CreateCredentialsMutationVariables = Exact<{
  userId: Scalars['Int']
  provider: Scalars['source_kind']
  accessToken: Scalars['String']
  profileJSON: Scalars['jsonb']
  isLogin: Scalars['Boolean']
}>

export type CreateCredentialsMutation = {
  __typename?: 'mutation_root'
  insertCredentialsOne?: { __typename?: 'Credentials'; id: number } | null
}

export type CreateRepoMutationVariables = Exact<{
  origin: Scalars['source_kind']
  owner: Scalars['String']
  name: Scalars['String']
  workspaceId: Scalars['Int']
}>

export type CreateRepoMutation = {
  __typename?: 'mutation_root'
  insertRepoOne?: { __typename?: 'Repo'; id: number } | null
}

export type CreateWorkspaceMutationVariables = Exact<{
  slug: Scalars['String']
}>

export type CreateWorkspaceMutation = {
  __typename?: 'mutation_root'
  insertWorkspaceOne?: { __typename?: 'Workspace'; id: number } | null
}

export type GetAccessTokenQueryVariables = Exact<{
  userId: Scalars['Int']
  provider: Scalars['source_kind']
}>

export type GetAccessTokenQuery = {
  __typename?: 'query_root'
  credentials: Array<{ __typename?: 'Credentials'; accessToken: string }>
}

export type ImportReposMutationVariables = Exact<{
  repos: Array<ExternalRepo> | ExternalRepo
  workspaceId: Scalars['Int']
}>

export type ImportReposMutation = {
  __typename?: 'mutation_root'
  importRepos: number
}

export type IsWorkspaceAdminQueryVariables = Exact<{
  userId: Scalars['Int']
  workspaceId: Scalars['Int']
}>

export type IsWorkspaceAdminQuery = {
  __typename?: 'query_root'
  userWorkspace: Array<{ __typename?: 'UserWorkspace'; isAdmin: boolean }>
}

export type SignupViaProviderMutationVariables = Exact<{
  email: Scalars['String']
  username: Scalars['String']
  provider: Scalars['source_kind']
  accessToken: Scalars['String']
  profileJSON: Scalars['jsonb']
}>

export type SignupViaProviderMutation = {
  __typename?: 'mutation_root'
  insertUserOne?: { __typename?: 'User'; id: number } | null
}

export const CreateCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'provider' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'source_kind' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accessToken' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'profileJSON' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'jsonb' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isLogin' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertCredentialsOne' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sourceKind' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'provider' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessToken' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accessToken' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isLogin' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isLogin' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userInfo' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'profileJSON' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCredentialsMutation,
  CreateCredentialsMutationVariables
>
export const CreateRepoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateRepo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'origin' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'source_kind' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'owner' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'workspaceId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertRepoOne' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'origin' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'origin' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'owner' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'owner' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'workspace_repos' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'data' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'workspaceId' },
                                  value: {
                                    kind: 'Variable',
                                    name: {
                                      kind: 'Name',
                                      value: 'workspaceId',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'onConflict' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'constraint' },
                      value: {
                        kind: 'EnumValue',
                        value: 'repo_origin_owner_name_idx',
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'update_columns' },
                      value: { kind: 'ListValue', values: [] },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateRepoMutation, CreateRepoMutationVariables>
export const CreateWorkspaceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateWorkspace' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertWorkspaceOne' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'members' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'data' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'isAdmin' },
                                  value: { kind: 'BooleanValue', value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables
>
export const GetAccessTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAccessToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'provider' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'source_kind' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'credentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'userId' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sourceKind' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'provider' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAccessTokenQuery, GetAccessTokenQueryVariables>
export const ImportReposDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ImportRepos' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'repos' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ExternalRepo' },
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'workspaceId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'importRepos' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'repos' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'repos' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'workspaceId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'workspaceId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImportReposMutation, ImportReposMutationVariables>
export const IsWorkspaceAdminDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'IsWorkspaceAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'workspaceId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userWorkspace' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'userId' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'workspaceId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: '_eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'workspaceId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'isAdmin' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  IsWorkspaceAdminQuery,
  IsWorkspaceAdminQueryVariables
>
export const SignupViaProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignupViaProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'provider' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'source_kind' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accessToken' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'profileJSON' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'jsonb' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insertUserOne' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'username' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'username' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'credentials' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'data' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: {
                                        kind: 'Name',
                                        value: 'sourceKind',
                                      },
                                      value: {
                                        kind: 'Variable',
                                        name: {
                                          kind: 'Name',
                                          value: 'provider',
                                        },
                                      },
                                    },
                                    {
                                      kind: 'ObjectField',
                                      name: {
                                        kind: 'Name',
                                        value: 'accessToken',
                                      },
                                      value: {
                                        kind: 'Variable',
                                        name: {
                                          kind: 'Name',
                                          value: 'accessToken',
                                        },
                                      },
                                    },
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'isLogin' },
                                      value: {
                                        kind: 'BooleanValue',
                                        value: true,
                                      },
                                    },
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'userInfo' },
                                      value: {
                                        kind: 'Variable',
                                        name: {
                                          kind: 'Name',
                                          value: 'profileJSON',
                                        },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SignupViaProviderMutation,
  SignupViaProviderMutationVariables
>
