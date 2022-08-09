import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FinancialAssetService } from "./financialAsset.service";
import { FinancialAssetControllerBase } from "./base/financialAsset.controller.base";

@swagger.ApiTags("financialAssets")
@common.Controller("financialAssets")
export class FinancialAssetController extends FinancialAssetControllerBase {
  constructor(
    protected readonly service: FinancialAssetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
