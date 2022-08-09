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
import { CreateCryptoTokenArgs } from "./CreateCryptoTokenArgs";
import { UpdateCryptoTokenArgs } from "./UpdateCryptoTokenArgs";
import { DeleteCryptoTokenArgs } from "./DeleteCryptoTokenArgs";
import { CryptoTokenFindManyArgs } from "./CryptoTokenFindManyArgs";
import { CryptoTokenFindUniqueArgs } from "./CryptoTokenFindUniqueArgs";
import { CryptoToken } from "./CryptoToken";
import { FinancialAsset } from "../../financialAsset/base/FinancialAsset";
import { CryptoTokenService } from "../cryptoToken.service";

@graphql.Resolver(() => CryptoToken)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CryptoTokenResolverBase {
  constructor(
    protected readonly service: CryptoTokenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "read",
    possession: "any",
  })
  async _cryptoTokensMeta(
    @graphql.Args() args: CryptoTokenFindManyArgs
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
  @graphql.Query(() => [CryptoToken])
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "read",
    possession: "any",
  })
  async cryptoTokens(
    @graphql.Args() args: CryptoTokenFindManyArgs
  ): Promise<CryptoToken[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CryptoToken, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "read",
    possession: "own",
  })
  async cryptoToken(
    @graphql.Args() args: CryptoTokenFindUniqueArgs
  ): Promise<CryptoToken | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CryptoToken)
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "create",
    possession: "any",
  })
  async createCryptoToken(
    @graphql.Args() args: CreateCryptoTokenArgs
  ): Promise<CryptoToken> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        financialAssets: args.data.financialAssets
          ? {
              connect: args.data.financialAssets,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CryptoToken)
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "update",
    possession: "any",
  })
  async updateCryptoToken(
    @graphql.Args() args: UpdateCryptoTokenArgs
  ): Promise<CryptoToken | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          financialAssets: args.data.financialAssets
            ? {
                connect: args.data.financialAssets,
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

  @graphql.Mutation(() => CryptoToken)
  @nestAccessControl.UseRoles({
    resource: "CryptoToken",
    action: "delete",
    possession: "any",
  })
  async deleteCryptoToken(
    @graphql.Args() args: DeleteCryptoTokenArgs
  ): Promise<CryptoToken | null> {
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
  @graphql.ResolveField(() => FinancialAsset, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "any",
  })
  async financialAssets(
    @graphql.Parent() parent: CryptoToken
  ): Promise<FinancialAsset | null> {
    const result = await this.service.getFinancialAssets(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
