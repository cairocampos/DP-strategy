import { IFreightStrategy } from "./freight-strategy";

export class Correios implements IFreightStrategy {
  calculate(weight: number): Promise<number> {
    throw new Error("Method not implemented.");
  }
}