<template>
  <div class="box-container">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div id="block0">
          <div id="block1"></div>
          <div id="block2">
            <div id="block3"></div>
          </div>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div class="controls column-container">
          <div class="block1">
            <label for="position1">position: </label>
            <select id="position1" @change="update" v-model="block1.position">
              <option>absolute</option>
              <option>fixed</option>
              <option>relative</option>
              <option>static</option>
            </select>

            <br>
            <label for="sides1">sides: </label>
            <select id="sides1" @change="update" v-model="block1.sides">
              <option value="1">auto</option>
              <option value="2">left: 100px; top: 100px</option>
              <option value="3">bottom: 20px; right: 20px</option>
              <option value="4">left: 50px; right: 1000px</option>
            </select>
          </div>

          <div class="block2">
            <label for="position2">position: </label>
            <select id="position2" @change="update" v-model="block2.position">
              <option>absolute</option>
              <option>fixed</option>
              <option>relative</option>
              <option>static</option>
            </select>

            <br>
            <label for="sides2">sides: </label>
            <select id="sides2" @change="update" v-model="block2.sides">
              <option value="1">auto</option>
              <option value="2">left: 100px; top: 100px</option>
              <option value="3">bottom: 20px; right: 20px</option>
              <option value="4">left: 50px; right: 1000px</option>
            </select>
          </div>

          <div class="block3">
            <label for="position3">position: </label>
            <select id="position3" @change="update" v-model="block3.position">
              <option>absolute</option>
              <option>fixed</option>
              <option>relative</option>
              <option>static</option>
            </select>

            <br>
            <label for="sides3">sides: </label>
            <select id="sides3" @change="update" v-model="block3.sides">
              <option value="1">auto</option>
              <option value="2">left: 100px; top: 100px</option>
              <option value="3">bottom: 20px; right: 20px</option>
              <option value="4">left: 50px; right: 1000px</option>
            </select>
          </div>

          <div class="block0">
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
  name: 'position-example',
  data() {
    return {
      block0: {
        width: 75,
      },
      block1: {
        position: 'static',
        sides: '1',
      },
      block2: {
        position: 'static',
        sides: '1',
      },
      block3: {
        position: 'static',
        sides: '1',
      },
      block4: {
        position: 'static',
        sides: '1',
      },
    };
  },
  methods: {
    update(event) {
      const srcId = event.srcElement.id;
      const identifier = srcId.slice(0, -1);
      const index = srcId.slice(-1);

      const element = document.getElementById(`block${index}`);
      if (identifier !== 'sides') {
        element.style[identifier] = event.target.value;
      } else {
        const selected = parseInt(event.target.value, 10);

        element.style.top = '';
        element.style.right = '';
        element.style.left = '';
        element.style.bottom = '';

        switch (selected) {
          case 2:
            element.style.left = '100px';
            element.style.top = '100px';
            break;
          case 3:
            element.style.bottom = '20px';
            element.style.right = '20px';
            break;
          case 4:
            element.style.left = '50px';
            element.style.right = '1000px';
            break;
          default:
        }
      }
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
      position: absolute;
      border: 5px solid #293033;
      padding: 5px;
      width: 300px;
      height: 600px;

      #block1, #block2, #block3, #block4 {
        position: static;
      }

      #block1 {
        border: 20px solid $bm-padding;
        height: 60px;
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
          width: 150px;
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
    }
  }
</style>
