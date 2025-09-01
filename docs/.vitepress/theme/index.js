// https://vitepress.dev/guide/custom-theme
import '@/assets/style.scss';
import { setUserTheme, normalizeLink } from "@/assets/global/utils.js";
import Layout from "@/Layout.vue";
import { Dialog, Toast } from "@/components/dialog/DialogComp.vue";
import { SwitchTabs, SwitchTab, SwitchTabGroup } from "@/components/tab/TabComp.vue";
import { Pic, Vid, SmallTitle, Table, Panel, PCenter, PCaption, Resource } from "@/components/common/CommonComp.vue";
import { UnitInfo, UnitImgGroup, UnitImg, UnitProperties, UnitProperty, UnitTable, DistrictTable, BuildingNum, BuildingNumRow, Timeline, TimelineItem, TimelineRow } from "@/customized/upgrade/UnitComp.vue";
import { PostHistory, PostCopyright } from "@/customized/posts/PostComp.vue";

/*
 * 需要提前执行的代码
 */
setUserTheme();
normalizeLink();

/*
 * 主题相关的配置
 */
export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        /*
         * 注册全局组件
         */
        // 弹窗相关
        app.component('Dialog', Dialog);
        app.component('Toast', Toast);
        // 切换选项卡相关
        app.component('SwitchTabs', SwitchTabs);
        app.component('SwitchTab', SwitchTab);
        app.component('SwitchTabGroup', SwitchTabGroup);
        // 其他公共组件
        app.component('Pic', Pic);
        app.component('Vid', Vid);
        app.component('SmallTitle', SmallTitle);
        app.component('Table', Table);
        app.component('Panel', Panel);
        app.component('PCenter', PCenter);
        app.component('PCaption', PCaption);
        app.component('Resource', Resource);
        // 升级数据相关
        app.component('UnitInfo', UnitInfo);
        app.component('UnitImgGroup', UnitImgGroup);
        app.component('UnitImg', UnitImg);
        app.component('UnitProperties', UnitProperties);
        app.component('UnitProperty', UnitProperty);
        app.component('UnitTable', UnitTable);
        app.component('DistrictTable', DistrictTable);
        app.component('BuildingNum', BuildingNum);
        app.component('BuildingNumRow', BuildingNumRow);
        app.component('Timeline', Timeline);
        app.component('TimelineItem', TimelineItem);
        app.component('TimelineRow', TimelineRow);
        // 攻略区文章页面
        app.component('PostHistory', PostHistory);
        app.component('PostCopyright', PostCopyright);
    }
}