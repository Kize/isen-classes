<template>
  <div class="box-container">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div id="block0">
          <div id="block1"></div>
          <div id="block2"></div>
          <div id="block3"></div>
          <div id="block4"></div>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div class="controls column-container">
          <div class="block1">
            <label for="display1">display: </label>
            <select id="display1" @change="update" v-model="block1.display">
              <option>block</option>
              <option>none</option>
              <option>inline-block</option>
              <option>inline</option>
            </select>

            <br>
            <label for="vertical-align1">vertical-align: </label>
            <select id="vertical-align1" @change="update" v-model="block1.verticalAlign">
              <option>baseline</option>
              <option>top</option>
              <option>middle</option>
              <option>bottom</option>
            </select>
          </div>

          <div class="block2">
            <label for="display2">display: </label>
            <select id="display2" @change="update" v-model="block2.display">
              <option>block</option>
              <option>none</option>
              <option>inline-block</option>
              <option>inline</option>
            </select>

            <br>
            <label for="vertical-align2">vertical-align: </label>
            <select id="vertical-align2" @change="update" v-model="block2.verticalAlign">
              <option>baseline</option>
              <option>top</option>
              <option>middle</option>
              <option>bottom</option>
            </select>
          </div>

          <div class="block3">
            <label for="display3">display: </label>
            <select id="display3" @change="update" v-model="block3.display">
              <option>block</option>
              <option>none</option>
              <option>inline-block</option>
              <option>inline</option>
            </select>

            <br>
            <label for="vertical-align3">vertical-align: </label>
            <select id="vertical-align3" @change="update" v-model="block3.verticalAlign">
              <option>baseline</option>
              <option>top</option>
              <option>middle</option>
              <option>bottom</option>
            </select>
          </div>

          <div class="block4">
            <label for="display4">display: </label>
            <select id="display4" @change="update" v-model="block4.display">
              <option>block</option>
              <option>none</option>
              <option>inline-block</option>
              <option>inline</option>
            </select>

            <br>
            <label for="vertical-align4">vertical-align: </label>
            <select id="vertical-align4" @change="update" v-model="block4.verticalAlign">
              <option>baseline</option>
              <option>top</option>
              <option>middle</option>
              <option>bottom</option>
            </select>
          </div>

          <div class="block0">
            <label for="width">width: </label>
            <input id="width" name="width" type="range" min="30" max="125" v-model="block0.width"
                   @change="updateWidth"/>

            <br>
            <label for="text-align0">text-align: </label>
            <select id="text-align0" @change="update" v-model="block0.textAlign">
              <option>initial</option>
              <option>center</option>
              <option>start</option>
              <option>end</option>
              <option>left</option>
              <option>right</option>
              <option>justify</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display-example',
  data() {
    return {
      block0: {
        width: 75,
        textAlign: 'initial',
      },
      block1: {
        display: 'block',
        verticalAlign: 'baseline',
      },
      block2: {
        display: 'block',
        verticalAlign: 'baseline',
      },
      block3: {
        display: 'block',
        verticalAlign: 'baseline',
      },
      block4: {
        display: 'block',
        verticalAlign: 'baseline',
      },
    };
  },
  methods: {
    update(event) {
      const srcId = event.srcElement.id;
      const identifier = srcId.slice(0, -1);
      const index = srcId.slice(-1);

      const element = document.getElementById(`block${index}`);
      element.style[identifier] = event.target.value;
    },
    updateWidth(event) {
      const element = document.getElementById('block0');
      const newWidth = event.target.valueAsNumber * 5;
      element.style.width = `${newWidth}px`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';

  .box-container {

    #block0 {
      text-align: initial;
      border: 5px solid #293033;
      padding: 5px;
      width: 300px;
      height: 600px;

      #block1, #block2, #block3, #block4 {
        display: block;
      }

      #block1 {
        border: 20px solid $bm-padding;
        height: 120px;
        width: 120px;
      }

      #block2 {
        border: 10px solid $bm-margin;
        height: 200px;
        width: 200px;
      }

      #block3 {
        border: 15px solid $bm-content;
        height: 20px;
      }

      #block4 {
        border: 50px solid $bm-border;
        width: 15px;
        height: 15px;
      }
    }

    .controls {
      float: right;
      padding: 0.5em;
      border: 2px dashed black;
      text-align: left;
      z-index: 1000;

      select {
        font-size: 0.8em;
        padding: 0.1em;
      }

      & > div {
        margin-bottom: 0.5em;
        padding: 4px 8px;

        label {
          display: inline-block;
          width: 250px;
        }
        select {
          margin-right: 0.5em;
        }
      }

      .block0 {
        border-left: 20px solid #293033;

        input {
          width: 200px;
        }
      }

      .block1 {
        border-left: 20px solid $bm-padding;
      }

      .block2 {
        border-left: 20px solid $bm-margin;
      }

      .block3 {
        border-left: 20px solid $bm-content;
      }

      .block4 {
        border-left: 20px solid $bm-border;
      }
    }
  }
</style>
