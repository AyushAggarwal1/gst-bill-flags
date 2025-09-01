
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TenantFeatureFlag
 * 
 */
export type TenantFeatureFlag = $Result.DefaultSelection<Prisma.$TenantFeatureFlagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Feature: {
  DASHBOARD: 'DASHBOARD',
  CUSTOMERS: 'CUSTOMERS',
  ITEMS: 'ITEMS',
  BILLS: 'BILLS',
  TEMPLATES: 'TEMPLATES',
  USER_MANAGEMENT: 'USER_MANAGEMENT',
  API_DOCS: 'API_DOCS',
  GST_SEARCH: 'GST_SEARCH',
  HSN_SEARCH: 'HSN_SEARCH'
};

export type Feature = (typeof Feature)[keyof typeof Feature]

}

export type Feature = $Enums.Feature

export const Feature: typeof $Enums.Feature

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TenantFeatureFlags
 * const tenantFeatureFlags = await prisma.tenantFeatureFlag.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TenantFeatureFlags
   * const tenantFeatureFlags = await prisma.tenantFeatureFlag.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenantFeatureFlag`: Exposes CRUD operations for the **TenantFeatureFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantFeatureFlags
    * const tenantFeatureFlags = await prisma.tenantFeatureFlag.findMany()
    * ```
    */
  get tenantFeatureFlag(): Prisma.TenantFeatureFlagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TenantFeatureFlag: 'TenantFeatureFlag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenantFeatureFlag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TenantFeatureFlag: {
        payload: Prisma.$TenantFeatureFlagPayload<ExtArgs>
        fields: Prisma.TenantFeatureFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFeatureFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFeatureFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          findFirst: {
            args: Prisma.TenantFeatureFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFeatureFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          findMany: {
            args: Prisma.TenantFeatureFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>[]
          }
          create: {
            args: Prisma.TenantFeatureFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          createMany: {
            args: Prisma.TenantFeatureFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantFeatureFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>[]
          }
          delete: {
            args: Prisma.TenantFeatureFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          update: {
            args: Prisma.TenantFeatureFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          deleteMany: {
            args: Prisma.TenantFeatureFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantFeatureFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantFeatureFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>[]
          }
          upsert: {
            args: Prisma.TenantFeatureFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantFeatureFlagPayload>
          }
          aggregate: {
            args: Prisma.TenantFeatureFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantFeatureFlag>
          }
          groupBy: {
            args: Prisma.TenantFeatureFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantFeatureFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantFeatureFlagCountArgs<ExtArgs>
            result: $Utils.Optional<TenantFeatureFlagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenantFeatureFlag?: TenantFeatureFlagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TenantFeatureFlag
   */

  export type AggregateTenantFeatureFlag = {
    _count: TenantFeatureFlagCountAggregateOutputType | null
    _min: TenantFeatureFlagMinAggregateOutputType | null
    _max: TenantFeatureFlagMaxAggregateOutputType | null
  }

  export type TenantFeatureFlagMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    feature: $Enums.Feature | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantFeatureFlagMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    feature: $Enums.Feature | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantFeatureFlagCountAggregateOutputType = {
    id: number
    tenantId: number
    feature: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantFeatureFlagMinAggregateInputType = {
    id?: true
    tenantId?: true
    feature?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantFeatureFlagMaxAggregateInputType = {
    id?: true
    tenantId?: true
    feature?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantFeatureFlagCountAggregateInputType = {
    id?: true
    tenantId?: true
    feature?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantFeatureFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantFeatureFlag to aggregate.
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantFeatureFlags to fetch.
     */
    orderBy?: TenantFeatureFlagOrderByWithRelationInput | TenantFeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantFeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantFeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantFeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantFeatureFlags
    **/
    _count?: true | TenantFeatureFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantFeatureFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantFeatureFlagMaxAggregateInputType
  }

  export type GetTenantFeatureFlagAggregateType<T extends TenantFeatureFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantFeatureFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantFeatureFlag[P]>
      : GetScalarType<T[P], AggregateTenantFeatureFlag[P]>
  }




  export type TenantFeatureFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantFeatureFlagWhereInput
    orderBy?: TenantFeatureFlagOrderByWithAggregationInput | TenantFeatureFlagOrderByWithAggregationInput[]
    by: TenantFeatureFlagScalarFieldEnum[] | TenantFeatureFlagScalarFieldEnum
    having?: TenantFeatureFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantFeatureFlagCountAggregateInputType | true
    _min?: TenantFeatureFlagMinAggregateInputType
    _max?: TenantFeatureFlagMaxAggregateInputType
  }

  export type TenantFeatureFlagGroupByOutputType = {
    id: string
    tenantId: string
    feature: $Enums.Feature
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantFeatureFlagCountAggregateOutputType | null
    _min: TenantFeatureFlagMinAggregateOutputType | null
    _max: TenantFeatureFlagMaxAggregateOutputType | null
  }

  type GetTenantFeatureFlagGroupByPayload<T extends TenantFeatureFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantFeatureFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantFeatureFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantFeatureFlagGroupByOutputType[P]>
            : GetScalarType<T[P], TenantFeatureFlagGroupByOutputType[P]>
        }
      >
    >


  export type TenantFeatureFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    feature?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenantFeatureFlag"]>

  export type TenantFeatureFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    feature?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenantFeatureFlag"]>

  export type TenantFeatureFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    feature?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenantFeatureFlag"]>

  export type TenantFeatureFlagSelectScalar = {
    id?: boolean
    tenantId?: boolean
    feature?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantFeatureFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "feature" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["tenantFeatureFlag"]>

  export type $TenantFeatureFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantFeatureFlag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      feature: $Enums.Feature
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantFeatureFlag"]>
    composites: {}
  }

  type TenantFeatureFlagGetPayload<S extends boolean | null | undefined | TenantFeatureFlagDefaultArgs> = $Result.GetResult<Prisma.$TenantFeatureFlagPayload, S>

  type TenantFeatureFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFeatureFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantFeatureFlagCountAggregateInputType | true
    }

  export interface TenantFeatureFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantFeatureFlag'], meta: { name: 'TenantFeatureFlag' } }
    /**
     * Find zero or one TenantFeatureFlag that matches the filter.
     * @param {TenantFeatureFlagFindUniqueArgs} args - Arguments to find a TenantFeatureFlag
     * @example
     * // Get one TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFeatureFlagFindUniqueArgs>(args: SelectSubset<T, TenantFeatureFlagFindUniqueArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantFeatureFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFeatureFlagFindUniqueOrThrowArgs} args - Arguments to find a TenantFeatureFlag
     * @example
     * // Get one TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFeatureFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFeatureFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantFeatureFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagFindFirstArgs} args - Arguments to find a TenantFeatureFlag
     * @example
     * // Get one TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFeatureFlagFindFirstArgs>(args?: SelectSubset<T, TenantFeatureFlagFindFirstArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantFeatureFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagFindFirstOrThrowArgs} args - Arguments to find a TenantFeatureFlag
     * @example
     * // Get one TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFeatureFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFeatureFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantFeatureFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantFeatureFlags
     * const tenantFeatureFlags = await prisma.tenantFeatureFlag.findMany()
     * 
     * // Get first 10 TenantFeatureFlags
     * const tenantFeatureFlags = await prisma.tenantFeatureFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantFeatureFlagWithIdOnly = await prisma.tenantFeatureFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFeatureFlagFindManyArgs>(args?: SelectSubset<T, TenantFeatureFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantFeatureFlag.
     * @param {TenantFeatureFlagCreateArgs} args - Arguments to create a TenantFeatureFlag.
     * @example
     * // Create one TenantFeatureFlag
     * const TenantFeatureFlag = await prisma.tenantFeatureFlag.create({
     *   data: {
     *     // ... data to create a TenantFeatureFlag
     *   }
     * })
     * 
     */
    create<T extends TenantFeatureFlagCreateArgs>(args: SelectSubset<T, TenantFeatureFlagCreateArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantFeatureFlags.
     * @param {TenantFeatureFlagCreateManyArgs} args - Arguments to create many TenantFeatureFlags.
     * @example
     * // Create many TenantFeatureFlags
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantFeatureFlagCreateManyArgs>(args?: SelectSubset<T, TenantFeatureFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantFeatureFlags and returns the data saved in the database.
     * @param {TenantFeatureFlagCreateManyAndReturnArgs} args - Arguments to create many TenantFeatureFlags.
     * @example
     * // Create many TenantFeatureFlags
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantFeatureFlags and only return the `id`
     * const tenantFeatureFlagWithIdOnly = await prisma.tenantFeatureFlag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantFeatureFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantFeatureFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantFeatureFlag.
     * @param {TenantFeatureFlagDeleteArgs} args - Arguments to delete one TenantFeatureFlag.
     * @example
     * // Delete one TenantFeatureFlag
     * const TenantFeatureFlag = await prisma.tenantFeatureFlag.delete({
     *   where: {
     *     // ... filter to delete one TenantFeatureFlag
     *   }
     * })
     * 
     */
    delete<T extends TenantFeatureFlagDeleteArgs>(args: SelectSubset<T, TenantFeatureFlagDeleteArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantFeatureFlag.
     * @param {TenantFeatureFlagUpdateArgs} args - Arguments to update one TenantFeatureFlag.
     * @example
     * // Update one TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantFeatureFlagUpdateArgs>(args: SelectSubset<T, TenantFeatureFlagUpdateArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantFeatureFlags.
     * @param {TenantFeatureFlagDeleteManyArgs} args - Arguments to filter TenantFeatureFlags to delete.
     * @example
     * // Delete a few TenantFeatureFlags
     * const { count } = await prisma.tenantFeatureFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantFeatureFlagDeleteManyArgs>(args?: SelectSubset<T, TenantFeatureFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantFeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantFeatureFlags
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantFeatureFlagUpdateManyArgs>(args: SelectSubset<T, TenantFeatureFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantFeatureFlags and returns the data updated in the database.
     * @param {TenantFeatureFlagUpdateManyAndReturnArgs} args - Arguments to update many TenantFeatureFlags.
     * @example
     * // Update many TenantFeatureFlags
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantFeatureFlags and only return the `id`
     * const tenantFeatureFlagWithIdOnly = await prisma.tenantFeatureFlag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantFeatureFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantFeatureFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantFeatureFlag.
     * @param {TenantFeatureFlagUpsertArgs} args - Arguments to update or create a TenantFeatureFlag.
     * @example
     * // Update or create a TenantFeatureFlag
     * const tenantFeatureFlag = await prisma.tenantFeatureFlag.upsert({
     *   create: {
     *     // ... data to create a TenantFeatureFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantFeatureFlag we want to update
     *   }
     * })
     */
    upsert<T extends TenantFeatureFlagUpsertArgs>(args: SelectSubset<T, TenantFeatureFlagUpsertArgs<ExtArgs>>): Prisma__TenantFeatureFlagClient<$Result.GetResult<Prisma.$TenantFeatureFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantFeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagCountArgs} args - Arguments to filter TenantFeatureFlags to count.
     * @example
     * // Count the number of TenantFeatureFlags
     * const count = await prisma.tenantFeatureFlag.count({
     *   where: {
     *     // ... the filter for the TenantFeatureFlags we want to count
     *   }
     * })
    **/
    count<T extends TenantFeatureFlagCountArgs>(
      args?: Subset<T, TenantFeatureFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantFeatureFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantFeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantFeatureFlagAggregateArgs>(args: Subset<T, TenantFeatureFlagAggregateArgs>): Prisma.PrismaPromise<GetTenantFeatureFlagAggregateType<T>>

    /**
     * Group by TenantFeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFeatureFlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantFeatureFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantFeatureFlagGroupByArgs['orderBy'] }
        : { orderBy?: TenantFeatureFlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantFeatureFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantFeatureFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantFeatureFlag model
   */
  readonly fields: TenantFeatureFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantFeatureFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantFeatureFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantFeatureFlag model
   */
  interface TenantFeatureFlagFieldRefs {
    readonly id: FieldRef<"TenantFeatureFlag", 'String'>
    readonly tenantId: FieldRef<"TenantFeatureFlag", 'String'>
    readonly feature: FieldRef<"TenantFeatureFlag", 'Feature'>
    readonly enabled: FieldRef<"TenantFeatureFlag", 'Boolean'>
    readonly createdAt: FieldRef<"TenantFeatureFlag", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantFeatureFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantFeatureFlag findUnique
   */
  export type TenantFeatureFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which TenantFeatureFlag to fetch.
     */
    where: TenantFeatureFlagWhereUniqueInput
  }

  /**
   * TenantFeatureFlag findUniqueOrThrow
   */
  export type TenantFeatureFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which TenantFeatureFlag to fetch.
     */
    where: TenantFeatureFlagWhereUniqueInput
  }

  /**
   * TenantFeatureFlag findFirst
   */
  export type TenantFeatureFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which TenantFeatureFlag to fetch.
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantFeatureFlags to fetch.
     */
    orderBy?: TenantFeatureFlagOrderByWithRelationInput | TenantFeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantFeatureFlags.
     */
    cursor?: TenantFeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantFeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantFeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantFeatureFlags.
     */
    distinct?: TenantFeatureFlagScalarFieldEnum | TenantFeatureFlagScalarFieldEnum[]
  }

  /**
   * TenantFeatureFlag findFirstOrThrow
   */
  export type TenantFeatureFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which TenantFeatureFlag to fetch.
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantFeatureFlags to fetch.
     */
    orderBy?: TenantFeatureFlagOrderByWithRelationInput | TenantFeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantFeatureFlags.
     */
    cursor?: TenantFeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantFeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantFeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantFeatureFlags.
     */
    distinct?: TenantFeatureFlagScalarFieldEnum | TenantFeatureFlagScalarFieldEnum[]
  }

  /**
   * TenantFeatureFlag findMany
   */
  export type TenantFeatureFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which TenantFeatureFlags to fetch.
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantFeatureFlags to fetch.
     */
    orderBy?: TenantFeatureFlagOrderByWithRelationInput | TenantFeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantFeatureFlags.
     */
    cursor?: TenantFeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantFeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantFeatureFlags.
     */
    skip?: number
    distinct?: TenantFeatureFlagScalarFieldEnum | TenantFeatureFlagScalarFieldEnum[]
  }

  /**
   * TenantFeatureFlag create
   */
  export type TenantFeatureFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * The data needed to create a TenantFeatureFlag.
     */
    data: XOR<TenantFeatureFlagCreateInput, TenantFeatureFlagUncheckedCreateInput>
  }

  /**
   * TenantFeatureFlag createMany
   */
  export type TenantFeatureFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantFeatureFlags.
     */
    data: TenantFeatureFlagCreateManyInput | TenantFeatureFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantFeatureFlag createManyAndReturn
   */
  export type TenantFeatureFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * The data used to create many TenantFeatureFlags.
     */
    data: TenantFeatureFlagCreateManyInput | TenantFeatureFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantFeatureFlag update
   */
  export type TenantFeatureFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * The data needed to update a TenantFeatureFlag.
     */
    data: XOR<TenantFeatureFlagUpdateInput, TenantFeatureFlagUncheckedUpdateInput>
    /**
     * Choose, which TenantFeatureFlag to update.
     */
    where: TenantFeatureFlagWhereUniqueInput
  }

  /**
   * TenantFeatureFlag updateMany
   */
  export type TenantFeatureFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantFeatureFlags.
     */
    data: XOR<TenantFeatureFlagUpdateManyMutationInput, TenantFeatureFlagUncheckedUpdateManyInput>
    /**
     * Filter which TenantFeatureFlags to update
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * Limit how many TenantFeatureFlags to update.
     */
    limit?: number
  }

  /**
   * TenantFeatureFlag updateManyAndReturn
   */
  export type TenantFeatureFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * The data used to update TenantFeatureFlags.
     */
    data: XOR<TenantFeatureFlagUpdateManyMutationInput, TenantFeatureFlagUncheckedUpdateManyInput>
    /**
     * Filter which TenantFeatureFlags to update
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * Limit how many TenantFeatureFlags to update.
     */
    limit?: number
  }

  /**
   * TenantFeatureFlag upsert
   */
  export type TenantFeatureFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * The filter to search for the TenantFeatureFlag to update in case it exists.
     */
    where: TenantFeatureFlagWhereUniqueInput
    /**
     * In case the TenantFeatureFlag found by the `where` argument doesn't exist, create a new TenantFeatureFlag with this data.
     */
    create: XOR<TenantFeatureFlagCreateInput, TenantFeatureFlagUncheckedCreateInput>
    /**
     * In case the TenantFeatureFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantFeatureFlagUpdateInput, TenantFeatureFlagUncheckedUpdateInput>
  }

  /**
   * TenantFeatureFlag delete
   */
  export type TenantFeatureFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
    /**
     * Filter which TenantFeatureFlag to delete.
     */
    where: TenantFeatureFlagWhereUniqueInput
  }

  /**
   * TenantFeatureFlag deleteMany
   */
  export type TenantFeatureFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantFeatureFlags to delete
     */
    where?: TenantFeatureFlagWhereInput
    /**
     * Limit how many TenantFeatureFlags to delete.
     */
    limit?: number
  }

  /**
   * TenantFeatureFlag without action
   */
  export type TenantFeatureFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantFeatureFlag
     */
    select?: TenantFeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantFeatureFlag
     */
    omit?: TenantFeatureFlagOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantFeatureFlagScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    feature: 'feature',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantFeatureFlagScalarFieldEnum = (typeof TenantFeatureFlagScalarFieldEnum)[keyof typeof TenantFeatureFlagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Feature'
   */
  export type EnumFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Feature'>
    


  /**
   * Reference to a field of type 'Feature[]'
   */
  export type ListEnumFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Feature[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TenantFeatureFlagWhereInput = {
    AND?: TenantFeatureFlagWhereInput | TenantFeatureFlagWhereInput[]
    OR?: TenantFeatureFlagWhereInput[]
    NOT?: TenantFeatureFlagWhereInput | TenantFeatureFlagWhereInput[]
    id?: StringFilter<"TenantFeatureFlag"> | string
    tenantId?: StringFilter<"TenantFeatureFlag"> | string
    feature?: EnumFeatureFilter<"TenantFeatureFlag"> | $Enums.Feature
    enabled?: BoolFilter<"TenantFeatureFlag"> | boolean
    createdAt?: DateTimeFilter<"TenantFeatureFlag"> | Date | string
    updatedAt?: DateTimeFilter<"TenantFeatureFlag"> | Date | string
  }

  export type TenantFeatureFlagOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    feature?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantFeatureFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_feature?: TenantFeatureFlagTenantIdFeatureCompoundUniqueInput
    AND?: TenantFeatureFlagWhereInput | TenantFeatureFlagWhereInput[]
    OR?: TenantFeatureFlagWhereInput[]
    NOT?: TenantFeatureFlagWhereInput | TenantFeatureFlagWhereInput[]
    tenantId?: StringFilter<"TenantFeatureFlag"> | string
    feature?: EnumFeatureFilter<"TenantFeatureFlag"> | $Enums.Feature
    enabled?: BoolFilter<"TenantFeatureFlag"> | boolean
    createdAt?: DateTimeFilter<"TenantFeatureFlag"> | Date | string
    updatedAt?: DateTimeFilter<"TenantFeatureFlag"> | Date | string
  }, "id" | "tenantId_feature">

  export type TenantFeatureFlagOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    feature?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantFeatureFlagCountOrderByAggregateInput
    _max?: TenantFeatureFlagMaxOrderByAggregateInput
    _min?: TenantFeatureFlagMinOrderByAggregateInput
  }

  export type TenantFeatureFlagScalarWhereWithAggregatesInput = {
    AND?: TenantFeatureFlagScalarWhereWithAggregatesInput | TenantFeatureFlagScalarWhereWithAggregatesInput[]
    OR?: TenantFeatureFlagScalarWhereWithAggregatesInput[]
    NOT?: TenantFeatureFlagScalarWhereWithAggregatesInput | TenantFeatureFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantFeatureFlag"> | string
    tenantId?: StringWithAggregatesFilter<"TenantFeatureFlag"> | string
    feature?: EnumFeatureWithAggregatesFilter<"TenantFeatureFlag"> | $Enums.Feature
    enabled?: BoolWithAggregatesFilter<"TenantFeatureFlag"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TenantFeatureFlag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantFeatureFlag"> | Date | string
  }

  export type TenantFeatureFlagCreateInput = {
    id?: string
    tenantId: string
    feature: $Enums.Feature
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantFeatureFlagUncheckedCreateInput = {
    id?: string
    tenantId: string
    feature: $Enums.Feature
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantFeatureFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    feature?: EnumFeatureFieldUpdateOperationsInput | $Enums.Feature
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantFeatureFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    feature?: EnumFeatureFieldUpdateOperationsInput | $Enums.Feature
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantFeatureFlagCreateManyInput = {
    id?: string
    tenantId: string
    feature: $Enums.Feature
    enabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantFeatureFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    feature?: EnumFeatureFieldUpdateOperationsInput | $Enums.Feature
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantFeatureFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    feature?: EnumFeatureFieldUpdateOperationsInput | $Enums.Feature
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumFeatureFilter<$PrismaModel = never> = {
    equals?: $Enums.Feature | EnumFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureFilter<$PrismaModel> | $Enums.Feature
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantFeatureFlagTenantIdFeatureCompoundUniqueInput = {
    tenantId: string
    feature: $Enums.Feature
  }

  export type TenantFeatureFlagCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    feature?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantFeatureFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    feature?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantFeatureFlagMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    feature?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumFeatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Feature | EnumFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureWithAggregatesFilter<$PrismaModel> | $Enums.Feature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureFilter<$PrismaModel>
    _max?: NestedEnumFeatureFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumFeatureFieldUpdateOperationsInput = {
    set?: $Enums.Feature
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumFeatureFilter<$PrismaModel = never> = {
    equals?: $Enums.Feature | EnumFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureFilter<$PrismaModel> | $Enums.Feature
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumFeatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Feature | EnumFeatureFieldRefInput<$PrismaModel>
    in?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    notIn?: $Enums.Feature[] | ListEnumFeatureFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureWithAggregatesFilter<$PrismaModel> | $Enums.Feature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureFilter<$PrismaModel>
    _max?: NestedEnumFeatureFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}