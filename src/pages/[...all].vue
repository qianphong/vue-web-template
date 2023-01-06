<template>
  <div wrapper py-20>
    <img w-120 mx-a src="@/assets/images/404.png" alt="" />
    <div text="black op-50 2xl center" font-bold>
      <div my-10>访问的页面不存在</div>
      <NButton @click="$router.replace('/')">返回首页</NButton>
    </div>
  </div>
</template>

<route lang="yaml">
name: NotFound
meta:
  title: 页面不存在
</route>
