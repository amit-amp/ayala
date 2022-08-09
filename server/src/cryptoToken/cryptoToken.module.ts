import { Module } from "@nestjs/common";
import { CryptoTokenModuleBase } from "./base/cryptoToken.module.base";
import { CryptoTokenService } from "./cryptoToken.service";
import { CryptoTokenController } from "./cryptoToken.controller";
import { CryptoTokenResolver } from "./cryptoToken.resolver";

@Module({
  imports: [CryptoTokenModuleBase],
  controllers: [CryptoTokenController],
  providers: [CryptoTokenService, CryptoTokenResolver],
  exports: [CryptoTokenService],
})
export class CryptoTokenModule {}
