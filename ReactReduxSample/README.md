# React and Redux Sample

## Messaging Sample

### Initial State

```json
{
    messages: [],
    messageReadHistory: []
}
```

#### Message Object Sample

```json
{
    "id": "dab251ba-1a47-c7c7-435a-c43fad3e4f98",
    "from": "Tugberk",
    "content": "hey there!",
    "sentAt": "2016-07-26T00:02:01.403Z"
}
```

#### Message Read Record Object Sample

```json
{
    "dab251ba-1a47-c7c7-435a-c43fad3e4f98": [
        { "by": "Tugberk", "at": "2016-07-26T01:23:21.652Z" },
        { "by": "Alice", "at": "2016-07-27T01:23:21.652Z" }
    ]
}
```

### Action Types

 - `MESSAGE_SENT`
 - `MESSAGE_READ`