import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FinancialAssetResolverBase } from "./base/financialAsset.resolver.base";
import { FinancialAsset } from "./base/FinancialAsset";
import { FinancialAssetService } from "./financialAsset.service";

@graphql.Resolver(() => FinancialAsset)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FinancialAssetResolver extends FinancialAssetResolverBase {
  constructor(
    protected readonly service: FinancialAssetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
