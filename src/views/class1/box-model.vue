<template>
  <div class="box-container">
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div id="div-margin">
          <div id="the-div">
            <div class="content"></div>
          </div>
        </div>
      </div>

      <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
        <div class="controls column-container">
          <div class="height">
            <label for="height">height: </label>
            <input id="height" name="height" type="range" min="0" max="80" v-model="height" @change="updateHeight"/>
            <span>{{height}}</span>
          </div>

          <div class="width">
            <label for="width">width: </label>
            <input id="width" name="width" type="range" min="0" max="80" v-model="width" @change="updateWidth"/>
            <span>{{width}}</span>
          </div>

          <div class="border">
            <label for="border">border: </label>
            <input id="border" name="border" type="range" min="0" max="50" v-model="border" @change="updateBorder"/>
            <span>{{border}}</span>
          </div>

          <div class="margin">
            <label for="margin">margin: </label>
            <input id="margin" name="margin" type="range" min="0" max="30" v-model="margin" @change="updateMargin"/>
            <span>{{margin}}</span>
          </div>

          <div class="padding">
            <label for="padding">padding: </label>
            <input id="padding" name="padding" type="range" min="0" max="30" v-model="padding" @change="updatePadding"/>
            <span>{{padding}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box-model',
  data() {
    return {
      height: 25,
      width: 25,
      border: 5,
      margin: 10,
      padding: 10,
    };
  },
  methods: {
    updateHeight(event) {
      const element = document.getElementById('the-div');
      const newHeight = event.target.valueAsNumber * 2;
      element.style.height = `${newHeight}px`;
      this.updateMargin();
    },
    updateWidth(event) {
      const element = document.getElementById('the-div');
      const newWidth = event.target.valueAsNumber * 2;
      element.style.width = `${newWidth}px`;
      this.updateMargin();
    },
    updateBorder(event) {
      const element = document.getElementById('the-div');
      const newBorder = event.target.valueAsNumber * 2;
      element.style.border = `${newBorder}px solid #990033`;
      this.updateMargin();
    },
    updateMargin(event) {
      const element = document.getElementById('the-div');
      const marginElement = document.getElementById('div-margin');

      let newMargin;

      if (event) {
        newMargin = event.target.valueAsNumber * 2;
      } else {
        newMargin = this.margin * 2;
      }

      let newWidth = this.width * 2;
      newWidth += this.border * 2 * 2;
      newWidth += this.padding * 2 * 2;
      newWidth += newMargin * 2;

      let newHeight = this.height * 2;
      newHeight += this.border * 2 * 2;
      newHeight += this.padding * 2 * 2;
      newHeight += newMargin * 2;

      marginElement.style.width = `${newWidth}px`;
      marginElement.style.height = `${newHeight}px`;
      element.style.margin = `${newMargin}px`;
    },
    updatePadding(event) {
      const element = document.getElementById('the-div');
      const newPadding = event.target.valueAsNumber * 2;
      element.style.padding = `${newPadding}px`;
      this.updateMargin();
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';

  .box-container {

    #div-margin {
      background-color: $bm-margin;
      width: 150px;
      height: 150px;

      #the-div {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 10px solid $bm-border;
        background-color: $bm-padding;
        margin: 20px;
        padding: 20px;

        .content {
          width: 100%;
          height: 100%;
          background-color: $bm-content;
        }
      }
    }

    .controls {
      float: right;
      padding: 1em;
      border: 2px dashed black;
      text-align: left;

      & > div {
        margin-bottom: 0.5em;
        padding: 4px 8px;

        label {
          display: inline-block;
          width: 140px;
        }
      }

      .width, .height {
        border-left: 20px solid $bm-content;
      }

      .margin {
        border-left: 20px solid $bm-margin;
      }

      .border {
        border-left: 20px solid $bm-border;
      }

      .padding {
        border-left: 20px solid $bm-padding;
      }
    }
  }
</style>
