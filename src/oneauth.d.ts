import OneAuth from "@oneauth/sdk-core";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $oneAuth: OneAuth;
  }
}
