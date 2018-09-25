<template>
  <div class="eg-slideshow dom-events">
    <slide class="slide" leave='fadeOut' steps="2">
      <h1>DOM & HTML Events</h1>

      <img class="main-img" src="./assets/dom.gif" v-if="step >= 2">
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="7">
      <h2>
        <span class="color-accent">D</span>ocument
        <span class="color-accent">O</span>bject
        <span class="color-accent">M</span>odel
      </h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2"><a href="https://en.wikipedia.org/wiki/Application_programming_interface">API</a></li>
          <li v-if="step >= 3">HTML & XML Dcuments</li>
          <li v-if="step >= 4">Representation of the document</li>
          <li v-if="step >= 5">Manipulate and retrieve elements</li>
          <li v-if="step >= 6">Cross-platform</li>
          <li v-if="step >= 7">Language independent</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>HTML DOM & browsers</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var browserWindow = window;
var dom = document || window.document;

var htmlElement = document.children[0];
var bodyElement = htmlElement.children[1];
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="9">
      <h2>Node Types</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li v-if="step >= 2">
            <code>ELEMENT_NODE</code>
            (<span class="color-accent"> 1 </span>)
          </li>
          <li v-if="step >= 3">
            <code>TEXT_NODE</code>
            (<span class="color-accent"> 3 </span>)
          </li>
          <li v-if="step >= 4">
            <code>COMMENT_NODE</code>
            (<span class="color-accent"> 8 </span>)
          </li>
          <li v-if="step >= 5">
            <code>DOCUMENT_NODE</code>
            (<span class="color-accent"> 9 </span>)
          </li>
          <li v-if="step >= 6">
            <code>DOCUMENT_TYPE_NODE</code>
            (<span class="color-accent"> 10 </span>)
          </li>
          <li v-if="step >= 7">
            <code>DOCUMENT_FRAGMENT_NODE</code>
            (<span class="color-accent"> 11 </span>)
          </li>
        </ul>
      </div>

      <section class="links">
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType" v-if="step >= 8">
          MDN Node types documentation
        </a>

        <br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment" v-if="step >= 9">
          MDN Document fragment
        </a>
      </section>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Node Name property</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
console.log(document.nodeName);       // => '#document'

console.log(titleElement.nodeName);   // => 'H2'

console.log(textNode.nodeName);    // => '#text'

console.log(comElement.nodeName);     // => '#comment'
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Node Value property</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
console.log(document.nodeValue);       // => null

console.log(titleElement.nodeValue);   // => null

console.log(textNode.nodeValue);    // => A string containing the text. 'any content  '

console.log(comElement.nodeValue);     // => A string containing the comment.
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 id="slide-title" class="random-class" yolo="true">Access to attributes</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var title = document.getElementById('slide-title');

var titleAttributes = title.attributes;       // attributes => NamedNodeMap

console.log(document.attributes);             // => null

console.log(textNode.attributes);             // => null

console.log(comElement.attributes);           // => null
        </code></pre>
      </div>
    </slide>

    <slide class="slide tree-slide" enter='bounceInRight' leave='fadeOut' steps="4">
      <h2>Let's see a tree</h2>

      <img class="tree-img" src="./assets/drunken-tree.gif" v-if="step === 2">

      <div class="slide-content" v-if="step === 3">
        <pre v-highlightjs><code class="HTML">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;meta charset="utf-8">
    &lt;title>Heart Of Gold Crew&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;h1>The crew of the heart of gold starship :&lt;/h1>

    &lt;div id="starship" class="infinite-improbability-drive">Heart of gold
      &lt;div id="zaphod">Zaphod Beeblebox&lt;/div>
      &lt;div id="trillian">Tricia McMillan&lt;/div>
      &lt;div id="arthur">Arthur Dent&lt;/div>
      &lt;div id="marvin">Marvin&lt;/div>
    &lt;/div>
  &lt;/body>
