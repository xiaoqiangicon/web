<template>
    <div class="v-common-attr">
        <el-collapse v-model="activeName" accordion @change="onChange">
            <el-collapse-item title="通用样式" name="style">
                <el-form>
                    <el-form-item v-for="({ key, label }, index) in styleKeys" :key="index" :label="label">
                        <el-color-picker
                            v-if="isIncludesColor(key)"
                            v-model="curComponent.style[key]"
                            show-alpha
                        ></el-color-picker>
                        <el-select v-else-if="selectKey.includes(key)" v-model="curComponent.style[key]">
                            <el-option
                                v-for="item in optionMap[key]"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <el-input
                            v-else
                            v-model.number="curComponent.style[key]"
                            type="number"
                            @input="(value) => changeInput(value, curComponent, key)"
                        />
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <Request v-if="curComponent.request"></Request>
            <Linkage v-if="curComponent.linkage"></Linkage>
        </el-collapse>
    </div>
</template>

<script>
import { styleData, textAlignOptions, borderStyleOptions, verticalAlignOptions, selectKey, optionMap } from '@/utils/attr'
import Request from './Request'
import Linkage from './Linkage'
import { mapState } from 'vuex'
export default {
    components: { Request, Linkage },
    data() {
        return {
            optionMap,
            styleData,
            textAlignOptions,
            borderStyleOptions,
            verticalAlignOptions,
            selectKey,
            activeName: '',
        }
    },
    watch:{
        'curComponent.style.left'(newV,oldV){
            this.changeInput(newV,this.curComponent,'left')
        },
        'curComponent.style.top'(newV,oldV){
            this.changeInput(newV,this.curComponent,'top')
        },
        'curComponent.style.width'(newV,oldV){
            this.changeInput(newV,this.curComponent,'width')
        },
        'curComponent.style.height'(newV,oldV){
            this.changeInput(newV,this.curComponent,'height')
        }
    },
    computed: {
        styleKeys() {
            if (this.curComponent) {
                const curComponentStyleKeys = Object.keys(this.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }

            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
        ...mapState([
        'canvasStyleData',
    ]),
    },
    created() {
        this.activeName = this.curComponent.collapseName
    },
    methods: {
        handlerBoundary(value,key){
            if(key==='left'|| key==='top'){
            let attribute=key==='left'?'width':'height';
            if(Number(value)+this.curComponent.style[attribute]>this.canvasStyleData.scale/100*Number(this.canvasStyleData[attribute])){
                    this.curComponent.style[key]=this.canvasStyleData.scale/100*Number(this.canvasStyleData[attribute])-this.curComponent.style[attribute]
                }
                if(value<0){
                    this.curComponent.style[key]=0
                }
            }
            if(key==='width'||key==='height'){
                let attribute=key==='width'?['width','left']:['height','top'];
                if(Number(value)+this.curComponent.style[attribute[1]]>this.canvasStyleData.scale/100*Number(this.canvasStyleData[attribute[0]])){
                    this.curComponent.style[attribute[0]]=this.canvasStyleData.scale/100*Number(this.canvasStyleData[attribute[0]])-this.curComponent.style[attribute[1]]
                }
            }
        },
        changeInput(value,com,key){
            //处理边界
            this.handlerBoundary(value,key)
            if(com.component==='TiChart'&&(key==='width'||key==='height' ||key==='top' ||key==='left')){
                   this.$nextTick(()=>{
                    document.getElementById('component'+com.id).__vue__.$data.chartObject.resize()
                   })
            }
        },
        onChange() {
            this.curComponent.collapseName = this.activeName
        },

        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },
    },
}
</script>

<style lang="scss">
.v-common-attr {
    .el-input-group__prepend {
        padding: 0 10px;
    }
}
</style>
