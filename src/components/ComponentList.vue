<template>
    <div class="component-list">
        <el-select v-model="value" placeholder="请选择" @change="changeCompoent">
            <el-option v-for="item in compoentOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        <div v-for="(item, index) in componentList" :key="index" class="list" :style="{display:value===item.title||value==='全部组件'?'block':'none'}">
            <div class="compoent-title" @click.stop="toggleCompoent(index)">{{ item.title }}</div>
            <div class="compoent-children" :class="toggleState[index] ? 'height-add' : ''">
                <div
                    class="compoent-single"
                    v-for="(itm, idx) in item.children"
                    draggable
                    @dragstart="handleDragStart"
                    :data-index="index + ',' + idx"
                >
                    <span class="iconfont" :class="'icon-' + itm.icon"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import componentList from "@/custom-component/component-list";

export default {
    data() {
        return {
            componentList,
            toggleState: [],
            compoentOptions:[],
            value:'全部组件'
        };
    },
    methods: {
        toggleCompoent(index) {
            this.toggleState.splice(index, 1, !this.toggleState[index]);
        },
        handleDragStart(e) {
            e.stopPropagation();
            e.dataTransfer.setData("index", e.target.dataset.index);
        },
        changeCompoent(e){
        }
    },
    created() {
        this.toggleState = this.componentList.map((item) => {
            return 0;
        });
        this.compoentOptions=[{
                label:'全部组件',
                value:'全部组件'
            },...this.componentList.map(item=>{
            return {
                label:item.title,
                value:item.title
            }
        })]
    },
};
</script>

<style lang="scss" scoped>
.component-list {
    box-sizing: border-box;
    // height: 65%;
    // padding: 10px;
    // display: grid;
    // grid-gap: 10px 19px;
    // grid-template-columns: repeat(auto-fill, 80px);
    // grid-template-rows: repeat(auto-fill, 40px);

    .list {
        overflow: hidden;
        // width: 80px;
        // height: 40px;
        border: 1px solid #ddd;
        // cursor: grab;
        // text-align: center;
        color: #333;
        // padding: 2px 5px;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        .compoent-title {
            height: 40px;
            background: #ccc;
            border: 1px solid #ddd;
            width: 100%;
            display: flex;
            // justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .compoent-children {
            height: 0;
            // display: flex;
            // flex-wrap: wrap;
            .compoent-single {
                width: 50%;
                display: inline-block;
                background: red;
                text-align: center;
                margin-bottom: 20px;
            }
        }
        .height-add {
            height: 300px;
            animation: heightAdd 1s;
        }
        @keyframes heightAdd {
            from {
                height: 0;
            }
            to {
                height: 300px;
            }
        }
        // .height-zero {
        //     height: 0;
        //     animation: heightZero 1s;
        // }
        // @keyframes heightZero {
        //     from {
        //         height: 300px;
        //     }
        //     to {
        //         height: 0;
        //     }
        // }
        &:active {
            cursor: grabbing;
        }

        // .iconfont {
        //     margin-right: 4px;
        //     font-size: 20px;
        // }

        .icon-wenben,
        .icon-biaoge {
            font-size: 18px;
        }

        // .icon-tupian {
        //     font-size: 16px;
        // }
    }
}
</style>
