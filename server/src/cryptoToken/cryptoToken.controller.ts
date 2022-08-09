import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CryptoTokenService } from "./cryptoToken.service";
import { CryptoTokenControllerBase } from "./base/cryptoToken.controller.base";

@swagger.ApiTags("cryptoTokens")
@common.Controller("cryptoTokens")
export class CryptoTokenController extends CryptoTokenControllerBase {
  constructor(
    protected readonly service: CryptoTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
