<template>
    <div>
        <div class="toolbar">
            <div class="btn-warpper" v-for="(item, index) in btnList" style="height: 26px">
                <div
                    v-if="index === 1"
                    @mouseenter="showOtherList(index, true)"
                    @mouseleave="showOtherList(index, false)"
                >
                    <el-button
                        :disabled="item.disabled"
                        @click="item.eventName(true)"
                        :title="item.title"
                        :style="{ backgroundImage: 'url(' + item.img + ')' }"
                        class="btn-common"
                        :class="item.disabled ? 'mask' : ''"
                    >
                        <!-- {{ item.title }} -->
                    </el-button>
                    <div class="other-btn-list">
                        <div
                            class="other-btn-single"
                            v-for="item in otherBtnList"
                            @click="item.eventName(true)"
                            :title="item.title"
                        >
                            <el-button
                                :style="{ backgroundImage: 'url(' + item.img + ')' }"
                                class="btn-common size-common"
                            >
                            </el-button>
                            {{ item.title }}
                        </div>
                    </div>
                </div>
                <el-button
                    v-else
                    :disabled="item.disabled"
                    @click="item.eventName(true)"
                    :title="item.title"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                    class="btn-common"
                    :class="item.disabled ? 'mask' : ''"
                >
                    <!-- {{ item.title }} -->
                </el-button>
            </div>
            <div style="display: flex; align-items: center; margin-left: 70px">
                背景色
                <el-color-picker v-model="canvasStyleData['backgroundColor']" show-alpha style="margin-left: 10px;"></el-color-picker>
            </div>
            <el-select
                style="width: 100px; margin-left: 40px"
                v-model="canvasStyleData['backgroundImage']"
                placeholder="请选择"
            >
                <el-option v-for="item in backgroundList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <!-- 画布类型 -->
            <el-select
                style="width: 100px; margin-left: 70px"
                v-model="sizeType"
                placeholder="请选择"
                @change="changeCanvasSizeSelect"
            >
                <el-option v-for="item in preSizeList" :key="item.title" :label="item.title" :value="item.title">
                </el-option>
            </el-select>
            <!-- 画布大小 -->
            <div class="canvas-config" style="margin-left: 40px">
                <el-input style="width: 70px;margin-right: 5px;" v-model="canvasStyleData.width" />px
                <span style="margin: 0 5px;" >* </span>
                <el-input style="width: 70px;margin-right: 5px;" v-model="canvasStyleData.height" />px
            </div>
            <i class="el-icon-arrow-down" @click="showCavansSizeSelect"></i>
            <div
                class="size-select"
                :style="{
                    display: cavansSizeSelectState ? 'block' : 'none',
                }"
            >
                <div class="size-select-single" v-for="(item, index) in canvasSizeList" @click="changeCanvasSize(item)">
                    {{ item[0] }}*{{ item[1] }}
                </div>
            </div>
            <!-- 画布比例 -->
            <div>
                <el-input style="width: 80px; margin-left: 40px;margin-right: 5px;" v-model.number="scale" @input="handleScaleChange" />%
            </div>
            <div class="preview" @click="preview(false)">
                <div class="preview-img"></div>
                预览
            </div>
            <!-- <el-button @click="handleAceEditorChange">JSON</el-button>
            <el-button @click="undo">撤消</el-button>
            <el-button @click="redo">重做</el-button>
            <label for="input" class="insert">
                插入图片
                <input id="input" type="file" hidden @change="handleFileChange" />
            </label>

            
            <el-button @click="save">保存</el-button>
            <el-button @click="generateCode">生成代码</el-button>
            <el-button @click="clearCanvas">清空画布</el-button>
            <el-button :disabled="!areaData.components.length" @click="compose">组合</el-button>
            <el-button
                :disabled="!curComponent || curComponent.isLock || curComponent.component != 'Group'"
                @click="decompose"
            >
                拆分
            </el-button>

            <el-button :disabled="!curComponent || curComponent.isLock" @click="lock">锁定</el-button>
            <el-button :disabled="!curComponent || !curComponent.isLock" @click="unlock">解锁</el-button>
            <el-button @click="preview(true)">截图</el-button> -->
        </div>

        <!-- 预览 -->
        <Preview v-if="isShowPreview" :is-screenshot="isScreenshot" @close="handlePreviewChange" />
        <AceEditor v-if="isShowAceEditor" @closeEditor="closeEditor" />
    </div>
</template>

