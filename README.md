# LIFF-SAMPLE

## 準備

### 1.LIFF IDを取得

LINE DeveloperからLIFFチャンネルを作り、LIFF IDを取得する

### 2.LIFF IDの設定

- 直下に.envファイルを作成し、LIFFIDを設定する

```
REACT_APP_LIFF_ID="Your LIFF ID"
```

## 起動

```
npm i
npm start
```

あとはngrok等を使ってLIFFのエンドポイントURLを修正する