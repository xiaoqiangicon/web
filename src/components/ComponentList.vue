<template>
    <div class="list-warpper">
        <div class="function-list">
            <div
                v-for="(item, index) in functionList"
                class="function-single"
                :class="item.active ? 'function-bg' : ''"
                @click="changeFunctionList(index)"
            >
                <div>
                    <div>
                        <img :src="item.img" />
                    </div>
                    {{ item.title }}
                </div>
            </div>
        </div>
        <div v-if="functionList[0].active" class="list-detail">
            <div class="list-detail-title">组件库</div>
            <div class="component-list-search">
                <el-select
                    style="width: 130px; height: 40px"
                    v-model="value"
                    placeholder="请选择"
                    @change="changeCompoent"
                >
                    <el-option
                        v-for="item in compoentOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
                <el-input
                    class="search-input"
                    style="width: 130px; height: 40px"
                    placeholder="请输入"
                    v-model="inputValue"
                >
                    <i slot="suffix" class="el-input__icon el-icon-search" @click="searchCom"></i>
                </el-input>
            </div>

            <div
                v-for="(item, index) in componentList"
                :key="index"
                class="list"
                :style="{ display: value === item.title || value === '全部组件' ? 'block' : 'none' }"
            >
                <div class="compoent-title" @click.stop="toggleCompoent(index)">
                    {{ item.title }}

                    <i v-if="toggleState[index]" class="el-icon-caret-top"></i>
                    <i v-else class="el-icon-caret-bottom"></i>
                </div>
                <div class="compoent-children" :class="toggleState[index] ? 'height-add' : ''">
                    <template v-if="item.title !== '图表'">
                        <div
                            class="compoent-single"
                            v-for="(itm, idx) in item.children"
                            draggable
                            @dragstart="handleDragStart"
                            :data-index="index + ',' + idx"
                        >
                            <span class="iconfont" :class="'icon-' + itm.icon"></span></div
                    ></template>
                    <template v-else>
                        <div class="compoent-chart-single" v-for="(itm, idx) in item.children"   >
                            <div class="compoent-chart-single-title">{{ itm.title }}</div>
                            <div class="chart-warpper">
                                <div
                                :style="{ display: realInputValue==='' || im.label.indexOf(realInputValue)!==-1   ? 'block' : 'none' }"
                                    class="chart-single"
                                    v-for="(im, ix) in itm.children"
                                    draggable
                                    @dragstart="handleDragStart"
                                    :data-index="index + ',' + idx + ',' + ix"
                                >
                                    <div class="component-img" :style="{backgroundImage:'url('+getImg(im)+')'}"></div>
                                    {{ im.label }}
                                    <!-- <span class="iconfont" :class="'icon-' + im.icon"></span> -->
                                </div>
                                <!-- <div class="chart-single" v-for="(im, ix) in itm.children.length % 2"></div> -->
                            </div>
                        </div>
                    </template>
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
            // componentList: JSON.parse(JSON.stringify(componentList)),
            inputValue: "",
            realInputValue:'',
            functionList: [
                {
                    img: require("../assets/img/component.png"),
                    title: "组件",
                    active: true,
                },
                {
                    img: require("../assets/img/data.png"),
                    title: "数据",
                    active: false,
                },
                {
                    img: require("../assets/img/module.png"),
                    title: "模板",
                    active: false,
                },
                {
                    img: require("../assets/img/application.png"),
                    title: "应用",
                    active: false,
                },
            ],
            componentList,
            toggleState: [],
            compoentOptions: [],
            value: "全部组件",
        };
    },
    methods: {
        getImg(itm){
           return require("../assets/img/edit/"+itm.category+'-'+itm.type+'.jpg') 
        },
        searchCom() {
            this.realInputValue=this.inputValue
// console.log(this.deepSearch())
//             this.componentList=this.deepSearch()
        },
        // deepSearch(data){
        //     if (!data) data = componentList;
        //    return  data.filter((item) => {
        //         if (item.title.indexOf(this.inputValue)) return item;
        //         else if (item.children) return this.deepSearch(item.children);
        //     });
        // },
        changeFunctionList(idx) {
            this.functionList.forEach((item, index) => {
                item.active = index === idx;
            });
        },
        toggleCompoent(index) {
            this.toggleState.splice(index, 1, !this.toggleState[index]);
        },
        handleDragStart(e) {
            e.stopPropagation();
            e.dataTransfer.setData("index", e.target.dataset.index);
        },
        changeCompoent(e) {},
    },
    created() {
        this.toggleState = this.componentList.map((item) => {
            return 0;
        });
        this.compoentOptions = [
            {
                label: "全部组件",
                value: "全部组件",
            },
            ...this.componentList.map((item) => {
                return {
                    label: item.title,
                    value: item.title,
                };
            }),
        ];
    },
};
</script>

<style lang="scss" scoped>
.list-warpper {
    box-sizing: border-box;
    // height: 65%;
    // padding: 10px;
    // display: grid;
    // grid-gap: 10px 19px;
    // grid-template-columns: repeat(auto-fill, 80px);
    // grid-template-rows: repeat(auto-fill, 40px);
    display: flex;
    width: 380px;
    background: #fff;
    .list-detail {
        width: 300px;
        .list-detail-title {
            width: 300px;
            height: 60px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            border-bottom: 1px solid rgb(179, 179, 179);
        }
        .component-list-search {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            ::v-deep .search-input {
                .el-input__suffix {
                    top: -3px;
                    .el-icon-search {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .list {
        overflow: auto;
        height: 760px;
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
            padding-left: 10px;
            font-size: 16px;
            // justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .compoent-children {
            height: 0;
            overflow: hidden;
            // display: flex;
            // flex-wrap: wrap;
            .compoent-single {
                width: 50%;
                display: inline-block;
                background: red;
                text-align: center;
                margin-bottom: 20px;
            }
            .compoent-chart-single {
                .compoent-chart-single-title {
                    font-weight: 500;
                    font-size: 18px;
                    padding-left: 10px;
                    // margin: 10px 0;
                    padding-top: 10px;
                }
                .chart-warpper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding-left: 10px;
                    padding-right: 10px;
                    //                     &::after {
                    //     content: '';
                    //     // flex: auto;    /* 或者flex: 1 */
                    //     flex: 1;
                    // }
                    .chart-single {
                        width: 48%;
                        // background: red;
                        margin-top: 10px;
                        text-align: center;
                        .component-img {
                            margin: 0 auto;
                            width: 80px;
                            height: 55px;
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
        }
        .height-add {
            // height: 300px;
            height: auto;
            // animation: heightAdd 1s;
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

.function-list {
    width: 80px;
    height: 1000px;
    background: rgb(61, 61, 61);
    .function-single {
        height: 99px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .function-bg {
        background: rgb(77, 147, 255);
    }
}
</style>
