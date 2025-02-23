// miniprogram/pages/nodejs/nodejs.js
const code = require('./code.js');
Page({
  data: {
    tagStyle: {
      code: "font-style: italic; color: #005cc5;margin-left:3px;margin-right:3px;"
    },
    //更多的style匹配模式
    stylesMore: [{
      mode: '通配符',
      example: '*',
      match: '所有'
    }, {
      mode: '单层不同类型',
      example: '.demo1#demo2',
      match: '<ele class="demo1" id="demo2">'
    }, {
      mode: '后代选择器',
      example: '.demo1 .demo2',
      match: '<ele class="demo1">\n ...\n <ele class="demo2">'
    }, {
      mode: '子选择器',
      example: '.demo1>.demo2',
      match: '<ele class="demo1">\n <ele class="demo2">'
    }, {
      mode: 'before伪类',
      example: '.demo::before',
      match: '<ele class="demo" ::before>'
    }, {
      mode: 'after伪类',
      example: '.demo::after',
      match: '<ele class="demo" ::after>'
    }],
    //支持更多的标签
    tags: [{
      name: 'frame',
      attrs: 'src, srcdoc, width, height, scrolling, marginwidth, marginheight'
    }, {
      name: 'iframe',
      attrs: 'src, srcdoc, width, height, scrolling, marginwidth, marginheight'
    }, {
      name: 'embed',
      attrs: 'src, autostart, loop, width, height'
    }, {
      name: 'link',
      attrs: 'href（仅限css）'
    }],
    //示例代码
    codedemo: code.codedemo,
    website: code.website,
    markdown: code.markdown,
    npm: code.npm,
    node: code.node,
    //更新日志
    update: `<ul>
    <li>2019.12.15:
      <ol>
        <li><code>U</code> 返回值格式更改为<code>array</code></li>
      </ol>
    </li>
    <br />
    <li>2019.12.3:
      <ol>
        <li><code>U</code> <code>style</code>标签支持匹配<code>before</code>和<code>after</code>伪类</li>
      </ol>
    </li>
    <br />
    <li>2019.10.28:
      <ol>
        <li><code>F</code> 修复了部分情况下使用子选择器<code>></code>匹配出错的问题</li>
      </ol>
    </li>
    <br />
    <li>2019.10.14:
      <ol>
        <li><code>F</code> 修复了部分情况下样式被错误匹配的问题</li>
      </ol>
    </li>
    <br />
    <li>2019.9.28:
      <ol>
        <li><code>F</code> 修复了高亮处理时<code>pre</code>标签中的实体编码不被编码的问题</li>
      </ol>
    </li>
    <br />
    <li>2019.9.21:
      <ol>
        <li><code>U</code> 优化了<code>class</code>匹配结果的优先级，按照<code>id</code>选择器><code>class</code>选择器><code>name</code>选择器的优先级排列</li>
        <li><code>F</code> 修复了部分情况下通配符无法被匹配的问题</li>
    </li>
    <br />
    <li>2019.9.15:
      <ol>
        <li><code>U</code> 支持自动移除没用的空标签，进一步减小解析结果大小</li>
      </ol>
    </li>
    <br />
    <li>2019.9.13:
      <ol>
        <li><code>A</code> 支持解析<code>emoji</code>小表情</li>
        <li><code>U</code> 减小了节点深度（主要是通过合并一些只有一个子节点的标签，对于较复杂的网页，可减小60%）</li>
        <li><code>U</code> 减小了解析结果的大小（主要是通过减小节点深度和去掉不必要的空白符来实现，对于较复杂的网页，可达30%），可以加快传输和显示</li>
      </ol>
    </li>
    <br />
    <li>2019.8.22:
      <ol>
        <li><code>U</code> 支持了<code>font</code>标签的<code>size</code>属性</li>
      </ol>
    </li>
    <br />
    <li>2019.7.25：
      <ol>
        <li><code>F</code> 修复了部分情况下<code>style</code>标签匹配错误的问题</li>
      </ol>
    </li>
    <br />
    <li>2019.7.24：
      <ol>
        <li><code>F</code> 修复了<code>pre</code>标签在低版本基础库无法显示的问题</li>
      </ol>
    </li>
    <br />
    <li>2019.6.3：
      <ol>
        <li><code>A</code> 增加支持<code>link</code>标签（仅限css）
        <li><code>U</code> 增强了<code>style</code>标签的解析能力</li>
      </ol>
    </li>
    <br />
    <li>2019.5.31：
      <ol>
        <li><code>F</code> 修复了部分情况下<code>style</code>标签中样式匹配失败的问题
      </ol>
    </li>
    <br />
    <li>2019.5.24：
      <ol>
        <li><code>U</code> 解析设置中支持设置<code>maxDepth</code>来限制前端显示时的最大递归深度</li>
      </ol>
    </li>
    <br />
    <li>2019.5.17：
      <ol>
        <li><code>U</code> 支持自动移除<code>display</code>为<code>none</code>的节点，减小<code>nodes</code>数组的大小，加快传输速度和渲染速度</li>
      </ol>
    </li>
    <br />
    <li>2019.5.14：
      <ol>
        <li><code>A</code> 增加<code>file</code>模式，输入文件路径即可自动打开并解析（仅支持<code>html</code>文件或<code>md</code>文件）</li>
        <li><code>A</code> 增加支持<code>iframe</code>, <code>frame</code>, <code>embed</code>, <code>object</code>, <code>param</code>等标签</li>
        <li><code>A</code> 增加支持动态网页模式（使用无头浏览器进行加载）</li>
        <li><code>U</code> 支持自动补全多媒体标签的<code>src</code>属性（拼接上主域名）</li>
        <li><code>F</code> 修复子选择器<code>&gt;</code>前后有空格时无法匹配的问题</li>
      </ol>
    </li>`
  },
  gotop() {
    this.setData({
      top: 0
    })
  },
  gosection(e) {
    this.setData({
      section: e.currentTarget.dataset.section
    })
  }
})