<div align="center">
  <a href="https://beauty.now.sh ">
        <img width="200" heigth="200" src="https://olxvlcccu.qnssl.com/blog/1b1yv.png?imageslim">
  </a>
  <h1>Beauty</h1>
  <p>  
      这是一个 VUE + VUEX + FIREBASE + BULMA … 实现的 SPA SSR项目  <br/>
      <a href="https://beauty.now.sh " target="__blank" > live demo</a>
  <p>
</div>

<h2 align="center">WHY</h2> 

> VUE SSR的相关资料不多, 最全面的demo就是官方的 [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0) . 因为各种版本的 hackernews clone 看的太多了,也有点审美疲劳 . 所以有了 [beauty-enjoy/beauty](https://github.com/beauty-enjoy/beauty) 这个Repo

<h2 align="center">DO</h2>

* 先从 [dbmeinv.com](http://dbmeinv.com) 上爬取了数据源,分类存储到firebase中 , 并且保持实时更新 这部分repo是[beauty-enjoy/dbmeinv-firebase-api](https://github.com/beauty-enjoy/dbmeinv-firebase-api)
* 然后参考了现有的一些ssr项目 , 利用 [beauty-enjoy/dbmeinv-firebase-api](https://github.com/beauty-enjoy/dbmeinv-firebase-api) 完成了[beauty-enjoy/beauty](https://github.com/beauty-enjoy/beauty) 这个Repo
  
<h2 align="center">Preview</h2>

![](https://olxvlcccu.qnssl.com/blog/y96bi.jpg?imageslim)

<h2 align="center">Develop </h2>

```sh
# local develop
npm run dev
# build for production 
npm run build
# production server 
npm run start
```

<h2 align="center">Related Repo </h2>

* Data: [dbmeinv-firebase-api](https://github.com/beauty-enjoy/dbmeinv-firebase-api) [firebase server](https://firebase.google.com/docs/server/setup)
* JS: [vue](https://github.com/vuejs/vue) [vuex](https://github.com/vuejs/vuex)
* UI: [bulma](https://github.com/jgthms/bulma)
* SERVER: [now.sh](https://now.sh)
* [Other Excellent library](https://github.com/beauty-enjoy/beauty/blob/master/package.json) 

<h2 align="center">TODO </h2>

- [x] upgrade to SSR
- [ ] add cache for api
- [ ] list all girls page
- [ ] list all location page
- [ ] add commit to posts

<h2 align="center">Core Team</h2>

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/netpi.png?s=150">
        <br>
        <a href="https://github.com/netpi">Netpi Chen</a>        
        <p>Founder for this repo</p>
      </td>      
     </tr>
  </tbody>
</table>
