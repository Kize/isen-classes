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
            <label for="float1">float: </label>
            <select id="float1" @change="update" v-model="block1.float">
              <option>none</option>
              <option>left</option>
              <option>right</option>
            </select>

            <label for="clear1">clear: </label>
            <select id="clear1" @change="update" v-model="block1.clear">
              <option>none</option>
              <option>left</option>
              <option>right</option>
              <option>both</option>
            </select>
          </div>

          <div class="block2">
            <label for="float2">float: </label>
            <select id="float2" @change="update" v-model="block2.float">
              <option>none</option>
              <option>left</option>
              <option>right</option>
            </select>

            <label for="clear2">clear: </label>
            <select id="clear2" @change="update" v-model="block2.clear">
              <option>none</option>
              <option>left</option>
              <option>right</option>
              <option>both</option>
            </select>
          </div>

          <div class="block3">
            <label for="float3">float: </label>
            <select id="float3" @change="update" v-model="block3.float">
              <option>none</option>
              <option>left</option>
              <option>right</option>
            </select>

            <label for="clear3">clear: </label>
            <select id="clear3" @change="update" v-model="block3.clear">
              <option>none</option>
              <option>left</option>
              <option>right</option>
              <option>both</option>
            </select>
          </div>

          <div class="block4">
            <label for="float4">float: </label>
            <select id="float4" @change="update" v-model="block4.float">
              <option>none</option>
              <option>left</option>
              <option>right</option>
            </select>

            <label for="clear4">clear: </label>
            <select id="clear4" @change="update" v-model="block4.clear">
              <option>none</option>
              <option>left</option>
              <option>right</option>
              <option>both</option>
            </select>
          </div>

          <div class="block0">
            <label for="overflow">overflow: </label>
            <select id="overflow" @change="updateOverflow" v-model="block0.overflow">
              <option>visible</option>
              <option>hidden</option>
            </select>

            <br>
            <label for="width">width: </label>
            <input id="width" name="width" type="range" min="0" max="125" v-model="block0.width" @change="updateWidth"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'float-example',
  data() {
    return {
      block0: {
        overflow: 'hidden',
        width: 75,
      },
      block1: {
        float: 'none',
        clear: 'none',
      },
      block2: {
        float: 'none',
        clear: 'none',
      },
      block3: {
        float: 'none',
        clear: 'none',
      },
      block4: {
        float: 'none',
        clear: 'none',
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
    updateOverflow(event) {
      const element = document.getElementById('block0');
      element.style.overflow = event.target.value;
    },
    updateWidth(event) {
      const element = document.getElementById('block0');
      const newWidth = event.target.valueAsNumber * 4;
      element.style.width = `${newWidth}px`;
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../../styles/colors';

  .box-container {

    #block0 {
      border: 5px solid #293033;
      padding: 5px;
      width: 300px;
      overflow: hidden;

      #block1 {
        border: 20px solid $bm-content;
        width: 60px;
        height: 60px;
      }

      #block2 {
        border: 30px solid $bm-margin;
        width: 40px;
        height: 40px;
      }

      #block3 {
        border: 40px solid $bm-border;
        width: 20px;
        height: 20px;
      }

      #block4 {
        border: 50px solid $bm-padding;
        width: 0;
        height: 0;
      }

    }

    .controls {
      float: right;
      padding: 0.5em;
      border: 2px dashed black;
      text-align: left;

      select {
        font-size: 0.8em;
        padding: 0.1em;
      }

      & > div:not(:last-child) {
        margin-bottom: 0.5em;
        padding: 4px 8px;

        label {
          display: inline-block;
          width: 90px;
        }
        select {
          margin-right: 0.5em;
        }
      }

      .block0 {
        border-left: 20px solid #293033;
        padding: 4px 8px;

        label {
          display: inline-block;
          width: 150px;
        }

        input {
          width: 200px;
        }
      }

      .block1 {
        border-left: 20px solid $bm-content;
      }

      .block2 {
        border-left: 20px solid $bm-margin;
      }

      .block3 {
        border-left: 20px solid $bm-border;
      }

      .block4 {
        border-left: 20px solid $bm-padding;
      }
    }
  }
</style>
