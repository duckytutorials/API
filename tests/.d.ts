declare module 'bun:test' {
  export function describe(description: string, callback: () => void): void;
  export function expect(actual: any): any;
  export function it(description: string, callback: () => void): void;
}
