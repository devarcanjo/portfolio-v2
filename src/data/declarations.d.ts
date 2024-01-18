/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.woff2" {
  const content: string;
  export default content;
}
