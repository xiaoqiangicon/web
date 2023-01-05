<template>
    <div>
        <el-form>
            <template v-if="['basePictorialBar', 'bgPictorialBar','crossPictorialBar'].includes(curComponent.type)">
                <el-form-item label="颜色">
                    <el-color-picker
                        v-if="curComponent.type === 'basePictorialBar' || curComponent.type==='crossPictorialBar'"
                        v-model="curComponent.propValue.itemStyleColor[0]"
                        show-alpha
                    ></el-color-picker>
                    <el-color-picker
                        v-if="curComponent.type === 'bgPictorialBar'"
                        v-model="curComponent.propValue.itemStyleColor"
                        show-alpha
                    ></el-color-picker>
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
                <el-form-item v-if="curComponent.type!=='crossPictorialBar'" label="标签位置">
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
            </template>
            <template v-if="['bgDoublePictorialBar'].includes(curComponent.type)">
                <el-tabs v-model="activeName">
                    <el-tab-pane
                        v-for="item in curComponent.propValue.itemStyleColor.length"
                        :label="'值属性' + (item - 1)"
                        :name="'attr' + (item - 1)"
                    >
                        <el-form-item label="颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.itemStyleColor[item - 1]"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-switch v-model="curComponent.propValue.showLabel[item - 1]"> </el-switch>
                        </el-form-item>
                        <el-form-item label="标签颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.labelColor[item - 1]"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        <el-form-item label="标签大小">
                            <el-input v-model.number="curComponent.propValue.labelSize[item - 1]" type="number" />
                        </el-form-item>
                        <el-form-item label="标签位置">
                            <el-select v-model="curComponent.propValue.labelPosition[item - 1]" placeholder="请选择">
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
                            <el-select v-model="curComponent.propValue.labelWeight[item - 1]" placeholder="请选择">
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
                    </el-tab-pane>
                </el-tabs>
            </template>
            <template v-if="['sixPictorialBar'].includes(curComponent.type)">
                <el-tabs v-model="activeName">
                    <el-tab-pane
                        v-for="item in curComponent.propValue.itemStyleColor.length"
                        :label="'值属性' + (item - 1)"
                        :name="'attr' + (item - 1)"
                    >
                        <el-form-item label="颜色">
                            <el-color-picker
                                v-model="curComponent.propValue.itemStyleColor[item - 1]"
                                show-alpha
                            ></el-color-picker>
                        </el-form-item>
                        
                    </el-tab-pane>
                </el-tabs>
            </template>
        </el-form>
    </div>
</template>

<script>
export default {
    components: {},
    computed: {
        curComponent() {
            return this.$store.state.curComponent;
        },
    },
    data() {
        return {
            activeName: "attr0",
            positionList: ["上", "右", "下", "左"],
        };
    },
    methods: {
        onChange() {},
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
