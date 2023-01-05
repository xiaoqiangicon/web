<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-collapse v-model="activeName" accordion @change="onChange">
            <template v-if="['line', 'bar', 'scatter', 'radar', 'pictorialBar'].includes(curComponent.category)">
                <el-collapse-item v-if="curComponent.category !== 'radar'" title="x轴通用样式" name="xStyle">
                    <xAxisAtrr></xAxisAtrr>
                </el-collapse-item>
                <el-collapse-item v-if="curComponent.category !== 'radar'" title="y轴通用样式" name="yStyle">
                    <yAxisAttr></yAxisAttr>
                </el-collapse-item>
                <el-collapse-item title="图表内容样式" name="contentStyle">
                    <el-form>
                        <gridAttr></gridAttr>
                        <legendAttr></legendAttr>
                        <titleAttr></titleAttr>
                        <el-form-item label="背景图">
                            <el-upload
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :before-upload="beforeUpload"
                            >
                                <img v-if="curComponent.background" :src="curComponent.background" class="avatar" />
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                    </el-form>
                    <lineAttr v-if="curComponent.category === 'line'"></lineAttr>
                    <barAttr v-if="curComponent.category === 'bar'"></barAttr>
                    <template v-if="curComponent.category === 'scatter'">
                        <el-form>
                            <el-form-item label="标签">
                                <el-switch v-model="curComponent.propValue.showLabel"> </el-switch>
                            </el-form-item>
                            <el-form-item label="标签颜色">
                                <el-color-picker
                                    v-model="curComponent.propValue.labelColor"
                                    show-alpha
                                ></el-color-picker>
                            </el-form-item>
                            <el-form-item label="标签大小">
                                <el-input v-model.number="curComponent.propValue.labelSize" type="number" />
                            </el-form-item>
                            <el-form-item label="标签位置">
                                <el-select v-model="curComponent.propValue.labelPosition" placeholder="请选择">
                                    <el-option
                                        v-for="item in [
                                            {
                                                label: '上方',
                                                value: 'top',
                                            },
                                            {
                                                label: '下方',
                                                value: 'bottom',
                                            },
                                        ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="标签字重">
                                <el-select v-model="curComponent.propValue.labelWeight" placeholder="请选择">
                                    <el-option
                                        v-for="item in [
                                            {
                                                label: '700',
                                                value: 700,
                                            },
                                            {
                                                label: '400',
                                                value: 400,
                                            },
                                        ]"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="线条颜色">
                                <el-color-picker
                                    v-model="curComponent.propValue.itemStyleColor[0]"
                                    show-alpha
                                ></el-color-picker>
                            </el-form-item>
                        </el-form>
                    </template>
                    <radarAttr v-if="curComponent.category === 'radar'"></radarAttr>
                    <pictorialBarAttr v-if="curComponent.category === 'pictorialBar'"></pictorialBarAttr>
                </el-collapse-item>
            </template>

            <pieAttr v-if="curComponent.category === 'pie'"></pieAttr>
        </el-collapse>
    </div>
</template>

<script>
import CommonAttr from "@/custom-component/common/CommonAttr.vue";
//折线图属性
import lineAttr from "./lineAttr.vue";
//柱状图属性
import barAttr from "./barAttr.vue";
//雷达图属性
import radarAttr from "./radarAttr.vue";
//象形柱图属性
import pictorialBarAttr from "./pictorialBarAttr.vue";
//饼图属性
import pieAttr from "./pieAttr.vue";
//网格属性
import gridAttr from "./gridAttr.vue";
//图例属性
import legendAttr from "./legendAttr.vue";
//标题属性
import titleAttr from "./titleAttr.vue";
//x轴属性
import xAxisAtrr from "./xAxisAttr.vue";
//y轴属性
import yAxisAttr from "./yAxisAttr.vue";
export default {
    components: {
        CommonAttr,
        lineAttr,
        barAttr,
        radarAttr,
        pictorialBarAttr,
        pieAttr,
        gridAttr,
        legendAttr,
        titleAttr,
        xAxisAtrr,
        yAxisAttr,
    },
    computed: {
        curComponent() {
            return this.$store.state.curComponent;
        },
    },
    data() {
        return {
            activeName: "xStyle",
            valueActiveName: "attr0",
        };
    },
    methods: {
        onChange() {},
        async beforeUpload(file) {
            this.curComponent.background = await this.getBase64(file);
            return false;
        },
        getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    resolve(reader.result);
                };
                reader.onerror = (error) => reject(error);
            });
        },
    },
    // watch: {
    //     "curComponent.propValue": {
    //         handler(newV, oldV) {
    //             console.log(111);
    //         },
    //         deep: true,
    //     },
    // },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
