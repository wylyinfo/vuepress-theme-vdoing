(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{543:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_05-自定义-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-自定义-hook"}},[t._v("#")]),t._v(" 05. 自定义 Hook")]),t._v(" "),s("p",[s("strong",[t._v("通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。")])]),t._v(" "),s("p",[t._v("目前为止，在 React 中有两种流行的方式来共享组件之间的状态逻辑: "),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/render-props.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("render props"),s("OutboundLink")],1),t._v(" 和"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("高阶组件"),s("OutboundLink")],1),t._v("，现在让我们来看看 Hook 是如何在让你不增加组件的情况下解决相同问题的。")]),t._v(" "),s("h2",{attrs:{id:"提取自定义-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取自定义-hook"}},[t._v("#")]),t._v(" 提取自定义 Hook")]),t._v(" "),s("p",[s("strong",[t._v("自定义 Hook 是一个函数，其名称以 “"),s("code",[t._v("use")]),t._v("” 开头，函数内部可以调用其他的 Hook。")]),t._v(" 例如，下面的 "),s("code",[t._v("useFriendStatus")]),t._v(" 是我们第一个自定义的 Hook:")]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useEffect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useFriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("friendID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isOnline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setIsOnline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleStatusChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setIsOnline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOnline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    ChatAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeToFriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("friendID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleStatusChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ChatAPI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribeFromFriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("friendID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleStatusChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isOnline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("与 React 组件不同的是，自定义 Hook 不需要具有特殊的标识。我们可以自由的决定它的参数是什么，以及它应该返回什么（如果需要的话）。换句话说，它"),s("strong",[t._v("就像一个正常的函数")]),t._v("。但是它的名字应该始终以 "),s("code",[t._v("use")]),t._v(" 开头，这样可以一眼看出其符合 "),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-rules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hook 的规则"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"使用自定义-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义-hook"}},[t._v("#")]),t._v(" 使用自定义 Hook")]),t._v(" "),s("p",[t._v("现在我们已经把这个逻辑提取到 "),s("code",[t._v("useFriendStatus")]),t._v(" 的自定义 Hook 中，然后就可以"),s("em",[t._v("使用它了：")])]),t._v(" "),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isOnline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useFriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isOnline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Loading...'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isOnline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Online'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Offline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("div",{staticClass:"language-jsx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FriendListItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isOnline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useFriendStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isOnline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("friend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("**这段代码等价于原来的示例代码吗？**等价，它的工作方式完全一样。如果你仔细观察，你会发现我们没有对其行为做任何的改变，我们只是将两个函数之间一些共同的代码提取到单独的函数中。"),s("strong",[t._v("自定义 Hook 是一种自然遵循 Hook 设计的约定，而并不是 React 的特性。")])]),t._v(" "),s("p",[t._v("**自定义 Hook 必须以 “"),s("code",[t._v("use")]),t._v("” 开头吗？**必须如此。这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 "),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-rules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hook 的规则"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("**在两个组件中使用相同的 Hook 会共享 state 吗？**不会。自定义 Hook 是一种重用"),s("em",[t._v("状态逻辑")]),t._v("的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的。")]),t._v(" "),s("p",[t._v("**自定义 Hook 如何获取独立的 state？**每次"),s("em",[t._v("调用")]),t._v(" Hook，它都会获取独立的 state。由于我们直接调用了 "),s("code",[t._v("useFriendStatus")]),t._v("，从 React 的角度来看，我们的组件只是调用了 "),s("code",[t._v("useState")]),t._v(" 和 "),s("code",[t._v("useEffect")]),t._v("。 正如我们在"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns",target:"_blank",rel:"noopener noreferrer"}},[t._v("之前章节"),s("OutboundLink")],1),t._v("中"),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解到的"),s("OutboundLink")],1),t._v("一样，我们可以在一个组件中多次调用 "),s("code",[t._v("useState")]),t._v(" 和 "),s("code",[t._v("useEffect")]),t._v("，它们是完全独立的。")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"小总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小总结"}},[t._v("#")]),t._v(" 小总结")]),t._v(" "),s("ol",[s("li",[t._v("自定义hook就像一个普通函数，内部包含可复用的组件逻辑。")]),t._v(" "),s("li",[t._v("函数名以"),s("code",[t._v("use")]),t._v("开头。")]),t._v(" "),s("li",[s("code",[t._v("state")]),t._v("是独立的。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);