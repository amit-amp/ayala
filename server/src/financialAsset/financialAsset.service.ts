import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FinancialAssetServiceBase } from "./base/financialAsset.service.base";

@Injectable()
export class FinancialAssetService extends FinancialAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
