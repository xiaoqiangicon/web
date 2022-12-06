<template>
    <div>
        <el-form-item label="标题">
            <el-switch v-model="curComponent.propValue.showTitle"> </el-switch>
        </el-form-item>
        <el-form-item label="标题文字">
            <el-input v-model="curComponent.propValue.titleText" />
        </el-form-item>
        <el-form-item label="副标题文字">
            <el-input v-model="curComponent.propValue.titleSubtext" />
        </el-form-item>
        <el-form-item label="标题文字颜色">
            <el-color-picker v-model="curComponent.propValue.titleTextColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="标题文字字重">
            <el-select v-model="curComponent.propValue.titleTextFontWeight" placeholder="请选择">
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
        <el-form-item label="标题文字大小">
            <el-input v-model.number="curComponent.propValue.titleTextFontSize" type="number" />
        </el-form-item>
        <el-form-item label="副标题文字颜色">
            <el-color-picker v-model="curComponent.propValue.titleSubtextColor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="副标题文字字重">
            <el-select v-model="curComponent.propValue.titleSubtextFontWeight" placeholder="请选择">
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
        <el-form-item label="副标题文字大小">
            <el-input v-model.number="curComponent.propValue.titleSubtextFontSize" type="number" />
        </el-form-item>
        <el-form-item label="标题左边距">
            <el-input v-model.number="curComponent.propValue.titleLeft" type="number" />
        </el-form-item>
        <el-form-item label="标题上边距">
            <el-input v-model.number="curComponent.propValue.titleTop" type="number" />
        </el-form-item>
        <el-form-item label="标题右边距">
            <el-input v-model.number="curComponent.propValue.titleRight" type="number" />
        </el-form-item>
        <el-form-item label="标题下边距">
            <el-input v-model.number="curComponent.propValue.titleBottom" type="number" />
        </el-form-item>
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
