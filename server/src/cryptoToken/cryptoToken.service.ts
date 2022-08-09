import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CryptoTokenServiceBase } from "./base/cryptoToken.service.base";

@Injectable()
export class CryptoTokenService extends CryptoTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
