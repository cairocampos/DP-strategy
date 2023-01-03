import { IFreightStrategy } from "./freight-strategy";

export class JadLog implements IFreightStrategy {
  calculate(weight: number): Promise<number> {
    throw new Error("Method not implemented.");
  }
}