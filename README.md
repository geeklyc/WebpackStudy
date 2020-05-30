<!--
 * @Description: 
 * @Author: liyoucheng
 * @Date: 2020-05-25 14:30:58
 * @LastEditTime: 2020-05-30 17:24:20
 * @LastEditors: liyoucheng
--> 
# WebpackStudy
Webpack学习

### 资源管理
css
```
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}
```

图片
```
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
}
```

font（.woff格式可以）
```
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader'
  ]
}
```

文件
要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader
```
{
  test: /\.(csv|tsv)$/,
  use: [
    'csv-loader'
  ]
},
{
  test: /\.xml$/,
  use: [
    'xml-loader'
  ]
}
```
