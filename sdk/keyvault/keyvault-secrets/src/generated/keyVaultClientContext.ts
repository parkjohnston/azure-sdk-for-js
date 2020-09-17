/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

const packageName = "@azure/keyvault-secrets";
export const packageVersion = "4.2.0-beta.2";

export class KeyVaultClientContext extends coreHttp.ServiceClient {
  apiVersion: string;

  /**
   * Initializes a new instance of the KeyVaultClientContext class.
   * @param apiVersion Client API version.
   * @param [options] The parameter options
   */
  constructor(apiVersion: string, options?: coreHttp.ServiceClientOptions) {
    if (apiVersion == undefined) {
      throw new Error("'apiVersion' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = "{vaultBaseUrl}";
    this.requestContentType = "application/json; charset=utf-8";
    this.apiVersion = apiVersion;
  }
}