&lt;/html>
        </code></pre>
      </div>

      <div class="slide-content" v-if="step >= 4">
        <svg data-v-99eebf62="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="780" height="480" id="svg2" version="1.1" inkscape:version="0.47 r22583" sodipodi:docname="dom-tree-example.svg" class="incremental"><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer2" inkscape:label="c1" transform="translate(0,-572.36218)" style="display: inline;"><rect data-v-99eebf62="" id="rect2886" width="740" height="35" x="20.000002" y="592.36218" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 0); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="390.12912" y="619.30481" id="text3684" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686" x="390.12912" y="619.30481" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">#document</tspan></text><g data-v-99eebf62="" id="g3688-0" transform="translate(-38.588846,639.84797)"></g><text data-v-99eebf62="" id="text3684-8-8-2-0-8-31-7-6-2-59-8-9-8" y="412.3855" x="65" xml:space="preserve" transform="translate(0,572.36218)" style="display: inline; font-size: 25.1803px; font-style: normal; font-weight: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" y="412.3855" x="65" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-9-5" sodipodi:role="line" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">DOCUMENT_NODE</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-7-7-2-13-6-5" width="35" height="22" x="20" y="396" ry="2.0354629" transform="translate(0,572.36218)" style="display: inline; color: rgb(0, 0, 0); fill: rgb(255, 255, 0); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; overflow: visible;"></rect></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer3" inkscape:label="c2" style="display: inline;"><rect data-v-99eebf62="" transform="translate(0,-572.36218)" ry="3.2382364" y="647.36218" x="20.000002" height="35" width="70" id="rect2886-3" style="color: rgb(0, 0, 0); fill: rgb(171, 200, 55); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" transform="translate(0,-572.36218)" id="text3684-4" y="674.30481" x="54.993858" xml:space="preserve" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" y="674.30481" x="54.993858" id="tspan3686-6" sodipodi:role="line" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">html</tspan></text><rect data-v-99eebf62="" id="rect2886-5" width="650" height="35" x="109.99999" y="75" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="434.29916" y="101.48769" id="text3684-8" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9" x="434.29916" y="101.48769" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">HTML</tspan></text><text data-v-99eebf62="" id="text3684-8-8-2-0-8-31-7-6-2-59-8-6" y="412.3855" x="356.6875" xml:space="preserve" style="font-size: 25.1803px; font-style: normal; font-weight: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; display: inline; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" y="412.3855" x="356.6875" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-1" sodipodi:role="line" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">ELEMENT_NODE</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-7-7-2-13-3" width="35" height="22" x="311.6875" y="396" ry="2.0354629" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" id="text3684-8-8-2-0-8-31-7-6-2-59-8-9" y="454.3855" x="65" xml:space="preserve" style="font-size: 25.1803px; font-style: normal; font-weight: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; display: inline; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" y="454.3855" x="65" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-9" sodipodi:role="line" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">DOCUMENT_TYPE_NODE</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-7-7-2-13-6" width="35" height="22" x="20" y="438" ry="2.0354629" style="color: rgb(0, 0, 0); fill: rgb(171, 200, 55); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer4" inkscape:label="c3" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3" width="158" height="35" x="109.99999" y="130" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="188.6127" y="156.52457" id="text3684-8-8" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7" x="188.6127" y="156.52457" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">HEAD</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-5" width="472" height="35" x="288" y="130" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="544.8689" y="156.50612" id="text3684-8-8-7" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-3" x="544.8689" y="156.50612" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">BODY</tspan></text><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,163.48,-16.02002)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-9" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,446.79445,283.97998)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><text data-v-99eebf62="" xml:space="preserve" x="588.81445" y="440.2312" id="text3684-8-8-2-0-8-31-6-1" style="font-size: 25.1803px; font-style: normal; font-weight: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; display: inline; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" x="588.81445" y="440.2312" id="tspan3106" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">TEXT_NODE</tspan><tspan data-v-99eebf62="" sodipodi:role="line" x="588.81445" y="463.9812" id="tspan3110" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">(with whitespaces)</tspan></text></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer5" inkscape:label="c4" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3-4" width="69" height="35" x="198.99998" y="184" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="232.65111" y="208.30957" id="text3684-8-8-6" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-1" x="232.65111" y="208.30957" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">META</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2" width="69" height="35" x="109.99999" y="184" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="144.87572" y="208.28174" id="text3684-8-8-2" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9" x="144.87572" y="208.28174" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">TITLE</tspan></text><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,74.479984,37.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,29.979991,10.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,118.97998,10.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer6" inkscape:label="c5" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-1" width="69" height="35" x="109.99999" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="144.59741" y="263.17969" id="text3684-8-8-2-0-8-31-6" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-6" x="144.59741" y="263.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text><text data-v-99eebf62="" id="text3684-8-8-2-0-8-31-7-6-2-59-8-6-1" y="412.3855" x="588.81445" xml:space="preserve" style="font-size: 25.1803px; font-style: normal; font-weight: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; display: inline; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" y="412.3855" x="588.81445" id="tspan3686-9-7-9-2-3-88-2-7-8-78-6-1-5" sodipodi:role="line" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: start; text-anchor: start; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">TEXT_NODE</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-7-7-2-13-3-9" width="35" height="22" x="543.81445" y="396" ry="2.0354629" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer7" inkscape:label="c6" style="display: inline;"><rect data-v-99eebf62="" ry="3.2382364" y="184" x="370" height="35" width="390" id="rect2886-5-3-4-5" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="563.86273" y="210.48769" id="text3684-8-8-6-0" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-1-9" x="563.86273" y="210.48769" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">DIV</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8" width="62" height="35" x="288" y="184" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="319.78073" y="210.48769" id="text3684-8-8-2-0" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2" x="319.78073" y="210.48769" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">H1</tspan></text><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,204.48001,10.97998)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,245.48,37.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0-3" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,450.48,10.97998)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer8" inkscape:label="c7" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4" width="62" height="35" x="288" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="319.09741" y="263.17969" id="text3684-8-8-2-0-8-31" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88" x="319.09741" y="263.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer9" inkscape:label="c8" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-2" width="62" height="35" x="698" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="727.86273" y="265.4877" id="text3684-8-8-2-0-8-7" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-2" x="727.86273" y="265.4877" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">DIV</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-8" width="62" height="35" x="616" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="645.86273" y="265.4877" id="text3684-8-8-2-0-8-1" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-5" x="645.86273" y="265.4877" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">DIV</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-6" width="62" height="35" x="534" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="563.86273" y="265.4877" id="text3684-8-8-2-0-8-2" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-9" x="563.86273" y="265.4877" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">DIV</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-89" width="62" height="35" x="452" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(255, 255, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="481.8627" y="265.4877" id="text3684-8-8-2-0-8-3" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-8" x="481.8627" y="265.4877" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; font-family: &quot;Droid Sans&quot;;">DIV</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-5" width="62" height="35" x="370" y="239" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="401.09741" y="263.17969" id="text3684-8-8-2-0-8-31-0" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-0" x="401.09741" y="263.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0-1" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,409.48,92.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0-0" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,491.48,92.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0-8" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,573.48,92.97999)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path><path data-v-99eebf62="" sodipodi:type="arc" id="path4253-2-7-1-0-8-5" sodipodi:cx="272.66666" sodipodi:cy="389.33334" sodipodi:rx="16.666666" sodipodi:ry="16.666666" d="m 289.33332,389.33334 a 16.666666,16.666666 0 1 1 -33.33333,0 16.666666,16.666666 0 1 1 33.33333,0 z" transform="matrix(0.42000002,0,0,0.42000002,614.48,65.81332)" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></path></g><g data-v-99eebf62="" inkscape:groupmode="layer" id="layer10" inkscape:label="c9" style="display: inline;"><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-7" width="62" height="35" x="452" y="300" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="483.09741" y="324.17969" id="text3684-8-8-2-0-8-31-7" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-2" x="483.09741" y="324.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-2" width="62" height="35" x="534" y="300" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="565.09741" y="324.17969" id="text3684-8-8-2-0-8-31-5" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-26" x="565.09741" y="324.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-4" width="62" height="35" x="616" y="300" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="647.09741" y="324.17969" id="text3684-8-8-2-0-8-31-04" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-8" x="647.09741" y="324.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text><rect data-v-99eebf62="" id="rect2886-5-3-2-8-1-4-51" width="62" height="35" x="698" y="300" ry="3.2382364" style="color: rgb(0, 0, 0); fill: rgb(0, 0, 255); fill-opacity: 1; fill-rule: nonzero; stroke: none; stroke-width: 3; marker: none; visibility: visible; display: inline; overflow: visible;"></rect><text data-v-99eebf62="" xml:space="preserve" x="729.09741" y="324.17969" id="text3684-8-8-2-0-8-31-2" style="font-size: 25.1803px; font-style: normal; font-weight: normal; fill: rgb(255, 255, 255); fill-opacity: 1; stroke: none; font-family: &quot;Bitstream Vera Sans&quot;;"><tspan data-v-99eebf62="" sodipodi:role="line" id="tspan3686-9-7-9-2-3-88-82" x="729.09741" y="324.17969" style="font-size: 19px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-align: center; text-anchor: middle; fill: rgb(255, 255, 255); font-family: &quot;Droid Sans&quot;;">#text</tspan></text></g></svg>
      </div>
    </slide>

    <slide class="slide tree-slide" enter='bounceInRight' leave='fadeOut' steps="2">
      <h2>Navigation</h2>

      <img class="tree-img" src="./assets/navigation-tree.gif" v-if="step >= 2">
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Family properties</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var doctype = document.firstChild;

