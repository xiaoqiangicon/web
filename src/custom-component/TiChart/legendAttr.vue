<template>
    <div>
        <el-form-item label="legend">
            <el-switch v-model="curComponent.propValue.showLegend"> </el-switch>
        </el-form-item>
        <template v-if="curComponent.propValue.showLegend">
            <el-form-item label="legend图标">
                <el-select v-model="curComponent.propValue.legendIcon" placeholder="请选择">
                    <el-option
                        v-for="item in [
                            {
                                label: 'circle',
                                value: 'circle',
                            },
                            {
                                label: 'rect',
                                value: 'rect',
                            },
                            {
                                label: 'roundRect',
                                value: 'roundRect',
                            },
                            {
                                label: 'triangle',
                                value: 'triangle',
                            },
                            {
                                label: 'diamond',
                                value: 'diamond',
                            },
                            {
                                label: 'pin',
                                value: 'pin',
                            },
                            {
                                label: 'arrow',
                                value: 'arrow',
                            },
                            {
                                label: 'none',
                                value: 'none',
                            },
                        ]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="legend排列">
                <el-select v-model="curComponent.propValue.legendOrient" placeholder="请选择">
                    <el-option
                        v-for="item in [
                            {
                                label: 'horizontal',
                                value: 'horizontal',
                            },
                            {
                                label: 'vertical',
                                value: 'vertical',
                            },
                        ]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="legend间隔">
                <el-input v-model.number="curComponent.propValue.legendItemGap" type="number" />
            </el-form-item>
            <el-form-item label="legend宽度">
                <el-input v-model.number="curComponent.propValue.legendItemWidth" type="number" />
            </el-form-item>
            <el-form-item label="legend高度">
                <el-input v-model.number="curComponent.propValue.legendItemHeight" type="number" />
            </el-form-item>
            <el-form-item label="legend文字颜色">
                <el-color-picker v-model="curComponent.propValue.legendTextColor" show-alpha></el-color-picker>
            </el-form-item>
            <el-form-item label="legend文字字重">
                <el-select v-model="curComponent.propValue.legendTextFontWeight" placeholder="请选择">
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
            <el-form-item label="legend文字大小">
                <el-input v-model.number="curComponent.propValue.legendTextFontSize" type="number" />
            </el-form-item>
        </template>
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
        return {};
    },
    methods: {},
};
</script>
