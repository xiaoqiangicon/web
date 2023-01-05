<template>
    <div>
        <el-form>
            <el-form-item label="中心点位置">
                <el-input v-model.number="curComponent.propValue.radarCenter[0]" type="number" />
                <el-input v-model.number="curComponent.propValue.radarCenter[1]" type="number" />
            </el-form-item>
            <el-form-item label="半径">
                <el-input v-model.number="curComponent.propValue.radarRadius" type="number" />
            </el-form-item>
            <el-tabs v-model="activeName">
                <el-tab-pane
                    v-for="item in curComponent.propValue.radarIndicator.length"
                    :label="'值属性' + (item - 1)"
                    :name="'attr' + (item - 1)"
                >
                    <el-form-item label="名称">
                        <el-input v-model="curComponent.propValue.radarIndicator[item - 1].name" />
                    </el-form-item>
                    <el-form-item label="最大值">
                        <el-input v-model.number="curComponent.propValue.radarIndicator[item - 1].max" type="number" />
                    </el-form-item>
                </el-tab-pane>
            </el-tabs>
            <el-form-item label="分隔区域">
                <el-switch v-model="curComponent.propValue.showRadarSplitArea"> </el-switch>
            </el-form-item>
            <el-form-item label="分隔区域颜色">
                <el-select v-model="curComponent.propValue.radarSplitAreaAreaStyleColor" placeholder="请选择">
                    <el-option
                        v-for="item in [
                            {
                                label: '组合1',
                                value: [
                                    'rgba(197, 255, 255, 0.05)',
                                    'rgba(197, 255, 255, 0.05)',
                                    'rgba(197, 255, 255, 0.05)',
                                    'rgba(197, 255, 255, 0.05)',
                                    'rgba(197, 255, 255, 0.05)',
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
            <el-form-item label="指向外圈文本的分隔线样式">
                <el-color-picker
                    v-model="curComponent.propValue.radarAxisLineLineStyleColor"
                    show-alpha
                ></el-color-picker>
            </el-form-item>
       
            <el-form-item label="分隔线类型">
                <el-select v-model="curComponent.propValue.radarSplitLineLineStyleType" placeholder="请选择">
                    <el-option
                        v-for="item in [
                            {
                                label: '实线',
                                value: 'solid',
                            },
                            {
                                label: '虚线',
                                value: 'dashed',
                            },
                        ]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="分隔线宽度">
                <el-input v-model.number="curComponent.propValue.radarSplitLineLineStyleWidth" type="number" />
            </el-form-item>
            <el-form-item label="分隔线颜色">
                <el-select v-model="curComponent.propValue.radarSplitLineLineStyleColor" placeholder="请选择">
                    <el-option
                        v-for="item in [
                            {
                                label: '组合1',
                                value: [
                                    'rgba(208, 253, 255, 0.1)',
                                    'rgba(208, 253, 255, 0.1)',
                                    'rgba(208, 253, 255, 0.1)',
                                    'rgba(208, 253, 255, 0.1)',
                                    'rgba(208, 253, 255, 0.1)',
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