var html = doctype.nextSibling;                 // previousSibling also exists

var body = html.lastChild;

var h2 = body.firstElementChild.nextSibling.nextSibling.lastElementChild.lastElementChild.firstChild.firstChild;
console.log(h2.nodeName);                       // => "H2"     :-)

console.log(h2.parentNode);                     // => &lt;div class="eg-slide-content">

console.log(codeElt.childNodes.length);         // => 25 !!!
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 id="title">Search in the <span class="color-accent">tree</span></h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var title = document.getElementById('title');                         // The title of this slide

var divs = document.getElementsByTagName('div');                      // List of divs of the document

var varElements = document.getElementsByClassName('hljs-keyword');    // var Elements in the code example


var greenTreeWord = document.querySelector('.color-accent');          // span element 'tree' in the title

var docs = document.querySelectorAll('code .hljs-built_in');          // span elements 'document' of the code example
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 id="manip-title">Manipulation</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var title = document.getElementById('manip-title');

title.id = 'manipulation-title';

console.log(title.innerHTML); // => Manipulation

title.innerHTML = 'I just hacked this slide.'

title.classList.add('color-accent');
title.classList.remove('color-accent');

title.classList.add('rainbow');
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Style Manipulation</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var title = document.querySelector('h2');

title.style.paddingLeft = '10px';
title.style.borderLeft = '5px solid #00F';

