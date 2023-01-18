/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require('path')
const os = require('os')

module.exports = async function (opts) {
  try{
    const pjson = opts.config.pjson

    //set env var for config file path if we have aioConfig
    if(pjson.aioConfig && pjson.aioConfig.basePath && pjson.aioConfig.fileName) {
      process.env.XDG_CONFIG_HOME = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), pjson.aioConfig.basePath)
      process.env.AIO_CONFIG_FILE = process.env.AIO_CONFIG_FILE || path.join(process.env.XDG_CONFIG_HOME, pjson.aioConfig.fileName)
    }

  }catch(e) {
    console.error(e)
  }

}
