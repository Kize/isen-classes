<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>GIF IT !</h1>

    <img src="https://cataas.com/cat/gif" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">Setting up the server</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Let's get it !</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">Retrieve the data</a>
        </li>
        <li>
          <a href="#ex-4" v-on:click="restoreUrl">POST & DELETE</a>
        </li>
        <li>
          <a href="#ex-5" v-on:click="restoreUrl">Bonus (optional)</a>
        </li>
      </ul>
    </nav>

    <p>Here is your new lab, please follow those instructions: </p>
    <ul>
      <li>Read fully each exercise</li>
      <li>Identify your learning goals</li>
      <li>Understand the context</li>
      <li>Follow indicated rules</li>
      <li>Commit <i class="accent">ONLY</i> files asked</li>
      <li>Submit an archive (<code>.tar.gz</code>) containing a directory per exercise</li>
    </ul>

    <strong>Releases Dates:</strong>
    <ul>
      <li>First group: 1543445999368</li>
      <li>Second group: 1544050799368</li>
    </ul>

    <p>The lesson contains lots of references to help you find the solution.
      You must find documentation by yourself.</p>
    <p>Remember that the web is your friend ;-)</p>
    <p>Have fun !</p>

    <!--REQUIREMENTS-->
    <h4>Requirements</h4>

    <p>You only need to have a Node.js installed on your laptop. The last version might be better.</p>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">Setting up the server</h2>
    <h3>Learning goals</h3>

    <ul>
      <li>Learn how to install dependencies with NPM</li>
      <li>Create an Expresjs App</li>
      <li>Learn how to serve static files with Express</li>
    </ul>


    <h3>Context</h3>

    <p>
      One of your colleague started an app to display GIFs and save it in a database.
      But he forgot to do the most important part, the server.
      You will have to build a backend application, with Node.js and Express, to finish his work.
    </p>


    <h3>Steps</h3>

    <ol>
      <li>
        Retrieve the archive <a href="https://github.com/Kize/isen-classes/tree/master/labs-files">tp5-src.tar.gz</a>,
        this is the frontend part.
        In the directory of your choice (where you want your lab5 to be), extract this archive,
        in order to to put each file in a directory named <code>public</code>.
      </li>

      <li>
        Now in your working directory (not 'public', but the one contaning it),
        run the command <code>npm init</code>, and answer to the questions.
        It should generate a <code>package.json</code> file.
      </li>

      <li>
        Install the first dependency of your project: <a href="https://www.npmjs.com/package/express">Express.js</a>.
        <br> Note: For old version of Node.js, be sure that <code>express</code> is declared in your 'package.json'
        file after the installation.
      </li>

      <li>
        Create a new file called <code>app.js</code>, it will be the main file of your server.
        Create a 'Hello world' Express app, like we saw in class.
      </li>

      <li>
        Serve the static files given. For that, you will to do 2 things :
        <ul>
          <li>
            On the url <code>/</code>, with the <code>get</code> method,
            redirect the response to <code>./gif-it.html</code>
          </li>

          <li>
            Serve static files using this line right after you create your Express app :
          </li>
        </ul>
      </li>
    </ol>
    <pre v-highlightjs><code class="javascript">app.use(express.static(__dirname + '/public'));</code></pre>

    <h3>Rule</h3>

    <ul>
      <li>You <strong>CANNOT</strong> have other dependencies than express in your 'package.json' file.</li>
    </ul>

    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Let's get it !</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Learn what a mock is</li>
      <li>Learn how to make an endpoint, that returns a json</li>
    </ul>

    <h3>Context</h3>

    <p>The static files alone are useless, it needs to fetch some endpoints to retrieve data.</p>
    <p>You have to add 2 routes to get GIFs, and a random gif.</p>

    <h3>Steps</h3>

    <ul>
      <li>
        The button <code>Give me a GIF !</code> fetches the url <code>/random/gif</code> of your server,
        with a <strong>GET</strong> http method. Add a route that will return a json looking like this :
      </li>
    </ul>

    <pre v-highlightjs><code class="json">{"url":"insert here the url of a GIF you like"}</code></pre>

    <ul>
      <li>
        Now the page that lists GIFs, it calls a route <code>/gif</code>, also with a <strong>GET</strong>,
        and expect to retrieve a json looking like this:
      </li>
    </ul>

    <pre v-highlightjs><code class="json">{
  "results": [
    {
      "name": "victory",
      "url": "Insert here an url of a GIF"
    },
    {
      "name": "doggo",
      "url": "Insert here an url of a GIF"
    }
    // ...
  ]
}</code></pre>

    <h3>Rule</h3>

    <ul>
      <li>You <strong>CANNOT</strong> have other dependencies than express in your 'package.json' file.</li>
    </ul>

    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Retrieve the data</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Discover <a href="https://en.wikipedia.org/wiki/MongoDB">MongoDB</a></li>
      <li>Learn how to connect to a database and retrieve data</li>
      <li>Make requests to an API on the backend side</li>
      <li>Master asynchronous programing</li>
    </ul>

    <h3>Context</h3>

    <p>
      You added 2 GETs, but there is no real data. The idea is now to get the list of GIFs from a database,
      and to fetch the random GIF from an API.
    </p>

    <h3>Steps</h3>

    <ul>
      <li>
        Install the following dependencies to your project: <code>express-mongo-db</code>, <code>mongodb</code>,
        <code>node-fetch</code>.
      </li>

      <li>
        Create a new file called <code>random-gif-service.js</code>. Export a method <code>getARandomGIF</code> that
        will return a Promise. Use 'node-fetch' to call this url :
        <code>https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=fail&rating=pg-13</code>.
        <br>
        The method should return the payload of the API, not the HTTP response provided by 'node-fetch'.
      </li>

      <li>
        For the endpoint <code>/random/gif</code>, use the method <code>getARandomGIF</code>. The URL of the random GIF
        you look for should be named with a property <code>image_url</code> somewhere in the payload.
      </li>
    </ul>

    <p>
      Now let's call a database ! Don't worry, you don't need to install mongoDB on your laptop,
      you will use an online database.
    </p>

    <ul>
      <li>In your <code>app.js</code> file, add the following code :</li>
    </ul>
    <pre v-highlightjs><code class="javascript">var expressMongoDb = require('express-mongo-db');
