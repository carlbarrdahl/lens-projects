import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Blockchain data scalar type */
  BlockchainData: any;
  /** Broadcast scalar id type */
  BroadcastId: any;
  /** ChainId custom scalar type */
  ChainId: any;
  /** collect module data scalar type */
  CollectModuleData: any;
  /** Contract address custom scalar type */
  ContractAddress: any;
  /** create handle custom scalar type */
  CreateHandle: any;
  /** Cursor custom scalar type */
  Cursor: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Ethereum address custom scalar type */
  EthereumAddress: any;
  /** follow module data scalar type */
  FollowModuleData: any;
  /** handle custom scalar type */
  Handle: any;
  /** handle claim id custom scalar type */
  HandleClaimIdScalar: any;
  /** Internal publication id custom scalar type */
  InternalPublicationId: any;
  /** jwt custom scalar type */
  Jwt: any;
  /** limit custom scalar type */
  LimitScalar: any;
  /** Markdown scalar type */
  Markdown: any;
  /** mimetype custom scalar type */
  MimeType: any;
  /** Nft ownership id type */
  NftOwnershipId: any;
  /** Nonce custom scalar type */
  Nonce: any;
  /** ProfileId custom scalar type */
  ProfileId: any;
  /** Publication id custom scalar type */
  PublicationId: any;
  /** Publication url scalar type */
  PublicationUrl: any;
  /** reference module data scalar type */
  ReferenceModuleData: any;
  /** Query search */
  Search: any;
  /** Relayer signature */
  Signature: any;
  /** Sources custom scalar type */
  Sources: any;
  /** timestamp date custom scalar type */
  TimestampScalar: any;
  /** The tx has */
  TxHash: any;
  /** UnixTimestamp custom scalar type */
  UnixTimestamp: any;
  /** Url scalar type */
  Url: any;
  /** Represents NULL values */
  Void: any;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  currency: Scalars['ContractAddress'];
  module: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules: Array<CollectModules>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>;
  followModules: Array<FollowModules>;
  referenceModules: Array<ReferenceModules>;
};

export type AttachRequest = {
  /** mimetype of the file to push */
  mimeType: Scalars['MimeType'];
};

/** The response to upload the attached file */
export type AttachResults = {
  __typename?: 'AttachResults';
  /** Name of the file once is uploaded */
  key: Scalars['String'];
  /** Signed url to push the file */
  signedUrl: Scalars['String'];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId'];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress'];
};

export type ClaimHandleRequest = {
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
};

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

export type CollectModule = EmptyCollectModuleSettings | FeeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect empty collect module */
  emptyCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  EmptyCollectModule = 'EmptyCollectModule',
  FeeCollectModule = 'FeeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule'
}

