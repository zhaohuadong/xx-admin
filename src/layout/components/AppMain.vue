<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component :is="Component" v-if="!route.meta.link" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <iframe-toggle /> -->
  </section>
</template>

<script setup>
// import iframeToggle from './IframeToggle/index'
import useTagsViewStore from '@/store/modules/tagsView'

const tagsViewStore = useTagsViewStore()
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 89 = navbar + tags-view = 50 + 39 */
    min-height: calc(100vh);
  }

  .fixed-header + .app-main {
    padding-top: 89px;
  }
}
</style>
