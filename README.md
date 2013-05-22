#History 

实现 html5 History api

---


##使用说明

###pushState  `History.pushState(data, title, url)`
推送一个状态到浏览器

**参数**

`data` 状态对象

`title` 标题

`url` 历史记录地址


###replaceState  `History.replaceState(data, title, url)`
替换现在的浏览器状态

**参数**

`data` 状态对象

`title` 标题

`url` 历史记录地址


###forward  `History.forward()`
前进


###back  `History.back()` 
后退


###go  `History.go(index)`
前进到指定第`index`次历史

**参数**

`index` 步伐索引



###getState  `History.getState()`

###getHash  `History.getHash()`


