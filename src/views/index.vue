<template>
    <div>
        <TiChart style="background: #000;height: 500px;" :category="'bar'" :type="'rectBar'" :chartData="chartData"> </TiChart>
        <!-- <div class="trade-template">
            <div class="warpper trade-template-container">
                <div class="head">
                    <div class="head-logo">
                        <div class="head-logo-img">
                            <img src="../assets/img/home/logo.png" alt="" />
                        </div>
                        <div class="head-logo-title">低代码生成平台</div>
                    </div>
                    <div class="head-list">
                        <div class="head-list-single head-list-active" @click="scrollTo('trade-template')">
                            行业模板
                        </div>
                        <div class="head-list-single" @click="scrollTo('case-show')">案例展示</div>
                        <div class="head-list-single" @click="scrollTo('contact-us')">联系我们</div>
                    </div>
                </div>
            </div>
            <div class="trade-template-detail">
                <div class="trade-template-detail-l" :style="{ backgroundImage: 'url(' + detailObj.img + ')' }">
                    <a :href="detailObj.href" target="_blank">查看详情</a>
                    <img src="../assets/img/home/skip.png" />
                </div>
                <div class="trade-template-detail-r">
                    <div class="trade-template-detail-title">{{ detailObj.title }}</div>
                    <div class="trade-template-detail-description" :title="detailObj.description">{{ detailObj.description }}</div>
                    <swiper @changeDetail="changeDetail"></swiper>
                </div>
            </div>
            <div class="trade-template-create">
                <div class="create-btn" @click="create">
                    <i class="el-icon-plus"></i>
                    立即创建
                </div>
            </div>
        </div>

        <div class="case-show">
            <div class="case-show-title">案例展示</div>
            <template v-if="caseList.length !== 0">
                <div class="case-show-list">
                    <div
                        class="case-show-list-title"
                        :class="item.active ? 'active-case-title' : ''"
                        v-for="(item, index) in caseList"
                        @click="changeCase(index)"
                    >
                        {{ item.title }}
                    </div>
                </div>
                <div style="display: flex; justify-content: center">
                    <caseSwiper :swiperList="caseList[caseIndex].swiperList"></caseSwiper>
                </div>
            </template>
        </div>
        <div class="contact-us">
            <div class="warpper">
                <div class="contact-list">
                    <div class="contact-list-single" v-for="(item, index) in contactList">
                        <div class="contact-list-title">{{ item.title }}</div>
                        <template v-if="index === 0">
                            <div @click="scrollTo(itm.href)" class="contact-list-content" v-for="itm in item.list">
                                {{ itm.title }}
                            </div>
                        </template>
                        <template v-else-if="index === 4">
                            <div
                                class="contact-list-content"
                                :class="idx === 0 ? 'contact-phone' : ''"
                                v-for="(itm, idx) in item.list"
                            >
                                {{ itm.title }}
                            </div>
                        </template>
                        <template v-else-if="(index<=2)">
                            <div class="contact-list-content" style="cursor: default;" v-for="itm in item.list">
                               {{ itm.title }}
                            </div>
                        </template>
                        <template v-else>
                            <div class="contact-list-content" v-for="itm in item.list">
                                <a :href="itm.href" target="_blank">{{ itm.title }}</a>
                            </div>
                        </template>
                    </div>
                    <div class="code">
                        <div class="code-img"></div>
                        扫码关注公众号
                    </div>
                </div>
                <div class="copyright">Copyright © 2022-2025 江西省智能产业技术创新研究院 版权所有</div>
            </div>
        </div> -->
    </div>
</template>

