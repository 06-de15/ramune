HTMLとCSSの勉強のためプロフィールページの作成

## HTMLをしようするには
index.htmlを作成した場合初めに

```
<!doctype html>
```
を1行目に書く必要がある。これがないとhtmlが使えない。

### htmlタグ内に必要なもの
上記の物を1行目に書いたら

```
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="ファイル名" これでCSSを使えるようにする>
    <title>タイトル</title>
</head>
<body>
<section>
    <article>sectionタグ内にarticleだったり</article>
    <div>divを使って書く。sectionは段落に近い役目がある。</div>
    <img src"">画像表示ができる
</section>
<footer>
    フッター
</footer>
</body>
</html>
```

これ位あれば最低限表示することが可能である。 

### ddタグ

ddとはdefinition descriptionの略でdtタグに用語、ddタグに用語の説明を書く。
それらをdlタグでくくる

```
<dl>
        <dt>氏名</dt>
        <dd>ほげほげ</dd>

        <dt>出身</dt>
        <dd>ホゲ市</dd>

        <dt>好きな食べ物</dt>
        <dd>肉</dd>
    </dl>
```

のような使い方をする。
