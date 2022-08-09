import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CryptoTokenResolverBase } from "./base/cryptoToken.resolver.base";
import { CryptoToken } from "./base/CryptoToken";
import { CryptoTokenService } from "./cryptoToken.service";

@graphql.Resolver(() => CryptoToken)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CryptoTokenResolver extends CryptoTokenResolverBase {
  constructor(
    protected readonly service: CryptoTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
