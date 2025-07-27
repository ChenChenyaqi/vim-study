## iTerm2 快捷键

### 分屏

左右

- command + d

上下

- command + shift + d

切换

- command + option + 方向键
- command + [ or ] (常用)

调整窗口

- ctrl + command + 方向键

### 标签

新建

- command + t

关闭

- command + w

切换

- command + 数字
- command + 方向键

移动

- command + shift + 方向键

### zsh-vi-mode 插件 在终端中使用 vim

安装

- brew install zsh-vi-mode

生效

- 在.zshrc 里添加如下配置，并重启终端生效
  source /opt/homebrew/opt/zsh-vi-mode/share/zsh-vi-mode/zsh-vi-mode.plugin.zsh

历史记录

insert 模式下：

- ctrl + p / n 回顾之前执行的命令

normal 模式下:

- j/k 回顾之前执行的命令

搜索历史命令：

- ctrl + r (insert 模式)
- / (normal 模式)， 配置 n/N 选择上下 (推荐)

改键

- H/L
  需要到 zsh-vi-mode 的配置文件里写代码改键