<script>
import generateID from "@/utils/generateID";
import toast from "@/utils/toast";
import { mapState } from "vuex";
import Preview from "@/components/Editor/Preview";
import AceEditor from "@/components/Editor/AceEditor.vue";
import { commonStyle, commonAttr } from "@/custom-component/component-list";
import eventBus from "@/utils/eventBus";
import { $ } from "@/utils/utils";
import changeComponentsSizeWithScale, { changeComponentSizeWithScale } from "@/utils/changeComponentsSizeWithScale";
import { getHtml } from "@/utils/generateTemplate";
export default {
    components: { Preview, AceEditor },
    data() {
        return {
            sizeType: "桌面端",

            backgroundList: [
                {
                    label: "程序员的世界",
                    value: "title",
                },
                {
                    label: "网格",
                    value: "grid",
                },
            ],
            isShowPreview: false,
            isShowAceEditor: false,
            timer: null,
            isScreenshot: false,
            scale: 100,
            activeSize: 0,
            cavansSizeSelectState: false,
            canvasSizeList: [],
            preSizeList: [
                {
                    title: "桌面端",
                    size: [
                        [1920, 1080],
                        [1552, 864],
                        [1600, 900],
                        [1024, 768],
                        [1280, 800],
                        [1280, 1024],
                        [1366, 768],
                        [1440, 900],
                        [2560, 1440],
                    ],
                },
                {
                    title: "平板端",
                    size: [
                        [768, 1024],
                        [601, 962],
                        [600, 1024],
                        [800, 1280],
                        [834, 1112],
                    ],
                },
                {
                    title: "手机端",
                    size: [
                        [360, 640],
                        [360, 720],
                        [360, 740],
                        [375, 667],
                        [414, 736],
                    ],
                },
            ],
        };
    },
    computed: {
        ...mapState(["componentData", "canvasStyleData", "areaData", "curComponent", "curComponentIndex"]),
        btnList() {
            return [
                {
                    img: require("../assets/img/edit/back.png"),
                    title: "返回",
                    eventName: this.backToIndex,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/other.png"),
                    title: "其他菜单",
                    eventName: this.showOtherMenu,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/cancel.png"),
                    title: "撤回",
                    eventName: this.undo,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/forward.png"),
                    title: "前进",
                    eventName: this.forward,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/print-screen.png"),
                    title: "截图",
                    eventName: this.preview,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/clear.png"),
                    title: "清空",
                    eventName: this.clearCanvas,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/lock.png"),
                    title: "锁定",
                    eventName: this.lock,
                    disabled: !this.curComponent || this.curComponent.isLock,
                },
                {
                    img: require("../assets/img/edit/unlock.png"),
                    title: "解锁",
                    eventName: this.unlock,
                    disabled: !this.curComponent || !this.curComponent.isLock,
                },
            ];
        },
        otherBtnList() {
            return [
                {
                    img: require("../assets/img/edit/import.png"),
                    title: "导入",
                    eventName: this.import,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/export.png"),
                    title: "导出",
                    eventName: this.generateCode,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/save.png"),
                    title: "保存",
                    eventName: this.save,
                    disabled: false,
                },
                {
                    img: require("../assets/img/edit/restart.png"),
                    title: "重做",
                    eventName: this.redo,
                },
            ];
        },
    },
    created() {
        eventBus.$on("preview", this.preview);
        eventBus.$on("save", this.save);
        eventBus.$on("clearCanvas", this.clearCanvas);

        this.scale = this.canvasStyleData.scale;

        this.canvasSizeList = this.preSizeList[0].size;
    },
    methods: {
        import() {},
   
        showOtherMenu() {},
        backToIndex() {
            this.$router.push("/");
        },
        showOtherList(index, type) {
            if (index === 1) {
                if (type) document.getElementsByClassName("other-btn-list")[0].style.display = "block";
                else document.getElementsByClassName("other-btn-list")[0].style.display = "none";
            }
        },
        changeCanvasSize(item) {
            this.canvasStyleData.width = item[0];
            this.canvasStyleData.height = item[1];
            this.cavansSizeSelectState = false;
        },
        changeCanvasSizeSelect(label) {
            // this.activeSize = index;

            let obj = this.preSizeList.find((item) => item.title === label);
            this.canvasSizeList = obj.size;
            this.canvasStyleData.width = obj.size[0][0];
            this.canvasStyleData.height = obj.size[0][1];
        },
        showCavansSizeSelect() {
            this.cavansSizeSelectState = !this.cavansSizeSelectState;
        },

        handleScaleChange() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                // 画布比例设一个最小值，不能为 0
                // eslint-disable-next-line no-bitwise
                this.scale = ~~this.scale || 1;
                changeComponentsSizeWithScale(this.scale);
            }, 1000);
        },

        handleAceEditorChange() {
            this.isShowAceEditor = !this.isShowAceEditor;
        },

        closeEditor() {
            this.handleAceEditorChange();
        },

        lock() {
            this.$store.commit("lock");
        },

        unlock() {
            this.$store.commit("unlock");
        },

        compose() {
            this.$store.commit("compose");
            this.$store.commit("recordSnapshot");
        },

        decompose() {
            this.$store.commit("decompose");
            this.$store.commit("recordSnapshot");
        },

        undo() {
            this.$store.commit("undo");
        },
        forward() { this.$store.commit("forward"); },
        redo() {
            this.$store.commit("redo");
        },

        handleFileChange(e) {
            const file = e.target.files[0];
            if (!file.type.includes("image")) {
                toast("只能插入图片");
                return;
            }

            const reader = new FileReader();
            reader.onload = (res) => {
                const fileResult = res.target.result;
                const img = new Image();
                img.onload = () => {
                    const component = {
                        ...commonAttr,
                        id: generateID(),
                        component: "Picture",
                        label: "图片",
                        icon: "",
                        propValue: {
                            url: fileResult,
                            flip: {
                                horizontal: false,
                                vertical: false,
                            },
                        },
                        style: {
                            ...commonStyle,
                            top: 0,
                            left: 0,
                            width: img.width,
                            height: img.height,
                        },
                    };

                    // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
                    changeComponentSizeWithScale(component);

                    this.$store.commit("addComponent", { component });
                    this.$store.commit("recordSnapshot");

                    // 修复重复上传同一文件，@change 不触发的问题
                    $("#input").setAttribute("type", "text");
                    $("#input").setAttribute("type", "file");
                };

                img.src = fileResult;
            };

            reader.readAsDataURL(file);
        },

        preview(isScreenshot) {
            this.isScreenshot = isScreenshot;
            this.isShowPreview = true;
            this.$store.commit("setEditMode", "preview");
        },

        save() {
            localStorage.setItem("canvasData", JSON.stringify(this.componentData));
            localStorage.setItem("canvasStyle", JSON.stringify(this.canvasStyleData));
            this.$message.success("保存成功");
        },

        generateCode() {
            getHtml(this.componentData);
        },

        clearCanvas() {
            this.$store.commit("setCurComponent", { component: null, index: null });
            this.$store.commit("setComponentData", []);
            this.$store.commit("recordSnapshot");
        },

        handlePreviewChange() {
            this.isShowPreview = false;
            this.$store.commit("setEditMode", "edit");
        },
    },
};
</script>

