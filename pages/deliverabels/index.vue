<template>
  <div class="container">
    <div>
      <h1 class="title">
        成果物
      </h1>
      <h2 class="subtitle">
        夏期講習でやったものを公開するページ
      </h2>
      <p>
        夏期講習でやったものを公開してます。簡単なものばかりですが、HTML&CSSの勉強の一環で作りました。
      </p>
      <ul class="deliverabels">
        <li>
          <a href="/summer_course/profile/index.html">プロフィール</a>
        </li>
        <li>
          <a href="/summer_course/web_page/index.html">
            ホームページ風のページ
          </a>
        </li>
        <li>
          <a href="/summer_course/list/index.html">boxを並べる</a>
        </li>
        <li>
          <a href="/summer_course/list2/index.html">boxに画像とかつけてみた</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 100px;
}

.subtitle {
  margin: 20px;
}
.deliverabels {
  margin: 20px;
  text-align: left;
}
</style>
