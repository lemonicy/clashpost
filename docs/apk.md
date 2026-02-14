---
title: "部落冲突安装包下载"
shownTitle: "安装包下载"
description: "在这里，你可以找到 coc 国际服、国服、私服、账号绑定工具的下载地址，有了这个之后就再也不用到处找安装包了。"
module: apk
canonical: /apk
robots: index, nofollow
---

<script setup>
import { showDialog } from "@/components/dialog/Dialog.vue";
import { generateToast } from "@/components/dialog/Toast.vue";
import Download from "@/components/icon/link/Download.vue";

const disableDownloading = false;
const apkVersion = "18.0.10";
const apkUploadDate = "2026-01-07";
const apkFileSize = "716.6 MB";
const apkFileName = "Clash_of_Clans_v18.0.10_8UaxpfktXpjg2hNN.apk";
const systemRequirement = "Android 7.0+";

function downloadCocApk() {
    window.location.href = "https://static.clashpost.com/download/" + encodeURI(apkFileName);
    generateToast("不出意外的话，安装包已开始下载，如果没反应，请重新点击按钮。", {
        position: "top",
        showDuration: 7500
    });
}
</script>

在这里，你可以找到 coc 国际服、国服、私服、账号绑定工具的下载地址，找安装包再也不用求人了。

## 事先声明

- 现在部落冲突不是全球同服了，如果你是回归玩家，可以去这里了解一下事情的来龙去脉：[什么是 216 事件？这件事的后续是什么呢？](/p/2754)
- **本页只提供 coc 安卓版的安装包**，苹果手机请参考这两篇文章：[iOS 如何下载 coc 国际服（常规方案）](/p/6676)、[iOS 如何下载 coc 国际服（备用方案）](/p/4604)。
- 安装时遇到问题请参考这篇文章：[网站里下载的 coc 安装包不能用，可能是什么造成的？](/p/6903)
- 如果你从其他渠道下载到了 xapk 或 apkm 格式的安装包，请按照这篇文章所说的步骤操作：[如何安装 xapk 或 apkm 格式的安装包？](/p/6665)
- 安装包这块我只是搬运工，游戏方面的问题请联系官方。

## 国际服

### 直接下载

有个事大家还记得吧？由于 coc 分服后国服的各种骚操作，国际服下载需求大幅上升，网站创始人支付不起成本，于是把国际服的直接下载链接关了。

今天我宣布一个好消息，因为国外的商业带宽比较便宜，所以网站服务器迁移到国外之后运营成本有所下降，就算是开放直接下载也支付得起，因此我们决定让利用户，回归直接下载功能！当然也因为网站服务器在国外，我们不保证国内用户的速度。

<div class="cp-download-component" v-if="!disableDownloading">
    <div class="cp-download-info">
        <p>版本：{{ apkVersion }}</p>
        <p>上传时间：{{ apkUploadDate }}</p>
        <p>系统要求：{{ systemRequirement }}</p>
    </div>
    <button class="btn-primary cp-download-btn" @click="downloadCocApk">
        <div class="cp-download-btn-left">
            <Download />
        </div>
        <div class="cp-download-btn-right">
            <p class="cp-download-text">点击下载安装包</p>
            <p class="cp-download-size">{{ apkFileSize }}</p>
        </div>
    </button>
</div>
<div class="cp-download-component" v-else>
    <div class="cp-download-info">
        <p>版本：未知</p>
        <p>上传时间：未知</p>
        <p>系统要求：{{ systemRequirement }}</p>
    </div>
    <button class="btn-primary cp-download-btn" disabled>
        <div class="cp-download-btn-left">
            <Download />
        </div>
        <div class="cp-download-btn-right">
            <p class="cp-download-text">游戏即将更新</p>
            <p class="cp-download-size">旧版本下载链接暂时关闭</p>
        </div>
    </button>
</div>

请留意上方的上传时间和版本号，不要下载成旧版的安装包。如果网站内未更新安装包，请等一会再看，不要反复下载。

### 网盘下载

为了让国内用户有更好的体验，我们提供了三种网盘的链接，你可以根据自己的需求选择。