title.style.color = 'blue';
title.style.cssFloat = 'left';
title.style.styleFloat = 'left';
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Add new nodes</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var mainContainer = document.querySelector('h2').parentNode;
var otherTitle = document.createElement('h3');

otherTitle.innerHTML = 'Hello world :)';
otherTitle.classList.add('color-accent');

mainContainer.appendChild(otherTitle);

var codeBlock = mainContainer.removeChild(mainContainer.children[1]);

var copy = codeBlock.cloneNode(true);
copy.style.textShadow = '1px 1px cornflowerblue';

mainContainer.insertBefore(copy, otherTitle);
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 id="jquery-title">JQuery</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var title1 = document.querySelector('h2');
var title2 = $('h2'); // similar to document.querySelector but returned value has more properties
                      // and more functions works on old browsers :-D

console.log(title1.getAttribute('id'));       // => jquery-title
console.log(title2.attr('id'));               // => jquery-title
title2.attr('id', '\o/');                     // => id modified!

console.log(title1.innerHTML);                // => Michael Corleone
console.log(title2.html());                   // => Michael Corleone
title2.html('Michael CORLEONE');              // => content modified!

console.log(title1 === title2);               // => false
console.log(title1 === title2[0]);            // => true
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 id="arthur">Styling with JQuery</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="JavaScript">
var arthur = $('arthur');

