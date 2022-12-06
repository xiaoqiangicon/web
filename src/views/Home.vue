<template>
    <div class="home" @click="hideCanvasSizeSelect">
        <Toolbar ref="toolBar" />

        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList />
                
            </section>
            <!-- 中间画布 -->
            <section class="center" >
                <div
                    class="content"
                    @drop="handleDrop"
                    @dragover="handleDragOver"
                    @mousedown="handleMouseDown"
                    @mouseup="deselectCurComponent"
                >
                    <Editor ref="editor"  />
                </div>
            </section>
            <!-- 右侧属性列表 -->
            <section class="right">
                <el-tabs v-if="curComponent" v-model="activeName" style="height: 600px;">
                    <el-tab-pane label="属性" name="attr">
                        <component :is="curComponent.component + 'Attr'" />
                    </el-tab-pane>
                    <el-tab-pane label="动画" name="animation" style="padding-top: 20px">
                        <AnimationList />
                    </el-tab-pane>
                    <el-tab-pane label="事件" name="events" style="padding-top: 20px">
                        <EventList />
                    </el-tab-pane>
                </el-tabs>
                <CanvasAttr v-else></CanvasAttr>
                <RealTimeComponentList />
            </section>
            <div v-if="(position[0]!==0&&position[1]!==0)" style="position: absolute; left: 400px; bottom: 20px;color: rgb(168, 168, 168);font-size: 14px;">位置 <span style="margin: 0 10px;">X:{{ position[0] }}px</span> <span>Y:{{ position[1] }}px</span> </div>
        </main>
    </div>
</template>

<script>
import Editor from "@/components/Editor/index";
import ComponentList from "@/components/ComponentList"; // 左侧列表组件
import AnimationList from "@/components/AnimationList"; // 右侧动画列表
import EventList from "@/components/EventList"; // 右侧事件列表
import componentList from "@/custom-component/component-list"; // 左侧列表数据
import Toolbar from "@/components/Toolbar";
import { deepCopy } from "@/utils/utils";
import { mapState } from "vuex";
import generateID from "@/utils/generateID";
import { listenGlobalKeyDown } from "@/utils/shortcutKey";
import RealTimeComponentList from "@/components/RealTimeComponentList";
import CanvasAttr from "@/components/CanvasAttr";
import { changeComponentSizeWithScale } from "@/utils/changeComponentsSizeWithScale";
import { setDefaultcomponentData } from "@/store/snapshot";
import TiChart from "@/custom-component/TiChart/js/TiChart";

export default {
    components: {
        Editor,
        ComponentList,
        AnimationList,
        EventList,
        Toolbar,
        RealTimeComponentList,
        CanvasAttr,
        TiChart,
    },
    data() {
        return {
            activeName: "attr",
            reSelectAnimateIndex: undefined,
            position: [0, 0],
        };
    },
    computed: mapState(["componentData", "curComponent", "isClickComponent", "canvasStyleData", "editor"]),
    created() {
        // console.log(process.env)
        // this.$router.push('/page')
        this.restore();
        // 全局监听按键事件
        listenGlobalKeyDown();
    },
    mounted() {
        var editor = document.getElementsByClassName("editor")[0];

        editor.onmouseover = (event) => {
            this.position = [event.offsetX, event.offsetY];
        };
        editor.onmousemove = (event) => {
            this.position = [event.offsetX, event.offsetY];
        };
        editor.onmouseleave=(event)=>{
            this.position = [0, 0];
        }
    },
    methods: {
       
        hideCanvasSizeSelect(e) {
            if (e.target.className !== "el-icon-arrow-down") this.$refs.toolBar.$data.cavansSizeSelectState = false;
        },
        restore() {
            // 用保存的数据恢复画布
            if (localStorage.getItem("canvasData")) {
                setDefaultcomponentData(JSON.parse(localStorage.getItem("canvasData")));
                this.$store.commit("setComponentData", JSON.parse(localStorage.getItem("canvasData")));
            }

            if (localStorage.getItem("canvasStyle")) {
                this.$store.commit("setCanvasStyle", JSON.parse(localStorage.getItem("canvasStyle")));
            }
        },
        boundaryLimit(actualValue, limitValue) {
            if (actualValue > limitValue) return limitValue;
            else return Math.max(actualValue, 0);
        },
        handleDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            const index = e.dataTransfer.getData("index").split(",")[0];
            const idx = e.dataTransfer.getData("index").split(",")[1];
            const ix = e.dataTransfer.getData("index").split(",")[2];
            const rectInfo = this.editor.getBoundingClientRect();
            if (index) {
                const component = deepCopy(componentList[index].children[idx].children[ix]);
                // component.style.top = e.clientY - rectInfo.y
                // component.style.left = e.clientX - rectInfo.x
                component.style.top = this.boundaryLimit(
                    e.clientY - rectInfo.y - component.style.height / 2,
                   this.canvasStyleData.scale/100*this.canvasStyleData.height - component.style.height
                );
                component.style.left = this.boundaryLimit(
                    e.clientX - rectInfo.x - this.canvasStyleData.scale/100*component.style.width / 2,
                    this.canvasStyleData.scale/100*this.canvasStyleData.width - this.canvasStyleData.scale/100*component.style.width
                );
                component.id = generateID();

                // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
                changeComponentSizeWithScale(component);
                this.$store.commit("addComponent", { component });
                this.$store.commit("recordSnapshot");
            }
        },
        handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
        },

        handleMouseDown(e) {
            e.stopPropagation();
            this.$store.commit("setClickComponentStatus", false);
            this.$store.commit("setInEditorStatus", true);
        },

        deselectCurComponent(e) {
            if (!this.isClickComponent) {
                this.$store.commit("setCurComponent", { component: null, index: null });
            }

            // 0 左击 1 滚轮 2 右击
            if (e.button != 2) {
                this.$store.commit("hideContextMenu");
            }
        },
    },
};
</script>

<style lang="scss">
.home {
    height: 100vh;
    background: #fff;

    main {
        height: calc(100% - 64px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 380px;
            left: 0;
            top: 0;
            & > div {
                // overflow: auto;

                &:first-child {
                    border-bottom: 1px solid #ddd;
                }
            }
        }

        .right {
            position: absolute;
            height: 100%;
            width: 288px;
            right: 0;
            top: 0;

            .el-select {
                width: 100%;
            }
        }

        .center {
            margin-left: 380px;
            margin-right: 288px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;
            padding-left: 200px;
            padding-right: 200px;
            background-size: 100% 100%;
            background-repeat: no-repeat;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }

    .global-attr {
        padding: 10px;
    }
}
</style>
