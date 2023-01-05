<template>
    <div>
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
                <template v-if="curComponent.type !== 'tdPie'">
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
                </template>
            </el-form>
        </el-collapse-item>
    </div>
</template>

<script>
//图例属性
import legendAttr from "./legendAttr.vue";
//标题属性
import titleAttr from "./titleAttr.vue";
export default {
    components: { legendAttr, titleAttr },
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
