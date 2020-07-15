import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "categories" */
export type Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Categories_Max_Order_By>;
  min?: Maybe<Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "categories" */
export type Categories_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "categories" */
export type Categories_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "dishes" */
export type Dishes = {
  __typename?: 'dishes';
  carbs?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "dishes" */
export type Dishes_Aggregate = {
  __typename?: 'dishes_aggregate';
  aggregate?: Maybe<Dishes_Aggregate_Fields>;
  nodes: Array<Dishes>;
};

/** aggregate fields of "dishes" */
export type Dishes_Aggregate_Fields = {
  __typename?: 'dishes_aggregate_fields';
  avg?: Maybe<Dishes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dishes_Max_Fields>;
  min?: Maybe<Dishes_Min_Fields>;
  stddev?: Maybe<Dishes_Stddev_Fields>;
  stddev_pop?: Maybe<Dishes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dishes_Stddev_Samp_Fields>;
  sum?: Maybe<Dishes_Sum_Fields>;
  var_pop?: Maybe<Dishes_Var_Pop_Fields>;
  var_samp?: Maybe<Dishes_Var_Samp_Fields>;
  variance?: Maybe<Dishes_Variance_Fields>;
};


/** aggregate fields of "dishes" */
export type Dishes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dishes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dishes" */
export type Dishes_Aggregate_Order_By = {
  avg?: Maybe<Dishes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dishes_Max_Order_By>;
  min?: Maybe<Dishes_Min_Order_By>;
  stddev?: Maybe<Dishes_Stddev_Order_By>;
  stddev_pop?: Maybe<Dishes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dishes_Stddev_Samp_Order_By>;
  sum?: Maybe<Dishes_Sum_Order_By>;
  var_pop?: Maybe<Dishes_Var_Pop_Order_By>;
  var_samp?: Maybe<Dishes_Var_Samp_Order_By>;
  variance?: Maybe<Dishes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dishes" */
export type Dishes_Arr_Rel_Insert_Input = {
  data: Array<Dishes_Insert_Input>;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** aggregate avg on columns */
export type Dishes_Avg_Fields = {
  __typename?: 'dishes_avg_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dishes" */
export type Dishes_Avg_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dishes". All fields are combined with a logical 'AND'. */
export type Dishes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dishes_Bool_Exp>>>;
  _not?: Maybe<Dishes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dishes_Bool_Exp>>>;
  carbs?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  fat?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  protein?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "dishes" */
export enum Dishes_Constraint {
  /** unique or primary key constraint */
  DishesPkey = 'dishes_pkey'
}

/** input type for incrementing integer column in table "dishes" */
export type Dishes_Inc_Input = {
  carbs?: Maybe<Scalars['Int']>;
  fat?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dishes" */
export type Dishes_Insert_Input = {
  carbs?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Dishes_Max_Fields = {
  __typename?: 'dishes_max_fields';
  carbs?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dishes" */
export type Dishes_Max_Order_By = {
  carbs?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dishes_Min_Fields = {
  __typename?: 'dishes_min_fields';
  carbs?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dishes" */
export type Dishes_Min_Order_By = {
  carbs?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "dishes" */
export type Dishes_Mutation_Response = {
  __typename?: 'dishes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dishes>;
};

/** input type for inserting object relation for remote table "dishes" */
export type Dishes_Obj_Rel_Insert_Input = {
  data: Dishes_Insert_Input;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** on conflict condition type for table "dishes" */
export type Dishes_On_Conflict = {
  constraint: Dishes_Constraint;
  update_columns: Array<Dishes_Update_Column>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** ordering options when selecting data from "dishes" */
export type Dishes_Order_By = {
  carbs?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "dishes" */
export type Dishes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "dishes" */
export enum Dishes_Select_Column {
  /** column name */
  Carbs = 'carbs',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Fat = 'fat',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Protein = 'protein',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "dishes" */
export type Dishes_Set_Input = {
  carbs?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  fat?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Dishes_Stddev_Fields = {
  __typename?: 'dishes_stddev_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dishes" */
export type Dishes_Stddev_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dishes_Stddev_Pop_Fields = {
  __typename?: 'dishes_stddev_pop_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dishes" */
export type Dishes_Stddev_Pop_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dishes_Stddev_Samp_Fields = {
  __typename?: 'dishes_stddev_samp_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dishes" */
export type Dishes_Stddev_Samp_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dishes_Sum_Fields = {
  __typename?: 'dishes_sum_fields';
  carbs?: Maybe<Scalars['Int']>;
  fat?: Maybe<Scalars['Int']>;
  protein?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "dishes" */
export type Dishes_Sum_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** update columns of table "dishes" */
export enum Dishes_Update_Column {
  /** column name */
  Carbs = 'carbs',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Fat = 'fat',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Protein = 'protein',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Unit = 'unit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Dishes_Var_Pop_Fields = {
  __typename?: 'dishes_var_pop_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dishes" */
export type Dishes_Var_Pop_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dishes_Var_Samp_Fields = {
  __typename?: 'dishes_var_samp_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dishes" */
export type Dishes_Var_Samp_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dishes_Variance_Fields = {
  __typename?: 'dishes_variance_fields';
  carbs?: Maybe<Scalars['Float']>;
  fat?: Maybe<Scalars['Float']>;
  protein?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dishes" */
export type Dishes_Variance_Order_By = {
  carbs?: Maybe<Order_By>;
  fat?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "food" */
export type Food = {
  __typename?: 'food';
  created_at: Scalars['timestamptz'];
  dish_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  ref_dish: Dishes;
  timestamp: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "food" */
export type Food_Aggregate = {
  __typename?: 'food_aggregate';
  aggregate?: Maybe<Food_Aggregate_Fields>;
  nodes: Array<Food>;
};

/** aggregate fields of "food" */
export type Food_Aggregate_Fields = {
  __typename?: 'food_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Food_Max_Fields>;
  min?: Maybe<Food_Min_Fields>;
};


/** aggregate fields of "food" */
export type Food_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "food" */
export type Food_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Food_Max_Order_By>;
  min?: Maybe<Food_Min_Order_By>;
};

/** input type for inserting array relation for remote table "food" */
export type Food_Arr_Rel_Insert_Input = {
  data: Array<Food_Insert_Input>;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** Boolean expression to filter rows from the table "food". All fields are combined with a logical 'AND'. */
export type Food_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Bool_Exp>>>;
  _not?: Maybe<Food_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Food_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dish_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  ref_dish?: Maybe<Dishes_Bool_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "food" */
export enum Food_Constraint {
  /** unique or primary key constraint */
  FoodPkey = 'food_pkey'
}

/** input type for inserting data into table "food" */
export type Food_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  ref_dish?: Maybe<Dishes_Obj_Rel_Insert_Input>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Food_Max_Fields = {
  __typename?: 'food_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "food" */
export type Food_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Food_Min_Fields = {
  __typename?: 'food_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "food" */
export type Food_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "food" */
export type Food_Mutation_Response = {
  __typename?: 'food_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Food>;
};

/** input type for inserting object relation for remote table "food" */
export type Food_Obj_Rel_Insert_Input = {
  data: Food_Insert_Input;
  on_conflict?: Maybe<Food_On_Conflict>;
};

/** on conflict condition type for table "food" */
export type Food_On_Conflict = {
  constraint: Food_Constraint;
  update_columns: Array<Food_Update_Column>;
  where?: Maybe<Food_Bool_Exp>;
};

/** ordering options when selecting data from "food" */
export type Food_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ref_dish?: Maybe<Dishes_Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "food" */
export type Food_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "food" */
export enum Food_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "food" */
export type Food_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "food" */
export enum Food_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "glucose" */
export type Glucose = {
  __typename?: 'glucose';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  timestamp: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
  value: Scalars['Int'];
};

/** aggregated selection of "glucose" */
export type Glucose_Aggregate = {
  __typename?: 'glucose_aggregate';
  aggregate?: Maybe<Glucose_Aggregate_Fields>;
  nodes: Array<Glucose>;
};

/** aggregate fields of "glucose" */
export type Glucose_Aggregate_Fields = {
  __typename?: 'glucose_aggregate_fields';
  avg?: Maybe<Glucose_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Glucose_Max_Fields>;
  min?: Maybe<Glucose_Min_Fields>;
  stddev?: Maybe<Glucose_Stddev_Fields>;
  stddev_pop?: Maybe<Glucose_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Glucose_Stddev_Samp_Fields>;
  sum?: Maybe<Glucose_Sum_Fields>;
  var_pop?: Maybe<Glucose_Var_Pop_Fields>;
  var_samp?: Maybe<Glucose_Var_Samp_Fields>;
  variance?: Maybe<Glucose_Variance_Fields>;
};


/** aggregate fields of "glucose" */
export type Glucose_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Glucose_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "glucose" */
export type Glucose_Aggregate_Order_By = {
  avg?: Maybe<Glucose_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Glucose_Max_Order_By>;
  min?: Maybe<Glucose_Min_Order_By>;
  stddev?: Maybe<Glucose_Stddev_Order_By>;
  stddev_pop?: Maybe<Glucose_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Glucose_Stddev_Samp_Order_By>;
  sum?: Maybe<Glucose_Sum_Order_By>;
  var_pop?: Maybe<Glucose_Var_Pop_Order_By>;
  var_samp?: Maybe<Glucose_Var_Samp_Order_By>;
  variance?: Maybe<Glucose_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "glucose" */
export type Glucose_Arr_Rel_Insert_Input = {
  data: Array<Glucose_Insert_Input>;
  on_conflict?: Maybe<Glucose_On_Conflict>;
};

/** aggregate avg on columns */
export type Glucose_Avg_Fields = {
  __typename?: 'glucose_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "glucose" */
export type Glucose_Avg_Order_By = {
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "glucose". All fields are combined with a logical 'AND'. */
export type Glucose_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Glucose_Bool_Exp>>>;
  _not?: Maybe<Glucose_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Glucose_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "glucose" */
export enum Glucose_Constraint {
  /** unique or primary key constraint */
  GlucosePkey = 'glucose_pkey'
}

/** input type for incrementing integer column in table "glucose" */
export type Glucose_Inc_Input = {
  value?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "glucose" */
export type Glucose_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Glucose_Max_Fields = {
  __typename?: 'glucose_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "glucose" */
export type Glucose_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Glucose_Min_Fields = {
  __typename?: 'glucose_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "glucose" */
export type Glucose_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "glucose" */
export type Glucose_Mutation_Response = {
  __typename?: 'glucose_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Glucose>;
};

/** input type for inserting object relation for remote table "glucose" */
export type Glucose_Obj_Rel_Insert_Input = {
  data: Glucose_Insert_Input;
  on_conflict?: Maybe<Glucose_On_Conflict>;
};

/** on conflict condition type for table "glucose" */
export type Glucose_On_Conflict = {
  constraint: Glucose_Constraint;
  update_columns: Array<Glucose_Update_Column>;
  where?: Maybe<Glucose_Bool_Exp>;
};

/** ordering options when selecting data from "glucose" */
export type Glucose_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "glucose" */
export type Glucose_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "glucose" */
export enum Glucose_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "glucose" */
export type Glucose_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Glucose_Stddev_Fields = {
  __typename?: 'glucose_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "glucose" */
export type Glucose_Stddev_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Glucose_Stddev_Pop_Fields = {
  __typename?: 'glucose_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "glucose" */
export type Glucose_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Glucose_Stddev_Samp_Fields = {
  __typename?: 'glucose_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "glucose" */
export type Glucose_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Glucose_Sum_Fields = {
  __typename?: 'glucose_sum_fields';
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "glucose" */
export type Glucose_Sum_Order_By = {
  value?: Maybe<Order_By>;
};

/** update columns of table "glucose" */
export enum Glucose_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Glucose_Var_Pop_Fields = {
  __typename?: 'glucose_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "glucose" */
export type Glucose_Var_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Glucose_Var_Samp_Fields = {
  __typename?: 'glucose_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "glucose" */
export type Glucose_Var_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Glucose_Variance_Fields = {
  __typename?: 'glucose_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "glucose" */
export type Glucose_Variance_Order_By = {
  value?: Maybe<Order_By>;
};

/** columns and relationships of "inbox" */
export type Inbox = {
  __typename?: 'inbox';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "inbox" */
export type Inbox_Aggregate = {
  __typename?: 'inbox_aggregate';
  aggregate?: Maybe<Inbox_Aggregate_Fields>;
  nodes: Array<Inbox>;
};

/** aggregate fields of "inbox" */
export type Inbox_Aggregate_Fields = {
  __typename?: 'inbox_aggregate_fields';
  avg?: Maybe<Inbox_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Inbox_Max_Fields>;
  min?: Maybe<Inbox_Min_Fields>;
  stddev?: Maybe<Inbox_Stddev_Fields>;
  stddev_pop?: Maybe<Inbox_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inbox_Stddev_Samp_Fields>;
  sum?: Maybe<Inbox_Sum_Fields>;
  var_pop?: Maybe<Inbox_Var_Pop_Fields>;
  var_samp?: Maybe<Inbox_Var_Samp_Fields>;
  variance?: Maybe<Inbox_Variance_Fields>;
};


/** aggregate fields of "inbox" */
export type Inbox_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inbox_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "inbox" */
export type Inbox_Aggregate_Order_By = {
  avg?: Maybe<Inbox_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Inbox_Max_Order_By>;
  min?: Maybe<Inbox_Min_Order_By>;
  stddev?: Maybe<Inbox_Stddev_Order_By>;
  stddev_pop?: Maybe<Inbox_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Inbox_Stddev_Samp_Order_By>;
  sum?: Maybe<Inbox_Sum_Order_By>;
  var_pop?: Maybe<Inbox_Var_Pop_Order_By>;
  var_samp?: Maybe<Inbox_Var_Samp_Order_By>;
  variance?: Maybe<Inbox_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "inbox" */
export type Inbox_Arr_Rel_Insert_Input = {
  data: Array<Inbox_Insert_Input>;
  on_conflict?: Maybe<Inbox_On_Conflict>;
};

/** aggregate avg on columns */
export type Inbox_Avg_Fields = {
  __typename?: 'inbox_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "inbox" */
export type Inbox_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "inbox". All fields are combined with a logical 'AND'. */
export type Inbox_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Inbox_Bool_Exp>>>;
  _not?: Maybe<Inbox_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Inbox_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "inbox" */
export enum Inbox_Constraint {
  /** unique or primary key constraint */
  InboxPkey = 'inbox_pkey'
}

/** input type for incrementing integer column in table "inbox" */
export type Inbox_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "inbox" */
export type Inbox_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Inbox_Max_Fields = {
  __typename?: 'inbox_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "inbox" */
export type Inbox_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Inbox_Min_Fields = {
  __typename?: 'inbox_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "inbox" */
export type Inbox_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "inbox" */
export type Inbox_Mutation_Response = {
  __typename?: 'inbox_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Inbox>;
};

/** input type for inserting object relation for remote table "inbox" */
export type Inbox_Obj_Rel_Insert_Input = {
  data: Inbox_Insert_Input;
  on_conflict?: Maybe<Inbox_On_Conflict>;
};

/** on conflict condition type for table "inbox" */
export type Inbox_On_Conflict = {
  constraint: Inbox_Constraint;
  update_columns: Array<Inbox_Update_Column>;
  where?: Maybe<Inbox_Bool_Exp>;
};

/** ordering options when selecting data from "inbox" */
export type Inbox_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "inbox" */
export type Inbox_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "inbox" */
export enum Inbox_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "inbox" */
export type Inbox_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Inbox_Stddev_Fields = {
  __typename?: 'inbox_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "inbox" */
export type Inbox_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Inbox_Stddev_Pop_Fields = {
  __typename?: 'inbox_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "inbox" */
export type Inbox_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Inbox_Stddev_Samp_Fields = {
  __typename?: 'inbox_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "inbox" */
export type Inbox_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Inbox_Sum_Fields = {
  __typename?: 'inbox_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "inbox" */
export type Inbox_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "inbox" */
export enum Inbox_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Inbox_Var_Pop_Fields = {
  __typename?: 'inbox_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "inbox" */
export type Inbox_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Inbox_Var_Samp_Fields = {
  __typename?: 'inbox_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "inbox" */
export type Inbox_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Inbox_Variance_Fields = {
  __typename?: 'inbox_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "inbox" */
export type Inbox_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "key_results" */
export type Key_Results = {
  __typename?: 'key_results';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  objective_id: Scalars['uuid'];
  progress: Scalars['float8'];
  /** An object relationship */
  ref_objective: Objectives;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "key_results" */
export type Key_Results_Aggregate = {
  __typename?: 'key_results_aggregate';
  aggregate?: Maybe<Key_Results_Aggregate_Fields>;
  nodes: Array<Key_Results>;
};

/** aggregate fields of "key_results" */
export type Key_Results_Aggregate_Fields = {
  __typename?: 'key_results_aggregate_fields';
  avg?: Maybe<Key_Results_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Key_Results_Max_Fields>;
  min?: Maybe<Key_Results_Min_Fields>;
  stddev?: Maybe<Key_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Key_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Key_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Key_Results_Sum_Fields>;
  var_pop?: Maybe<Key_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Key_Results_Var_Samp_Fields>;
  variance?: Maybe<Key_Results_Variance_Fields>;
};


/** aggregate fields of "key_results" */
export type Key_Results_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Key_Results_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "key_results" */
export type Key_Results_Aggregate_Order_By = {
  avg?: Maybe<Key_Results_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Key_Results_Max_Order_By>;
  min?: Maybe<Key_Results_Min_Order_By>;
  stddev?: Maybe<Key_Results_Stddev_Order_By>;
  stddev_pop?: Maybe<Key_Results_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Key_Results_Stddev_Samp_Order_By>;
  sum?: Maybe<Key_Results_Sum_Order_By>;
  var_pop?: Maybe<Key_Results_Var_Pop_Order_By>;
  var_samp?: Maybe<Key_Results_Var_Samp_Order_By>;
  variance?: Maybe<Key_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "key_results" */
export type Key_Results_Arr_Rel_Insert_Input = {
  data: Array<Key_Results_Insert_Input>;
  on_conflict?: Maybe<Key_Results_On_Conflict>;
};

/** aggregate avg on columns */
export type Key_Results_Avg_Fields = {
  __typename?: 'key_results_avg_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "key_results" */
export type Key_Results_Avg_Order_By = {
  progress?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "key_results". All fields are combined with a logical 'AND'. */
export type Key_Results_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Key_Results_Bool_Exp>>>;
  _not?: Maybe<Key_Results_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Key_Results_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  objective_id?: Maybe<Uuid_Comparison_Exp>;
  progress?: Maybe<Float8_Comparison_Exp>;
  ref_objective?: Maybe<Objectives_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "key_results" */
export enum Key_Results_Constraint {
  /** unique or primary key constraint */
  KeyResultsPkey = 'key_results_pkey'
}

/** input type for incrementing integer column in table "key_results" */
export type Key_Results_Inc_Input = {
  progress?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "key_results" */
export type Key_Results_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  objective_id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['float8']>;
  ref_objective?: Maybe<Objectives_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Key_Results_Max_Fields = {
  __typename?: 'key_results_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  objective_id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "key_results" */
export type Key_Results_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Key_Results_Min_Fields = {
  __typename?: 'key_results_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  objective_id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "key_results" */
export type Key_Results_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "key_results" */
export type Key_Results_Mutation_Response = {
  __typename?: 'key_results_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Key_Results>;
};

/** input type for inserting object relation for remote table "key_results" */
export type Key_Results_Obj_Rel_Insert_Input = {
  data: Key_Results_Insert_Input;
  on_conflict?: Maybe<Key_Results_On_Conflict>;
};

/** on conflict condition type for table "key_results" */
export type Key_Results_On_Conflict = {
  constraint: Key_Results_Constraint;
  update_columns: Array<Key_Results_Update_Column>;
  where?: Maybe<Key_Results_Bool_Exp>;
};

/** ordering options when selecting data from "key_results" */
export type Key_Results_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  ref_objective?: Maybe<Objectives_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "key_results" */
export type Key_Results_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "key_results" */
export enum Key_Results_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectiveId = 'objective_id',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "key_results" */
export type Key_Results_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  objective_id?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Key_Results_Stddev_Fields = {
  __typename?: 'key_results_stddev_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "key_results" */
export type Key_Results_Stddev_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Key_Results_Stddev_Pop_Fields = {
  __typename?: 'key_results_stddev_pop_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "key_results" */
export type Key_Results_Stddev_Pop_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Key_Results_Stddev_Samp_Fields = {
  __typename?: 'key_results_stddev_samp_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "key_results" */
export type Key_Results_Stddev_Samp_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Key_Results_Sum_Fields = {
  __typename?: 'key_results_sum_fields';
  progress?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "key_results" */
export type Key_Results_Sum_Order_By = {
  progress?: Maybe<Order_By>;
};

/** update columns of table "key_results" */
export enum Key_Results_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectiveId = 'objective_id',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Key_Results_Var_Pop_Fields = {
  __typename?: 'key_results_var_pop_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "key_results" */
export type Key_Results_Var_Pop_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Key_Results_Var_Samp_Fields = {
  __typename?: 'key_results_var_samp_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "key_results" */
export type Key_Results_Var_Samp_Order_By = {
  progress?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Key_Results_Variance_Fields = {
  __typename?: 'key_results_variance_fields';
  progress?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "key_results" */
export type Key_Results_Variance_Order_By = {
  progress?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "dishes" */
  delete_dishes?: Maybe<Dishes_Mutation_Response>;
  /** delete single row from the table: "dishes" */
  delete_dishes_by_pk?: Maybe<Dishes>;
  /** delete data from the table: "food" */
  delete_food?: Maybe<Food_Mutation_Response>;
  /** delete single row from the table: "food" */
  delete_food_by_pk?: Maybe<Food>;
  /** delete data from the table: "glucose" */
  delete_glucose?: Maybe<Glucose_Mutation_Response>;
  /** delete single row from the table: "glucose" */
  delete_glucose_by_pk?: Maybe<Glucose>;
  /** delete data from the table: "inbox" */
  delete_inbox?: Maybe<Inbox_Mutation_Response>;
  /** delete single row from the table: "inbox" */
  delete_inbox_by_pk?: Maybe<Inbox>;
  /** delete data from the table: "key_results" */
  delete_key_results?: Maybe<Key_Results_Mutation_Response>;
  /** delete single row from the table: "key_results" */
  delete_key_results_by_pk?: Maybe<Key_Results>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "notes_snippets" */
  delete_notes_snippets?: Maybe<Notes_Snippets_Mutation_Response>;
  /** delete single row from the table: "notes_snippets" */
  delete_notes_snippets_by_pk?: Maybe<Notes_Snippets>;
  /** delete data from the table: "objective_team" */
  delete_objective_team?: Maybe<Objective_Team_Mutation_Response>;
  /** delete single row from the table: "objective_team" */
  delete_objective_team_by_pk?: Maybe<Objective_Team>;
  /** delete data from the table: "objectives" */
  delete_objectives?: Maybe<Objectives_Mutation_Response>;
  /** delete single row from the table: "objectives" */
  delete_objectives_by_pk?: Maybe<Objectives>;
  /** delete data from the table: "people" */
  delete_people?: Maybe<People_Mutation_Response>;
  /** delete single row from the table: "people" */
  delete_people_by_pk?: Maybe<People>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete single row from the table: "reviews" */
  delete_reviews_by_pk?: Maybe<Reviews>;
  /** delete data from the table: "snippets" */
  delete_snippets?: Maybe<Snippets_Mutation_Response>;
  /** delete single row from the table: "snippets" */
  delete_snippets_by_pk?: Maybe<Snippets>;
  /** delete data from the table: "snippets_mapping" */
  delete_snippets_mapping?: Maybe<Snippets_Mapping_Mutation_Response>;
  /** delete single row from the table: "snippets_mapping" */
  delete_snippets_mapping_by_pk?: Maybe<Snippets_Mapping>;
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "thoughts" */
  delete_thoughts?: Maybe<Thoughts_Mutation_Response>;
  /** delete single row from the table: "thoughts" */
  delete_thoughts_by_pk?: Maybe<Thoughts>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "water" */
  delete_water?: Maybe<Water_Mutation_Response>;
  /** delete single row from the table: "water" */
  delete_water_by_pk?: Maybe<Water>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "dishes" */
  insert_dishes?: Maybe<Dishes_Mutation_Response>;
  /** insert a single row into the table: "dishes" */
  insert_dishes_one?: Maybe<Dishes>;
  /** insert data into the table: "food" */
  insert_food?: Maybe<Food_Mutation_Response>;
  /** insert a single row into the table: "food" */
  insert_food_one?: Maybe<Food>;
  /** insert data into the table: "glucose" */
  insert_glucose?: Maybe<Glucose_Mutation_Response>;
  /** insert a single row into the table: "glucose" */
  insert_glucose_one?: Maybe<Glucose>;
  /** insert data into the table: "inbox" */
  insert_inbox?: Maybe<Inbox_Mutation_Response>;
  /** insert a single row into the table: "inbox" */
  insert_inbox_one?: Maybe<Inbox>;
  /** insert data into the table: "key_results" */
  insert_key_results?: Maybe<Key_Results_Mutation_Response>;
  /** insert a single row into the table: "key_results" */
  insert_key_results_one?: Maybe<Key_Results>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "notes_snippets" */
  insert_notes_snippets?: Maybe<Notes_Snippets_Mutation_Response>;
  /** insert a single row into the table: "notes_snippets" */
  insert_notes_snippets_one?: Maybe<Notes_Snippets>;
  /** insert data into the table: "objective_team" */
  insert_objective_team?: Maybe<Objective_Team_Mutation_Response>;
  /** insert a single row into the table: "objective_team" */
  insert_objective_team_one?: Maybe<Objective_Team>;
  /** insert data into the table: "objectives" */
  insert_objectives?: Maybe<Objectives_Mutation_Response>;
  /** insert a single row into the table: "objectives" */
  insert_objectives_one?: Maybe<Objectives>;
  /** insert data into the table: "people" */
  insert_people?: Maybe<People_Mutation_Response>;
  /** insert a single row into the table: "people" */
  insert_people_one?: Maybe<People>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert a single row into the table: "reviews" */
  insert_reviews_one?: Maybe<Reviews>;
  /** insert data into the table: "snippets" */
  insert_snippets?: Maybe<Snippets_Mutation_Response>;
  /** insert data into the table: "snippets_mapping" */
  insert_snippets_mapping?: Maybe<Snippets_Mapping_Mutation_Response>;
  /** insert a single row into the table: "snippets_mapping" */
  insert_snippets_mapping_one?: Maybe<Snippets_Mapping>;
  /** insert a single row into the table: "snippets" */
  insert_snippets_one?: Maybe<Snippets>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "thoughts" */
  insert_thoughts?: Maybe<Thoughts_Mutation_Response>;
  /** insert a single row into the table: "thoughts" */
  insert_thoughts_one?: Maybe<Thoughts>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "water" */
  insert_water?: Maybe<Water_Mutation_Response>;
  /** insert a single row into the table: "water" */
  insert_water_one?: Maybe<Water>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "dishes" */
  update_dishes?: Maybe<Dishes_Mutation_Response>;
  /** update single row of the table: "dishes" */
  update_dishes_by_pk?: Maybe<Dishes>;
  /** update data of the table: "food" */
  update_food?: Maybe<Food_Mutation_Response>;
  /** update single row of the table: "food" */
  update_food_by_pk?: Maybe<Food>;
  /** update data of the table: "glucose" */
  update_glucose?: Maybe<Glucose_Mutation_Response>;
  /** update single row of the table: "glucose" */
  update_glucose_by_pk?: Maybe<Glucose>;
  /** update data of the table: "inbox" */
  update_inbox?: Maybe<Inbox_Mutation_Response>;
  /** update single row of the table: "inbox" */
  update_inbox_by_pk?: Maybe<Inbox>;
  /** update data of the table: "key_results" */
  update_key_results?: Maybe<Key_Results_Mutation_Response>;
  /** update single row of the table: "key_results" */
  update_key_results_by_pk?: Maybe<Key_Results>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "notes_snippets" */
  update_notes_snippets?: Maybe<Notes_Snippets_Mutation_Response>;
  /** update single row of the table: "notes_snippets" */
  update_notes_snippets_by_pk?: Maybe<Notes_Snippets>;
  /** update data of the table: "objective_team" */
  update_objective_team?: Maybe<Objective_Team_Mutation_Response>;
  /** update single row of the table: "objective_team" */
  update_objective_team_by_pk?: Maybe<Objective_Team>;
  /** update data of the table: "objectives" */
  update_objectives?: Maybe<Objectives_Mutation_Response>;
  /** update single row of the table: "objectives" */
  update_objectives_by_pk?: Maybe<Objectives>;
  /** update data of the table: "people" */
  update_people?: Maybe<People_Mutation_Response>;
  /** update single row of the table: "people" */
  update_people_by_pk?: Maybe<People>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update single row of the table: "reviews" */
  update_reviews_by_pk?: Maybe<Reviews>;
  /** update data of the table: "snippets" */
  update_snippets?: Maybe<Snippets_Mutation_Response>;
  /** update single row of the table: "snippets" */
  update_snippets_by_pk?: Maybe<Snippets>;
  /** update data of the table: "snippets_mapping" */
  update_snippets_mapping?: Maybe<Snippets_Mapping_Mutation_Response>;
  /** update single row of the table: "snippets_mapping" */
  update_snippets_mapping_by_pk?: Maybe<Snippets_Mapping>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "thoughts" */
  update_thoughts?: Maybe<Thoughts_Mutation_Response>;
  /** update single row of the table: "thoughts" */
  update_thoughts_by_pk?: Maybe<Thoughts>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "water" */
  update_water?: Maybe<Water_Mutation_Response>;
  /** update single row of the table: "water" */
  update_water_by_pk?: Maybe<Water>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DishesArgs = {
  where: Dishes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Dishes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FoodArgs = {
  where: Food_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Food_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GlucoseArgs = {
  where: Glucose_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Glucose_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InboxArgs = {
  where: Inbox_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inbox_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Key_ResultsArgs = {
  where: Key_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Key_Results_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Notes_SnippetsArgs = {
  where: Notes_Snippets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_Snippets_By_PkArgs = {
  note_id: Scalars['uuid'];
  snippet_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Objective_TeamArgs = {
  where: Objective_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Objective_Team_By_PkArgs = {
  objective_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ObjectivesArgs = {
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Objectives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PeopleArgs = {
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_People_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SnippetsArgs = {
  where: Snippets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Snippets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Snippets_MappingArgs = {
  where: Snippets_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Snippets_Mapping_By_PkArgs = {
  source_id: Scalars['uuid'];
  target_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ThoughtsArgs = {
  where: Thoughts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Thoughts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_WaterArgs = {
  where: Water_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Water_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DishesArgs = {
  objects: Array<Dishes_Insert_Input>;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Dishes_OneArgs = {
  object: Dishes_Insert_Input;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FoodArgs = {
  objects: Array<Food_Insert_Input>;
  on_conflict?: Maybe<Food_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Food_OneArgs = {
  object: Food_Insert_Input;
  on_conflict?: Maybe<Food_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GlucoseArgs = {
  objects: Array<Glucose_Insert_Input>;
  on_conflict?: Maybe<Glucose_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Glucose_OneArgs = {
  object: Glucose_Insert_Input;
  on_conflict?: Maybe<Glucose_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InboxArgs = {
  objects: Array<Inbox_Insert_Input>;
  on_conflict?: Maybe<Inbox_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inbox_OneArgs = {
  object: Inbox_Insert_Input;
  on_conflict?: Maybe<Inbox_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_ResultsArgs = {
  objects: Array<Key_Results_Insert_Input>;
  on_conflict?: Maybe<Key_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Key_Results_OneArgs = {
  object: Key_Results_Insert_Input;
  on_conflict?: Maybe<Key_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_SnippetsArgs = {
  objects: Array<Notes_Snippets_Insert_Input>;
  on_conflict?: Maybe<Notes_Snippets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_Snippets_OneArgs = {
  object: Notes_Snippets_Insert_Input;
  on_conflict?: Maybe<Notes_Snippets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Objective_TeamArgs = {
  objects: Array<Objective_Team_Insert_Input>;
  on_conflict?: Maybe<Objective_Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Objective_Team_OneArgs = {
  object: Objective_Team_Insert_Input;
  on_conflict?: Maybe<Objective_Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ObjectivesArgs = {
  objects: Array<Objectives_Insert_Input>;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Objectives_OneArgs = {
  object: Objectives_Insert_Input;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PeopleArgs = {
  objects: Array<People_Insert_Input>;
  on_conflict?: Maybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_People_OneArgs = {
  object: People_Insert_Input;
  on_conflict?: Maybe<People_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SnippetsArgs = {
  objects: Array<Snippets_Insert_Input>;
  on_conflict?: Maybe<Snippets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Snippets_MappingArgs = {
  objects: Array<Snippets_Mapping_Insert_Input>;
  on_conflict?: Maybe<Snippets_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Snippets_Mapping_OneArgs = {
  object: Snippets_Mapping_Insert_Input;
  on_conflict?: Maybe<Snippets_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Snippets_OneArgs = {
  object: Snippets_Insert_Input;
  on_conflict?: Maybe<Snippets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ThoughtsArgs = {
  objects: Array<Thoughts_Insert_Input>;
  on_conflict?: Maybe<Thoughts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Thoughts_OneArgs = {
  object: Thoughts_Insert_Input;
  on_conflict?: Maybe<Thoughts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WaterArgs = {
  objects: Array<Water_Insert_Input>;
  on_conflict?: Maybe<Water_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Water_OneArgs = {
  object: Water_Insert_Input;
  on_conflict?: Maybe<Water_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DishesArgs = {
  _inc?: Maybe<Dishes_Inc_Input>;
  _set?: Maybe<Dishes_Set_Input>;
  where: Dishes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Dishes_By_PkArgs = {
  _inc?: Maybe<Dishes_Inc_Input>;
  _set?: Maybe<Dishes_Set_Input>;
  pk_columns: Dishes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FoodArgs = {
  _set?: Maybe<Food_Set_Input>;
  where: Food_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Food_By_PkArgs = {
  _set?: Maybe<Food_Set_Input>;
  pk_columns: Food_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GlucoseArgs = {
  _inc?: Maybe<Glucose_Inc_Input>;
  _set?: Maybe<Glucose_Set_Input>;
  where: Glucose_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Glucose_By_PkArgs = {
  _inc?: Maybe<Glucose_Inc_Input>;
  _set?: Maybe<Glucose_Set_Input>;
  pk_columns: Glucose_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InboxArgs = {
  _inc?: Maybe<Inbox_Inc_Input>;
  _set?: Maybe<Inbox_Set_Input>;
  where: Inbox_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inbox_By_PkArgs = {
  _inc?: Maybe<Inbox_Inc_Input>;
  _set?: Maybe<Inbox_Set_Input>;
  pk_columns: Inbox_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Key_ResultsArgs = {
  _inc?: Maybe<Key_Results_Inc_Input>;
  _set?: Maybe<Key_Results_Set_Input>;
  where: Key_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Key_Results_By_PkArgs = {
  _inc?: Maybe<Key_Results_Inc_Input>;
  _set?: Maybe<Key_Results_Set_Input>;
  pk_columns: Key_Results_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: Maybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: Maybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_SnippetsArgs = {
  _set?: Maybe<Notes_Snippets_Set_Input>;
  where: Notes_Snippets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_Snippets_By_PkArgs = {
  _set?: Maybe<Notes_Snippets_Set_Input>;
  pk_columns: Notes_Snippets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Objective_TeamArgs = {
  _set?: Maybe<Objective_Team_Set_Input>;
  where: Objective_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Objective_Team_By_PkArgs = {
  _set?: Maybe<Objective_Team_Set_Input>;
  pk_columns: Objective_Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectivesArgs = {
  _set?: Maybe<Objectives_Set_Input>;
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Objectives_By_PkArgs = {
  _set?: Maybe<Objectives_Set_Input>;
  pk_columns: Objectives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PeopleArgs = {
  _set?: Maybe<People_Set_Input>;
  where: People_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_People_By_PkArgs = {
  _set?: Maybe<People_Set_Input>;
  pk_columns: People_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _set?: Maybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _set?: Maybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _append?: Maybe<Reviews_Append_Input>;
  _delete_at_path?: Maybe<Reviews_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Reviews_Delete_Elem_Input>;
  _delete_key?: Maybe<Reviews_Delete_Key_Input>;
  _prepend?: Maybe<Reviews_Prepend_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _append?: Maybe<Reviews_Append_Input>;
  _delete_at_path?: Maybe<Reviews_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Reviews_Delete_Elem_Input>;
  _delete_key?: Maybe<Reviews_Delete_Key_Input>;
  _prepend?: Maybe<Reviews_Prepend_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  pk_columns: Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SnippetsArgs = {
  _append?: Maybe<Snippets_Append_Input>;
  _delete_at_path?: Maybe<Snippets_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Snippets_Delete_Elem_Input>;
  _delete_key?: Maybe<Snippets_Delete_Key_Input>;
  _inc?: Maybe<Snippets_Inc_Input>;
  _prepend?: Maybe<Snippets_Prepend_Input>;
  _set?: Maybe<Snippets_Set_Input>;
  where: Snippets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Snippets_By_PkArgs = {
  _append?: Maybe<Snippets_Append_Input>;
  _delete_at_path?: Maybe<Snippets_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Snippets_Delete_Elem_Input>;
  _delete_key?: Maybe<Snippets_Delete_Key_Input>;
  _inc?: Maybe<Snippets_Inc_Input>;
  _prepend?: Maybe<Snippets_Prepend_Input>;
  _set?: Maybe<Snippets_Set_Input>;
  pk_columns: Snippets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Snippets_MappingArgs = {
  _set?: Maybe<Snippets_Mapping_Set_Input>;
  where: Snippets_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Snippets_Mapping_By_PkArgs = {
  _set?: Maybe<Snippets_Mapping_Set_Input>;
  pk_columns: Snippets_Mapping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _append?: Maybe<Tasks_Append_Input>;
  _delete_at_path?: Maybe<Tasks_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Tasks_Delete_Elem_Input>;
  _delete_key?: Maybe<Tasks_Delete_Key_Input>;
  _prepend?: Maybe<Tasks_Prepend_Input>;
  _set?: Maybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _append?: Maybe<Tasks_Append_Input>;
  _delete_at_path?: Maybe<Tasks_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Tasks_Delete_Elem_Input>;
  _delete_key?: Maybe<Tasks_Delete_Key_Input>;
  _prepend?: Maybe<Tasks_Prepend_Input>;
  _set?: Maybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _set?: Maybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ThoughtsArgs = {
  _set?: Maybe<Thoughts_Set_Input>;
  where: Thoughts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Thoughts_By_PkArgs = {
  _set?: Maybe<Thoughts_Set_Input>;
  pk_columns: Thoughts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WaterArgs = {
  _inc?: Maybe<Water_Inc_Input>;
  _set?: Maybe<Water_Set_Input>;
  where: Water_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Water_By_PkArgs = {
  _inc?: Maybe<Water_Inc_Input>;
  _set?: Maybe<Water_Set_Input>;
  pk_columns: Water_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  ref_snippets: Array<Notes_Snippets>;
  /** An aggregated array relationship */
  ref_snippets_aggregate: Notes_Snippets_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "notes" */
export type NotesRef_SnippetsArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** columns and relationships of "notes" */
export type NotesRef_Snippets_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notes" */
export type Notes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Notes_Max_Order_By>;
  min?: Maybe<Notes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notes" */
export type Notes_Arr_Rel_Insert_Input = {
  data: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Notes_Bool_Exp>>>;
  _not?: Maybe<Notes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Notes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  ref_snippets?: Maybe<Notes_Snippets_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ref_snippets?: Maybe<Notes_Snippets_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notes" */
export type Notes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notes" */
export type Notes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Notes>;
};

/** input type for inserting object relation for remote table "notes" */
export type Notes_Obj_Rel_Insert_Input = {
  data: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};

/** on conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns: Array<Notes_Update_Column>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** ordering options when selecting data from "notes" */
export type Notes_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ref_snippets_aggregate?: Maybe<Notes_Snippets_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "notes" */
export type Notes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "notes_snippets" */
export type Notes_Snippets = {
  __typename?: 'notes_snippets';
  note_id: Scalars['uuid'];
  /** An object relationship */
  ref_note: Notes;
  /** An object relationship */
  ref_snippet: Snippets;
  snippet_id: Scalars['uuid'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "notes_snippets" */
export type Notes_Snippets_Aggregate = {
  __typename?: 'notes_snippets_aggregate';
  aggregate?: Maybe<Notes_Snippets_Aggregate_Fields>;
  nodes: Array<Notes_Snippets>;
};

/** aggregate fields of "notes_snippets" */
export type Notes_Snippets_Aggregate_Fields = {
  __typename?: 'notes_snippets_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Notes_Snippets_Max_Fields>;
  min?: Maybe<Notes_Snippets_Min_Fields>;
};


/** aggregate fields of "notes_snippets" */
export type Notes_Snippets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Snippets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notes_snippets" */
export type Notes_Snippets_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Notes_Snippets_Max_Order_By>;
  min?: Maybe<Notes_Snippets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notes_snippets" */
export type Notes_Snippets_Arr_Rel_Insert_Input = {
  data: Array<Notes_Snippets_Insert_Input>;
  on_conflict?: Maybe<Notes_Snippets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notes_snippets". All fields are combined with a logical 'AND'. */
export type Notes_Snippets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Notes_Snippets_Bool_Exp>>>;
  _not?: Maybe<Notes_Snippets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Notes_Snippets_Bool_Exp>>>;
  note_id?: Maybe<Uuid_Comparison_Exp>;
  ref_note?: Maybe<Notes_Bool_Exp>;
  ref_snippet?: Maybe<Snippets_Bool_Exp>;
  snippet_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes_snippets" */
export enum Notes_Snippets_Constraint {
  /** unique or primary key constraint */
  NotesSnippetsPkey = 'notes_snippets_pkey'
}

/** input type for inserting data into table "notes_snippets" */
export type Notes_Snippets_Insert_Input = {
  note_id?: Maybe<Scalars['uuid']>;
  ref_note?: Maybe<Notes_Obj_Rel_Insert_Input>;
  ref_snippet?: Maybe<Snippets_Obj_Rel_Insert_Input>;
  snippet_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notes_Snippets_Max_Fields = {
  __typename?: 'notes_snippets_max_fields';
  note_id?: Maybe<Scalars['uuid']>;
  snippet_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notes_snippets" */
export type Notes_Snippets_Max_Order_By = {
  note_id?: Maybe<Order_By>;
  snippet_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notes_Snippets_Min_Fields = {
  __typename?: 'notes_snippets_min_fields';
  note_id?: Maybe<Scalars['uuid']>;
  snippet_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notes_snippets" */
export type Notes_Snippets_Min_Order_By = {
  note_id?: Maybe<Order_By>;
  snippet_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "notes_snippets" */
export type Notes_Snippets_Mutation_Response = {
  __typename?: 'notes_snippets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Notes_Snippets>;
};

/** input type for inserting object relation for remote table "notes_snippets" */
export type Notes_Snippets_Obj_Rel_Insert_Input = {
  data: Notes_Snippets_Insert_Input;
  on_conflict?: Maybe<Notes_Snippets_On_Conflict>;
};

/** on conflict condition type for table "notes_snippets" */
export type Notes_Snippets_On_Conflict = {
  constraint: Notes_Snippets_Constraint;
  update_columns: Array<Notes_Snippets_Update_Column>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};

/** ordering options when selecting data from "notes_snippets" */
export type Notes_Snippets_Order_By = {
  note_id?: Maybe<Order_By>;
  ref_note?: Maybe<Notes_Order_By>;
  ref_snippet?: Maybe<Snippets_Order_By>;
  snippet_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "notes_snippets" */
export type Notes_Snippets_Pk_Columns_Input = {
  note_id: Scalars['uuid'];
  snippet_id: Scalars['uuid'];
};

/** select columns of table "notes_snippets" */
export enum Notes_Snippets_Select_Column {
  /** column name */
  NoteId = 'note_id',
  /** column name */
  SnippetId = 'snippet_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "notes_snippets" */
export type Notes_Snippets_Set_Input = {
  note_id?: Maybe<Scalars['uuid']>;
  snippet_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "notes_snippets" */
export enum Notes_Snippets_Update_Column {
  /** column name */
  NoteId = 'note_id',
  /** column name */
  SnippetId = 'snippet_id',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "objective_team" */
export type Objective_Team = {
  __typename?: 'objective_team';
  id?: Maybe<Scalars['uuid']>;
  objective_id: Scalars['uuid'];
  /** An object relationship */
  ref_objective: Objectives;
  /** An object relationship */
  ref_team: Teams;
  team_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** aggregated selection of "objective_team" */
export type Objective_Team_Aggregate = {
  __typename?: 'objective_team_aggregate';
  aggregate?: Maybe<Objective_Team_Aggregate_Fields>;
  nodes: Array<Objective_Team>;
};

/** aggregate fields of "objective_team" */
export type Objective_Team_Aggregate_Fields = {
  __typename?: 'objective_team_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Objective_Team_Max_Fields>;
  min?: Maybe<Objective_Team_Min_Fields>;
};


/** aggregate fields of "objective_team" */
export type Objective_Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Objective_Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "objective_team" */
export type Objective_Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Objective_Team_Max_Order_By>;
  min?: Maybe<Objective_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "objective_team" */
export type Objective_Team_Arr_Rel_Insert_Input = {
  data: Array<Objective_Team_Insert_Input>;
  on_conflict?: Maybe<Objective_Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "objective_team". All fields are combined with a logical 'AND'. */
export type Objective_Team_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Objective_Team_Bool_Exp>>>;
  _not?: Maybe<Objective_Team_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Objective_Team_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  objective_id?: Maybe<Uuid_Comparison_Exp>;
  ref_objective?: Maybe<Objectives_Bool_Exp>;
  ref_team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "objective_team" */
export enum Objective_Team_Constraint {
  /** unique or primary key constraint */
  ObjectiveTeamPkey = 'objective_team_pkey'
}

/** input type for inserting data into table "objective_team" */
export type Objective_Team_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  objective_id?: Maybe<Scalars['uuid']>;
  ref_objective?: Maybe<Objectives_Obj_Rel_Insert_Input>;
  ref_team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Objective_Team_Max_Fields = {
  __typename?: 'objective_team_max_fields';
  id?: Maybe<Scalars['uuid']>;
  objective_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "objective_team" */
export type Objective_Team_Max_Order_By = {
  id?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Objective_Team_Min_Fields = {
  __typename?: 'objective_team_min_fields';
  id?: Maybe<Scalars['uuid']>;
  objective_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "objective_team" */
export type Objective_Team_Min_Order_By = {
  id?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "objective_team" */
export type Objective_Team_Mutation_Response = {
  __typename?: 'objective_team_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Objective_Team>;
};

/** input type for inserting object relation for remote table "objective_team" */
export type Objective_Team_Obj_Rel_Insert_Input = {
  data: Objective_Team_Insert_Input;
  on_conflict?: Maybe<Objective_Team_On_Conflict>;
};

/** on conflict condition type for table "objective_team" */
export type Objective_Team_On_Conflict = {
  constraint: Objective_Team_Constraint;
  update_columns: Array<Objective_Team_Update_Column>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};

/** ordering options when selecting data from "objective_team" */
export type Objective_Team_Order_By = {
  id?: Maybe<Order_By>;
  objective_id?: Maybe<Order_By>;
  ref_objective?: Maybe<Objectives_Order_By>;
  ref_team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "objective_team" */
export type Objective_Team_Pk_Columns_Input = {
  objective_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** select columns of table "objective_team" */
export enum Objective_Team_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectiveId = 'objective_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "objective_team" */
export type Objective_Team_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  objective_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "objective_team" */
export enum Objective_Team_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectiveId = 'objective_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "objectives" */
export type Objectives = {
  __typename?: 'objectives';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  end_date: Scalars['timestamptz'];
  id: Scalars['uuid'];
  key_results?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  ref_key_results: Array<Key_Results>;
  /** An aggregated array relationship */
  ref_key_results_aggregate: Key_Results_Aggregate;
  /** An array relationship */
  ref_objective_teams: Array<Objective_Team>;
  /** An aggregated array relationship */
  ref_objective_teams_aggregate: Objective_Team_Aggregate;
  start_date: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "objectives" */
export type ObjectivesRef_Key_ResultsArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** columns and relationships of "objectives" */
export type ObjectivesRef_Key_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** columns and relationships of "objectives" */
export type ObjectivesRef_Objective_TeamsArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** columns and relationships of "objectives" */
export type ObjectivesRef_Objective_Teams_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};

/** aggregated selection of "objectives" */
export type Objectives_Aggregate = {
  __typename?: 'objectives_aggregate';
  aggregate?: Maybe<Objectives_Aggregate_Fields>;
  nodes: Array<Objectives>;
};

/** aggregate fields of "objectives" */
export type Objectives_Aggregate_Fields = {
  __typename?: 'objectives_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Objectives_Max_Fields>;
  min?: Maybe<Objectives_Min_Fields>;
};


/** aggregate fields of "objectives" */
export type Objectives_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Objectives_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "objectives" */
export type Objectives_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Objectives_Max_Order_By>;
  min?: Maybe<Objectives_Min_Order_By>;
};

/** input type for inserting array relation for remote table "objectives" */
export type Objectives_Arr_Rel_Insert_Input = {
  data: Array<Objectives_Insert_Input>;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};

/** Boolean expression to filter rows from the table "objectives". All fields are combined with a logical 'AND'. */
export type Objectives_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Objectives_Bool_Exp>>>;
  _not?: Maybe<Objectives_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Objectives_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  key_results?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  ref_key_results?: Maybe<Key_Results_Bool_Exp>;
  ref_objective_teams?: Maybe<Objective_Team_Bool_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "objectives" */
export enum Objectives_Constraint {
  /** unique or primary key constraint */
  ObjectivesPkey = 'objectives_pkey'
}

/** input type for inserting data into table "objectives" */
export type Objectives_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key_results?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ref_key_results?: Maybe<Key_Results_Arr_Rel_Insert_Input>;
  ref_objective_teams?: Maybe<Objective_Team_Arr_Rel_Insert_Input>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Objectives_Max_Fields = {
  __typename?: 'objectives_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key_results?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "objectives" */
export type Objectives_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key_results?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Objectives_Min_Fields = {
  __typename?: 'objectives_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key_results?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "objectives" */
export type Objectives_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key_results?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "objectives" */
export type Objectives_Mutation_Response = {
  __typename?: 'objectives_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Objectives>;
};

/** input type for inserting object relation for remote table "objectives" */
export type Objectives_Obj_Rel_Insert_Input = {
  data: Objectives_Insert_Input;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};

/** on conflict condition type for table "objectives" */
export type Objectives_On_Conflict = {
  constraint: Objectives_Constraint;
  update_columns: Array<Objectives_Update_Column>;
  where?: Maybe<Objectives_Bool_Exp>;
};

/** ordering options when selecting data from "objectives" */
export type Objectives_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key_results?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ref_key_results_aggregate?: Maybe<Key_Results_Aggregate_Order_By>;
  ref_objective_teams_aggregate?: Maybe<Objective_Team_Aggregate_Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "objectives" */
export type Objectives_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "objectives" */
export enum Objectives_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  KeyResults = 'key_results',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "objectives" */
export type Objectives_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  key_results?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "objectives" */
export enum Objectives_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  KeyResults = 'key_results',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "people" */
export type People = {
  __typename?: 'people';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "people" */
export type People_Aggregate = {
  __typename?: 'people_aggregate';
  aggregate?: Maybe<People_Aggregate_Fields>;
  nodes: Array<People>;
};

/** aggregate fields of "people" */
export type People_Aggregate_Fields = {
  __typename?: 'people_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<People_Max_Fields>;
  min?: Maybe<People_Min_Fields>;
};


/** aggregate fields of "people" */
export type People_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<People_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "people" */
export type People_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<People_Max_Order_By>;
  min?: Maybe<People_Min_Order_By>;
};

/** input type for inserting array relation for remote table "people" */
export type People_Arr_Rel_Insert_Input = {
  data: Array<People_Insert_Input>;
  on_conflict?: Maybe<People_On_Conflict>;
};

/** Boolean expression to filter rows from the table "people". All fields are combined with a logical 'AND'. */
export type People_Bool_Exp = {
  _and?: Maybe<Array<Maybe<People_Bool_Exp>>>;
  _not?: Maybe<People_Bool_Exp>;
  _or?: Maybe<Array<Maybe<People_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "people" */
export enum People_Constraint {
  /** unique or primary key constraint */
  PeoplePkey = 'people_pkey'
}

/** input type for inserting data into table "people" */
export type People_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type People_Max_Fields = {
  __typename?: 'people_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "people" */
export type People_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type People_Min_Fields = {
  __typename?: 'people_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "people" */
export type People_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "people" */
export type People_Mutation_Response = {
  __typename?: 'people_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<People>;
};

/** input type for inserting object relation for remote table "people" */
export type People_Obj_Rel_Insert_Input = {
  data: People_Insert_Input;
  on_conflict?: Maybe<People_On_Conflict>;
};

/** on conflict condition type for table "people" */
export type People_On_Conflict = {
  constraint: People_Constraint;
  update_columns: Array<People_Update_Column>;
  where?: Maybe<People_Bool_Exp>;
};

/** ordering options when selecting data from "people" */
export type People_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "people" */
export type People_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "people" */
export enum People_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "people" */
export type People_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "people" */
export enum People_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_archived: Scalars['Boolean'];
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  ref_parent?: Maybe<Projects>;
  /** An array relationship */
  ref_sub_projects: Array<Projects>;
  /** An aggregated array relationship */
  ref_sub_projects_aggregate: Projects_Aggregate;
  /** An array relationship */
  ref_tasks: Array<Tasks>;
  /** An aggregated array relationship */
  ref_tasks_aggregate: Tasks_Aggregate;
  /** An object relationship */
  ref_team?: Maybe<Teams>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "projects" */
export type ProjectsRef_Sub_ProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsRef_Sub_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsRef_TasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsRef_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Projects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Projects_Max_Order_By>;
  min?: Maybe<Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_archived?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_id?: Maybe<Uuid_Comparison_Exp>;
  ref_parent?: Maybe<Projects_Bool_Exp>;
  ref_sub_projects?: Maybe<Projects_Bool_Exp>;
  ref_tasks?: Maybe<Tasks_Bool_Exp>;
  ref_team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint */
  ProjectsPkey = 'projects_pkey'
}

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  ref_parent?: Maybe<Projects_Obj_Rel_Insert_Input>;
  ref_sub_projects?: Maybe<Projects_Arr_Rel_Insert_Input>;
  ref_tasks?: Maybe<Tasks_Arr_Rel_Insert_Input>;
  ref_team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  on_conflict?: Maybe<Projects_On_Conflict>;
};

/** on conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns: Array<Projects_Update_Column>;
  where?: Maybe<Projects_Bool_Exp>;
};

/** ordering options when selecting data from "projects" */
export type Projects_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_archived?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  ref_parent?: Maybe<Projects_Order_By>;
  ref_sub_projects_aggregate?: Maybe<Projects_Aggregate_Order_By>;
  ref_tasks_aggregate?: Maybe<Tasks_Aggregate_Order_By>;
  ref_team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "projects" */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "dishes" */
  dishes: Array<Dishes>;
  /** fetch aggregated fields from the table: "dishes" */
  dishes_aggregate: Dishes_Aggregate;
  /** fetch data from the table: "dishes" using primary key columns */
  dishes_by_pk?: Maybe<Dishes>;
  /** fetch data from the table: "food" */
  food: Array<Food>;
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** fetch data from the table: "glucose" */
  glucose: Array<Glucose>;
  /** fetch aggregated fields from the table: "glucose" */
  glucose_aggregate: Glucose_Aggregate;
  /** fetch data from the table: "glucose" using primary key columns */
  glucose_by_pk?: Maybe<Glucose>;
  /** fetch data from the table: "inbox" */
  inbox: Array<Inbox>;
  /** fetch aggregated fields from the table: "inbox" */
  inbox_aggregate: Inbox_Aggregate;
  /** fetch data from the table: "inbox" using primary key columns */
  inbox_by_pk?: Maybe<Inbox>;
  /** fetch data from the table: "key_results" */
  key_results: Array<Key_Results>;
  /** fetch aggregated fields from the table: "key_results" */
  key_results_aggregate: Key_Results_Aggregate;
  /** fetch data from the table: "key_results" using primary key columns */
  key_results_by_pk?: Maybe<Key_Results>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_snippets" */
  notes_snippets: Array<Notes_Snippets>;
  /** fetch aggregated fields from the table: "notes_snippets" */
  notes_snippets_aggregate: Notes_Snippets_Aggregate;
  /** fetch data from the table: "notes_snippets" using primary key columns */
  notes_snippets_by_pk?: Maybe<Notes_Snippets>;
  /** fetch data from the table: "objective_team" */
  objective_team: Array<Objective_Team>;
  /** fetch aggregated fields from the table: "objective_team" */
  objective_team_aggregate: Objective_Team_Aggregate;
  /** fetch data from the table: "objective_team" using primary key columns */
  objective_team_by_pk?: Maybe<Objective_Team>;
  /** fetch data from the table: "objectives" */
  objectives: Array<Objectives>;
  /** fetch aggregated fields from the table: "objectives" */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "snippets" */
  snippets: Array<Snippets>;
  /** fetch aggregated fields from the table: "snippets" */
  snippets_aggregate: Snippets_Aggregate;
  /** fetch data from the table: "snippets" using primary key columns */
  snippets_by_pk?: Maybe<Snippets>;
  /** fetch data from the table: "snippets_mapping" */
  snippets_mapping: Array<Snippets_Mapping>;
  /** fetch aggregated fields from the table: "snippets_mapping" */
  snippets_mapping_aggregate: Snippets_Mapping_Aggregate;
  /** fetch data from the table: "snippets_mapping" using primary key columns */
  snippets_mapping_by_pk?: Maybe<Snippets_Mapping>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "thoughts" */
  thoughts: Array<Thoughts>;
  /** fetch aggregated fields from the table: "thoughts" */
  thoughts_aggregate: Thoughts_Aggregate;
  /** fetch data from the table: "thoughts" using primary key columns */
  thoughts_by_pk?: Maybe<Thoughts>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "water" */
  water: Array<Water>;
  /** fetch aggregated fields from the table: "water" */
  water_aggregate: Water_Aggregate;
  /** fetch data from the table: "water" using primary key columns */
  water_by_pk?: Maybe<Water>;
  /** fetch data from the table: "water_till_now" */
  water_till_now: Array<Water_Till_Now>;
  /** fetch aggregated fields from the table: "water_till_now" */
  water_till_now_aggregate: Water_Till_Now_Aggregate;
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootDishesArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};


/** query root */
export type Query_RootDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};


/** query root */
export type Query_RootDishes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};


/** query root */
export type Query_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};


/** query root */
export type Query_RootFood_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootGlucoseArgs = {
  distinct_on?: Maybe<Array<Glucose_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Glucose_Order_By>>;
  where?: Maybe<Glucose_Bool_Exp>;
};


/** query root */
export type Query_RootGlucose_AggregateArgs = {
  distinct_on?: Maybe<Array<Glucose_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Glucose_Order_By>>;
  where?: Maybe<Glucose_Bool_Exp>;
};


/** query root */
export type Query_RootGlucose_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootInboxArgs = {
  distinct_on?: Maybe<Array<Inbox_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inbox_Order_By>>;
  where?: Maybe<Inbox_Bool_Exp>;
};


/** query root */
export type Query_RootInbox_AggregateArgs = {
  distinct_on?: Maybe<Array<Inbox_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inbox_Order_By>>;
  where?: Maybe<Inbox_Bool_Exp>;
};


/** query root */
export type Query_RootInbox_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootKey_ResultsArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** query root */
export type Query_RootKey_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** query root */
export type Query_RootKey_Results_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


/** query root */
export type Query_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


/** query root */
export type Query_RootNotes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootNotes_SnippetsArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** query root */
export type Query_RootNotes_Snippets_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** query root */
export type Query_RootNotes_Snippets_By_PkArgs = {
  note_id: Scalars['uuid'];
  snippet_id: Scalars['uuid'];
};


/** query root */
export type Query_RootObjective_TeamArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** query root */
export type Query_RootObjective_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** query root */
export type Query_RootObjective_Team_By_PkArgs = {
  objective_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


/** query root */
export type Query_RootObjectivesArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


/** query root */
export type Query_RootObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


/** query root */
export type Query_RootObjectives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootPeopleArgs = {
  distinct_on?: Maybe<Array<People_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<People_Order_By>>;
  where?: Maybe<People_Bool_Exp>;
};


/** query root */
export type Query_RootPeople_AggregateArgs = {
  distinct_on?: Maybe<Array<People_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<People_Order_By>>;
  where?: Maybe<People_Bool_Exp>;
};


/** query root */
export type Query_RootPeople_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSnippetsArgs = {
  distinct_on?: Maybe<Array<Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Order_By>>;
  where?: Maybe<Snippets_Bool_Exp>;
};


/** query root */
export type Query_RootSnippets_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Order_By>>;
  where?: Maybe<Snippets_Bool_Exp>;
};


/** query root */
export type Query_RootSnippets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSnippets_MappingArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** query root */
export type Query_RootSnippets_Mapping_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** query root */
export type Query_RootSnippets_Mapping_By_PkArgs = {
  source_id: Scalars['uuid'];
  target_id: Scalars['uuid'];
};


/** query root */
export type Query_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** query root */
export type Query_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** query root */
export type Query_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootThoughtsArgs = {
  distinct_on?: Maybe<Array<Thoughts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thoughts_Order_By>>;
  where?: Maybe<Thoughts_Bool_Exp>;
};


/** query root */
export type Query_RootThoughts_AggregateArgs = {
  distinct_on?: Maybe<Array<Thoughts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thoughts_Order_By>>;
  where?: Maybe<Thoughts_Bool_Exp>;
};


/** query root */
export type Query_RootThoughts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** query root */
export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** query root */
export type Query_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootWaterArgs = {
  distinct_on?: Maybe<Array<Water_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Order_By>>;
  where?: Maybe<Water_Bool_Exp>;
};


/** query root */
export type Query_RootWater_AggregateArgs = {
  distinct_on?: Maybe<Array<Water_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Order_By>>;
  where?: Maybe<Water_Bool_Exp>;
};


/** query root */
export type Query_RootWater_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootWater_Till_NowArgs = {
  distinct_on?: Maybe<Array<Water_Till_Now_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Till_Now_Order_By>>;
  where?: Maybe<Water_Till_Now_Bool_Exp>;
};


/** query root */
export type Query_RootWater_Till_Now_AggregateArgs = {
  distinct_on?: Maybe<Array<Water_Till_Now_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Till_Now_Order_By>>;
  where?: Maybe<Water_Till_Now_Bool_Exp>;
};

/** columns and relationships of "reviews" */
export type Reviews = {
  __typename?: 'reviews';
  checklist?: Maybe<Scalars['jsonb']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  scores?: Maybe<Scalars['jsonb']>;
  summary?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};


/** columns and relationships of "reviews" */
export type ReviewsChecklistArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "reviews" */
export type ReviewsScoresArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: 'reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: 'reviews_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
};


/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reviews_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Reviews_Max_Order_By>;
  min?: Maybe<Reviews_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Reviews_Append_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  scores?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  _not?: Maybe<Reviews_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  checklist?: Maybe<Jsonb_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  scores?: Maybe<Jsonb_Comparison_Exp>;
  summary?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint */
  ReviewPkey = 'review_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Reviews_Delete_At_Path_Input = {
  checklist?: Maybe<Array<Maybe<Scalars['String']>>>;
  scores?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Reviews_Delete_Elem_Input = {
  checklist?: Maybe<Scalars['Int']>;
  scores?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Reviews_Delete_Key_Input = {
  checklist?: Maybe<Scalars['String']>;
  scores?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  scores?: Maybe<Scalars['jsonb']>;
  summary?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'reviews_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  summary?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: 'reviews_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  summary?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: 'reviews_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reviews>;
};

/** input type for inserting object relation for remote table "reviews" */
export type Reviews_Obj_Rel_Insert_Input = {
  data: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** on conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns: Array<Reviews_Update_Column>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** ordering options when selecting data from "reviews" */
export type Reviews_Order_By = {
  checklist?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  scores?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "reviews" */
export type Reviews_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Reviews_Prepend_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  scores?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  Checklist = 'checklist',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Scores = 'scores',
  /** column name */
  Summary = 'summary',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  scores?: Maybe<Scalars['jsonb']>;
  summary?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  Checklist = 'checklist',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Scores = 'scores',
  /** column name */
  Summary = 'summary',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "snippets" */
export type Snippets = {
  __typename?: 'snippets';
  checkins: Scalars['jsonb'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  difficulty: Scalars['float8'];
  due_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  priority: Scalars['Int'];
  /** An array relationship */
  ref_notes: Array<Notes_Snippets>;
  /** An aggregated array relationship */
  ref_notes_aggregate: Notes_Snippets_Aggregate;
  /** An array relationship */
  ref_referenced_by: Array<Snippets_Mapping>;
  /** An aggregated array relationship */
  ref_referenced_by_aggregate: Snippets_Mapping_Aggregate;
  /** An array relationship */
  ref_references: Array<Snippets_Mapping>;
  /** An aggregated array relationship */
  ref_references_aggregate: Snippets_Mapping_Aggregate;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "snippets" */
export type SnippetsCheckinsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_NotesArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_Notes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_Referenced_ByArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_Referenced_By_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_ReferencesArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** columns and relationships of "snippets" */
export type SnippetsRef_References_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};

/** aggregated selection of "snippets" */
export type Snippets_Aggregate = {
  __typename?: 'snippets_aggregate';
  aggregate?: Maybe<Snippets_Aggregate_Fields>;
  nodes: Array<Snippets>;
};

/** aggregate fields of "snippets" */
export type Snippets_Aggregate_Fields = {
  __typename?: 'snippets_aggregate_fields';
  avg?: Maybe<Snippets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Snippets_Max_Fields>;
  min?: Maybe<Snippets_Min_Fields>;
  stddev?: Maybe<Snippets_Stddev_Fields>;
  stddev_pop?: Maybe<Snippets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Snippets_Stddev_Samp_Fields>;
  sum?: Maybe<Snippets_Sum_Fields>;
  var_pop?: Maybe<Snippets_Var_Pop_Fields>;
  var_samp?: Maybe<Snippets_Var_Samp_Fields>;
  variance?: Maybe<Snippets_Variance_Fields>;
};


/** aggregate fields of "snippets" */
export type Snippets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Snippets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "snippets" */
export type Snippets_Aggregate_Order_By = {
  avg?: Maybe<Snippets_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Snippets_Max_Order_By>;
  min?: Maybe<Snippets_Min_Order_By>;
  stddev?: Maybe<Snippets_Stddev_Order_By>;
  stddev_pop?: Maybe<Snippets_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Snippets_Stddev_Samp_Order_By>;
  sum?: Maybe<Snippets_Sum_Order_By>;
  var_pop?: Maybe<Snippets_Var_Pop_Order_By>;
  var_samp?: Maybe<Snippets_Var_Samp_Order_By>;
  variance?: Maybe<Snippets_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Snippets_Append_Input = {
  checkins?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "snippets" */
export type Snippets_Arr_Rel_Insert_Input = {
  data: Array<Snippets_Insert_Input>;
  on_conflict?: Maybe<Snippets_On_Conflict>;
};

/** aggregate avg on columns */
export type Snippets_Avg_Fields = {
  __typename?: 'snippets_avg_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "snippets" */
export type Snippets_Avg_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "snippets". All fields are combined with a logical 'AND'. */
export type Snippets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Snippets_Bool_Exp>>>;
  _not?: Maybe<Snippets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Snippets_Bool_Exp>>>;
  checkins?: Maybe<Jsonb_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  difficulty?: Maybe<Float8_Comparison_Exp>;
  due_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  priority?: Maybe<Int_Comparison_Exp>;
  ref_notes?: Maybe<Notes_Snippets_Bool_Exp>;
  ref_referenced_by?: Maybe<Snippets_Mapping_Bool_Exp>;
  ref_references?: Maybe<Snippets_Mapping_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "snippets" */
export enum Snippets_Constraint {
  /** unique or primary key constraint */
  SnippetsPkey = 'snippets_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Snippets_Delete_At_Path_Input = {
  checkins?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Snippets_Delete_Elem_Input = {
  checkins?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Snippets_Delete_Key_Input = {
  checkins?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "snippets" */
export type Snippets_Inc_Input = {
  difficulty?: Maybe<Scalars['float8']>;
  priority?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "snippets" */
export type Snippets_Insert_Input = {
  checkins?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['float8']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  ref_notes?: Maybe<Notes_Snippets_Arr_Rel_Insert_Input>;
  ref_referenced_by?: Maybe<Snippets_Mapping_Arr_Rel_Insert_Input>;
  ref_references?: Maybe<Snippets_Mapping_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "snippets_mapping" */
export type Snippets_Mapping = {
  __typename?: 'snippets_mapping';
  /** An object relationship */
  ref_source_snippet: Snippets;
  /** An object relationship */
  ref_target_snippet: Snippets;
  source_id: Scalars['uuid'];
  target_id: Scalars['uuid'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "snippets_mapping" */
export type Snippets_Mapping_Aggregate = {
  __typename?: 'snippets_mapping_aggregate';
  aggregate?: Maybe<Snippets_Mapping_Aggregate_Fields>;
  nodes: Array<Snippets_Mapping>;
};

/** aggregate fields of "snippets_mapping" */
export type Snippets_Mapping_Aggregate_Fields = {
  __typename?: 'snippets_mapping_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Snippets_Mapping_Max_Fields>;
  min?: Maybe<Snippets_Mapping_Min_Fields>;
};


/** aggregate fields of "snippets_mapping" */
export type Snippets_Mapping_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "snippets_mapping" */
export type Snippets_Mapping_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Snippets_Mapping_Max_Order_By>;
  min?: Maybe<Snippets_Mapping_Min_Order_By>;
};

/** input type for inserting array relation for remote table "snippets_mapping" */
export type Snippets_Mapping_Arr_Rel_Insert_Input = {
  data: Array<Snippets_Mapping_Insert_Input>;
  on_conflict?: Maybe<Snippets_Mapping_On_Conflict>;
};

/** Boolean expression to filter rows from the table "snippets_mapping". All fields are combined with a logical 'AND'. */
export type Snippets_Mapping_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Snippets_Mapping_Bool_Exp>>>;
  _not?: Maybe<Snippets_Mapping_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Snippets_Mapping_Bool_Exp>>>;
  ref_source_snippet?: Maybe<Snippets_Bool_Exp>;
  ref_target_snippet?: Maybe<Snippets_Bool_Exp>;
  source_id?: Maybe<Uuid_Comparison_Exp>;
  target_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "snippets_mapping" */
export enum Snippets_Mapping_Constraint {
  /** unique or primary key constraint */
  AssociatedSnippetsPkey = 'associated_snippets_pkey'
}

/** input type for inserting data into table "snippets_mapping" */
export type Snippets_Mapping_Insert_Input = {
  ref_source_snippet?: Maybe<Snippets_Obj_Rel_Insert_Input>;
  ref_target_snippet?: Maybe<Snippets_Obj_Rel_Insert_Input>;
  source_id?: Maybe<Scalars['uuid']>;
  target_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Snippets_Mapping_Max_Fields = {
  __typename?: 'snippets_mapping_max_fields';
  source_id?: Maybe<Scalars['uuid']>;
  target_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "snippets_mapping" */
export type Snippets_Mapping_Max_Order_By = {
  source_id?: Maybe<Order_By>;
  target_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Snippets_Mapping_Min_Fields = {
  __typename?: 'snippets_mapping_min_fields';
  source_id?: Maybe<Scalars['uuid']>;
  target_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "snippets_mapping" */
export type Snippets_Mapping_Min_Order_By = {
  source_id?: Maybe<Order_By>;
  target_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "snippets_mapping" */
export type Snippets_Mapping_Mutation_Response = {
  __typename?: 'snippets_mapping_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Snippets_Mapping>;
};

/** input type for inserting object relation for remote table "snippets_mapping" */
export type Snippets_Mapping_Obj_Rel_Insert_Input = {
  data: Snippets_Mapping_Insert_Input;
  on_conflict?: Maybe<Snippets_Mapping_On_Conflict>;
};

/** on conflict condition type for table "snippets_mapping" */
export type Snippets_Mapping_On_Conflict = {
  constraint: Snippets_Mapping_Constraint;
  update_columns: Array<Snippets_Mapping_Update_Column>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};

/** ordering options when selecting data from "snippets_mapping" */
export type Snippets_Mapping_Order_By = {
  ref_source_snippet?: Maybe<Snippets_Order_By>;
  ref_target_snippet?: Maybe<Snippets_Order_By>;
  source_id?: Maybe<Order_By>;
  target_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "snippets_mapping" */
export type Snippets_Mapping_Pk_Columns_Input = {
  source_id: Scalars['uuid'];
  target_id: Scalars['uuid'];
};

/** select columns of table "snippets_mapping" */
export enum Snippets_Mapping_Select_Column {
  /** column name */
  SourceId = 'source_id',
  /** column name */
  TargetId = 'target_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "snippets_mapping" */
export type Snippets_Mapping_Set_Input = {
  source_id?: Maybe<Scalars['uuid']>;
  target_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "snippets_mapping" */
export enum Snippets_Mapping_Update_Column {
  /** column name */
  SourceId = 'source_id',
  /** column name */
  TargetId = 'target_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate max on columns */
export type Snippets_Max_Fields = {
  __typename?: 'snippets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['float8']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "snippets" */
export type Snippets_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Snippets_Min_Fields = {
  __typename?: 'snippets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['float8']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "snippets" */
export type Snippets_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "snippets" */
export type Snippets_Mutation_Response = {
  __typename?: 'snippets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Snippets>;
};

/** input type for inserting object relation for remote table "snippets" */
export type Snippets_Obj_Rel_Insert_Input = {
  data: Snippets_Insert_Input;
  on_conflict?: Maybe<Snippets_On_Conflict>;
};

/** on conflict condition type for table "snippets" */
export type Snippets_On_Conflict = {
  constraint: Snippets_Constraint;
  update_columns: Array<Snippets_Update_Column>;
  where?: Maybe<Snippets_Bool_Exp>;
};

/** ordering options when selecting data from "snippets" */
export type Snippets_Order_By = {
  checkins?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  ref_notes_aggregate?: Maybe<Notes_Snippets_Aggregate_Order_By>;
  ref_referenced_by_aggregate?: Maybe<Snippets_Mapping_Aggregate_Order_By>;
  ref_references_aggregate?: Maybe<Snippets_Mapping_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "snippets" */
export type Snippets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Snippets_Prepend_Input = {
  checkins?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "snippets" */
export enum Snippets_Select_Column {
  /** column name */
  Checkins = 'checkins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Priority = 'priority',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "snippets" */
export type Snippets_Set_Input = {
  checkins?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['float8']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Snippets_Stddev_Fields = {
  __typename?: 'snippets_stddev_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "snippets" */
export type Snippets_Stddev_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Snippets_Stddev_Pop_Fields = {
  __typename?: 'snippets_stddev_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "snippets" */
export type Snippets_Stddev_Pop_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Snippets_Stddev_Samp_Fields = {
  __typename?: 'snippets_stddev_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "snippets" */
export type Snippets_Stddev_Samp_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Snippets_Sum_Fields = {
  __typename?: 'snippets_sum_fields';
  difficulty?: Maybe<Scalars['float8']>;
  priority?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "snippets" */
export type Snippets_Sum_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** update columns of table "snippets" */
export enum Snippets_Update_Column {
  /** column name */
  Checkins = 'checkins',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Priority = 'priority',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Snippets_Var_Pop_Fields = {
  __typename?: 'snippets_var_pop_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "snippets" */
export type Snippets_Var_Pop_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Snippets_Var_Samp_Fields = {
  __typename?: 'snippets_var_samp_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "snippets" */
export type Snippets_Var_Samp_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Snippets_Variance_Fields = {
  __typename?: 'snippets_variance_fields';
  difficulty?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "snippets" */
export type Snippets_Variance_Order_By = {
  difficulty?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "dishes" */
  dishes: Array<Dishes>;
  /** fetch aggregated fields from the table: "dishes" */
  dishes_aggregate: Dishes_Aggregate;
  /** fetch data from the table: "dishes" using primary key columns */
  dishes_by_pk?: Maybe<Dishes>;
  /** fetch data from the table: "food" */
  food: Array<Food>;
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate;
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>;
  /** fetch data from the table: "glucose" */
  glucose: Array<Glucose>;
  /** fetch aggregated fields from the table: "glucose" */
  glucose_aggregate: Glucose_Aggregate;
  /** fetch data from the table: "glucose" using primary key columns */
  glucose_by_pk?: Maybe<Glucose>;
  /** fetch data from the table: "inbox" */
  inbox: Array<Inbox>;
  /** fetch aggregated fields from the table: "inbox" */
  inbox_aggregate: Inbox_Aggregate;
  /** fetch data from the table: "inbox" using primary key columns */
  inbox_by_pk?: Maybe<Inbox>;
  /** fetch data from the table: "key_results" */
  key_results: Array<Key_Results>;
  /** fetch aggregated fields from the table: "key_results" */
  key_results_aggregate: Key_Results_Aggregate;
  /** fetch data from the table: "key_results" using primary key columns */
  key_results_by_pk?: Maybe<Key_Results>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "notes_snippets" */
  notes_snippets: Array<Notes_Snippets>;
  /** fetch aggregated fields from the table: "notes_snippets" */
  notes_snippets_aggregate: Notes_Snippets_Aggregate;
  /** fetch data from the table: "notes_snippets" using primary key columns */
  notes_snippets_by_pk?: Maybe<Notes_Snippets>;
  /** fetch data from the table: "objective_team" */
  objective_team: Array<Objective_Team>;
  /** fetch aggregated fields from the table: "objective_team" */
  objective_team_aggregate: Objective_Team_Aggregate;
  /** fetch data from the table: "objective_team" using primary key columns */
  objective_team_by_pk?: Maybe<Objective_Team>;
  /** fetch data from the table: "objectives" */
  objectives: Array<Objectives>;
  /** fetch aggregated fields from the table: "objectives" */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
  /** fetch data from the table: "people" */
  people: Array<People>;
  /** fetch aggregated fields from the table: "people" */
  people_aggregate: People_Aggregate;
  /** fetch data from the table: "people" using primary key columns */
  people_by_pk?: Maybe<People>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch aggregated fields from the table: "projects" */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "snippets" */
  snippets: Array<Snippets>;
  /** fetch aggregated fields from the table: "snippets" */
  snippets_aggregate: Snippets_Aggregate;
  /** fetch data from the table: "snippets" using primary key columns */
  snippets_by_pk?: Maybe<Snippets>;
  /** fetch data from the table: "snippets_mapping" */
  snippets_mapping: Array<Snippets_Mapping>;
  /** fetch aggregated fields from the table: "snippets_mapping" */
  snippets_mapping_aggregate: Snippets_Mapping_Aggregate;
  /** fetch data from the table: "snippets_mapping" using primary key columns */
  snippets_mapping_by_pk?: Maybe<Snippets_Mapping>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "thoughts" */
  thoughts: Array<Thoughts>;
  /** fetch aggregated fields from the table: "thoughts" */
  thoughts_aggregate: Thoughts_Aggregate;
  /** fetch data from the table: "thoughts" using primary key columns */
  thoughts_by_pk?: Maybe<Thoughts>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "water" */
  water: Array<Water>;
  /** fetch aggregated fields from the table: "water" */
  water_aggregate: Water_Aggregate;
  /** fetch data from the table: "water" using primary key columns */
  water_by_pk?: Maybe<Water>;
  /** fetch data from the table: "water_till_now" */
  water_till_now: Array<Water_Till_Now>;
  /** fetch aggregated fields from the table: "water_till_now" */
  water_till_now_aggregate: Water_Till_Now_Aggregate;
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootDishesArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDishes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Food_Order_By>>;
  where?: Maybe<Food_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFood_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootGlucoseArgs = {
  distinct_on?: Maybe<Array<Glucose_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Glucose_Order_By>>;
  where?: Maybe<Glucose_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlucose_AggregateArgs = {
  distinct_on?: Maybe<Array<Glucose_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Glucose_Order_By>>;
  where?: Maybe<Glucose_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGlucose_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootInboxArgs = {
  distinct_on?: Maybe<Array<Inbox_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inbox_Order_By>>;
  where?: Maybe<Inbox_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInbox_AggregateArgs = {
  distinct_on?: Maybe<Array<Inbox_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inbox_Order_By>>;
  where?: Maybe<Inbox_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInbox_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootKey_ResultsArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKey_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Results_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Results_Order_By>>;
  where?: Maybe<Key_Results_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootKey_Results_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootNotes_SnippetsArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotes_Snippets_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Snippets_Order_By>>;
  where?: Maybe<Notes_Snippets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNotes_Snippets_By_PkArgs = {
  note_id: Scalars['uuid'];
  snippet_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootObjective_TeamArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObjective_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObjective_Team_By_PkArgs = {
  objective_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootObjectivesArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObjectives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootPeopleArgs = {
  distinct_on?: Maybe<Array<People_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<People_Order_By>>;
  where?: Maybe<People_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPeople_AggregateArgs = {
  distinct_on?: Maybe<Array<People_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<People_Order_By>>;
  where?: Maybe<People_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPeople_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSnippetsArgs = {
  distinct_on?: Maybe<Array<Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Order_By>>;
  where?: Maybe<Snippets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSnippets_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Order_By>>;
  where?: Maybe<Snippets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSnippets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSnippets_MappingArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSnippets_Mapping_AggregateArgs = {
  distinct_on?: Maybe<Array<Snippets_Mapping_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Snippets_Mapping_Order_By>>;
  where?: Maybe<Snippets_Mapping_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSnippets_Mapping_By_PkArgs = {
  source_id: Scalars['uuid'];
  target_id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootThoughtsArgs = {
  distinct_on?: Maybe<Array<Thoughts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thoughts_Order_By>>;
  where?: Maybe<Thoughts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThoughts_AggregateArgs = {
  distinct_on?: Maybe<Array<Thoughts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Thoughts_Order_By>>;
  where?: Maybe<Thoughts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootThoughts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransactions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootWaterArgs = {
  distinct_on?: Maybe<Array<Water_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Order_By>>;
  where?: Maybe<Water_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWater_AggregateArgs = {
  distinct_on?: Maybe<Array<Water_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Order_By>>;
  where?: Maybe<Water_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWater_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootWater_Till_NowArgs = {
  distinct_on?: Maybe<Array<Water_Till_Now_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Till_Now_Order_By>>;
  where?: Maybe<Water_Till_Now_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWater_Till_Now_AggregateArgs = {
  distinct_on?: Maybe<Array<Water_Till_Now_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Water_Till_Now_Order_By>>;
  where?: Maybe<Water_Till_Now_Bool_Exp>;
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  checklist?: Maybe<Scalars['jsonb']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['uuid']>;
  people_id?: Maybe<Scalars['uuid']>;
  priority: Scalars['String'];
  project_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  ref_parent?: Maybe<Tasks>;
  /** An object relationship */
  ref_person?: Maybe<People>;
  /** An object relationship */
  ref_project?: Maybe<Projects>;
  /** An array relationship */
  ref_sub_tasks: Array<Tasks>;
  /** An aggregated array relationship */
  ref_sub_tasks_aggregate: Tasks_Aggregate;
  /** An object relationship */
  ref_team?: Maybe<Teams>;
  status: Scalars['String'];
  team?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tasks" */
export type TasksChecklistArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "tasks" */
export type TasksRef_Sub_TasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** columns and relationships of "tasks" */
export type TasksRef_Sub_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<Tasks_Aggregate_Fields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tasks_Max_Fields>;
  min?: Maybe<Tasks_Min_Fields>;
};


/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tasks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tasks" */
export type Tasks_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Tasks_Max_Order_By>;
  min?: Maybe<Tasks_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Tasks_Append_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "tasks" */
export type Tasks_Arr_Rel_Insert_Input = {
  data: Array<Tasks_Insert_Input>;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tasks_Bool_Exp>>>;
  _not?: Maybe<Tasks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tasks_Bool_Exp>>>;
  checklist?: Maybe<Jsonb_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  due_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_id?: Maybe<Uuid_Comparison_Exp>;
  people_id?: Maybe<Uuid_Comparison_Exp>;
  priority?: Maybe<String_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  ref_parent?: Maybe<Tasks_Bool_Exp>;
  ref_person?: Maybe<People_Bool_Exp>;
  ref_project?: Maybe<Projects_Bool_Exp>;
  ref_sub_tasks?: Maybe<Tasks_Bool_Exp>;
  ref_team?: Maybe<Teams_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  team?: Maybe<String_Comparison_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Tasks_Delete_At_Path_Input = {
  checklist?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Tasks_Delete_Elem_Input = {
  checklist?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Tasks_Delete_Key_Input = {
  checklist?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  people_id?: Maybe<Scalars['uuid']>;
  priority?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  ref_parent?: Maybe<Tasks_Obj_Rel_Insert_Input>;
  ref_person?: Maybe<People_Obj_Rel_Insert_Input>;
  ref_project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  ref_sub_tasks?: Maybe<Tasks_Arr_Rel_Insert_Input>;
  ref_team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  people_id?: Maybe<Scalars['uuid']>;
  priority?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "tasks" */
export type Tasks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  people_id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  people_id?: Maybe<Scalars['uuid']>;
  priority?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "tasks" */
export type Tasks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  people_id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tasks>;
};

/** input type for inserting object relation for remote table "tasks" */
export type Tasks_Obj_Rel_Insert_Input = {
  data: Tasks_Insert_Input;
  on_conflict?: Maybe<Tasks_On_Conflict>;
};

/** on conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns: Array<Tasks_Update_Column>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** ordering options when selecting data from "tasks" */
export type Tasks_Order_By = {
  checklist?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  people_id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  ref_parent?: Maybe<Tasks_Order_By>;
  ref_person?: Maybe<People_Order_By>;
  ref_project?: Maybe<Projects_Order_By>;
  ref_sub_tasks_aggregate?: Maybe<Tasks_Aggregate_Order_By>;
  ref_team?: Maybe<Teams_Order_By>;
  status?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "tasks" */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Tasks_Prepend_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  Checklist = 'checklist',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PeopleId = 'people_id',
  /** column name */
  Priority = 'priority',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Status = 'status',
  /** column name */
  Team = 'team',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  checklist?: Maybe<Scalars['jsonb']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  people_id?: Maybe<Scalars['uuid']>;
  priority?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  Checklist = 'checklist',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PeopleId = 'people_id',
  /** column name */
  Priority = 'priority',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Status = 'status',
  /** column name */
  Team = 'team',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  ref_objective_teams: Array<Objective_Team>;
  /** An aggregated array relationship */
  ref_objective_teams_aggregate: Objective_Team_Aggregate;
  /** An array relationship */
  ref_projects: Array<Projects>;
  /** An aggregated array relationship */
  ref_projects_aggregate: Projects_Aggregate;
  /** An array relationship */
  ref_tasks: Array<Tasks>;
  /** An aggregated array relationship */
  ref_tasks_aggregate: Tasks_Aggregate;
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "teams" */
export type TeamsRef_Objective_TeamsArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsRef_Objective_Teams_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Team_Order_By>>;
  where?: Maybe<Objective_Team_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsRef_ProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsRef_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsRef_TasksArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsRef_Tasks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tasks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tasks_Order_By>>;
  where?: Maybe<Tasks_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  ref_objective_teams?: Maybe<Objective_Team_Bool_Exp>;
  ref_projects?: Maybe<Projects_Bool_Exp>;
  ref_tasks?: Maybe<Tasks_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  ref_objective_teams?: Maybe<Objective_Team_Arr_Rel_Insert_Input>;
  ref_projects?: Maybe<Projects_Arr_Rel_Insert_Input>;
  ref_tasks?: Maybe<Tasks_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ref_objective_teams_aggregate?: Maybe<Objective_Team_Aggregate_Order_By>;
  ref_projects_aggregate?: Maybe<Projects_Aggregate_Order_By>;
  ref_tasks_aggregate?: Maybe<Tasks_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "thoughts" */
export type Thoughts = {
  __typename?: 'thoughts';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  project_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  ref_project?: Maybe<Projects>;
  /** An object relationship */
  ref_task?: Maybe<Tasks>;
  /** An object relationship */
  ref_team?: Maybe<Teams>;
  task_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** aggregated selection of "thoughts" */
export type Thoughts_Aggregate = {
  __typename?: 'thoughts_aggregate';
  aggregate?: Maybe<Thoughts_Aggregate_Fields>;
  nodes: Array<Thoughts>;
};

/** aggregate fields of "thoughts" */
export type Thoughts_Aggregate_Fields = {
  __typename?: 'thoughts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Thoughts_Max_Fields>;
  min?: Maybe<Thoughts_Min_Fields>;
};


/** aggregate fields of "thoughts" */
export type Thoughts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Thoughts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "thoughts" */
export type Thoughts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Thoughts_Max_Order_By>;
  min?: Maybe<Thoughts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "thoughts" */
export type Thoughts_Arr_Rel_Insert_Input = {
  data: Array<Thoughts_Insert_Input>;
  on_conflict?: Maybe<Thoughts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "thoughts". All fields are combined with a logical 'AND'. */
export type Thoughts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Thoughts_Bool_Exp>>>;
  _not?: Maybe<Thoughts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Thoughts_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  ref_project?: Maybe<Projects_Bool_Exp>;
  ref_task?: Maybe<Tasks_Bool_Exp>;
  ref_team?: Maybe<Teams_Bool_Exp>;
  task_id?: Maybe<Uuid_Comparison_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "thoughts" */
export enum Thoughts_Constraint {
  /** unique or primary key constraint */
  ThoughtsPkey = 'thoughts_pkey'
}

/** input type for inserting data into table "thoughts" */
export type Thoughts_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  ref_project?: Maybe<Projects_Obj_Rel_Insert_Input>;
  ref_task?: Maybe<Tasks_Obj_Rel_Insert_Input>;
  ref_team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  task_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Thoughts_Max_Fields = {
  __typename?: 'thoughts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  task_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "thoughts" */
export type Thoughts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Thoughts_Min_Fields = {
  __typename?: 'thoughts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  task_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "thoughts" */
export type Thoughts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "thoughts" */
export type Thoughts_Mutation_Response = {
  __typename?: 'thoughts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Thoughts>;
};

/** input type for inserting object relation for remote table "thoughts" */
export type Thoughts_Obj_Rel_Insert_Input = {
  data: Thoughts_Insert_Input;
  on_conflict?: Maybe<Thoughts_On_Conflict>;
};

/** on conflict condition type for table "thoughts" */
export type Thoughts_On_Conflict = {
  constraint: Thoughts_Constraint;
  update_columns: Array<Thoughts_Update_Column>;
  where?: Maybe<Thoughts_Bool_Exp>;
};

/** ordering options when selecting data from "thoughts" */
export type Thoughts_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  ref_project?: Maybe<Projects_Order_By>;
  ref_task?: Maybe<Tasks_Order_By>;
  ref_team?: Maybe<Teams_Order_By>;
  task_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "thoughts" */
export type Thoughts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "thoughts" */
export enum Thoughts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "thoughts" */
export type Thoughts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  task_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "thoughts" */
export enum Thoughts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  category_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  mode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  planned_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  ref_category?: Maybe<Categories>;
  team?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
  value: Scalars['float8'];
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: Maybe<Transactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transactions_Max_Order_By>;
  min?: Maybe<Transactions_Min_Order_By>;
  stddev?: Maybe<Transactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Transactions_Sum_Order_By>;
  var_pop?: Maybe<Transactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Transactions_Var_Samp_Order_By>;
  variance?: Maybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>;
  _not?: Maybe<Transactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>;
  category_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mode?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  planned_at?: Maybe<Timestamptz_Comparison_Exp>;
  ref_category?: Maybe<Categories_Bool_Exp>;
  team?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing integer column in table "transactions" */
export type Transactions_Inc_Input = {
  value?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  planned_at?: Maybe<Scalars['timestamptz']>;
  ref_category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  team?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  planned_at?: Maybe<Scalars['timestamptz']>;
  team?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  planned_at?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  planned_at?: Maybe<Scalars['timestamptz']>;
  team?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  planned_at?: Maybe<Order_By>;
  team?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns: Array<Transactions_Update_Column>;
  where?: Maybe<Transactions_Bool_Exp>;
};

/** ordering options when selecting data from "transactions" */
export type Transactions_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mode?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  planned_at?: Maybe<Order_By>;
  ref_category?: Maybe<Categories_Order_By>;
  team?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "transactions" */
export type Transactions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Mode = 'mode',
  /** column name */
  Name = 'name',
  /** column name */
  PlannedAt = 'planned_at',
  /** column name */
  Team = 'team',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  planned_at?: Maybe<Scalars['timestamptz']>;
  team?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  value?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  value?: Maybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Mode = 'mode',
  /** column name */
  Name = 'name',
  /** column name */
  PlannedAt = 'planned_at',
  /** column name */
  Team = 'team',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  value?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "water" */
export type Water = {
  __typename?: 'water';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  quantity: Scalars['Int'];
  timestamp: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "water" */
export type Water_Aggregate = {
  __typename?: 'water_aggregate';
  aggregate?: Maybe<Water_Aggregate_Fields>;
  nodes: Array<Water>;
};

/** aggregate fields of "water" */
export type Water_Aggregate_Fields = {
  __typename?: 'water_aggregate_fields';
  avg?: Maybe<Water_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Water_Max_Fields>;
  min?: Maybe<Water_Min_Fields>;
  stddev?: Maybe<Water_Stddev_Fields>;
  stddev_pop?: Maybe<Water_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Water_Stddev_Samp_Fields>;
  sum?: Maybe<Water_Sum_Fields>;
  var_pop?: Maybe<Water_Var_Pop_Fields>;
  var_samp?: Maybe<Water_Var_Samp_Fields>;
  variance?: Maybe<Water_Variance_Fields>;
};


/** aggregate fields of "water" */
export type Water_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Water_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "water" */
export type Water_Aggregate_Order_By = {
  avg?: Maybe<Water_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Water_Max_Order_By>;
  min?: Maybe<Water_Min_Order_By>;
  stddev?: Maybe<Water_Stddev_Order_By>;
  stddev_pop?: Maybe<Water_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Water_Stddev_Samp_Order_By>;
  sum?: Maybe<Water_Sum_Order_By>;
  var_pop?: Maybe<Water_Var_Pop_Order_By>;
  var_samp?: Maybe<Water_Var_Samp_Order_By>;
  variance?: Maybe<Water_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "water" */
export type Water_Arr_Rel_Insert_Input = {
  data: Array<Water_Insert_Input>;
  on_conflict?: Maybe<Water_On_Conflict>;
};

/** aggregate avg on columns */
export type Water_Avg_Fields = {
  __typename?: 'water_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "water" */
export type Water_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "water". All fields are combined with a logical 'AND'. */
export type Water_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Water_Bool_Exp>>>;
  _not?: Maybe<Water_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Water_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Int_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "water" */
export enum Water_Constraint {
  /** unique or primary key constraint */
  WaterPkey = 'water_pkey'
}

/** input type for incrementing integer column in table "water" */
export type Water_Inc_Input = {
  quantity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "water" */
export type Water_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Water_Max_Fields = {
  __typename?: 'water_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "water" */
export type Water_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Water_Min_Fields = {
  __typename?: 'water_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "water" */
export type Water_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "water" */
export type Water_Mutation_Response = {
  __typename?: 'water_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Water>;
};

/** input type for inserting object relation for remote table "water" */
export type Water_Obj_Rel_Insert_Input = {
  data: Water_Insert_Input;
  on_conflict?: Maybe<Water_On_Conflict>;
};

/** on conflict condition type for table "water" */
export type Water_On_Conflict = {
  constraint: Water_Constraint;
  update_columns: Array<Water_Update_Column>;
  where?: Maybe<Water_Bool_Exp>;
};

/** ordering options when selecting data from "water" */
export type Water_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "water" */
export type Water_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "water" */
export enum Water_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "water" */
export type Water_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Water_Stddev_Fields = {
  __typename?: 'water_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "water" */
export type Water_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Water_Stddev_Pop_Fields = {
  __typename?: 'water_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "water" */
export type Water_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Water_Stddev_Samp_Fields = {
  __typename?: 'water_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "water" */
export type Water_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Water_Sum_Fields = {
  __typename?: 'water_sum_fields';
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "water" */
export type Water_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** columns and relationships of "water_till_now" */
export type Water_Till_Now = {
  __typename?: 'water_till_now';
  avg?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "water_till_now" */
export type Water_Till_Now_Aggregate = {
  __typename?: 'water_till_now_aggregate';
  aggregate?: Maybe<Water_Till_Now_Aggregate_Fields>;
  nodes: Array<Water_Till_Now>;
};

/** aggregate fields of "water_till_now" */
export type Water_Till_Now_Aggregate_Fields = {
  __typename?: 'water_till_now_aggregate_fields';
  avg?: Maybe<Water_Till_Now_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Water_Till_Now_Max_Fields>;
  min?: Maybe<Water_Till_Now_Min_Fields>;
  stddev?: Maybe<Water_Till_Now_Stddev_Fields>;
  stddev_pop?: Maybe<Water_Till_Now_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Water_Till_Now_Stddev_Samp_Fields>;
  sum?: Maybe<Water_Till_Now_Sum_Fields>;
  var_pop?: Maybe<Water_Till_Now_Var_Pop_Fields>;
  var_samp?: Maybe<Water_Till_Now_Var_Samp_Fields>;
  variance?: Maybe<Water_Till_Now_Variance_Fields>;
};


/** aggregate fields of "water_till_now" */
export type Water_Till_Now_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Water_Till_Now_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "water_till_now" */
export type Water_Till_Now_Aggregate_Order_By = {
  avg?: Maybe<Water_Till_Now_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Water_Till_Now_Max_Order_By>;
  min?: Maybe<Water_Till_Now_Min_Order_By>;
  stddev?: Maybe<Water_Till_Now_Stddev_Order_By>;
  stddev_pop?: Maybe<Water_Till_Now_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Water_Till_Now_Stddev_Samp_Order_By>;
  sum?: Maybe<Water_Till_Now_Sum_Order_By>;
  var_pop?: Maybe<Water_Till_Now_Var_Pop_Order_By>;
  var_samp?: Maybe<Water_Till_Now_Var_Samp_Order_By>;
  variance?: Maybe<Water_Till_Now_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Water_Till_Now_Avg_Fields = {
  __typename?: 'water_till_now_avg_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "water_till_now" */
export type Water_Till_Now_Avg_Order_By = {
  avg?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "water_till_now". All fields are combined with a logical 'AND'. */
export type Water_Till_Now_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Water_Till_Now_Bool_Exp>>>;
  _not?: Maybe<Water_Till_Now_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Water_Till_Now_Bool_Exp>>>;
  avg?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Water_Till_Now_Max_Fields = {
  __typename?: 'water_till_now_max_fields';
  avg?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "water_till_now" */
export type Water_Till_Now_Max_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Water_Till_Now_Min_Fields = {
  __typename?: 'water_till_now_min_fields';
  avg?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "water_till_now" */
export type Water_Till_Now_Min_Order_By = {
  avg?: Maybe<Order_By>;
};

/** ordering options when selecting data from "water_till_now" */
export type Water_Till_Now_Order_By = {
  avg?: Maybe<Order_By>;
};

/** select columns of table "water_till_now" */
export enum Water_Till_Now_Select_Column {
  /** column name */
  Avg = 'avg'
}

/** aggregate stddev on columns */
export type Water_Till_Now_Stddev_Fields = {
  __typename?: 'water_till_now_stddev_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "water_till_now" */
export type Water_Till_Now_Stddev_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Water_Till_Now_Stddev_Pop_Fields = {
  __typename?: 'water_till_now_stddev_pop_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "water_till_now" */
export type Water_Till_Now_Stddev_Pop_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Water_Till_Now_Stddev_Samp_Fields = {
  __typename?: 'water_till_now_stddev_samp_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "water_till_now" */
export type Water_Till_Now_Stddev_Samp_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Water_Till_Now_Sum_Fields = {
  __typename?: 'water_till_now_sum_fields';
  avg?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "water_till_now" */
export type Water_Till_Now_Sum_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Water_Till_Now_Var_Pop_Fields = {
  __typename?: 'water_till_now_var_pop_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "water_till_now" */
export type Water_Till_Now_Var_Pop_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Water_Till_Now_Var_Samp_Fields = {
  __typename?: 'water_till_now_var_samp_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "water_till_now" */
export type Water_Till_Now_Var_Samp_Order_By = {
  avg?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Water_Till_Now_Variance_Fields = {
  __typename?: 'water_till_now_variance_fields';
  avg?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "water_till_now" */
export type Water_Till_Now_Variance_Order_By = {
  avg?: Maybe<Order_By>;
};

/** update columns of table "water" */
export enum Water_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Water_Var_Pop_Fields = {
  __typename?: 'water_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "water" */
export type Water_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Water_Var_Samp_Fields = {
  __typename?: 'water_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "water" */
export type Water_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Water_Variance_Fields = {
  __typename?: 'water_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "water" */
export type Water_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type GetTasksSubscriptionVariables = Exact<{
  where?: Maybe<Tasks_Bool_Exp>;
  orderBy?: Maybe<Array<Tasks_Order_By>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetTasksSubscription = (
  { __typename?: 'subscription_root' }
  & { tasks: Array<(
    { __typename?: 'tasks' }
    & Pick<Tasks, 'id' | 'name' | 'status' | 'description' | 'due_date'>
    & { ref_sub_tasks: Array<(
      { __typename?: 'tasks' }
      & Pick<Tasks, 'id' | 'name' | 'status'>
    )> }
  )> }
);

export type UpdateTasksMutationVariables = Exact<{
  where: Tasks_Bool_Exp;
  set?: Maybe<Tasks_Set_Input>;
}>;


export type UpdateTasksMutation = (
  { __typename?: 'mutation_root' }
  & { update_tasks?: Maybe<(
    { __typename?: 'tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tasks' }
      & Pick<Tasks, 'id'>
    )> }
  )> }
);

export type InsertTasksMutationVariables = Exact<{
  objects: Array<Tasks_Insert_Input>;
}>;


export type InsertTasksMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tasks?: Maybe<(
    { __typename?: 'tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tasks' }
      & Pick<Tasks, 'id'>
    )> }
  )> }
);

export type DeleteTasksMutationVariables = Exact<{
  where: Tasks_Bool_Exp;
}>;


export type DeleteTasksMutation = (
  { __typename?: 'mutation_root' }
  & { delete_tasks?: Maybe<(
    { __typename?: 'tasks_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tasks' }
      & Pick<Tasks, 'id'>
    )> }
  )> }
);


export const GetTasksDocument = gql`
    subscription getTasks($where: tasks_bool_exp, $orderBy: [tasks_order_by!], $offset: Int, $limit: Int) {
  tasks(where: $where, order_by: $orderBy, offset: $offset, limit: $limit) {
    id
    name
    status
    description
    due_date
    ref_sub_tasks {
      id
      name
      status
    }
  }
}
    `;

/**
 * __useGetTasksSubscription__
 *
 * To run a query within a React component, call `useGetTasksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetTasksSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetTasksSubscription, GetTasksSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetTasksSubscription, GetTasksSubscriptionVariables>(GetTasksDocument, baseOptions);
      }
export type GetTasksSubscriptionHookResult = ReturnType<typeof useGetTasksSubscription>;
export type GetTasksSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetTasksSubscription>;
export const UpdateTasksDocument = gql`
    mutation updateTasks($where: tasks_bool_exp!, $set: tasks_set_input) {
  update_tasks(where: $where, _set: $set) {
    returning {
      id
    }
  }
}
    `;
export type UpdateTasksMutationFn = ApolloReactCommon.MutationFunction<UpdateTasksMutation, UpdateTasksMutationVariables>;

/**
 * __useUpdateTasksMutation__
 *
 * To run a mutation, you first call `useUpdateTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTasksMutation, { data, loading, error }] = useUpdateTasksMutation({
 *   variables: {
 *      where: // value for 'where'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateTasksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTasksMutation, UpdateTasksMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTasksMutation, UpdateTasksMutationVariables>(UpdateTasksDocument, baseOptions);
      }
export type UpdateTasksMutationHookResult = ReturnType<typeof useUpdateTasksMutation>;
export type UpdateTasksMutationResult = ApolloReactCommon.MutationResult<UpdateTasksMutation>;
export type UpdateTasksMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTasksMutation, UpdateTasksMutationVariables>;
export const InsertTasksDocument = gql`
    mutation insertTasks($objects: [tasks_insert_input!]!) {
  insert_tasks(objects: $objects) {
    returning {
      id
    }
  }
}
    `;
export type InsertTasksMutationFn = ApolloReactCommon.MutationFunction<InsertTasksMutation, InsertTasksMutationVariables>;

/**
 * __useInsertTasksMutation__
 *
 * To run a mutation, you first call `useInsertTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTasksMutation, { data, loading, error }] = useInsertTasksMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useInsertTasksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTasksMutation, InsertTasksMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTasksMutation, InsertTasksMutationVariables>(InsertTasksDocument, baseOptions);
      }
export type InsertTasksMutationHookResult = ReturnType<typeof useInsertTasksMutation>;
export type InsertTasksMutationResult = ApolloReactCommon.MutationResult<InsertTasksMutation>;
export type InsertTasksMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTasksMutation, InsertTasksMutationVariables>;
export const DeleteTasksDocument = gql`
    mutation deleteTasks($where: tasks_bool_exp!) {
  delete_tasks(where: $where) {
    returning {
      id
    }
  }
}
    `;
export type DeleteTasksMutationFn = ApolloReactCommon.MutationFunction<DeleteTasksMutation, DeleteTasksMutationVariables>;

/**
 * __useDeleteTasksMutation__
 *
 * To run a mutation, you first call `useDeleteTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTasksMutation, { data, loading, error }] = useDeleteTasksMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTasksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTasksMutation, DeleteTasksMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTasksMutation, DeleteTasksMutationVariables>(DeleteTasksDocument, baseOptions);
      }
export type DeleteTasksMutationHookResult = ReturnType<typeof useDeleteTasksMutation>;
export type DeleteTasksMutationResult = ApolloReactCommon.MutationResult<DeleteTasksMutation>;
export type DeleteTasksMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTasksMutation, DeleteTasksMutationVariables>;