// ...
app.use(expressMongoDb('mongodb://isencir2:2ricnesi@ds125423.mlab.com:25423/isen-tp-5'));
</code></pre>

    <p>
      From now on, you will have a 'db' accessible on each 'req' object. So, when you handle an endpoint,
      you will have access to the database through this property.
    </p>

    <ul>
      <li>
        Create a new file called <code>gif-service.js</code>. This file will export a function <code>findAll</code>
      </li>
    </ul>

    <pre v-highlightjs><code class="javascript">const collectionName = 'gif';
// gif is my collection of GIFs. You can use it for this exercise, but after, change it to your collection.

function findAll(db) {
  return db.collection(collectionName).find().toArray();
}</code></pre>

    <ul>
      <li>
        For the endpoint <code>/gif</code>, use the method <code>findAll</code>. This method returns a promise.
        When resolved, the <code>result</code> given should be sent, wrapped in a object with the key
        <code>results</code>. (to match with what the client expects)
      </li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>you <strong>MUST</strong> split your code in multiple files, as described in the steps.</li>
      <li>you <strong>MUST</strong> replace your mock with the result of a call to a database.</li>
    </ul>

    <!--EXERCISE 4-->
    <hr>
    <h2 id="ex-4">POST & DELETE</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Learn how to add/remove data in a mongo collection.</li>
      <li>Learn how to declare a <code>POST</code> and a <code>DELETE</code> route.</li>
    </ul>

    <h3>Context</h3>
    <p>
      Not all the buttons are working right now. We need to be able to save some GIFs references,
      and to remove the ones we don't want anymore.
    </p>

    <p>
      <strong>NOTE:</strong> the database given is free, and limited in capacity.
      Please don't store more than 9 elements.
      I limited the front part to display only 9 GIFs, so remove items if you want to have other GIFs.
    </p>

    <p>
      <strong>UPDATE</strong>: From now one, use your own collection instead of mine.
      The naming convention is the following: 'teamXY', where X is the number of your group,
      and Y the number of the team. (example, you are in the 2nd group, the team 2, your collection is 'team22')
      <br>
      This will allow you to have for each group a storage to test if you can correctly add/remove data.
    </p>

    <p>To change the collection, change the value of <code>collectionName</code> in <code>gif-service.js</code>.</p>

    <h3>Steps</h3>

    <ul>
      <li>Install a new dependency : <code>body-parser</code></li>
      <li>In you 'app.js' file, add the following code:</li>
    </ul>

    <pre v-highlightjs><code class="javascript">var bodyParser = require('body-parser');
// ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));</code></pre>

    <ul>
      <li>In the <code>gif-service.js</code> file, export 2 functions, <code>saveOne</code>, <code>deleteOne</code></li>
    </ul>

    <pre v-highlightjs><code class="javascript">function saveOne(gifReference, db) {
  return db.collection(collectionName).insert(gifReference).then(function (data) {
    return { id: data.ops[0]._id };
  }, function (err) {
    throw err;
  });
}

