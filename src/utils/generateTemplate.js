import componentList from "../custom-component/component-list";
import axios from 'axios'
function getListMap() {
    let map = componentList.reduce((pre, cur) => {
        pre[cur.component] = 0;
        return pre;
    }, {});
    return map;
}
function getHtml(componentData) {
    // console.log(componentData);
    // axios.post('http://localhost:3000/add',{componentData}).then(res=>{
    //   console.log(res)
    //   let blob = new Blob([res.data], {
    //     type: "application/zip;charset-UTF-8"
    // });
    // let url = window.URL.createObjectURL(blob);
    // const link = document.createElement("a"); // 创建a标签
    // link.href = url;
    // link.download = "index.html"; // 重命名文件
    // link.click();
    // URL.revokeObjectURL(url); // 释放内存
    // })
    let htmlCode = getElement(makeUpHtml(componentData));
    let cssCode = getCss(makeUpCss(componentData));
    let scriptCode = getScript(makeUpScript(componentData));
    let blob = new Blob([htmlCode + scriptCode + cssCode], {
        type: "text/plain;charset=utf-8",
    });
    let url = window.URL.createObjectURL(blob);
    const link = document.createElement("a"); // 创建a标签
    link.href = url;
    link.download = "index.vue"; // 重命名文件
    link.click();
    URL.revokeObjectURL(url); // 释放内存
}
function makeUpHtml(componentData) {
    let map = getListMap();
    let str = componentData.reduce((pre, cur, i) => {
        map[cur.component]++;
        let enentStr = Object.keys(cur.events).reduce((p, c) => {
            p += `@${c}='${cur.component}-${map[cur.component]}-${c}' `;
            return p;
        }, "");
        let classStr=`class='${cur.component}-${map[cur.component]}'`
        pre += `<${cur.component} ${classStr} ${enentStr}></${cur.component}>`;
        return pre;
    }, "");
    return str;
}
function makeUpCss(componentData) {
    let map = getListMap();
    let str = componentData.reduce((pre, cur) => {
        map[cur.component]++;
        pre += `.${cur.component}-${map[cur.component]}{
            position:absolute;
            color:${cur.style.color};
            font-size:${cur.style.fontSize}px;
            font-weight:${cur.style.fontWeight}px;
            height:${cur.style.height}px;
            width:${cur.style.width}px;
            left:${cur.style.left}px;
            top:${cur.style.top}px;
            textAlign:${cur.style.textAlign};
            rotate:${cur.style.rotate};
            letterSpacing:${cur.style.letterSpacing};
            lineHeight:${cur.style.lineHeight};
            opacity:${cur.style.opacity};
        }`;
        return pre;
    }, "");
    return str;
}
function makeUpScript(componentData) {
    const str = `export default{
        components: {},
        props: [],
        data () {
          return {
          }
        },
        computed: {},
        watch: {},
        created () {
        },
        mounted () {},
        methods: {
            ${getMethods(componentData)}
        }
      }`;
    return str;
}
function getMethods(componentData) {
    let map = getListMap();
    let str = componentData.reduce((pre, cur, i) => {
        map[cur.component]++;
        let enentStr = Object.keys(cur.events).reduce((p, c) => {
            p += `${cur.component}-${map[cur.component]}-${c}(){}`;
            return p;
        }, "");
        pre += `${enentStr},`;
        return pre;
    }, "");
    return str;
}
function getElement(str) {
    return `<template>
        <div>
            ${str}
        </div>
   </template>
   `;
}
function getCss(str) {
    return `<style lang='less' scoped>
        ${str}
    </style>
    `;
}
function getScript(str) {
    return `<script>
             ${str}
    </script>
    `;
}
export { getHtml };
