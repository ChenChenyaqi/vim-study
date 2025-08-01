## vim 命令

### 移动

#### 基本移动

- h - 左
- j - 下
- k - 上
- l - 右

#### 行移动

- 0 - 移动到行首
- ^（改键: H） - 移动到行首第一个非空字符（常用）
- $ - 移动到行尾
- g\_（改键: L） - 移动到行尾第一个非空字符（常用）

- I - 移动到行首并插入
- A - 移动到行尾并插入
- O - 行前/上一行插入（常用）
- o - 行后/下一行插入（常用）

- e - 移动到单词的结尾
- b - 移动到上一个单词的开头
- w - 移动到单词的开头
- ge - 移动到上一个单词的结尾

#### 单文件快速移动

- ctrl + f 向下移动一屏
- ctrl + b 向上移动一屏
- ctrl + d 向下移动一屏
- ctrl + u 向上移动一屏

基于配置

- shift + j 向下移动 5 行
- shift + k 向上移动 5 行

其他

- zz 讲当前行置于屏幕中央
- gg 跳到文件首部
- G 跳到文件尾部
- 行数 + gg 跳到指定行
- 行数 + G 跳到指定行

#### 多文件间跳转

##### 标记

- m+小写字母，mm，在单文件里标记跳转点(使用场景： 正在写代码，发现需要引入依赖，然后标记好后，去头部引入依赖，然后再回去继续写)
- m+大写字母，mM，在多文件间标记跳转点

##### 跳转

- ' + 小写字母，跳转到标记的行
- ` + 小写字母，跳转到标记的行和列（更精准）
- ctrl + o 基于跳转历史记录，向前跳转(非常好用， 替换 ctrl + tab)
- ctrl + i 基于跳转历史记录，向后跳转(非常好用， 替换 ctrl + tab)

##### 查看函数定义/调用位置

- gd 查看函数定义/调用位置，如果存在多处调用，则展示所有调用位置（超级好用）
- 可以查看函数/变量 声明/使用的地方

#### vim EasyMotion

- \<leader>\<leader> w 在当前光标后标记跳转点, 跳转单词前
- \<leader>\<leader> b 在当前光标前标记跳转点, 跳转单词前
- \<leader>\<leader> e 在当前光标后标记跳转点, 跳转单词尾
- \<leader>\<leader> ge 在当前光标前标记跳转点, 跳转单词尾
- \<leader>\<leader> l 在当前光标后标记跳转点, 跳转单词前尾
- \<leader>\<leader> h 在当前光标前标记跳转点, 跳转单词前尾
- \<leader>\<leader> j 在当前光标后标记跳转点, 跳转行
- \<leader>\<leader> k 在当前光标前标记跳转点, 跳转行

#### vim sneak

**替代 f 查找，但是会占用 s 键，需要改键**

- f/F 输入俩字符，搜索的是两个字符，并且可以全文搜索，精度比原生的 f 高

### 操作符

- yy - 复制当前行
- p - 粘贴
- dd - 删除当前行

- d - 删除
- c - 删除并进入 insert 模式
- y - 复制

- x - 删除光标所在字符（常用）
- X - 删除光标前在字符
- s - 删除当前光标的字符并进入 insert 模式（常用）
- S - 删除当前光标所在的行并进入 insert 模式（常用）
- r - 替换一个字符（常用）
- R - 替换多个字符

- 可撤销块 - 进入插入模式开始，直到返回 normal 模式，在此期间的任何修改删除都被当作一次修改，方向键移动除外
- u - undo
- ctrl+r - redo

- gb 多选操作

#### vim surround

- cs + 包裹符（如："/'） + 替换符 (案例：双引号改成单引号)
- ys + 范围 + 包裹符 (案例：给变量加花括号)
- ds + 包裹符 (案例：删除双引号)

- viw 选中单词之后，再按 S，再按",这样也能加双引号

#### 替换字符串

- 公式 :[range]s[ubstitute]/[pattern]/[string]/[flags]

- range: 范围：

  - $ 到尾部
  - % 全文
  - number,number 行范围

- flag：

  - g 匹配默认只匹配第一个，g 可以全文匹配
  - c 显示提示框确认是否替换

- 可视化模式下： 全部替换

#### 大小写

- normal 模式： gu/U+范围 （例如： gU+iw 大写单词）
- 可视化 模式：省略 g，直接 u/U 即可
- 大小写互换：~

#### 注释

- gc 单行注释
- gC 多行注释
- tip normal 和可视化模式通用

### 组合键

- cw - 删除当前单词
- ea - 在当前单词结尾处追加

### 模式切换

进入 insert 模式：

- i - insert
- a - append

推出 insert 模式：

- Esc
- ctrl + [

### 可视化模式

- v 进入字符可视化模式，一次只能选择一个字符
- V 进入行可视化模式，一次能选择一行
- ctrl + v 进入块可视化模式，一次能选择一个块

- 退出可视化模式 esc/ctrl + [

#### 组合使用

语法： 选中 + 操作

- o - 可切换可视区的光标
- gv - 回到上一个可视化区

- 跨多行编辑，给多行后面加分号 - 配合 A 或者 I
- 选择多行后，可以利用系统的剪切板复制粘贴
- 尽可能的少用可视化模式

### 文本对象

认识文本对象：
文本是结构化的，可以快速选择，选择一个**范围**

#### 语法

- operator + （内部/外部） + 文本对象
- 可视化模式 + （内部/外部） + 文本对象

注： 内部 i 外部 a

#### 对象

- w 一个单词
- ( or ) 一对()
- b 一对()
- [ or ] 一对[]
- { or } 一对{}
- B 一对块{}
- < or > 一对<>
- t xml 标签
- ' " 一对引号
- ` 一对反印号
- s 一个句子
- p 一个段落
- a 函数参数（常用）

