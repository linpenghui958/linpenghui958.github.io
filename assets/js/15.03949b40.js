(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{400:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"本地编译flutterengine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地编译flutterengine"}},[s._v("#")]),s._v(" 本地编译FlutterEngine")]),s._v(" "),a("blockquote",[a("p",[s._v("在Flutter的一些深度开发过程中，会遇到需要对Flutter Engine进行修改、定制的情况。这里就需要了解Flutter Engine的编译、打包等流程。这里简单介绍一下如果在本地编译Flutter Engine。")])]),s._v(" "),a("h3",{attrs:{id:"工具部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具部分"}},[s._v("#")]),s._v(" 工具部分")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("介绍")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.chromium.org/developers/how-tos/depottools",target:"_blank",rel:"noopener noreferrer"}},[s._v("gclient"),a("OutboundLink")],1),s._v("，谷歌开发的一套跨平台git仓库管理工具，用来将多个git仓库组成一个solution进行管理，通过gclient获取我们编译所需源码和依赖。")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://ninja-build.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ninja"),a("OutboundLink")],1),s._v("，编译工具，负责最终编译可执行的文件。")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gn.googlesource.com/gn",target:"_blank",rel:"noopener noreferrer"}},[s._v("gn"),a("OutboundLink")],1),s._v("，负责生产ninja所需的构建文件，像Flutter这种跨多操作系统、多平台、多CPU架构的，就需要gn生产多套不同的ninja构建文件(Ninja build files)。")])])]),s._v(" "),a("li",[a("p",[s._v("安装")]),s._v(" "),a("ul",[a("li",[s._v("homebrew")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/bin/ruby -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("https://raw.githubusercontent.com/Homebrew/install/master/install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("https://raw.githubusercontent.com/Homebrew/install/master/install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),a("ul",[a("li",[s._v("下载depot_tools")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// 下载\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://chromium.googlesource.com/chromium/tools/depot_tools.git \n\n// 配置环境变量\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":/Users/xxx/flutter/depot_tools "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处使用clone源码到本地的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新环境变量缓存，使生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])])]),a("ul",[a("li",[s._v("ant、ninja")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ant\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ninja\n")])])])])]),s._v(" "),a("h3",{attrs:{id:"源码下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码下载"}},[s._v("#")]),s._v(" 源码下载")]),s._v(" "),a("p",[s._v("Flutter Engine的源码是通过gclient管理的，我们首先要创建一个engine目录，然后新建一个gclient的配置文件.gclient。("),a("a",{attrs:{href:"https://chromium.googlesource.com/chromium/tools/depot_tools.git/+/HEAD/README.gclient.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置介绍"),a("OutboundLink")],1),s._v(")")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" engine\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" .gclient\n// .gclient\nsolutions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"managed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" False,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/flutter"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git@github.com:xxxxxx/engine.git"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"custom_deps"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deps_file"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DEPS"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"safesync_url"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("这里的url也可以替换为自己fork的仓库，后续方便提交和修改。")]),s._v(" "),a("p",[s._v("配置host")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.217")]),s._v(".160.112 storage.l.googleusercontent.com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.217")]),s._v(".160.112 commondatastorage.googleapis.com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.217")]),s._v(".160.68 googleapis.com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.217")]),s._v(".160.116 chrome-infra-packages.appspot.com\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.217")]),s._v(".160.116 appspot-preview.l.google.com\n")])])]),a("p",[s._v("下载源码")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("gclient "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v(" --verbose // 拉取Flutter Engine的源码以及所需的依赖\n//--verbose可以看到下载的过程，方便下载过程中出现问题看到异常信息\n")])])]),a("p",[s._v("首次下载过程会比较漫长。")]),s._v(" "),a("p",[s._v("ps: 这里需要注意本地的dart、flutter环境不要与engine的版本差异太多")]),s._v(" "),a("h3",{attrs:{id:"编译本地engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译本地engine"}},[s._v("#")]),s._v(" 编译本地Engine")]),s._v(" "),a("p",[s._v("编译相关基础知识")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("CPU架构")]),s._v(" "),a("p",[s._v("编译结果包括"),a("code",[s._v("arm")]),s._v("、"),a("code",[s._v("arm64")]),s._v("、"),a("code",[s._v("x86")]),s._v("这几种架构，arm对应Android的"),a("code",[s._v("armeabi-v7a")]),s._v("，arm64对应Android的"),a("code",[s._v("arm64-v8a")]),s._v("，x86还是"),a("code",[s._v("x86")]),s._v("一般是模拟器上用的。")])]),s._v(" "),a("li",[a("p",[s._v("运行模式")]),s._v(" "),a("p",[s._v("根据flutter的模式是分为"),a("code",[s._v("debug")]),s._v("、"),a("code",[s._v("profile")]),s._v("、"),a("code",[s._v("release")]),s._v("这三种模式的。")])])]),s._v(" "),a("p",[s._v("常用的编译参数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("—-android-cpu")]),s._v("：cpu架构，对应"),a("code",[s._v("arm")]),s._v("、"),a("code",[s._v("arm64")]),s._v("、"),a("code",[s._v("x86")]),s._v("，例如："),a("code",[s._v("gn —android-cpu arm")])]),s._v(" "),a("li",[a("code",[s._v("—-runtime-mode")]),s._v("：运行模式，对应"),a("code",[s._v("debug")]),s._v("、"),a("code",[s._v("profile")]),s._v("、"),a("code",[s._v("release")]),s._v("，例如："),a("code",[s._v("gn —runtime-mode debug")])]),s._v(" "),a("li",[a("code",[s._v("—unoptiimized")]),s._v("：是否优化。")])]),s._v(" "),a("p",[s._v("编译之前，最好将下载的engine的版本与本地的flutter依赖的engine版本调整一致，不然可能会报错。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// 查看本地flutter依赖的engine版本\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("/flutter/bin/internal/engine.version // xxxxxxxxxx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("/engine/src/flutter\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard xxxxxxxxxx\ngclient "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v(" -D --with_branch_heads --with_tags\n")])])]),a("p",[s._v("编译开始")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、定位到engine/src目录\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("/engine/src\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、编译Android对应的代码\n./flutter/tools/gn --android --runtime-mode release --android-cpu arm\n// 这里会在src目录下生产一个out/android_release的目录，里面就是ninja所需要的编译文件\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、通过2中生产的ninja build files编译\nninja -C out/android_release\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、编译Android打包所需要的代码\n./flutter/tools/gn --runtime-mode release --android-cpu arm\n\n// "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、编译4中生产的\nninja -C out/host_android \n// 如果4中使用的是arm64，这里就需要用host_android_arm64文件夹了\n")])])]),a("h3",{attrs:{id:"使用本地的engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用本地的engine"}},[s._v("#")]),s._v(" 使用本地的Engine")]),s._v(" "),a("p",[s._v("创建一个demo工程")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("flutter create engine_demo\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" engine_demo\nflutter run --release --local-engine-src-path "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pwd")]),s._v("/engine/src --local-engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("android_release\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);