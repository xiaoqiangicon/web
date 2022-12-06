<template>
    <el-form>
        <el-form-item label="x轴颜色">
            <el-color-picker v-model="curComponent.propValue.xAxisColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="轴线">
            <el-switch v-model="curComponent.propValue.showXAxis"> </el-switch>
        </el-form-item>
        <el-form-item label="轴线刻度">
            <el-switch v-model="curComponent.propValue.showXAxisTick"> </el-switch>
        </el-form-item>
        <el-form-item label="留白">
            <el-switch v-model="curComponent.propValue.xAxisBoundaryGap"> </el-switch>
        </el-form-item>
        <el-form-item label="反向">
            <el-switch v-model="curComponent.propValue.xAxisInverse"> </el-switch>
        </el-form-item>

        <el-form-item label="标签">
            <el-switch v-model="curComponent.propValue.showXAxisLabel"> </el-switch>
        </el-form-item>
        <el-form-item label="标签颜色">
            <el-color-picker v-model="curComponent.propValue.xAxisLabelColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="标签大小">
            <el-input v-model.number="curComponent.propValue.xAxisLabelSize" type="number" />
        </el-form-item>
        <el-form-item label="标签与轴线之间的距离">
            <el-input v-model.number="curComponent.propValue.xAxisLabelMargin" type="number" />
        </el-form-item>
        <el-form-item label="坐标轴名称">
            <el-input v-model="curComponent.propValue.xAxisName" />
        </el-form-item>
        <el-form-item label="坐标轴名称颜色">
            <el-color-picker v-model="curComponent.propValue.xAxisNameColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="坐标轴名称与轴线之间的距离">
            <el-input v-model.number="curComponent.propValue.xAxisNameGap" type="number" />
        </el-form-item>
    </el-form>
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
        return {};
    },
    methods: {},
};
</script>
