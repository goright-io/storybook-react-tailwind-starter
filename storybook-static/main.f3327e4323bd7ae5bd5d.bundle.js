(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1077:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1078);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1078:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1079);var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1079:function(module,exports,__webpack_require__){},1080:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(200).configure)([__webpack_require__(1081),__webpack_require__(1082)],module,!1)}).call(this,__webpack_require__(102)(module))},1081:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1081},1082:function(module,exports,__webpack_require__){var map={"./components/Buttons/Button.stories.js":1090,"./components/FormInput/FormInput.stories.js":1085};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1082},1083:function(module,exports,__webpack_require__){},1085:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _Users_sherif_repo_test_storybook_react_tailwind_starter_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(200)),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(206),_FormInput__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(209),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(86),defaultProps={inputValue:"",size:"medium",inputRequired:!1,placeholder:"e.g. email@company.com",setInputValue:function setInputValue(){}},fillProps={inputValue:"Walk dog",size:"medium",inputRequired:!1,inputPlaceholder:"",setInputValue:function setInputValue(){}},design={design:{type:"figma",url:"https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A46"}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("FormInput",module).addParameters({storySource:{source:'import React from "react"\nimport { storiesOf } from "@storybook/react"\nimport { withDesign } from "storybook-addon-designs"\nimport FormInput from "./FormInput"\n\nconst defaultProps = {\n  inputValue: "",\n  size: "medium",\n  inputRequired: false,\n  placeholder: \'e.g. email@company.com\',\n  setInputValue: () => {},\n}\n\nconst fillProps = {\n  inputValue: "Walk dog",\n  size: "medium",\n  inputRequired: false,\n  inputPlaceholder: "",\n  setInputValue: () => {},\n}\n\nconst design = {\n  design: {\n    type: "figma",\n    url:\n      "https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A46",\n  },\n}\n\nstoriesOf("FormInput", module)\n.add("default", () => <FormInput {...defaultProps} /> , design)\n.add("fill", () => <FormInput {...fillProps} />, design)\n  \n\nexport default {\n  title: "Input",\n  component: FormInput,\n  decorators: [withDesign],\n}\n',locationsMap:{fill:{startLoc:{col:5,line:32},endLoc:{col:55,line:32},startBody:{col:13,line:32},endBody:{col:47,line:32}},default:{startLoc:{col:5,line:31},endLoc:{col:62,line:31},startBody:{col:16,line:31},endBody:{col:53,line:31}}}}}).add("default",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_sherif_repo_test_storybook_react_tailwind_starter_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},defaultProps))}),design).add("fill",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_FormInput__WEBPACK_IMPORTED_MODULE_4__.a,Object(_Users_sherif_repo_test_storybook_react_tailwind_starter_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},fillProps))}),design),__webpack_exports__.default={title:"Input",component:_FormInput__WEBPACK_IMPORTED_MODULE_4__.a,decorators:[storybook_addon_designs__WEBPACK_IMPORTED_MODULE_3__.a]}}.call(this,__webpack_require__(148)(module))},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var objectSpread2=__webpack_require__(65),esm=(__webpack_require__(0),__webpack_require__(206)),objectWithoutProperties=__webpack_require__(208),jsx_runtime=(__webpack_require__(1083),__webpack_require__(86)),BASE_BUTTON="rounded outline-none shadow font-normal",BUTTON_PRIMARY="".concat(BASE_BUTTON," bg-black border border-black text-white"),BUTTON_SECONDARY="".concat(BASE_BUTTON," border border-black text-black"),Button_Button=function Button(_ref){var primary=_ref.primary,size=_ref.size,label=_ref.label,props=Object(objectWithoutProperties.a)(_ref,["primary","size","label"]),mode=primary?BUTTON_PRIMARY:BUTTON_SECONDARY,buttonSizes="";"small"===size?buttonSizes="".concat(mode," py-1 px-4 text-sm"):"medium"===size?buttonSizes="".concat(mode," py-2 px-8 text-base"):"large"===size&&(buttonSizes="".concat(mode," py-3 px-12 text-lg"));var buttonClasses=buttonSizes;return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:"button",className:buttonClasses},props),{},{children:label}))};Button_Button.defaultProps={primary:!1,size:"medium",onClick:void 0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/components/Buttons/Button.js"});__webpack_exports__.default={title:"Button",component:Button_Button,decorators:[esm.a]};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object(objectSpread2.a)({},args))},Primary=Button_stories_Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Button_stories_Template.bind({});Secondary.args={label:"Button"};var Large=Button_stories_Template.bind({});Large.args={size:"large",label:"Button"};var Small=Button_stories_Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters={design:{type:"figma",url:"https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4"}},Secondary.parameters={design:{type:"figma",url:"https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4"}},Small.parameters={design:{type:"figma",url:"https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4"}},Large.parameters={design:{type:"figma",url:"https://www.figma.com/file/DxBM5wBgWw2SdPUQ7wBlpY/storrybook?node-id=1%3A4"}},Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},209:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FormInput}));var _Users_sherif_repo_test_storybook_react_tailwind_starter_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(208),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(86));function FormInput(_ref){_ref.size;var inputValue=_ref.inputValue,inputPlaceholder=_ref.inputPlaceholder,inputRequired=_ref.inputRequired,base=(Object(_Users_sherif_repo_test_storybook_react_tailwind_starter_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a)(_ref,["size","inputValue","inputPlaceholder","inputRequired"]),"p-4 text-base border border-blue-500 ".concat(inputRequired?"bg-red-500":"bg-white"));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"text",value:inputValue,className:base,required:!!inputRequired,placeholder:inputPlaceholder||""})}FormInput.defaultProps={size:"medium",onClick:void 0},FormInput.__docgenInfo={description:"",methods:[],displayName:"FormInput",props:{size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:""},inputPlaceholder:{type:{name:"string"},required:!1,description:""},inputValue:{type:{name:"string"},required:!1,description:""},inputRequired:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormInput/FormInput.js"]={name:"FormInput",docgenInfo:FormInput.__docgenInfo,path:"src/components/FormInput/FormInput.js"})},473:function(module,exports,__webpack_require__){__webpack_require__(474),__webpack_require__(637),__webpack_require__(638),__webpack_require__(796),__webpack_require__(1018),__webpack_require__(1051),__webpack_require__(1056),__webpack_require__(1068),__webpack_require__(1070),__webpack_require__(1075),__webpack_require__(1077),module.exports=__webpack_require__(1080)},546:function(module,exports){},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(200)}},[[473,1,2]]]);
//# sourceMappingURL=main.f3327e4323bd7ae5bd5d.bundle.js.map