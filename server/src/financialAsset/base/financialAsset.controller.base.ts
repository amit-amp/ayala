/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinancialAssetService } from "../financialAsset.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FinancialAssetCreateInput } from "./FinancialAssetCreateInput";
import { FinancialAssetWhereInput } from "./FinancialAssetWhereInput";
import { FinancialAssetWhereUniqueInput } from "./FinancialAssetWhereUniqueInput";
import { FinancialAssetFindManyArgs } from "./FinancialAssetFindManyArgs";
import { FinancialAssetUpdateInput } from "./FinancialAssetUpdateInput";
import { FinancialAsset } from "./FinancialAsset";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FinancialAssetControllerBase {
  constructor(
    protected readonly service: FinancialAssetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialAsset })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FinancialAssetCreateInput
  ): Promise<FinancialAsset> {
    return await this.service.create({
      data: {
        ...data,

        cryptoToken: data.cryptoToken
          ? {
              connect: data.cryptoToken,
            }
          : undefined,

        currency: data.currency
          ? {
              connect: data.currency,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        cryptoToken: {
          select: {
            id: true,
          },
        },

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialAsset] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FinancialAssetFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<FinancialAsset[]> {
    const args = plainToClass(FinancialAssetFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        cryptoToken: {
          select: {
            id: true,
          },
        },

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialAsset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FinancialAssetWhereUniqueInput
  ): Promise<FinancialAsset | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        cryptoToken: {
          select: {
            id: true,
          },
        },

        currency: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinancialAsset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FinancialAssetWhereUniqueInput,
    @common.Body() data: FinancialAssetUpdateInput
  ): Promise<FinancialAsset | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          cryptoToken: data.cryptoToken
            ? {
                connect: data.cryptoToken,
              }
            : undefined,

          currency: data.currency
            ? {
                connect: data.currency,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          cryptoToken: {
            select: {
              id: true,
            },
          },

          currency: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "FinancialAsset",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinancialAsset })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FinancialAssetWhereUniqueInput
  ): Promise<FinancialAsset | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          cryptoToken: {
            select: {
              id: true,
            },
          },

          currency: {
            select: {
              id: true,
            },
          },

          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}