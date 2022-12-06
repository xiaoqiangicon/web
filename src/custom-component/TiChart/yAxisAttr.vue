<template>
    <el-form>
        <el-form-item label="y轴颜色">
            <el-color-picker v-model="curComponent.propValue.yAxisColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="轴线">
            <el-switch v-model="curComponent.propValue.showYAxis"> </el-switch>
        </el-form-item>
        <el-form-item label="轴线刻度">
            <el-switch v-model="curComponent.propValue.showYAxisTick"> </el-switch>
        </el-form-item>
        <el-form-item label="留白">
            <el-switch v-model="curComponent.propValue.yAxisBoundaryGap"> </el-switch>
        </el-form-item>
        <el-form-item label="反向">
            <el-switch v-model="curComponent.propValue.yAxisInverse"> </el-switch>
        </el-form-item>

        <el-form-item label="标签">
            <el-switch v-model="curComponent.propValue.showYAxisLabel"> </el-switch>
        </el-form-item>
        <el-form-item label="标签颜色">
            <el-color-picker v-model="curComponent.propValue.yAxisLabelColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="标签大小">
            <el-input v-model.number="curComponent.propValue.yAxisLabelSize" type="number" />
        </el-form-item>
        <el-form-item label="标签与轴线之间的距离">
            <el-input v-model.number="curComponent.propValue.yAxisLabelMargin" type="number" />
        </el-form-item>
        <el-form-item label="坐标轴名称">
            <el-input v-model="curComponent.propValue.yAxisName" />
        </el-form-item>
        <el-form-item label="坐标轴名称颜色">
            <el-color-picker v-model="curComponent.propValue.yAxisNameColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="坐标轴名称与轴线之间的距离">
            <el-input v-model.number="curComponent.propValue.yAxisNameGap" type="number" />
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