### 搜索

#### 单行搜索

- f 正向移动到下一个 char 所在之处
- F 反向移动到下一个 char 所在之处
- t 正向移动到下一个 char 所在之处的前一个字符
- T 反向移动到下一个 char 所在之处的前一个字符
- : 重复上次的字符查找命令，查找下一个
- , 查找上一个

使用技巧：移动的时候用 f，结合 c/d 使用 t

#### 全局搜索

- / 向后查
- ? 向前查
- n/N 查找上一个/下一个
- /+上下方向键 查看搜索历史
- \# 向上查
- \* 向下查

使用技巧：写单词的前几个字母就可以了

### 数字&点的威力

#### 数字

- 数字+operator+动作（范围）
- operator+数字+动作（范围）

#### 点

重复上一次的修改：

- 做了更新：增加/删除/修改
- 离开插入模式之前的全部按键操作都记录

在删除一个单词的命令选择上

- bde
- dbx
- diw （推荐，因为可以用.重复）

核心：一键移动 一键操作

- 加分号 jA; (推荐，可以用.重复)
- 查找手动替换, 用/搜索，n 查找下一个，ciw 替换单词后，后面替换的时候用.

能够重复就不要用次数： 执行/重复/回退

### 悬浮显示

- gh 类似鼠标的 hover，可以用来显示报错信息/函数提示

### 窗口管理

- 新建窗口
  - 左右 Ctrl+w v
  - 上下 Ctrl+w s
- 窗口切换
  - Ctrl+w hjkl
  - Ctrl+w w 两个窗口来回切换
- 关闭窗口
  - Ctrl+w c
- 只保留当前窗口，关闭其他窗口
  - Ctrl+w o

扩展

利用 vscode 的自定义快捷键

- 新建窗口
  - Command + \ (左右新建)
  - Command + ctrl + \ (上下新建)
- 关闭窗口
  - Command + w (关闭当前窗口，仅页签)
  - Command + k + w (关闭当前窗口)
- 窗口切换
  - shift + 方向键 (需要改 vscode 快捷键)
  - 没改键的话用 shift + ctrl+ jkhl

### 删除函数

- % 匹配括号（小括号 大括号 花括号 中括号）

#### vim indent object

- vii 基于缩缩进中里面的代码
- vaI(i 改键映射) 基于缩进选中代码，包括花括号

#### 删除函数的方式

- daI(i 改键映射) 基于 wim indent object 在函数内删除函数
- V$%d(改键 \<leader> df) 在函数行处删除函数

### 宏

#### 录制宏

- qa 开始录制， a 是寄存器的名字，可以换别的
- q 结束录制
- :reg a 查看录制好的宏

#### 回放宏

- @a 使用宏
- @@ 使用最后一次执行的宏
- 数字+@+寄存器 重复执行

安全机制：报错就停

#### 修改宏

- qA 追加操作
- 修改已知的宏
  - 取出来寄存器里的值 "ap 复制出来
  - 修改 "ayw or "ayy 粘贴进去
