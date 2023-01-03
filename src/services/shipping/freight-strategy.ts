export interface IFreightStrategy {
  calculate(weight: number): Promise<number>;
}