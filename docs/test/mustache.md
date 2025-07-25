---
answera: 42
question: What is your favorite number?
---

# Mustache - 模版


## 前置

如果加载了 docsify-front-matter 插件并且实际的 markdown 文件有前端数据，则前端键将映射到具有相同名称的 Mustache 变量。如果多个数据源中存在同名变量，则前事数据具有最高优先级。

<!-- tabs:start -->

#### ** Markdown **

{{=<% %>=}}
```markdown
---
answera: 42
question: What is your favorite number?
---

**Est o te viri tum mihi**

Lorem markdownum nunc attenuarat pocula **{{question}}** atria ante est.
Erat lacte neve vulnus audistis infelix sidera tuae **{{answer}}**.
```
<%={{ }}=%>

#### ** Preview **

**Est o te viri tum mihi**

Lorem markdownum nunc attenuarat pocula **{{question}}** atria ante est.
Erat lacte neve vulnus audistis infelix sidera tuae **{{answera}}**.

<!-- tabs:end -->


### URL

Data can be loaded from relative or absolute URL. Both JSON and XML data file formats are supported.

<!-- tabs:start -->

#### ** JavaScript **

```javascript
window.$docsify = {
  mustache: {
    data: ['doc/vars.json','data/pom.xml']
  }
}
```

#### ** Markdown **

{{=<% %>=}}
```markdown
**Aditus terras ignoto longa ad captis colunt**

Inde pondera silva tantum glaebas tenetis ab **{{favorite.fruit}}**. Cunctas est orbem profatu
erigitur maximus: in **{{project.version}}** figuris canes. Oete iniaque stta in **{{project.artifactId}}**
ego favent Penei. Lacertos tenebat veteres **{{favorite.color}}**.
```
<%={{ }}=%>

#### ** Preview **

**Aditus terras ignoto longa ad captis colunt**

Inde pondera silva tantum glaebas tenetis ab **{{favorite.fruit}}**. Cunctas est orbem profatu
erigitur maximus: in **{{project.version}}** figuris canes. Oete iniaque stta in **{{project.artifactId}}**
ego favent Penei. Lacertos tenebat veteres **{{favorite.color}}**.

#### ** vars.json **

```json
{
  "favorite": {
    "fruit": "raspberry",
    "color": "brown"
  }
}
```

#### ** pom.xml **

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example.app</groupId>
  <artifactId>foo</artifactId>
  <version>1.2.3</version>
</project>
```

<!-- tabs:end -->

### JavaScript

Data can be loaded from Docsify's JavaScript configuration.

<!-- tabs:start -->

#### ** JavaScript **

```javascript
window.$docsify = {
  mustache: {
    data: {
      author: {
        name: 'John Smith',
        email: 'john.smith@example.com'
      }
    }
  }
}
```

#### ** Markdown **

{{=<% %>=}}
```markdown
**Viri coniuge resistit mariti**

Aderat voluisti excipit caede meus celanda usus, **{{author.name}}**. Qua ad Pagasaea
perenni pleno exprobravit dextra. Nec heros rebelles ambiguus, sunt timuere
suis; per fuerat, dixit muro **{{author.email}}** undique, tanto satos.
```
<%={{ }}=%>

#### ** Preview **

**Viri coniuge resistit mariti**

Aderat voluisti excipit caede meus celanda usus, **{{author.name}}**. Qua ad Pagasaea
perenni pleno exprobravit dextra. Nec heros rebelles ambiguus, sunt timuere
suis; per fuerat, dixit muro **{{author.email}}** undique, tanto satos.

<!-- tabs:end -->