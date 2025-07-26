# 职业

## 战士

## 圣骑士

## 猎人

## 盗贼

## 牧师

## 萨满

## 法师

## 术士

## 德鲁伊
```lua
{
    {
        title = "猛虎之怒",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "Base.HasPlayerBuffName",
                option = "猛虎之怒",
                comparison = "=",
                value = false,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "猛虎之怒",
            },
        },
        remark = "补猛虎之怒"
    },
    {
        title = "节能施法",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "Base.HasPlayerBuffName",
                option = "节能施法",
                comparison = "=",
                value = true,
            },
            {
                grouping = false,
                logical = "and",
                detect = "UnitXP.IsBehind",
                comparison = "=",
                value = true,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "撕碎",
                target = "target",
            },
        },
        remark = "节能施法；猛虎之怒不会消费掉节能"
    },
    {
        title = "凶猛撕咬",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "Base.GetComboPoints",
                comparison = ">=",
                value = 4,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "凶猛撕咬",
                target = "target",
            },
        },
        remark = "消星"
    },
    {
        title = "扫击",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "Base.HasTargetBuffName",
                option = "扫击",
                comparison = "=",
                value = false,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "扫击",
                target = "target",
            },
        },
        remark = "补扫击"
    },
    {
        title = "撕扯",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "Base.GetComboPoints",
                comparison = ">=",
                value = 1,
            },
            {
                grouping = false,
                logical = "and",
                detect = "Base.HasTargetBuffName",
                option = "撕扯",
                comparison = "=",
                value = false,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "撕扯",
                target = "target",
            },
        },
        remark = "补撕扯，仅为产生一个流血"
    },
    {
        title = "撕碎",
        conditions = {
            {
                grouping = false,
                logical = "and",
                detect = "UnitXP.IsBehind",
                comparison = "=",
                value = true,
            },
        },
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "撕碎",
                target = "target",
            },
        },
        remark = "背刺"
    },
    {
        title = "爪击",
        operations = {
            {
                action = "Base.CastNameSpell",
                option = "爪击",
                target = "target",
            },
        },
        remark = "攒星"
    },
},
```


[Form天赋talk表单](https://talents.turtle-wow.org/cn/druid?points=oCaYYIFYBLFABAAAAAAAAAAAAAAAFAAoDAAAAAAAAAA= ':include :type=iframe width="100%" height="1000px" frameborder="no"')
