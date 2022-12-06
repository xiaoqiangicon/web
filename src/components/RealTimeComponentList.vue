<template>
    <div class="real-time-component-list" v-if="(componentData.length!==0)">
        <div class="real-time-component-title">组件列表</div>
        <div
            v-for="(item, index) in componentData"
            :key="index"
            class="list"
            :class="{ actived: transformIndex(index) === curComponentIndex }"
            @click="onClick(transformIndex(index))"
        >
        <span class="real-time-component-img"></span>
            <!-- <span class="iconfont" :class="'icon-' + getComponent(index).icon"></span> -->
            <span>{{ getComponent(index).label }}</span>
            <div class="icon-container">
                <span class="iconfont icon-shangyi" @click="upComponent(transformIndex(index))"></span>
                <span class="iconfont icon-xiayi" @click="downComponent(transformIndex(index))"></span>
                <span class="iconfont icon-shanchu" @click="deleteComponent(transformIndex(index))"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState([
        'componentData',
        'curComponent',
        'curComponentIndex',
    ]),
    methods: {
        getComponent(index) {
            return this.componentData[this.componentData.length - 1 - index]
        },

        transformIndex(index) {
            return this.componentData.length - 1 - index
        },

        onClick(index) {
            this.setCurComponent(index)
        },

        deleteComponent() {
            setTimeout(() => {
                this.$store.commit('deleteComponent')
                this.$store.commit('recordSnapshot')
            })
        },

        upComponent() {
            setTimeout(() => {
                this.$store.commit('upComponent')
                this.$store.commit('recordSnapshot')
            })
        },

        downComponent() {
            setTimeout(() => {
                this.$store.commit('downComponent')
                this.$store.commit('recordSnapshot')
            })
        },

        setCurComponent(index) {
            this.$store.commit('setCurComponent', { component: this.componentData[index], index })
        },
    },
}
</script>

<style lang="scss" scoped>
.real-time-component-list {
    height: 35%;
.real-time-component-title{
    color: rgb(51, 51, 51);
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
    border-bottom: 1px solid rgb(179, 179, 179);
    border-top: 1px solid rgb(179, 179, 179);
    padding-left: 10px;
}
    .list {
        height: 55px;
        cursor: grab;
        text-align: center;
        color: #333;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 0 10px;
        position: relative;
        user-select: none;
        border-bottom: 1px solid rgb(179, 179, 179);
        .real-time-component-img{
            display: inline-block;
            height: 37px;
            width: 37px;
            background: red;
            margin-right: 14px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        &:active {
            cursor: grabbing;
        }

        &:hover {
            background-color: rgba(200, 200, 200, .2);

            // .icon-container {
            //     display: block;
            // }
        }

        .iconfont {
            margin-right: 10px;
            font-size: 20px;
        }
        .icon-shanchu{
            color: rgb(255, 120, 120);
        }
        .icon-wenben,
        .icon-tupian {
            font-size: 14px;
        }

        .icon-container {
            position: absolute;
            right: 10px;
            // display: none;

            .iconfont {
                cursor: pointer;
            }
        }
    }

    .actived {
        background: #ecf5ff;
        color: #409eff;
    }
}
</style>
