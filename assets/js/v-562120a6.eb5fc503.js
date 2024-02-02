"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20810],{949598:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-562120a6","path":"/devices/L101Z-DBN.html","title":"Lytko L101Z-DBN control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lytko L101Z-DBN control via MQTT","description":"Integrate your Lytko L101Z-DBN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-01T13:40:11.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate (l3 endpoint)","slug":"climate-l3-endpoint","link":"#climate-l3-endpoint","children":[]},{"level":3,"title":"Min setpoint deadband (numeric, l3 endpoint)","slug":"min-setpoint-deadband-numeric-l3-endpoint","link":"#min-setpoint-deadband-numeric-l3-endpoint","children":[]},{"level":3,"title":"Sensor type (enum, l3 endpoint)","slug":"sensor-type-enum-l3-endpoint","link":"#sensor-type-enum-l3-endpoint","children":[]},{"level":3,"title":"Target temp first (binary, l3 endpoint)","slug":"target-temp-first-binary-l3-endpoint","link":"#target-temp-first-binary-l3-endpoint","children":[]},{"level":3,"title":"Climate (l4 endpoint)","slug":"climate-l4-endpoint","link":"#climate-l4-endpoint","children":[]},{"level":3,"title":"Min setpoint deadband (numeric, l4 endpoint)","slug":"min-setpoint-deadband-numeric-l4-endpoint","link":"#min-setpoint-deadband-numeric-l4-endpoint","children":[]},{"level":3,"title":"Sensor type (enum, l4 endpoint)","slug":"sensor-type-enum-l4-endpoint","link":"#sensor-type-enum-l4-endpoint","children":[]},{"level":3,"title":"Target temp first (binary, l4 endpoint)","slug":"target-temp-first-binary-l4-endpoint","link":"#target-temp-first-binary-l4-endpoint","children":[]},{"level":3,"title":"Keypad lockout (enum, l1 endpoint)","slug":"keypad-lockout-enum-l1-endpoint","link":"#keypad-lockout-enum-l1-endpoint","children":[]},{"level":3,"title":"Brightness (numeric, l1 endpoint)","slug":"brightness-numeric-l1-endpoint","link":"#brightness-numeric-l1-endpoint","children":[]},{"level":3,"title":"Brightness standby (numeric, l1 endpoint)","slug":"brightness-standby-numeric-l1-endpoint","link":"#brightness-standby-numeric-l1-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1706882065000},"filePathRelative":"devices/L101Z-DBN.md"}')},970243:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var d=o(166252);const i=(0,d._)("h1",{id:"lytko-l101z-dbn",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#lytko-l101z-dbn","aria-hidden":"true"},"#"),(0,d.Uk)(" Lytko L101Z-DBN")],-1),a=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th"),(0,d._)("th")])],-1),n=(0,d._)("tr",null,[(0,d._)("td",null,"Model"),(0,d._)("td",null,"L101Z-DBN")],-1),c=(0,d._)("td",null,"Vendor",-1),l=(0,d._)("tr",null,[(0,d._)("td",null,"Description"),(0,d._)("td",null,"Dual channel zigbee thermostat")],-1),s=(0,d._)("tr",null,[(0,d._)("td",null,"Exposes"),(0,d._)("td",null,"climate (local_temperature, occupied_heating_setpoint, system_mode, running_mode, local_temperature_calibration), min_setpoint_deadband, sensor_type, target_temp_first, keypad_lockout, brightness, brightness_standby, linkquality")],-1),u=(0,d._)("tr",null,[(0,d._)("td",null,"Picture"),(0,d._)("td",null,[(0,d._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/L101Z-DBN.jpg",alt:"Lytko L101Z-DBN"})])],-1),r=(0,d._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,d.Uk)(" OTA updates")],-1),p=(0,d._)("h2",{id:"options",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,d.Uk)(" Options")],-1),h=(0,d.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-l3-endpoint" aria-hidden="true">#</a> Climate (l3 endpoint)</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_l3&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration_l3&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="min-setpoint-deadband-numeric-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#min-setpoint-deadband-numeric-l3-endpoint" aria-hidden="true">#</a> Min setpoint deadband (numeric, l3 endpoint)</h3><p>Hysteresis setting. Value can be found in the published state on the <code>min_setpoint_deadband_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3</code>. The unit of this value is <code>C</code>.</p><h3 id="sensor-type-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#sensor-type-enum-l3-endpoint" aria-hidden="true">#</a> Sensor type (enum, l3 endpoint)</h3><p>Type of sensor. Sensor resistance value (kOhm). Value can be found in the published state on the <code>sensor_type_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_type_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_type_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>3.3</code>, <code>5</code>, <code>6.8</code>, <code>10</code>, <code>12</code>, <code>14.8</code>, <code>15</code>, <code>20</code>, <code>33</code>, <code>47</code>.</p><h3 id="target-temp-first-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#target-temp-first-binary-l3-endpoint" aria-hidden="true">#</a> Target temp first (binary, l3 endpoint)</h3><p>Display current temperature or target temperature. Value can be found in the published state on the <code>target_temp_first_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;target_temp_first_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;target_temp_first_l3&quot;: NEW_VALUE}</code>. If value equals <code>true</code> target temp first is ON, if <code>false</code> OFF.</p><h3 id="climate-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-l4-endpoint" aria-hidden="true">#</a> Climate (l4 endpoint)</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_l4&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_l4&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l4&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_l4&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_l4&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration_l4&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l4&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="min-setpoint-deadband-numeric-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#min-setpoint-deadband-numeric-l4-endpoint" aria-hidden="true">#</a> Min setpoint deadband (numeric, l4 endpoint)</h3><p>Hysteresis setting. Value can be found in the published state on the <code>min_setpoint_deadband_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_setpoint_deadband_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_setpoint_deadband_l4&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3</code>. The unit of this value is <code>C</code>.</p><h3 id="sensor-type-enum-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#sensor-type-enum-l4-endpoint" aria-hidden="true">#</a> Sensor type (enum, l4 endpoint)</h3><p>Type of sensor. Sensor resistance value (kOhm). Value can be found in the published state on the <code>sensor_type_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_type_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_type_l4&quot;: NEW_VALUE}</code>. The possible values are: <code>3.3</code>, <code>5</code>, <code>6.8</code>, <code>10</code>, <code>12</code>, <code>14.8</code>, <code>15</code>, <code>20</code>, <code>33</code>, <code>47</code>.</p><h3 id="target-temp-first-binary-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#target-temp-first-binary-l4-endpoint" aria-hidden="true">#</a> Target temp first (binary, l4 endpoint)</h3><p>Display current temperature or target temperature. Value can be found in the published state on the <code>target_temp_first_l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;target_temp_first_l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;target_temp_first_l4&quot;: NEW_VALUE}</code>. If value equals <code>true</code> target temp first is ON, if <code>false</code> OFF.</p><h3 id="keypad-lockout-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum-l1-endpoint" aria-hidden="true">#</a> Keypad lockout (enum, l1 endpoint)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p><h3 id="brightness-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#brightness-numeric-l1-endpoint" aria-hidden="true">#</a> Brightness (numeric, l1 endpoint)</h3><p>Display brightness. Value can be found in the published state on the <code>brightness_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="brightness-standby-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#brightness-standby-numeric-l1-endpoint" aria-hidden="true">#</a> Brightness standby (numeric, l1 endpoint)</h3><p>Display brightness in standby mode. Value can be found in the published state on the <code>brightness_standby_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_standby_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_standby_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),m={},_=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)("div",null,[(0,d.kq)(" !!!! "),(0,d.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,d.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,d.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,d.kq)(" !!!! "),i,(0,d._)("table",null,[a,(0,d._)("tbody",null,[n,(0,d._)("tr",null,[c,(0,d._)("td",null,[(0,d.Wm)(o,{to:"/supported-devices/#v=Lytko"},{default:(0,d.w5)((()=>[(0,d.Uk)("Lytko")])),_:1})])]),l,s,u])]),(0,d.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,d.kq)(" Notes END: Do not edit below this line "),r,(0,d._)("p",null,[(0,d.Uk)("This device supports OTA updates, for more information see "),(0,d.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.w5)((()=>[(0,d.Uk)("OTA updates")])),_:1}),(0,d.Uk)(".")]),p,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[(0,d.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);