/** The social comment */
export type Comment = {
  __typename?: 'Comment';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  tokenId: Scalars['String'];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  pubId: Scalars['PublicationId'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId'];
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  handle: Scalars['CreateHandle'];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  dispatcher: Scalars['EthereumAddress'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['ContractAddress'];
  followModuleData: Scalars['FollowModuleData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followNFTURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  imageURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  enables: Array<Scalars['Boolean']>;
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher';
  /** The dispatcher address */
  address: Scalars['EthereumAddress'];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean'];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** If the user does follow */
  follows: Scalars['Boolean'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type EmptyCollectModuleSettings = {
  __typename?: 'EmptyCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  address: Scalars['ContractAddress'];
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress'];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The follow modules enum */
  type: FollowModules;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
};

export type FollowModule = FeeFollowModuleSettings;

export type FollowModuleParams = {
  /** The empty follow module */
  emptyFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress'];
  tokensIds: Array<Scalars['String']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData'];
  from: Scalars['EthereumAddress'];
  to: Scalars['ContractAddress'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String'];
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollows: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalProfiles: Scalars['Int'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type HasCollectedItem = {
  __typename?: 'HasCollectedItem';
  collected: Scalars['Boolean'];
  collectedTimes: Scalars['Int'];
  publicationId: Scalars['InternalPublicationId'];
};

export type HasCollectedPublicationRequest = {
  /** Internal publication ids */
  publicationIds: Array<Scalars['InternalPublicationId']>;
  /** Wallet address */
  walletAddress: Scalars['EthereumAddress'];
};

export type HasCollectedRequest = {
  collectRequests: Array<HasCollectedPublicationRequest>;
};

export type HasCollectedResult = {
  __typename?: 'HasCollectedResult';
  results: Array<HasCollectedItem>;
  /** Wallet address */
  walletAddress: Scalars['EthereumAddress'];
};

export type HasMirroredItem = {
  __typename?: 'HasMirroredItem';
  mirrored: Scalars['Boolean'];
  publicationId: Scalars['InternalPublicationId'];
};

export type HasMirroredProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Internal publication ids */
  publicationIds: Array<Scalars['InternalPublicationId']>;
};

export type HasMirroredRequest = {
  profilesRequest: Array<HasMirroredProfileRequest>;
};

export type HasMirroredResult = {
  __typename?: 'HasMirroredResult';
  /** Profile id */
  profileId: Scalars['ProfileId'];
  results: Array<HasMirroredItem>;
};

export type HasTxHashBeenIndexedRequest = {
  txHash: Scalars['TxHash'];
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress'];
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  data: Scalars['String'];
  logIndex: Scalars['Int'];
  removed: Scalars['Boolean'];
  topics: Array<Scalars['String']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: 'Media';
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The token image nft */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet';
  /** Medium media - will always be null on the public API */
  medium?: Maybe<Media>;
  /** Original media */
  original: Media;
  /** Small media - will always be null on the public API */
  small?: Maybe<Media>;
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  /** The display type */
  displayType?: Maybe<MetadataDisplayType>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** The value */
  value?: Maybe<Scalars['String']>;
};

/** The metadata display types */
export enum MetadataDisplayType {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']>;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars['String']>;
};

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  attachFile: AttachResults;
  authenticate: AuthenticationResult;
  claim: RelayResult;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  hidePublication?: Maybe<Scalars['Void']>;
  refresh: AuthenticationResult;
  reportPublication?: Maybe<Scalars['Void']>;
  updateProfile: Profile;
};


export type MutationAttachFileArgs = {
  request: AttachRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  request: UnfollowRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};


export type MutationUpdateProfileArgs = {
  request: UpdateProfileRequest;
};

/** The nft type */
export type Nft = {
  __typename?: 'NFT';
  /** aka "1"  */
  chainId: Scalars['ChainId'];
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String'];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String'];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress'];
  /** aka us CryptoKitties */
  contractName: Scalars['String'];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String'];
  /** aka "ERC721"  */
  ercType: Scalars['String'];
  /** aka "Beard Coffee"  */
  name: Scalars['String'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars['String'];
  /** aka "13"  */
  tokenId: Scalars['String'];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The meta type content */
  metaType: Scalars['String'];
  /** The token uri  nft */
  uri: Scalars['String'];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress'];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime'];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime'];
  isFollowedByMe: Scalars['Boolean'];
  wallet: Wallet;
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime'];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The contract address */
  contractAddress: Scalars['ContractAddress'];
  /** The token id of the nft */
  tokenId: Scalars['String'];
  /** The token image nft */
  uri: Scalars['Url'];
  /** If the NFT is verified */
  verified: Scalars['Boolean'];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar'];
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMirrorNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress'];
  /** number of tokens owner */
  amount: Scalars['Float'];
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
  /** The total number of entities the pagination iterates over. e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount: Scalars['Int'];
};

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: 'Post';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  depatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** The profile handle */
  handle: Scalars['Handle'];
  /** The profile id */
  id: Scalars['ProfileId'];
  /** Is the profile default */
  isDefault: Scalars['Boolean'];
  /** Location set on profile */
  location?: Maybe<Scalars['String']>;
  /** Name of the profile */
  name?: Maybe<Scalars['String']>;
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress'];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
  /** Twitter url set on profile */
  twitterUrl?: Maybe<Scalars['Url']>;
  /** Website set on profile */
  website?: Maybe<Scalars['String']>;
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
};

export type ProfileRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

/** The paginated revenue result */
export type ProfileRevenueResult = {
  __typename?: 'ProfileRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  /** Total collects count */
  totalCollects: Scalars['Int'];
  /** Total comment count */
  totalComments: Scalars['Int'];
  /** Total follower count */
  totalFollowers: Scalars['Int'];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int'];
  /** Total mirror count */
  totalMirrors: Scalars['Int'];
  /** Total post count */
  totalPosts: Scalars['Int'];
  /** Total publication count */
  totalPublications: Scalars['Int'];
};

export type Publication = Comment | Mirror | Post;

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  HumanAbuse = 'HUMAN_ABUSE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  earnings?: Maybe<Erc20Amount>;
  /** Protocol treasury fee % */
  protocolFee?: Maybe<Scalars['Float']>;
  publication: Publication;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

/** Publication sort criteria */
export enum PublicationSortCriteria {
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats';
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int'];
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int'];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int'];
};

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Query = {
  __typename?: 'Query';
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  explorePublications: ExplorePublicationResult;
  followerNftOwnedTokenIds: FollowerNftOwnedTokenIds;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasCollected: Array<HasCollectedResult>;
  hasMirrored: Array<HasMirroredResult>;
  hasTxHashBeenIndexed: TransactionResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String'];
  profileRevenue: ProfileRevenueResult;
  profiles: PaginatedProfileResult;
  publication?: Maybe<Publication>;
  publicationRevenue: PublicationRevenue;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  search: SearchResult;
  timeline: PaginatedTimelineResult;
  userSigNonces: UserSigNonces;
  verify: Scalars['Boolean'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasCollectedArgs = {
  request: HasCollectedRequest;
};


export type QueryHasMirroredArgs = {
  request: HasMirroredRequest;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileRevenueArgs = {
  request: ProfileRevenueQueryRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};

export type ReferenceModule = FollowOnlyReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
};

/** The reference module types */
export enum ReferenceModules {
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayResult = RelayError | RelayerResult;

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult';
  /** The tx hash */
  txHash: Scalars['TxHash'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime'];
  handle: Scalars['Handle'];
  id: Scalars['HandleClaimIdScalar'];
  source: Scalars['String'];
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  wallet: Scalars['EthereumAddress'];
};

export type SetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean'];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  byzantium: Scalars['Boolean'];
  confirmations: Scalars['Int'];
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  cumulativeGasUsed: Scalars['String'];
  effectiveGasPrice: Scalars['String'];
  from: Scalars['EthereumAddress'];
  gasUsed: Scalars['String'];
  logs: Array<Log>;
  logsBloom: Scalars['String'];
  root?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  to?: Maybe<Scalars['EthereumAddress']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId'];
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>;
};

export type UpdateProfileRequest = {
  /** The profile bio */
  bio?: InputMaybe<Scalars['String']>;
  /** The cover picture for the profile */
  coverPicture?: InputMaybe<Scalars['Url']>;
  /** The profile location */
  location?: InputMaybe<Scalars['String']>;
  /** The profile name */
  name: Scalars['String'];
  profileId: Scalars['ProfileId'];
  /** The profile twitter url */
  twitterUrl?: InputMaybe<Scalars['Url']>;
  /** The profile website */
  website?: InputMaybe<Scalars['Url']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce'];
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress'];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

export type AuthenticationMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticationMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type VerifyQueryVariables = Exact<{
  request: VerifyRequest;
}>;


export type VerifyQuery = { __typename?: 'Query', verify: boolean };

export type HasTxHashBeenIndexedQueryVariables = Exact<{
  request: HasTxHashBeenIndexedRequest;
}>;


export type HasTxHashBeenIndexedQuery = { __typename?: 'Query', hasTxHashBeenIndexed: { __typename: 'TransactionError', reason: TransactionErrorReasons, txReceipt?: { __typename?: 'TransactionReceipt', to?: any | null, from: any, contractAddress?: any | null, transactionIndex: number, root?: string | null, gasUsed: string, logsBloom: string, blockHash: string, transactionHash: any, blockNumber: number, confirmations: number, cumulativeGasUsed: string, effectiveGasPrice: string, byzantium: boolean, type: number, status: number, logs: Array<{ __typename?: 'Log', blockNumber: number, blockHash: string, transactionIndex: number, removed: boolean, address: any, data: string, topics: Array<string>, transactionHash: any, logIndex: number }> } | null } | { __typename: 'TransactionIndexedResult', indexed: boolean, txReceipt?: { __typename?: 'TransactionReceipt', to?: any | null, from: any, contractAddress?: any | null, transactionIndex: number, root?: string | null, gasUsed: string, logsBloom: string, blockHash: string, transactionHash: any, blockNumber: number, confirmations: number, cumulativeGasUsed: string, effectiveGasPrice: string, byzantium: boolean, type: number, status: number, logs: Array<{ __typename?: 'Log', blockNumber: number, blockHash: string, transactionIndex: number, removed: boolean, address: any, data: string, topics: Array<string>, transactionHash: any, logIndex: number }> } | null, metadataStatus?: { __typename?: 'PublicationMetadataStatus', status: PublicationMetadataStatusType, reason?: string | null } | null } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type EnabledModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type EnabledModulesQuery = { __typename?: 'Query', enabledModules: { __typename?: 'EnabledModules', collectModules: Array<{ __typename?: 'EnabledModule', moduleName: string, contractAddress: any, inputParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, redeemParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, returnDataParms: Array<{ __typename?: 'ModuleInfo', name: string, type: string }> }>, followModules: Array<{ __typename?: 'EnabledModule', moduleName: string, contractAddress: any, inputParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, redeemParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, returnDataParms: Array<{ __typename?: 'ModuleInfo', name: string, type: string }> }>, referenceModules: Array<{ __typename?: 'EnabledModule', moduleName: string, contractAddress: any, inputParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, redeemParams: Array<{ __typename?: 'ModuleInfo', name: string, type: string }>, returnDataParms: Array<{ __typename?: 'ModuleInfo', name: string, type: string }> }> } };

export type EnabledModuleCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type EnabledModuleCurrenciesQuery = { __typename?: 'Query', enabledModuleCurrencies: Array<{ __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any }> };

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename: 'RelayError', reason: RelayErrorReasons } | { __typename: 'RelayerResult', txHash: any } };

export type ProfileQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;


export type ProfileQuery = { __typename?: 'Query', profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, name: string, decimals: number, address: any } } } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount: number } } };

export type RecommendedProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendedProfilesQuery = { __typename?: 'Query', recommendedProfiles: Array<{ __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', height?: number | null, width?: number | null, url: any, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, name: string, decimals: number, address: any } } } | null }> };

export type CreatePublicPostMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;


export type CreatePublicPostMutation = { __typename?: 'Mutation', createPostTypedData: { __typename?: 'CreatePostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreatePostEIP712TypedData', types: { __typename?: 'CreatePostEIP712TypedDataTypes', PostWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreatePostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, collectModule: any, collectModuleData: any, referenceModule: any, referenceModuleData: any } } } };

export type PublicationQueryVariables = Exact<{
  request: PublicationQueryRequest;
}>;


export type PublicationQuery = { __typename?: 'Query', publication?: { __typename: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | null };

export type PublicationsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
}>;


export type PublicationsQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount: number } } };

