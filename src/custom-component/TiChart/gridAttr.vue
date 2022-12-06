<template>
    <div>
        边距(%)
        <el-form-item label="上">
            <el-input v-model.number="curComponent.propValue.gridTop" type="number" :min="0" />
        </el-form-item>
        <el-form-item label="右">
            <el-input v-model.number="curComponent.propValue.gridLeft" type="number" :min="0" />
        </el-form-item>
        <el-form-item label="下">
            <el-input v-model.number="curComponent.propValue.gridBottom" type="number" :min="0" />
        </el-form-item>
        <el-form-item label="左">
            <el-input v-model.number="curComponent.propValue.gridRight" type="number" :min="0" />
        </el-form-item>
        <el-form-item label="防止标签溢出">
            <el-switch v-model="curComponent.propValue.containLabel"> </el-switch>
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
