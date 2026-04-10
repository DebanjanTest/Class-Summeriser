(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5987:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>r.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),n(2232),n(7764),n(5866);var s=n(3191),i=n(8716),o=n(7922),r=n.n(o),a=n(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,2232)),"/workspaces/Class-Summeriser/app/page.js"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,7764)),"/workspaces/Class-Summeriser/app/layout.js"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,5866,23)),"next/dist/client/components/not-found-error"]}],d=["/workspaces/Class-Summeriser/app/page.js"],u="/page",h={require:n,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4013:(e,t,n)=>{Promise.resolve().then(n.bind(n,8508))},6325:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2994,23)),Promise.resolve().then(n.t.bind(n,6114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,9671,23)),Promise.resolve().then(n.t.bind(n,1868,23)),Promise.resolve().then(n.t.bind(n,4759,23))},5303:()=>{},8508:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var s,i,o,r,a,l,c,d,u,h=n(326),p=n(7577);/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f=["user","model","function","system"];(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(s||(s={})),function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"}(i||(i={})),function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"}(o||(o={})),function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"}(r||(r={})),function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"}(a||(a={})),function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"}(l||(l={})),function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"}(c||(c={})),function(e){e.STRING="STRING",e.NUMBER="NUMBER",e.INTEGER="INTEGER",e.BOOLEAN="BOOLEAN",e.ARRAY="ARRAY",e.OBJECT="OBJECT"}(d||(d={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class g extends m{constructor(e,t){super(e),this.response=t}}class E extends m{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class y extends m{}!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(u||(u={}));class C{constructor(e,t,n,s,i){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=i}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",s=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",i=`${s}/${n}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}async function _(e){let t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.11.5"),t.join(" ")}(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let n=e.requestOptions.customHeaders;if(n){if(!(n instanceof Headers))try{n=new Headers(n)}catch(e){throw new y(`unable to convert customHeaders value ${JSON.stringify(n)} to Headers: ${e.message}`)}for(let[e,s]of n.entries()){if("x-goog-api-key"===e)throw new y(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new y(`Header name ${e} can only be set using the apiClient field`);t.append(e,s)}}return t}async function O(e,t,n,s,i,o){let r=new C(e,t,n,s,o);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=s}return t}(o)),{method:"POST",headers:await _(r),body:i})}}async function T(e,t,n,s,i,o){return S(e,t,n,s,i,o,fetch)}async function S(e,t,n,s,i,o,r=fetch){let a;let l=new C(e,t,n,s,o);try{let c=await O(e,t,n,s,i,o);if(!(a=await r(c.url,c.fetchOptions)).ok){let e,t="";try{let n=await a.json();t=n.error.message,n.error.details&&(t+=` ${JSON.stringify(n.error.details)}`,e=n.error.details)}catch(e){}throw new E(`Error fetching from ${l.toString()}: [${a.status} ${a.statusText}] ${t}`,a.status,a.statusText,e)}}catch(t){let e=t;throw t instanceof E||t instanceof y||((e=new m(`Error fetching from ${l.toString()}: ${t.message}`)).stack=t.stack),e}return a}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new g(`${N(e)}`,e);return function(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.text&&o.push(t.text);return o.length>0?o.join(""):""}(e)}if(e.promptFeedback)throw new g(`Text not available. ${N(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new g(`${N(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),I(e)[0]}if(e.promptFeedback)throw new g(`Function call not available. ${N(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new g(`${N(e)}`,e);return I(e)}if(e.promptFeedback)throw new g(`Function call not available. ${N(e)}`,e)},e}function I(e){var t,n,s,i;let o=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(i=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===i?void 0:i.parts)t.functionCall&&o.push(t.functionCall);return o.length>0?o:void 0}let R=[a.RECITATION,a.SAFETY];function A(e){return!!e.finishReason&&R.includes(e.finishReason)}function N(e){var t,n,s;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];A(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function w(e){return this instanceof w?(this.v=e,this):new w(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function b(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return v(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let i of e.content.parts)i.text&&(s.text=i.text),i.functionCall&&(s.functionCall=i.functionCall),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M(e,t,n,s){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then(({value:t,done:i})=>{let o;if(i){if(n.trim()){e.error(new m("Failed to parse stream"));return}e.close();return}let r=(n+=t).match(x);for(;r;){try{o=JSON.parse(r[1])}catch(t){e.error(new m(`Error parsing JSON response: "${r[1]}"`));return}e.enqueue(o),r=(n=n.substring(r[0].length)).match(x)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,i=n.apply(e,t||[]),o=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(e){i[e]&&(s[e]=function(t){return new Promise(function(n,s){o.push([e,t,n,s])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof w?Promise.resolve(n.value.v).then(l,c):d(o[0][2],n)}catch(e){d(o[0][3],e)}}function l(e){a("next",e)}function c(e){a("throw",e)}function d(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield w(t.read());if(n)break;yield yield w(v(e))}})}(t),response:b(n)}}(await T(t,u.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function P(e,t,n,s){let i=await T(t,u.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:v(await i.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function L(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},s=!1,i=!1;for(let o of e)"functionResponse"in o?(n.parts.push(o),i=!0):(t.parts.push(o),s=!0);if(s&&i)throw new m("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!i)throw new m("No content is provided for sending chat message.");return s?t:n}(t)}function j(e){let t;return t=e.contents?e:{contents:[L(e)]},e.systemInstruction&&(t.systemInstruction=H(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D=["text","inlineData","functionCall","functionResponse"],G={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"],system:["text"]},F="SILENT_ERROR";class k{constructor(e,t,n,s){this.model=t,this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:s}=n;if(!t&&"user"!==e)throw new m(`First content should be with role 'user', got ${e}`);if(!f.includes(e))throw new m(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(f)}`);if(!Array.isArray(s))throw new m("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new m("Each Content should have at least one part");let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0};for(let e of s)for(let t of D)t in e&&(i[t]+=1);let o=G[e];for(let t of D)if(!o.includes(t)&&i[t]>0)throw new m(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n,s,i,o;let r;await this._sendPromise;let a=L(e),l={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,a]};return this._sendPromise=this._sendPromise.then(()=>P(this._apiKey,this.model,l,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(a);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=N(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}r=e}),await this._sendPromise,r}async sendMessageStream(e){var t,n,s,i,o;await this._sendPromise;let r=L(e),a={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(o=this.params)||void 0===o?void 0:o.systemInstruction,contents:[...this._history,r]},l=M(this._apiKey,this.model,a,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>l).catch(e=>{throw Error(F)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(r);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=N(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==F&&console.error(e)}),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t,n,s){return(await T(t,u.COUNT_TOKENS,e,!1,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t,n,s){return(await T(t,u.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}async function B(e,t,n,s){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await T(t,u.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=H(t.systemInstruction),this.requestOptions=n||{}}async generateContent(e){let t=j(e);return P(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},t),this.requestOptions)}async generateContentStream(e){let t=j(e);return M(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},t),this.requestOptions)}startChat(e){return new k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction},e),this.requestOptions)}async countTokens(e){let t=j(e);return U(this.apiKey,this.model,t,this.requestOptions)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:L(e)}:e;return $(this.apiKey,this.model,t,this.requestOptions)}async batchEmbedContents(e){return B(this.apiKey,this.model,e,this.requestOptions)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new m("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Y(this.apiKey,e,t)}}let q=new K(process.env.NEXT_PUBLIC_GEMINI_API_KEY);function J(){let[e,t]=(0,p.useState)(!1),[n,s]=(0,p.useState)(null),[i,o]=(0,p.useState)(!1),[r,a]=(0,p.useState)(null),l=(0,p.useRef)(null),c=(0,p.useRef)([]),d=async()=>{let e=await navigator.mediaDevices.getUserMedia({audio:!0});l.current=new MediaRecorder(e),l.current.ondataavailable=e=>{c.current.push(e.data)},l.current.onstop=()=>{a(new Blob(c.current,{type:"audio/mp3"})),c.current=[]},l.current.start(),t(!0)},u=async()=>{if(!r){alert("Please record or upload an audio file first.");return}o(!0),s(null);try{let e=await r.arrayBuffer(),t={inlineData:{data:Buffer.from(e).toString("base64"),mimeType:"audio/mp3"}},n=q.getGenerativeModel({model:"gemini-1.5-flash"}),i=`
        You are a helpful education assistant. Your task is to summarize a class lecture.
        Based on the provided audio transcription, please provide a comprehensive summary with the following sections:
        1. Class Summary: A short, paragraph-long summary of the main topics.
        2. Topics Taught: A bulleted list of the key concepts covered.
        3. Points to Remember: A bulleted list of the most important takeaways and key terms.
        4. Important Exam Questions: Three to five potential questions that could be on a test, based on the content.
      `,o=await n.generateContent([i,t]),a=await o.response;s(a.text())}catch(e){console.error("Error generating summary:",e),alert("Failed to generate summary. Please try again.")}finally{o(!1)}};return(0,h.jsxs)("div",{style:{padding:"2rem",fontFamily:"sans-serif"},children:[h.jsx("h1",{children:"Class Notes AI"}),h.jsx("p",{children:"Record your lecture or upload an audio file to get a detailed summary."}),(0,h.jsxs)("div",{style:{marginTop:"2rem"},children:[h.jsx("button",{onClick:e?()=>{l.current.stop(),t(!1)}:d,style:{padding:"10px 20px",fontSize:"1rem",cursor:"pointer",marginRight:"1rem"},children:e?"Stop Recording":"Start Recording"}),h.jsx("input",{type:"file",accept:"audio/*",onChange:e=>a(e.target.files[0])}),r&&(0,h.jsxs)("p",{children:["File selected: ",r.name]})]}),h.jsx("button",{onClick:u,disabled:i||!r,style:{marginTop:"2rem",padding:"10px 20px",fontSize:"1rem",cursor:"pointer"},children:i?"Summarizing...":"Generate Summary"}),n&&(0,h.jsxs)("div",{style:{marginTop:"2rem",whiteSpace:"pre-wrap",border:"1px solid #ccc",padding:"1rem"},children:[h.jsx("h2",{children:"Summary:"}),h.jsx("pre",{children:n})]})]})}},7764:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var s=n(9510);function i({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:e})})}!function(){var e=Error("Cannot find module './globals.css'");throw e.code="MODULE_NOT_FOUND",e}()},2232:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>r,__esModule:()=>o,default:()=>a});var s=n(8570);let i=(0,s.createProxy)(String.raw`/workspaces/Class-Summeriser/app/page.js`),{__esModule:o,$$typeof:r}=i;i.default;let a=(0,s.createProxy)(String.raw`/workspaces/Class-Summeriser/app/page.js#default`)}};var t=require("../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),s=t.X(0,[819],()=>n(5987));module.exports=s})();