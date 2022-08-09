import { Module } from "@nestjs/common";
import { FinancialAssetModuleBase } from "./base/financialAsset.module.base";
import { FinancialAssetService } from "./financialAsset.service";
import { FinancialAssetController } from "./financialAsset.controller";
import { FinancialAssetResolver } from "./financialAsset.resolver";

@Module({
  imports: [FinancialAssetModuleBase],
  controllers: [FinancialAssetController],
  providers: [FinancialAssetService, FinancialAssetResolver],
  exports: [FinancialAssetService],
})
export class FinancialAssetModule {}
