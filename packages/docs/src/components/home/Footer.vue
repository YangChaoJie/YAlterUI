<template>
   <!-- <div>这是底部</div> -->
   <y-footer 
   class="footer"
   :class="{
      ['footer--centered']: true}">
     <div class="footer-links">
      <div class="footer-links-col">
        <v-btn depth="1" flat>
          {{ fData.resources }}
        </v-btn>
        <v-btn
          flat
          tag="a"
          href="https://naive-ui.oss-accelerate.aliyuncs.com/NaiveUI-Design-Library%28Square-Corner%29.sketch"
          download
        >
          {{ fData.designResources }}
        </v-btn>
        <v-btn flat tag="a" target="_blank" href="https://www.xicons.org">
          {{ fData.icons }}
        </v-btn>
        <v-btn flat>
          {{ fData.libraries }}
        </v-btn>
      </div>
      <div class="footer-links-col">
        <v-btn flat>
          {{ fData.help }}
        </v-btn>
        <v-btn flat>
          {{ fData.commonIssues }}
        </v-btn>
        <v-btn flat>
          {{ fData.changelog }}
        </v-btn>
        <v-btn
          flat
          tag="a"
          target="_blank"
          href="https://naive-ui.github.io/issue-helper/"
        >
          {{ fData.reportBug }}
        </v-btn>
      </div>
      <div class="footer-links-col">
        <v-btn flat>
          {{ fData.community }}
        </v-btn>
        <v-btn flat tag="a" target="_blank">
          GitHub
        </v-btn>
        <v-btn
          flat
          tag="a"
          href="https://discord.gg/Pqv7Mev5Dd"
          target="_blank"
        >
          Discord
        </v-btn>
        <v-tooltip>
          <template #trigger>
            <v-btn flat>
              {{ fData.dingTalk }}
            </v-btn>
          </template>
          {{ fData.dingTalkGroupChat }} 1
          {{ fData.memberLimitReached }} 33482509<br>
          {{ fData.dingTalkGroupChat }} 2 35886835
        </v-tooltip>
      </div>
      <div class="footer-links-col footer-links-col--last">
        <v-btn flat>
          {{ fData.contact }}
        </v-btn>
        <v-btn flat tag="a" target="_blank" href="https://www.tusimple.com/">
          {{ fData.tusimple }}
        </v-btn>
        <v-btn flat tag="a" target="_blank" :href="fData.joinUsLink">
          {{ fData.joinUs }}
        </v-btn>
      </div>
    </div>
    <v-divider class="footer-divider" />
    <div style="text-align: center; padding: 20px">
      <v-btn depth="3" flat>
        YJ UI {{ fData.version }} · Made by VCOM The front-end team
      </v-btn>
    </div>
      <ExampleA />
   </y-footer>
</template>

<script setup lang="ts">
import { YFooter } from 'yalertui';
import { ExampleA } from 'common_lib'
const fData = {
            version:'0.1',
          resources: '资源',
          designResources: '设计资源',
          help: '帮助',
          community: '社区',
          contact: '联系我们',
          changelog: '更新日志',
          commonIssues: '常见问题',
          tusimple: 'VCOM未来',
          joinUs: '加入我们',
          icons: '图标库',
          libraries: '社区精选资源',
          dingTalk: '钉钉',
          dingTalkGroupChat: '钉钉交流群',
          memberLimitReached: '（已满）',
          reportBug: '报告 Bug',
          joinUsLink: 'https://app.mokahr.com/campus_apply/tusenweilai/3232#/'
        }
</script>
<style lang="scss" scoped>
.footer {
  --x-padding: 56px;
  margin-top: auto;
}

.footer.footer--centered .footer-links {
  margin: auto;
  max-width: 1200px;
  --x-padding: 36px;
}

.footer-links {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: var(--x-padding);
  padding-bottom: 0;
  padding-top: 32px;
}

.footer-links-col {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 24px;
  padding-bottom: 24px;
}

.col-header {
  white-space: nowrap;
}

@media only screen and (min-width: 1024px) {
  .footer.footer--centered .footer-links-col.footer-links-col--last {
    flex: 0 0 0;
  }
}

.footer.footer--centered .footer-links-col {
  width: initial;
}

.footer-divider {
  margin: 0;
  padding: 0 var(--x-padding);
}

.footer-links-col > * {
  line-height: 2;
}

.col-header {
  font-weight: 500;
}

.link {
  text-decoration: none;
}
</style>
