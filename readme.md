# Google Chorme Extensions - Step by Step

#### Extention Name: Image Ratio Calculator


#### Step - 1

##### Create a HTML file (index.html) 


```   
<!DOCTYPE html>

<html>

<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>Image ratio calculetor</title>
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
   <link rel="stylesheet" href="./bootstrap.min.css">
   <style>
      html {
         width: 400px;
         overflow-y: scroll;
         height: 300px;
      }
   </style>
</head>


<body>
   <section class="p-5">
      <div class="container">
         <div class="row">
            <div class="wrapper">
               <div class="inner">
                  <div class="content">
                     <h3>Ratio padding calculator</h3>
                     <p>Enter the width and height of your element to calculate the vertical padding needed to make your
                        element
                        responsive whilst maintaining its aspect ratio.</p>

                     <div class="margin-top">
                        <div class="pull-left text-large ">
                           <form>
                              <div class="row m-0 align-items-center">
                                 <input id="width" type="number" maxlength="5" placeholder="Width"
                                    class="form-control col">
                                 <div class="">&nbsp x &nbsp</div>
                                 <input id="height" type="number" maxlength="5" placeholder="Height"
                                    class="form-control col">
                              </div><br>
                              <input id="btn" type="submit" value="Calculate" class="btn mt-lg-5 btn-primary">
                           </form>
                        </div><br>
                        <h4 id="calculation" class="col mt-lg-5 larger-text">

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <script type="text/javascript" src="/jquery.min.js"></script>
   <script type="text/javascript" src="/bootstrap.min.js"></script>
   <script type="text/javascript" src="/scripts.js"></script>

</body>

</html>

```

#### Step - 2

##### Create a Javascript file (scritps.js)
scritps.js

```
var calcuation = (function () {
   "use strict";
   var btn = document.getElementById("btn"),
      w = document.getElementById("width"),
      h = document.getElementById("height"),
      ans = document.getElementById("calculation"),
      output = "";

   btn.addEventListener("click", function (e) {
      e.preventDefault();
      output = ((Math.round(h.value) / Math.round(w.value)) * 100).toFixed(2);
      if (output > 0) {
         ans.innerHTML = "padding-top: " + output.replace(".00", "") + "%";
      } else {
         ans.innerHTML = "Invalid dimensions";
      }
   });
})();


```


#### Step - 3

##### Create a manifest.json file (mendatory file for google chrome extensions)
masifest.json
```
{
   "name": "Image Ratio Calculator",
   "description": "Enter the width and height of your element to calculate the vertical padding needed to make your element responsive whilst maintaining its aspect ratio.",
   "version": "1.0",
   "manifest_version": 3,
   "icons": {
      "32": "/favicon-32x32.png"
   },
   "action": {
      "default_popup": "index.html",
      "default_title": "Image Ratio Calculator"
   }
}


```

#### Now load your file in google chrome extensioins settings, you can the result in the chrome browser
