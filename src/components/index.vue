<template>
  <!-- 拷贝的页面 -->
  <div>

    <div class="section" v-for="item in goodsList">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a href="/goods/43.html" v-for="it in item.level2catelist">{{it.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="it in item.datas">
              <a href="#/site/goodsinfo/102" class>
                <div class="img-box">
                  <img :src="it.img_url">
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 导入axios
import axios from "axios";
// 导入moment
import moment from "moment";

export default {
    name:'index',
    // 数据
    data(){
        return {
            // 分类数据
            catelist:[],
            // 轮播图数据
            sliderlist:[],
            // 热卖数据
            toplist:[],
            // 底部数据
            goodsList:[]
        };
    },
    // 过滤器
    filters:{
        // value 过滤的数据
        formatTime(value){
            // 处理数据  并返回
            return moment(value).format('YYYY-MM-DD')
        }
    },
    created() {
        // 顶部数据
        axios.get('http://111.230.232.110:8899/site/goods/gettopdata/goods ')
        .then(res=>{
            // console.log(res);
            // 赋值
             this.catelist=res.data.message.catelist;
             this.sliderlist=res.data.message.sliderlist;
             this.toplist=res.data.message.toplist;
        });
        // 底部数据
        axios.get('http://111.230.232.110:8899/site/goods/getgoodsgroup')
        .then(res=>{
            // console.log(res);
            this.goodsList=res.data.message;
        })
    },
};
</script>

<style>
</style>