<style lang="scss" scoped>
.toolbar {
    display: flex;
    box-sizing: border-box;
    padding: 19px 15px;
    white-space: nowrap;
    overflow-x: auto;
    background: #fff;
    border-bottom: 1px solid #ddd;
    height: 80px;
    align-items: center;
    .btn-warpper {
        // &:nth-child(2){
        margin-left: 45px;
        // }
        &:nth-child(1) {
            margin-left: 0px;
        }
        &:nth-child(3) {
            margin-left: 200px;
        }
        &:nth-child(4) {
            margin-left: 68px;
        }
        &:nth-child(5) {
            margin-left: 117px;
        }
    }
    .other-btn-list {
        width: 104px;
        height: 187px;
        background-image: url("../assets/img/edit/other-bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding-top: 25px;
        position: absolute;
        left: 55px;
        top: 45px;
        display: none;
        z-index: 99;
        cursor: pointer;
        .other-btn-single {
            width: 100%;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 20px;
            font-size: 14px;
            .size-common {
                width: 20px;
                height: 20px;
            }
        }
    }
    .btn-common {
        width: 26px;
        height: 26px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .el-button {
        border: 0;
    }
    .mask {
        background-color: #ccc;
    }
    .preview {
        width: 90px;
        height: 40px;
        background: rgb(77, 147, 255);
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        padding: 0 10px 0 10px;
        margin-left: 140px;
        .preview-img {
            height: 20px;
            width: 20px;
            background-image: url("../assets/img/edit/preview.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }
    .size-select {
        position: absolute;
        left: 1318px;
        top: 55px;
        z-index: 9;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: rgb(252, 252, 252);
        .size-select-single {
            height: 40px;
            width: 215px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-bottom: 10px;

            &:nth-last-child(1) {
                margin-bottom: 0;
            }
            &:hover {
                background: #ccc;
            }
        }
    }
    .canvas-config {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
        color: #606266;

        input {
            width: 50px;
            margin-left: 4px;
            outline: none;
            padding: 0 5px;
            border: 1px solid #ddd;
            color: #606266;
        }

        span {
            // margin-left: 10px;
        }
    }

    .insert {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
        margin-left: 10px;

        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: 0;
        }

        &:hover {
            background-color: #ecf5ff;
            color: #3a8ee6;
        }
    }
}
</style>