export type ExplorePublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
}>;


export type ExplorePublicationsQuery = { __typename?: 'Query', explorePublications: { __typename?: 'ExplorePublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount: number } } };

export type MediaFieldsFragment = { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null };

export type PublicationStatsFieldsFragment = { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number };

export type MetadataOutputFieldsFragment = { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> };

export type Erc20FieldsFragment = { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any };

type CollectModuleFields_EmptyCollectModuleSettings_Fragment = { __typename: 'EmptyCollectModuleSettings', type: CollectModules };

type CollectModuleFields_FeeCollectModuleSettings_Fragment = { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename: 'RevertCollectModuleSettings', type: CollectModules };

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

export type CollectModuleFieldsFragment = CollectModuleFields_EmptyCollectModuleSettings_Fragment | CollectModuleFields_FeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment | CollectModuleFields_RevertCollectModuleSettings_Fragment | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment;

export type PostFieldsFragment = { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type MirrorBaseFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type CommentBaseFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type CommentMirrorOfFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null };

export type TimelineQueryVariables = Exact<{
  request: TimelineRequest;
}>;


export type TimelineQuery = { __typename?: 'Query', timeline: { __typename?: 'PaginatedTimelineResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, location?: string | null, website?: string | null, twitterUrl?: any | null, handle: any, ownedBy: any, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null } | { __typename?: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, depatcher?: { __typename?: 'Dispatcher', address: any } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null }, small?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null, medium?: { __typename?: 'Media', url: any, width?: number | null, height?: number | null, mimeType?: any | null } | null }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: MetadataDisplayType | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'EmptyCollectModuleSettings', type: CollectModules } | { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } }, referenceModule?: { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount: number } } };

export const MediaFieldsFragmentDoc = gql`
    fragment MediaFields on Media {
  url
  width
  height
  mimeType
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Profile {
  id
  name
  bio
  location
  website
  twitterUrl
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  depatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
  }
}
    ${MediaFieldsFragmentDoc}`;
export const PublicationStatsFieldsFragmentDoc = gql`
    fragment PublicationStatsFields on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
export const MetadataOutputFieldsFragmentDoc = gql`
    fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}
    ${MediaFieldsFragmentDoc}`;
export const Erc20FieldsFragmentDoc = gql`
    fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}
    `;
export const CollectModuleFieldsFragmentDoc = gql`
    fragment CollectModuleFields on CollectModule {
  __typename
  ... on EmptyCollectModuleSettings {
    type
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
}
    ${Erc20FieldsFragmentDoc}`;
export const MirrorBaseFieldsFragmentDoc = gql`
    fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const CommentBaseFieldsFragmentDoc = gql`
    fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const CommentMirrorOfFieldsFragmentDoc = gql`
    fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
    }
  }
}
    ${CommentBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentMirrorOfFields
        }
      }
    }
  }
}
    ${CommentBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}
