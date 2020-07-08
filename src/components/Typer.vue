<template>
  <div class="typer">
    <div class="typer-content">
      <p class="typer-static">&nbsp;</p>
      <!-- 动态变化的内容-->
      <p class="typer-dynamic">
        <span class="cut">
          <span class="word" v-for="(letter,index) in words" :key="index">{{letter}}</span>
        </span>
        <!-- 模拟光标-->
        <span class="typer-cursor"></span>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "那一年,我决定背井离乡", //str初始化
      letters: [], //str分解后的字母数组
      order: 1 //表示当前是第几句话
    };
  },
  watch: {
    //监听order值的变化，改变str的内容
    order(old, newV) {
      //   if (this.order % 4 == 1) {
      //     this.str = "那一天";
      //   } else if (this.order % 4 == 2) {
      //     this.str = "我背井离乡";
      //   } else if (this.order % 4 == 3) {
      //     this.str = "乡里人再也没喝上一口水";
      //   } else {
      //     this.str = "coding the web...";
      //   }
      // }
      if (this.order == 1) {
        this.str = "那一年,我决定背井离乡";
      } else if (this.order % 2 == 1) {
        this.str = "那一年,我决定背井离乡";
      } else {
        this.str = "乡里人再也没喝上一口水";
      }
    }
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 200);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 100);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function() {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function() {
            that.begin();
          }, 300);
        }
      };
    }
  }
};
</script>


<style scoped lang="scss">
.typer {
  margin-top: 2%;
  box-sizing: border-box;
}
.typer .typer-content {
  // font-weight: bold;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  letter-spacing: 2px;
}
.typer-dynamic {
  position: relative;
}
.cut {
  color: #fff;
}
.typer-cursor {
  position: absolute;
  height: 100%;
  width: 3px;
  top: 0;
  right: -10px;
  background-color: #e84d49;
  animation: flash 1.5s linear infinite;
}
</style>
