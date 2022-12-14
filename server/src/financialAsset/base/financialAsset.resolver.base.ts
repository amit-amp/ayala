/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateFinancialAssetArgs } from "./CreateFinancialAssetArgs";
import { UpdateFinancialAssetArgs } from "./UpdateFinancialAssetArgs";
import { DeleteFinancialAssetArgs } from "./DeleteFinancialAssetArgs";
import { FinancialAssetFindManyArgs } from "./FinancialAssetFindManyArgs";
import { FinancialAssetFindUniqueArgs } from "./FinancialAssetFindUniqueArgs";
import { FinancialAsset } from "./FinancialAsset";
import { CryptoToken } from "../../cryptoToken/base/CryptoToken";
import { Currency } from "../../currency/base/Currency";
import { FinancialAssetService } from "../financialAsset.service";

@graphql.Resolver(() => FinancialAsset)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FinancialAssetResolverBase {
  constructor(
    protected readonly service: FinancialAssetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "any",
  })
  async _financialAssetsMeta(
    @graphql.Args() args: FinancialAssetFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FinancialAsset])
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "any",
  })
  async financialAssets(
    @graphql.Args() args: FinancialAssetFindManyArgs
  ): Promise<FinancialAsset[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FinancialAsset, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "own",
  })
  async financialAsset(
    @graphql.Args() args: FinancialAssetFindUniqueArgs
  ): Promise<FinancialAsset | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialAsset)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "create",
    possession: "any",
  })
  async createFinancialAsset(
    @graphql.Args() args: CreateFinancialAssetArgs
  ): Promise<FinancialAsset> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        cryptoToken: args.data.cryptoToken
          ? {
              connect: args.data.cryptoToken,
            }
          : undefined,

        currency: args.data.currency
          ? {
              connect: args.data.currency,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialAsset)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "update",
    possession: "any",
  })
  async updateFinancialAsset(
    @graphql.Args() args: UpdateFinancialAssetArgs
  ): Promise<FinancialAsset | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          cryptoToken: args.data.cryptoToken
            ? {
                connect: args.data.cryptoToken,
              }
            : undefined,

          currency: args.data.currency
            ? {
                connect: args.data.currency,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FinancialAsset)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "delete",
    possession: "any",
  })
  async deleteFinancialAsset(
    @graphql.Args() args: DeleteFinancialAssetArgs
  ): Promise<FinancialAsset | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CryptoToken, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "read",
    possession: "any",
  })
  async cryptoToken(
    @graphql.Parent() parent: FinancialAsset
  ): Promise<CryptoToken | null> {
    const result = await this.service.getCryptoToken(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Currency, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  async currency(
    @graphql.Parent() parent: FinancialAsset
  ): Promise<Currency | null> {
    const result = await this.service.getCurrency(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