${CommentMirrorOfFieldsFragmentDoc}`;
export const MirrorFieldsFragmentDoc = gql`
    fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${MirrorBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
export const ChallengeDocument = gql`
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
      }
export function useChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
        }
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<typeof useChallengeLazyQuery>;
export type ChallengeQueryResult = Apollo.QueryResult<ChallengeQuery, ChallengeQueryVariables>;
export const AuthenticationDocument = gql`
    mutation Authentication($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export type AuthenticationMutationFn = Apollo.MutationFunction<AuthenticationMutation, AuthenticationMutationVariables>;

/**
 * __useAuthenticationMutation__
 *
 * To run a mutation, you first call `useAuthenticationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticationMutation, { data, loading, error }] = useAuthenticationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticationMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticationMutation, AuthenticationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticationMutation, AuthenticationMutationVariables>(AuthenticationDocument, options);
      }
export type AuthenticationMutationHookResult = ReturnType<typeof useAuthenticationMutation>;
export type AuthenticationMutationResult = Apollo.MutationResult<AuthenticationMutation>;
export type AuthenticationMutationOptions = Apollo.BaseMutationOptions<AuthenticationMutation, AuthenticationMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshMutationFn = Apollo.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: Apollo.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const VerifyDocument = gql`
    query Verify($request: VerifyRequest!) {
  verify(request: $request)
}
    `;

/**
 * __useVerifyQuery__
 *
 * To run a query within a React component, call `useVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyQuery(baseOptions: Apollo.QueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
      }
export function useVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
        }
export type VerifyQueryHookResult = ReturnType<typeof useVerifyQuery>;
export type VerifyLazyQueryHookResult = ReturnType<typeof useVerifyLazyQuery>;
export type VerifyQueryResult = Apollo.QueryResult<VerifyQuery, VerifyQueryVariables>;
export const HasTxHashBeenIndexedDocument = gql`
    query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
  hasTxHashBeenIndexed(request: $request) {
    ... on TransactionIndexedResult {
      indexed
      txReceipt {
        to
        from
        contractAddress
        transactionIndex
        root
        gasUsed
        logsBloom
        blockHash
        transactionHash
        blockNumber
        confirmations
        cumulativeGasUsed
        effectiveGasPrice
        byzantium
        type
        status
        logs {
          blockNumber
          blockHash
          transactionIndex
          removed
          address
          data
          topics
          transactionHash
          logIndex
        }
      }
      metadataStatus {
        status
        reason
      }
    }
    ... on TransactionError {
      reason
      txReceipt {
        to
        from
        contractAddress
        transactionIndex
        root
        gasUsed
        logsBloom
        blockHash
        transactionHash
        blockNumber
        confirmations
        cumulativeGasUsed
        effectiveGasPrice
        byzantium
        type
        status
        logs {
          blockNumber
          blockHash
          transactionIndex
          removed
          address
          data
          topics
          transactionHash
          logIndex
        }
      }
    }
    __typename
  }
}
    `;

/**
 * __useHasTxHashBeenIndexedQuery__
 *
 * To run a query within a React component, call `useHasTxHashBeenIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasTxHashBeenIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasTxHashBeenIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasTxHashBeenIndexedQuery(baseOptions: Apollo.QueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(HasTxHashBeenIndexedDocument, options);
      }
export function useHasTxHashBeenIndexedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(HasTxHashBeenIndexedDocument, options);
        }
export type HasTxHashBeenIndexedQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedQuery>;
export type HasTxHashBeenIndexedLazyQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedLazyQuery>;
export type HasTxHashBeenIndexedQueryResult = Apollo.QueryResult<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const EnabledModulesDocument = gql`
    query EnabledModules {
  enabledModules {
    collectModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
    followModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
    referenceModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
  }
}
    `;

/**
 * __useEnabledModulesQuery__
 *
 * To run a query within a React component, call `useEnabledModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEnabledModulesQuery(baseOptions?: Apollo.QueryHookOptions<EnabledModulesQuery, EnabledModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnabledModulesQuery, EnabledModulesQueryVariables>(EnabledModulesDocument, options);
      }
export function useEnabledModulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnabledModulesQuery, EnabledModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnabledModulesQuery, EnabledModulesQueryVariables>(EnabledModulesDocument, options);
        }
export type EnabledModulesQueryHookResult = ReturnType<typeof useEnabledModulesQuery>;
export type EnabledModulesLazyQueryHookResult = ReturnType<typeof useEnabledModulesLazyQuery>;
export type EnabledModulesQueryResult = Apollo.QueryResult<EnabledModulesQuery, EnabledModulesQueryVariables>;
export const EnabledModuleCurrenciesDocument = gql`
    query EnabledModuleCurrencies {
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;

/**
 * __useEnabledModuleCurrenciesQuery__
 *
 * To run a query within a React component, call `useEnabledModuleCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledModuleCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledModuleCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEnabledModuleCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<EnabledModuleCurrenciesQuery, EnabledModuleCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnabledModuleCurrenciesQuery, EnabledModuleCurrenciesQueryVariables>(EnabledModuleCurrenciesDocument, options);
      }
export function useEnabledModuleCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnabledModuleCurrenciesQuery, EnabledModuleCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnabledModuleCurrenciesQuery, EnabledModuleCurrenciesQueryVariables>(EnabledModuleCurrenciesDocument, options);
        }
export type EnabledModuleCurrenciesQueryHookResult = ReturnType<typeof useEnabledModuleCurrenciesQuery>;
export type EnabledModuleCurrenciesLazyQueryHookResult = ReturnType<typeof useEnabledModuleCurrenciesLazyQuery>;
export type EnabledModuleCurrenciesQueryResult = Apollo.QueryResult<EnabledModuleCurrenciesQuery, EnabledModuleCurrenciesQueryVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ... on RelayerResult {
      txHash
    }
    ... on RelayError {
      reason
    }
    __typename
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const ProfileDocument = gql`
    query Profile($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      id
      name
      bio
      location
      website
      twitterUrl
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      depatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        __typename
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RecommendedProfilesDocument = gql`
    query RecommendedProfiles {
  recommendedProfiles {
    id
    name
    bio
    location
    website
    twitterUrl
    picture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          width
          height
          mimeType
        }
        small {
          url
          width
          height
          mimeType
        }
        medium {
          url
          width
          height
          mimeType
        }
      }
      __typename
    }
    handle
    coverPicture {
      ... on NftImage {
        contractAddress
        tokenId
        uri
        verified
      }
      ... on MediaSet {
        original {
          url
          width
          height
          mimeType
        }
        small {
          height
          width
          url
          mimeType
        }
        medium {
          url
          width
          height
          mimeType
        }
      }
      __typename
    }
    ownedBy
    depatcher {
      address
      canUseRelay
    }
    stats {
      totalFollowers
      totalFollowing
      totalPosts
      totalComments
      totalMirrors
      totalPublications
      totalCollects
    }
    followModule {
      ... on FeeFollowModuleSettings {
        type
        amount {
          asset {
            symbol
            name
            decimals
            address
          }
          value
        }
        recipient
      }
      __typename
    }
  }
}
    `;

/**
 * __useRecommendedProfilesQuery__
 *
 * To run a query within a React component, call `useRecommendedProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendedProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendedProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommendedProfilesQuery(baseOptions?: Apollo.QueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(RecommendedProfilesDocument, options);
      }
export function useRecommendedProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>(RecommendedProfilesDocument, options);
        }
export type RecommendedProfilesQueryHookResult = ReturnType<typeof useRecommendedProfilesQuery>;
export type RecommendedProfilesLazyQueryHookResult = ReturnType<typeof useRecommendedProfilesLazyQuery>;
export type RecommendedProfilesQueryResult = Apollo.QueryResult<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>;
export const CreatePublicPostDocument = gql`
    mutation CreatePublicPost($request: CreatePublicPostRequest!) {
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleData
        referenceModule
        referenceModuleData
      }
    }
  }
}
    `;
export type CreatePublicPostMutationFn = Apollo.MutationFunction<CreatePublicPostMutation, CreatePublicPostMutationVariables>;

/**
 * __useCreatePublicPostMutation__
 *
 * To run a mutation, you first call `useCreatePublicPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublicPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublicPostMutation, { data, loading, error }] = useCreatePublicPostMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreatePublicPostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublicPostMutation, CreatePublicPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePublicPostMutation, CreatePublicPostMutationVariables>(CreatePublicPostDocument, options);
      }
export type CreatePublicPostMutationHookResult = ReturnType<typeof useCreatePublicPostMutation>;
export type CreatePublicPostMutationResult = Apollo.MutationResult<CreatePublicPostMutation>;
export type CreatePublicPostMutationOptions = Apollo.BaseMutationOptions<CreatePublicPostMutation, CreatePublicPostMutationVariables>;
export const PublicationDocument = gql`
    query Publication($request: PublicationQueryRequest!) {
  publication(request: $request) {
    __typename
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
    ... on Mirror {
      ...MirrorFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;

/**
 * __usePublicationQuery__
 *
 * To run a query within a React component, call `usePublicationQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationQuery(baseOptions: Apollo.QueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
      }
export function usePublicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationQuery, PublicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicationQuery, PublicationQueryVariables>(PublicationDocument, options);
        }
export type PublicationQueryHookResult = ReturnType<typeof usePublicationQuery>;
export type PublicationLazyQueryHookResult = ReturnType<typeof usePublicationLazyQuery>;
export type PublicationQueryResult = Apollo.QueryResult<PublicationQuery, PublicationQueryVariables>;
export const PublicationsDocument = gql`
    query Publications($request: PublicationsQueryRequest!) {
  publications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;

/**
 * __usePublicationsQuery__
 *
 * To run a query within a React component, call `usePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationsQuery(baseOptions: Apollo.QueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
      }
export function usePublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationsQuery, PublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicationsQuery, PublicationsQueryVariables>(PublicationsDocument, options);
        }
export type PublicationsQueryHookResult = ReturnType<typeof usePublicationsQuery>;
export type PublicationsLazyQueryHookResult = ReturnType<typeof usePublicationsLazyQuery>;
export type PublicationsQueryResult = Apollo.QueryResult<PublicationsQuery, PublicationsQueryVariables>;
export const ExplorePublicationsDocument = gql`
    query ExplorePublications($request: ExplorePublicationRequest!) {
  explorePublications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;

/**
 * __useExplorePublicationsQuery__
 *
 * To run a query within a React component, call `useExplorePublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExplorePublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExplorePublicationsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useExplorePublicationsQuery(baseOptions: Apollo.QueryHookOptions<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(ExplorePublicationsDocument, options);
      }
export function useExplorePublicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>(ExplorePublicationsDocument, options);
        }
export type ExplorePublicationsQueryHookResult = ReturnType<typeof useExplorePublicationsQuery>;
export type ExplorePublicationsLazyQueryHookResult = ReturnType<typeof useExplorePublicationsLazyQuery>;
export type ExplorePublicationsQueryResult = Apollo.QueryResult<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>;
export const TimelineDocument = gql`
    query Timeline($request: TimelineRequest!) {
  timeline(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;

/**
 * __useTimelineQuery__
 *
 * To run a query within a React component, call `useTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimelineQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useTimelineQuery(baseOptions: Apollo.QueryHookOptions<TimelineQuery, TimelineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options);
      }
export function useTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimelineQuery, TimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimelineQuery, TimelineQueryVariables>(TimelineDocument, options);
        }
export type TimelineQueryHookResult = ReturnType<typeof useTimelineQuery>;
export type TimelineLazyQueryHookResult = ReturnType<typeof useTimelineLazyQuery>;
export type TimelineQueryResult = Apollo.QueryResult<TimelineQuery, TimelineQueryVariables>;