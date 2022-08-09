/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialAssetWhereUniqueInput } from "../../financialAsset/base/FinancialAssetWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CurrencyUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FinancialAssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FinancialAssetWhereUniqueInput)
  @IsOptional()
  @Field(() => FinancialAssetWhereUniqueInput, {
    nullable: true,
  })
  financialAssets?: FinancialAssetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string | null;
}
export { CurrencyUpdateInput };
