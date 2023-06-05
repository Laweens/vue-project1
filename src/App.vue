<script setup>
async function fetchData() {
  let result = await fetch("https://freesound.org/apiv2/search/text/?query=piano&token=U08a0ydB5JLZ6alofwKXbn48IPYWXjY8H53IneRy")
  console.log(result)
}
</script>

<template>
  <nav>
   <b><h1> Harmonize</h1></b>
  
  <router-view/>

  <aside>
  <b><p id="sideMenu"> Menu </p></b>
  <a href="javascript:void(0)">
    <i class="fa fa-user-o" aria-hidden="true"></i>
    <router-link to="/about">About</router-link> 
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-laptop" aria-hidden="true"></i>
    <router-link to="/Home"> Home</router-link> 
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-clone" aria-hidden="true"></i>
    <router-link to="/Library"> Library</router-link> 
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <router-link to="/Premium"> Premium</router-link> 
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    <router-link to="/Recommendations">Recommendations</router-link> 
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    <router-link to="/Notifications">Notifications</router-link> 
  </a>
</aside>

<div class="social">
  <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <i class="fa fa-linkedin"></i>
  </a>
</div>
</nav>
<main
        class="bg-[#e9e9e9] dark:bg-[#888] px-[12%] py-5 min-h-screen grid justify-center items-center"
    >
        <div
            class="main-conntainer border-1 border-solid border-[#d9d9d9] shadow-lg shadow-gray-300 dark:shadow-gray-600 dark:border-none grid grid-cols-4 rounded-3xl"
        >
            <CLeft class="col-span-1 bg-white" />
            <RouterView class="col-span-3 bg-[#E7E8F3]" />
        </div>
        <div class="text-center text-xs text-gray-400 dark:text-gray-600">
            <p>
                Copyright 2022-PRESENT <sup>&copy;</sup>
                <a href="https://github.com/thuongtruong1009/bee-music"
                    >thuongtruong1009</a
                >.
                <a
                    href="https://github.com/thuongtruong1009/bee-music/blob/main/LICENSE"
                    >All rights reserved</a
                >!
            </p>
        </div>
    </main>
</template>


<style>
aside {
  color: rgb(0, 13, 108);
  width: 250px;
  height: 100vh;
  background-image: linear-gradient(30deg , #0a6540, #1bd788);
  border-top-right-radius: 80px;
  size: 25px;
}

aside a {
  color: rgb(8, 0, 165);
  display: block;
  padding: 2px;
  text-decoration: none;
  -webkit-tap-highlight-color:transparent;
  font-size: 20px;
}

aside a:hover {
  color: #023216;
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

aside a i {
  margin-right: 5px;
}

aside a:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 100%;
  right: 0;
  height: 15px;
  width: 15px;
  border-bottom-right-radius: 18px;

}

aside a:hover::before {
  content: "";
  position: absolute;
  background-color: transparent;
  top: 38px;
  right: 0;
  height: 35px;
  width: 35px;
  border-top-right-radius: 18px;
  
}

aside p {
  margin: 0;
  padding: 40px 50px;
  padding-right: 30px;
  font-size: 50px;
}

body {
  font-family: 'Roboto';
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #010f24;
}

.social {
  height: 0;  
}

.social i:before {
  width: 14px;
  height: 14px;
  font-size: 20px;
  position: fixed;
  color: rgb(0, 0, 0);
  background: #0077B5;
  padding: 10px;
  border-radius: 50%;
  top:5px;
  right:5px;
}

h1 {
  color:#1bd788
}




</style>
