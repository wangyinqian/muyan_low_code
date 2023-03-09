const path = require("path");

const NODE_MODULES = path.resolve("node_modules"),
      ROOT = path.resolve("");

module.exports = {
    "mode":"development",
    "entry":{
        "edit":ROOT + "/client/app/main/main.edit.tsx", 
        "preview":ROOT + "/client/app/main/main.preview.ts" 
    },
    "output":{
        "filename":"yyb.responsive.[name].js?v=" + new Date().getTime(), 
        "path":ROOT + "/dist/",
        "publicPath":"auto"
    },
    "module":{
        "rules":[{
                    test:/(\.(j|t)sx?)$/,
                    exclude:[NODE_MODULES,path.resolve("server")],
                    use:[{
                            loader:"babel-loader",
                            options:{
                                presets:["@babel/preset-react","@babel/preset-typescript"],
                                plugins:[
                                    "@babel/plugin-syntax-dynamic-import",
                                    // "@babel/plugin-proposal-class-properties",
                                    // "@babel/plugin-proposal-nullish-coalescing-operator",
                                    // "@babel/plugin-proposal-optional-chaining",
                                    // "@babel/plugin-proposal-private-methods"
                                ]
                            }     
                        }]
                },{
                    test:/\.css$/i,
                    exclude:/\.lazy\.css$/i,
                    use:["style-loader","css-loader"]
                },{
                    "test":/\.lazy\.css$/i,
                    use:["css-loader"]
                },
                {
                    "test":/\.svg$/,
                    use:["svg-inline-loader"]
                },
                {
                    test: /\.ttf$/,
                    use: ["file-loader"]
                }
            ]
    },
    "resolve":{
        "alias":{
            "giimall-config":ROOT+"/giimall_config.js",
            "dispatcher":ROOT + "/system/tools/dispatcher.js",
            "widget":ROOT + "/system/widgets/widget.js",
            "layer":ROOT + "/system/widgets/layer.js",
            "react":NODE_MODULES + "/react/umd/react.development.js",
            "react-dom":NODE_MODULES + "/react-dom/umd/react-dom.development.js",
            "mousetrap":NODE_MODULES + "/mousetrap/mousetrap.min.js",
            "dom-to-image":NODE_MODULES + "/dom-to-image/dist/dom-to-image.min.js",
            "spectrum-colorpicker":NODE_MODULES + "/@giimall/spectrum-colorpicker/spectrum.js",
            "toast":ROOT + "/system/widgets/toast/index.js",
            "monacoEditor": ROOT + "/system/widgets/monacoEditor/index.js",
            "design-components":NODE_MODULES + "/@giimall/design-components",
            "design-components-css":NODE_MODULES + "/@giimall/design-components/dist/css/index.lazy.css"
        },
        "extensions": [".js",".ts",".tsx"]
    },
    "devServer":{
        "host":"0.0.0.0",
        "hot":false,
        "allowedHosts":["dev.qdetong.com"],
        "static":{
            directory: ROOT + "/",
        },
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "compress":true,
        "port":8013
    }
}


