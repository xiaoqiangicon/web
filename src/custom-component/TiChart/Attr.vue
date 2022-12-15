<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-collapse v-model="activeName" accordion @change="onChange">
            <template v-if="['line', 'bar'].includes(curComponent.category)">
                <el-collapse-item title="x轴通用样式" name="xStyle">
                    <xAxisAtrr></xAxisAtrr>
                </el-collapse-item>
                <el-collapse-item title="y轴通用样式" name="yStyle">
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
                </el-collapse-item>
            </template>
            <template v-if="curComponent.category === 'pie'">
                <el-collapse-item title="图表内容样式" name="contentStyle">
                    <el-form>
                        <!-- <gridAttr></gridAttr> -->
                        <legendAttr></legendAttr>
                        <titleAttr></titleAttr>
                        <el-form-item label="颜色">
                            <el-select v-model="curComponent.propValue.color" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '组合1',
                                            value: [
                                                'rgb(255, 162, 11)',
                                                'rgb(5, 222, 255)',
                                                'rgb(169, 99, 255)',
                                                'rgb(63, 229, 142)',
                                                'rgb(49, 117, 255)',
                                                'rgb(159, 159, 159)',
                                            ].join(']'),
                                        },
                                        {
                                            label: '组合2',
                                            value: [
                                                'rgb(255, 252, 212)',
                                                'rgb(54, 22, 25)',
                                                'rgb(19, 9, 255)',
                                                'rgb(6, 22, 142)',
                                                'rgb(49, 117, 25)',
                                                'rgb(159, 19, 159)',
                                            ].join(']'),
                                        },
                                    ]"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showLabel"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker v-model="curComponent.propValue.labelColor" show-alpha></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.labelSize" type="number" />
                        </el-form-item>
                        <el-form-item label="标签位置">
                            <el-select v-model="curComponent.propValue.labelPosition" placeholder="请选择">
                                <el-option
                                    v-for="item in [
                                        {
                                            label: '内部',
                                            value: 'inside',
                                        },
                                        {
                                            label: '外部',
                                            value: 'outside',
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
                        <el-form-item label="半径" v-if="curComponent.type === 'basePie'">
                            <el-input v-model.number="curComponent.propValue.radius" type="number" />
                        </el-form-item>
                        <template v-if="curComponent.type === 'circlePie'">
                            <el-form-item label="半径" v-for="item in curComponent.propValue.radius.length">
                                <el-input v-model.number="curComponent.propValue.radius[item - 1]" type="number" />
                            </el-form-item>
                        </template>

                        <el-form-item label="起始角度">
                            <el-input
                                v-model.number="curComponent.propValue.startAngle"
                                type="number"
                                :min="0"
                                :max="360"
                            />
                        </el-form-item>
                        <el-form-item label="中心">
                            <el-input
                                v-model.number="curComponent.propValue.pieCenter[0]"
                                type="number"
                                :min="0"
                                :max="360"
                            />
                            <el-input
                                v-model.number="curComponent.propValue.pieCenter[1]"
                                type="number"
                                :min="0"
                                :max="360"
                            />
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </template>
        </el-collapse>
    </div>
</template>

<script>
import CommonAttr from "@/custom-component/common/CommonAttr.vue";
//折线图属性
import lineAttr from "./lineAttr.vue";
//柱状图属性
import barAttr from "./barAttr.vue"
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
