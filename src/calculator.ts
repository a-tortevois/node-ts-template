export class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }

  public sub(a:number, b:number): number {
    return a - b;
  }

  public mul(a:number, b:number): number {
    return a * b;
  }

  public div(a:number, b:number): number {
    if(b === 0) {
      throw new RangeError('Division by zero');
    }
    return a / b;
  }
}