arthur.css('padding-left', '10px');
arthur.css('border-left', '5px solid #00F');
arthur.css('color', 'blue');
arthur.css('float', 'left');  // Every browser
        </code></pre>
      </div>
    </slide>

    <!--HTML EVENTS-->
    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h1>HTML Events</h1>

      <img class="main-img" src="./assets/html-events.gif">
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="8">
      <h2>Definition</h2>

      <div class="list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-if="step >= 2">"Message"</li>
          <li v-if="step >= 3">Sent by the Browser</li>
          <li v-if="step >= 4">Internal state</li>
          <li v-if="step >= 5">DOM Objects</li>
          <li v-if="step >= 6">Has changed</li>
          <li v-if="step >= 7">Listeners</li>
          <li v-if="step >= 8">"Observer pattern"</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 class="title-no-margin">Listeners</h2>

      <button class="useless-button">Useless button</button>

      <div class="slide-content">
        <pre v-highlightjs><code class="HTML">&lt;button class="useless-button" onclick="uselessAction()">Useless button&lt;/button>
&lt;!-- no content/behaviour separation :-( --></code></pre>

        <pre v-highlightjs><code class="JavaScript">function uselessAction(event) {
  console.log(event);
  window.alert('I told you it was useless...');
}

var button = document.querySelector('.useless-button');

button.onclick = uselessAction;                                // only one listener :-(
button.addEventListener('click', uselessAction, {              // W3C Standard
  capture: false,
  once: false,
  passive: false
});
        </code></pre>

        <pre v-highlightjs><code class="JavaScript">button.onclick = null;

button.removeEventListener('click', uselessAction, {
  capture: true,
  once: false,
  passive: false
});</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="8">
      <h2 class="title-no-margin">Types & properties</h2>
      <h3 class="subtitle-no-margin">Common properties</h3>

      <div class="list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-if="step >= 2">target</li>
          <li v-if="step >= 3">type</li>
          <li v-if="step >= 4">timestamp</li>
          <li v-if="step >= 5">eventPhase</li>
          <li v-if="step >= 6">bubbles</li>
          <li v-if="step >= 7">currentTarget</li>
          <li v-if="step >= 8">isTrusted</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="8">
      <h2 class="title-no-margin">Types & properties</h2>
      <h3 class="subtitle-no-margin">UI Events</h3>

      <div class="list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-if="step >= 2">load</li>
          <li v-if="step >= 3">unload</li>
          <li v-if="step >= 4">abort</li>
          <li v-if="step >= 5">error</li>
          <li v-if="step >= 6">resize</li>
          <li v-if="step >= 7">scroll</li>
          <li v-if="step >= 8">select</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="5">
      <h2 class="title-no-margin">Types & properties</h2>
      <h3 class="subtitle-no-margin">Event types</h3>

      <div class="list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-if="step >= 2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent">
              Mouse
            </a>
          </li>
          <li v-if="step >= 3">
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent">
              Keyboard
            </a>
          </li>
          <li v-if="step >= 4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent">
              Focus (blur, focus, focusin, focusout, DOMfocusin, DOMfocusout)
            </a>
          </li>
          <li v-if="step >= 5">Forms (
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit">submit</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset">reset</a>,
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid">invalid</a>,
            )
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut' steps="5">
      <h2 class="title-no-margin">Types & properties</h2>
      <h3 class="subtitle-no-margin">And so much more...</h3>

      <div class="list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-if="step >= 2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/User_input_methods/Touch_Gestures_and_Events">
              Touch gestures
            </a>
          </li>
          <li v-if="step >= 3">
            <a href="https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation">
              Device orientation
            </a>
          </li>
          <li v-if="step >= 4">
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events">
              Custom events
            </a>
          </li>
          <li v-if="step >= 5">
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent">
              Wheel
            </a>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 class="title-no-margin">Bubbling & Propagation</h2>

      <pre v-highlightjs><code>var title = document.querySelector('h2'), body = document.querySelector('body'), logger = document.querySelector('p.logger');
var EventCounterT = 0, EventCounterB = 0;

function listenTitle(ev) {
  logger.innerHTML = "title listener " + EventCounterT;   EventCounterT++;  console.log('mouse', ev);
}
function listenBody(ev) {
  logger.innerHTML = "body listener " + EventCounterB;   EventCounterB++;
}

title.addEventListener('click', listenTitle);
body.addEventListener('click', listenBody);

function listenTitle2(ev) {
  logger.innerHTML = "title listener " + EventCounterT;   EventCounterT++;
  ev.stopPropagation();
}

title.removeEventListener('click', listenTitle);
title.addEventListener('click', listenTitle2);</code></pre>

      <p class="logger"></p>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 class="title-no-margin">
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture">
          Cancellation & prevent default
        </a>
      </h2>

      <pre v-highlightjs><code>var title = document.querySelector('h2'), logger = document.querySelector('p.logger');

function listen(ev) {
  console.log('click', ev);

  logger.innerHTML = "Event prevented. Link here => ";
  var a = ev.target.cloneNode();
  a.innerHTML = a.getAttribute('href');
  logger.appendChild(a);

  if (ev.cancelable) {
    ev.preventDefault();
  }
}

title.addEventListener('click', listen);</code></pre>

      <p class="logger"></p>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 class="title-no-margin">Capture</h2>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <table>
            <tbody>
              <tr>
                <td>cell 1</td>
                <td>cell 2</td>
              </tr>
              <tr>
                <td>cell 3</td>
                <td>cell 4</td>
              </tr>
            </tbody>
          </table>

          <pre v-highlightjs><code class="JavaScript">var table = document.querySelector('table');
var cell = document.querySelector('td');

function listenTable(ev) {
  console.log('Captured by the table', ev);
  ev.stopPropagation();
}
function listenCell(ev) {
  console.log('Handled by the cell', ev);
}

// Add a listener to capture events on a table
table.addEventListener('click', listenTable, { capture: true });
cell.addEventListener('click', listenCell);
         </code></pre>
        </div>

        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <img src="./assets/capture-event.png">
        </div>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2 class="title-no-margin">
        <a href="https://api.jquery.com/">JQuery</a>
      </h2>

      <pre v-highlightjs><code class="JavaScript">
function listen(ev) {
  console.log('clicked !', ev);
}

$('h2').on('click', listen);            // Add a listener
$('h2').click(listen);                  // Exactly the same

$('h2').off('click', listen);

$('span.hljs-string').click(listen);    // Add a listener on each element selected
         </code></pre>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js';
import { initGamepad, resetGamepad } from '../../utils/gamepad-service';

export default {
  mixins: [
    eagle.slideshow,
  ],
  name: 'dom-events',
  created() {
    this.updateSlides();

    initGamepad(this.nextStep, this.previousStep);
  },
  methods: {
    updateSlides() {
      this.currentSlideIndex = +this.$route.params.slide;
      this.$nextTick(() => {
        this.step = +this.$route.params.step;
      });
    },
    updateURL() {
      this.$router.push(`/dom-events/${this.currentSlideIndex}/${this.step}`);
    },
  },
  props: {
    mouseNavigation: false,
  },
  watch: {
    $route: 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
  destroyed() {
    resetGamepad();
  },
};
</script>

<style lang="scss">
  .dom-events {
    .eg-slide-content {
      width: 85vw;
    }
  }
</style>

<style scoped lang="scss">
  @import '../../styles/colors';
  @import '../../styles/slide';
  @import '../../styles/slideshow';
  @import '../../styles/rainbow';

  .eg-slideshow {

    .main-img {
      margin-top: 1em;
      height: 50vh;
    }

    .links {
      text-align: right;
    }

    h2.title-no-margin {
      margin-bottom: 0.1em;
    }

    h3.subtitle-no-margin {
      margin-top: 0.1em;
    }

    .tree-slide {

      .tree-img {
        height: 70vh;
      }

      svg {
        background-color: #333333;
      }
    }

  }
</style>