别问我为什么没有下载按钮，**点击蓝色字体就可以跳转到下载地址了，再问打死**。

- [天翼云盘（访问码：dwy1）](https://cloud.189.cn/web/share?code=EjaiAvVn6jYn) - 不限速，但必须登录才能下载。
  - 虽说天翼云盘是中国电信的产品，但不一定要在电信网络下使用，你在移动、联通的网络下也可以使用。
- [小飞机网盘（提取码：dg54）](https://share.feijipan.com/s/kCBcuwIg) - 同样不限速，但只有 500 MB 以下的文件才能免登录下载，coc 安装包已超过限制，因此需要登录。

### 应用商店下载（需要翻墙）

如果你人在国外，或者有条件翻墙，那么你还可以选择以下渠道：

- [Google Play 下载](https://play.google.com/store/apps/details?id=com.supercell.clashofclans) - Google Play 下载的安装包只适配你自己的手机，无法分享给他人，如需分享请勿下载这个版本。
- [Apkpure 下载](https://apkpure.net/cn/clash-of-clans-android/com.supercell.clashofclans) - 这个渠道更新最快，更新后大家可以去这个地方蹲新版本安装包。
- [APKMirror 下载](https://www.apkmirror.com/apk/supercell/clash-of-clans/) - 这个渠道更新也相当快。

## 私服

官网链接说得挺清楚的，安装过程和注意事项也很详细，我感觉我没啥需要补充的，各位直接去官网链接吧，英文不好的话就谷歌翻译。

广告是私服自带的，不是我们插入的，玩着不爽的话也只能忍着，所有私服都有广告，你没的选。

### 下载前必读

- 下方的下载地址中不包含 iOS 版本的私服，苹果用户请使用官网链接。
- 在下方的下载地址中，如果某文件带有“模拟器”字样，说明这个安装包需要在模拟器上安装，带有“手机”字样说明这个安装包需要在实体机上安装。
- 原版的意思是兵种、建筑这些和原版游戏一样，原版游戏能造几个，这个版本也只能造几个，就是有无限宝石和无限资源罢了。魔改版就是把什么皇室战争、海岛奇兵的兵种也给加进来了，一种兵能造 999 个的那种。
- 私服问题请进入官网查找联系方式。

### 下载地址

- [Atrasis 服官网](https://atrasisclash.net/)
- [Null 服官网](https://nulls.gg/servers/nulls-clash/)
- [天翼云盘（访问码：wfm0）](https://cloud.189.cn/web/share?code=aMR7BjzIbIvm)
- [小飞机网盘（提取码：T81v）](https://share.feijipan.com/s/49BcL43l)

## 国服

应该不会有人来我这网站下载国服吧……

腾讯不是大一统了嘛，现在国服的渠道商只剩腾讯了，腾讯游戏大家都熟悉，都要绑定微信或 QQ 的，部落冲突也不例外。如果你想玩国服但还没有绑定，请下载账号绑定工具。

如已绑定微信或 QQ，请使用下面的这两个链接，或者前往国内的应用商店下载。

1. [通过应用宝下载](https://sj.qq.com/appdetail/com.tencent.tmgp.supercell.clashofclans)
2. [通过腾讯的部落冲突官网下载](https://coc.qq.com/)

## 账号绑定工具

### 账号绑定工具是干什么的

从 2022 年 12 月开始，腾讯把国内的这些 coc 渠道商统一了起来，并要求你绑定 QQ/微信。操作步骤大概是这样的：

- 下载对应渠道的“账号绑定工具”；
- 使用原登录方式登录游戏；
- 根据提示绑定 QQ 或微信。

因此，所谓的账号绑定工具的作用就是让你把原渠道的游戏进度转移到腾讯那边。

<Pic src="/download/connect-tools.png" alt="上联：昆仑渠道败退，下联：腾讯一统江湖，横批：千秋万代" width="1280" height="640" maxWidth="640px" />

### 下载前必读

- 账号绑定工具是分渠道的，如果你分服前是用九游账号登录游戏的，那么你就需要去下载九游版，以前是用果盘账号登录的就下载果盘版，不能混用。
- 下文中，如果某链接被删除线划掉，则该链接已失效。如果你所在渠道的所有线路的链接均已失效，但你尚未绑定 QQ/微信，那么你可以认为自己的账号丢失了，只能节哀。理论上来说你可以联系客服处理，但腾讯大一统的事情都过去这么久了，小渠道商的运营公司说不定都倒闭了，就算你能找到负责这一块的客服，客服很可能也没办法帮你对接。
- 下载部分版本（如小米版）时会自动下载一个插件，下载完成后请给这个插件必要的权限，否则游戏无法运行。如果提示缺少插件，请到对应应用商店自行下载。
- 部分浏览器（如 UC 浏览器、VIVO 自带浏览器）可能会劫持你的连接，导致你最终下载的不是你要的版本，这种现象与本网站无关。为了避免这种劫持，请使用 Chrome 或 Firefox 下载。
- 如果绑定时提示这个 QQ/微信 已经被绑定过了，请换一个号继续绑定。每个手机号可以注册五个 QQ 和两个微信，只要你号不是特别多就够用。请注意短时间内不要注册太多，隔天注册比较好，而且注册后一定要实名认证，不然你新注册的号第二天就会被封。如果你把自己的 COC 账号绑定到被封的 QQ 上，那就真的无力回天了。

### 下载地址

- [~~昆仑（线路一）~~](http://update.coc.gameark.cn/?channel=kunlun)
- [~~昆仑（线路二）~~](https://coc.arkgames.com/)
- [昆仑（线路三）](https://www.taptap.cn/app/10497?os=android)
  - 目前昆仑版本的账号绑定工具只能通过第三方渠道下载（需下载 Taptap），官方链接早已失效。
- [九游/豌豆荚（线路一）](http://update.coc.gameark.cn/?channel=wandoujia)
- [九游/豌豆荚（线路二）](https://www.wandoujia.com/apps/6632360)
- [~~九游~~](https://a.9game.cn/coc/)
  - 分服前，阿里巴巴收购了豌豆荚，并把豌豆荚整合到了他们自家的九游品牌，但安装包并没有完全统一。当时豌豆荚版可以登录九游版，但是反过来不行，直到分服后都还是这样。
- [360（线路一）](http://update.coc.gameark.cn/?channel=360)
- [360（线路二）](https://m.app.so.com/detail/index?from=qing&id=3100671)
  - 进入之后请先取消勾选“360手机助手官方下载”的选项，再点击“普通下载”，最后在弹窗中点击“继续”按钮，只要选错一步就会下载到 360 手机助手。
- [VIVO（线路一）](http://update.coc.gameark.cn/?channel=vivo)
- [VIVO（线路二）](https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=420729)
- [OPPO（线路一）](http://update.coc.gameark.cn/?channel=oppo)
- [OPPO（线路二）](https://www.oppomobile.com/)
  - 线路二必须下载 OPPO 软件商店，不推荐选用。
- [小米（线路一）](https://game.xiaomi.com/game/62231040)
- [小米（线路二）](https://app.mi.com/details?id=com.supercell.clashofclans.mi)
- [~~百度（线路一）~~](http://update.coc.gameark.cn/?channel=baidu)
- [~~百度（线路二）~~](https://mobile.baidu.com/item?docid=5001672440)
  - 进入之后请选择“普通下载”，否则会下载到百度手机助手。
  - 2025 年开始陆续有人反馈百度版无法再绑定，我们将其视为已失效。
- [华为](https://appgallery.huawei.com/#/app/C10329573)
  - 华为版比较特殊，在下载绑定工具之前请先下载 [华为应用市场](https://appgallery.huawei.com/#/app/C27162)、[华为移动服务 (HMS Core)](https://appgallery.huawei.com/#/app/C10132067) 和 [华为游戏中心](https://appgallery.huawei.com/#/app/C10059090)，否则会提示登录谷歌。
- [~~夜神~~](https://app.yeshen.com/games/single/9360)
  - 根据网站维护人员的测试，截至 2026 年 2 月，夜神应用中心已无法打开，夜神游戏中心搜不到正确的版本，因此我们认为该渠道的链接已失效。
- [~~逍遥安卓~~](https://www.xyaz.cn/gc/apps-586-1.html)
  - 根据用户反馈，截至 2024 年 12 月，逍遥安卓渠道已无法绑定。
- [~~一号玩家（原益玩版）~~](https://www.1gamer.cn/game-id-11162.html)
  - 根据网站维护人员的测试，在 2024 年 5 月之前，一号玩家渠道就已下架安装包，无法再绑定。
- [联想（线路一）](http://update.coc.gameark.cn/?channel=lenovo)
- [联想（线路二）](https://www.lenovomm.com/appdetail/com.supercell.clashofclans.lenovo/1224)
- [~~雷电~~](https://www.ldmnq.com/app/7361.html)
  - 根据用户反馈，截至 2025 年 5 月，雷电模拟器渠道已无法绑定。
- [B 站（线路一）](http://update.coc.gameark.cn/?channel=bili)
- [~~B 站（线路二）~~](https://app.biligame.com/page/detail_game.html?id=103536)
- [果盘（仅适用于手机端）](https://game.guopan.cn/m/gamedetail/28139?channelid=40540)
  - 上述链接必须在手机端打开，否则会直接跳到网站首页。作者未发现在电脑端下载安装包的方法。
  - 该渠道强制要求下载果盘 App，没有无套路的下载地址。
  - 在果盘 App 内搜索时，直接搜“部落冲突”是搜不到的，请搜索神秘代码 116454，那一串搜索结果都一样，随便选一个即可。
- [~~魅族~~](https://game.flyme.cn/game/detail/3239713?contentId=3239713)
  - 根据用户反馈，截至 2025 年 5 月，魅族渠道已无法绑定。
- [4399 版本](https://a.4399.cn/game-id-251473.html)
  - 该渠道强制要求下载 4399 游戏盒，没有无套路的下载地址。
- [~~2345 版本（电脑端网页，点击“下载到电脑”就不用下载 2345 手机助手了）~~](https://zhushou.2345.com/game/174645.html)
- [~~2345 版本（手机端网页，适合用手机看，但需要下载 2345 手机助手）~~](https://zhushou.2345.com/m/game/174645.html)
  - 根据网站维护人员的测试，在 2024 年 5 月之前，2345 渠道就已下架安装包，无法再绑定。
- 7723 版本
  - 根据网站维护人员的测试，在 2023 年 6 月之前，7723 渠道就已下架安装包，无法再绑定。

### 大一统前就已经倒闭的版本

以下渠道在腾讯大一统之前就倒闭了，如果你以前是这些渠道商的玩家，那就自求多福吧。

- 当乐
- 靠谱助手
- 安智
- 拇指玩
- 熊猫玩
- 搜狗

## 结语

账号绑定工具的版本一大堆，好多平台的账号网站内部根本没有，所以我们没能力逐一测试。如果你发现哪个版本的链接不能用了，或者发现了新的有效链接，请前往“常见问题解答”版块查找作者的联系方式，并向作者反馈，我们会依据你的反馈进行更新。网站内容的准确性离不开大家的贡献。

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-download-component {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.cp-download-component .cp-download-info {
    width: 15rem;
    height: 6.5rem;
    padding: 0.25rem 0.625rem;
    border-radius: 0.5rem;
    border: var(--cp-border-light);

    p {
        margin: 0.125rem;
    }
}

.cp-theme-dark .cp-download-component .cp-download-info {
    border: var(--cp-border-dark);
}

.cp-download-component .cp-download-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    width: 15rem;
    height: 6.5rem;
    border-radius: 0.75rem;

    .cp-download-btn-left {
        display: flex;
        align-items: center;
        width: 1.75rem;
    }

    .cp-download-btn-right {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        p {
            line-height: 1;
            margin: 0;
        }

        .cp-download-text {
            font-size: 1.25rem;
        }

        .cp-download-size {
            font-size: 0.875rem;
        }
    }
}
</style>