<script>
import swiper from "./swiper.vue";
import caseSwiper from "./caseSwiper.vue";
export default {
    name: "index",
    components: {
        swiper,
        caseSwiper,
    },
    data() {
        return {
            chartData: [
                ["2018", "2019"],
                [120, 20],
            ],
            title: "智慧城市可视化",
            description: "文字描述",
            detailObj: {
                // img: require("../assets/img/data.png"),
                // href: "https://www.baidu.com",
            },
            caseIndex: 0,
            // caseSwiperList: [],
            caseList: [],
            contactList: [],
        };
    },
    created() {},
    mounted() {
        setTimeout(() => {
            this.chartData = [["2018"], [190]];
        }, 2000);
        setTimeout(() => {
            this.scrollTo("trade-template");
        }, 0);
        this.$axios.get("./homeConfig.json").then((res) => {
            let data = res.data;
            this.detailObj = {
                img: require("../assets/img/home/" + data.templateList[0].img),
                href: data.templateList[0].href,
                title: data.templateList[0].title,
                description: data.templateList[0].description,
            };
            this.title = data.title;
            this.description = data.description;
            this.contactList = data.contactList;
            this.caseList = data.caseList.map((item) => {
                return {
                    title: item.title,
                    active: item.active,
                    swiperList: item.swiperList.map((itm) => {
                        return itm.map((im) => {
                            return {
                                img: require("../assets/img/home/" + im.img),
                                title: im.title,
                                href: im.href,
                                des: im.des,
                            };
                        });
                    }),
                };
            });
        });
    },

    methods: {
        // getList() {
        //     let idx = this.caseList.findIndex((item) => item.active === true);
        //     return this.caseSwiperList[idx];
        // },
        changeCase(idx) {
            this.caseList.forEach((item, index) => {
                if (index === idx) {
                    item.active = true;
                    this.caseIndex = index;
                } else item.active = false;
            });
        },
        changeDetail(obj) {
            this.detailObj = {
                ...obj,
            };
        },
        create() {
            this.$router.push("/edit");
        },
        scrollTo(className) {
            let dom = document.getElementsByClassName(className)[0];
            dom.scrollIntoView();
            // document.documentElement.scrollTop = dom.offsetTop;
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.trade-template {
    padding-top: 35px;
    background: rgb(4, 19, 57);
    .head {
        color: #fff;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .head-logo {
            display: flex;
            align-items: center;
            .head-logo-title {
                font-size: 26px;
                font-size: 400;
                line-height: 26px;
            }
            .head-logo-img {
                display: flex;
                align-items: center;
            }
        }
        .head-list {
            display: flex;
            .head-list-single {
                width: 72px;
                font-size: 18px;
                margin-left: 40px;
                cursor: pointer;
                font-weight: 300;
            }
            .head-list-active {
                font-weight: 700;
            }
        }
    }
    .trade-template-detail {
        display: flex;
        height: 607px;
        color: #fff;
        background: rgb(5, 20, 59);
        .trade-template-detail-l {
            width: 1100px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: underline;
            margin: 10px 50px 0 20px;
            a {
                cursor: pointer;
                margin-right: 10px;
                font-size: 24px;
                color: #fff;
            }
            img {
                cursor: pointer;
            }
        }
        .trade-template-detail-r {
            padding-top: 123px;
            .trade-template-detail-title {
                font-size: 64px;
                font-weight: 700;
            }
            .trade-template-detail-description {
                margin-bottom: 100px;
                width: 500px;
                text-indent: 2em;
                // height: 100px;
                display: -webkit-box;
                -webkit-box-orient: vertical; /* 表示盒子对象的子元素的排列方式 */
                -webkit-line-clamp: 4; /* 限制文本的行数，表示文本第多少行省略 */
                text-overflow: ellipsis; /*  打点展示 */
                overflow: hidden;
            }
        }
    }
    .trade-template-create {
        background-image: url("../assets/img/home/map.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 300px;
        padding-top: 70px;
        .create-btn {
            width: 170px;
            height: 48px;
            margin: 0 auto;
            background: rgb(77, 147, 255);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            .el-icon-plus {
                margin-right: 10px;
            }
        }
    }
}
.case-show {
    // background-image: url('../assets/img/home/case-show-bg.png');
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    .case-show-title {
        color: rgb(51, 51, 51);
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 38px;
        margin-top: 50px;
        text-align: center;
    }
    .case-show-list {
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
        .case-show-list-title {
            width: 107px;
            height: 40px;
            background: rgb(218, 218, 218);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-right: 10px;
        }
        .active-case-title {
            background: rgb(77, 147, 255);
        }
    }
}
.contact-us {
    background: rgb(207, 207, 207);
    width: 1920px;
    height: 240px;
    color: rgb(51, 51, 51);
    padding-top: 39px;
    .warpper {
        width: 1200px;
    }
    .contact-list {
        display: flex;
        justify-content: space-between;
        .contact-list-single {
            // margin-right: 100px;
            .contact-list-title {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .contact-list-content {
                font-size: 12px;
                font-weight: 300;
                margin-bottom: 5px;
                cursor: pointer;
            }
            .contact-phone {
                color: rgb(77, 147, 255);
                font-size: 24px;
                font-weight: 700;
            }
        }
        .code {
            width: 100px;
            font-size: 12px;
            text-align: center;
            .code-img {
                height: 100px;
                margin-bottom: 6px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-image: url("../assets/img/home/qrcode.jpg");
            }
        }
    }
    .copyright {
        color: rgb(51, 51, 51);
        font-family: Noto Sans SC;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        margin-top: 31px;
    }
    a {
        color: rgb(51, 51, 51);
        text-decoration: none;
    }
}
.warpper {
    width: 1450px;
    // background: red;
    margin: 0 auto;
}
</style>