function deleteOne(id, db) {
  return db.collection(collectionName).remove({'_id': new ObjectId(id)});
}</code></pre>

    <ul>
      <li>
        In <code>app.js</code>, add 2 endpoints, the first one on <strong>POST</strong>: <code>/gif</code>,
        the other one on <strong>DELETE</strong>: <code>/gif/:id</code>.
      </li>

      <li>
        Use correctly the method given to insert/remove an element in the database.

        <br>
        <br>
        For the <strong>POST</strong>, you will find the data you need in <code>req.body</code>.
        Then, respond the id as a json, in order to display it.

        <br>
        <br>
        For the <strong>DELETE</strong>, you will find the data you need in <code>req.params.id</code>.
        Then, respond with a 200 status, no data.
      </li>

      <li>
        <strong>BONUS</strong>: The database is free, so don't add too much items in it.
        In order to prevent that, allow the user to add a GIF only if the collection contains less than 9 elements.
      </li>
    </ul>

    <h3>Rules</h3>


    <h3>Deliveries</h3>

    <strong>For this lab, commit the following files one time for the all exercises, bonus included.</strong>
    <br>
    <br>
    <article class="delivery-file js">app.js</article>
    <article class="delivery-file js">gif-service.js</article>
    <article class="delivery-file js">random-gif-service.js</article>
    <article class="delivery-file img">package.json</article>
    <article class="delivery-file img">public/*</article>


    <!--EXERCISE 5-->
    <hr>
    <h2 id="ex-5">Bonus (optional)</h2>
    <h3>Learning goals</h3>

    <ul>
      <li>
        Discover <a href="https://www.getpostman.com/">POSTMAN</a>
        (or <a href="https://insomnia.rest/">Insomnia.rest</a>)
      </li>

      <li>
        Learn how to fetch one element by id, by name
      </li>

      <li>
        Make a pagination !
      </li>
    </ul>

    <h3>Context</h3>

    <p>
      The app is finished, but we can extend our API with other routes.
      In this bonus part, you will add/update new routes, and you can test it with a tool mentioned above.
      Those tools are usely used to easily call an API endpoint, and test if it is working.
    </p>

    <h3>Ideas</h3>
    <ul>
      <li>
        Add a to get a GIF by id. The methode in the service can be called <code>findOne</code>.
        Be aware, it is not as easy as it seems, search around :
      </li>
    </ul>
    <pre v-highlightjs><code>const ObjectId = require('mongodb').ObjectId;</code></pre>

    <ul>
      <li>Add a route to get a GIF by name, this one is easy.</li>
      <li>
        Update the post, to prevent duplicates.
        A duplicate appends if the name or the url is already saved in the database
      </li>

      <li>
        Update the method <code>findAll</code> to build a pagination.
        The idea is to add a property <code>metadatas</code> in the json response.
        This is an object with 3 properties: <code>limit</code>, <code>offset</code>, <code>total</code>.
        <br>
        The offset can be passed as a query parameter, when the request is sent, to ask for a specific page.
        The limit will always be 9, and the total will be the total elements in the collection.
        <br>
        The goal is to update the <code>find</code> method to select only 9 elements, with the correct offset.
      </li>

      <li>
        Modify the public files to add a pagination selector in the list of GIFs,
        and update the query to match with the new route.
      </li>

      <li>If you do the pagination, you are allowed to store more GIFs in the database. (max 100)</li>
    </ul>
  </section>
</template>

<script>

export default {
  name: 'tp-draw-shapes',
  methods: {
    restoreUrl() {
      setTimeout(() => {
        this.$router.push('/tp5-gif-it');
      }, 1);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';

  .tp-background {
    background: url('../../assets/bg-crossword.png') repeat;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  .tp-img {
    position: relative;
    top: -40px;
    float: right;
    max-width: 375px;
  }

  h1 {
    font-size: 3em;
    color: $meadow;
  }

  h2 {
    color: #E74C3C;
  }

  h3 {
    color: #3498DB;
    padding-left: 1em;
  }

  h4 {
    color: $meadow;
    text-decoration: underline;
  }

  i.accent, strong {
    color: red;
    font-weight: bold;
  }

  code:not(.hljs) {
    padding: 1px 2px;
    line-height: 1.5em;
    color: #d14;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
  }

  li {
    margin-bottom: 4px;
  }

  .delivery-file {
    border-radius: 5px;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    margin: 0 5px 10px 0;
    padding: 4px 8px;
    text-shadow: 2px 1px 3px #000;

    &.html {
      background: #08C;
    }
    &.css {
      background: #31cc30;
    }
    &.js {
      background: #f2bf26;
    }
    &.img {
      background: #e64d23;
    }
  }

  nav {
    background-color: #ffffff;
    border: 1px solid #e3e3e3;
    border-radius: 4px;

    ul {
      list-style-type: none;
      text-align: left;
      padding-left: 8px;

      li {
        margin-bottom: 12px;
      }
    }
  }

  .file-loader {
    border: none;
    background: none;
    outline: none;
    color: blue;
    padding: 0;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1330px) {
    nav {
      left: 50%;
      margin-left: -650px;
      padding: 10px;
      position: fixed;
      top: 60px;
      width: 200px;
    }

    section.main-content {
      margin: auto;
      width: 800px;
    }

  }

  section.main-content {
    text-align: left;
    padding: 1em;
    background-color: #FFF;
    box-shadow: 0 0 10px #AAA;

    hr {
      display: block;
      border: 0;
      border-top: 4px solid #34495E;
      margin: 1em 0;
      padding: 0;
    }
  }

</style>
