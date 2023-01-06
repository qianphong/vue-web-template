<script lang="ts" setup>
const links = [
  {
    text: 'GitHub',
    link: 'https://github.com',
  },
  {
    text: 'Google',
    link: 'https://google.com',
  },
  {
    text: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    text: 'Baidu',
    link: 'https://baidu.com',
  },
  {
    text: 'Bilibili',
    link: 'https://bilibili.com',
  },
]
</script>

<template>
  <footer text-white>
    <div py-8 bg-img-footer bg-cover>
      <div wrapper>
        <div text-center text-lg font-bold mb-5>友情链接</div>
        <ul m-a flex flex-wrap justify-around>
          <li v-for="(item, index) in links" :key="index" mb-2>
            <NButton
              class="text-#aaa"
              text
              tag="a"
              :href="item.link"
              target="_blank"
            >
              {{ item.text }}
            </NButton>
          </li>
        </ul>
      </div>
    </div>
    <div
      bg="#1B1B1B"
      border="t-1 #8D959F op-10"
      leading-5
      text="#aaa xs center"
      py-4
    >
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        XICP备XXXXXX号-X
      </a>
      <br />
      &copy;Copyright 2022 XXXXXXXXXX All Rights Reserved.
    </div>
  </footer>
</template>
