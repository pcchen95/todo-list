(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{24:function(n,t,e){"use strict";e.r(t);var o,i,r,a,c,d,s,l,b,x,p,u,f,j,h,g=e(0),O=e(12),v=e.n(O),m=e(6),w=e(16),k=e(4),y=e(2),D=e(3),z=e(1),C=D.a.main(o||(o=Object(y.a)(["\n  width: 700px;\n  height: auto;\n  margin: 80px auto;\n  background: #fff8d7;\n  text-align: center;\n  border: solid 1px #eac100;\n  border-radius: 10px;\n  box-shadow: 1.8px 2.4px 5px 0 rgb(0 0 0 / 30%);\n  box-sizing: border-box;\n  padding: 50px 30px;\n"]))),S=D.a.div(i||(i=Object(y.a)(["\n  display: flex;\n"]))),T=D.a.input(r||(r=Object(y.a)(["\n  outline: none;\n  border-top: solid 1px transparent;\n  border-right: solid 1px transparent;\n  border-bottom: solid 1px #eac100;\n  border-left: solid 1px transparent;\n  margin: 0 auto 20px auto;\n  flex: 1;\n  height: 40px;\n  background: #fff8d7;\n  font-size: 24px;\n  color: #977c00;\n  box-sizing: border-box;\n"]))),I=D.a.div(a||(a=Object(y.a)(["\n  width: 100%;\n  font-size: 55px;\n  box-sizing: border-box;\n  color: #5b4b00;\n"]))),J=D.a.div(c||(c=Object(y.a)(["\n  width: 100%;\n  height: 50px;\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 24px;\n  position: relative;\n  box-sizing: border-box;\n\n  ","\n"])),(function(n){return n.isDone&&"\n    ".concat(A," {\n      & ").concat($," {\n        text-decoration: line-through;\n        color: #dbc665;\n        transition: all 0.2s;\n      }\n\n      & ").concat(E," {\n        border-color: #dbc665;\n        transition: all 0.2s;\n\n        &:before, &:after {\n          content: ''; \n          display: block;\n          position: absolute;\n          border-radius: 2px; \n          transform-origin: center center;\n        }\n\n        &:before{\n          width: 2px;\n          height: 10px;\n          top: 22px;\n          left: 8px;\n          transform: rotate(-45deg);\n          background: #dbc665;\n          z-index: 20;\n        }\n\n        &:after {\n          width: 2px;\n          height: 25px;\n          top: 9.5px;\n          left: 19.5px;\n          transform: translate(0, 0) rotate(-140deg);\n          background: #dbc665;\n          box-shadow: 0 0 0 3px #FFF8D7;\n          z-index: 10;\n        }\n      }\n    }\n\n    & ").concat(N," {\n      &:after,\n      &:before {\n        background: #dbc665;\n      }\n    }\n  ")})),A=D.a.div(d||(d=Object(y.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 600px;\n"]))),E=D.a.div(s||(s=Object(y.a)(["\n  width: 20px;\n  height: 20px;\n  border: solid 2px #977c00;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-right: 16px;\n"]))),$=D.a.div(l||(l=Object(y.a)(["\n  color: #977c00;\n  flex: 1;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n"]))),F=D.a.input(b||(b=Object(y.a)(["\n  outline: none;\n  border-top: solid 1px transparent;\n  border-right: solid 1px transparent;\n  border-bottom: solid 1px #eac100;\n  border-left: solid 1px transparent;\n  flex: 1;\n  height: 40px;\n  background: #fff8d7;\n  font-size: 28px;\n  color: #67655c;\n  box-sizing: border-box;\n"]))),N=D.a.div(x||(x=Object(y.a)(['\n  & {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    right: 0;\n    cursor: pointer;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    position: absolute;\n    right: 0px;\n    height: 20px;\n    width: 2px;\n    background: #977c00;\n    transition: all 0.2s;\n  }\n\n  &:after {\n    transform: translate(-10px, 0) rotate(-45deg);\n    transition: all 0.2s;\n  }\n\n  &:before {\n    transform: translate(-10px, 0) rotate(45deg);\n    transition: all 0.2s;\n  }\n']))),K=D.a.div(p||(p=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),P=D.a.div(u||(u=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U=D.a.div(f||(f=Object(y.a)(["\n  border: 1px solid #977c00;\n  border-radius: 3px;\n  padding: 5px 8px;\n  box-sizing: border-box;\n  color: #977c00;\n  cursor: pointer;\n\n  & + & {\n    margin-left: 5px;\n  }\n\n  ","\n"])),(function(n){return n.$active&&"\n      background: #977c00;\n      color: white;\n    "})),B=D.a.div(j||(j=Object(y.a)(["\n  cursor: pointer;\n  color: #8c8c8c;\n  font-size: 18px;\n"]))),L=D.a.div(h||(h=Object(y.a)(["\n  text-align: left;\n  color: #6d6a5c;\n  margin-top: 20px;\n"])));function R(n){window.localStorage.setItem("todos",JSON.stringify(n))}function q(n){var t=n.todo,e=n.handleDeleteTodo,o=n.handleToogleIsDone,i=n.handleUpdateTodo,r=Object(g.useState)(t.content),a=Object(k.a)(r,2),c=a[0],d=a[1],s=Object(g.useState)(!0),l=Object(k.a)(s,2),b=l[0],x=l[1];return Object(z.jsxs)(J,{"data-todo-id":t.id,isDone:t.isDone,children:[Object(z.jsxs)(A,{children:[Object(z.jsx)(E,{onClick:function(){o(t.id)}}),b?Object(z.jsx)($,{onDoubleClick:function(n){x(!b)},children:t.content}):Object(z.jsx)(F,{value:c,onChange:function(n){d(n.target.value)},onKeyPress:function(n){"Enter"===n.key&&(i(t.id,c),x(!0))},type:"text"})]}),Object(z.jsx)(N,{onClick:function(){e(t.id)}})]})}var G=function(){var n=Object(g.useRef)(1),t=Object(g.useState)((function(){var t=window.localStorage.getItem("todos")||"";return t&&JSON.parse(t).length>0?(t=JSON.parse(t),n.current=t[0].id+1):t=[],t})),e=Object(k.a)(t,2),o=e[0],i=e[1],r=Object(g.useState)(""),a=Object(k.a)(r,2),c=a[0],d=a[1],s=Object(g.useState)(""),l=Object(k.a)(s,2),b=l[0],x=l[1];Object(g.useEffect)((function(){R(o)}),[o]);var p=function(n){i(o.map((function(t){return t.id!==n?t:Object(m.a)(Object(m.a)({},t),{},{isDone:!t.isDone})})))},u=function(n,t){i(o.map((function(e){return e.id!==n?e:Object(m.a)(Object(m.a)({},e),{},{content:t})})))},f=function(n){i(o.filter((function(t){return t.id!==n})))};return Object(z.jsxs)(C,{children:[Object(z.jsx)(I,{children:"Todo List"}),Object(z.jsx)(S,{children:Object(z.jsx)(T,{type:"text",placeholder:"Add todo...",value:c,onChange:function(n){d(n.target.value)},onKeyPress:function(t){"Enter"===t.key&&""!==c&&(i([{id:n.current,content:c,isDone:!1}].concat(Object(w.a)(o))),d(""),n.current++)}})}),o.map((function(n){if(n.isDone!==b)return Object(z.jsx)(q,{todo:n,handleDeleteTodo:f,handleToogleIsDone:p,handleUpdateTodo:u},n.id)})),Object(z.jsxs)(K,{children:[Object(z.jsxs)(P,{children:[Object(z.jsx)(U,{onClick:function(){x("")},$active:""===b,children:"All"}),Object(z.jsx)(U,{onClick:function(){x(!0)},$active:!0===b,children:"Active"}),Object(z.jsx)(U,{onClick:function(){x(!1)},$active:!1===b,children:"Complete"})]}),Object(z.jsx)(B,{onClick:function(){i([]),R()},children:" Clear All"})]}),Object(z.jsx)(L,{children:"Double click to edit."})]})};v.a.render(Object(z.jsx)(G,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.711ba865.chunk.js.map